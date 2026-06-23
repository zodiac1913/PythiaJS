# FSTRS.FSTRS_Contact

Supporting table in the FSTRS schema related to fstrs contact.

## Snapshot

- Schema: FSTRS
- Table: FSTRS_Contact
- Priority: supporting schema
- Approximate rows: 0
- Primary key: ContactIdentifier
- Column count: 8

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ContactIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ContactName | varchar(80) | YES |  |  | Name or display label for this value. [inferred] |
| 3 | ContactPhoneNumber | varchar(50) | YES |  |  | Number used to identify or track this record. [inferred] |
| 4 | ComponentAcronymName | varchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 6 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 8 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
