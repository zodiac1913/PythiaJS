# CS.CS_ApplicationName

Supporting table in the CS schema related to cs application name.

## Snapshot

- Schema: CS
- Table: CS_ApplicationName
- Priority: supporting schema
- Approximate rows: 14
- Primary key: ApplicationNameIdentifier
- Column count: 8

## Inbound Foreign Keys

- FK_ApplicationNameMappingApplicationName: CS.CS_ApplicationNameMapping via ApplicationNameIdentifier -> ApplicationNameIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ApplicationNameIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ApplicationName | nvarchar(400) | YES |  |  | Name or display label for this value. [inferred] |
| 3 | ApplicationNameDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 7 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
