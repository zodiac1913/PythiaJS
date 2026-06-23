# HACS.HACS_FocusArea

Supporting table in the HACS schema related to hacs focus area.

## Snapshot

- Schema: HACS
- Table: HACS_FocusArea
- Priority: supporting schema
- Approximate rows: 5
- Primary key: FocusAreaIdentifier
- Column count: 9

## Inbound Foreign Keys

- FK_HACS_Application_FocusArea: HACS.HACS_Application via PrimaryFocusAreaIdentifier -> FocusAreaIdentifier
- FK_HACS_Application_SecondaryFocusArea: HACS.HACS_Application via SecondaryFocusAreaIdentifier -> FocusAreaIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FocusAreaIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 3 | AddTimeStamp | datetime | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 4 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 5 | LastUpdateTimeStamp | datetime | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | DeleteTimeStamp | datetime | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | FocusAreaName | varchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 8 | FocusAreaDescription | varchar(1000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 9 | IsActive | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
