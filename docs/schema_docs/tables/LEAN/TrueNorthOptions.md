# LEAN.TrueNorthOptions

Supporting table in the LEAN schema related to true north options.

## Snapshot

- Schema: LEAN
- Table: TrueNorthOptions
- Priority: supporting schema
- Approximate rows: 4
- Primary key: TrueNorthOptionIdentifier
- Column count: 9

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | TrueNorthOptionIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | TrueNorthOptionName | nvarchar(400) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | TrueNorthOptionDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 4 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 5 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 7 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
