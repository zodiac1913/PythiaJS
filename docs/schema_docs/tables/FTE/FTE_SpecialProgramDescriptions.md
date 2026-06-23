# FTE.FTE_SpecialProgramDescriptions

Supporting table in the FTE schema related to fte special program descriptions.

## Snapshot

- Schema: FTE
- Table: FTE_SpecialProgramDescriptions
- Priority: supporting schema
- Approximate rows: 174
- Primary key: SpecialProgramDescriptionIdentifier
- Column count: 15

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SpecialProgramDescriptionIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | SpecialProgramDescription | nvarchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 3 | SpecialProgramStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 4 | SpecialProgramStopDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | CommonAccountingNumber | nvarchar(255) | YES |  |  | Number used to identify or track this record. [inferred] |
| 6 | AdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 7 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 8 | DeactivateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | AddUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 11 | AddTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 13 | LastUpdateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | AvailableAmount | float | YES |  |  | Numeric value associated with this record. [inferred] |
| 15 | Available1415Amount | float | YES |  |  | Numeric value associated with this record. [inferred] |
