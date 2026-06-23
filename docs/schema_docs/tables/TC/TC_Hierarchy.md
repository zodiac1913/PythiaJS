# TC.TC_Hierarchy

Supporting table in the TC schema related to tc hierarchy.

## Snapshot

- Schema: TC
- Table: TC_Hierarchy
- Priority: supporting schema
- Approximate rows: 37
- Primary key: HierarchyIdentifier
- Column count: 9

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | HierarchyIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to Component. [inferred] |
| 3 | ComponentName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | CitiHierarchies | nvarchar(100) | YES |  |  | Field on TC.TC_Hierarchy named CitiHierarchies. [inferred] |
| 5 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 6 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 8 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
