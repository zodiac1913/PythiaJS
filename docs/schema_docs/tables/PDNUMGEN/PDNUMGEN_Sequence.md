# PDNUMGEN.PDNUMGEN_Sequence

Supporting table in the PDNUMGEN schema related to pdnumgen sequence.

## Snapshot

- Schema: PDNUMGEN
- Table: PDNUMGEN_Sequence
- Priority: supporting schema
- Approximate rows: 12
- Primary key: SequenceIdentifier
- Column count: 8

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SequenceIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | SequenceName | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 3 | SequenceDescription | nchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 4 | LastNumberUsed | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 5 | AddUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 6 | AddTimeStamp | datetime | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 8 | LastUpdateTimeStamp | datetime | YES |  |  | Date and time associated with this attribute or event. [inferred] |
