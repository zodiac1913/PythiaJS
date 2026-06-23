# FTS.FTS_DailyLogORG

Supporting table in the FTS schema related to fts daily log org.

## Snapshot

- Schema: FTS
- Table: FTS_DailyLogORG
- Priority: supporting schema
- Approximate rows: 503061
- Primary key: not declared
- Column count: 14

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | DailyLogIdentifier | bigint | NO | IDENTITY |  | Identifier that likely links this record to DailyLog. [inferred] |
| 2 | ApplicationIdentifier | bigint | NO |  |  | Identifier that likely links this record to Application. [inferred] |
| 3 | TourOfDuty | nvarchar(255) | YES |  |  | Field on FTS.FTS_DailyLogORG named TourOfDuty. [inferred] |
| 4 | StartTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 5 | EndTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | HoursWorked | numeric(4,2) | YES |  |  | Field on FTS.FTS_DailyLogORG named HoursWorked. [inferred] |
| 9 | WorkSummary | nvarchar(4000) | YES |  |  | Field on FTS.FTS_DailyLogORG named WorkSummary. [inferred] |
| 18 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 19 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 20 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 21 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 22 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 23 | InitialPattern | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 24 | WorkLocation | nvarchar(100) | YES |  |  | Field on FTS.FTS_DailyLogORG named WorkLocation. [inferred] |
