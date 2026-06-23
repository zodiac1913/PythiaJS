# FTS.FTS_Application

Supporting table in the FTS schema related to fts application.

## Snapshot

- Schema: FTS
- Table: FTS_Application
- Priority: supporting schema
- Approximate rows: 1444934
- Primary key: ApplicationIdentifier
- Column count: 38

## Inbound Foreign Keys

- FK_FTS_Application_FTS_ApplicationHistory: FTS.FTS_ApplicationHistory via ApplicationIdentifier -> ApplicationIdentifier
- FK_FTS_Application_FTS_DailyLog: FTS.FTS_DailyLog via ApplicationIdentifier -> ApplicationIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ApplicationIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | SubmittedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 3 | StartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 4 | ManagerApprovalDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | Street1 | nvarchar(40) | YES |  |  | Field on FTS.FTS_Application named Street1. [inferred] |
| 6 | Street2 | nvarchar(40) | YES |  |  | Field on FTS.FTS_Application named Street2. [inferred] |
| 7 | City | nvarchar(30) | YES |  |  | Field on FTS.FTS_Application named City. [inferred] |
| 8 | State | nvarchar(2) | YES |  |  | Field on FTS.FTS_Application named State. [inferred] |
| 9 | ZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 10 | Phone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 11 | Status | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 12 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 13 | ManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerEmployee. [inferred] |
| 14 | ManagerComments | nvarchar(4000) | YES |  |  | Field on FTS.FTS_Application named ManagerComments. [inferred] |
| 15 | WorkStatement | nvarchar(4000) | YES |  |  | Field on FTS.FTS_Application named WorkStatement. [inferred] |
| 16 | RequiredEquipment | nvarchar(4000) | YES |  |  | Field on FTS.FTS_Application named RequiredEquipment. [inferred] |
| 17 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 18 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 19 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 20 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 21 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 22 | ApplicationType | nvarchar(50) | YES |  |  | Type or category used to classify the record. [inferred] |
| 23 | DayCardRequired | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 24 | AgreementIdentifier | bigint | YES |  |  | Identifier that likely links this record to Agreement. [inferred] |
| 25 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 26 | CycleIdentifier | bigint | YES |  |  | Identifier that likely links this record to Cycle. [inferred] |
| 27 | EpisodicIdentifier | bigint | YES |  |  | Identifier that likely links this record to Episodic. [inferred] |
| 28 | RequestedWorkSchedule | nvarchar(50) | YES |  |  | Field on FTS.FTS_Application named RequestedWorkSchedule. [inferred] |
| 29 | OldFlexiplaceIdentifier | bigint | YES |  |  | Identifier that likely links this record to OldFlexiplace. [inferred] |
| 30 | WithdrawalReason | nvarchar(80) | YES |  |  | Field on FTS.FTS_Application named WithdrawalReason. [inferred] |
| 31 | DeploymentDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 32 | TeleworkTeamComment | nvarchar(4000) | YES |  |  | Field on FTS.FTS_Application named TeleworkTeamComment. [inferred] |
| 36 | TimekeeperEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to TimekeeperEmployee. [inferred] |
| 37 | ItasEnterConfirmationDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 38 | IsEnteredItas | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 39 | ScheduleApprovalEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ScheduleApprovalEmployee. [inferred] |
| 40 | ScheduleApprovalDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 41 | ScheduleStatus | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
