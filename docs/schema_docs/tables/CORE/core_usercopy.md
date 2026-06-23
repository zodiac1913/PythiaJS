# CORE.core_usercopy

Business-critical table in the CORE schema related to core usercopy.

## Snapshot

- Schema: CORE
- Table: core_usercopy
- Priority: primary schema
- Approximate rows: 15062
- Primary key: not declared
- Column count: 14

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | UserIdentifier | bigint | NO | IDENTITY |  | Identifier that likely links this record to User. [inferred] |
| 2 | LastName | nvarchar(50) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | FirstName | nvarchar(50) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | LogonName | nvarchar(50) | NO |  |  | Name or display label for this value. [inferred] |
| 5 | MiddleName | nvarchar(50) | NO |  |  | Name or display label for this value. [inferred] |
| 6 | Prefix | nvarchar(50) | YES |  |  | Field on CORE.core_usercopy named Prefix. [inferred] |
| 7 | Suffix | nvarchar(50) | YES |  |  | Field on CORE.core_usercopy named Suffix. [inferred] |
| 8 | TypeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Type. [inferred] |
| 9 | SocialSecurityNumber | nvarchar(50) | NO |  |  | Number used to identify or track this record. [inferred] |
| 10 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 12 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 14 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
