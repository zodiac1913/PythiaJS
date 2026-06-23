# AIGov.AIGov_AIIntakeHighImpactDomain

Supporting table in the AIGov schema related to aigov aiintake high impact domain.

## Snapshot

- Schema: AIGov
- Table: AIGov_AIIntakeHighImpactDomain
- Priority: supporting schema
- Approximate rows: 0
- Primary key: AIIntakeHighImpactDomainIdentifier
- Column count: 3

## Outbound Foreign Keys

- FK_AIGov_AIIntakeHighImpactDomain_AIIntake: AIGov.AIGov_AIIntake via AIIntakeIdentifier -> AIIntakeIdentifier
- FK_AIGov_AIIntakeHighImpactDomain_HighImpactDomain: AIGov.AIGov_HighImpactDomain via HighImpactDomainIdentifier -> HighImpactDomainIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AIIntakeHighImpactDomainIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AIIntakeIdentifier | bigint | NO |  |  | Identifier that likely links this record to AIIntake. [inferred] |
| 3 | HighImpactDomainIdentifier | int | NO |  |  | Identifier that likely links this record to HighImpactDomain. [inferred] |
