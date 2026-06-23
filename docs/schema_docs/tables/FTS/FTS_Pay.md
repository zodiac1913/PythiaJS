# FTS.FTS_Pay

Supporting table in the FTS schema related to fts pay.

## Snapshot

- Schema: FTS
- Table: FTS_Pay
- Priority: supporting schema
- Approximate rows: 15543
- Primary key: PayIdentifier
- Column count: 37

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PayIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | PayAreaIdentifier | bigint | NO |  |  | Identifier that likely links this record to PayArea. [inferred] |
| 4 | Grade | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 5 | Annual1 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Annual1. [inferred] |
| 6 | Hourly1 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Hourly1. [inferred] |
| 7 | Overtime1 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Overtime1. [inferred] |
| 8 | Annual2 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Annual2. [inferred] |
| 9 | Hourly2 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Hourly2. [inferred] |
| 10 | Overtime2 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Overtime2. [inferred] |
| 11 | Annual3 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Annual3. [inferred] |
| 12 | Hourly3 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Hourly3. [inferred] |
| 13 | Overtime3 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Overtime3. [inferred] |
| 14 | Annual4 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Annual4. [inferred] |
| 15 | Hourly4 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Hourly4. [inferred] |
| 16 | Overtime4 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Overtime4. [inferred] |
| 17 | Annual5 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Annual5. [inferred] |
| 18 | Hourly5 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Hourly5. [inferred] |
| 19 | Overtime5 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Overtime5. [inferred] |
| 20 | Annual6 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Annual6. [inferred] |
| 21 | Hourly6 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Hourly6. [inferred] |
| 22 | Overtime6 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Overtime6. [inferred] |
| 23 | Annual7 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Annual7. [inferred] |
| 24 | Hourly7 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Hourly7. [inferred] |
| 25 | Overtime7 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Overtime7. [inferred] |
| 26 | Annual8 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Annual8. [inferred] |
| 27 | Hourly8 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Hourly8. [inferred] |
| 28 | Overtime8 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Overtime8. [inferred] |
| 29 | Annual9 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Annual9. [inferred] |
| 30 | Hourly9 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Hourly9. [inferred] |
| 31 | Overtime9 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Overtime9. [inferred] |
| 32 | Annual10 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Annual10. [inferred] |
| 33 | Hourly10 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Hourly10. [inferred] |
| 34 | Overtime10 | numeric(11,2) | NO |  |  | Field on FTS.FTS_Pay named Overtime10. [inferred] |
| 35 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 36 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 37 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 38 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
