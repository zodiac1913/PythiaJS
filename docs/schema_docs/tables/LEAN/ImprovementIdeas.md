# LEAN.ImprovementIdeas

Supporting table in the LEAN schema related to improvement ideas.

## Snapshot

- Schema: LEAN
- Table: ImprovementIdeas
- Priority: supporting schema
- Approximate rows: 7
- Primary key: ImprovementIdeaIdentifier
- Column count: 32

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ImprovementIdeaIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | BoardIdentifier | bigint | NO |  |  | Identifier that likely links this record to Board. [inferred] |
| 3 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 4 | ComponentName | nvarchar(400) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | ComponentAcronymName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | AdminCode | nvarchar(100) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 7 | SubmitterUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to SubmitterUser. [inferred] |
| 8 | SubmitterEmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to SubmitterEmployee. [inferred] |
| 9 | SubmitterName | nvarchar(400) | YES |  |  | Name or display label for this value. [inferred] |
| 10 | SubmittedTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | OwnerUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to OwnerUser. [inferred] |
| 12 | OwnerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to OwnerEmployee. [inferred] |
| 13 | OwnerName | nvarchar(400) | YES |  |  | Name or display label for this value. [inferred] |
| 14 | OwnerAssignedTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | ManagerUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerUser. [inferred] |
| 16 | ManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerEmployee. [inferred] |
| 17 | ManagerName | nvarchar(400) | YES |  |  | Name or display label for this value. [inferred] |
| 18 | ManagerAssignedTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 19 | IdeaStateIdentifier | bigint | NO |  |  | Identifier that likely links this record to IdeaState. [inferred] |
| 20 | IdeaStateName | nvarchar(400) | YES |  |  | Name or display label for this value. [inferred] |
| 21 | IdeaName | nvarchar(200) | YES |  |  | Name or display label for this value. [inferred] |
| 22 | ProblemDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 23 | ProrityIdentifier | bigint | NO |  |  | Identifier that likely links this record to Prority. [inferred] |
| 24 | PriorityName | nvarchar(400) | YES |  |  | Name or display label for this value. [inferred] |
| 25 | TrueNorthPillarIdentifier | bigint | NO |  |  | Identifier that likely links this record to TrueNorthPillar. [inferred] |
| 26 | TrueNorthPillarName | nvarchar(400) | YES |  |  | Name or display label for this value. [inferred] |
| 27 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 28 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 29 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 30 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 31 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 32 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
