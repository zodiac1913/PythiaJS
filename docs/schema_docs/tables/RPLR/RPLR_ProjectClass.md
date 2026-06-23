# RPLR.RPLR_ProjectClass

Supporting table in the RPLR schema related to rplr project class.

## Snapshot

- Schema: RPLR
- Table: RPLR_ProjectClass
- Priority: supporting schema
- Approximate rows: 32
- Primary key: ProjectClassIdentifier
- Column count: 11

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ProjectClassIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ProjectIdentifier | bigint | NO |  |  | Identifier that likely links this record to Project. [inferred] |
| 3 | ProjectName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | ClassIdentifier | bigint | NO |  |  | Identifier that likely links this record to Class. [inferred] |
| 5 | ClassName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 6 | ParentType | nvarchar(100) | NO |  |  | Type or category used to classify the record. [inferred] |
| 7 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
