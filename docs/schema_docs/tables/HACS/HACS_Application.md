# HACS.HACS_Application

Supporting table in the HACS schema related to hacs application.

## Snapshot

- Schema: HACS
- Table: HACS_Application
- Priority: supporting schema
- Approximate rows: 15
- Primary key: ApplicationIdentifier
- Column count: 47

## Outbound Foreign Keys

- FK_HACS_Application_FocusArea: HACS.HACS_FocusArea via PrimaryFocusAreaIdentifier -> FocusAreaIdentifier
- FK_HACS_Application_SecondaryFocusArea: HACS.HACS_FocusArea via SecondaryFocusAreaIdentifier -> FocusAreaIdentifier
- FK_HACS_Application_StakeHolderRepresentationCategory: HACS.HACS_StakeHolderRepresentationCategory via StakeHolderRepresentationCategoryIdentifier -> StakeHolderRepresentationCategoryIdentifier

## Inbound Foreign Keys

- FK_ApplyingEntity_Application: HACS.HACS_ApplyingEntity via ApplicationIdentifier -> ApplicationIdentifier
- FK_Documentation_Application: HACS.HACS_Documentation via ApplicationIdentifier -> ApplicationIdentifier
- FK_PanelDecision_Application: HACS.HACS_PanelDecision via ApplicationIdentifier -> ApplicationIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ApplicationIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 4 | IsComplete | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 5 | IsSelected | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 6 | Comment | nvarchar(max) | YES |  |  | Field on HACS.HACS_Application named Comment. [inferred] |
| 7 | Status | nvarchar(200) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 8 | FinalScore | decimal(6,2) | YES |  |  | Numeric value associated with this record. [inferred] |
| 9 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 11 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 13 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | IsUSCitizen | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 15 | IsRequiredToRegisterAsForeignAgent | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 16 | CanAttendMeetings | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 17 | IsServiceDurationAcknowledged | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 18 | SchedulingConstraints | nvarchar(4000) | YES |  |  | Field on HACS.HACS_Application named SchedulingConstraints. [inferred] |
| 19 | EducationalBackground | nvarchar(4000) | YES |  |  | Field on HACS.HACS_Application named EducationalBackground. [inferred] |
| 20 | ProfessionalCredentials | nvarchar(4000) | YES |  |  | Field on HACS.HACS_Application named ProfessionalCredentials. [inferred] |
| 21 | KnowledgeAreas | nvarchar(4000) | YES |  |  | Field on HACS.HACS_Application named KnowledgeAreas. [inferred] |
| 22 | ReasonForServing | nvarchar(4000) | YES |  |  | Field on HACS.HACS_Application named ReasonForServing. [inferred] |
| 23 | BenefitToCommittee | nvarchar(4000) | YES |  |  | Field on HACS.HACS_Application named BenefitToCommittee. [inferred] |
| 24 | Organization | nvarchar(800) | YES |  |  | Field on HACS.HACS_Application named Organization. [inferred] |
| 25 | IsQualified | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 26 | IsReferred | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 27 | ExpertType | nvarchar(4000) | YES |  |  | Type or category used to classify the record. [inferred] |
| 28 | ExpertOtherType | nvarchar(4000) | YES |  |  | Type or category used to classify the record. [inferred] |
| 29 | Remarks | nvarchar(1000) | YES |  |  | Field on HACS.HACS_Application named Remarks. [inferred] |
| 30 | State | nvarchar(100) | YES |  |  | Field on HACS.HACS_Application named State. [inferred] |
| 31 | Degree | nvarchar(500) | YES |  |  | Field on HACS.HACS_Application named Degree. [inferred] |
| 33 | MemberGroup | nvarchar(500) | YES |  |  | Field on HACS.HACS_Application named MemberGroup. [inferred] |
| 34 | IsRepresentingInterest | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 35 | HasSeniorRecommendation | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 36 | HasRareSkills | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 37 | IsReferredToPhaseTwo | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 38 | PhaseTwoSelectionReason | nvarchar(4000) | YES |  |  | Field on HACS.HACS_Application named PhaseTwoSelectionReason. [inferred] |
| 39 | OaMemberGroup | nvarchar(500) | YES |  |  | Field on HACS.HACS_Application named OaMemberGroup. [inferred] |
| 40 | IsReferredToPhaseThree | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 41 | PhaseThreeSelectionReason | nvarchar(4000) | YES |  |  | Field on HACS.HACS_Application named PhaseThreeSelectionReason. [inferred] |
| 42 | PrimaryFocusAreaIdentifier | bigint | YES |  |  | Identifier that likely links this record to PrimaryFocusArea. [inferred] |
| 43 | PrimaryFocusAreaName | varchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 44 | PrimaryFocusAreaDescription | varchar(1000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 45 | SecondaryFocusAreaIdentifier | bigint | YES |  |  | Identifier that likely links this record to SecondaryFocusArea. [inferred] |
| 46 | SecondaryFocusAreaName | varchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 47 | SecondaryFocusAreaDescription | varchar(1000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 48 | StakeHolderRepresentationCategoryIdentifier | bigint | YES |  |  | Identifier that likely links this record to StakeHolderRepresentationCategory. [inferred] |
| 49 | StakeHolderRepresentationCategoryName | varchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 50 | StakeHolderRepresentationCategoryDescription | varchar(1000) | YES |  |  | Longer descriptive text for this value. [inferred] |
