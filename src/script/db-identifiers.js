import { sqlReserved } from './state.js';

const providerRules = {
  mssql: {
    quoteLeft: '[',
    quoteRight: ']',
    stripChars: ['[', ']']
  },
  postgres: {
    quoteLeft: '"',
    quoteRight: '"',
    stripChars: ['"']
  },
  sqlite: {
    quoteLeft: '"',
    quoteRight: '"',
    stripChars: ['"']
  },
  mysql: {
    quoteLeft: '`',
    quoteRight: '`',
    stripChars: ['`']
  },
  oracle: {
    quoteLeft: '"',
    quoteRight: '"',
    stripChars: ['"']
  }
};

function getProviderRule(dbType) {
  return providerRules[dbType] || null;
}

function stripProviderQuotes(token, dbType) {
  let clean = token;
  const rule = getProviderRule(dbType);
  if (!rule) return clean;

  rule.stripChars.forEach(function(ch) {
    clean = clean.replaceAll(ch, '');
  });
  return clean;
}

export function normalizeIdentifierToken(token, dbType) {
  if (!token) return '';
  return stripProviderQuotes(token, dbType).toLowerCase();
}

export function escapeFieldIdentifier(fieldName, dbType) {
  if (fieldName === '*') return fieldName;

  const entry = sqlReserved[dbType];
  if (!entry) return fieldName;

  const isReserved = entry.words.some(function(word) {
    return word.toLowerCase() === fieldName.toLowerCase();
  });

  if (isReserved) {
    return entry.escapeLeft + fieldName + entry.escapeRight;
  }

  return fieldName;
}

export function formatTableIdentifier(tableName, dbType) {
  if (!tableName) return tableName;
  const rule = getProviderRule(dbType);
  if (!rule) return tableName;

  return tableName
    .split('.')
    .map(function(part) {
      const clean = stripProviderQuotes(part.trim(), dbType);
      return rule.quoteLeft + clean + rule.quoteRight;
    })
    .join('.');
}

export function resolveSchemaTableKey(schema, requestedTable, dbType) {
  if (!requestedTable) return null;
  if (schema[requestedTable]) return requestedTable;

  const requestedNorm = normalizeIdentifierToken(requestedTable, dbType);
  return Object.keys(schema).find(function(tableKey) {
    return normalizeIdentifierToken(tableKey, dbType) === requestedNorm;
  }) || null;
}
