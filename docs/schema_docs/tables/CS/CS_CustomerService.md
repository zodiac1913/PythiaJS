# CS.CS_CustomerService

Supporting table in the CS schema related to cs customer service.

## Snapshot

- Schema: CS
- Table: CS_CustomerService
- Priority: supporting schema
- Approximate rows: 2481
- Primary key: CustomerServiceIdentifier
- Column count: 29

## Inbound Foreign Keys

- FK_CommentCustomerService: CS.CS_Comment via CustomerServiceIdentifier -> CustomerServiceIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CustomerServiceIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ApplicationNameIdentifier | bigint | YES |  |  | Identifier that likely links this record to ApplicationName. [inferred] |
| 3 | ProblemGroupIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProblemGroup. [inferred] |
| 4 | KnowledgeBaseIdentifier | bigint | YES |  |  | Identifier that likely links this record to KnowledgeBase. [inferred] |
| 5 | ClaimedUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ClaimedUser. [inferred] |
| 6 | ClaimedName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | ClaimedTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | SystemCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 9 | OriginatorUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to OriginatorUser. [inferred] |
| 10 | ComputerAddress | nvarchar(100) | YES |  |  | Field on CS.CS_CustomerService named ComputerAddress. [inferred] |
| 11 | LocationAddress | nvarchar(50) | YES |  |  | Field on CS.CS_CustomerService named LocationAddress. [inferred] |
| 12 | SubjectDescription | nvarchar(50) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 13 | TaskDefinitionIdentifier | bigint | YES |  |  | Identifier that likely links this record to TaskDefinition. [inferred] |
| 14 | ProjectDescription | nvarchar(50) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 15 | ProblemDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 16 | AssignedUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to AssignedUser. [inferred] |
| 17 | Priority | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 18 | StatusCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 19 | ClosedTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 20 | Score | numeric(12,0) | YES |  |  | Field on CS.CS_CustomerService named Score. [inferred] |
| 21 | NatureOfRequest | nvarchar(50) | YES |  |  | Field on CS.CS_CustomerService named NatureOfRequest. [inferred] |
| 22 | Source | nvarchar(50) | YES |  |  | Field on CS.CS_CustomerService named Source. [inferred] |
| 23 | TechnicianRequired | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 24 | Reused | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 25 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 26 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 27 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 28 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 29 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
