# HR.HR_DfasDetail

Business-critical table in the HR schema related to hr dfas detail.

## Snapshot

- Schema: HR
- Table: HR_DfasDetail
- Priority: primary schema
- Approximate rows: 0
- Primary key: DfasDetailIdentifier
- Column count: 20

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | DfasDetailIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | SocialSecurityNumber | nvarchar(9) | YES |  |  | Number used to identify or track this record. [inferred] |
| 4 | PayPeriodEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | PayrollYear | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 6 | PayPeriodNumber | nvarchar(2) | YES |  |  | Number used to identify or track this record. [inferred] |
| 7 | WorkDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 8 | TimeAttendance | nvarchar(100) | YES |  |  | Field on HR.HR_DfasDetail named TimeAttendance. [inferred] |
| 9 | TimeAttendanceDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 10 | HoursWorked | numeric(5,2) | YES |  |  | Field on HR.HR_DfasDetail named HoursWorked. [inferred] |
| 11 | WorkShift | nvarchar(100) | YES |  |  | Field on HR.HR_DfasDetail named WorkShift. [inferred] |
| 12 | WorkShiftDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 13 | TeleworkType | nvarchar(20) | YES |  |  | Type or category used to classify the record. [inferred] |
| 14 | TeleworkTypeDescription | nvarchar(150) | YES |  |  | Type or category used to classify the record. [inferred] |
| 15 | WorkSchedule | nvarchar(20) | YES |  |  | Field on HR.HR_DfasDetail named WorkSchedule. [inferred] |
| 16 | WorkScheduleDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 17 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 18 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 19 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 20 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
