# EDP.EDP_Goal

Supporting table in the EDP schema related to edp goal.

## Snapshot

- Schema: EDP
- Table: EDP_Goal
- Priority: supporting schema
- Approximate rows: 48
- Primary key: GoalIdentifier
- Column count: 16

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | GoalIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FormIdentifier | bigint | NO |  |  | Identifier that likely links this record to Form. [inferred] |
| 3 | DevelopmentActivity | nvarchar(2000) | YES |  |  | Field on EDP.EDP_Goal named DevelopmentActivity. [inferred] |
| 4 | DevelopmentType | nvarchar(15) | YES |  |  | Type or category used to classify the record. [inferred] |
| 5 | Competency1 | nvarchar(25) | YES |  |  | Field on EDP.EDP_Goal named Competency1. [inferred] |
| 6 | Competency2 | nvarchar(25) | YES |  |  | Field on EDP.EDP_Goal named Competency2. [inferred] |
| 7 | Competency3 | nvarchar(25) | YES |  |  | Field on EDP.EDP_Goal named Competency3. [inferred] |
| 8 | LearningGoal | nvarchar(2000) | YES |  |  | Field on EDP.EDP_Goal named LearningGoal. [inferred] |
| 9 | BeginningDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 10 | EndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 11 | EstimatedCost | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 12 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 14 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 16 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
