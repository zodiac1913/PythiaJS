# PMAP2.PMAP2_Rating

Supporting table in the PMAP2 schema related to pmap2 rating.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_Rating
- Priority: supporting schema
- Approximate rows: 0
- Primary key: RatingIdentifier
- Column count: 15

## Outbound Foreign Keys

- FK_RatingAppraisalYear: PMAP2.PMAP2_AppraisalYear via AppraisalYearIdentifier -> AppraisalYearIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | RatingIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AppraisalYearIdentifier | bigint | NO |  |  | Identifier that likely links this record to AppraisalYear. [inferred] |
| 3 | TierName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | TierAcronym | nvarchar(20) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 5 | TierOrder | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 6 | NumberTiers | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 7 | LowerBound | numeric(3,2) | YES |  |  | Field on PMAP2.PMAP2_Rating named LowerBound. [inferred] |
| 8 | UpperBound | numeric(3,2) | YES |  |  | Field on PMAP2.PMAP2_Rating named UpperBound. [inferred] |
| 9 | MultiplierNonManager | numeric(3,3) | YES |  |  | Field on PMAP2.PMAP2_Rating named MultiplierNonManager. [inferred] |
| 10 | MultiplierManager | numeric(3,3) | YES |  |  | Field on PMAP2.PMAP2_Rating named MultiplierManager. [inferred] |
| 11 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 13 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 15 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
