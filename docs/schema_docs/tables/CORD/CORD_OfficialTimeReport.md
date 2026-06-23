# CORD.CORD_OfficialTimeReport

Supporting table in the CORD schema related to cord official time report.

## Snapshot

- Schema: CORD
- Table: CORD_OfficialTimeReport
- Priority: supporting schema
- Approximate rows: 438
- Primary key: OfficialTimeReportIdentifier
- Column count: 20

## Outbound Foreign Keys

- FK__CORD_Offi__Union__652654B0: CORD.CORD_UnionRep via UnionRepIdentifier -> UnionRepIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | OfficialTimeReportIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | OfficialDate | date | YES |  |  | Date associated with this attribute or event. [inferred] |
| 3 | AuthorizedRepresentativeActivity | varchar(255) | NO |  |  | Field on CORD.CORD_OfficialTimeReport named AuthorizedRepresentativeActivity. [inferred] |
| 4 | BeginningTime | varchar(10) | YES |  |  | Field on CORD.CORD_OfficialTimeReport named BeginningTime. [inferred] |
| 6 | EndingTime | varchar(10) | YES |  |  | Field on CORD.CORD_OfficialTimeReport named EndingTime. [inferred] |
| 8 | TotalHoursWorked | decimal(6,2) | YES |  |  | Numeric value associated with this record. [inferred] |
| 9 | UnionRepSignature | varchar(50) | YES |  |  | Field on CORD.CORD_OfficialTimeReport named UnionRepSignature. [inferred] |
| 10 | UnionRepSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 11 | EmployeeComments | varchar(5000) | YES |  |  | Field on CORD.CORD_OfficialTimeReport named EmployeeComments. [inferred] |
| 12 | DateSubmitted | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 13 | TimeReportStatus | varchar(100) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 14 | ApprovingOfficialComments | varchar(5000) | YES |  |  | Field on CORD.CORD_OfficialTimeReport named ApprovingOfficialComments. [inferred] |
| 15 | ApprovingOfficialSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 16 | ApprovingOfficialSignature | varchar(50) | YES |  |  | Field on CORD.CORD_OfficialTimeReport named ApprovingOfficialSignature. [inferred] |
| 17 | UnionRepIdentifier | bigint | NO |  |  | Identifier that likely links this record to UnionRep. [inferred] |
| 18 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 19 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 20 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 21 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 22 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
