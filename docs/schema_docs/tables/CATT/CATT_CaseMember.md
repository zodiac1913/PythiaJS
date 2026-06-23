# CATT.CATT_CaseMember

Supporting table in the CATT schema related to catt case member.

## Snapshot

- Schema: CATT
- Table: CATT_CaseMember
- Priority: supporting schema
- Approximate rows: 17
- Primary key: CaseMemberIdentifier
- Column count: 11

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CaseMemberIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | CaseEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to CaseEmployee. [inferred] |
| 3 | CaseFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | CaseIdentifier | bigint | NO |  |  | Identifier that likely links this record to Case. [inferred] |
| 5 | CaseEmail | nvarchar(max) | NO |  |  | Email address related to this record. [inferred] |
| 6 | DeactivateTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | DeleteTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
