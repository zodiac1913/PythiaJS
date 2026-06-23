# FEI.FEI_Reviewer

Supporting table in the FEI schema related to fei reviewer.

## Snapshot

- Schema: FEI
- Table: FEI_Reviewer
- Priority: supporting schema
- Approximate rows: 10
- Primary key: ReviewerIdentifier
- Column count: 8

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ReviewerIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | CycleIdentifier | bigint | NO |  |  | Identifier that likely links this record to Cycle. [inferred] |
| 3 | ReviewerUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to ReviewerUser. [inferred] |
| 4 | ReviewerFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 6 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 8 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
