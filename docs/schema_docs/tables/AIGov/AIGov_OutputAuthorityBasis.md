# AIGov.AIGov_OutputAuthorityBasis

Supporting table in the AIGov schema related to aigov output authority basis.

## Snapshot

- Schema: AIGov
- Table: AIGov_OutputAuthorityBasis
- Priority: supporting schema
- Approximate rows: 3
- Primary key: OutputAuthorityBasisIdentifier
- Column count: 6

## Inbound Foreign Keys

- FK_AIGov_AIIntake_OutputAuthorityBasis: AIGov.AIGov_AIIntake via OutputAuthorityBasisIdentifier -> OutputAuthorityBasisIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | OutputAuthorityBasisIdentifier | int | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | OutputAuthorityBasisCode | nvarchar(50) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | OutputAuthorityBasisName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | OutputAuthorityBasisDescription | nvarchar(1000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | SortOrder | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 6 | IsActive | bit | NO |  | ((1)) | Boolean-style indicator showing whether this condition is true. [inferred] |
