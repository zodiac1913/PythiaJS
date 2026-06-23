# FEI.FEI_Form

Supporting table in the FEI schema related to fei form.

## Snapshot

- Schema: FEI
- Table: FEI_Form
- Priority: supporting schema
- Approximate rows: 6
- Primary key: FormIdentifier
- Column count: 30

## Outbound Foreign Keys

- FK_FormCycle: FEI.FEI_Cycle via CycleIdentifier -> CycleIdentifier

## Inbound Foreign Keys

- FK_ReviewForm: FEI.FEI_Review via FormIdentifier -> FormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FormIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | CycleIdentifier | bigint | NO |  |  | Identifier that likely links this record to Cycle. [inferred] |
| 3 | UserIdentifier | bigint | NO |  |  | Identifier that likely links this record to User. [inferred] |
| 4 | FirstName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | LastName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | FirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | Title | nvarchar(50) | YES |  |  | Field on FEI.FEI_Form named Title. [inferred] |
| 8 | Grade | nvarchar(20) | YES |  |  | Field on FEI.FEI_Form named Grade. [inferred] |
| 9 | Email | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 10 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 11 | ComponentAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 12 | OfficeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Office. [inferred] |
| 13 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 14 | Echelon | nvarchar(50) | YES |  |  | Field on FEI.FEI_Form named Echelon. [inferred] |
| 15 | YearsInCurrentPosition | numeric(4,2) | YES |  |  | Field on FEI.FEI_Form named YearsInCurrentPosition. [inferred] |
| 16 | ChallengeResponse | nvarchar(max) | YES |  |  | Field on FEI.FEI_Form named ChallengeResponse. [inferred] |
| 17 | QualificationResponse | nvarchar(max) | YES |  |  | Field on FEI.FEI_Form named QualificationResponse. [inferred] |
| 18 | ManagerUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerUser. [inferred] |
| 19 | ManagerFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 20 | ManagerEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 21 | ManagerSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 22 | ManagerRecommendation | nvarchar(max) | YES |  |  | Field on FEI.FEI_Form named ManagerRecommendation. [inferred] |
| 23 | Status | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 24 | IsSelected | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 25 | SubmittedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 26 | Score | decimal(18,0) | YES |  |  | Numeric value associated with this record. [inferred] |
| 27 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 28 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 29 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 30 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
