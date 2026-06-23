# HR.HR_KeyValueTMP

Business-critical table in the HR schema related to hr key value tmp.

## Snapshot

- Schema: HR
- Table: HR_KeyValueTMP
- Priority: primary schema
- Approximate rows: 69729
- Primary key: KeyValueIdentifier
- Column count: 9

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | KeyValueIdentifier | bigint | NO | PK |  | Primary key identifier for this record. [inferred] |
| 2 | KeyValueType | nvarchar(100) | YES |  |  | Type or category used to classify the record. [inferred] |
| 3 | KeyValueCode | nvarchar(100) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 4 | KeyValueDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 7 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
