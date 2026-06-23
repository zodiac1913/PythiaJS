# ESS.ESS_OfficeAssignments

Supporting table in the ESS schema related to ess office assignments.

## Snapshot

- Schema: ESS
- Table: ESS_OfficeAssignments
- Priority: supporting schema
- Approximate rows: 28
- Primary key: OfficeAssignmentIdentifier
- Column count: 11

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | OfficeAssignmentIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | OfficeName | varchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | OfficeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Office. [inferred] |
| 4 | EmployeeName | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | EmployeeUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to EmployeeUser. [inferred] |
| 6 | AddUserIdentifier | numeric(12,0) | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 7 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | LastUpdateUserIdentifier | numeric(12,0) | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
