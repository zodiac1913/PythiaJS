# CSPA.CSPA_Vendor

Supporting table in the CSPA schema related to cspa vendor.

## Snapshot

- Schema: CSPA
- Table: CSPA_Vendor
- Priority: supporting schema
- Approximate rows: 494
- Primary key: VendorIdentifier
- Column count: 9

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | VendorIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | VendorName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 4 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 5 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 6 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | VendorContactName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 9 | VendorContactEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
