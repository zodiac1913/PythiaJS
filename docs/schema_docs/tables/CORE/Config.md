# CORE.Config

Business-critical table in the CORE schema related to config.

## Snapshot

- Schema: CORE
- Table: Config
- Priority: primary schema
- Approximate rows: 1486
- Primary key: ConfigIdentifier
- Column count: 11

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ConfigIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Name | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | Value | nvarchar(max) | NO |  |  | Field on CORE.Config named Value. [inferred] |
| 4 | UserIdentifier | bigint | YES |  |  | Identifier that likely links this record to User. [inferred] |
| 5 | TaskIdentifier | bigint | YES |  |  | Identifier that likely links this record to Task. [inferred] |
| 6 | TaskDefinitionIdentifier | bigint | YES |  |  | Identifier that likely links this record to TaskDefinition. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
