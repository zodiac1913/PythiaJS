# CL.CL_Code

Supporting table in the CL schema related to cl code.

## Snapshot

- Schema: CL
- Table: CL_Code
- Priority: supporting schema
- Approximate rows: 0
- Primary key: CodeIdentifier
- Column count: 10

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CodeIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Title | nvarchar(255) | NO |  |  | Field on CL.CL_Code named Title. [inferred] |
| 3 | Description | nvarchar(4000) | NO |  | ('') | Longer descriptive text for this value. [inferred] |
| 4 | CodeType | nvarchar(100) | NO |  | ('') | Type or category used to classify the record. [inferred] |
| 5 | CodeText | nvarchar(max) | NO |  | ('') | Field on CL.CL_Code named CodeText. [inferred] |
| 6 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 7 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
