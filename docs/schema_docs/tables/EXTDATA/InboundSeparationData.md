# EXTDATA.InboundSeparationData

Supporting table in the EXTDATA schema related to inbound separation data.

## Snapshot

- Schema: EXTDATA
- Table: InboundSeparationData
- Priority: supporting schema
- Approximate rows: 0
- Primary key: InboundSeparationDataIdentifier
- Column count: 7

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | InboundSeparationDataIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | LogonName | nvarchar(4) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | FinalDutyDate | datetime2(0) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 4 | SeparationDate | datetime2(0) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 5 | SeparatingAuthority | nvarchar(4) | NO |  |  | Field on EXTDATA.InboundSeparationData named SeparatingAuthority. [inferred] |
| 6 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
