# CORE.KeyValueDefinition

Business-critical table in the CORE schema related to key value definition.

## Snapshot

- Schema: CORE
- Table: KeyValueDefinition
- Priority: primary schema
- Approximate rows: 142
- Primary key: KeyValueDefinitionIdentifier
- Column count: 13

## Inbound Foreign Keys

- FK_KeyValue_KeyValueDefinition: CORE.KeyValue via KeyValueDefinitionIdentifier -> KeyValueDefinitionIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | KeyValueDefinitionIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | TaskDefinitionIdentifier | bigint | YES |  |  | Identifier that likely links this record to TaskDefinition. [inferred] |
| 3 | KeyValueDefinitionName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | KeyValueDefinitionDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | AllowEdit | bit | NO |  | ((1)) | Flag value stored as true or false. [inferred] |
| 6 | AllowDelete | bit | NO |  | ((1)) | Flag value stored as true or false. [inferred] |
| 7 | Active | bit | NO |  | ((1)) | Flag value stored as true or false. [inferred] |
| 8 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 11 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 13 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
