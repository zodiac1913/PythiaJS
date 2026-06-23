# OT.OT_Budget

Supporting table in the OT schema related to ot budget.

## Snapshot

- Schema: OT
- Table: OT_Budget
- Priority: supporting schema
- Approximate rows: 18
- Primary key: BudgetIdentifier
- Column count: 21

## Inbound Foreign Keys

- FK_OT_BudgetHistory_OT_Budget: OT.OT_BudgetHistory via BudgetIdentifier -> BudgetIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | BudgetIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 3 | AdminCode | nvarchar(11) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 4 | ComponentAcronym | nvarchar(10) | NO |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 5 | ComponentName | nvarchar(60) | NO |  |  | Name or display label for this value. [inferred] |
| 6 | Year | nvarchar(4) | YES |  |  | Field on OT.OT_Budget named Year. [inferred] |
| 7 | YearStartDate | datetime2(7) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 8 | YearEndDate | datetime2(7) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 9 | QuarterOneAmount | numeric(18,2) | YES |  |  | Field on OT.OT_Budget named QuarterOneAmount. [inferred] |
| 10 | QuarterTwoAmount | numeric(18,2) | YES |  |  | Field on OT.OT_Budget named QuarterTwoAmount. [inferred] |
| 11 | QuarterThreeAmount | numeric(18,2) | YES |  |  | Field on OT.OT_Budget named QuarterThreeAmount. [inferred] |
| 12 | QuarterFourAmount | numeric(18,2) | YES |  |  | Field on OT.OT_Budget named QuarterFourAmount. [inferred] |
| 13 | RtasSpecialProgramDescriptionIdentifier | bigint | YES |  |  | Identifier that likely links this record to RtasSpecialProgramDescription. [inferred] |
| 14 | RtasSpecialProgramDescription | nvarchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 15 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 16 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 17 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 18 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 19 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 20 | SubCategory | nvarchar(255) | YES |  |  | Field on OT.OT_Budget named SubCategory. [inferred] |
| 21 | CommonAccountingNumber | nvarchar(255) | YES |  |  | Number used to identify or track this record. [inferred] |
