# FTS.FTS_ZipCode

Supporting table in the FTS schema related to fts zip code.

## Snapshot

- Schema: FTS
- Table: FTS_ZipCode
- Priority: supporting schema
- Approximate rows: 43191
- Primary key: ZipCodeIdentifier
- Column count: 12

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ZipCodeIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ZipCode | nvarchar(5) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | City | nvarchar(50) | YES |  |  | Field on FTS.FTS_ZipCode named City. [inferred] |
| 4 | State | nvarchar(2) | YES |  |  | Field on FTS.FTS_ZipCode named State. [inferred] |
| 5 | Latitude | float | YES |  |  | Numeric value associated with this record. [inferred] |
| 6 | Longitude | float | YES |  |  | Numeric value associated with this record. [inferred] |
| 7 | County | nvarchar(25) | YES |  |  | Field on FTS.FTS_ZipCode named County. [inferred] |
| 8 | FipsCode | nvarchar(5) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 9 | AddUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddTimeStamp | datetime | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime | YES |  |  | Date and time associated with this attribute or event. [inferred] |
