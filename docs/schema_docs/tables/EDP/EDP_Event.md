# EDP.EDP_Event

Supporting table in the EDP schema related to edp event.

## Snapshot

- Schema: EDP
- Table: EDP_Event
- Priority: supporting schema
- Approximate rows: 4
- Primary key: EventIdentifier
- Column count: 10

## Inbound Foreign Keys

- FK_EDP_Event_EDP_FormEvent: EDP.EDP_FormEvent via EventIdentifier -> EventIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | EventIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Title | nvarchar(250) | YES |  |  | Field on EDP.EDP_Event named Title. [inferred] |
| 3 | Description | nvarchar(500) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 4 | DateOfEvent | datetime2(7) | YES |  |  | Temporal field associated with this record. [inferred] |
| 5 | Year | nvarchar(4) | YES |  |  | Field on EDP.EDP_Event named Year. [inferred] |
| 6 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
