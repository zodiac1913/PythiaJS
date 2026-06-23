# CATT.CATT_Survey

Supporting table in the CATT schema related to catt survey.

## Snapshot

- Schema: CATT
- Table: CATT_Survey
- Priority: supporting schema
- Approximate rows: 6
- Primary key: SurveyIdentifier
- Column count: 13

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SurveyIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | RequestIdentifier | bigint | NO |  |  | Identifier that likely links this record to Request. [inferred] |
| 3 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 4 | FirstLastName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 5 | ResponseOne | nvarchar(100) | YES |  |  | Field on CATT.CATT_Survey named ResponseOne. [inferred] |
| 6 | ResponseTwo | nvarchar(100) | YES |  |  | Field on CATT.CATT_Survey named ResponseTwo. [inferred] |
| 7 | ResponseThree | nvarchar(max) | YES |  |  | Field on CATT.CATT_Survey named ResponseThree. [inferred] |
| 8 | DeactivateTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | DeleteTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
