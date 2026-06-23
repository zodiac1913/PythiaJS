# FEI.FEI_Cycle

Supporting table in the FEI schema related to fei cycle.

## Snapshot

- Schema: FEI
- Table: FEI_Cycle
- Priority: supporting schema
- Approximate rows: 4
- Primary key: CycleIdentifier
- Column count: 13

## Inbound Foreign Keys

- FK_FormCycle: FEI.FEI_Form via CycleIdentifier -> CycleIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CycleIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | CycleYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 3 | ApplicantStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 4 | ApplicantEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | ManagerStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 6 | ManagerEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 7 | ReviewerStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 8 | ReviewerEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 9 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 11 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 13 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
