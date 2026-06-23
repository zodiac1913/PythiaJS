# HR.HR_Patco

Business-critical table in the HR schema related to hr patco.

## Snapshot

- Schema: HR
- Table: HR_Patco
- Priority: primary schema
- Approximate rows: 245
- Primary key: PatcoIdentifier
- Column count: 9

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PatcoIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ProfessionalClassification | nvarchar(1) | NO |  |  | Field on HR.HR_Patco named ProfessionalClassification. [inferred] |
| 3 | JobSeries | nvarchar(20) | NO |  |  | Field on HR.HR_Patco named JobSeries. [inferred] |
| 4 | Grade | nvarchar(20) | NO |  |  | Field on HR.HR_Patco named Grade. [inferred] |
| 5 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 7 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
