# FTS.FTS_Cycle

Supporting table in the FTS schema related to fts cycle.

## Snapshot

- Schema: FTS
- Table: FTS_Cycle
- Priority: supporting schema
- Approximate rows: 9
- Primary key: CycleIdentifier
- Column count: 10

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CycleIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | CycleYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 3 | CycleNumber | int | NO |  |  | Number used to identify or track this record. [inferred] |
| 4 | StartDate | datetime2(0) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 5 | EndDate | datetime2(0) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 6 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
