# SERI.SeriLog

Supporting table in the SERI schema related to seri log.

## Snapshot

- Schema: SERI
- Table: SeriLog
- Priority: supporting schema
- Approximate rows: 92
- Primary key: Id
- Column count: 8

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Id | int | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Message | nvarchar(max) | YES |  |  | Field on SERI.SeriLog named Message. [inferred] |
| 3 | MessageTemplate | nvarchar(max) | YES |  |  | Field on SERI.SeriLog named MessageTemplate. [inferred] |
| 4 | Level | nvarchar(max) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 5 | TimeStamp | datetime | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | Exception | nvarchar(max) | YES |  |  | Field on SERI.SeriLog named Exception. [inferred] |
| 7 | Properties | nvarchar(max) | YES |  |  | Field on SERI.SeriLog named Properties. [inferred] |
| 8 | LogApp | nvarchar(50) | YES |  |  | Field on SERI.SeriLog named LogApp. [inferred] |
