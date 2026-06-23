# PMAP2.PMAP2_FilingPeriod

Supporting table in the PMAP2 schema related to pmap2 filing period.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_FilingPeriod
- Priority: supporting schema
- Approximate rows: 39
- Primary key: FilingPeriodIdentifier
- Column count: 10

## Inbound Foreign Keys

- FK_PMAP2_FilingPeriod_PMAP2_FilingPeriodCompletion: PMAP2.PMAP2_FilingPeriodCompletion via FilingPeriodIdentifier -> FilingPeriodIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FilingPeriodIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AppraisalYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 3 | FilingPeriodName | nvarchar(400) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | FilingPeriodStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | FilingPeriodEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 6 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
