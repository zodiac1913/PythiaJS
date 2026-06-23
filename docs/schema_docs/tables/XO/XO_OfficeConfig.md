# XO.XO_OfficeConfig

Supporting table in the XO schema related to xo office config.

## Snapshot

- Schema: XO
- Table: XO_OfficeConfig
- Priority: supporting schema
- Approximate rows: 2
- Primary key: OfficeConfigIdentifier
- Column count: 10

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | OfficeConfigIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | OfficeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Office. [inferred] |
| 3 | OfficeName | nvarchar(50) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | IsPrimaryXoDelegate | bit | NO |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 5 | IsXoSubordinateControl | bit | NO |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 6 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
