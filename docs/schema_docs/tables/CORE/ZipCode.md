# CORE.ZipCode

Business-critical table in the CORE schema related to zip code.

## Snapshot

- Schema: CORE
- Table: ZipCode
- Priority: primary schema
- Approximate rows: 43191
- Primary key: not declared
- Column count: 10

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ZipCodeIdentifier | bigint | NO | IDENTITY |  | Identifier that likely links this record to ZipCode. [inferred] |
| 2 | ZipCode | nvarchar(5) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | City | nvarchar(50) | YES |  |  | Field on CORE.ZipCode named City. [inferred] |
| 4 | State | nvarchar(2) | YES |  |  | Field on CORE.ZipCode named State. [inferred] |
| 5 | Latitude | float | YES |  |  | Numeric value associated with this record. [inferred] |
| 6 | Longitude | float | YES |  |  | Numeric value associated with this record. [inferred] |
| 7 | AddUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime | YES |  |  | Date and time associated with this attribute or event. [inferred] |
