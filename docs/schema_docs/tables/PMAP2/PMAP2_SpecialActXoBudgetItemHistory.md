# PMAP2.PMAP2_SpecialActXoBudgetItemHistory

Supporting table in the PMAP2 schema related to pmap2 special act xo budget item history.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_SpecialActXoBudgetItemHistory
- Priority: supporting schema
- Approximate rows: 30778
- Primary key: SpecialActXoBudgetItemHistoryIdentifier
- Column count: 14

## Outbound Foreign Keys

- FK_PMAP2_SpecialActXoBudgetItem_PMAP2_SpecialActXoBudgetItemHistory: PMAP2.PMAP2_SpecialActXoBudgetItem via SpecialActXoBudgetItemIdentifier -> SpecialActXoBudgetItemIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SpecialActXoBudgetItemHistoryIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | SpecialActXoBudgetItemIdentifier | bigint | NO |  |  | Identifier that likely links this record to SpecialActXoBudgetItem. [inferred] |
| 3 | AppraisalYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 4 | BudgetCategory | nvarchar(400) | YES |  |  | Field on PMAP2.PMAP2_SpecialActXoBudgetItemHistory named BudgetCategory. [inferred] |
| 5 | BudgetItemName | nvarchar(400) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | BudgetAmount | numeric(11,4) | YES |  |  | Field on PMAP2.PMAP2_SpecialActXoBudgetItemHistory named BudgetAmount. [inferred] |
| 7 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 8 | GroupIdentifier | bigint | YES |  |  | Identifier that likely links this record to Group. [inferred] |
| 9 | ComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to Component. [inferred] |
| 10 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 12 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 14 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
