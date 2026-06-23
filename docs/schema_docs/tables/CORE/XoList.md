# CORE.XoList

Business-critical table in the CORE schema related to xo list.

## Snapshot

- Schema: CORE
- Table: XoList
- Priority: primary schema
- Approximate rows: 101
- Primary key: XoListIdentifier
- Column count: 15

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | XoListIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 3 | ComponentName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | UserIdentifier | bigint | NO |  |  | Identifier that likely links this record to User. [inferred] |
| 5 | UserName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | WorkPhone | nvarchar(15) | YES |  |  | Phone number related to this record. [inferred] |
| 7 | WorkLocation | nvarchar(100) | NO |  |  | Field on CORE.XoList named WorkLocation. [inferred] |
| 8 | MailStop | nvarchar(100) | YES |  |  | Field on CORE.XoList named MailStop. [inferred] |
| 9 | RoleIdentifier | bigint | NO |  |  | Identifier that likely links this record to Role. [inferred] |
| 10 | RoleName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 11 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 13 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 15 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
