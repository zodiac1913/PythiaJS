# MAU.TestTable

Supporting table in the MAU schema related to test table.

## Snapshot

- Schema: MAU
- Table: TestTable
- Priority: supporting schema
- Approximate rows: 0
- Primary key: TestTableIdentifier
- Column count: 7

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | TestTableIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Test1 | bit | NO |  |  | Flag value stored as true or false. [inferred] |
| 3 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 4 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 5 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 6 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | DeleteTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
