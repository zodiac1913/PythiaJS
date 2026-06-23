# BUS.BUS_EfficiencyTracker

Supporting table in the BUS schema related to bus efficiency tracker.

## Snapshot

- Schema: BUS
- Table: BUS_EfficiencyTracker
- Priority: supporting schema
- Approximate rows: 692
- Primary key: EfficiencyTrackerIdentifier
- Column count: 33

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | EfficiencyTrackerIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | RowId | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 3 | StartTime | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 4 | CompletionTime | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 5 | Email | nvarchar(400) | YES |  |  | Email address related to this record. [inferred] |
| 6 | Name | nvarchar(400) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | PointOfContact | nvarchar(400) | YES |  |  | Field on BUS.BUS_EfficiencyTracker named PointOfContact. [inferred] |
| 8 | Component | nvarchar(100) | YES |  |  | Field on BUS.BUS_EfficiencyTracker named Component. [inferred] |
| 9 | ContractTitle | nvarchar(4000) | YES |  |  | Field on BUS.BUS_EfficiencyTracker named ContractTitle. [inferred] |
| 10 | Vendor | nvarchar(400) | YES |  |  | Field on BUS.BUS_EfficiencyTracker named Vendor. [inferred] |
| 11 | ContractNumber | nvarchar(400) | YES |  |  | Number used to identify or track this record. [inferred] |
| 12 | ContractActionType | nvarchar(400) | YES |  |  | Type or category used to classify the record. [inferred] |
| 13 | OagmCO | nvarchar(400) | YES |  |  | Field on BUS.BUS_EfficiencyTracker named OagmCO. [inferred] |
| 14 | Deadline | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 15 | ContractActionValue | decimal(18,2) | YES |  |  | Numeric value associated with this record. [inferred] |
| 16 | TotalContractValue | decimal(18,2) | YES |  |  | Numeric value associated with this record. [inferred] |
| 17 | ProjectNumbers | nvarchar(4000) | YES |  |  | Field on BUS.BUS_EfficiencyTracker named ProjectNumbers. [inferred] |
| 18 | FundingSources | nvarchar(4000) | YES |  |  | Field on BUS.BUS_EfficiencyTracker named FundingSources. [inferred] |
| 19 | ContractDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 20 | HhsContractEfficiencyAllignment | nvarchar(max) | YES |  |  | Field on BUS.BUS_EfficiencyTracker named HhsContractEfficiencyAllignment. [inferred] |
| 21 | Paa | nvarchar(4000) | YES |  |  | Field on BUS.BUS_EfficiencyTracker named Paa. [inferred] |
| 22 | SurveyComments | nvarchar(max) | YES |  |  | Field on BUS.BUS_EfficiencyTracker named SurveyComments. [inferred] |
| 23 | PaaDocumentation | nvarchar(max) | YES |  |  | Field on BUS.BUS_EfficiencyTracker named PaaDocumentation. [inferred] |
| 24 | CooTeamNotes | nvarchar(max) | YES |  |  | Field on BUS.BUS_EfficiencyTracker named CooTeamNotes. [inferred] |
| 25 | Status | nvarchar(4000) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 26 | NeedsEscalation | nvarchar(4000) | YES |  |  | Field on BUS.BUS_EfficiencyTracker named NeedsEscalation. [inferred] |
| 27 | SentToDepartmentDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 28 | ApprovalDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 29 | ResponseNumOfDays | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 30 | IsTimely | nvarchar(400) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 31 | DepartmentFeedback | nvarchar(max) | YES |  |  | Field on BUS.BUS_EfficiencyTracker named DepartmentFeedback. [inferred] |
| 32 | IsFollowUpRequired | nvarchar(400) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 33 | ApprovalDocumentation | nvarchar(max) | YES |  |  | Field on BUS.BUS_EfficiencyTracker named ApprovalDocumentation. [inferred] |
