# HRF.HRF_EmployeeClearance

Supporting table in the HRF schema related to hrf employee clearance.

## Snapshot

- Schema: HRF
- Table: HRF_EmployeeClearance
- Priority: supporting schema
- Approximate rows: 135
- Primary key: EmployeeClearanceIdentifier
- Column count: 37

## Inbound Foreign Keys

- FK_HRF_ClearanceItem_HRF_EmployeeClearance: HRF.HRF_ClearanceItem via EmployeeClearanceIdentifier -> EmployeeClearanceIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | EmployeeClearanceIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to EmployeeUser. [inferred] |
| 3 | EmployeeName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | EmployeeEmail | nvarchar(150) | NO |  |  | Email address related to this record. [inferred] |
| 5 | EmployeeSignature | nvarchar(150) | YES |  |  | Field on HRF.HRF_EmployeeClearance named EmployeeSignature. [inferred] |
| 6 | EmployeeSignatureDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 7 | ForwardingHomeAddress | nvarchar(100) | NO |  |  | Field on HRF.HRF_EmployeeClearance named ForwardingHomeAddress. [inferred] |
| 8 | CurrentPositionTitle | nvarchar(50) | NO |  |  | Field on HRF.HRF_EmployeeClearance named CurrentPositionTitle. [inferred] |
| 9 | PayPlanSeriesGrade | nvarchar(50) | NO |  |  | Field on HRF.HRF_EmployeeClearance named PayPlanSeriesGrade. [inferred] |
| 10 | Organization | nvarchar(50) | NO |  |  | Field on HRF.HRF_EmployeeClearance named Organization. [inferred] |
| 11 | DutyStation | nvarchar(50) | NO |  |  | Field on HRF.HRF_EmployeeClearance named DutyStation. [inferred] |
| 12 | OfficeRoomBuilding | nvarchar(50) | NO |  |  | Field on HRF.HRF_EmployeeClearance named OfficeRoomBuilding. [inferred] |
| 13 | LastDutyDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 14 | SeparationDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 15 | TypeOfSeparation | nvarchar(50) | NO |  |  | Type or category used to classify the record. [inferred] |
| 16 | SupervisorUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to SupervisorUser. [inferred] |
| 17 | SupervisorUserName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 18 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 19 | SupervisorEmail | nvarchar(150) | NO |  |  | Email address related to this record. [inferred] |
| 20 | SupervisorSignature | nvarchar(100) | YES |  |  | Field on HRF.HRF_EmployeeClearance named SupervisorSignature. [inferred] |
| 21 | SupervisorSignatureDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 22 | XoUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to XoUser. [inferred] |
| 23 | XoUserName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 24 | OfficeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Office. [inferred] |
| 25 | XoEmail | nvarchar(150) | YES |  |  | Email address related to this record. [inferred] |
| 26 | XoSignature | nvarchar(100) | YES |  |  | Field on HRF.HRF_EmployeeClearance named XoSignature. [inferred] |
| 27 | XoSignatureDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 28 | EUAIdentifier | nvarchar(50) | YES |  |  | Identifier that likely links this record to EUA. [inferred] |
| 29 | FinalSignatureDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 30 | ExtensionDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 31 | PercentComplete | float | YES |  |  | Numeric value associated with this record. [inferred] |
| 32 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 33 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 34 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 35 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 36 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 37 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
