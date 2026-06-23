# PMAP2.PMAP2_Outcome

Supporting table in the PMAP2 schema related to pmap2 outcome.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_Outcome
- Priority: supporting schema
- Approximate rows: 560
- Primary key: OutcomeIdentifier
- Column count: 11

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | OutcomeIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | OutcomeNumber | int | YES |  |  | Number used to identify or track this record. [inferred] |
| 3 | OutcomeDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 4 | OutcomeType | nvarchar(2) | YES |  |  | Type or category used to classify the record. [inferred] |
| 5 | OutcomeCategory | nvarchar(2) | YES |  |  | Field on PMAP2.PMAP2_Outcome named OutcomeCategory. [inferred] |
| 6 | AppraisalYear | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 7 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
