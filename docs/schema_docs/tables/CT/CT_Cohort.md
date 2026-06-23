# CT.CT_Cohort

Supporting table in the CT schema related to ct cohort.

## Snapshot

- Schema: CT
- Table: CT_Cohort
- Priority: supporting schema
- Approximate rows: 23
- Primary key: CohortIdentifier
- Column count: 12

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CohortIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | CohortProgram | nvarchar(50) | NO |  |  | Field on CT.CT_Cohort named CohortProgram. [inferred] |
| 3 | CohortNumber | int | NO |  |  | Number used to identify or track this record. [inferred] |
| 4 | CohortYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 5 | StartDate | datetime2(2) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 6 | EndDate | datetime2(2) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 7 | DeactivateTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | DeleteTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
