# FTE.FTE_SpecialProgramDescription

Supporting table in the FTE schema related to fte special program description.

## Snapshot

- Schema: FTE
- Table: FTE_SpecialProgramDescription
- Priority: supporting schema
- Approximate rows: 43
- Primary key: SpecialProgramDescriptionIdentifier
- Column count: 12

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SpecialProgramDescriptionIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | SpecialProgramDescription | nvarchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 3 | SpecialProgramStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 4 | SpecialProgramStopDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | CommonAccountingNumber | nvarchar(255) | YES |  |  | Number used to identify or track this record. [inferred] |
| 6 | EmployeeUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to EmployeeUser. [inferred] |
| 7 | DeactivateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | AddUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
