# DBT.DBT_ColumnDescription

Supporting table in the DBT schema related to dbt column description.

## Snapshot

- Schema: DBT
- Table: DBT_ColumnDescription
- Priority: supporting schema
- Approximate rows: 557
- Primary key: ColumnDescriptionIdentifier
- Column count: 9

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ColumnDescriptionIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | SchemaName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 3 | TableName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | ColumnName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | Description | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 6 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 7 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
