# CS.CS_Comment

Supporting table in the CS schema related to cs comment.

## Snapshot

- Schema: CS
- Table: CS_Comment
- Priority: supporting schema
- Approximate rows: 5479
- Primary key: CommentIdentifier
- Column count: 12

## Outbound Foreign Keys

- FK_CommentCustomerService: CS.CS_CustomerService via CustomerServiceIdentifier -> CustomerServiceIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CommentIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | CustomerServiceIdentifier | bigint | YES |  |  | Identifier that likely links this record to CustomerService. [inferred] |
| 3 | OriginalCommentIdentifier | bigint | YES |  |  | Identifier that likely links this record to OriginalComment. [inferred] |
| 4 | SystemCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 5 | CommentDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 8 | Reused | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 9 | AddUserName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 10 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 12 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 14 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
