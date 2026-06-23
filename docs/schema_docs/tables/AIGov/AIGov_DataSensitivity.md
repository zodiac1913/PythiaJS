# AIGov.AIGov_DataSensitivity

Supporting table in the AIGov schema related to aigov data sensitivity.

## Snapshot

- Schema: AIGov
- Table: AIGov_DataSensitivity
- Priority: supporting schema
- Approximate rows: 4
- Primary key: DataSensitivityIdentifier
- Column count: 6

## Inbound Foreign Keys

- FK_AIGov_AIIntake_DataSensitivity: AIGov.AIGov_AIIntake via DataSensitivityIdentifier -> DataSensitivityIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | DataSensitivityIdentifier | int | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | DataSensitivityCode | nvarchar(100) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | DataSensitivityName | nvarchar(200) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | DataSensitivityDescription | nvarchar(2000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | SortOrder | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 6 | IsActive | bit | NO |  | ((1)) | Boolean-style indicator showing whether this condition is true. [inferred] |
