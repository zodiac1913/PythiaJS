# FTS.FTS_PayAreaLocation

Supporting table in the FTS schema related to fts pay area location.

## Snapshot

- Schema: FTS
- Table: FTS_PayAreaLocation
- Priority: supporting schema
- Approximate rows: 11418
- Primary key: PayAreaLocationIdentifier
- Column count: 8

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PayAreaLocationIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | PayAreaIdentifier | bigint | NO |  |  | Identifier that likely links this record to PayArea. [inferred] |
| 3 | PayAreaLocationName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | FipsCode | nvarchar(9) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 6 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 7 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
