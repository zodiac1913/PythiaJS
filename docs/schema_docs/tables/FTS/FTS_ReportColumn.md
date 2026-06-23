# FTS.FTS_ReportColumn

Supporting table in the FTS schema related to fts report column.

## Snapshot

- Schema: FTS
- Table: FTS_ReportColumn
- Priority: supporting schema
- Approximate rows: 6
- Primary key: ReportColumnIdentifier
- Column count: 11

## Outbound Foreign Keys

- FK_FTS_ReportColumn_FTS_Report: FTS.FTS_Report via ReportIdentifier -> ReportIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ReportColumnIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ReportIdentifier | bigint | NO |  |  | Identifier that likely links this record to Report. [inferred] |
| 3 | ReportColumnName | nvarchar(200) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | ReportColumnDescription | nvarchar(600) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | IsDisplayColumn | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 6 | DeactivateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
