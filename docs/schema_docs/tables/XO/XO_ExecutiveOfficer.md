# XO.XO_ExecutiveOfficer

Supporting table in the XO schema related to xo executive officer.

## Snapshot

- Schema: XO
- Table: XO_ExecutiveOfficer
- Priority: supporting schema
- Approximate rows: 114
- Primary key: ExecutiveOfficerIdentifier
- Column count: 15

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ExecutiveOfficerIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | LegalFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 3 | PublishedName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | PublishedPhone | nvarchar(15) | YES |  |  | Phone number related to this record. [inferred] |
| 5 | PublishedWorkLocation | nvarchar(100) | NO |  |  | Field on XO.XO_ExecutiveOfficer named PublishedWorkLocation. [inferred] |
| 6 | PublishedMailStop | nvarchar(100) | YES |  |  | Field on XO.XO_ExecutiveOfficer named PublishedMailStop. [inferred] |
| 7 | RoleIdentifier | bigint | NO |  |  | Identifier that likely links this record to Role. [inferred] |
| 8 | RoleName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 9 | Email | nvarchar(150) | NO |  |  | Email address related to this record. [inferred] |
| 10 | UserIdentifier | bigint | NO |  |  | Identifier that likely links this record to User. [inferred] |
| 11 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 14 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
