# Implementation Plan

- [x] 1. Write bug condition exploration tests
  - **Property 1: Bug Condition** - Context-Aware Autocomplete Parsing
  - **CRITICAL**: These tests MUST FAIL on unfixed code - failure confirms the bugs exist
  - **DO NOT attempt to fix the tests or the code when they fail**
  - **NOTE**: These tests encode the expected behavior - they will validate the fix when they pass after implementation
  - **GOAL**: Surface counterexamples that demonstrate the parsing bugs exist
  - **Scoped PBT Approach**: Scope properties to concrete failing cases for reproducibility
  - Test 1.1: Normal SQL FROM clause - Type `SELECT * FROM users WHERE u` and verify parseQueryContext extracts "users" as table name
  - Test 1.2: Normal SQL table suggestion phase - Type `SELECT field` and verify suggestions show tables first (not all fields)
  - Test 1.3: Postgres-style field list - Type `song select id, title, artist where a` and verify parseQueryContext identifies WHERE context with "song" table
  - Test 1.4: Word extraction - Type `SELECT us` with cursor after "us" and verify current word extracted as "us"
  - Test 1.5: Arrow key navigation - Open field selector and press ArrowDown, verify navigation works
  - Run tests on UNFIXED code in src/ui/index.html
  - **EXPECTED OUTCOME**: Tests FAIL (this is correct - it proves the bugs exist)
  - Document counterexamples found:
    - parseQueryContext returns null/incorrect table when FROM present
    - getSuggestions returns all fields instead of table-specific fields
    - Postgres-style field list parsing fails after comma-separated fields
    - Arrow keys don't navigate field selector (only WASD works)
  - Mark task complete when tests are written, run, and failures are documented
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_

- [x] 2. Write preservation property tests (BEFORE implementing fix)
  - **Property 2: Preservation** - Existing Autocomplete Behaviors
  - **IMPORTANT**: Follow observation-first methodology
  - Observe behavior on UNFIXED code for non-buggy autocomplete interactions
  - Test 2.1: Tab completion - Observe that Tab completes with first suggestion, write property test
  - Test 2.2: Click selection - Observe that clicking suggestions inserts them, write property test
  - Test 2.3: Ctrl+Space field selector - Observe that Ctrl+Space opens modal, write property test
  - Test 2.4: Keyword suggestions - Observe that WHERE/ORDER BY show keyword suggestions, write property test
  - Test 2.5: Schema loading - Observe that schema cache loads for current connection, write property test
  - Test 2.6: Query mode detection - Observe that normal vs Postgres-style detection works, write property test
  - Test 2.7: Query execution conversion - Observe that Postgres-style converts to normal SQL on execution, write property test
  - Property-based testing generates many test cases for stronger guarantees
  - Run tests on UNFIXED code
  - **EXPECTED OUTCOME**: Tests PASS (this confirms baseline behavior to preserve)
  - Mark task complete when tests are written, run, and passing on unfixed code
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_

- [x] 3. Fix query autocomplete parsing logic

  - [x] 3.1 Extract table name from FROM clause in parseQueryContext
    - Add regex pattern to match `FROM tablename` and extract table name
    - Store extracted table name in returned context object
    - Example: `const fromMatch = textBeforeCursor.match(/FROM\s+(\w+)/i); if (fromMatch) table = fromMatch[1];`
    - _Bug_Condition: isBugCondition(input) where input.queryMode == 'normal' AND input.queryText MATCHES /FROM\s+\w+/ AND NOT tableNameExtractedFromFROM(input)_
    - _Expected_Behavior: parseQueryContext SHALL extract table name from FROM clause and return it in context object_
    - _Preservation: Tab completion, click selection, Ctrl+Space, keyword suggestions, schema loading, query mode detection, query execution conversion must remain unchanged_
    - _Requirements: 2.1, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_

  - [x] 3.2 Implement two-phase suggestion in normal SQL mode
    - When user types `SELECT field` without FROM, return `{ mode: 'table', current: lastWord }`
    - This tells getSuggestions to show table suggestions first
    - After table selection and FROM clause, switch to field mode with table context
    - _Bug_Condition: isBugCondition(input) where input.queryMode == 'normal' AND input.queryText MATCHES /SELECT\s+\w+/ AND NOT input.queryText MATCHES /FROM/ AND NOT tableContextExtracted(input)_
    - _Expected_Behavior: parseQueryContext SHALL return table mode when SELECT present without FROM, enabling table suggestions before field suggestions_
    - _Preservation: Tab completion, click selection, Ctrl+Space, keyword suggestions must remain unchanged_
    - _Requirements: 2.2, 3.1, 3.2, 3.3, 3.4_

  - [x] 3.3 Fix Postgres-style comma-separated field list parsing
    - Improve regex to properly split comma-separated fields
    - Detect when user has moved past field selection (typed "where" or "order")
    - Check if `rest` contains WHERE/ORDER BY keywords to determine context transition
    - _Bug_Condition: isBugCondition(input) where input.queryMode == 'postgres' AND input.queryText MATCHES /\w+\s+select\s+\w+(,\s*\w+)+/ AND NOT fieldListParsedCorrectly(input)_
    - _Expected_Behavior: parseQueryContext SHALL correctly parse comma-separated fields in Postgres-style and identify WHERE/ORDER BY context transitions_
    - _Preservation: Query mode detection and Postgres-style to normal SQL conversion must remain unchanged_
    - _Requirements: 2.3, 3.6, 3.8_

  - [x] 3.4 Improve word extraction logic at cursor position
    - Use more robust word extraction: `textBeforeCursor.match(/(\w+)$/)`
    - Handle edge cases: empty strings, cursor at start/end, special characters
    - _Bug_Condition: isBugCondition(input) where currentWordAtCursor(input) != extractedWord(input)_
    - _Expected_Behavior: parseQueryContext SHALL correctly extract the partial word at cursor position for filtering suggestions_
    - _Preservation: All existing autocomplete behaviors must remain unchanged_
    - _Requirements: 2.4, 3.1, 3.2, 3.3, 3.4_

  - [x] 3.5 Add arrow key support to showFieldSelector modal
    - Add cases for `e.key === 'ArrowUp'`, `'ArrowDown'`, `'ArrowLeft'`, `'ArrowRight'`
    - Map ArrowUp to 'w' behavior, ArrowDown to 's', ArrowLeft to 'a', ArrowRight to 'd'
    - Call preventDefault() for arrow keys to prevent page scrolling
    - _Bug_Condition: isBugCondition(input) where fieldSelectorOpen() AND arrowKeyPressed() AND NOT arrowKeyHandled()_
    - _Expected_Behavior: showFieldSelector SHALL handle arrow keys for navigation in addition to WASD keys_
    - _Preservation: Existing WASD navigation and Ctrl+Space invocation must remain unchanged_
    - _Requirements: 2.5, 3.3_

  - [x] 3.6 Update getSuggestions to use table context for field suggestions
    - When mode is 'where' or 'order', use table context to filter fields
    - Ensure table-specific field suggestions when table context available
    - _Bug_Condition: isBugCondition(input) where table context exists but getSuggestions returns all fields instead of table-specific fields_
    - _Expected_Behavior: getSuggestions SHALL provide table-specific field suggestions when table context is available_
    - _Preservation: Keyword suggestions and schema loading must remain unchanged_
    - _Requirements: 2.1, 2.2, 2.6, 3.4, 3.5_

  - [x] 3.7 Verify bug condition exploration tests now pass
    - **Property 1: Expected Behavior** - Context-Aware Autocomplete Parsing
    - **IMPORTANT**: Re-run the SAME tests from task 1 - do NOT write new tests
    - The tests from task 1 encode the expected behavior
    - When these tests pass, it confirms the expected behavior is satisfied
    - Run all 5 bug condition tests from step 1
    - **EXPECTED OUTCOME**: Tests PASS (confirms bugs are fixed)
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6_

  - [x] 3.8 Verify preservation tests still pass
    - **Property 2: Preservation** - Existing Autocomplete Behaviors
    - **IMPORTANT**: Re-run the SAME tests from task 2 - do NOT write new tests
    - Run all 7 preservation property tests from step 2
    - **EXPECTED OUTCOME**: Tests PASS (confirms no regressions)
    - Confirm Tab completion, click selection, Ctrl+Space, keyword suggestions, schema loading, query mode detection, and query execution conversion all still work
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_

- [x] 4. Checkpoint - Ensure all tests pass
  - Verify all bug condition tests pass (task 1 tests should now pass)
  - Verify all preservation tests pass (task 2 tests should still pass)
  - Confirm no regressions in existing autocomplete functionality
  - Ask user if questions arise
