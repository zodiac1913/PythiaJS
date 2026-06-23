# FTS.FTS_OfficePresence

Supporting table in the FTS schema related to fts office presence.

## Snapshot

- Schema: FTS
- Table: FTS_OfficePresence
- Priority: supporting schema
- Approximate rows: 1875
- Primary key: OfficePresenceIdentifier
- Column count: 25

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | OfficePresenceIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 3 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 4 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 5 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 6 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | PayPeriodIdentifier | bigint | NO |  |  | Identifier that likely links this record to PayPeriod. [inferred] |
| 8 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 9 | LastFirstName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 10 | Status | nvarchar(50) | NO |  |  | Status value describing the current state of the record. [inferred] |
| 11 | OfficeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Office. [inferred] |
| 12 | OfficeAcronym | nvarchar(10) | NO |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 13 | GroupIdentifier | bigint | YES |  |  | Identifier that likely links this record to Group. [inferred] |
| 14 | GroupAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 15 | DivisonIdentifier | bigint | YES |  |  | Identifier that likely links this record to Divison. [inferred] |
| 16 | DivisionAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 17 | EnteredBy | nvarchar(100) | NO |  |  | Field on FTS.FTS_OfficePresence named EnteredBy. [inferred] |
| 18 | EnteredIdentifier | bigint | NO |  |  | Identifier that likely links this record to Entered. [inferred] |
| 19 | EnteredDate | datetime2(7) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 20 | CertifiedBy | nvarchar(100) | YES |  |  | Field on FTS.FTS_OfficePresence named CertifiedBy. [inferred] |
| 21 | CertifiedIdentifier | bigint | YES |  |  | Identifier that likely links this record to Certified. [inferred] |
| 22 | CertifiedDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 23 | CertificationJustification | nvarchar(4000) | YES |  |  | Field on FTS.FTS_OfficePresence named CertificationJustification. [inferred] |
| 24 | JustifierIdentifier | bigint | YES |  |  | Identifier that likely links this record to Justifier. [inferred] |
| 25 | JustifyTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
