# AIGov.AIGov_CapabilityFamily

Supporting table in the AIGov schema related to aigov capability family.

## Snapshot

- Schema: AIGov
- Table: AIGov_CapabilityFamily
- Priority: supporting schema
- Approximate rows: 6
- Primary key: CapabilityFamilyIdentifier
- Column count: 6

## Inbound Foreign Keys

- FK_AIGov_AIIntake_CapabilityFamily: AIGov.AIGov_AIIntake via CapabilityFamilyIdentifier -> CapabilityFamilyIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CapabilityFamilyIdentifier | int | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | CapabilityFamilyCode | nvarchar(100) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | CapabilityFamilyName | nvarchar(200) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | CapabilityFamilyDescription | nvarchar(2000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | SortOrder | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 6 | IsActive | bit | NO |  | ((1)) | Boolean-style indicator showing whether this condition is true. [inferred] |
