# FTS.FTS_DistanceEmployee

Supporting table in the FTS schema related to fts distance employee.

## Snapshot

- Schema: FTS
- Table: FTS_DistanceEmployee
- Priority: supporting schema
- Approximate rows: 6872
- Primary key: DistanceEmployeeIdentifier
- Column count: 9

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | DistanceEmployeeIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | EmployeeStreet1 | nvarchar(40) | YES |  |  | Field on FTS.FTS_DistanceEmployee named EmployeeStreet1. [inferred] |
| 4 | EmployeeStreet2 | nvarchar(40) | YES |  |  | Field on FTS.FTS_DistanceEmployee named EmployeeStreet2. [inferred] |
| 5 | EmployeeCity | nvarchar(30) | YES |  |  | Field on FTS.FTS_DistanceEmployee named EmployeeCity. [inferred] |
| 6 | EmployeeState | nvarchar(2) | YES |  |  | Field on FTS.FTS_DistanceEmployee named EmployeeState. [inferred] |
| 7 | EmployeeZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 8 | EmployeeLatitude | numeric(17,14) | YES |  |  | Field on FTS.FTS_DistanceEmployee named EmployeeLatitude. [inferred] |
| 9 | EmployeeLongitude | numeric(17,14) | YES |  |  | Field on FTS.FTS_DistanceEmployee named EmployeeLongitude. [inferred] |
