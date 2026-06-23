# IDP.IDP_Comment

Supporting table in the IDP schema related to idp comment.

## Snapshot

- Schema: IDP
- Table: IDP_Comment
- Priority: supporting schema
- Approximate rows: 0
- Primary key: CommentIdentifier
- Column count: 8

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CommentIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FormIdentifier | bigint | NO |  |  | Identifier that likely links this record to Form. [inferred] |
| 3 | Comment | nvarchar(max) | NO |  |  | Field on IDP.IDP_Comment named Comment. [inferred] |
| 4 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 5 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 7 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
