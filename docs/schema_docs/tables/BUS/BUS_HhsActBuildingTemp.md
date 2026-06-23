# BUS.BUS_HhsActBuildingTemp

Supporting table in the BUS schema related to bus hhs act building temp.

## Snapshot

- Schema: BUS
- Table: BUS_HhsActBuildingTemp
- Priority: supporting schema
- Approximate rows: 497
- Primary key: ActBuildingIdentifier
- Column count: 17

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ActBuildingIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | HhsAgency | nvarchar(10) | YES |  |  | Field on BUS.BUS_HhsActBuildingTemp named HhsAgency. [inferred] |
| 3 | PayPeriod | nvarchar(50) | YES |  |  | Field on BUS.BUS_HhsActBuildingTemp named PayPeriod. [inferred] |
| 4 | Bureau | nvarchar(100) | YES |  |  | Field on BUS.BUS_HhsActBuildingTemp named Bureau. [inferred] |
| 5 | BuildingName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | Squarefeet | numeric(8,0) | YES |  |  | Field on BUS.BUS_HhsActBuildingTemp named Squarefeet. [inferred] |
| 7 | PropertyUse | nvarchar(50) | YES |  |  | Field on BUS.BUS_HhsActBuildingTemp named PropertyUse. [inferred] |
| 8 | Ownership | nvarchar(50) | YES |  |  | Field on BUS.BUS_HhsActBuildingTemp named Ownership. [inferred] |
| 9 | OaNumber | nvarchar(50) | YES |  |  | Number used to identify or track this record. [inferred] |
| 10 | BuildingCode | nvarchar(50) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 11 | Ruid | nvarchar(50) | YES |  |  | Field on BUS.BUS_HhsActBuildingTemp named Ruid. [inferred] |
| 12 | Address | nvarchar(100) | YES |  |  | Field on BUS.BUS_HhsActBuildingTemp named Address. [inferred] |
| 13 | City | nvarchar(100) | YES |  |  | Field on BUS.BUS_HhsActBuildingTemp named City. [inferred] |
| 14 | State | nvarchar(10) | YES |  |  | Field on BUS.BUS_HhsActBuildingTemp named State. [inferred] |
| 15 | ZipCode | nvarchar(50) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 16 | Latitude | numeric(17,14) | YES |  |  | Field on BUS.BUS_HhsActBuildingTemp named Latitude. [inferred] |
| 17 | Longitude | numeric(17,14) | YES |  |  | Field on BUS.BUS_HhsActBuildingTemp named Longitude. [inferred] |
