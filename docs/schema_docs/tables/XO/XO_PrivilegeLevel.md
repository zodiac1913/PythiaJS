# XO.XO_PrivilegeLevel

Supporting table in the XO schema related to xo privilege level.

## Snapshot

- Schema: XO
- Table: XO_PrivilegeLevel
- Priority: supporting schema
- Approximate rows: 0
- Primary key: PrivilegeLevelIdentifier
- Column count: 10

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PrivilegeLevelIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | PrivilegeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Privilege. [inferred] |
| 3 | Value | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 4 | Name | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | Description | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 6 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
