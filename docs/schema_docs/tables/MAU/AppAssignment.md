# MAU.AppAssignment

Supporting table in the MAU schema related to app assignment.

## Snapshot

- Schema: MAU
- Table: AppAssignment
- Priority: supporting schema
- Approximate rows: 18
- Primary key: AppAssignmentIdentifier
- Column count: 12

## Outbound Foreign Keys

- FK_AppAssignment_App: MAU.App via AppIdentifier -> AppIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AppAssignmentIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AppIdentifier | bigint | NO |  |  | Identifier that likely links this record to App. [inferred] |
| 3 | UserIdentifier | bigint | YES |  |  | Identifier that likely links this record to User. [inferred] |
| 4 | OriginalAppAssignmentIdentifier | bigint | YES |  |  | Identifier that likely links this record to OriginalAppAssignment. [inferred] |
| 5 | OriginalUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to OriginalUser. [inferred] |
| 6 | RoleIdentifier | bigint | YES |  |  | Identifier that likely links this record to Role. [inferred] |
| 7 | AccessLevel | int | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 8 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
