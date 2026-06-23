# XO.XO_ComponentAssigned

Supporting table in the XO schema related to xo component assigned.

## Snapshot

- Schema: XO
- Table: XO_ComponentAssigned
- Priority: supporting schema
- Approximate rows: 92
- Primary key: ComponentAssignedIdentifier
- Column count: 11

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ComponentAssignedIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ExecuitiveOfficerIdentifier | bigint | NO |  |  | Identifier that likely links this record to ExecuitiveOfficer. [inferred] |
| 3 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 4 | Published | bit | NO |  |  | Flag value stored as true or false. [inferred] |
| 5 | PublishedTitle | nvarchar(50) | NO |  |  | Field on XO.XO_ComponentAssigned named PublishedTitle. [inferred] |
| 6 | RoleIdentifier | bigint | YES |  |  | Identifier that likely links this record to Role. [inferred] |
| 7 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
