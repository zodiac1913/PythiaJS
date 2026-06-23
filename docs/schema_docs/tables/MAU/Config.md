# MAU.Config

Supporting table in the MAU schema related to config.

## Snapshot

- Schema: MAU
- Table: Config
- Priority: supporting schema
- Approximate rows: 6
- Primary key: ConfigIdentifier
- Column count: 13

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ConfigIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Name | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | Value | nvarchar(max) | NO |  |  | Field on MAU.Config named Value. [inferred] |
| 4 | UserIdentifier | bigint | YES |  |  | Identifier that likely links this record to User. [inferred] |
| 5 | SpecialApp | nvarchar(255) | YES |  |  | Field on MAU.Config named SpecialApp. [inferred] |
| 6 | AppIdentifier | bigint | YES |  |  | Identifier that likely links this record to App. [inferred] |
| 7 | AppAssignmentIdentifier | bigint | YES |  |  | Identifier that likely links this record to AppAssignment. [inferred] |
| 8 | IsTemporary | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 9 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
