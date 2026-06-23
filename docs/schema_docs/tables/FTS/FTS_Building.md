# FTS.FTS_Building

Supporting table in the FTS schema related to fts building.

## Snapshot

- Schema: FTS
- Table: FTS_Building
- Priority: supporting schema
- Approximate rows: 15779
- Primary key: BuildingIdentifier
- Column count: 26

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | BuildingIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | BuildingName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 3 | Street | nvarchar(40) | YES |  |  | Field on FTS.FTS_Building named Street. [inferred] |
| 4 | City | nvarchar(30) | YES |  |  | Field on FTS.FTS_Building named City. [inferred] |
| 5 | State | nvarchar(2) | YES |  |  | Field on FTS.FTS_Building named State. [inferred] |
| 6 | ZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 7 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | Latitude | numeric(17,14) | YES |  |  | Field on FTS.FTS_Building named Latitude. [inferred] |
| 13 | Longitude | numeric(17,14) | YES |  |  | Field on FTS.FTS_Building named Longitude. [inferred] |
| 14 | Agency | nvarchar(100) | YES |  |  | Field on FTS.FTS_Building named Agency. [inferred] |
| 15 | BuildingLocation | geography | YES |  |  | Field on FTS.FTS_Building named BuildingLocation. [inferred] |
| 16 | Bureau | nvarchar(100) | YES |  |  | Field on FTS.FTS_Building named Bureau. [inferred] |
| 17 | BuildingCode | nvarchar(50) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 18 | Ownership | nvarchar(50) | YES |  |  | Field on FTS.FTS_Building named Ownership. [inferred] |
| 19 | OaNumber | nvarchar(50) | YES |  |  | Number used to identify or track this record. [inferred] |
| 20 | Ruid | nvarchar(50) | YES |  |  | Field on FTS.FTS_Building named Ruid. [inferred] |
| 21 | PropertyUse | nvarchar(50) | YES |  |  | Field on FTS.FTS_Building named PropertyUse. [inferred] |
| 22 | SquareFeet | numeric(8,0) | YES |  |  | Field on FTS.FTS_Building named SquareFeet. [inferred] |
| 23 | CalculatedCapacity | numeric(5,0) | YES |  |  | Field on FTS.FTS_Building named CalculatedCapacity. [inferred] |
| 24 | PrimaryContact | nvarchar(50) | YES |  |  | Field on FTS.FTS_Building named PrimaryContact. [inferred] |
| 25 | PrimaryEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 26 | FullAddress | nvarchar(100) | YES |  |  | Field on FTS.FTS_Building named FullAddress. [inferred] |
