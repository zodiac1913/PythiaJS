# IARP.IARP_HostAssignmentForm

Supporting table in the IARP schema related to iarp host assignment form.

## Snapshot

- Schema: IARP
- Table: IARP_HostAssignmentForm
- Priority: supporting schema
- Approximate rows: 15
- Primary key: HostAssignmentFormIdentifier
- Column count: 42

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | HostAssignmentFormIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FullComponent | nvarchar(50) | YES |  |  | Field on IARP.IARP_HostAssignmentForm named FullComponent. [inferred] |
| 3 | ComponentAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 4 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 5 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 6 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 7 | GroupAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 8 | GroupIdentifier | bigint | YES |  |  | Identifier that likely links this record to Group. [inferred] |
| 9 | DivisionAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 10 | DivisionIdentifier | bigint | YES |  |  | Identifier that likely links this record to Division. [inferred] |
| 11 | OrganizationalMissionRole | nvarchar(max) | YES |  |  | Field on IARP.IARP_HostAssignmentForm named OrganizationalMissionRole. [inferred] |
| 12 | RotationTitle | nvarchar(100) | YES |  |  | Field on IARP.IARP_HostAssignmentForm named RotationTitle. [inferred] |
| 13 | GsLevel | nvarchar(100) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 14 | AssignmentLocation | nvarchar(40) | YES |  |  | Field on IARP.IARP_HostAssignmentForm named AssignmentLocation. [inferred] |
| 15 | HostManagerIdentifier | bigint | YES |  |  | Identifier that likely links this record to HostManager. [inferred] |
| 16 | HostManagerFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 17 | HostManagerEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 18 | HostManagerTitle | nvarchar(50) | YES |  |  | Field on IARP.IARP_HostAssignmentForm named HostManagerTitle. [inferred] |
| 19 | HostManagerPhone | nvarchar(20) | YES |  |  | Phone number related to this record. [inferred] |
| 20 | HostManagerSignature | nvarchar(100) | YES |  |  | Field on IARP.IARP_HostAssignmentForm named HostManagerSignature. [inferred] |
| 21 | HostManagerSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 22 | AlternateContactIdentifier | bigint | YES |  |  | Identifier that likely links this record to AlternateContact. [inferred] |
| 23 | AlternateContactFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 24 | AlternateContactEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 25 | WorkplaceFlexibilities | nvarchar(100) | YES |  |  | Field on IARP.IARP_HostAssignmentForm named WorkplaceFlexibilities. [inferred] |
| 26 | RotationalOpportunityDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 27 | SkillsKnowledgeSuccessful | nvarchar(250) | YES |  |  | Field on IARP.IARP_HostAssignmentForm named SkillsKnowledgeSuccessful. [inferred] |
| 28 | ProgramKnowledgeDescription | nvarchar(100) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 29 | SkillsKnowledgeOther | nvarchar(250) | YES |  |  | Field on IARP.IARP_HostAssignmentForm named SkillsKnowledgeOther. [inferred] |
| 30 | RotationalOffering | nvarchar(250) | YES |  |  | Field on IARP.IARP_HostAssignmentForm named RotationalOffering. [inferred] |
| 31 | RotationalOfferingOther | nvarchar(250) | YES |  |  | Field on IARP.IARP_HostAssignmentForm named RotationalOfferingOther. [inferred] |
| 32 | OpportunityBenefit | nvarchar(max) | YES |  |  | Field on IARP.IARP_HostAssignmentForm named OpportunityBenefit. [inferred] |
| 33 | SpecialRequirements | nvarchar(max) | YES |  |  | Field on IARP.IARP_HostAssignmentForm named SpecialRequirements. [inferred] |
| 34 | CohortIdentifier | bigint | NO |  |  | Identifier that likely links this record to Cohort. [inferred] |
| 35 | CohortTitle | nvarchar(200) | NO |  |  | Field on IARP.IARP_HostAssignmentForm named CohortTitle. [inferred] |
| 36 | SubmittedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 37 | ApplicationIdentifier | bigint | YES |  |  | Identifier that likely links this record to Application. [inferred] |
| 38 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 39 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 40 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 41 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 42 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
