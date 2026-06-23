# FTE.FTE_SpecialProgram

Supporting table in the FTE schema related to fte special program.

## Snapshot

- Schema: FTE
- Table: FTE_SpecialProgram
- Priority: supporting schema
- Approximate rows: 4814
- Primary key: SpecialProgramIdentifier
- Column count: 12

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SpecialProgramIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | SocialSecurityNumber | nvarchar(9) | YES |  |  | Number used to identify or track this record. [inferred] |
| 3 | ProgramDescriptionIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProgramDescription. [inferred] |
| 4 | ProgramStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | ComponentBaseHours | numeric(6,2) | YES |  |  | Field on FTE.FTE_SpecialProgram named ComponentBaseHours. [inferred] |
| 10 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 13 | DeactivateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | AddUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 16 | AddTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 17 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 18 | LastUpdateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
