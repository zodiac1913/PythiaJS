# PMAP2.PMAP2_SetAsideAwardRecipient

Supporting table in the PMAP2 schema related to pmap2 set aside award recipient.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_SetAsideAwardRecipient
- Priority: supporting schema
- Approximate rows: 0
- Primary key: SetAsideAwardRecipientIdentifier
- Column count: 37

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SetAsideAwardRecipientIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AppraisalYear | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 3 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 4 | PersonnelNumber | nvarchar(8) | YES |  |  | Number used to identify or track this record. [inferred] |
| 5 | EmployeeName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | EmployeeEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 7 | AwardAmount | numeric(10,4) | YES |  |  | Field on PMAP2.PMAP2_SetAsideAwardRecipient named AwardAmount. [inferred] |
| 8 | AwardJustification | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_SetAsideAwardRecipient named AwardJustification. [inferred] |
| 9 | TimeOffHours | numeric(10,4) | YES |  |  | Field on PMAP2.PMAP2_SetAsideAwardRecipient named TimeOffHours. [inferred] |
| 10 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 11 | OfficeAcronym | nvarchar(50) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 12 | OfficeName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 13 | OfficeAdmin | nvarchar(50) | YES |  |  | Field on PMAP2.PMAP2_SetAsideAwardRecipient named OfficeAdmin. [inferred] |
| 14 | SubmittedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 15 | ForwardedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 16 | ApprovalDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 17 | ComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to Component. [inferred] |
| 18 | DivisonAcronym | nvarchar(50) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 19 | GroupIdentifier | bigint | YES |  |  | Identifier that likely links this record to Group. [inferred] |
| 20 | GroupAcronym | nvarchar(50) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 21 | ApproverEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ApproverEmployee. [inferred] |
| 22 | ForwardingEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ForwardingEmployee. [inferred] |
| 23 | SubmittedEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to SubmittedEmployee. [inferred] |
| 24 | BudgetItemIdentifier | bigint | YES |  |  | Identifier that likely links this record to BudgetItem. [inferred] |
| 25 | SetAsideName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 26 | NominatorEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to NominatorEmployee. [inferred] |
| 27 | NominatorSignDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 28 | NominatorFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 29 | ManagerSubmitDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 30 | ManagerSubmitEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerSubmitEmployee. [inferred] |
| 31 | SecondLevelManagerApproveDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 32 | SecondLevelManagerApproveEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to SecondLevelManagerApproveEmployee. [inferred] |
| 33 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 34 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 35 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 36 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 37 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
