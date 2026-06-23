# CORE.MailItem

Business-critical table in the CORE schema related to mail item.

## Snapshot

- Schema: CORE
- Table: MailItem
- Priority: primary schema
- Approximate rows: 58
- Primary key: MailItemIdentifier
- Column count: 29

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | MailItemIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | OriginalMailItemIdentifier | bigint | YES |  |  | Identifier that likely links this record to OriginalMailItem. [inferred] |
| 3 | TaskDefinitionIdentifier | bigint | YES |  |  | Identifier that likely links this record to TaskDefinition. [inferred] |
| 4 | MailType | nvarchar(50) | YES |  |  | Type or category used to classify the record. [inferred] |
| 5 | WorkflowStep | nvarchar(50) | YES |  |  | Field on CORE.MailItem named WorkflowStep. [inferred] |
| 6 | ChildTableName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | ChildIdentifier | bigint | YES |  |  | Identifier that likely links this record to Child. [inferred] |
| 8 | Caller | nvarchar(255) | YES |  |  | Field on CORE.MailItem named Caller. [inferred] |
| 9 | TestMode | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 10 | ConfigDeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | Recipients | varchar(max) | YES |  |  | Field on CORE.MailItem named Recipients. [inferred] |
| 12 | CopyRecipients | varchar(max) | YES |  |  | Field on CORE.MailItem named CopyRecipients. [inferred] |
| 13 | BlindCopyRecipients | varchar(max) | YES |  |  | Field on CORE.MailItem named BlindCopyRecipients. [inferred] |
| 14 | FromAddress | varchar(max) | YES |  |  | Field on CORE.MailItem named FromAddress. [inferred] |
| 15 | ReplyTo | varchar(max) | YES |  |  | Field on CORE.MailItem named ReplyTo. [inferred] |
| 16 | Subject | nvarchar(255) | YES |  |  | Field on CORE.MailItem named Subject. [inferred] |
| 17 | Body | nvarchar(max) | YES |  |  | Field on CORE.MailItem named Body. [inferred] |
| 18 | BodyFormat | varchar(20) | YES |  |  | Field on CORE.MailItem named BodyFormat. [inferred] |
| 19 | Signature | nvarchar(max) | YES |  |  | Field on CORE.MailItem named Signature. [inferred] |
| 20 | Importance | varchar(6) | YES |  |  | Field on CORE.MailItem named Importance. [inferred] |
| 21 | Sensitivity | varchar(6) | YES |  |  | Field on CORE.MailItem named Sensitivity. [inferred] |
| 22 | SentTimeStamp | datetime | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 23 | Result | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 24 | ResultMessage | nvarchar(2000) | YES |  |  | Field on CORE.MailItem named ResultMessage. [inferred] |
| 25 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 26 | AddTimeStamp | datetime | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 27 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 28 | LastUpdateTimeStamp | datetime | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 29 | Password | nvarchar(20) | YES |  |  | Field on CORE.MailItem named Password. [inferred] |
