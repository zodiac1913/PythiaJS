# RPLR.RPLR_TableIndex

Supporting table in the RPLR schema related to rplr table index.

## Snapshot

- Schema: RPLR
- Table: RPLR_TableIndex
- Priority: supporting schema
- Approximate rows: 196
- Primary key: TableIndexIdentifier
- Column count: 12

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | TableIndexIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | IndexName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | IndexType | nvarchar(50) | NO |  |  | Type or category used to classify the record. [inferred] |
| 4 | TableIdentifier | bigint | NO |  |  | Identifier that likely links this record to Table. [inferred] |
| 5 | TableName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 6 | ColumnIdentifier | bigint | NO |  |  | Identifier that likely links this record to Column. [inferred] |
| 7 | ColumnName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 8 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
