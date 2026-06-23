# AIGov.AIGov_PatternTag

Supporting table in the AIGov schema related to aigov pattern tag.

## Snapshot

- Schema: AIGov
- Table: AIGov_PatternTag
- Priority: supporting schema
- Approximate rows: 8
- Primary key: PatternTagIdentifier
- Column count: 6

## Inbound Foreign Keys

- FK_AIGov_AIIntakePatternTag_PatternTag: AIGov.AIGov_AIIntakePatternTag via PatternTagIdentifier -> PatternTagIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PatternTagIdentifier | int | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | PatternTagCode | nvarchar(100) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | PatternTagName | nvarchar(200) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | PatternTagDescription | nvarchar(2000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | SortOrder | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 6 | IsActive | bit | NO |  | ((1)) | Boolean-style indicator showing whether this condition is true. [inferred] |
