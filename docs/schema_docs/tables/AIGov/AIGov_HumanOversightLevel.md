# AIGov.AIGov_HumanOversightLevel

Supporting table in the AIGov schema related to aigov human oversight level.

## Snapshot

- Schema: AIGov
- Table: AIGov_HumanOversightLevel
- Priority: supporting schema
- Approximate rows: 4
- Primary key: HumanOversightLevelIdentifier
- Column count: 6

## Inbound Foreign Keys

- FK_AIGov_AIIntake_HumanOversightLevel: AIGov.AIGov_AIIntake via HumanOversightLevelIdentifier -> HumanOversightLevelIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | HumanOversightLevelIdentifier | int | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | HumanOversightLevelCode | nvarchar(100) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | HumanOversightLevelName | nvarchar(200) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | HumanOversightLevelDescription | nvarchar(2000) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 5 | SortOrder | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 6 | IsActive | bit | NO |  | ((1)) | Boolean-style indicator showing whether this condition is true. [inferred] |
