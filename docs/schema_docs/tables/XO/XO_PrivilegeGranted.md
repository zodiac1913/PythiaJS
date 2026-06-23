# XO.XO_PrivilegeGranted

Supporting table in the XO schema related to xo privilege granted.

## Snapshot

- Schema: XO
- Table: XO_PrivilegeGranted
- Priority: supporting schema
- Approximate rows: 398
- Primary key: PrivilegeGrantedIdentifier
- Column count: 12

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PrivilegeGrantedIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ExecuitiveOfficerIdentifier | bigint | YES |  |  | Identifier that likely links this record to ExecuitiveOfficer. [inferred] |
| 3 | ComponentPrivilegePresetIdentifier | bigint | YES |  |  | Identifier that likely links this record to ComponentPrivilegePreset. [inferred] |
| 4 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 5 | PrivilegeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Privilege. [inferred] |
| 6 | PrivilegeName | nvarchar(150) | NO |  |  | Name or display label for this value. [inferred] |
| 7 | PrivilegeLevel | int | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 8 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
