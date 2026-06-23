# HRS.HRS_ListCOPY

Supporting table in the HRS schema related to hrs list copy.

## Snapshot

- Schema: HRS
- Table: HRS_ListCOPY
- Priority: supporting schema
- Approximate rows: 2
- Primary key: ListIdentifier
- Column count: 7

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ListIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ListType | nvarchar(100) | NO |  |  | Type or category used to classify the record. [inferred] |
| 3 | ListItems | nvarchar(max) | NO |  |  | Field on HRS.HRS_ListCOPY named ListItems. [inferred] |
| 4 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 5 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 7 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
