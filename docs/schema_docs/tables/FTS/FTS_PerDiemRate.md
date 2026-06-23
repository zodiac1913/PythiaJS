# FTS.FTS_PerDiemRate

Supporting table in the FTS schema related to fts per diem rate.

## Snapshot

- Schema: FTS
- Table: FTS_PerDiemRate
- Priority: supporting schema
- Approximate rows: 36
- Primary key: PerDiemRateIdentifier
- Column count: 22

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PerDiemRateIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ZipCode | nvarchar(5) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | FiscalYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 4 | LodgingOctober | numeric(11,2) | NO |  |  | Field on FTS.FTS_PerDiemRate named LodgingOctober. [inferred] |
| 5 | LodgingNovember | numeric(11,2) | NO |  |  | Field on FTS.FTS_PerDiemRate named LodgingNovember. [inferred] |
| 6 | LodgingDecember | numeric(11,2) | NO |  |  | Field on FTS.FTS_PerDiemRate named LodgingDecember. [inferred] |
| 7 | LodgingJanuary | numeric(11,2) | NO |  |  | Field on FTS.FTS_PerDiemRate named LodgingJanuary. [inferred] |
| 8 | LodgingFebruary | numeric(11,2) | NO |  |  | Field on FTS.FTS_PerDiemRate named LodgingFebruary. [inferred] |
| 9 | LodgingMarch | numeric(11,2) | NO |  |  | Field on FTS.FTS_PerDiemRate named LodgingMarch. [inferred] |
| 10 | LodgingApril | numeric(11,2) | NO |  |  | Field on FTS.FTS_PerDiemRate named LodgingApril. [inferred] |
| 11 | LodgingMay | numeric(11,2) | NO |  |  | Field on FTS.FTS_PerDiemRate named LodgingMay. [inferred] |
| 12 | LodgingJune | numeric(11,2) | NO |  |  | Field on FTS.FTS_PerDiemRate named LodgingJune. [inferred] |
| 13 | LodgingJuly | numeric(11,2) | NO |  |  | Field on FTS.FTS_PerDiemRate named LodgingJuly. [inferred] |
| 14 | LodgingAugust | numeric(11,2) | NO |  |  | Field on FTS.FTS_PerDiemRate named LodgingAugust. [inferred] |
| 15 | LodgingSeptember | numeric(11,2) | NO |  |  | Field on FTS.FTS_PerDiemRate named LodgingSeptember. [inferred] |
| 16 | MealsAndIncidentalExpense | numeric(11,2) | NO |  |  | Field on FTS.FTS_PerDiemRate named MealsAndIncidentalExpense. [inferred] |
| 17 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 18 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 19 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 20 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 21 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 22 | PovMileRate | numeric(11,3) | NO |  | ((0.535)) | Field on FTS.FTS_PerDiemRate named PovMileRate. [inferred] |
