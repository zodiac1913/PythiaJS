# MAU.App

Supporting table in the MAU schema related to app.

## Snapshot

- Schema: MAU
- Table: App
- Priority: supporting schema
- Approximate rows: 15
- Primary key: AppIdentifier
- Column count: 16

## Inbound Foreign Keys

- FK_AppAssignment_App: MAU.AppAssignment via AppIdentifier -> AppIdentifier
- FK_AppOwner_App: MAU.AppOwner via AppIdentifier -> AppIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AppIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Location | nvarchar(255) | YES |  |  | Field on MAU.App named Location. [inferred] |
| 3 | Name | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | Description | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | Details | nvarchar(max) | YES |  |  | Field on MAU.App named Details. [inferred] |
| 6 | Icon | nvarchar(150) | YES |  |  | Field on MAU.App named Icon. [inferred] |
| 7 | IsDelegatable | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 8 | IsAssignable | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 9 | IsMultiLevelEntry | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 10 | Platform | nvarchar(150) | YES |  |  | Field on MAU.App named Platform. [inferred] |
| 11 | DeactivateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 14 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 16 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
