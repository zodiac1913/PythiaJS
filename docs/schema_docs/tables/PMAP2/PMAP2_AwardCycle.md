# PMAP2.PMAP2_AwardCycle

Supporting table in the PMAP2 schema related to pmap2 award cycle.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_AwardCycle
- Priority: supporting schema
- Approximate rows: 6
- Primary key: AwardCycleIdentifier
- Column count: 10

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AwardCycleIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | PayPeriodIdentifier | bigint | YES |  |  | Identifier that likely links this record to PayPeriod. [inferred] |
| 3 | LastQsiDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 4 | LastPromotionDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | AppraisalYear | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 6 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
