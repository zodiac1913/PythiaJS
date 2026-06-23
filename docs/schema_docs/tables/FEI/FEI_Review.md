# FEI.FEI_Review

Supporting table in the FEI schema related to fei review.

## Snapshot

- Schema: FEI
- Table: FEI_Review
- Priority: supporting schema
- Approximate rows: 20
- Primary key: ReviewIdentifier
- Column count: 14

## Outbound Foreign Keys

- FK_ReviewForm: FEI.FEI_Form via FormIdentifier -> FormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ReviewIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FormIdentifier | bigint | NO |  |  | Identifier that likely links this record to Form. [inferred] |
| 3 | ReviewerUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to ReviewerUser. [inferred] |
| 4 | ReviewerFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | ChallengeScore | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 6 | QualificationScore | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 7 | RecommendationScore | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 8 | TotalScore | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 9 | Comments | nvarchar(max) | YES |  |  | Field on FEI.FEI_Review named Comments. [inferred] |
| 10 | IsDone | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 11 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 12 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 14 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
