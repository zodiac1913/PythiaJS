# ALP.ALP_Cycle

Supporting table in the ALP schema related to alp cycle.

## Snapshot

- Schema: ALP
- Table: ALP_Cycle
- Priority: supporting schema
- Approximate rows: 7
- Primary key: CycleIdentifier
- Column count: 10

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CycleIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | CycleYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 3 | StartDate | datetime2(0) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 4 | EndDate | datetime2(0) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 5 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
