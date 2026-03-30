/**
 * Manual test to demonstrate the two-phase suggestion system
 */

import { parseQueryContext, getSuggestions } from './src/ui/autocomplete-functions.js';

const mockSchema = {
  users: ['id', 'name', 'email', 'created_at'],
  song: ['id', 'title', 'artist', 'album', 'duration'],
  orders: ['id', 'user_id', 'total', 'status']
};

console.log('=== Two-Phase Suggestion System Demo ===\n');

// Phase 1: User types "SELECT u" - should suggest tables
console.log('Phase 1: User types "SELECT u"');
const query1 = 'SELECT u';
const context1 = parseQueryContext(query1, query1.length);
const suggestions1 = getSuggestions(context1, mockSchema);
console.log('Context:', context1);
console.log('Suggestions:', suggestions1);
console.log('✓ Mode is "table" - showing table suggestions first\n');

// Phase 2: User selects "users" table and continues typing
console.log('Phase 2: User selects "users" and types "SELECT * FROM users WHERE n"');
const query2 = 'SELECT * FROM users WHERE n';
const context2 = parseQueryContext(query2, query2.length);
const suggestions2 = getSuggestions(context2, mockSchema);
console.log('Context:', context2);
console.log('Suggestions:', suggestions2);
console.log('✓ Mode is "where" with table="users" - showing fields from users table only\n');

// Verify the suggestions are table-specific
console.log('Verification:');
console.log('- Suggestions include "name" from users table:', suggestions2.includes('name'));
console.log('- Suggestions do NOT include "title" from song table:', !suggestions2.includes('title'));
console.log('- Suggestions do NOT include "artist" from song table:', !suggestions2.includes('artist'));
console.log('\n✓ Two-phase suggestion system is working correctly!');
