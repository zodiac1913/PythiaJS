# OT.OT_BudgetHistory

Supporting table in the OT schema related to ot budget history.

## Snapshot

- Schema: OT
- Table: OT_BudgetHistory
- Priority: supporting schema
- Approximate rows: 24
- Primary key: BudgetHistoryIdentifier
- Column count: 22

## Outbound Foreign Keys

- FK_OT_BudgetHistory_OT_Budget: OT.OT_Budget via BudgetIdentifier -> BudgetIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | BudgetHistoryIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | BudgetIdentifier | bigint | NO |  |  | Identifier that likely links this record to Budget. [inferred] |
| 3 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 4 | AdminCode | nvarchar(11) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 5 | ComponentAcronym | nvarchar(10) | NO |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 6 | ComponentName | nvarchar(60) | NO |  |  | Name or display label for this value. [inferred] |
| 7 | Year | nvarchar(4) | YES |  |  | Field on OT.OT_BudgetHistory named Year. [inferred] |
| 8 | YearStartDate | datetime2(7) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 9 | YearEndDate | datetime2(7) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 10 | QuarterOneAmount | numeric(18,2) | YES |  |  | Field on OT.OT_BudgetHistory named QuarterOneAmount. [inferred] |
| 11 | QuarterTwoAmount | numeric(18,2) | YES |  |  | Field on OT.OT_BudgetHistory named QuarterTwoAmount. [inferred] |
| 12 | QuarterThreeAmount | numeric(18,2) | YES |  |  | Field on OT.OT_BudgetHistory named QuarterThreeAmount. [inferred] |
| 13 | QuarterFourAmount | numeric(18,2) | YES |  |  | Field on OT.OT_BudgetHistory named QuarterFourAmount. [inferred] |
| 14 | RtasSpecialProgramDescriptionIdentifier | bigint | YES |  |  | Identifier that likely links this record to RtasSpecialProgramDescription. [inferred] |
| 15 | RtasSpecialProgramDescription | nvarchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 16 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 17 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 18 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 19 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 20 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 21 | SubCategory | nvarchar(255) | YES |  |  | Field on OT.OT_BudgetHistory named SubCategory. [inferred] |
| 22 | CommonAccountingNumber | nvarchar(255) | YES |  |  | Number used to identify or track this record. [inferred] |
