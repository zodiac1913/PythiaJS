# OT.OT_OverTimeForm

Supporting table in the OT schema related to ot over time form.

## Snapshot

- Schema: OT
- Table: OT_OverTimeForm
- Priority: supporting schema
- Approximate rows: 10
- Primary key: OverTimeFormIdentifier
- Column count: 58

## Inbound Foreign Keys

- FK_OT_DayActual_OT_OverTimeForm: OT.OT_DayActual via OverTimeFormIdentifier -> OverTimeFormIdentifier
- FK_OT_DayRequested_OT_OverTimeForm: OT.OT_DayRequested via OverTimeFormIdentifier -> OverTimeFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | OverTimeFormIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | DateRequested | datetime2(7) | YES |  |  | Temporal field associated with this record. [inferred] |
| 3 | PayPeriodDateWorkPerformed | datetime2(7) | YES |  |  | Temporal field associated with this record. [inferred] |
| 4 | PayPeriodWorkPerformed | nvarchar(2) | YES |  |  | Field on OT.OT_OverTimeForm named PayPeriodWorkPerformed. [inferred] |
| 5 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 6 | EmployeeLastFirstName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 7 | EmployeeSignatureDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 8 | EmployeeCertificationSignatureDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 9 | Grade | nvarchar(20) | YES |  |  | Field on OT.OT_OverTimeForm named Grade. [inferred] |
| 10 | Step | nvarchar(20) | YES |  |  | Field on OT.OT_OverTimeForm named Step. [inferred] |
| 11 | IsFlsaExempt | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 12 | HourlyOvertimeRate | numeric(10,2) | YES |  |  | Field on OT.OT_OverTimeForm named HourlyOvertimeRate. [inferred] |
| 13 | Status | nvarchar(50) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 14 | IsRegularOverTime | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 15 | DescriptionOfWork | nvarchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 16 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 17 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 18 | GroupIdentifier | bigint | YES |  |  | Identifier that likely links this record to Group. [inferred] |
| 19 | GroupAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 20 | DivisonIdentifier | bigint | YES |  |  | Identifier that likely links this record to Divison. [inferred] |
| 21 | DivisionAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 22 | Echelon | varchar(50) | YES |  |  | Field on OT.OT_OverTimeForm named Echelon. [inferred] |
| 23 | TotalCostRequested | numeric(10,2) | YES |  |  | Field on OT.OT_OverTimeForm named TotalCostRequested. [inferred] |
| 24 | TotalCostWorked | numeric(10,2) | YES |  |  | Field on OT.OT_OverTimeForm named TotalCostWorked. [inferred] |
| 25 | TotalHoursRequested | numeric(10,2) | YES |  |  | Field on OT.OT_OverTimeForm named TotalHoursRequested. [inferred] |
| 26 | TotalHoursWorked | numeric(10,2) | YES |  |  | Field on OT.OT_OverTimeForm named TotalHoursWorked. [inferred] |
| 27 | BudgetIdentifier | bigint | YES |  |  | Identifier that likely links this record to Budget. [inferred] |
| 28 | RequestingManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to RequestingManagerEmployee. [inferred] |
| 29 | RequestingManagerLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 30 | RequestingManagerSignatureDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 31 | RequestingManagerComments | nvarchar(4000) | YES |  |  | Field on OT.OT_OverTimeForm named RequestingManagerComments. [inferred] |
| 32 | RequestingManagerIsApproved | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 33 | RequestingManagerCertificationEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to RequestingManagerCertificationEmployee. [inferred] |
| 34 | RequestingManagerCertificationLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 35 | RequestingManagerCertificationSignatureDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 36 | RequestingManagerCertificationComments | nvarchar(4000) | YES |  |  | Field on OT.OT_OverTimeForm named RequestingManagerCertificationComments. [inferred] |
| 37 | RequestingManagerCertificationIsApproved | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 38 | ApprovingOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ApprovingOfficialEmployee. [inferred] |
| 39 | ApprovingOfficialLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 40 | ApprovingOfficialSignatureDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 41 | ApprovingOfficialComments | nvarchar(4000) | YES |  |  | Field on OT.OT_OverTimeForm named ApprovingOfficialComments. [inferred] |
| 42 | ApprovingOfficialIsApproved | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 43 | FundsCertifierEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to FundsCertifierEmployee. [inferred] |
| 44 | FundsCertifierLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 45 | FundsCertifierSignatureDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 46 | FundsCertifierComments | nvarchar(4000) | YES |  |  | Field on OT.OT_OverTimeForm named FundsCertifierComments. [inferred] |
| 47 | FundsCertifierIsApproved | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 48 | FundsCertifierVerifiedActualSignatureDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 49 | FundsCertifierVerifiedActualComments | nvarchar(4000) | YES |  |  | Field on OT.OT_OverTimeForm named FundsCertifierVerifiedActualComments. [inferred] |
| 50 | FundsCertifierVerifiedActualIsApproved | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 51 | TimekeeperEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to TimekeeperEmployee. [inferred] |
| 52 | ItasEnterConfirmationDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 53 | IsEnteredItas | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 54 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 55 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 56 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 57 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 58 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
