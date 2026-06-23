# CORE.MailConfig

Business-critical table in the CORE schema related to mail config.

## Snapshot

- Schema: CORE
- Table: MailConfig
- Priority: primary schema
- Approximate rows: 59
- Primary key: MailConfigIdentifier
- Column count: 23

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | MailConfigIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | TaskDefinitionIdentifier | bigint | NO |  | ((1)) | Identifier that likely links this record to TaskDefinition. [inferred] |
| 3 | MailType | nvarchar(50) | NO |  |  | Type or category used to classify the record. [inferred] |
| 4 | Description | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | WorkflowStep | nvarchar(50) | YES |  |  | Field on CORE.MailConfig named WorkflowStep. [inferred] |
| 6 | ChildTableName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | Recipients | varchar(max) | YES |  |  | Field on CORE.MailConfig named Recipients. [inferred] |
| 8 | CopyRecipients | varchar(max) | YES |  |  | Field on CORE.MailConfig named CopyRecipients. [inferred] |
| 9 | BlindCopyRecipients | varchar(max) | YES |  |  | Field on CORE.MailConfig named BlindCopyRecipients. [inferred] |
| 10 | FromAddress | varchar(max) | YES |  |  | Field on CORE.MailConfig named FromAddress. [inferred] |
| 11 | ReplyTo | varchar(max) | YES |  |  | Field on CORE.MailConfig named ReplyTo. [inferred] |
| 12 | Subject | nvarchar(255) | YES |  |  | Field on CORE.MailConfig named Subject. [inferred] |
| 13 | Body | nvarchar(max) | YES |  |  | Field on CORE.MailConfig named Body. [inferred] |
| 14 | BodyFormat | varchar(20) | YES |  | ('TEXT') | Field on CORE.MailConfig named BodyFormat. [inferred] |
| 15 | Signature | nvarchar(max) | YES |  |  | Field on CORE.MailConfig named Signature. [inferred] |
| 16 | Importance | varchar(6) | YES |  | ('Normal') | Field on CORE.MailConfig named Importance. [inferred] |
| 17 | Sensitivity | varchar(12) | YES |  | ('Normal') | Field on CORE.MailConfig named Sensitivity. [inferred] |
| 18 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 19 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 20 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 21 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 22 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 23 | Password | nvarchar(20) | YES |  |  | Field on CORE.MailConfig named Password. [inferred] |
