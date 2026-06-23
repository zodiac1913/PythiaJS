# FSTRS.FSTRS_OrganizationalCrosswalk

Supporting table in the FSTRS schema related to fstrs organizational crosswalk.

## Snapshot

- Schema: FSTRS
- Table: FSTRS_OrganizationalCrosswalk
- Priority: supporting schema
- Approximate rows: 0
- Primary key: OrganizationalCrosswalkIdentifier
- Column count: 8

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | OrganizationalCrosswalkIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | CurrentYearFormIdentifier | varchar(4) | YES |  |  | Identifier that likely links this record to CurrentYearForm. [inferred] |
| 3 | PreviousYearFormIdentifier | varchar(4) | YES |  |  | Identifier that likely links this record to PreviousYearForm. [inferred] |
| 4 | IsSelfAssesmentTypeChange | varchar(1) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 5 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 6 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 8 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
