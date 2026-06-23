# FTS.FTS_ApplicationHistory

Supporting table in the FTS schema related to fts application history.

## Snapshot

- Schema: FTS
- Table: FTS_ApplicationHistory
- Priority: supporting schema
- Approximate rows: 2239573
- Primary key: ApplicationHistoryIdentifier
- Column count: 38

## Outbound Foreign Keys

- FK_FTS_Application_FTS_ApplicationHistory: FTS.FTS_Application via ApplicationIdentifier -> ApplicationIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ApplicationHistoryIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ApplicationIdentifier | bigint | NO |  |  | Identifier that likely links this record to Application. [inferred] |
| 3 | SubmittedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 4 | StartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | ManagerApprovalDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 6 | Street1 | nvarchar(40) | YES |  |  | Field on FTS.FTS_ApplicationHistory named Street1. [inferred] |
| 7 | Street2 | nvarchar(40) | YES |  |  | Field on FTS.FTS_ApplicationHistory named Street2. [inferred] |
| 8 | City | nvarchar(30) | YES |  |  | Field on FTS.FTS_ApplicationHistory named City. [inferred] |
| 9 | State | nvarchar(2) | YES |  |  | Field on FTS.FTS_ApplicationHistory named State. [inferred] |
| 10 | ZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 11 | Phone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 12 | Status | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 13 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 14 | ManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerEmployee. [inferred] |
| 15 | ManagerComments | nvarchar(4000) | YES |  |  | Field on FTS.FTS_ApplicationHistory named ManagerComments. [inferred] |
| 16 | WorkStatement | nvarchar(4000) | YES |  |  | Field on FTS.FTS_ApplicationHistory named WorkStatement. [inferred] |
| 17 | RequiredEquipment | nvarchar(4000) | YES |  |  | Field on FTS.FTS_ApplicationHistory named RequiredEquipment. [inferred] |
| 18 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 19 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 20 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 21 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 22 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 23 | ApplicationType | nvarchar(50) | YES |  |  | Type or category used to classify the record. [inferred] |
| 24 | IsDayCardRequired | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 25 | AgreementIdentifier | bigint | YES |  |  | Identifier that likely links this record to Agreement. [inferred] |
| 26 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 27 | CycleIdentifier | bigint | YES |  |  | Identifier that likely links this record to Cycle. [inferred] |
| 28 | EpisodicIdentifier | bigint | YES |  |  | Identifier that likely links this record to Episodic. [inferred] |
| 29 | RequestedWorkSchedule | nvarchar(50) | YES |  |  | Field on FTS.FTS_ApplicationHistory named RequestedWorkSchedule. [inferred] |
| 30 | WithdrawalReason | nvarchar(80) | YES |  |  | Field on FTS.FTS_ApplicationHistory named WithdrawalReason. [inferred] |
| 31 | DeploymentDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 32 | TeleworkTeamComment | varchar(4000) | YES |  |  | Field on FTS.FTS_ApplicationHistory named TeleworkTeamComment. [inferred] |
| 36 | TimekeeperEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to TimekeeperEmployee. [inferred] |
| 37 | ItasEnterConfirmationDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 38 | IsEnteredItas | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 39 | ScheduleApprovalEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ScheduleApprovalEmployee. [inferred] |
| 40 | ScheduleApprovalDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 41 | ScheduleStatus | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
