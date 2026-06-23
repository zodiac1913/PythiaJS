# CWS.CWS_ItasExport

Supporting table in the CWS schema related to cws itas export.

## Snapshot

- Schema: CWS
- Table: CWS_ItasExport
- Priority: supporting schema
- Approximate rows: 8104
- Primary key: not declared
- Column count: 22

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ItasExportIdentifier | bigint | NO | IDENTITY |  | Identifier that likely links this record to ItasExport. [inferred] |
| 2 | AdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | LastName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | FirstName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | ItasIdentifier | nvarchar(9) | YES |  |  | Identifier that likely links this record to Itas. [inferred] |
| 6 | ScheduleType | nvarchar(3) | YES |  |  | Type or category used to classify the record. [inferred] |
| 7 | IsTimekeeper | nvarchar(1) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 8 | TimeKeeperLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 9 | ValidFrom | datetime2(7) | YES |  |  | Temporal field associated with this record. [inferred] |
| 10 | ValidTo | datetime2(7) | YES |  |  | Temporal field associated with this record. [inferred] |
| 11 | Monday1Hours | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 12 | Tuesday1Hours | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 13 | Wednesday1Hours | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 14 | Thursday1Hours | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 15 | Friday1Hours | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 16 | Monday2Hours | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 17 | Tuesday2Hours | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 18 | Wednesday2Hours | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 19 | Thursday2Hours | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 20 | Friday2Hours | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 21 | PayPeriodStartDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 22 | PayPeriodNumInCurrentYear | int | YES |  |  | Numeric value associated with this record. [inferred] |
