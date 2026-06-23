# LEAN.IdeaSubjectMatterExperts

Supporting table in the LEAN schema related to idea subject matter experts.

## Snapshot

- Schema: LEAN
- Table: IdeaSubjectMatterExperts
- Priority: supporting schema
- Approximate rows: 0
- Primary key: IdeaSubjectMatterExpertIdentifier
- Column count: 11

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | IdeaSubjectMatterExpertIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ImprovementIdeaIdentifier | bigint | NO |  |  | Identifier that likely links this record to ImprovementIdea. [inferred] |
| 3 | IdeaName | nvarchar(200) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | SMEemail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 5 | SubjectMatterUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to SubjectMatterUser. [inferred] |
| 6 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
