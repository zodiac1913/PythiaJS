# RPLR.RPLR_Project

Supporting table in the RPLR schema related to rplr project.

## Snapshot

- Schema: RPLR
- Table: RPLR_Project
- Priority: supporting schema
- Approximate rows: 4
- Primary key: ProjectIdentifier
- Column count: 16

## Inbound Foreign Keys

- FKRPLR_TableProjectIdentifierRPLR.RPLR_ProjectProjectIdentifier: RPLR.RPLR_Table via ProjectIdentifier -> ProjectIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ProjectIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ProjectName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | ParentName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | ParentIdentifier | bigint | YES |  |  | Identifier that likely links this record to Parent. [inferred] |
| 5 | ParentType | nvarchar(100) | YES |  |  | Type or category used to classify the record. [inferred] |
| 6 | NameSpace | nvarchar(255) | YES |  |  | Field on RPLR.RPLR_Project named NameSpace. [inferred] |
| 7 | ProjectType | nvarchar(50) | YES |  |  | Type or category used to classify the record. [inferred] |
| 8 | Language | nvarchar(50) | YES |  |  | Field on RPLR.RPLR_Project named Language. [inferred] |
| 9 | OutputType | nvarchar(50) | YES |  |  | Type or category used to classify the record. [inferred] |
| 10 | Version | nvarchar(10) | YES |  |  | Field on RPLR.RPLR_Project named Version. [inferred] |
| 11 | Documentation | nvarchar(max) | YES |  |  | Field on RPLR.RPLR_Project named Documentation. [inferred] |
| 12 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 13 | AddUserName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 14 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 16 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
