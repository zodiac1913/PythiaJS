# EDP.EDP_Form

Supporting table in the EDP schema related to edp form.

## Snapshot

- Schema: EDP
- Table: EDP_Form
- Priority: supporting schema
- Approximate rows: 6
- Primary key: FormIdentifier
- Column count: 43

## Inbound Foreign Keys

- FK_EDP_Form_EDP_FormEvent: EDP.EDP_FormEvent via FormIdentifier -> FormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FormIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Year | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 3 | Status | nvarchar(25) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 4 | PlanType | nvarchar(15) | YES |  |  | Type or category used to classify the record. [inferred] |
| 5 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 6 | Name | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | Email | nvarchar(255) | YES |  |  | Email address related to this record. [inferred] |
| 8 | Phone | nvarchar(20) | YES |  |  | Phone number related to this record. [inferred] |
| 9 | PositionTitle | nvarchar(255) | YES |  |  | Field on EDP.EDP_Form named PositionTitle. [inferred] |
| 10 | PayPlanSeriesGrade | nvarchar(25) | YES |  |  | Field on EDP.EDP_Form named PayPlanSeriesGrade. [inferred] |
| 11 | Last360Assessment | nvarchar(25) | YES |  |  | Field on EDP.EDP_Form named Last360Assessment. [inferred] |
| 12 | Current360Assessment | nvarchar(50) | YES |  |  | Field on EDP.EDP_Form named Current360Assessment. [inferred] |
| 13 | ExecutiveCoreQualifications1 | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 14 | ExecutiveCoreQualifications2 | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 15 | ExecutiveCoreQualifications3 | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 16 | ExecutiveCoreQualifications4 | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 17 | ExecutiveCoreQualifications5 | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 18 | ExecutiveCoreQualifications6 | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 19 | ExecutiveCoreQualifications7 | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 20 | ExecutiveCoreQualifications8 | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 21 | Other | nvarchar(255) | YES |  |  | Field on EDP.EDP_Form named Other. [inferred] |
| 22 | SupervisorEmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to SupervisorEmployee. [inferred] |
| 23 | SupervisorName | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 24 | SupervisorEmail | nvarchar(255) | YES |  |  | Email address related to this record. [inferred] |
| 25 | SupervisorSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 26 | SubmissionSwitch | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 27 | SubmissionDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 28 | CloseoutSwitch | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 29 | CloseoutDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 30 | FindingMyPlaceSwitch | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 31 | MakingMyMarkSwitch | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 32 | LeavingMyLegacySwitch | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 33 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 34 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 35 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 36 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 37 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 38 | Component | nvarchar(50) | YES |  |  | Field on EDP.EDP_Form named Component. [inferred] |
| 39 | ComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to Component. [inferred] |
| 40 | ComponentAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 41 | OfficeName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 42 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 43 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
