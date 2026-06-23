# CSPA.CSPA_CmsContractingOfficerRepresentative

Supporting table in the CSPA schema related to cspa cms contracting officer representative.

## Snapshot

- Schema: CSPA
- Table: CSPA_CmsContractingOfficerRepresentative
- Priority: supporting schema
- Approximate rows: 604
- Primary key: CmsContractingOfficerRepresentativeIdentifier
- Column count: 13

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CmsContractingOfficerRepresentativeIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | LastFirstName | nvarchar(250) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | EuaLogonName | nvarchar(10) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | Email | nvarchar(250) | YES |  |  | Email address related to this record. [inferred] |
| 6 | Component | nvarchar(400) | YES |  |  | Field on CSPA.CSPA_CmsContractingOfficerRepresentative named Component. [inferred] |
| 7 | ComponentAcronym | nvarchar(250) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 8 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 9 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
