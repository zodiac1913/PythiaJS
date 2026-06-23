# CATT.CATT_Request

Supporting table in the CATT schema related to catt request.

## Snapshot

- Schema: CATT
- Table: CATT_Request
- Priority: supporting schema
- Approximate rows: 37
- Primary key: RequestIdentifier
- Column count: 61

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | RequestIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ParentRequestIdentifier | bigint | YES |  |  | Identifier that likely links this record to ParentRequest. [inferred] |
| 3 | EntryType | nvarchar(20) | NO |  |  | Type or category used to classify the record. [inferred] |
| 4 | RequestorIdentifier | bigint | NO |  |  | Identifier that likely links this record to Requestor. [inferred] |
| 5 | RequestorType | nvarchar(20) | NO |  |  | Type or category used to classify the record. [inferred] |
| 6 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 7 | FirstLastName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 8 | Email | nvarchar(max) | NO |  |  | Email address related to this record. [inferred] |
| 9 | Phone | nvarchar(10) | NO |  |  | Phone number related to this record. [inferred] |
| 10 | AdminCode | nvarchar(11) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 11 | OfficeAcronym | nvarchar(10) | NO |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 12 | BackupIdentifier | bigint | YES |  |  | Identifier that likely links this record to Backup. [inferred] |
| 13 | BackupFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 14 | BackupEmail | nvarchar(max) | YES |  |  | Email address related to this record. [inferred] |
| 15 | BackupPhone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 16 | BackupAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 17 | BackupOfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 18 | OeocrCategory | nvarchar(max) | YES |  |  | Field on CATT.CATT_Request named OeocrCategory. [inferred] |
| 19 | OeocrDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 20 | ReturnedDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 21 | ResolutionAcceptance | nvarchar(50) | YES |  |  | Field on CATT.CATT_Request named ResolutionAcceptance. [inferred] |
| 22 | RequestCategory | nvarchar(100) | NO |  |  | Field on CATT.CATT_Request named RequestCategory. [inferred] |
| 23 | RequestOther | nvarchar(1000) | YES |  |  | Field on CATT.CATT_Request named RequestOther. [inferred] |
| 24 | RequestDate | datetime2(0) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 25 | RequestTitle | nvarchar(500) | YES |  |  | Field on CATT.CATT_Request named RequestTitle. [inferred] |
| 26 | RequestTitleDetail | nvarchar(max) | YES |  |  | Field on CATT.CATT_Request named RequestTitleDetail. [inferred] |
| 27 | JobImpact | nvarchar(10) | NO |  |  | Field on CATT.CATT_Request named JobImpact. [inferred] |
| 28 | JobImpactDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 29 | Description | nvarchar(max) | NO |  |  | Longer descriptive text for this value. [inferred] |
| 30 | Status | nvarchar(20) | NO |  |  | Status value describing the current state of the record. [inferred] |
| 31 | FileName | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 32 | FileDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 33 | FileBinary | varbinary(max) | YES |  |  | Field on CATT.CATT_Request named FileBinary. [inferred] |
| 34 | TriageIdentifier | bigint | YES |  |  | Identifier that likely links this record to Triage. [inferred] |
| 35 | TriageFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 36 | TriageNotes | nvarchar(max) | YES |  |  | Field on CATT.CATT_Request named TriageNotes. [inferred] |
| 37 | TriagePrivateNotes | nvarchar(max) | YES |  |  | Field on CATT.CATT_Request named TriagePrivateNotes. [inferred] |
| 38 | Priority | nvarchar(20) | YES |  |  | Field on CATT.CATT_Request named Priority. [inferred] |
| 39 | NeedMoreInformationNotes | nvarchar(max) | YES |  |  | Field on CATT.CATT_Request named NeedMoreInformationNotes. [inferred] |
| 40 | PendingDays | bigint | YES |  |  | Numeric value associated with this record. [inferred] |
| 41 | InvestigatorIdentifier | bigint | YES |  |  | Identifier that likely links this record to Investigator. [inferred] |
| 42 | CaseIdentifier | bigint | YES |  |  | Identifier that likely links this record to Case. [inferred] |
| 43 | CaseAssignment | nvarchar(100) | YES |  |  | Field on CATT.CATT_Request named CaseAssignment. [inferred] |
| 44 | CaseEmail | nvarchar(max) | YES |  |  | Email address related to this record. [inferred] |
| 45 | CaseComponent | nvarchar(10) | YES |  |  | Field on CATT.CATT_Request named CaseComponent. [inferred] |
| 46 | CaseAcceptanceSwitch | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 47 | ResolutionSwitch | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 48 | Resolution | nvarchar(max) | YES |  |  | Field on CATT.CATT_Request named Resolution. [inferred] |
| 49 | ResolutionDenialDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 50 | ClosedTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 51 | BusinessOwner | nvarchar(200) | YES |  |  | Field on CATT.CATT_Request named BusinessOwner. [inferred] |
| 52 | ResponsibleComponent | nvarchar(10) | YES |  |  | Field on CATT.CATT_Request named ResponsibleComponent. [inferred] |
| 53 | Maintainer | nvarchar(200) | YES |  |  | Field on CATT.CATT_Request named Maintainer. [inferred] |
| 54 | PointOfContact | nvarchar(200) | YES |  |  | Field on CATT.CATT_Request named PointOfContact. [inferred] |
| 55 | InterimResolution | nvarchar(max) | YES |  |  | Field on CATT.CATT_Request named InterimResolution. [inferred] |
| 56 | DeactivateTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 57 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 58 | AddTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 59 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 60 | LastUpdateTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 61 | DeleteTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
