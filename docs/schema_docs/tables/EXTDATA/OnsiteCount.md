# EXTDATA.OnsiteCount

Supporting table in the EXTDATA schema related to onsite count.

## Snapshot

- Schema: EXTDATA
- Table: OnsiteCount
- Priority: supporting schema
- Approximate rows: 0
- Primary key: OnsiteCountIdentifier
- Column count: 9

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | OnsiteCountIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | OrganizationName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 3 | UserCount | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 4 | WorkDate | date | NO |  |  | Date associated with this attribute or event. [inferred] |
| 5 | PayPeriodEndDate | date | NO |  |  | Date associated with this attribute or event. [inferred] |
| 6 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 7 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
