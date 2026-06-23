# FTE.FTE_FurloughSnapshot

Supporting table in the FTE schema related to fte furlough snapshot.

## Snapshot

- Schema: FTE
- Table: FTE_FurloughSnapshot
- Priority: supporting schema
- Approximate rows: 128
- Primary key: FurloughSnapshotIdentifier
- Column count: 27

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FurloughSnapshotIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FurloughSnapshotCycleIdentifier | bigint | NO |  |  | Identifier that likely links this record to FurloughSnapshotCycle. [inferred] |
| 3 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 4 | ManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerEmployee. [inferred] |
| 5 | Email | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 6 | PersonnelNumber | nvarchar(8) | YES |  |  | Number used to identify or track this record. [inferred] |
| 7 | AdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 8 | LastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 9 | Title | nvarchar(32) | YES |  |  | Field on FTE.FTE_FurloughSnapshot named Title. [inferred] |
| 10 | PayPlan | nvarchar(20) | YES |  |  | Field on FTE.FTE_FurloughSnapshot named PayPlan. [inferred] |
| 11 | JobSeries | nvarchar(20) | YES |  |  | Field on FTE.FTE_FurloughSnapshot named JobSeries. [inferred] |
| 12 | AppointmentTypeDescription | nvarchar(150) | YES |  |  | Type or category used to classify the record. [inferred] |
| 13 | IsBargainingUnit | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 14 | CanCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 15 | BaseHours | numeric(6,2) | YES |  |  | Field on FTE.FTE_FurloughSnapshot named BaseHours. [inferred] |
| 16 | FurloughStatus | nvarchar(100) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 17 | FurloughComments | nvarchar(4000) | YES |  |  | Field on FTE.FTE_FurloughSnapshot named FurloughComments. [inferred] |
| 18 | NotificationSentEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to NotificationSentEmployee. [inferred] |
| 19 | NotificationSentTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 20 | NotificationAcknowledgedEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to NotificationAcknowledgedEmployee. [inferred] |
| 21 | NotificationAcknowledgedTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 22 | DeactivateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 23 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 24 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 25 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 26 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 27 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
