# PMAP2.PMAP2_AwardRange

Supporting table in the PMAP2 schema related to pmap2 award range.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_AwardRange
- Priority: supporting schema
- Approximate rows: 4
- Primary key: AwardRangeIdentifier
- Column count: 14

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AwardRangeIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | RangeRating | varchar(100) | YES |  |  | Field on PMAP2.PMAP2_AwardRange named RangeRating. [inferred] |
| 3 | RangeMultiplier | numeric(5,4) | YES |  |  | Field on PMAP2.PMAP2_AwardRange named RangeMultiplier. [inferred] |
| 4 | RangeUpperBound | numeric(5,2) | YES |  |  | Field on PMAP2.PMAP2_AwardRange named RangeUpperBound. [inferred] |
| 5 | RangeLowerBound | numeric(5,2) | YES |  |  | Field on PMAP2.PMAP2_AwardRange named RangeLowerBound. [inferred] |
| 6 | AppraisalYear | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 7 | IsManagerRange | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 8 | RangeAmount | numeric(10,2) | YES |  |  | Field on PMAP2.PMAP2_AwardRange named RangeAmount. [inferred] |
| 9 | RangePercent | numeric(5,2) | YES |  |  | Field on PMAP2.PMAP2_AwardRange named RangePercent. [inferred] |
| 10 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 12 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 14 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
