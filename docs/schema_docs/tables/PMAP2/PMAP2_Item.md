# PMAP2.PMAP2_Item

Supporting table in the PMAP2 schema related to pmap2 item.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_Item
- Priority: supporting schema
- Approximate rows: 1180751
- Primary key: ItemIdentifier
- Column count: 28

## Outbound Foreign Keys

- FK_ItemPlan: PMAP2.PMAP2_Plan via PlanIdentifier -> PlanIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ItemIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | PlanIdentifier | bigint | NO |  |  | Identifier that likely links this record to Plan. [inferred] |
| 3 | OutcomeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Outcome. [inferred] |
| 4 | CmsStandardGoalIdentifier | bigint | YES |  |  | Identifier that likely links this record to CmsStandardGoal. [inferred] |
| 5 | ItemType | nvarchar(2) | YES |  |  | Type or category used to classify the record. [inferred] |
| 6 | ItemNumber | int | YES |  |  | Number used to identify or track this record. [inferred] |
| 7 | ItemDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 8 | TopPerformanceDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 9 | AcceptablePerformanceDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 10 | Rating | nvarchar(2) | YES |  |  | Field on PMAP2.PMAP2_Item named Rating. [inferred] |
| 11 | ProgressNarrative1 | nvarchar(max) | YES |  |  | Field on PMAP2.PMAP2_Item named ProgressNarrative1. [inferred] |
| 12 | ProgressNarrative2 | nvarchar(max) | YES |  |  | Field on PMAP2.PMAP2_Item named ProgressNarrative2. [inferred] |
| 13 | RatingFinalDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 14 | EmployeePreProgress1Achievements | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_Item named EmployeePreProgress1Achievements. [inferred] |
| 15 | EmployeePreProgress2Achievements | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_Item named EmployeePreProgress2Achievements. [inferred] |
| 16 | EmployeePreRatingAchievements | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_Item named EmployeePreRatingAchievements. [inferred] |
| 17 | DetailManagerProgress1Comment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_Item named DetailManagerProgress1Comment. [inferred] |
| 18 | DetailManagerProgress2Comment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_Item named DetailManagerProgress2Comment. [inferred] |
| 19 | DetailManagerRatingComment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_Item named DetailManagerRatingComment. [inferred] |
| 20 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 21 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 22 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 23 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 24 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 25 | EmployeePreProgress3Achievements | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_Item named EmployeePreProgress3Achievements. [inferred] |
| 26 | DetailManagerProgress3Comment | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_Item named DetailManagerProgress3Comment. [inferred] |
| 27 | ProgressNarrative3 | nvarchar(max) | YES |  |  | Field on PMAP2.PMAP2_Item named ProgressNarrative3. [inferred] |
| 28 | AMPerformanceDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
