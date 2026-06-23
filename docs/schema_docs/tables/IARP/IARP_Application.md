# IARP.IARP_Application

Supporting table in the IARP schema related to iarp application.

## Snapshot

- Schema: IARP
- Table: IARP_Application
- Priority: supporting schema
- Approximate rows: 17
- Primary key: ApplicationIdentifier
- Column count: 61

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ApplicationIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | CohortIdentifier | bigint | NO |  |  | Identifier that likely links this record to Cohort. [inferred] |
| 4 | Status | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 5 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 6 | OfficeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Office. [inferred] |
| 7 | FullComponent | nvarchar(50) | YES |  |  | Field on IARP.IARP_Application named FullComponent. [inferred] |
| 8 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 9 | ComponentAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 10 | FirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 11 | Email | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 12 | WorkPhone | nvarchar(20) | YES |  |  | Phone number related to this record. [inferred] |
| 13 | Title | nvarchar(50) | YES |  |  | Field on IARP.IARP_Application named Title. [inferred] |
| 14 | VietnamEraVeteranDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 15 | IsVeteran | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 16 | ManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerEmployee. [inferred] |
| 17 | ManagerFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 18 | ManagerTitle | nvarchar(50) | YES |  |  | Field on IARP.IARP_Application named ManagerTitle. [inferred] |
| 19 | ManagerPhone | nvarchar(20) | YES |  |  | Phone number related to this record. [inferred] |
| 20 | ManagerEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 21 | Grade | nvarchar(20) | YES |  |  | Field on IARP.IARP_Application named Grade. [inferred] |
| 22 | EmployeeAssignedLocation | nvarchar(40) | YES |  |  | Field on IARP.IARP_Application named EmployeeAssignedLocation. [inferred] |
| 23 | CurrentRoleDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 24 | CurrentRoleChallengesOvercome | nvarchar(max) | YES |  |  | Field on IARP.IARP_Application named CurrentRoleChallengesOvercome. [inferred] |
| 25 | ImproveSkillsArea | nvarchar(max) | YES |  |  | Field on IARP.IARP_Application named ImproveSkillsArea. [inferred] |
| 26 | OtherImproveSkillsArea | nvarchar(max) | YES |  |  | Field on IARP.IARP_Application named OtherImproveSkillsArea. [inferred] |
| 27 | BuildDevelopSkills | nvarchar(max) | YES |  |  | Field on IARP.IARP_Application named BuildDevelopSkills. [inferred] |
| 28 | RotationDevelopmentGoals | nvarchar(max) | YES |  |  | Field on IARP.IARP_Application named RotationDevelopmentGoals. [inferred] |
| 29 | CandidateReasonStatement | nvarchar(max) | YES |  |  | Field on IARP.IARP_Application named CandidateReasonStatement. [inferred] |
| 30 | SubmittedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 31 | ManagerSkillAssesmentStatement | nvarchar(max) | YES |  |  | Field on IARP.IARP_Application named ManagerSkillAssesmentStatement. [inferred] |
| 32 | ManagerBeneficialProjectStatement | nvarchar(max) | YES |  |  | Field on IARP.IARP_Application named ManagerBeneficialProjectStatement. [inferred] |
| 33 | ManagerRecommendation | nvarchar(max) | YES |  |  | Field on IARP.IARP_Application named ManagerRecommendation. [inferred] |
| 34 | ManagerRecommendationCheck | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 35 | ManagerEmployeeTenureCheck | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 36 | SecondLevelManagerRecommendation | nvarchar(max) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 37 | SecondLevelManagerRecommendationCheck | bit | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 38 | FirstLevelApproverIdentifier | bigint | YES |  |  | Identifier that likely links this record to FirstLevelApprover. [inferred] |
| 39 | FirstLevelFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 40 | FirstLevelDecision | bit | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 41 | FirstLevelSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 42 | SecondLevelApproverIdentifier | bigint | YES |  |  | Identifier that likely links this record to SecondLevelApprover. [inferred] |
| 43 | SecondLevelFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 44 | SecondLevelEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 45 | SecondLevelTitle | nvarchar(50) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 46 | SecondLevelPhone | nvarchar(20) | YES |  |  | Phone number related to this record. [inferred] |
| 47 | SecondLevelDecision | bit | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 48 | SecondLevelSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 49 | IsReadyforPanelReview | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 50 | FirstPanelDecision | nvarchar(40) | YES |  |  | Field on IARP.IARP_Application named FirstPanelDecision. [inferred] |
| 51 | FirstPanelDecisionDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 52 | AdminFinalDecision | nvarchar(40) | YES |  |  | Field on IARP.IARP_Application named AdminFinalDecision. [inferred] |
| 53 | AdminFinalDecisionDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 54 | HostManagerSelected | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 55 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 56 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 57 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 58 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 59 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 60 | IsWithdrawn | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 61 | WithdrawnDate | datetime2(2) | YES |  |  | Date associated with this attribute or event. [inferred] |
