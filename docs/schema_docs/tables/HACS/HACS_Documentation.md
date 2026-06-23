# HACS.HACS_Documentation

Supporting table in the HACS schema related to hacs documentation.

## Snapshot

- Schema: HACS
- Table: HACS_Documentation
- Priority: supporting schema
- Approximate rows: 12
- Primary key: DocumentationIdentifier
- Column count: 10

## Outbound Foreign Keys

- FK_Documentation_Application: HACS.HACS_Application via ApplicationIdentifier -> ApplicationIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | DocumentationIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | DocumentCategory | nvarchar(200) | YES |  |  | Field on HACS.HACS_Documentation named DocumentCategory. [inferred] |
| 3 | DocumentTitle | nvarchar(400) | YES |  |  | Field on HACS.HACS_Documentation named DocumentTitle. [inferred] |
| 4 | ApplicationIdentifier | bigint | YES |  |  | Identifier that likely links this record to Application. [inferred] |
| 5 | Document | varbinary(max) | YES |  |  | Field on HACS.HACS_Documentation named Document. [inferred] |
| 6 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
