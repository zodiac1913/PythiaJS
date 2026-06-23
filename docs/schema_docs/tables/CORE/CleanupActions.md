# CORE.CleanupActions

Business-critical table in the CORE schema related to cleanup actions.

## Snapshot

- Schema: CORE
- Table: CleanupActions
- Priority: primary schema
- Approximate rows: 10
- Primary key: CleanupActionsIdentifier
- Column count: 20

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CleanupActionsIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | GroupName | nvarchar(50) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | GroupSequence | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 4 | InGroupSequence | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 5 | CountSQL | nvarchar(max) | NO |  |  | Field on CORE.CleanupActions named CountSQL. [inferred] |
| 6 | ActionSQL | nvarchar(max) | NO |  |  | Field on CORE.CleanupActions named ActionSQL. [inferred] |
| 7 | TableName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 8 | TaskDefinitionIdentifier | bigint | YES |  |  | Identifier that likely links this record to TaskDefinition. [inferred] |
| 9 | IsActionActive | bit | NO |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 10 | IsActionLogged | bit | NO |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 11 | IsActionLoggedForReverse | bit | NO |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 12 | IsEmailAdmins | bit | NO |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 13 | IsEmailTaskAdmins | bit | NO |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 14 | IsEmailExecutiveOfficer | bit | NO |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 15 | IsEmailManager | bit | NO |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 16 | AdditionalEmails | nvarchar(max) | YES |  |  | Email address related to this record. [inferred] |
| 17 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 18 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 19 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 20 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
