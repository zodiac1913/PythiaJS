# CS.CS_ProblemGroup

Supporting table in the CS schema related to cs problem group.

## Snapshot

- Schema: CS
- Table: CS_ProblemGroup
- Priority: supporting schema
- Approximate rows: 15
- Primary key: ProblemGroupIdentifier
- Column count: 8

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ProblemGroupIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ProblemGroupTitle | nvarchar(400) | YES |  |  | Field on CS.CS_ProblemGroup named ProblemGroupTitle. [inferred] |
| 3 | ProblemGroupDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 7 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
