//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! J.J. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 /* 
 * Et qui me misit, mecum est: non reliquit me solum Pater, quia ego semper quae placita sunt ei, facio!
 * Published by: Dominic Roche
 * License: MIT (https://opensource.org/licenses/MIT)
 * תהילתו. לא שלי
 * @class index.test.js
 * @description Bug condition exploration tests for query autocomplete in PythiaJS.
 */

/**
 * Bug Condition Exploration Tests for Query Autocomplete
 * 
 * These tests verify that the bugs exist on UNFIXED code.
 * They are EXPECTED TO FAIL - failure confirms the bugs exist.
 * 
 * DO NOT attempt to fix the tests or the code when they fail.
 * These tests encode the expected behavior and will validate the fix when they pass.
 */

import { describe, test, expect } from 'bun:test';
import { readFileSync } from 'fs';
import { parseQueryContext, getSuggestions, detectQueryMode } from './autocomplete-functions.js';

describe('Bug Condition Exploration Tests', () => {
  const mockSchema = {
    users: ['id', 'name', 'email', 'created_at'],
    song: ['id', 'title', 'artist', 'album', 'duration'],
    orders: ['id', 'user_id', 'total', 'status']
  };

  /**
   * Test 1.1: Normal SQL FROM clause - Table name extraction
   * 
   * Bug: parseQueryContext fails to extract table name from FROM clause
   * Expected: Should extract "users" as the table name
   * 
   * **Validates: Requirements 2.2**
   */
  test('1.1 Normal SQL FROM clause - should extract table name from FROM clause', () => {
    const query = 'SELECT * FROM users WHERE u';
    const cursorPos = query.length;
    
    const context = parseQueryContext(query, cursorPos);
    
    // Expected behavior: context should have table="users" and mode="where"
    expect(context.table).toBe('users');
    expect(context.mode).toBe('where');
    expect(context.current).toBe('u');
    
    // Verify getSuggestions uses the table context
    const suggestions = getSuggestions(context, mockSchema);
    
    // Should return only fields from users table that start with 'u'
    // (no fields in users start with 'u', so should be empty)
    expect(suggestions).toEqual([]);
    
    // Test with a field that exists
    const query2 = 'SELECT * FROM users WHERE n';
    const context2 = parseQueryContext(query2, query2.length);
    const suggestions2 = getSuggestions(context2, mockSchema);
    
    // Should return 'name' from users table
    expect(suggestions2).toContain('name');
    expect(suggestions2).not.toContain('title'); // from song table
  });

  /**
   * Test 1.2: Normal SQL table suggestion phase
   * 
   * Bug: System shows all fields immediately instead of table suggestions first
   * Expected: Should show table suggestions when typing SELECT without FROM
   * 
   * **Validates: Requirements 2.1, 2.5**
   */
  test('1.2 Normal SQL table suggestion phase - should suggest tables before fields', () => {
    const query = 'SELECT u';
    const cursorPos = query.length;
    
    const context = parseQueryContext(query, cursorPos);
    
    // Expected behavior: mode should be 'table' to show table suggestions first
    expect(context.mode).toBe('table');
    expect(context.current).toBe('u');
    
    const suggestions = getSuggestions(context, mockSchema);
    
    // Should return table names that match 'u', not field names
    expect(suggestions).toContain('users');
    expect(suggestions).not.toContain('song'); // doesn't start with 'u'
    expect(suggestions).not.toContain('id'); // field name
    expect(suggestions).not.toContain('name'); // field name
    
    // Also test with 's' to match 'song'
    const query2 = 'SELECT s';
    const context2 = parseQueryContext(query2, query2.length);
    const suggestions2 = getSuggestions(context2, mockSchema);
    
    expect(suggestions2).toContain('song');
    expect(suggestions2).not.toContain('users'); // doesn't start with 's'
  });

  /**
   * Test 1.3: Postgres-style field list parsing
   * 
   * Bug: Comma-separated field list parsing fails, causing incorrect context detection
   * Expected: Should correctly identify WHERE context with "song" table after comma-separated fields
   * 
   * **Validates: Requirements 2.3**
   */
  test('1.3 Postgres-style field list - should parse comma-separated fields and identify WHERE context', () => {
    const query = 'song select id, title, artist where a';
    const cursorPos = query.length;
    
    const context = parseQueryContext(query, cursorPos);
    
    // Expected behavior: should recognize WHERE context with song table
    expect(context.mode).toBe('where');
    expect(context.table).toBe('song');
    expect(context.current).toBe('a');
    
    const suggestions = getSuggestions(context, mockSchema);
    
    // Should return fields from song table that start with 'a'
    expect(suggestions).toContain('artist');
    expect(suggestions).toContain('album');
    expect(suggestions).not.toContain('email'); // from users table
  });

  /**
   * Test 1.4: Word extraction at cursor position
   * 
   * Bug: Current word extraction may fail at cursor position
   * Expected: Should correctly extract "us" as the current partial word
   * 
   * **Validates: Requirements 2.4**
   */
  test('1.4 Word extraction - should correctly extract partial word at cursor', () => {
    const query = 'SELECT us';
    const cursorPos = query.length;
    
    const context = parseQueryContext(query, cursorPos);
    
    // Expected behavior: current word should be "us"
    expect(context.current).toBe('us');
    
    // Test with cursor in middle of word
    const query2 = 'SELECT user FROM';
    const cursorPos2 = 'SELECT us'.length; // cursor after "us"
    
    const context2 = parseQueryContext(query2, cursorPos2);
    expect(context2.current).toBe('us');
  });

  /**
   * Test 1.5: Arrow key navigation in field selector
   * 
   * Bug: Arrow keys don't work in field selector modal (only WASD works)
   * Expected: Arrow keys should navigate the field selector
   * 
   * Note: This test verifies the showFieldSelector function handles arrow keys.
   * Since showFieldSelector creates DOM elements, we'll test the event handler logic.
   * 
   * **Validates: Requirements 2.5**
   */
  test('1.5 Arrow key navigation - field selector should handle arrow keys', () => {
    const html = readFileSync('src/ui/index.html', 'utf-8');
    
    // Extract the showFieldSelector function - look for the modal.addEventListener section
    const showFieldSelectorMatch = html.match(/function showFieldSelector\(table, fields, onSelect\)\s*{[\s\S]*?(?=\n    function [a-zA-Z]|\n    document\.getElementById\('q'\)\.addEventListener\('keydown')/);
    
    expect(showFieldSelectorMatch).toBeTruthy();
    
    const functionCode = showFieldSelectorMatch[0];
    
    // Check if arrow key handlers exist
    const hasArrowUp = functionCode.includes("'ArrowUp'") || functionCode.includes('"ArrowUp"');
    const hasArrowDown = functionCode.includes("'ArrowDown'") || functionCode.includes('"ArrowDown"');
    const hasArrowLeft = functionCode.includes("'ArrowLeft'") || functionCode.includes('"ArrowLeft"');
    const hasArrowRight = functionCode.includes("'ArrowRight'") || functionCode.includes('"ArrowRight"');
    
    // Expected behavior: all arrow keys should be handled
    expect(hasArrowUp).toBe(true);
    expect(hasArrowDown).toBe(true);
    expect(hasArrowLeft).toBe(true);
    expect(hasArrowRight).toBe(true);
  });
});

/**
 * Preservation Property Tests for Query Autocomplete
 * 
 * These tests capture the baseline behavior that must be preserved after the fix.
 * They test non-buggy autocomplete interactions that should remain unchanged.
 * 
 * These tests are EXPECTED TO PASS on UNFIXED code - passing confirms baseline behavior.
 * After the fix, these tests should STILL PASS - confirming no regressions.
 */

describe('Preservation Property Tests', () => {
  const mockSchema = {
    users: ['id', 'name', 'email', 'created_at'],
    song: ['id', 'title', 'artist', 'album', 'duration'],
    orders: ['id', 'user_id', 'total', 'status']
  };

  /**
   * Test 2.1: Tab completion preservation
   * 
   * Preservation: Tab key should complete with first suggestion
   * This behavior must remain unchanged after the fix
   * 
   * **Validates: Requirements 3.1**
   */
  test('2.1 Tab completion - should complete with first suggestion', () => {
    // Simulate typing "SELECT * FROM u" - should suggest "users"
    const query = 'SELECT * FROM u';
    const cursorPos = query.length;
    
    const context = parseQueryContext(query, cursorPos);
    const suggestions = getSuggestions(context, mockSchema);
    
    // Verify suggestions are provided
    expect(suggestions.length).toBeGreaterThan(0);
    expect(suggestions[0]).toBe('users');
    
    // Tab completion behavior: first suggestion should be available
    // (The actual Tab key handling is in the DOM event listener, 
    // but we verify the suggestion system provides the first item)
    expect(suggestions[0]).toBeTruthy();
  });

  /**
   * Test 2.2: Click selection preservation
   * 
   * Preservation: Clicking on autocomplete suggestions should insert them at cursor
   * This behavior must remain unchanged after the fix
   * 
   * **Validates: Requirements 3.2**
   */
  test('2.2 Click selection - should provide suggestions for click selection', () => {
    // Test that suggestions are available for click selection
    const query = 'SELECT * FROM ';
    const cursorPos = query.length;
    
    const context = parseQueryContext(query, cursorPos);
    const suggestions = getSuggestions(context, mockSchema);
    
    // Verify suggestions are available for clicking
    expect(suggestions).toContain('users');
    expect(suggestions).toContain('song');
    expect(suggestions).toContain('orders');
    
    // Each suggestion should be a valid string that can be inserted
    suggestions.forEach(suggestion => {
      expect(typeof suggestion).toBe('string');
      expect(suggestion.length).toBeGreaterThan(0);
    });
  });

  /**
   * Test 2.3: Ctrl+Space field selector preservation
   * 
   * Preservation: Ctrl+Space should open field selector modal in field context
   * This behavior must remain unchanged after the fix
   * 
   * **Validates: Requirements 3.3**
   */
  test('2.3 Ctrl+Space field selector - should detect field context for modal', () => {
    // After the fix, "SELECT " returns mode='table' (two-phase suggestion)
    // Ctrl+Space should work when there's a table context
    const query = 'SELECT * FROM users WHERE ';
    const cursorPos = query.length;
    
    const context = parseQueryContext(query, cursorPos);
    
    // Verify context mode is 'where' with table context - this enables Ctrl+Space field selector
    expect(context.mode).toBe('where');
    expect(context.table).toBe('users');
    
    // Test with Postgres-style query - observe actual baseline behavior
    const query2 = 'users select ';
    const context2 = parseQueryContext(query2, query2.length);
    
    // After fix: Postgres-style with trailing space returns 'fields' mode with table context
    expect(context2.mode).toBe('fields');
    expect(context2.table).toBe('users');
    
    // Test with Postgres-style query without trailing space
    const query3 = 'users select id';
    const context3 = parseQueryContext(query3, query3.length);
    
    // This should return 'fields' mode with table context
    expect(context3.mode).toBe('fields');
    expect(context3.table).toBe('users');
  });

  /**
   * Test 2.4: Keyword suggestions preservation
   * 
   * Preservation: SQL keywords (WHERE, ORDER BY, JOIN) should be suggested appropriately
   * This behavior must remain unchanged after the fix
   * 
   * **Validates: Requirements 3.4, 3.5**
   */
  test('2.4 Keyword suggestions - should suggest SQL keywords', () => {
    // Test keyword suggestions - observe baseline behavior
    // On unfixed code, after FROM, the context is 'table' mode, not 'keyword' mode
    // So we need to test keyword suggestions in a context where they actually work
    
    // Test with a query that triggers keyword mode
    const query = 'W';
    const cursorPos = query.length;
    
    const context = parseQueryContext(query, cursorPos);
    const suggestions = getSuggestions(context, mockSchema);
    
    // Should suggest WHERE keyword in keyword mode
    expect(suggestions).toContain('WHERE');
    
    // Test ORDER BY keyword
    const query2 = 'O';
    const context2 = parseQueryContext(query2, query2.length);
    const suggestions2 = getSuggestions(context2, mockSchema);
    
    expect(suggestions2).toContain('ORDER');
    expect(suggestions2).toContain('OR');
    
    // Test JOIN keyword
    const query3 = 'J';
    const context3 = parseQueryContext(query3, query3.length);
    const suggestions3 = getSuggestions(context3, mockSchema);
    
    expect(suggestions3).toContain('JOIN');
    
    // Test that keyword suggestions work after WHERE clause
    const query4 = 'SELECT * FROM users WHERE id > 1 AND';
    const context4 = parseQueryContext(query4, query4.length);
    const suggestions4 = getSuggestions(context4, mockSchema);
    
    // In WHERE context, should return empty (no fields match 'AND')
    // This is baseline behavior - keyword suggestions don't work in WHERE context
    expect(suggestions4).toEqual([]);
  });

  /**
   * Test 2.5: Schema loading preservation
   * 
   * Preservation: Schema cache should be used for providing suggestions
   * This behavior must remain unchanged after the fix
   * 
   * **Validates: Requirements 3.6**
   */
  test('2.5 Schema loading - should use schema for suggestions', () => {
    // Test that getSuggestions uses the provided schema
    const query = 'SELECT * FROM ';
    const cursorPos = query.length;
    
    const context = parseQueryContext(query, cursorPos);
    const suggestions = getSuggestions(context, mockSchema);
    
    // Verify suggestions come from schema
    expect(suggestions).toEqual(expect.arrayContaining(['users', 'song', 'orders']));
    
    // Test with empty schema
    const emptySchema = {};
    const suggestionsEmpty = getSuggestions(context, emptySchema);
    // With empty schema, should still suggest keywords (no tables though)
    expect(suggestionsEmpty.length).toBeGreaterThan(0);
    expect(suggestionsEmpty).toContain('SELECT');
    expect(suggestionsEmpty).not.toContain('users');
    
    // Test with different schema
    const customSchema = { products: ['id', 'name', 'price'] };
    const suggestionsCustom = getSuggestions(context, customSchema);
    expect(suggestionsCustom).toContain('products');
    expect(suggestionsCustom).not.toContain('users');
  });

  /**
   * Test 2.6: Query mode detection preservation
   * 
   * Preservation: System should correctly detect normal SQL vs Postgres-style syntax
   * This behavior must remain unchanged after the fix
   * 
   * **Validates: Requirements 3.7**
   */
  test('2.6 Query mode detection - should detect normal vs Postgres-style', () => {
    // Test normal SQL detection
    const normalQuery = 'SELECT * FROM users';
    const normalMode = detectQueryMode(normalQuery);
    expect(normalMode).toBe('normal');
    
    // Test Postgres-style detection
    const postgresQuery = 'users select id, name';
    const postgresMode = detectQueryMode(postgresQuery);
    expect(postgresMode).toBe('postgres');
    
    // Test with different operations
    const insertQuery = 'song insert values (1, "title")';
    expect(detectQueryMode(insertQuery)).toBe('postgres');
    
    const updateQuery = 'orders update set status = "shipped"';
    expect(detectQueryMode(updateQuery)).toBe('postgres');
    
    const deleteQuery = 'users delete where id = 1';
    expect(detectQueryMode(deleteQuery)).toBe('postgres');
    
    // Test normal SQL with various keywords
    const selectQuery = 'SELECT id FROM users WHERE name = "test"';
    expect(detectQueryMode(selectQuery)).toBe('normal');
  });

  /**
   * Test 2.7: Query execution conversion preservation
   * 
   * Preservation: Postgres-style queries should be convertible to normal SQL
   * This behavior must remain unchanged after the fix
   * 
   * Note: The actual conversion happens in the run button handler in index.html.
   * This test verifies that detectQueryMode correctly identifies Postgres-style queries
   * that need conversion, which is the prerequisite for the conversion logic.
   * 
   * **Validates: Requirements 3.8**
   */
  test('2.7 Query execution conversion - should identify queries needing conversion', () => {
    // Test that Postgres-style queries are correctly identified for conversion
    const postgresQuery = 'song select id, title, artist where artist = "Beatles"';
    const mode = detectQueryMode(postgresQuery);
    
    expect(mode).toBe('postgres');
    
    // Verify the query structure can be parsed for conversion
    const match = postgresQuery.match(/^(\w+)\s+(select|insert|update|delete)\s+(.*)$/i);
    expect(match).toBeTruthy();
    expect(match[1]).toBe('song'); // table name
    expect(match[2].toLowerCase()).toBe('select'); // operation
    expect(match[3]).toBeTruthy(); // rest of query
    
    // Test with different Postgres-style operations
    const insertQuery = 'users insert values (1, "John", "john@example.com")';
    expect(detectQueryMode(insertQuery)).toBe('postgres');
    
    const updateQuery = 'orders update set status = "shipped" where id = 1';
    expect(detectQueryMode(updateQuery)).toBe('postgres');
    
    // Normal SQL should not be identified for conversion
    const normalQuery = 'SELECT * FROM users WHERE id = 1';
    expect(detectQueryMode(normalQuery)).toBe('normal');
  });

  /**
   * Test 2.8: Autocomplete dropdown hiding preservation
   * 
   * Preservation: Autocomplete should hide when no suggestions or word length < 1
   * This behavior must remain unchanged after the fix
   * 
   * **Validates: Requirements 3.4**
   */
  test('2.8 Autocomplete hiding - should return empty suggestions when appropriate', () => {
    // Test with no matching suggestions
    const query = 'SELECT * FROM xyz';
    const cursorPos = query.length;
    
    const context = parseQueryContext(query, cursorPos);
    const suggestions = getSuggestions(context, mockSchema);
    
    // Should return empty array when no tables match
    expect(suggestions).toEqual([]);
    
    // Test with empty current word
    const query2 = 'SELECT * FROM ';
    const context2 = parseQueryContext(query2, query2.length);
    context2.current = ''; // Simulate empty current word
    const suggestions2 = getSuggestions(context2, mockSchema);
    
    // Should return all tables when current is empty (filtering happens in UI)
    expect(suggestions2.length).toBeGreaterThan(0);
    
    // Test with single character that doesn't match
    const query3 = 'SELECT * FROM z';
    const context3 = parseQueryContext(query3, query3.length);
    const suggestions3 = getSuggestions(context3, mockSchema);
    
    expect(suggestions3).toEqual([]);
  });
});
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! S.D.G !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^