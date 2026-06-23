# CATT.CATT_Note

Supporting table in the CATT schema related to catt note.

## Snapshot

- Schema: CATT
- Table: CATT_Note
- Priority: supporting schema
- Approximate rows: 150
- Primary key: NoteIdentifier
- Column count: 12

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | NoteIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | RequestIdentifier | bigint | NO |  |  | Identifier that likely links this record to Request. [inferred] |
| 3 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 4 | FirstLastName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 5 | NoteAssignedTo | nvarchar(100) | NO |  |  | Field on CATT.CATT_Note named NoteAssignedTo. [inferred] |
| 6 | NotesDescription | nvarchar(max) | NO |  |  | Longer descriptive text for this value. [inferred] |
| 7 | DeactivateTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | DeleteTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
