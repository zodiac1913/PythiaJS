# EDP.EDP_FormMandatoryTraining

Supporting table in the EDP schema related to edp form mandatory training.

## Snapshot

- Schema: EDP
- Table: EDP_FormMandatoryTraining
- Priority: supporting schema
- Approximate rows: 12
- Primary key: FormMandatoryTrainingIdentifier
- Column count: 9

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FormMandatoryTrainingIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FormIdentifier | bigint | NO |  |  | Identifier that likely links this record to Form. [inferred] |
| 3 | MandatoryTrainingChecklistIdentifier | bigint | NO |  |  | Identifier that likely links this record to MandatoryTrainingChecklist. [inferred] |
| 4 | CompletionDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 7 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
