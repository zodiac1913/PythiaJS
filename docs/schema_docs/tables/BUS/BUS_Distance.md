# BUS.BUS_Distance

Supporting table in the BUS schema related to bus distance.

## Snapshot

- Schema: BUS
- Table: BUS_Distance
- Priority: supporting schema
- Approximate rows: 0
- Primary key: DistanceIdentifier
- Column count: 23

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | DistanceIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | EmployeeStreet1 | nvarchar(40) | YES |  |  | Field on BUS.BUS_Distance named EmployeeStreet1. [inferred] |
| 4 | EmployeeStreet2 | nvarchar(40) | YES |  |  | Field on BUS.BUS_Distance named EmployeeStreet2. [inferred] |
| 5 | EmployeeCity | nvarchar(30) | YES |  |  | Field on BUS.BUS_Distance named EmployeeCity. [inferred] |
| 6 | EmployeeState | nvarchar(2) | YES |  |  | Field on BUS.BUS_Distance named EmployeeState. [inferred] |
| 7 | EmployeeZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 8 | EmployeeLatitude | numeric(17,14) | YES |  |  | Field on BUS.BUS_Distance named EmployeeLatitude. [inferred] |
| 9 | EmployeeLongitude | numeric(17,14) | YES |  |  | Field on BUS.BUS_Distance named EmployeeLongitude. [inferred] |
| 10 | BuildingIdentifier | bigint | NO |  |  | Identifier that likely links this record to Building. [inferred] |
| 11 | BuildingStreet | nvarchar(40) | YES |  |  | Field on BUS.BUS_Distance named BuildingStreet. [inferred] |
| 12 | BuildingCity | nvarchar(30) | YES |  |  | Field on BUS.BUS_Distance named BuildingCity. [inferred] |
| 13 | BuildingState | nvarchar(2) | YES |  |  | Field on BUS.BUS_Distance named BuildingState. [inferred] |
| 14 | BuildingZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 15 | BuildingLatitude | numeric(17,14) | YES |  |  | Field on BUS.BUS_Distance named BuildingLatitude. [inferred] |
| 16 | BuildingLongitude | numeric(17,14) | YES |  |  | Field on BUS.BUS_Distance named BuildingLongitude. [inferred] |
| 17 | RadiusDistance | numeric(19,14) | YES |  |  | Field on BUS.BUS_Distance named RadiusDistance. [inferred] |
| 18 | DrivingDistance | numeric(19,14) | YES |  |  | Field on BUS.BUS_Distance named DrivingDistance. [inferred] |
| 19 | RouteSteps | nvarchar(max) | YES |  |  | Field on BUS.BUS_Distance named RouteSteps. [inferred] |
| 20 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 21 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 22 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 23 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
