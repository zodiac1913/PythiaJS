# CT.CT_Employee

Supporting table in the CT schema related to ct employee.

## Snapshot

- Schema: CT
- Table: CT_Employee
- Priority: supporting schema
- Approximate rows: 437
- Primary key: CohortEmployeeIdentifier
- Column count: 9

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CohortEmployeeIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | CohortIdentifier | bigint | NO |  |  | Identifier that likely links this record to Cohort. [inferred] |
| 3 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 4 | DeactivateTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 5 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 6 | AddTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 8 | LastUpdateTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | DeleteTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
