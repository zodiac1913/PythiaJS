# PMAP2.PMAP2_AwardBudget

Supporting table in the PMAP2 schema related to pmap2 award budget.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_AwardBudget
- Priority: supporting schema
- Approximate rows: 63
- Primary key: AwardBudgetIdentifier
- Column count: 11

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AwardBudgetIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | TotalBudget | numeric(10,2) | YES |  |  | Field on PMAP2.PMAP2_AwardBudget named TotalBudget. [inferred] |
| 3 | QsiBudget | numeric(10,2) | YES |  |  | Field on PMAP2.PMAP2_AwardBudget named QsiBudget. [inferred] |
| 4 | SetAsideCategory | varchar(4000) | YES |  |  | Field on PMAP2.PMAP2_AwardBudget named SetAsideCategory. [inferred] |
| 5 | SetAsideBudget | numeric(10,2) | YES |  |  | Field on PMAP2.PMAP2_AwardBudget named SetAsideBudget. [inferred] |
| 6 | AppraisalYear | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 7 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
