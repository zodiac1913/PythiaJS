# ALP.ALP_FormDecision

Supporting table in the ALP schema related to alp form decision.

## Snapshot

- Schema: ALP
- Table: ALP_FormDecision
- Priority: supporting schema
- Approximate rows: 7
- Primary key: FormDecisionIdentifier
- Column count: 14

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FormDecisionIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FormIdentifier | bigint | NO |  |  | Identifier that likely links this record to Form. [inferred] |
| 3 | Status | nvarchar(40) | NO |  |  | Status value describing the current state of the record. [inferred] |
| 4 | LeadershipExperienceScore | numeric(4,2) | YES |  |  | Field on ALP.ALP_FormDecision named LeadershipExperienceScore. [inferred] |
| 5 | ApplicationReasonScore | numeric(4,2) | YES |  |  | Field on ALP.ALP_FormDecision named ApplicationReasonScore. [inferred] |
| 6 | LeadershipEvidenceScore | numeric(4,2) | YES |  |  | Field on ALP.ALP_FormDecision named LeadershipEvidenceScore. [inferred] |
| 7 | TotalScore | numeric(6,2) | YES |  |  | Field on ALP.ALP_FormDecision named TotalScore. [inferred] |
| 8 | DecisionByEmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to DecisionByEmployee. [inferred] |
| 9 | Comments | nvarchar(max) | YES |  |  | Field on ALP.ALP_FormDecision named Comments. [inferred] |
| 10 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 12 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 14 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
