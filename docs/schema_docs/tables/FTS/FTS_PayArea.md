# FTS.FTS_PayArea

Supporting table in the FTS schema related to fts pay area.

## Snapshot

- Schema: FTS
- Table: FTS_PayArea
- Priority: supporting schema
- Approximate rows: 594
- Primary key: PayAreaIdentifier
- Column count: 7

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PayAreaIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | PayAreaName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | Year | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 4 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 5 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 7 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
