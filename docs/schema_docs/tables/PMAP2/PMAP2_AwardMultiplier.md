# PMAP2.PMAP2_AwardMultiplier

Supporting table in the PMAP2 schema related to pmap2 award multiplier.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_AwardMultiplier
- Priority: supporting schema
- Approximate rows: 74
- Primary key: AwardMultiplierIdentifier
- Column count: 13

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AwardMultiplierIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | MultiplierRating | varchar(100) | YES |  |  | Field on PMAP2.PMAP2_AwardMultiplier named MultiplierRating. [inferred] |
| 3 | Multiplier | numeric(5,4) | YES |  |  | Field on PMAP2.PMAP2_AwardMultiplier named Multiplier. [inferred] |
| 4 | AppraisalYear | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 5 | IsManagerRange | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 6 | ScenarioNumber | int | NO |  |  | Number used to identify or track this record. [inferred] |
| 7 | ScenarioLabel | nvarchar(400) | YES |  |  | Field on PMAP2.PMAP2_AwardMultiplier named ScenarioLabel. [inferred] |
| 8 | ScenarioNote | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_AwardMultiplier named ScenarioNote. [inferred] |
| 9 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 11 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 13 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
