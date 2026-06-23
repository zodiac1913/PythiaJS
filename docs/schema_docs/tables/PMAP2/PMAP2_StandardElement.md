# PMAP2.PMAP2_StandardElement

Supporting table in the PMAP2 schema related to pmap2 standard element.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_StandardElement
- Priority: supporting schema
- Approximate rows: 379
- Primary key: StandardElementIdentifier
- Column count: 12

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | StandardElementIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ElementPositionDescription | varchar(100) | NO |  |  | Longer descriptive text for this value. [inferred] |
| 3 | ElementPositionCode | varchar(4) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 4 | Grade | varchar(100) | YES |  |  | Field on PMAP2.PMAP2_StandardElement named Grade. [inferred] |
| 5 | Category | varchar(200) | YES |  |  | Field on PMAP2.PMAP2_StandardElement named Category. [inferred] |
| 6 | ElementName | varchar(200) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | ElementDescription | varchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 8 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
