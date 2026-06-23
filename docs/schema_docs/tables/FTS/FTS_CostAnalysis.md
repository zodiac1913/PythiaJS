# FTS.FTS_CostAnalysis

Supporting table in the FTS schema related to fts cost analysis.

## Snapshot

- Schema: FTS
- Table: FTS_CostAnalysis
- Priority: supporting schema
- Approximate rows: 373
- Primary key: CostAnalysisIdentifier
- Column count: 47

## Outbound Foreign Keys

- FK_FTS_Agreement_FTS_CostAnalysis: FTS.FTS_Agreement via AgreementIdentifier -> AgreementIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CostAnalysisIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AgreementIdentifier | bigint | NO |  |  | Identifier that likely links this record to Agreement. [inferred] |
| 3 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 4 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 5 | EmployeePositionTitle | nvarchar(32) | YES |  |  | Field on FTS.FTS_CostAnalysis named EmployeePositionTitle. [inferred] |
| 6 | ManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerEmployee. [inferred] |
| 7 | OfficeStreet1 | nvarchar(40) | YES |  |  | Field on FTS.FTS_CostAnalysis named OfficeStreet1. [inferred] |
| 8 | OfficeStreet2 | nvarchar(40) | YES |  |  | Field on FTS.FTS_CostAnalysis named OfficeStreet2. [inferred] |
| 9 | OfficeCity | nvarchar(30) | YES |  |  | Field on FTS.FTS_CostAnalysis named OfficeCity. [inferred] |
| 10 | OfficeState | nvarchar(2) | YES |  |  | Field on FTS.FTS_CostAnalysis named OfficeState. [inferred] |
| 11 | OfficeZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 12 | OfficePhone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 13 | OfficeSalary | numeric(11,2) | NO |  | ((0)) | Field on FTS.FTS_CostAnalysis named OfficeSalary. [inferred] |
| 14 | AdsStreet1 | nvarchar(40) | YES |  |  | Field on FTS.FTS_CostAnalysis named AdsStreet1. [inferred] |
| 15 | AdsStreet2 | nvarchar(40) | YES |  |  | Field on FTS.FTS_CostAnalysis named AdsStreet2. [inferred] |
| 16 | AdsCity | nvarchar(30) | YES |  |  | Field on FTS.FTS_CostAnalysis named AdsCity. [inferred] |
| 17 | AdsState | nvarchar(2) | YES |  |  | Field on FTS.FTS_CostAnalysis named AdsState. [inferred] |
| 18 | AdsZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 19 | AdsPhone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 20 | AdsSalary | numeric(11,2) | NO |  | ((0)) | Field on FTS.FTS_CostAnalysis named AdsSalary. [inferred] |
| 21 | TransportationCost | numeric(11,2) | NO |  | ((0)) | Field on FTS.FTS_CostAnalysis named TransportationCost. [inferred] |
| 22 | MealCost | numeric(11,2) | NO |  | ((0)) | Field on FTS.FTS_CostAnalysis named MealCost. [inferred] |
| 23 | HotelCost | numeric(11,2) | NO |  | ((0)) | Field on FTS.FTS_CostAnalysis named HotelCost. [inferred] |
| 24 | AdditionalCost | numeric(11,2) | NO |  | ((0)) | Field on FTS.FTS_CostAnalysis named AdditionalCost. [inferred] |
| 25 | AverageNightsPerTrip | int | NO |  | ((1)) | Numeric value associated with this record. [inferred] |
| 26 | EstimatedTripsPerYear | int | NO |  | ((2)) | Numeric value associated with this record. [inferred] |
| 27 | EmployeeJustification | nvarchar(4000) | YES |  |  | Field on FTS.FTS_CostAnalysis named EmployeeJustification. [inferred] |
| 28 | EmployeeSignedDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 29 | ManagerConcurs | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 30 | ManagerStatus | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 31 | ManagerComments | nvarchar(4000) | YES |  |  | Field on FTS.FTS_CostAnalysis named ManagerComments. [inferred] |
| 32 | ManagerSignedDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 33 | BoxTopStatus | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 34 | BoxTopComments | nvarchar(500) | YES |  |  | Field on FTS.FTS_CostAnalysis named BoxTopComments. [inferred] |
| 35 | BoxTopSignedDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 36 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 37 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 38 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 39 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 40 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 41 | TransportationType | nvarchar(40) | YES |  |  | Type or category used to classify the record. [inferred] |
| 42 | BoxTopEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to BoxTopEmployee. [inferred] |
| 43 | EmployeeName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 44 | EmployeeSignatureName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 45 | ManagerName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 46 | ManagerSignatureName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 47 | BoxTopSignatureName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
