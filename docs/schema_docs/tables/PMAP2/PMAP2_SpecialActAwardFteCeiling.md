# PMAP2.PMAP2_SpecialActAwardFteCeiling

Supporting table in the PMAP2 schema related to pmap2 special act award fte ceiling.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_SpecialActAwardFteCeiling
- Priority: supporting schema
- Approximate rows: 180
- Primary key: SpecialActAwardFteCeilingIdentifier
- Column count: 15

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SpecialActAwardFteCeilingIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | PayPeriodIdentifier | bigint | YES |  |  | Identifier that likely links this record to PayPeriod. [inferred] |
| 3 | AppraisalYear | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 4 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 5 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 6 | OfficeName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | OfficeAdmin | nvarchar(11) | YES |  |  | Field on PMAP2.PMAP2_SpecialActAwardFteCeiling named OfficeAdmin. [inferred] |
| 8 | OfficeBudget | numeric(11,4) | YES |  |  | Field on PMAP2.PMAP2_SpecialActAwardFteCeiling named OfficeBudget. [inferred] |
| 9 | FteCeiling | numeric(8,4) | YES |  |  | Field on PMAP2.PMAP2_SpecialActAwardFteCeiling named FteCeiling. [inferred] |
| 10 | OfficeTimeOffHours | numeric(10,4) | YES |  |  | Field on PMAP2.PMAP2_SpecialActAwardFteCeiling named OfficeTimeOffHours. [inferred] |
| 11 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 13 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 15 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
