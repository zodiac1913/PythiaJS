# PMAP2.PMAP2_AwardBudgetItem

Supporting table in the PMAP2 schema related to pmap2 award budget item.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_AwardBudgetItem
- Priority: supporting schema
- Approximate rows: 882
- Primary key: AwardBudgetItemIdentifier
- Column count: 12

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AwardBudgetItemIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AppraisalYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 3 | BudgetCategory | nvarchar(400) | YES |  |  | Field on PMAP2.PMAP2_AwardBudgetItem named BudgetCategory. [inferred] |
| 4 | BudgetItemName | nvarchar(400) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | BudgetAmount | numeric(10,2) | YES |  |  | Field on PMAP2.PMAP2_AwardBudgetItem named BudgetAmount. [inferred] |
| 6 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 7 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | RecipientCeiling | int | YES |  |  | Numeric value associated with this record. [inferred] |
