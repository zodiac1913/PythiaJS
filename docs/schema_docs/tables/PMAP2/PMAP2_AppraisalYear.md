# PMAP2.PMAP2_AppraisalYear

Supporting table in the PMAP2 schema related to pmap2 appraisal year.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_AppraisalYear
- Priority: supporting schema
- Approximate rows: 0
- Primary key: AppraisalYearIdentifier
- Column count: 23

## Inbound Foreign Keys

- FK_RatingAppraisalYear: PMAP2.PMAP2_Rating via AppraisalYearIdentifier -> AppraisalYearIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AppraisalYearIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AppraisalYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 3 | DelayedRatingDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 4 | DelayedReviewDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | CreateStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 6 | CreateEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 7 | ProgressReview1StartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 8 | ProgressReview1EndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 9 | ProgressReview2StartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 10 | ProgressReview2EndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 11 | SummaryReviewStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 12 | SummaryReviewEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 13 | AwardEligibilityDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 14 | QsiStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 15 | QsiEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 16 | TimeOffStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 17 | TimeOffEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 18 | NextAppraisalYearCreateDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 19 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 20 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 21 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 22 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 23 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
