# SERI.Log

Supporting table in the SERI schema related to log.

## Snapshot

- Schema: SERI
- Table: Log
- Priority: supporting schema
- Approximate rows: 3
- Primary key: Id
- Column count: 26

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Id | int | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Message | nvarchar(max) | YES |  |  | Field on SERI.Log named Message. [inferred] |
| 3 | MessageTemplate | nvarchar(max) | YES |  |  | Field on SERI.Log named MessageTemplate. [inferred] |
| 4 | Level | nvarchar(max) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 5 | TimeStamp | datetime | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | Exception | nvarchar(max) | YES |  |  | Field on SERI.Log named Exception. [inferred] |
| 7 | Properties | nvarchar(max) | YES |  |  | Field on SERI.Log named Properties. [inferred] |
| 8 | LogApp | nvarchar(50) | NO |  |  | Field on SERI.Log named LogApp. [inferred] |
| 9 | LogType | nvarchar(50) | NO |  |  | Type or category used to classify the record. [inferred] |
| 10 | LogMessage | nvarchar(max) | NO |  |  | Field on SERI.Log named LogMessage. [inferred] |
| 11 | LogException | nvarchar(max) | YES |  |  | Field on SERI.Log named LogException. [inferred] |
| 12 | LogSeverity | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 13 | TaskDefinitionIdentifier | bigint | YES |  |  | Identifier that likely links this record to TaskDefinition. [inferred] |
| 14 | TaskDefinitionTitle | nvarchar(100) | YES |  |  | Field on SERI.Log named TaskDefinitionTitle. [inferred] |
| 15 | ProjectIdentifier | bigint | YES |  |  | Identifier that likely links this record to Project. [inferred] |
| 16 | ProjectName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 17 | CustomerServiceIdentifier | bigint | YES |  |  | Identifier that likely links this record to CustomerService. [inferred] |
| 18 | ClassName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 19 | MethodName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 20 | AddUserAccount | nvarchar(50) | YES |  |  | Field on SERI.Log named AddUserAccount. [inferred] |
| 21 | Server | nvarchar(100) | YES |  |  | Field on SERI.Log named Server. [inferred] |
| 22 | AddUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 23 | AddUserName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 24 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 25 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 26 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
