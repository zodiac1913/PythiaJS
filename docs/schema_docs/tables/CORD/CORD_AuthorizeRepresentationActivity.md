# CORD.CORD_AuthorizeRepresentationActivity

Supporting table in the CORD schema related to cord authorize representation activity.

## Snapshot

- Schema: CORD
- Table: CORD_AuthorizeRepresentationActivity
- Priority: supporting schema
- Approximate rows: 37
- Primary key: AuthorizeRepresentationActivityIdentifier
- Column count: 9

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AuthorizeRepresentationActivityIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ActivityName | varchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | ActivityCategory | varchar(255) | NO |  |  | Field on CORD.CORD_AuthorizeRepresentationActivity named ActivityCategory. [inferred] |
| 4 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 5 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 7 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | DeactivateTimpStamp | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
