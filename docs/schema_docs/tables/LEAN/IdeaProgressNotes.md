# LEAN.IdeaProgressNotes

Supporting table in the LEAN schema related to idea progress notes.

## Snapshot

- Schema: LEAN
- Table: IdeaProgressNotes
- Priority: supporting schema
- Approximate rows: 7
- Primary key: IdeaProgressNoteIdentifier
- Column count: 11

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | IdeaProgressNoteIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ImprovementIdeaIdentifier | bigint | NO |  |  | Identifier that likely links this record to ImprovementIdea. [inferred] |
| 3 | IdeaName | nvarchar(200) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | ProgressNoteTitle | nvarchar(200) | YES |  |  | Field on LEAN.IdeaProgressNotes named ProgressNoteTitle. [inferred] |
| 5 | ProgressNoteDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 6 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
