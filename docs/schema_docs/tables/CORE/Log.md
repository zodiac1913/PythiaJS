# CORE.Log

Business-critical table in the CORE schema related to log.

## Snapshot

- Schema: CORE
- Table: Log
- Priority: primary schema
- Approximate rows: 1442740
- Primary key: LogIdentifier
- Column count: 20

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | LogIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | LogApp | nvarchar(50) | NO |  |  | Field on CORE.Log named LogApp. [inferred] |
| 3 | LogType | nvarchar(50) | NO |  |  | Type or category used to classify the record. [inferred] |
| 4 | LogMessage | nvarchar(max) | NO |  |  | Field on CORE.Log named LogMessage. [inferred] |
| 5 | LogException | nvarchar(max) | YES |  |  | Field on CORE.Log named LogException. [inferred] |
| 6 | LogSeverity | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 7 | TaskDefinitionIdentifier | bigint | YES |  |  | Identifier that likely links this record to TaskDefinition. [inferred] |
| 8 | TaskDefinitionTitle | nvarchar(100) | YES |  |  | Field on CORE.Log named TaskDefinitionTitle. [inferred] |
| 9 | ProjectIdentifier | bigint | YES |  |  | Identifier that likely links this record to Project. [inferred] |
| 10 | ProjectName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 11 | CustomerServiceIdentifier | bigint | YES |  |  | Identifier that likely links this record to CustomerService. [inferred] |
| 12 | ClassName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 13 | MethodName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 14 | AddUserAccount | nvarchar(50) | YES |  |  | Field on CORE.Log named AddUserAccount. [inferred] |
| 15 | Server | nvarchar(100) | YES |  |  | Field on CORE.Log named Server. [inferred] |
| 16 | AddUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 17 | AddUserName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 18 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 19 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 20 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
