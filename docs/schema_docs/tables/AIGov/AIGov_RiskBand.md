# AIGov.AIGov_RiskBand

Supporting table in the AIGov schema related to aigov risk band.

## Snapshot

- Schema: AIGov
- Table: AIGov_RiskBand
- Priority: supporting schema
- Approximate rows: 4
- Primary key: RiskBandIdentifier
- Column count: 7

## Inbound Foreign Keys

- FK_AIGov_AIIntake_RiskBand: AIGov.AIGov_AIIntake via RiskBandIdentifier -> RiskBandIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | RiskBandIdentifier | int | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | RiskBandCode | nvarchar(50) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | RiskBandName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | MinScore | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 5 | MaxScore | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 6 | SortOrder | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 7 | IsActive | bit | NO |  | ((1)) | Boolean-style indicator showing whether this condition is true. [inferred] |
