# dbo.DBO_HrdhDataCatalog

Supporting table in the dbo schema related to dbo hrdh data catalog.

## Snapshot

- Schema: dbo
- Table: DBO_HrdhDataCatalog
- Priority: supporting schema
- Approximate rows: 45
- Primary key: HrdhDataCatalogIdentifier
- Column count: 10

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | HrdhDataCatalogIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | HrdhSchema | nvarchar(100) | YES |  |  | Field on dbo.DBO_HrdhDataCatalog named HrdhSchema. [inferred] |
| 3 | TableViewName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | TableOrView | nvarchar(10) | YES |  |  | Field on dbo.DBO_HrdhDataCatalog named TableOrView. [inferred] |
| 5 | TableViewSource | nvarchar(500) | YES |  |  | Field on dbo.DBO_HrdhDataCatalog named TableViewSource. [inferred] |
| 6 | Columns | nvarchar(max) | YES |  |  | Field on dbo.DBO_HrdhDataCatalog named Columns. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
