# APMF.APMF_Application

Supporting table in the APMF schema related to apmf application.

## Snapshot

- Schema: APMF
- Table: APMF_Application
- Priority: supporting schema
- Approximate rows: 5
- Primary key: ApplicationIdentifier
- Column count: 53

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ApplicationIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | FirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | Email | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 5 | WorkPhone | nvarchar(20) | YES |  |  | Phone number related to this record. [inferred] |
| 6 | Title | nvarchar(50) | YES |  |  | Field on APMF.APMF_Application named Title. [inferred] |
| 7 | Grade | nvarchar(20) | YES |  |  | Field on APMF.APMF_Application named Grade. [inferred] |
| 8 | Location | nvarchar(40) | YES |  |  | Field on APMF.APMF_Application named Location. [inferred] |
| 9 | City | nvarchar(50) | YES |  |  | Field on APMF.APMF_Application named City. [inferred] |
| 10 | State | nvarchar(50) | YES |  |  | Field on APMF.APMF_Application named State. [inferred] |
| 11 | AdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 12 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 13 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 14 | GroupIdentifier | bigint | YES |  |  | Identifier that likely links this record to Group. [inferred] |
| 15 | GroupAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 16 | DivisonIdentifier | bigint | YES |  |  | Identifier that likely links this record to Divison. [inferred] |
| 17 | DivisionAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 18 | Echelon | varchar(50) | YES |  |  | Field on APMF.APMF_Application named Echelon. [inferred] |
| 19 | IsVeteran | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 20 | CycleIdentifier | bigint | NO |  |  | Identifier that likely links this record to Cycle. [inferred] |
| 21 | Status | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 22 | CurrentRoleDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 23 | ProfessionalBackgroundDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 24 | TopCareerGoals | nvarchar(max) | YES |  |  | Field on APMF.APMF_Application named TopCareerGoals. [inferred] |
| 25 | DevelopmentGoals | nvarchar(max) | YES |  |  | Field on APMF.APMF_Application named DevelopmentGoals. [inferred] |
| 26 | SpecialRequirements | nvarchar(max) | YES |  |  | Field on APMF.APMF_Application named SpecialRequirements. [inferred] |
| 27 | SubmittedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 28 | IsWithdrawn | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 29 | WithdrawnDate | datetime2(2) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 30 | ManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerEmployee. [inferred] |
| 31 | ManagerFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 32 | ManagerTitle | nvarchar(50) | YES |  |  | Field on APMF.APMF_Application named ManagerTitle. [inferred] |
| 33 | ManagerPhone | nvarchar(20) | YES |  |  | Phone number related to this record. [inferred] |
| 34 | ManagerEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 35 | ManagerEmployeeStrengthsDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 36 | ManagerEmployeeProfessionalDevelopmentDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 37 | ManagerRecommendation | nvarchar(max) | YES |  |  | Field on APMF.APMF_Application named ManagerRecommendation. [inferred] |
| 38 | ManagerIsRecommended | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 39 | ManagerEmployeeIsAbleToParticipate | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 40 | ManagerSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 41 | SecondLevelEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to SecondLevelEmployee. [inferred] |
| 42 | SecondLevelFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 43 | SecondLevelEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 44 | SecondLevelRecommendation | nvarchar(max) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 45 | SecondLevelIsRecommended | bit | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 46 | SecondLevelSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 47 | IsReadyforPanelReview | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 48 | IsSelectedForProgram | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 49 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 50 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 51 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 52 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 53 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
