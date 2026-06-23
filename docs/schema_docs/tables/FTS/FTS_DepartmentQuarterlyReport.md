# FTS.FTS_DepartmentQuarterlyReport

Supporting table in the FTS schema related to fts department quarterly report.

## Snapshot

- Schema: FTS
- Table: FTS_DepartmentQuarterlyReport
- Priority: supporting schema
- Approximate rows: 16285
- Primary key: ReportIdentifier
- Column count: 16

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ReportIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | SubmittedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 3 | SubmittingUser | nvarchar(50) | YES |  |  | Field on FTS.FTS_DepartmentQuarterlyReport named SubmittingUser. [inferred] |
| 4 | ReportName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | Name | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | Grade | nvarchar(30) | YES |  |  | Field on FTS.FTS_DepartmentQuarterlyReport named Grade. [inferred] |
| 7 | JobSeries | nvarchar(30) | YES |  |  | Field on FTS.FTS_DepartmentQuarterlyReport named JobSeries. [inferred] |
| 8 | Office | nvarchar(30) | YES |  |  | Field on FTS.FTS_DepartmentQuarterlyReport named Office. [inferred] |
| 9 | BargainingStatus | nvarchar(1) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 10 | DaysInPayPeriod | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 11 | ApplicationType | nvarchar(50) | YES |  |  | Type or category used to classify the record. [inferred] |
| 12 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 14 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 16 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
