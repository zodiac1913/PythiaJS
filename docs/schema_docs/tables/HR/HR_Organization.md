# HR.HR_Organization

Business-critical table in the HR schema related to hr organization.

## Snapshot

- Schema: HR
- Table: HR_Organization
- Priority: primary schema
- Approximate rows: 33
- Primary key: OrganizationIdentifier
- Column count: 27

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | OrganizationIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AdminCode | nvarchar(50) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | ComponentAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 4 | ComponentName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | Echelon | nvarchar(50) | YES |  |  | Field on HR.HR_Organization named Echelon. [inferred] |
| 6 | DirectorEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to DirectorEmployee. [inferred] |
| 7 | DirectorPreferedFirstName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 8 | DirectorPreferedLastName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 9 | DirectorEmail | nvarchar(50) | YES |  |  | Email address related to this record. [inferred] |
| 10 | DirectorUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to DirectorUser. [inferred] |
| 11 | DirectorLogonName | nvarchar(20) | YES |  |  | Name or display label for this value. [inferred] |
| 12 | DirectorActing | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 13 | DirectorNte | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 14 | DirectorChanges | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 15 | DeputyEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to DeputyEmployee. [inferred] |
| 16 | DeputyPreferedFirstName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 17 | DeputyPreferedLastName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 18 | DeputyEmail | nvarchar(50) | YES |  |  | Email address related to this record. [inferred] |
| 19 | DeputyUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to DeputyUser. [inferred] |
| 20 | DeputyLogonName | nvarchar(20) | YES |  |  | Name or display label for this value. [inferred] |
| 21 | DeputyActing | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 22 | DeputyNte | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 23 | DeputyChanges | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 24 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 25 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 26 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 27 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
