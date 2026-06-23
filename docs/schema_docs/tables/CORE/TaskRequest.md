# CORE.TaskRequest

Request table that captures submitted task or access requests and their approval context.

## Snapshot

- Schema: CORE
- Table: TaskRequest
- Priority: primary schema
- Approximate rows: 662
- Primary key: TaskRequestIdentifier
- Column count: 17

## Usage Notes

- Use this table when the question is about submitted requests that resulted in workflow or task activity.
- Status, SubmittedDate, ApprovalDate, UserIdentifier, and RoleIdentifier are likely the highest-value fields for user-facing request tracking questions.
- Pair this table with CORE.TaskDefinition to understand what was requested and with CORE.User or CORE.Role to identify who or what access the request targeted.

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | TaskRequestIdentifier | bigint | NO | PK, IDENTITY |  | Primary key for the task request record. [inferred] |
| 2 | TaskDefinitionIdentifier | bigint | NO |  |  | Reference to the task definition that describes what was requested. [inferred] |
| 3 | UserIdentifier | bigint | YES |  |  | User account associated with the request. [inferred] |
| 4 | RoleIdentifier | bigint | YES |  |  | Role associated with the request when access is role-based. [inferred] |
| 5 | AccessLevel | int | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 6 | AccessLevelDescription | nvarchar(255) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 7 | Status | nvarchar(50) | YES |  |  | Current state of the request in the workflow or approval process. [inferred] |
| 8 | Justification | nvarchar(4000) | YES |  |  | Free-text explanation describing why the request was submitted. [inferred] |
| 9 | SubmittedDate | datetime2(7) | YES |  |  | Date the request was submitted. [inferred] |
| 10 | ApprovalDate | datetime2(7) | YES |  |  | Date the request was approved when approval occurred. [inferred] |
| 11 | ApproverUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ApproverUser. [inferred] |
| 12 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | DeactivateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 15 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 16 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 17 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
