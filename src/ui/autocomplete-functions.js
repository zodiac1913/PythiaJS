//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! J.J. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 /* 
 * Et qui me misit, mecum est: non reliquit me solum Pater, quia ego semper quae placita sunt ei, facio!
 * Published by: Dominic Roche
 * License: MIT (https://opensource.org/licenses/MIT)
 * תהילתו. לא שלי
 * @class autocomplete-functions.js
 * @description Provides autocomplete functionality for SQL queries in PythiaJS.
 */

/**
 * Extracted autocomplete functions from index.html for testing
 * This file contains the core logic that will be tested
 */

const sqlKeywords = ['SELECT','FROM','WHERE','INSERT','UPDATE','DELETE','JOIN','LEFT','RIGHT','INNER','OUTER','ON','AND','OR','ORDER','BY','GROUP','HAVING','LIMIT','OFFSET','AS','DISTINCT','COUNT','SUM','AVG','MAX','MIN'];

export function detectQueryMode(text) {
  // Check if it's Postgres-style: table operation ...
  const postgresMatch = text.match(/^(\w+)\s+(select|insert|update|delete)/i);
  if (postgresMatch) return 'postgres';
  
  // Check if it starts with SELECT (normal SQL)
  if (text.trim().toUpperCase().startsWith('SELECT')) return 'normal';
  
  // Default to normal SQL
  return 'normal';
}

export function parseQueryContext(text, cursorPos) {
  const textBeforeCursor = text.substring(0, cursorPos);
  const mode = detectQueryMode(text);
  
  // Helper function to extract current word at cursor using robust regex
  function extractCurrentWord(text) {
    if (!text) return '';
    const match = text.match(/(\w+)$/);
    return match ? match[1] : '';
  }
  
  if (mode === 'postgres') {
    // Parse Postgres-style: table operation fields/where/order
    const match = textBeforeCursor.match(/^(\w+)\s+(select|insert|update|delete)\s+(.*)/i);
    if (match) {
      const [, table, operation, rest] = match;
      
      if (operation.toLowerCase() === 'select') {
        // Check if we're in WHERE or ORDER BY context
        // Use word boundary regex to match keywords as standalone words, not as part of field names
        const whereMatch = rest.match(/\bWHERE\b/i);
        const orderMatch = rest.match(/\bORDER\s+BY\b|\bORDER\b/i);
        
        if (whereMatch) {
          // Extract the part after WHERE
          const afterWhereMatch = rest.match(/\bWHERE\s+(.*)$/i);
          const afterWhere = afterWhereMatch ? afterWhereMatch[1] : '';
          const currentWord = extractCurrentWord(afterWhere);
          return { mode: 'where', table, current: currentWord };
        } else if (orderMatch) {
          const afterOrderMatch = rest.match(/\bORDER\s+(?:BY\s+)?(.*)$/i);
          const afterOrder = afterOrderMatch ? afterOrderMatch[1] : '';
          const currentWord = extractCurrentWord(afterOrder);
          return { mode: 'order', table, current: currentWord };
        } else {
          // Still in field selection mode - handle comma-separated fields
          // Split by commas to get individual fields
          const fields = rest.split(',').map(f => f.trim());
          const lastField = fields[fields.length - 1] || '';
          
          // Extract the current word from the last field using robust regex
          const currentWord = extractCurrentWord(lastField);
          
          return { mode: 'fields', table, current: currentWord };
        }
      }
    }
    return { mode: 'table', current: extractCurrentWord(textBeforeCursor) };
  } else {
    // Parse normal SQL
    const upperText = textBeforeCursor.toUpperCase();
    
    // Use robust word extraction instead of split
    const currentWord = extractCurrentWord(textBeforeCursor);
    
    // Extract table name from FROM clause
    let table = null;
    const fromMatch = textBeforeCursor.match(/FROM\s+([^\s,;]+)/i);
    if (fromMatch) {
      table = fromMatch[1];
    }
    
    if (upperText.includes('FROM') && !upperText.includes('WHERE') && !upperText.includes('ORDER BY') && !upperText.includes('JOIN')) {
      return { mode: 'table', table, current: currentWord };
    } else if (upperText.includes('SELECT') && !upperText.includes('FROM')) {
      // Two-phase suggestion: show tables first, then fields after table selection
      return { mode: 'table', table: null, current: currentWord };
    } else if (upperText.includes('WHERE')) {
      return { mode: 'where', table, current: currentWord };
    } else if (upperText.includes('ORDER BY')) {
      return { mode: 'order', table, current: currentWord };
    }
    
    // Default: could be table name or keyword - return 'table' mode to suggest both
    return { mode: 'table', table: null, current: currentWord };
  }
}

export function getSuggestions(context, schema) {
  const { mode, table, current } = context;
  
  if (mode === 'table') {
    // Suggest both tables and keywords that match the current word
    const tables = Object.keys(schema).filter(t => t.toLowerCase().startsWith(current.toLowerCase()));
    const keywords = sqlKeywords.filter(k => k.toLowerCase().startsWith(current.toLowerCase()));
    return [...tables, ...keywords];
  } else if (mode === 'fields') {
    if (table && schema[table]) {
      const fields = ['*', ...schema[table]];
      return fields.filter(f => f.toLowerCase().startsWith(current.toLowerCase()));
    } else {
      // All fields from current schema
      const allFields = new Set();
      Object.values(schema).forEach(tableFields => {
        tableFields.forEach(field => allFields.add(field));
      });
      return ['*', ...Array.from(allFields)].filter(f => f.toLowerCase().startsWith(current.toLowerCase()));
    }
  } else if (mode === 'where' || mode === 'order') {
    if (table && schema[table]) {
      return schema[table].filter(f => f.toLowerCase().startsWith(current.toLowerCase()));
    }
    return [];
  } else if (mode === 'keyword') {
    return sqlKeywords.filter(k => k.toLowerCase().startsWith(current.toLowerCase()));
  }
  
  return [];
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! S.D.G !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^