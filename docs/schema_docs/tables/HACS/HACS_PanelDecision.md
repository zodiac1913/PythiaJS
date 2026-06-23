# HACS.HACS_PanelDecision

Supporting table in the HACS schema related to hacs panel decision.

## Snapshot

- Schema: HACS
- Table: HACS_PanelDecision
- Priority: supporting schema
- Approximate rows: 2
- Primary key: PanelDecisionIdentifier
- Column count: 20

## Outbound Foreign Keys

- FK_PanelDecision_Application: HACS.HACS_Application via ApplicationIdentifier -> ApplicationIdentifier
- FK_PanelDecision_Panelist: HACS.HACS_Panelist via PanelistIdentifer -> PanelistIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PanelDecisionIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ApplicationIdentifier | bigint | NO |  |  | Identifier that likely links this record to Application. [inferred] |
| 3 | PanelistIdentifer | bigint | NO |  |  | Numeric value associated with this record. [inferred] |
| 4 | Status | nvarchar(100) | NO |  |  | Status value describing the current state of the record. [inferred] |
| 5 | HealthcareExpertiseScore | numeric(4,2) | YES |  |  | Field on HACS.HACS_PanelDecision named HealthcareExpertiseScore. [inferred] |
| 6 | AlignmentWithKeyIssuesScore | numeric(4,2) | YES |  |  | Field on HACS.HACS_PanelDecision named AlignmentWithKeyIssuesScore. [inferred] |
| 7 | CollaborationAndCommunicationScore | numeric(4,2) | YES |  |  | Field on HACS.HACS_PanelDecision named CollaborationAndCommunicationScore. [inferred] |
| 8 | AdvocacySuccessAndRepresentingStakeholderGroupsScore | numeric(4,2) | YES |  |  | Field on HACS.HACS_PanelDecision named AdvocacySuccessAndRepresentingStakeholderGroupsScore. [inferred] |
| 9 | SectorCredibilityAndBalancingInterestsScore | numeric(4,2) | YES |  |  | Field on HACS.HACS_PanelDecision named SectorCredibilityAndBalancingInterestsScore. [inferred] |
| 10 | TechnicalAdvisorAndSubjectMatterExpertiseScore | numeric(4,2) | YES |  |  | Field on HACS.HACS_PanelDecision named TechnicalAdvisorAndSubjectMatterExpertiseScore. [inferred] |
| 11 | ResearchAndPublicationsRecordScore | numeric(4,2) | YES |  |  | Field on HACS.HACS_PanelDecision named ResearchAndPublicationsRecordScore. [inferred] |
| 12 | IndependentJudgmentAndCollaborationScore | numeric(4,2) | YES |  |  | Field on HACS.HACS_PanelDecision named IndependentJudgmentAndCollaborationScore. [inferred] |
| 13 | OverallCredibilityAndImpactScore | numeric(4,2) | YES |  |  | Field on HACS.HACS_PanelDecision named OverallCredibilityAndImpactScore. [inferred] |
| 14 | TotalScore | numeric(4,2) | YES |  |  | Field on HACS.HACS_PanelDecision named TotalScore. [inferred] |
| 15 | PanelistComments | nvarchar(500) | YES |  |  | Field on HACS.HACS_PanelDecision named PanelistComments. [inferred] |
| 16 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 17 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 18 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 19 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 20 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
