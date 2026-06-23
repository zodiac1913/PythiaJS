# FSTRS.FSTRS_FeedbackSurvey

Supporting table in the FSTRS schema related to fstrs feedback survey.

## Snapshot

- Schema: FSTRS
- Table: FSTRS_FeedbackSurvey
- Priority: supporting schema
- Approximate rows: 576
- Primary key: FeedbackSurveyIdentifier
- Column count: 17

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FeedbackSurveyIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | IsQuestion1 | varchar(1) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 3 | Question1Comment | varchar(4000) | YES |  |  | Field on FSTRS.FSTRS_FeedbackSurvey named Question1Comment. [inferred] |
| 4 | IsQuestion2A | varchar(1) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 5 | Question2AComment | varchar(4000) | YES |  |  | Field on FSTRS.FSTRS_FeedbackSurvey named Question2AComment. [inferred] |
| 6 | IsQuestion2B | varchar(1) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 7 | Question2BComment | varchar(4000) | YES |  |  | Field on FSTRS.FSTRS_FeedbackSurvey named Question2BComment. [inferred] |
| 8 | IsQuestion2C | varchar(1) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 9 | Question2CComment | varchar(4000) | YES |  |  | Field on FSTRS.FSTRS_FeedbackSurvey named Question2CComment. [inferred] |
| 10 | IsQuestion3 | varchar(1) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 11 | Question3Comment | varchar(4000) | YES |  |  | Field on FSTRS.FSTRS_FeedbackSurvey named Question3Comment. [inferred] |
| 12 | IsQuestion4 | varchar(1) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 13 | Question4Comment | varchar(4000) | YES |  |  | Field on FSTRS.FSTRS_FeedbackSurvey named Question4Comment. [inferred] |
| 14 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 15 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 16 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 17 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
