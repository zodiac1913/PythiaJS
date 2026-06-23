# RPLR.RPLR_TableColumn

Supporting table in the RPLR schema related to rplr table column.

## Snapshot

- Schema: RPLR
- Table: RPLR_TableColumn
- Priority: supporting schema
- Approximate rows: 647
- Primary key: TableColumnIdentifier
- Column count: 19

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | TableColumnIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | TableIdentifier | bigint | NO |  |  | Identifier that likely links this record to Table. [inferred] |
| 3 | TableName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | ColumnName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 5 | DataType | nvarchar(50) | NO |  |  | Type or category used to classify the record. [inferred] |
| 6 | IsKey | bit | NO |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 7 | IsNullable | bit | NO |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 8 | IsAutoNumber | bit | NO |  |  | Number used to identify or track this record. [inferred] |
| 9 | IsIndex | bit | NO |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 10 | Ordinal | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 11 | MaxLength | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 12 | NotationTitle | nvarchar(255) | YES |  |  | Field on RPLR.RPLR_TableColumn named NotationTitle. [inferred] |
| 13 | NotationDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 14 | AddUserName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 15 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 16 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 17 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 18 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 19 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
