# RPLR.RPLR_TableLink

Supporting table in the RPLR schema related to rplr table link.

## Snapshot

- Schema: RPLR
- Table: RPLR_TableLink
- Priority: supporting schema
- Approximate rows: 12
- Primary key: TableLinkIdentifier
- Column count: 16

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | TableLinkIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ColumnIdentifier | bigint | NO |  |  | Identifier that likely links this record to Column. [inferred] |
| 3 | ColumnName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | TableIdentifier | bigint | NO |  |  | Identifier that likely links this record to Table. [inferred] |
| 5 | TableName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 6 | LinkType | nvarchar(50) | NO |  |  | Type or category used to classify the record. [inferred] |
| 7 | FKTableIdentifier | bigint | NO |  |  | Identifier that likely links this record to FKTable. [inferred] |
| 8 | FKTableName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 9 | FKColumnIdentifier | bigint | NO |  |  | Identifier that likely links this record to FKColumn. [inferred] |
| 10 | FKColumnName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 11 | Relationship | nvarchar(50) | NO |  |  | Field on RPLR.RPLR_TableLink named Relationship. [inferred] |
| 12 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 15 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 16 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
