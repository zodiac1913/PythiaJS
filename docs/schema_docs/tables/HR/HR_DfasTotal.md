# HR.HR_DfasTotal

Business-critical table in the HR schema related to hr dfas total.

## Snapshot

- Schema: HR
- Table: HR_DfasTotal
- Priority: primary schema
- Approximate rows: 0
- Primary key: DfasTotalIdentifier
- Column count: 17

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | DfasTotalIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | SocialSecurityNumber | nvarchar(9) | YES |  |  | Number used to identify or track this record. [inferred] |
| 4 | PayPeriodEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | PayrollYear | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 6 | PayPeriodNumber | nvarchar(2) | YES |  |  | Number used to identify or track this record. [inferred] |
| 7 | WorkSchedule | nvarchar(20) | YES |  |  | Field on HR.HR_DfasTotal named WorkSchedule. [inferred] |
| 8 | WorkScheduleDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 9 | TeleworkHours | numeric(5,2) | YES |  |  | Field on HR.HR_DfasTotal named TeleworkHours. [inferred] |
| 10 | RemoteHours | numeric(5,2) | YES |  |  | Field on HR.HR_DfasTotal named RemoteHours. [inferred] |
| 11 | TeleworkRemoteHours | numeric(5,2) | YES |  |  | Field on HR.HR_DfasTotal named TeleworkRemoteHours. [inferred] |
| 12 | InOfficeHours | numeric(5,2) | YES |  |  | Field on HR.HR_DfasTotal named InOfficeHours. [inferred] |
| 13 | DaysWorked | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 14 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 15 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 16 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 17 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
