# AIGov.AIGov_TrbStage

Supporting table in the AIGov schema related to aigov trb stage.

## Snapshot

- Schema: AIGov
- Table: AIGov_TrbStage
- Priority: supporting schema
- Approximate rows: 2
- Primary key: TrbStageIdentifier
- Column count: 6

## Inbound Foreign Keys

- FK_AIGov_AIIntake_TrbStage: AIGov.AIGov_AIIntake via TrbStageIdentifier -> TrbStageIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | TrbStageIdentifier | int | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | TrbStageCode | nvarchar(100) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | TrbStageName | nvarchar(200) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | TrbStageDescription | nvarchar(2000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | SortOrder | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 6 | IsActive | bit | NO |  | ((1)) | Boolean-style indicator showing whether this condition is true. [inferred] |
