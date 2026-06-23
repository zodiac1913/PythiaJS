# PMAP2.PMAP2_XoPmapOffice

Supporting table in the PMAP2 schema related to pmap2 xo pmap office.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_XoPmapOffice
- Priority: supporting schema
- Approximate rows: 0
- Primary key: XoPmapOfficeIdentifier
- Column count: 12

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | XoPmapOfficeIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Category | nvarchar(100) | YES |  |  | Field on PMAP2.PMAP2_XoPmapOffice named Category. [inferred] |
| 3 | XoUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to XoUser. [inferred] |
| 4 | OfficeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Office. [inferred] |
| 5 | OfficeName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 7 | OfficeAdmin | nvarchar(11) | YES |  |  | Field on PMAP2.PMAP2_XoPmapOffice named OfficeAdmin. [inferred] |
| 8 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
