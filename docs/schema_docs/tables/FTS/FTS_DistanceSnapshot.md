# FTS.FTS_DistanceSnapshot

Supporting table in the FTS schema related to fts distance snapshot.

## Snapshot

- Schema: FTS
- Table: FTS_DistanceSnapshot
- Priority: supporting schema
- Approximate rows: 132315
- Primary key: DistanceSnapshotIdentifier
- Column count: 26

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | DistanceSnapshotIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | EmployeeStreet1 | nvarchar(40) | YES |  |  | Field on FTS.FTS_DistanceSnapshot named EmployeeStreet1. [inferred] |
| 4 | EmployeeStreet2 | nvarchar(40) | YES |  |  | Field on FTS.FTS_DistanceSnapshot named EmployeeStreet2. [inferred] |
| 5 | EmployeeCity | nvarchar(30) | YES |  |  | Field on FTS.FTS_DistanceSnapshot named EmployeeCity. [inferred] |
| 6 | EmployeeState | nvarchar(2) | YES |  |  | Field on FTS.FTS_DistanceSnapshot named EmployeeState. [inferred] |
| 7 | EmployeeZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 8 | EmployeeLatitude | numeric(17,14) | YES |  |  | Field on FTS.FTS_DistanceSnapshot named EmployeeLatitude. [inferred] |
| 9 | EmployeeLongitude | numeric(17,14) | YES |  |  | Field on FTS.FTS_DistanceSnapshot named EmployeeLongitude. [inferred] |
| 10 | BuildingIdentifier | bigint | NO |  |  | Identifier that likely links this record to Building. [inferred] |
| 11 | BuildingStreet | nvarchar(40) | YES |  |  | Field on FTS.FTS_DistanceSnapshot named BuildingStreet. [inferred] |
| 12 | BuildingCity | nvarchar(30) | YES |  |  | Field on FTS.FTS_DistanceSnapshot named BuildingCity. [inferred] |
| 13 | BuildingState | nvarchar(2) | YES |  |  | Field on FTS.FTS_DistanceSnapshot named BuildingState. [inferred] |
| 14 | BuildingZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 15 | BuildingLatitude | numeric(17,14) | YES |  |  | Field on FTS.FTS_DistanceSnapshot named BuildingLatitude. [inferred] |
| 16 | BuildingLongitude | numeric(17,14) | YES |  |  | Field on FTS.FTS_DistanceSnapshot named BuildingLongitude. [inferred] |
| 17 | RadiusDistance | numeric(19,14) | YES |  |  | Field on FTS.FTS_DistanceSnapshot named RadiusDistance. [inferred] |
| 18 | DrivingDistance | numeric(19,14) | YES |  |  | Field on FTS.FTS_DistanceSnapshot named DrivingDistance. [inferred] |
| 19 | RouteSteps | nvarchar(max) | YES |  |  | Field on FTS.FTS_DistanceSnapshot named RouteSteps. [inferred] |
| 20 | HaversineDistance | numeric(19,14) | YES |  |  | Field on FTS.FTS_DistanceSnapshot named HaversineDistance. [inferred] |
| 21 | DistanceRank | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 22 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 23 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 24 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 25 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 26 | IsPhaseThree | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
