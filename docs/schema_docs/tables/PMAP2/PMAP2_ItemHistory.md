# PMAP2.PMAP2_ItemHistory

Supporting table in the PMAP2 schema related to pmap2 item history.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_ItemHistory
- Priority: supporting schema
- Approximate rows: 6989307
- Primary key: ItemHistoryIdentifier
- Column count: 29

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ItemHistoryIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ItemIdentifier | bigint | YES |  |  | Identifier that likely links this record to Item. [inferred] |
| 3 | PlanHistoryIdentifier | bigint | NO |  |  | Identifier that likely links this record to PlanHistory. [inferred] |
| 4 | OutcomeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Outcome. [inferred] |
| 5 | CmsStandardGoalIdentifier | bigint | YES |  |  | Identifier that likely links this record to CmsStandardGoal. [inferred] |
| 6 | ItemType | nvarchar(2) | YES |  |  | Type or category used to classify the record. [inferred] |
| 7 | ItemNumber | int | YES |  |  | Number used to identify or track this record. [inferred] |
| 8 | ItemDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 9 | TopPerformanceDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 10 | AcceptablePerformanceDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 11 | Rating | nvarchar(2) | YES |  |  | Field on PMAP2.PMAP2_ItemHistory named Rating. [inferred] |
| 12 | ProgressNarrative1 | nvarchar(max) | YES |  |  | Field on PMAP2.PMAP2_ItemHistory named ProgressNarrative1. [inferred] |
| 13 | ProgressNarrative2 | nvarchar(max) | YES |  |  | Field on PMAP2.PMAP2_ItemHistory named ProgressNarrative2. [inferred] |
| 14 | RatingFinalDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 15 | EmployeePreProgress1Achievements | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_ItemHistory named EmployeePreProgress1Achievements. [inferred] |
| 16 | EmployeePreProgress2Achievements | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_ItemHistory named EmployeePreProgress2Achievements. [inferred] |
| 17 | EmployeePreRatingAchievements | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_ItemHistory named EmployeePreRatingAchievements. [inferred] |
| 18 | DetailManagerProgress1Comment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_ItemHistory named DetailManagerProgress1Comment. [inferred] |
| 19 | DetailManagerProgress2Comment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_ItemHistory named DetailManagerProgress2Comment. [inferred] |
| 20 | DetailManagerRatingComment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_ItemHistory named DetailManagerRatingComment. [inferred] |
| 21 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 22 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 23 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 24 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 25 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 26 | EmployeePreProgress3Achievements | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_ItemHistory named EmployeePreProgress3Achievements. [inferred] |
| 27 | DetailManagerProgress3Comment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_ItemHistory named DetailManagerProgress3Comment. [inferred] |
| 28 | ProgressNarrative3 | nvarchar(max) | YES |  |  | Field on PMAP2.PMAP2_ItemHistory named ProgressNarrative3. [inferred] |
| 29 | AMPerformanceDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
