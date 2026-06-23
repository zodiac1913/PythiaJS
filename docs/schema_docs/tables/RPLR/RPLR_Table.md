# RPLR.RPLR_Table

Supporting table in the RPLR schema related to rplr table.

## Snapshot

- Schema: RPLR
- Table: RPLR_Table
- Priority: supporting schema
- Approximate rows: 18
- Primary key: TableIdentifier
- Column count: 13

## Outbound Foreign Keys

- FKRPLR_TableProjectIdentifierRPLR.RPLR_ProjectProjectIdentifier: RPLR.RPLR_Project via ProjectIdentifier -> ProjectIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | TableIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ProjectIdentifier | bigint | YES |  |  | Identifier that likely links this record to Project. [inferred] |
| 3 | ProjectName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | TableSchema | nvarchar(50) | NO |  |  | Field on RPLR.RPLR_Table named TableSchema. [inferred] |
| 5 | TableName | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | NotationTitleSingular | nvarchar(255) | YES |  |  | Field on RPLR.RPLR_Table named NotationTitleSingular. [inferred] |
| 7 | NotationTitlePlural | nvarchar(255) | YES |  |  | Field on RPLR.RPLR_Table named NotationTitlePlural. [inferred] |
| 8 | AddUserName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 9 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
