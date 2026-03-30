# Query Autocomplete Fix - Bugfix Design

## Overview

The query autocomplete system in src/ui/index.html has broken parsing logic that prevents context-aware suggestions from appearing correctly. The system supports two query modes (normal SQL and Postgres-style) but fails to extract table context in normal SQL mode and doesn't properly handle comma-separated field lists in Postgres-style mode. This fix will correct the parsing logic in `parseQueryContext` and `getSuggestions` functions to properly detect query state and provide accurate table-specific field suggestions. Additionally, we'll add arrow key support to the field selector modal and ensure Postgres-style queries are converted to normal SQL before execution.

## Glossary

- **Bug_Condition (C)**: The condition that triggers incorrect or missing autocomplete suggestions - when the parsing logic fails to extract table context or properly parse field lists
- **Property (P)**: The desired behavior when autocomplete is triggered - context-aware suggestions based on query structure and table context
- **Preservation**: Existing autocomplete behaviors (Tab completion, Ctrl+Space field selector, click selection, keyword suggestions) that must remain unchanged
- **parseQueryContext**: The function in src/ui/index.html that analyzes query text to determine current context (table mode, field mode, where clause, etc.)
- **getSuggestions**: The function that returns appropriate suggestions based on the parsed context
- **detectQueryMode**: The function that determines if the query is normal SQL or Postgres-style
- **showFieldSelector**: The modal function that displays field selection UI with WASD navigation
- **Normal SQL Mode**: Traditional SQL syntax like `SELECT fields FROM table WHERE...`
- **Postgres-style Mode**: Alternative syntax like `table select fields where...`

## Bug Details

### Bug Condition

The bug manifests when the user types SQL queries and expects context-aware autocomplete suggestions. The `parseQueryContext` function fails to correctly identify the current query state, and `getSuggestions` doesn't provide table-specific field suggestions because table context is not extracted from FROM clauses or Postgres-style table prefixes.

**Formal Specification:**
```
FUNCTION isBugCondition(input)
  INPUT: input of type { queryText: string, cursorPosition: number, queryMode: string }
  OUTPUT: boolean
  
  RETURN (
    // Normal SQL: typing after SELECT without FROM - should suggest tables first
    (input.queryMode == 'normal' AND 
     input.queryText MATCHES /SELECT\s+\w+/ AND 
     NOT input.queryText MATCHES /FROM/ AND
     NOT tableContextExtracted(input))
    OR
    // Normal SQL: typing after FROM - table name not extracted for subsequent field suggestions
    (input.queryMode == 'normal' AND 
     input.queryText MATCHES /FROM\s+\w+/ AND
     NOT tableNameExtractedFromFROM(input))
    OR
    // Postgres-style: comma-separated fields not parsed correctly
    (input.queryMode == 'postgres' AND
     input.queryText MATCHES /\w+\s+select\s+\w+(,\s*\w+)+/ AND
     NOT fieldListParsedCorrectly(input))
    OR
    // Partial word at cursor not extracted correctly
    (currentWordAtCursor(input) != extractedWord(input))
    OR
    // Field selector modal missing arrow key support
    (fieldSelectorOpen() AND arrowKeyPressed() AND NOT arrowKeyHandled())
  )
END FUNCTION
```

### Examples

- **Normal SQL - Missing Table Context**: User types `SELECT id FROM users WHERE ` and expects field suggestions from the "users" table, but the system doesn't extract "users" from the FROM clause, so suggestions are incorrect or missing.

- **Normal SQL - Premature Field Suggestions**: User types `SELECT field` and expects to see table suggestions first (to establish context), then after selecting a table, field suggestions should appear. Currently, the system shows all fields from all tables without table context.

- **Postgres-style - Field List Parsing**: User types `song select id, title, artist where ` and expects field suggestions from the "song" table, but the comma-separated field list confuses the parser, causing incorrect context detection.

- **Partial Word Extraction**: User types `SELECT us` (cursor after "us") and expects suggestions filtered to items starting with "us", but the word extraction logic may fail, showing all suggestions or none.

- **Arrow Key Navigation**: User opens field selector modal with Ctrl+Space and presses arrow keys to navigate, but only WASD keys work - arrow keys should also be supported.

## Expected Behavior

### Preservation Requirements

**Unchanged Behaviors:**
- Tab key completion with first suggestion must continue to work
- Ctrl+Space must continue to open field selector modal
- Click selection on autocomplete suggestions must continue to work
- Autocomplete dropdown must hide when no suggestions or word length < 1
- SQL keyword suggestions (WHERE, ORDER BY, JOIN) must continue to work
- Schema cache loading for current connection must continue to work
- Query mode detection (normal vs Postgres-style) must continue to work
- Postgres-style to normal SQL conversion on query execution must continue to work

**Scope:**
All inputs that do NOT involve the specific parsing bugs (table context extraction, field list parsing, word extraction) should be completely unaffected by this fix. This includes:
- Tab completion behavior
- Click-to-select behavior
- Ctrl+Space field selector invocation
- Keyword suggestions
- Schema loading
- Query execution and conversion

## Hypothesized Root Cause

Based on the bug description and code analysis, the most likely issues are:

1. **Incomplete FROM Clause Parsing**: The `parseQueryContext` function checks for the presence of FROM but doesn't extract the table name that follows it. The function needs to parse the table name after FROM and return it in the context object so `getSuggestions` can provide table-specific field suggestions.

2. **Missing Table Suggestion Phase in Normal SQL**: When user types `SELECT field` without FROM, the system should first suggest tables (to establish context), then switch to field suggestions after table selection. Currently, it jumps directly to field suggestions without table context.

3. **Postgres-style Field List Parsing**: The regex pattern in `parseQueryContext` for Postgres-style mode doesn't account for comma-separated fields. The pattern `^(\w+)\s+(select|insert|update|delete)\s+(.*)` captures everything after the operation as "rest", but the logic doesn't properly parse comma-separated fields to determine when the user has moved past field selection into WHERE/ORDER BY clauses.

4. **Word Extraction Logic**: The current word extraction uses `textBeforeCursor.split(/\s+/)` and takes the last element, but this may not correctly handle cases where the cursor is in the middle of a word or when there are special characters.

5. **Missing Arrow Key Support**: The `showFieldSelector` function only handles WASD keys (w, s, a, d) in the keydown event listener. Arrow keys (ArrowUp, ArrowDown, ArrowLeft, ArrowRight) need to be added to the same navigation logic.

## Correctness Properties

Property 1: Bug Condition - Context-Aware Autocomplete Suggestions

_For any_ query input where the bug condition holds (isBugCondition returns true), the fixed parseQueryContext and getSuggestions functions SHALL correctly extract table context from FROM clauses or Postgres-style prefixes, parse comma-separated field lists accurately, extract the current partial word at cursor position, and provide context-appropriate suggestions (tables when needed, then table-specific fields after table context is established).

**Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6**

Property 2: Preservation - Existing Autocomplete Behaviors

_For any_ autocomplete interaction that does NOT involve the specific parsing bugs (table context extraction, field list parsing, word extraction), the fixed code SHALL produce exactly the same behavior as the original code, preserving Tab completion, Ctrl+Space field selector, click selection, keyword suggestions, schema loading, and query mode detection.

**Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8**

## Fix Implementation

### Changes Required

Assuming our root cause analysis is correct:

**File**: `src/ui/index.html`

**Functions to Modify**: `parseQueryContext`, `getSuggestions`, `showFieldSelector`

**Specific Changes**:

1. **Extract Table Name from FROM Clause** (in `parseQueryContext`):
   - Add regex pattern to match `FROM tablename` and extract the table name
   - Store the extracted table name in the returned context object
   - Example: `const fromMatch = textBeforeCursor.match(/FROM\s+(\w+)/i); if (fromMatch) table = fromMatch[1];`

2. **Implement Two-Phase Suggestion in Normal SQL** (in `parseQueryContext`):
   - When user types `SELECT field` without FROM, return `{ mode: 'table', current: lastWord }`
   - This tells `getSuggestions` to show table suggestions first
   - After user selects a table and continues typing, detect FROM clause and switch to field mode with table context

3. **Fix Postgres-style Field List Parsing** (in `parseQueryContext`):
   - Improve the regex to properly split comma-separated fields
   - Detect when user has moved past field selection (e.g., typed "where" or "order")
   - Example: Check if `rest` contains WHERE/ORDER BY keywords to determine context transition

4. **Improve Word Extraction Logic** (in `parseQueryContext`):
   - Use more robust word extraction that handles cursor position correctly
   - Consider using `textBeforeCursor.match(/(\w+)$/)`  to get the last word being typed
   - Handle edge cases like empty strings and special characters

5. **Add Arrow Key Support to Field Selector** (in `showFieldSelector`):
   - Add cases for `e.key === 'ArrowUp'`, `'ArrowDown'`, `'ArrowLeft'`, `'ArrowRight'`
   - Map ArrowUp to same behavior as 'w', ArrowDown to 's', ArrowLeft to 'a', ArrowRight to 'd'
   - Ensure preventDefault() is called for arrow keys to prevent page scrolling

6. **Update getSuggestions for Table Context** (in `getSuggestions`):
   - When mode is 'where' or 'order', use the table context to filter fields
   - Ensure table-specific field suggestions are provided when table context is available

## Testing Strategy

### Validation Approach

The testing strategy follows a two-phase approach: first, surface counterexamples that demonstrate the bugs on unfixed code, then verify the fix works correctly and preserves existing behavior.

### Exploratory Bug Condition Checking

**Goal**: Surface counterexamples that demonstrate the bugs BEFORE implementing the fix. Confirm or refute the root cause analysis. If we refute, we will need to re-hypothesize.

**Test Plan**: Write tests that simulate typing queries in both normal SQL and Postgres-style modes, checking that parseQueryContext returns correct context and getSuggestions provides appropriate suggestions. Run these tests on the UNFIXED code to observe failures and understand the root cause.

**Test Cases**:
1. **Normal SQL - FROM Clause Test**: Type `SELECT * FROM users WHERE u` and verify that parseQueryContext extracts "users" as the table and getSuggestions returns fields from the users table (will fail on unfixed code - table not extracted)
2. **Normal SQL - Table Suggestion Phase**: Type `SELECT field` and verify that suggestions show tables first, not all fields (will fail on unfixed code - shows all fields immediately)
3. **Postgres-style - Field List Test**: Type `song select id, title, artist where a` and verify that parseQueryContext correctly identifies WHERE context with "song" table (will fail on unfixed code - field list parsing broken)
4. **Word Extraction Test**: Type `SELECT us` with cursor after "us" and verify that current word is extracted as "us" (may fail on unfixed code)
5. **Arrow Key Navigation Test**: Open field selector and press ArrowDown, verify navigation works (will fail on unfixed code - only WASD supported)

**Expected Counterexamples**:
- parseQueryContext returns null or incorrect table name when FROM clause is present
- getSuggestions returns all fields from all tables instead of table-specific fields
- Postgres-style field list parsing fails to recognize WHERE clause after comma-separated fields
- Arrow keys don't navigate in field selector modal

### Fix Checking

**Goal**: Verify that for all inputs where the bug condition holds, the fixed functions produce the expected behavior.

**Pseudocode:**
```
FOR ALL input WHERE isBugCondition(input) DO
  context := parseQueryContext_fixed(input.queryText, input.cursorPosition)
  suggestions := getSuggestions_fixed(context, schema)
  ASSERT contextIsCorrect(context, input)
  ASSERT suggestionsAreTableSpecific(suggestions, context.table)
END FOR
```

### Preservation Checking

**Goal**: Verify that for all inputs where the bug condition does NOT hold, the fixed functions produce the same result as the original functions.

**Pseudocode:**
```
FOR ALL input WHERE NOT isBugCondition(input) DO
  ASSERT parseQueryContext_original(input) = parseQueryContext_fixed(input)
  ASSERT getSuggestions_original(context) = getSuggestions_fixed(context)
  ASSERT fieldSelectorBehavior_original() = fieldSelectorBehavior_fixed()
END FOR
```

**Testing Approach**: Property-based testing is recommended for preservation checking because:
- It generates many test cases automatically across the input domain
- It catches edge cases that manual unit tests might miss
- It provides strong guarantees that behavior is unchanged for all non-buggy inputs

**Test Plan**: Observe behavior on UNFIXED code first for Tab completion, click selection, and Ctrl+Space, then write property-based tests capturing that behavior.

**Test Cases**:
1. **Tab Completion Preservation**: Observe that Tab completes with first suggestion on unfixed code, then verify this continues after fix
2. **Click Selection Preservation**: Observe that clicking suggestions inserts them correctly on unfixed code, then verify this continues after fix
3. **Ctrl+Space Preservation**: Observe that Ctrl+Space opens field selector on unfixed code, then verify this continues after fix
4. **Keyword Suggestions Preservation**: Observe that typing WHERE/ORDER BY shows keyword suggestions on unfixed code, then verify this continues after fix

### Unit Tests

- Test parseQueryContext with various query strings (normal SQL with FROM, without FROM, Postgres-style with fields, with WHERE)
- Test getSuggestions with different context modes (table, fields, where, order) and verify correct suggestions
- Test word extraction at different cursor positions
- Test field selector keyboard navigation with both WASD and arrow keys
- Test edge cases (empty query, cursor at start, cursor at end, special characters)

### Property-Based Tests

- Generate random query strings in normal SQL mode and verify parseQueryContext extracts table names correctly when FROM is present
- Generate random Postgres-style queries with varying field counts and verify field list parsing
- Generate random cursor positions in queries and verify word extraction is correct
- Test that all non-buggy autocomplete interactions (Tab, click, Ctrl+Space) produce identical results before and after fix

### Integration Tests

- Test full autocomplete flow in normal SQL mode: type SELECT, see table suggestions, select table, see field suggestions from that table
- Test full autocomplete flow in Postgres-style mode: type table name, type select, see field suggestions from that table, type comma-separated fields, type where, see field suggestions
- Test field selector modal with both WASD and arrow key navigation, verify selection and confirmation work
- Test query execution with Postgres-style syntax conversion to normal SQL
