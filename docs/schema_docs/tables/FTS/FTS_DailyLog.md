# FTS.FTS_DailyLog

Supporting table in the FTS schema related to fts daily log.

## Snapshot

- Schema: FTS
- Table: FTS_DailyLog
- Priority: supporting schema
- Approximate rows: 2079950
- Primary key: DailyLogIdentifier
- Column count: 15

## Outbound Foreign Keys

- FK_FTS_Application_FTS_DailyLog: FTS.FTS_Application via ApplicationIdentifier -> ApplicationIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | DailyLogIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ApplicationIdentifier | bigint | NO |  |  | Identifier that likely links this record to Application. [inferred] |
| 3 | TourOfDuty | nvarchar(255) | YES |  |  | Field on FTS.FTS_DailyLog named TourOfDuty. [inferred] |
| 4 | StartTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 5 | EndTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | HoursWorked | numeric(4,2) | YES |  |  | Field on FTS.FTS_DailyLog named HoursWorked. [inferred] |
| 7 | WorkSummary | nvarchar(4000) | YES |  |  | Field on FTS.FTS_DailyLog named WorkSummary. [inferred] |
| 8 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | InitialPattern | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 14 | WorkLocation | nvarchar(100) | YES |  |  | Field on FTS.FTS_DailyLog named WorkLocation. [inferred] |
| 15 | AgreementIdentifier | bigint | YES |  |  | Identifier that likely links this record to Agreement. [inferred] |
