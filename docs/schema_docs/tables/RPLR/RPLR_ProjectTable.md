# RPLR.RPLR_ProjectTable

Supporting table in the RPLR schema related to rplr project table.

## Snapshot

- Schema: RPLR
- Table: RPLR_ProjectTable
- Priority: supporting schema
- Approximate rows: 57
- Primary key: ProjectTableIdentifier
- Column count: 11

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ProjectTableIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ProjectIdentifier | bigint | NO |  |  | Identifier that likely links this record to Project. [inferred] |
| 3 | ProjectName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | TableName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | TableIdentifier | bigint | YES |  |  | Identifier that likely links this record to Table. [inferred] |
| 6 | ParentType | nvarchar(100) | YES |  |  | Type or category used to classify the record. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddUserName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 9 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
