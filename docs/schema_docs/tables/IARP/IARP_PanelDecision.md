# IARP.IARP_PanelDecision

Supporting table in the IARP schema related to iarp panel decision.

## Snapshot

- Schema: IARP
- Table: IARP_PanelDecision
- Priority: supporting schema
- Approximate rows: 16
- Primary key: PanelDecisionIdentifier
- Column count: 20

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PanelDecisionIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ApplicationIdentifier | bigint | NO |  |  | Identifier that likely links this record to Application. [inferred] |
| 3 | Status | nvarchar(40) | NO |  |  | Status value describing the current state of the record. [inferred] |
| 4 | WorkIndependentlyScore | numeric(4,2) | YES |  |  | Field on IARP.IARP_PanelDecision named WorkIndependentlyScore. [inferred] |
| 5 | CollaborateScore | numeric(4,2) | YES |  |  | Field on IARP.IARP_PanelDecision named CollaborateScore. [inferred] |
| 6 | IdentifyOvercomeChallengesScore | numeric(4,2) | YES |  |  | Field on IARP.IARP_PanelDecision named IdentifyOvercomeChallengesScore. [inferred] |
| 7 | ImplementGoalsScore | numeric(4,2) | YES |  |  | Field on IARP.IARP_PanelDecision named ImplementGoalsScore. [inferred] |
| 8 | LeadingParticipatingProjectTeamsScore | numeric(4,2) | YES |  |  | Field on IARP.IARP_PanelDecision named LeadingParticipatingProjectTeamsScore. [inferred] |
| 9 | CommunicationSkillsScore | numeric(4,2) | YES |  |  | Field on IARP.IARP_PanelDecision named CommunicationSkillsScore. [inferred] |
| 10 | LearnExpandKnowledgeScore | numeric(4,2) | YES |  |  | Field on IARP.IARP_PanelDecision named LearnExpandKnowledgeScore. [inferred] |
| 11 | SkillSetMatchScore | numeric(4,2) | YES |  |  | Field on IARP.IARP_PanelDecision named SkillSetMatchScore. [inferred] |
| 12 | SupervisorWrittenRecommendation | numeric(4,2) | YES |  |  | Field on IARP.IARP_PanelDecision named SupervisorWrittenRecommendation. [inferred] |
| 13 | TotalScore | numeric(4,2) | YES |  |  | Field on IARP.IARP_PanelDecision named TotalScore. [inferred] |
| 14 | DecisionByEmployeeIdentifer | bigint | NO |  |  | Numeric value associated with this record. [inferred] |
| 15 | PanelMemberComments | nvarchar(500) | YES |  |  | Field on IARP.IARP_PanelDecision named PanelMemberComments. [inferred] |
| 16 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 17 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 18 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 19 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 20 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
