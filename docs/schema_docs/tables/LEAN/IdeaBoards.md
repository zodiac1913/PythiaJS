# LEAN.IdeaBoards

Supporting table in the LEAN schema related to idea boards.

## Snapshot

- Schema: LEAN
- Table: IdeaBoards
- Priority: supporting schema
- Approximate rows: 3
- Primary key: IdeaBoardIdentifier
- Column count: 11

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | IdeaBoardIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 3 | ComponentName | nvarchar(400) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | ComponentAcronymName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | AdminCode | nvarchar(100) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 6 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
