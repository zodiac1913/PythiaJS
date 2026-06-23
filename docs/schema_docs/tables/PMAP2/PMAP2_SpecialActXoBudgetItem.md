# PMAP2.PMAP2_SpecialActXoBudgetItem

Supporting table in the PMAP2 schema related to pmap2 special act xo budget item.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_SpecialActXoBudgetItem
- Priority: supporting schema
- Approximate rows: 2920
- Primary key: SpecialActXoBudgetItemIdentifier
- Column count: 13

## Inbound Foreign Keys

- FK_PMAP2_SpecialActXoBudgetItem_PMAP2_SpecialActXoBudgetItemHistory: PMAP2.PMAP2_SpecialActXoBudgetItemHistory via SpecialActXoBudgetItemIdentifier -> SpecialActXoBudgetItemIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SpecialActXoBudgetItemIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AppraisalYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 3 | BudgetCategory | nvarchar(400) | YES |  |  | Field on PMAP2.PMAP2_SpecialActXoBudgetItem named BudgetCategory. [inferred] |
| 4 | BudgetItemName | nvarchar(400) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | BudgetAmount | numeric(11,4) | YES |  |  | Field on PMAP2.PMAP2_SpecialActXoBudgetItem named BudgetAmount. [inferred] |
| 6 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 7 | GroupIdentifier | bigint | YES |  |  | Identifier that likely links this record to Group. [inferred] |
| 8 | ComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to Component. [inferred] |
| 9 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 11 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 13 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
