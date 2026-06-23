# CS.CS_KnowledgeBase

Supporting table in the CS schema related to cs knowledge base.

## Snapshot

- Schema: CS
- Table: CS_KnowledgeBase
- Priority: supporting schema
- Approximate rows: 106
- Primary key: KnowledgeBaseIdentifier
- Column count: 16

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | KnowledgeBaseIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ProblemTitle | nvarchar(400) | YES |  |  | Field on CS.CS_KnowledgeBase named ProblemTitle. [inferred] |
| 3 | ProblemDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 4 | SolutionDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | OriginalTicketIdentifier | bigint | YES |  |  | Identifier that likely links this record to OriginalTicket. [inferred] |
| 6 | OriginalCommentIdentifier | bigint | YES |  |  | Identifier that likely links this record to OriginalComment. [inferred] |
| 7 | SolutionDetail | nvarchar(max) | YES |  |  | Field on CS.CS_KnowledgeBase named SolutionDetail. [inferred] |
| 8 | ProblemGroup | nvarchar(400) | YES |  |  | Field on CS.CS_KnowledgeBase named ProblemGroup. [inferred] |
| 9 | Application | nvarchar(400) | YES |  |  | Field on CS.CS_KnowledgeBase named Application. [inferred] |
| 11 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 13 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 15 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 16 | ProblemGroupIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProblemGroup. [inferred] |
| 17 | ApplicationIdentifier | bigint | YES |  |  | Identifier that likely links this record to Application. [inferred] |
