# CATT.CATT_Attachment

Supporting table in the CATT schema related to catt attachment.

## Snapshot

- Schema: CATT
- Table: CATT_Attachment
- Priority: supporting schema
- Approximate rows: 9
- Primary key: AttachmentIdentifier
- Column count: 14

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AttachmentIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | RequestIdentifier | bigint | NO |  |  | Identifier that likely links this record to Request. [inferred] |
| 3 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 4 | FirstLastName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 5 | FileName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 6 | FileDescription | nvarchar(255) | NO |  |  | Longer descriptive text for this value. [inferred] |
| 7 | FileBinary | varbinary(max) | NO |  |  | Field on CATT.CATT_Attachment named FileBinary. [inferred] |
| 8 | FileAssignedTo | nvarchar(100) | NO |  |  | Field on CATT.CATT_Attachment named FileAssignedTo. [inferred] |
| 9 | DeactivateTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 11 | AddTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 13 | LastUpdateTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | DeleteTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
