# IDP.IDP_Goal

Supporting table in the IDP schema related to idp goal.

## Snapshot

- Schema: IDP
- Table: IDP_Goal
- Priority: supporting schema
- Approximate rows: 23
- Primary key: GoalIdentifier
- Column count: 17

## Outbound Foreign Keys

- FK__IDP_Goal__FormId__1DA47C07: IDP.IDP_Form via FormIdentifier -> FormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | GoalIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FormIdentifier | bigint | NO |  |  | Identifier that likely links this record to Form. [inferred] |
| 3 | KeyCareerGoals | nvarchar(max) | NO |  |  | Field on IDP.IDP_Goal named KeyCareerGoals. [inferred] |
| 4 | Milestones | nvarchar(max) | YES |  |  | Field on IDP.IDP_Goal named Milestones. [inferred] |
| 5 | TargetSkillsandCompentency | nvarchar(max) | YES |  |  | Field on IDP.IDP_Goal named TargetSkillsandCompentency. [inferred] |
| 6 | OtherCompentency | nvarchar(max) | YES |  |  | Field on IDP.IDP_Goal named OtherCompentency. [inferred] |
| 7 | TrainingandDevelopmentalActivity | nvarchar(max) | YES |  |  | Field on IDP.IDP_Goal named TrainingandDevelopmentalActivity. [inferred] |
| 8 | GoalStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 9 | GoalEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 10 | DaysLeftToComplete | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 11 | GoalsStatus | nvarchar(255) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 12 | ResourceRequired | nvarchar(max) | YES |  |  | Field on IDP.IDP_Goal named ResourceRequired. [inferred] |
| 13 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 14 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 16 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 17 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
