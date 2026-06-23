# PMAP2.PMAP2_Plan

Supporting table in the PMAP2 schema related to pmap2 plan.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_Plan
- Priority: supporting schema
- Approximate rows: 111995
- Primary key: PlanIdentifier
- Column count: 99

## Inbound Foreign Keys

- FK_ItemPlan: PMAP2.PMAP2_Item via PlanIdentifier -> PlanIdentifier
- FK_PlanHistoryPlan: PMAP2.PMAP2_PlanHistory via PlanIdentifier -> PlanIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PlanIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | UserIdentifier | bigint | YES |  |  | Identifier that likely links this record to User. [inferred] |
| 3 | PayPeriodIdentifier | bigint | YES |  |  | Identifier that likely links this record to PayPeriod. [inferred] |
| 4 | ComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to Component. [inferred] |
| 5 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 6 | FirstName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | MiddleName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 8 | LastName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 9 | PositionName | nvarchar(200) | YES |  |  | Name or display label for this value. [inferred] |
| 10 | PayPlan | nvarchar(255) | YES |  |  | Field on PMAP2.PMAP2_Plan named PayPlan. [inferred] |
| 11 | JobSeries | nvarchar(255) | YES |  |  | Field on PMAP2.PMAP2_Plan named JobSeries. [inferred] |
| 12 | Grade | nvarchar(255) | YES |  |  | Field on PMAP2.PMAP2_Plan named Grade. [inferred] |
| 13 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 14 | GroupAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 15 | DivisionAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 16 | NewEmployeeDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 17 | ReassignDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 18 | PromoteDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 19 | PlanCreatorUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to PlanCreatorUser. [inferred] |
| 20 | DetailManagerUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to DetailManagerUser. [inferred] |
| 21 | Rating | nvarchar(2) | YES |  |  | Field on PMAP2.PMAP2_Plan named Rating. [inferred] |
| 22 | RatingDescription | numeric(3,2) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 23 | RatingOfRecord | nvarchar(2) | YES |  |  | Field on PMAP2.PMAP2_Plan named RatingOfRecord. [inferred] |
| 24 | RatingOfRecordDescription | numeric(3,2) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 25 | IsOnPerformanceImprovementNotice | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 26 | PlanType | nvarchar(2) | YES |  |  | Type or category used to classify the record. [inferred] |
| 27 | IsManagerPlan | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 28 | AppraisalYear | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 29 | AppraisalPeriodStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 30 | AppraisalPeriodEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 31 | MidYearAppraisalDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 32 | Status | nvarchar(50) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 33 | StatusDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 34 | IsDraft | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 35 | IsNoPlan | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 36 | NoPlanReason | nvarchar(max) | YES |  |  | Field on PMAP2.PMAP2_Plan named NoPlanReason. [inferred] |
| 37 | InitialPlanPlanIssueDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 38 | InitialPlanRatingOfficialDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 39 | InitialPlanRatingOfficialUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to InitialPlanRatingOfficialUser. [inferred] |
| 40 | InitialPlanRatingOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to InitialPlanRatingOfficialEmployee. [inferred] |
| 41 | InitialPlanReviewOfficialDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 42 | InitialPlanReviewOfficialUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to InitialPlanReviewOfficialUser. [inferred] |
| 43 | InitialPlanReviewOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to InitialPlanReviewOfficialEmployee. [inferred] |
| 44 | NoSignatureInitialPlan | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 45 | NoSignInitialPlanDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 46 | ProgressReview1PlanIssueDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 47 | ProgressReview1RatingOfficialDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 48 | ProgressReview1RatingOfficialUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview1RatingOfficialUser. [inferred] |
| 49 | ProgressReview1RatingOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview1RatingOfficialEmployee. [inferred] |
| 50 | NoSignatureProgressReview1 | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 51 | NoSignProgressReview1Description | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 52 | ProgressReview2PlanIssueDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 53 | ProgressReview2RatingOfficialDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 54 | ProgressReview2RatingOfficialUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview2RatingOfficialUser. [inferred] |
| 55 | ProgressReview2RatingOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview2RatingOfficialEmployee. [inferred] |
| 56 | NoSignatureProgressReview2 | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 57 | NoSignProgressReview2Description | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 58 | SummaryReviewPlanIssueDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 59 | SummaryReviewRatingOfficialUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to SummaryReviewRatingOfficialUser. [inferred] |
| 60 | SummaryReviewRatingOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to SummaryReviewRatingOfficialEmployee. [inferred] |
| 61 | SummaryReviewRatingOfficialDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 62 | SummaryReviewReviewOfficialDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 63 | SummaryReviewReviewOfficialUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to SummaryReviewReviewOfficialUser. [inferred] |
| 64 | SummaryReviewReviewOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to SummaryReviewReviewOfficialEmployee. [inferred] |
| 65 | NoSignatureSummaryReview | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 66 | NoSignSummaryReviewDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 67 | QsiAmount | numeric(10,2) | YES |  |  | Field on PMAP2.PMAP2_Plan named QsiAmount. [inferred] |
| 68 | AwardPercentage | numeric(3,3) | YES |  |  | Field on PMAP2.PMAP2_Plan named AwardPercentage. [inferred] |
| 69 | TotalAward | numeric(10,2) | YES |  |  | Field on PMAP2.PMAP2_Plan named TotalAward. [inferred] |
| 70 | TimeOffHours | numeric(3,2) | YES |  |  | Field on PMAP2.PMAP2_Plan named TimeOffHours. [inferred] |
| 71 | TimeOffValue | numeric(10,2) | YES |  |  | Field on PMAP2.PMAP2_Plan named TimeOffValue. [inferred] |
| 72 | CashValue | numeric(10,2) | YES |  |  | Field on PMAP2.PMAP2_Plan named CashValue. [inferred] |
| 73 | InitialPlanEmployeeSignDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 74 | ProgressReview1EmployeeSignDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 75 | ProgressReview2EmployeeSignDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 76 | SummaryReviewEmployeeSignDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 77 | InitialPlanEmployeeSignUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to InitialPlanEmployeeSignUser. [inferred] |
| 78 | ProgressReview1EmployeeSignUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview1EmployeeSignUser. [inferred] |
| 79 | ProgressReview2EmployeeSignUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview2EmployeeSignUser. [inferred] |
| 80 | SummaryReviewEmployeeSignUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to SummaryReviewEmployeeSignUser. [inferred] |
| 81 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 82 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 83 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 84 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 85 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 86 | EmployeeRatingComment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_Plan named EmployeeRatingComment. [inferred] |
| 87 | ProgressReview3PlanIssueDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 88 | ProgressReview3RatingOfficialDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 89 | ProgressReview3RatingOfficialUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview3RatingOfficialUser. [inferred] |
| 90 | ProgressReview3RatingOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview3RatingOfficialEmployee. [inferred] |
| 91 | ProgrressReview3EmployeeSignDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 92 | ProgressReview3EmployeeSignUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgressReview3EmployeeSignUser. [inferred] |
| 93 | EmployeePlanAssessment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_Plan named EmployeePlanAssessment. [inferred] |
| 94 | EmployeePreProgress1PlanAssessment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_Plan named EmployeePreProgress1PlanAssessment. [inferred] |
| 95 | EmployeePreProgress2PlanAssessment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_Plan named EmployeePreProgress2PlanAssessment. [inferred] |
| 96 | EmployeePreProgress3PlanAssessment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_Plan named EmployeePreProgress3PlanAssessment. [inferred] |
| 97 | FinalRatingJustification | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_Plan named FinalRatingJustification. [inferred] |
| 98 | NoSignatureProgressReview3 | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 99 | NoSignatureProgressReview3Description | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
