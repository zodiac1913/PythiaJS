# AIGov.AIGov_OutputBehavior

Supporting table in the AIGov schema related to aigov output behavior.

## Snapshot

- Schema: AIGov
- Table: AIGov_OutputBehavior
- Priority: supporting schema
- Approximate rows: 4
- Primary key: OutputBehaviorIdentifier
- Column count: 6

## Inbound Foreign Keys

- FK_AIGov_AIIntake_OutputBehavior: AIGov.AIGov_AIIntake via OutputBehaviorIdentifier -> OutputBehaviorIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | OutputBehaviorIdentifier | int | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | OutputBehaviorCode | nvarchar(100) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | OutputBehaviorName | nvarchar(200) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | OutputBehaviorDescription | nvarchar(2000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | SortOrder | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 6 | IsActive | bit | NO |  | ((1)) | Boolean-style indicator showing whether this condition is true. [inferred] |
