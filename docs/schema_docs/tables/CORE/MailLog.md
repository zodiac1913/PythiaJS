# CORE.MailLog

Business-critical table in the CORE schema related to mail log.

## Snapshot

- Schema: CORE
- Table: MailLog
- Priority: primary schema
- Approximate rows: 21197
- Primary key: MailLogIdentifier
- Column count: 23

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | MailLogIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | OriginalMailLogIdentifier | bigint | YES |  |  | Identifier that likely links this record to OriginalMailLog. [inferred] |
| 3 | Caller | nvarchar(255) | NO |  |  | Field on CORE.MailLog named Caller. [inferred] |
| 4 | ChildIdentifier | bigint | YES |  |  | Identifier that likely links this record to Child. [inferred] |
| 5 | ChildTableName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | MailType | nvarchar(50) | YES |  |  | Type or category used to classify the record. [inferred] |
| 7 | WorkflowStep | nvarchar(50) | YES |  |  | Field on CORE.MailLog named WorkflowStep. [inferred] |
| 8 | LogMail | bit | NO |  | ((1)) | Flag value stored as true or false. [inferred] |
| 9 | TestMode | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 10 | ProfileName | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 11 | Recipients | varchar(max) | NO |  |  | Field on CORE.MailLog named Recipients. [inferred] |
| 12 | CopyRecipients | varchar(max) | YES |  |  | Field on CORE.MailLog named CopyRecipients. [inferred] |
| 13 | BlindCopyRecipients | varchar(max) | YES |  |  | Field on CORE.MailLog named BlindCopyRecipients. [inferred] |
| 14 | FromAddress | varchar(max) | YES |  |  | Field on CORE.MailLog named FromAddress. [inferred] |
| 15 | ReplyTo | varchar(max) | YES |  |  | Field on CORE.MailLog named ReplyTo. [inferred] |
| 16 | Subject | nvarchar(255) | YES |  |  | Field on CORE.MailLog named Subject. [inferred] |
| 17 | Body | nvarchar(max) | YES |  |  | Field on CORE.MailLog named Body. [inferred] |
| 18 | BodyFormat | varchar(20) | NO |  | ('TEXT') | Field on CORE.MailLog named BodyFormat. [inferred] |
| 19 | Importance | varchar(6) | NO |  | ('Normal') | Field on CORE.MailLog named Importance. [inferred] |
| 20 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 21 | AddTimeStamp | datetime | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 22 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 23 | LastUpdateTimeStamp | datetime | NO |  |  | Date and time associated with this attribute or event. [inferred] |
