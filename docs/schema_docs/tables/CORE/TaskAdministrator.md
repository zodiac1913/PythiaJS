# CORE.TaskAdministrator

Business-critical table in the CORE schema related to task administrator.

## Snapshot

- Schema: CORE
- Table: TaskAdministrator
- Priority: primary schema
- Approximate rows: 17
- Primary key: TaskAdministratorIdentifier
- Column count: 10

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | TaskAdministratorIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | TaskDefinitionIdentifier | bigint | YES |  |  | Identifier that likely links this record to TaskDefinition. [inferred] |
| 3 | UserIdentifier | bigint | YES |  |  | Identifier that likely links this record to User. [inferred] |
| 4 | UserName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | Email | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 6 | Phone | nvarchar(30) | YES |  |  | Phone number related to this record. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime | NO |  |  | Date and time associated with this attribute or event. [inferred] |
