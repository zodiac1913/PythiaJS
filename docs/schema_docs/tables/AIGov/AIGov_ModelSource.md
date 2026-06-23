# AIGov.AIGov_ModelSource

Supporting table in the AIGov schema related to aigov model source.

## Snapshot

- Schema: AIGov
- Table: AIGov_ModelSource
- Priority: supporting schema
- Approximate rows: 3
- Primary key: ModelSourceIdentifier
- Column count: 7

## Inbound Foreign Keys

- FK_AIGov_AIIntake_ModelSource: AIGov.AIGov_AIIntake via ModelSourceIdentifier -> ModelSourceIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ModelSourceIdentifier | int | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ModelSourceCode | nvarchar(100) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | ModelSourceName | nvarchar(200) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | ModelSourceDescription | nvarchar(2000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | AppliesToCapabilityFamilies | nvarchar(1000) | YES |  |  | Field on AIGov.AIGov_ModelSource named AppliesToCapabilityFamilies. [inferred] |
| 6 | SortOrder | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 7 | IsActive | bit | NO |  | ((1)) | Boolean-style indicator showing whether this condition is true. [inferred] |
