# CS.CS_ApplicationNameMapping

Supporting table in the CS schema related to cs application name mapping.

## Snapshot

- Schema: CS
- Table: CS_ApplicationNameMapping
- Priority: supporting schema
- Approximate rows: 68
- Primary key: ApplicationNameMappingIdentifier
- Column count: 9

## Outbound Foreign Keys

- FK_ApplicationNameMappingApplicationName: CS.CS_ApplicationName via ApplicationNameIdentifier -> ApplicationNameIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ApplicationNameMappingIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ApplicationNameIdentifier | bigint | NO |  |  | Identifier that likely links this record to ApplicationName. [inferred] |
| 3 | TaskDefinitionIdentifier | bigint | NO |  |  | Identifier that likely links this record to TaskDefinition. [inferred] |
| 5 | ProjectIdentifier | bigint | YES |  |  | Identifier that likely links this record to Project. [inferred] |
| 7 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
