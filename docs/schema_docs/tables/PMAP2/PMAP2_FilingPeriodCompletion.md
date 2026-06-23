# PMAP2.PMAP2_FilingPeriodCompletion

Supporting table in the PMAP2 schema related to pmap2 filing period completion.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_FilingPeriodCompletion
- Priority: supporting schema
- Approximate rows: 211
- Primary key: FilingPeriodCompletionIdentifier
- Column count: 11

## Outbound Foreign Keys

- FK_PMAP2_FilingPeriod_PMAP2_FilingPeriodCompletion: PMAP2.PMAP2_FilingPeriod via FilingPeriodIdentifier -> FilingPeriodIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FilingPeriodCompletionIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FilingPeriodIdentifier | bigint | NO |  |  | Identifier that likely links this record to FilingPeriod. [inferred] |
| 3 | AppraisalYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 4 | FilingPeriodName | nvarchar(400) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | OfficeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Office. [inferred] |
| 6 | CompletionDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 7 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
