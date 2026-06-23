# AIGov.AIGov_AIIntakePatternTag

Supporting table in the AIGov schema related to aigov aiintake pattern tag.

## Snapshot

- Schema: AIGov
- Table: AIGov_AIIntakePatternTag
- Priority: supporting schema
- Approximate rows: 0
- Primary key: AIIntakePatternTagIdentifier
- Column count: 3

## Outbound Foreign Keys

- FK_AIGov_AIIntakePatternTag_AIIntake: AIGov.AIGov_AIIntake via AIIntakeIdentifier -> AIIntakeIdentifier
- FK_AIGov_AIIntakePatternTag_PatternTag: AIGov.AIGov_PatternTag via PatternTagIdentifier -> PatternTagIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AIIntakePatternTagIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AIIntakeIdentifier | bigint | NO |  |  | Identifier that likely links this record to AIIntake. [inferred] |
| 3 | PatternTagIdentifier | int | NO |  |  | Identifier that likely links this record to PatternTag. [inferred] |
