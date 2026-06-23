# DBT.DBT_DataRequest

Supporting table in the DBT schema related to dbt data request.

## Snapshot

- Schema: DBT
- Table: DBT_DataRequest
- Priority: supporting schema
- Approximate rows: 12
- Primary key: DataRequestIdentifier
- Column count: 18

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | DataRequestIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Direction | nvarchar(8) | YES |  |  | Field on DBT.DBT_DataRequest named Direction. [inferred] |
| 3 | LogonEntity | nvarchar(100) | NO |  |  | Field on DBT.DBT_DataRequest named LogonEntity. [inferred] |
| 4 | UserName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | Password | nvarchar(100) | YES |  |  | Field on DBT.DBT_DataRequest named Password. [inferred] |
| 6 | Schemas | nvarchar(100) | YES |  |  | Field on DBT.DBT_DataRequest named Schemas. [inferred] |
| 7 | Component | nvarchar(100) | YES |  |  | Field on DBT.DBT_DataRequest named Component. [inferred] |
| 8 | Contact | nvarchar(100) | YES |  |  | Field on DBT.DBT_DataRequest named Contact. [inferred] |
| 9 | DuaOrMou | nvarchar(100) | YES |  |  | Field on DBT.DBT_DataRequest named DuaOrMou. [inferred] |
| 10 | DuaExpiration | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 11 | Description | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 12 | Notes | nvarchar(max) | YES |  |  | Field on DBT.DBT_DataRequest named Notes. [inferred] |
| 13 | Valid | bit | NO |  |  | Flag value stored as true or false. [inferred] |
| 15 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 16 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 17 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 18 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 19 | Obfuscation | bit | YES |  |  | Flag value stored as true or false. [inferred] |
