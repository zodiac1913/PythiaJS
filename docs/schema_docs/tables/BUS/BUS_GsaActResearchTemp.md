# BUS.BUS_GsaActResearchTemp

Supporting table in the BUS schema related to bus gsa act research temp.

## Snapshot

- Schema: BUS
- Table: BUS_GsaActResearchTemp
- Priority: supporting schema
- Approximate rows: 21481
- Primary key: BUS_GsaActResearchTempIdentifier
- Column count: 14

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | BUS_GsaActResearchTempIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Agency | nvarchar(100) | YES |  |  | Field on BUS.BUS_GsaActResearchTemp named Agency. [inferred] |
| 3 | Bureau | nvarchar(100) | YES |  |  | Field on BUS.BUS_GsaActResearchTemp named Bureau. [inferred] |
| 4 | LegalInterest | nvarchar(100) | YES |  |  | Field on BUS.BUS_GsaActResearchTemp named LegalInterest. [inferred] |
| 5 | BuildingCode | nvarchar(50) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 6 | OaNumber | nvarchar(50) | YES |  |  | Number used to identify or track this record. [inferred] |
| 7 | FullAddress | nvarchar(100) | YES |  |  | Field on BUS.BUS_GsaActResearchTemp named FullAddress. [inferred] |
| 8 | City | nvarchar(50) | YES |  |  | Field on BUS.BUS_GsaActResearchTemp named City. [inferred] |
| 9 | State | nvarchar(10) | YES |  |  | Field on BUS.BUS_GsaActResearchTemp named State. [inferred] |
| 10 | ZipCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 11 | SquareFeet | numeric(8,0) | YES |  |  | Field on BUS.BUS_GsaActResearchTemp named SquareFeet. [inferred] |
| 12 | CalculatedCapacity | numeric(5,0) | YES |  |  | Field on BUS.BUS_GsaActResearchTemp named CalculatedCapacity. [inferred] |
| 13 | PrimaryContact | nvarchar(50) | YES |  |  | Field on BUS.BUS_GsaActResearchTemp named PrimaryContact. [inferred] |
| 14 | PrimaryEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
