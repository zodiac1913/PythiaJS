# FTS.FTS_BuildingCode

Supporting table in the FTS schema related to fts building code.

## Snapshot

- Schema: FTS
- Table: FTS_BuildingCode
- Priority: supporting schema
- Approximate rows: 23
- Primary key: BuildingCodeIdentifier
- Column count: 8

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | BuildingCodeIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | BuildingIdentifier | bigint | NO |  |  | Identifier that likely links this record to Building. [inferred] |
| 3 | BuildingCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 4 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 5 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 6 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 8 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
