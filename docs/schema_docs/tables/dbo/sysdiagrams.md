# dbo.sysdiagrams

Supporting table in the dbo schema related to sysdiagrams.

## Snapshot

- Schema: dbo
- Table: sysdiagrams
- Priority: supporting schema
- Approximate rows: 19
- Primary key: diagram_id
- Column count: 5

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | name | sysname | NO |  |  | Name or display label for this value. [inferred] |
| 2 | principal_id | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 3 | diagram_id | int | NO | PK, IDENTITY |  | Numeric value associated with this record. [inferred] |
| 4 | version | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 5 | definition | varbinary(max) | YES |  |  | Field on dbo.sysdiagrams named definition. [inferred] |
