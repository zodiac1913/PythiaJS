# MAU.Log

Supporting table in the MAU schema related to log.

## Snapshot

- Schema: MAU
- Table: Log
- Priority: supporting schema
- Approximate rows: 58664
- Primary key: LogIdentifier
- Column count: 15

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | LogIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | LogType | nvarchar(50) | NO |  |  | Type or category used to classify the record. [inferred] |
| 3 | EventName | nvarchar(max) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | Source | nvarchar(255) | YES |  |  | Field on MAU.Log named Source. [inferred] |
| 5 | LogMessage | nvarchar(max) | NO |  |  | Field on MAU.Log named LogMessage. [inferred] |
| 6 | LogException | nvarchar(max) | YES |  |  | Field on MAU.Log named LogException. [inferred] |
| 7 | StackTrace | nvarchar(max) | NO |  |  | Field on MAU.Log named StackTrace. [inferred] |
| 8 | HelpTicketIdentifier | bigint | YES |  |  | Identifier that likely links this record to HelpTicket. [inferred] |
| 9 | AddUserAccount | nvarchar(50) | YES |  |  | Field on MAU.Log named AddUserAccount. [inferred] |
| 10 | Server | nvarchar(100) | YES |  |  | Field on MAU.Log named Server. [inferred] |
| 11 | AddUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 12 | AddUserName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 13 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 15 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
