# MAU.AppOwner

Supporting table in the MAU schema related to app owner.

## Snapshot

- Schema: MAU
- Table: AppOwner
- Priority: supporting schema
- Approximate rows: 3
- Primary key: AppOwnerIdentifier
- Column count: 10

## Outbound Foreign Keys

- FK_AppOwner_App: MAU.App via AppIdentifier -> AppIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AppOwnerIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AppIdentifier | bigint | YES |  |  | Identifier that likely links this record to App. [inferred] |
| 3 | UserIdentifier | bigint | YES |  |  | Identifier that likely links this record to User. [inferred] |
| 4 | Name | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | Email | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 6 | Phone | nvarchar(30) | YES |  |  | Phone number related to this record. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
