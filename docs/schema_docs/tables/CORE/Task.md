# CORE.Task

Operational workflow or task instance table for in-flight or recorded task activity.

## Snapshot

- Schema: CORE
- Table: Task
- Priority: primary schema
- Approximate rows: 2421
- Primary key: TaskIdentifier
- Column count: 14

## Usage Notes

- Use this table for task or workflow instances rather than static definitions.
- Pair this with CORE.TaskDefinition or CORE.TaskRequest when the question is about workflow routing or request tracking.
- Treat this table as activity or execution context, not as the business definition of what the task means.

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | TaskIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | TaskDefinitionIdentifier | bigint | NO |  |  | Identifier that likely links this record to TaskDefinition. [inferred] |
| 3 | UserIdentifier | bigint | YES |  |  | Identifier that likely links this record to User. [inferred] |
| 4 | OriginalTaskIdentifier | bigint | YES |  |  | Identifier that likely links this record to OriginalTask. [inferred] |
| 5 | OriginalUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to OriginalUser. [inferred] |
| 6 | RoleIdentifier | bigint | YES |  |  | Identifier that likely links this record to Role. [inferred] |
| 7 | AccessLevel | int | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 8 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 17 | DeactivateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 19 | TaskRequestIdentifier | bigint | YES |  |  | Identifier that likely links this record to TaskRequest. [inferred] |
