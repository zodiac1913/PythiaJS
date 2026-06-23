# RPLR.RPLR_TableTrigger

Supporting table in the RPLR schema related to rplr table trigger.

## Snapshot

- Schema: RPLR
- Table: RPLR_TableTrigger
- Priority: supporting schema
- Approximate rows: 0
- Primary key: TableTriggerIdentifier
- Column count: 12

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | TableTriggerIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | TriggerName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | Directive | nvarchar(10) | NO |  |  | Field on RPLR.RPLR_TableTrigger named Directive. [inferred] |
| 4 | Action | nvarchar(50) | NO |  |  | Field on RPLR.RPLR_TableTrigger named Action. [inferred] |
| 5 | Code | nvarchar(max) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 6 | TableIdentifier | bigint | NO |  |  | Identifier that likely links this record to Table. [inferred] |
| 7 | TableName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 8 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
