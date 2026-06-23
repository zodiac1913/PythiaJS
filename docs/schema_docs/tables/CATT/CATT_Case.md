# CATT.CATT_Case

Supporting table in the CATT schema related to catt case.

## Snapshot

- Schema: CATT
- Table: CATT_Case
- Priority: supporting schema
- Approximate rows: 9
- Primary key: CaseIdentifier
- Column count: 9

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CaseIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | CaseName | nvarchar(max) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | CaseComponent | nvarchar(10) | NO |  |  | Field on CATT.CATT_Case named CaseComponent. [inferred] |
| 4 | DeactivateTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 5 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 6 | AddTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 8 | LastUpdateTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | DeleteTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
