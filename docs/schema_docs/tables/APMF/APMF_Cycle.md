# APMF.APMF_Cycle

Supporting table in the APMF schema related to apmf cycle.

## Snapshot

- Schema: APMF
- Table: APMF_Cycle
- Priority: supporting schema
- Approximate rows: 3
- Primary key: CycleIdentifier
- Column count: 13

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CycleIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | CycleTitle | nvarchar(50) | YES |  |  | Field on APMF.APMF_Cycle named CycleTitle. [inferred] |
| 3 | CycleYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 4 | CycleStartDate | datetime2(2) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 5 | CycleEndDate | datetime2(2) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 6 | ManagerReviewCloseDate | datetime2(2) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 7 | UpperManagerReviewCloseDate | datetime2(2) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 8 | DeactivateTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | DeleteTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
