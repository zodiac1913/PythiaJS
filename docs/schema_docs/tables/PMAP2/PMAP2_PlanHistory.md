# PMAP2.PMAP2_PlanHistory

Supporting table in the PMAP2 schema related to pmap2 plan history.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_PlanHistory
- Priority: supporting schema
- Approximate rows: 673678
- Primary key: PlanHistoryIdentifier
- Column count: 94

## Outbound Foreign Keys

- FK_PlanHistoryPlan: PMAP2.PMAP2_Plan via PlanIdentifier -> PlanIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PlanHistoryIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | PlanIdentifier | bigint | YES |  |  | Identifier that likely links this record to Plan. [inferred] |
| 3 | UserIdentifier | bigint | YES |  |  | Identifier that likely links this record to User. [inferred] |
| 4 | PayPeriodIdentifier | bigint | YES |  |  | Identifier that likely links this record to PayPeriod. [inferred] |
| 5 | ComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to Component. [inferred] |
| 6 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 7 | FirstName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 8 | MiddleName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 9 | LastName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 10 | PositionName | nvarchar(200) | YES |  |  | Name or display label for this value. [inferred] |
| 11 | PayPlan | nvarchar(255) | YES |  |  | Field on PMAP2.PMAP2_PlanHistory named PayPlan. [inferred] |
| 12 | JobSeries | nvarchar(255) | YES |  |  | Field on PMAP2.PMAP2_PlanHistory named JobSeries. [inferred] |
| 13 | Grade | nvarchar(255) | YES |  |  | Field on PMAP2.PMAP2_PlanHistory named Grade. [inferred] |
| 14 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 15 | GroupAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 16 | DivisionAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 17 | NewEmployeeDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 18 | ReassignDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 19 | PromoteDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 20 | PlanCreatorUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to PlanCreatorUser. [inferred] |
| 21 | DetailManagerUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to DetailManagerUser. [inferred] |
| 22 | Rating | nvarchar(2) | YES |  |  | Field on PMAP2.PMAP2_PlanHistory named Rating. [inferred] |
| 23 | RatingDescription | numeric(3,2) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 24 | RatingOfRecord | nvarchar(2) | YES |  |  | Field on PMAP2.PMAP2_PlanHistory named RatingOfRecord. [inferred] |
| 25 | RatingOfRecordDescription | numeric(3,2) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 26 | IsOnPerformanceImprovementNotice | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 27 | PlanType | nvarchar(2) | YES |  |  | Type or category used to classify the record. [inferred] |
| 28 | IsManagerPlan | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 29 | AppraisalYear | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 30 | AppraisalPeriodStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 31 | AppraisalPeriodEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 32 | MidYearAppraisalDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 33 | Status | nvarchar(50) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 34 | StatusDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 35 | IsDraft | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 36 | IsNoPlan | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 37 | NoPlanReason | nvarchar(max) | YES |  |  | Field on PMAP2.PMAP2_PlanHistory named NoPlanReason. [inferred] |
| 38 | InitialPlanPlanIssueDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 39 | InitialPlanRatingOfficialDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 40 | InitialPlanRatingOfficialUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to InitialPlanRatingOfficialUser. [inferred] |
| 41 | InitialPlanRatingOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to InitialPlanRatingOfficialEmployee. [inferred] |
| 42 | InitialPlanReviewOfficialDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 43 | InitialPlanReviewOfficialUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to InitialPlanReviewOfficialUser. [inferred] |
| 44 | InitialPlanReviewOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to InitialPlanReviewOfficialEmployee. [inferred] |
| 45 | NoSignatureInitialPlan | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 46 | NoSignInitialPlanDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 47 | ProgressReview1PlanIssueDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 48 | ProgressReview1RatingOfficialDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 49 | ProgressReview1RatingOfficialUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview1RatingOfficialUser. [inferred] |
| 50 | ProgressReview1RatingOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview1RatingOfficialEmployee. [inferred] |
| 51 | NoSignatureProgressReview1 | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 52 | NoSignProgressReview1Description | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 53 | ProgressReview2PlanIssueDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 54 | ProgressReview2RatingOfficialDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 55 | ProgressReview2RatingOfficialUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview2RatingOfficialUser. [inferred] |
| 56 | ProgressReview2RatingOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview2RatingOfficialEmployee. [inferred] |
| 57 | NoSignatureProgressReview2 | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 58 | NoSignProgressReview2Description | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 59 | SummaryReviewPlanIssueDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 60 | SummaryReviewRatingOfficialUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to SummaryReviewRatingOfficialUser. [inferred] |
| 61 | SummaryReviewRatingOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to SummaryReviewRatingOfficialEmployee. [inferred] |
| 62 | SummaryReviewRatingOfficialDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 63 | SummaryReviewReviewOfficialDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 64 | SummaryReviewReviewOfficialUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to SummaryReviewReviewOfficialUser. [inferred] |
| 65 | SummaryReviewReviewOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to SummaryReviewReviewOfficialEmployee. [inferred] |
| 66 | NoSignatureSummaryReview | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 67 | NoSignSummaryReviewDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 68 | InitialPlanEmployeeSignDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 69 | ProgressReview1EmployeeSignDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 70 | ProgressReview2EmployeeSignDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 71 | SummaryReviewEmployeeSignDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 72 | InitialPlanEmployeeSignUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to InitialPlanEmployeeSignUser. [inferred] |
| 73 | ProgressReview1EmployeeSignUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview1EmployeeSignUser. [inferred] |
| 74 | ProgressReview2EmployeeSignUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview2EmployeeSignUser. [inferred] |
| 75 | SummaryReviewEmployeeSignUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to SummaryReviewEmployeeSignUser. [inferred] |
| 76 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 77 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 78 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 79 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 80 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 81 | EmployeeRatingComment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_PlanHistory named EmployeeRatingComment. [inferred] |
| 82 | ProgressReview3PlanIssueDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 83 | ProgressReview3RatingOfficialDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 84 | ProgressReview3RatingOfficialUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview3RatingOfficialUser. [inferred] |
| 85 | ProgressReview3RatingOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview3RatingOfficialEmployee. [inferred] |
| 86 | ProgrressReview3EmployeeSignDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 87 | ProgressReview3EmployeeSignUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview3EmployeeSignUser. [inferred] |
| 88 | EmployeePlanAssessment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_PlanHistory named EmployeePlanAssessment. [inferred] |
| 89 | EmployeePreProgress1PlanAssessment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_PlanHistory named EmployeePreProgress1PlanAssessment. [inferred] |
| 90 | EmployeePreProgress2PlanAssessment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_PlanHistory named EmployeePreProgress2PlanAssessment. [inferred] |
| 91 | EmployeePreProgress3PlanAssessment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_PlanHistory named EmployeePreProgress3PlanAssessment. [inferred] |
| 92 | FinalRatingJustification | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_PlanHistory named FinalRatingJustification. [inferred] |
| 93 | NoSignatureProgressReview3 | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 94 | NoSignatureProgressReview3Description | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
