# ALP.ALP_Form

Supporting table in the ALP schema related to alp form.

## Snapshot

- Schema: ALP
- Table: ALP_Form
- Priority: supporting schema
- Approximate rows: 9
- Primary key: FormIdentifier
- Column count: 58

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FormIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | CycleIdentifier | bigint | NO |  |  | Identifier that likely links this record to Cycle. [inferred] |
| 4 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 5 | OfficeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Office. [inferred] |
| 6 | FullComponent | nvarchar(50) | YES |  |  | Field on ALP.ALP_Form named FullComponent. [inferred] |
| 7 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 8 | ComponentAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 9 | FunctionalArea | nvarchar(20) | YES |  |  | Field on ALP.ALP_Form named FunctionalArea. [inferred] |
| 10 | LastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 11 | Email | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 12 | WorkPhone | nvarchar(20) | YES |  |  | Phone number related to this record. [inferred] |
| 13 | Title | nvarchar(50) | YES |  |  | Field on ALP.ALP_Form named Title. [inferred] |
| 14 | Status | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 15 | Grade | nvarchar(20) | YES |  |  | Field on ALP.ALP_Form named Grade. [inferred] |
| 16 | Street1 | nvarchar(40) | YES |  |  | Field on ALP.ALP_Form named Street1. [inferred] |
| 17 | Street2 | nvarchar(40) | YES |  |  | Field on ALP.ALP_Form named Street2. [inferred] |
| 18 | City | nvarchar(30) | YES |  |  | Field on ALP.ALP_Form named City. [inferred] |
| 19 | State | nvarchar(2) | YES |  |  | Field on ALP.ALP_Form named State. [inferred] |
| 20 | ZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 21 | IsTeamLead | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 22 | IsManager | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 23 | SubmittedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 24 | ManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerEmployee. [inferred] |
| 25 | ManagerLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 26 | ManagerTitle | nvarchar(50) | YES |  |  | Field on ALP.ALP_Form named ManagerTitle. [inferred] |
| 27 | ManagerPhone | nvarchar(20) | YES |  |  | Phone number related to this record. [inferred] |
| 28 | ManagerEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 29 | FirstLevelApproverIdentifier | bigint | YES |  |  | Identifier that likely links this record to FirstLevelApprover. [inferred] |
| 30 | FirstLevelFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 31 | FirstLevelDecision | bit | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 32 | FirstLevelSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 33 | SecondLevelManagerTitle | nvarchar(50) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 34 | SecondLevelManagerPhone | nvarchar(20) | YES |  |  | Phone number related to this record. [inferred] |
| 35 | SecondLevelManagerEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 36 | SecondLevelApproverIdentifier | bigint | YES |  |  | Identifier that likely links this record to SecondLevelApprover. [inferred] |
| 37 | SecondLevelLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 38 | SecondLevelDecision | bit | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 39 | SecondLevelSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 40 | LeadershipExperience | nvarchar(max) | YES |  |  | Field on ALP.ALP_Form named LeadershipExperience. [inferred] |
| 41 | ApplicationReason | nvarchar(max) | YES |  |  | Field on ALP.ALP_Form named ApplicationReason. [inferred] |
| 42 | LeadershipEvidence | nvarchar(max) | YES |  |  | Field on ALP.ALP_Form named LeadershipEvidence. [inferred] |
| 43 | SpecialRequirements | nvarchar(max) | YES |  |  | Field on ALP.ALP_Form named SpecialRequirements. [inferred] |
| 44 | PerformancePlanCheck | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 45 | TimeAvailabilityCheck | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 46 | IsReadyforPanelReview | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 47 | FirstPanelDecision | nvarchar(40) | YES |  |  | Field on ALP.ALP_Form named FirstPanelDecision. [inferred] |
| 48 | SecondPanelDecision | nvarchar(40) | YES |  |  | Field on ALP.ALP_Form named SecondPanelDecision. [inferred] |
| 49 | AdminFinalDecision | nvarchar(40) | YES |  |  | Field on ALP.ALP_Form named AdminFinalDecision. [inferred] |
| 50 | FirstPanelDecisionDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 51 | SecondPanelDecisionDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 52 | AdminFinalDecisionDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 53 | IsSelected | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 54 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 55 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 56 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 57 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 58 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
