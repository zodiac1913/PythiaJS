# FTS.FTS_ApplicationORG

Supporting table in the FTS schema related to fts application org.

## Snapshot

- Schema: FTS
- Table: FTS_ApplicationORG
- Priority: supporting schema
- Approximate rows: 226134
- Primary key: not declared
- Column count: 32

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ApplicationIdentifier | bigint | NO | IDENTITY |  | Identifier that likely links this record to Application. [inferred] |
| 2 | SubmittedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 3 | StartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 4 | ManagerApprovalDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | Street1 | nvarchar(40) | YES |  |  | Field on FTS.FTS_ApplicationORG named Street1. [inferred] |
| 6 | Street2 | nvarchar(40) | YES |  |  | Field on FTS.FTS_ApplicationORG named Street2. [inferred] |
| 7 | City | nvarchar(30) | YES |  |  | Field on FTS.FTS_ApplicationORG named City. [inferred] |
| 8 | State | nvarchar(2) | YES |  |  | Field on FTS.FTS_ApplicationORG named State. [inferred] |
| 9 | ZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 10 | Phone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 11 | Status | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 12 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 13 | ManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerEmployee. [inferred] |
| 14 | ManagerComments | nvarchar(4000) | YES |  |  | Field on FTS.FTS_ApplicationORG named ManagerComments. [inferred] |
| 15 | WorkStatement | nvarchar(4000) | YES |  |  | Field on FTS.FTS_ApplicationORG named WorkStatement. [inferred] |
| 16 | RequiredEquipment | nvarchar(4000) | YES |  |  | Field on FTS.FTS_ApplicationORG named RequiredEquipment. [inferred] |
| 17 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 18 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 19 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 20 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 21 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 22 | ApplicationType | nvarchar(20) | YES |  |  | Type or category used to classify the record. [inferred] |
| 23 | DayCardRequired | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 24 | AgreementIdentifier | bigint | YES |  |  | Identifier that likely links this record to Agreement. [inferred] |
| 25 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 26 | CycleIdentifier | bigint | YES |  |  | Identifier that likely links this record to Cycle. [inferred] |
| 27 | EpisodicIdentifier | bigint | YES |  |  | Identifier that likely links this record to Episodic. [inferred] |
| 29 | RequestedWorkSchedule | nvarchar(50) | YES |  |  | Field on FTS.FTS_ApplicationORG named RequestedWorkSchedule. [inferred] |
| 30 | OldFlexiplaceIdentifier | bigint | YES |  |  | Identifier that likely links this record to OldFlexiplace. [inferred] |
| 31 | WithdrawalReason | nvarchar(80) | YES |  |  | Field on FTS.FTS_ApplicationORG named WithdrawalReason. [inferred] |
| 32 | DeploymentDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 33 | TeleworkTeamComment | nvarchar(4000) | YES |  |  | Field on FTS.FTS_ApplicationORG named TeleworkTeamComment. [inferred] |
