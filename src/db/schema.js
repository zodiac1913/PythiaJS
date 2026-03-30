export const schema = {
  queries: {
    sqlite: `
      CREATE TABLE IF NOT EXISTS queries (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        query TEXT NOT NULL,
        db_type TEXT NOT NULL,
        db_alias TEXT NOT NULL,
        created_at DATETIME DEFAULT (datetime('now','localtime')),
        UNIQUE(query, db_alias)
      );
    `
  },
  connections: {
    sqlite: `
      CREATE TABLE IF NOT EXISTS connections (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        type TEXT NOT NULL,
        config TEXT NOT NULL
      );
    `
  },
  logs: {
    sqlite: `
      CREATE TABLE IF NOT EXISTS logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        level TEXT NOT NULL DEFAULT 'info',
        source TEXT NOT NULL DEFAULT 'server',
        connection TEXT DEFAULT NULL,
        message TEXT NOT NULL,
        detail TEXT,
        created_at DATETIME DEFAULT (datetime('now','localtime'))
      );
    `
  }
};
