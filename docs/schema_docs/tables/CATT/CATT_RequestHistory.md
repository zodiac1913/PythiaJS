# CATT.CATT_RequestHistory

Supporting table in the CATT schema related to catt request history.

## Snapshot

- Schema: CATT
- Table: CATT_RequestHistory
- Priority: supporting schema
- Approximate rows: 117
- Primary key: RequestHistoryIdentifier
- Column count: 62

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | RequestHistoryIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | RequestIdentifier | bigint | NO |  |  | Identifier that likely links this record to Request. [inferred] |
| 3 | ParentRequestIdentifier | bigint | YES |  |  | Identifier that likely links this record to ParentRequest. [inferred] |
| 4 | EntryType | nvarchar(20) | NO |  |  | Type or category used to classify the record. [inferred] |
| 5 | RequestorIdentifier | bigint | NO |  |  | Identifier that likely links this record to Requestor. [inferred] |
| 6 | RequestorType | nvarchar(20) | NO |  |  | Type or category used to classify the record. [inferred] |
| 7 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 8 | FirstLastName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 9 | Email | nvarchar(max) | NO |  |  | Email address related to this record. [inferred] |
| 10 | Phone | nvarchar(10) | NO |  |  | Phone number related to this record. [inferred] |
| 11 | AdminCode | nvarchar(11) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 12 | OfficeAcronym | nvarchar(10) | NO |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 13 | BackupIdentifier | bigint | YES |  |  | Identifier that likely links this record to Backup. [inferred] |
| 14 | BackupFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 15 | BackupEmail | nvarchar(max) | YES |  |  | Email address related to this record. [inferred] |
| 16 | BackupPhone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 17 | BackupAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 18 | BackupOfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 19 | OeocrCategory | nvarchar(max) | YES |  |  | Field on CATT.CATT_RequestHistory named OeocrCategory. [inferred] |
| 20 | OeocrDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 21 | ReturnedDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 22 | ResolutionAcceptance | nvarchar(50) | YES |  |  | Field on CATT.CATT_RequestHistory named ResolutionAcceptance. [inferred] |
| 23 | RequestCategory | nvarchar(100) | NO |  |  | Field on CATT.CATT_RequestHistory named RequestCategory. [inferred] |
| 24 | RequestOther | nvarchar(1000) | YES |  |  | Field on CATT.CATT_RequestHistory named RequestOther. [inferred] |
| 25 | RequestTitle | nvarchar(500) | YES |  |  | Field on CATT.CATT_RequestHistory named RequestTitle. [inferred] |
| 26 | RequestTitleDetail | nvarchar(max) | YES |  |  | Field on CATT.CATT_RequestHistory named RequestTitleDetail. [inferred] |
| 27 | RequestDate | datetime2(0) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 28 | JobImpact | nvarchar(10) | NO |  |  | Field on CATT.CATT_RequestHistory named JobImpact. [inferred] |
| 29 | JobImpactDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 30 | Description | nvarchar(max) | NO |  |  | Longer descriptive text for this value. [inferred] |
| 31 | Status | nvarchar(20) | NO |  |  | Status value describing the current state of the record. [inferred] |
| 32 | FileName | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 33 | FileDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 34 | FileBinary | varbinary(max) | YES |  |  | Field on CATT.CATT_RequestHistory named FileBinary. [inferred] |
| 35 | TriageIdentifier | bigint | YES |  |  | Identifier that likely links this record to Triage. [inferred] |
| 36 | TriageFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 37 | TriageNotes | nvarchar(max) | YES |  |  | Field on CATT.CATT_RequestHistory named TriageNotes. [inferred] |
| 38 | TriagePrivateNotes | nvarchar(max) | YES |  |  | Field on CATT.CATT_RequestHistory named TriagePrivateNotes. [inferred] |
| 39 | Priority | nvarchar(20) | YES |  |  | Field on CATT.CATT_RequestHistory named Priority. [inferred] |
| 40 | NeedMoreInformationNotes | nvarchar(max) | YES |  |  | Field on CATT.CATT_RequestHistory named NeedMoreInformationNotes. [inferred] |
| 41 | PendingDays | bigint | YES |  |  | Numeric value associated with this record. [inferred] |
| 42 | InvestigatorIdentifier | bigint | YES |  |  | Identifier that likely links this record to Investigator. [inferred] |
| 43 | CaseIdentifier | bigint | YES |  |  | Identifier that likely links this record to Case. [inferred] |
| 44 | CaseAssignment | nvarchar(100) | YES |  |  | Field on CATT.CATT_RequestHistory named CaseAssignment. [inferred] |
| 45 | CaseEmail | nvarchar(max) | YES |  |  | Email address related to this record. [inferred] |
| 46 | CaseComponent | nvarchar(10) | YES |  |  | Field on CATT.CATT_RequestHistory named CaseComponent. [inferred] |
| 47 | CaseAcceptanceSwitch | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 48 | ResolutionSwitch | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 49 | Resolution | nvarchar(max) | YES |  |  | Field on CATT.CATT_RequestHistory named Resolution. [inferred] |
| 50 | ResolutionDenialDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 51 | ClosedTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 52 | BusinessOwner | nvarchar(200) | YES |  |  | Field on CATT.CATT_RequestHistory named BusinessOwner. [inferred] |
| 53 | ResponsibleComponent | nvarchar(10) | YES |  |  | Field on CATT.CATT_RequestHistory named ResponsibleComponent. [inferred] |
| 54 | Maintainer | nvarchar(200) | YES |  |  | Field on CATT.CATT_RequestHistory named Maintainer. [inferred] |
| 55 | PointOfContact | nvarchar(200) | YES |  |  | Field on CATT.CATT_RequestHistory named PointOfContact. [inferred] |
| 56 | InterimResolution | nvarchar(max) | YES |  |  | Field on CATT.CATT_RequestHistory named InterimResolution. [inferred] |
| 57 | DeactivateTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 58 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 59 | AddTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 60 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 61 | LastUpdateTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 62 | DeleteTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
