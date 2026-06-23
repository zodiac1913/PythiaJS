# CORE.Tester

Business-critical table in the CORE schema related to tester.

## Snapshot

- Schema: CORE
- Table: Tester
- Priority: primary schema
- Approximate rows: 2
- Primary key: TesterIdentifier
- Column count: 10

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | TesterIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | UserIdentifier | bigint | NO |  |  | Identifier that likely links this record to User. [inferred] |
| 3 | Moniker | nvarchar(150) | NO |  |  | Field on CORE.Tester named Moniker. [inferred] |
| 4 | Email | nvarchar(100) | NO |  |  | Email address related to this record. [inferred] |
| 5 | DaysToKeep | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 6 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
