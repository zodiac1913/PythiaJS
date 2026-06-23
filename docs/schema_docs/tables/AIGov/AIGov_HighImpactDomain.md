# AIGov.AIGov_HighImpactDomain

Supporting table in the AIGov schema related to aigov high impact domain.

## Snapshot

- Schema: AIGov
- Table: AIGov_HighImpactDomain
- Priority: supporting schema
- Approximate rows: 11
- Primary key: HighImpactDomainIdentifier
- Column count: 6

## Inbound Foreign Keys

- FK_AIGov_AIIntakeHighImpactDomain_HighImpactDomain: AIGov.AIGov_AIIntakeHighImpactDomain via HighImpactDomainIdentifier -> HighImpactDomainIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | HighImpactDomainIdentifier | int | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | HighImpactDomainCode | nvarchar(100) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | HighImpactDomainName | nvarchar(250) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | HighImpactDomainDescription | nvarchar(2000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | SortOrder | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 6 | IsActive | bit | NO |  | ((1)) | Boolean-style indicator showing whether this condition is true. [inferred] |
