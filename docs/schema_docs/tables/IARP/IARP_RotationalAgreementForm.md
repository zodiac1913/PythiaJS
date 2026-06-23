# IARP.IARP_RotationalAgreementForm

Supporting table in the IARP schema related to iarp rotational agreement form.

## Snapshot

- Schema: IARP
- Table: IARP_RotationalAgreementForm
- Priority: supporting schema
- Approximate rows: 19
- Primary key: RotationalAgreementFormIdentifier
- Column count: 20

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | RotationalAgreementFormIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ApplicationIdentifier | bigint | YES |  |  | Identifier that likely links this record to Application. [inferred] |
| 3 | HostAssignmentIdentifier | bigint | YES |  |  | Identifier that likely links this record to HostAssignment. [inferred] |
| 4 | CohortIdentifier | bigint | YES |  |  | Identifier that likely links this record to Cohort. [inferred] |
| 5 | StartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 6 | EndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 7 | Notes | varchar(4000) | YES |  |  | Field on IARP.IARP_RotationalAgreementForm named Notes. [inferred] |
| 8 | RotationalExperienceGoalAndObjective | varchar(4000) | YES |  |  | Field on IARP.IARP_RotationalAgreementForm named RotationalExperienceGoalAndObjective. [inferred] |
| 9 | RotationalExperienceTask | varchar(4000) | YES |  |  | Field on IARP.IARP_RotationalAgreementForm named RotationalExperienceTask. [inferred] |
| 10 | ParticipantEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ParticipantEmployee. [inferred] |
| 11 | ParticipantSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 12 | ManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerEmployee. [inferred] |
| 13 | ManagerSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 14 | HostManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to HostManagerEmployee. [inferred] |
| 15 | HostManagerSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 16 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 17 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 18 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 19 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 20 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
