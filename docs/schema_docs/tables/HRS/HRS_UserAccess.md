# HRS.HRS_UserAccess

Supporting table in the HRS schema related to hrs user access.

## Snapshot

- Schema: HRS
- Table: HRS_UserAccess
- Priority: supporting schema
- Approximate rows: 0
- Primary key: UserAccessIdentifier
- Column count: 8

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | UserAccessIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | UserIdentifier | bigint | NO |  |  | Identifier that likely links this record to User. [inferred] |
| 3 | LogonName | nvarchar(50) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | LastAccessTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 5 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 6 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 8 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
