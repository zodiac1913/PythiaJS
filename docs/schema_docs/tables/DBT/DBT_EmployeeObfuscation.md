# DBT.DBT_EmployeeObfuscation

Supporting table in the DBT schema related to dbt employee obfuscation.

## Snapshot

- Schema: DBT
- Table: DBT_EmployeeObfuscation
- Priority: supporting schema
- Approximate rows: 15781
- Primary key: EmployeeObfuscationIdentifier
- Column count: 8

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | EmployeeObfuscationIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | DataRequestIdentifier | bigint | NO |  |  | Identifier that likely links this record to DataRequest. [inferred] |
| 3 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 4 | ObfuscationIdentifier | bigint | NO |  |  | Identifier that likely links this record to Obfuscation. [inferred] |
| 5 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 6 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 8 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
