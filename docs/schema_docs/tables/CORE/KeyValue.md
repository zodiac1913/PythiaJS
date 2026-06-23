# CORE.KeyValue

Business-critical table in the CORE schema related to key value.

## Snapshot

- Schema: CORE
- Table: KeyValue
- Priority: primary schema
- Approximate rows: 61572
- Primary key: KeyValueIdentifier
- Column count: 15

## Outbound Foreign Keys

- FK_KeyValue_KeyValueDefinition: CORE.KeyValueDefinition via KeyValueDefinitionIdentifier -> KeyValueDefinitionIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | KeyValueIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | KeyValueDefinitionIdentifier | bigint | YES |  |  | Identifier that likely links this record to KeyValueDefinition. [inferred] |
| 3 | KeyValueCode | nvarchar(100) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 4 | KeyValueDescription | nvarchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | OrderNumber | int | YES |  |  | Number used to identify or track this record. [inferred] |
| 6 | IsDefault | bit | NO |  | ((1)) | Boolean-style indicator showing whether this condition is true. [inferred] |
| 7 | AllowEdit | bit | NO |  | ((1)) | Flag value stored as true or false. [inferred] |
| 8 | AllowDelete | bit | NO |  | ((1)) | Flag value stored as true or false. [inferred] |
| 9 | Active | bit | NO |  | ((1)) | Flag value stored as true or false. [inferred] |
| 10 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 13 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 15 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
