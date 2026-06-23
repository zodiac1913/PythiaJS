# DBT.DBT_DataRequestSchema

Supporting table in the DBT schema related to dbt data request schema.

## Snapshot

- Schema: DBT
- Table: DBT_DataRequestSchema
- Priority: supporting schema
- Approximate rows: 16
- Primary key: DataRequestSchemaIdentifier
- Column count: 7

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | DataRequestSchemaIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | DataRequestIdentifier | bigint | NO |  |  | Identifier that likely links this record to DataRequest. [inferred] |
| 3 | HrdhSchema | nvarchar(100) | YES |  |  | Field on DBT.DBT_DataRequestSchema named HrdhSchema. [inferred] |
| 4 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 5 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 7 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
