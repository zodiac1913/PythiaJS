# AIGov.AIGov_IntakePath

Supporting table in the AIGov schema related to aigov intake path.

## Snapshot

- Schema: AIGov
- Table: AIGov_IntakePath
- Priority: supporting schema
- Approximate rows: 6
- Primary key: IntakePathIdentifier
- Column count: 6

## Inbound Foreign Keys

- FK_AIGov_AIIntake_IntakePath: AIGov.AIGov_AIIntake via IntakePathIdentifier -> IntakePathIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | IntakePathIdentifier | int | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | IntakePathCode | nvarchar(100) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | IntakePathName | nvarchar(200) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | IntakePathDescription | nvarchar(2000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | SortOrder | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 6 | IsActive | bit | NO |  | ((1)) | Boolean-style indicator showing whether this condition is true. [inferred] |
