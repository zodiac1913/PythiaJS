# EDP.EDP_FormEvent

Supporting table in the EDP schema related to edp form event.

## Snapshot

- Schema: EDP
- Table: EDP_FormEvent
- Priority: supporting schema
- Approximate rows: 1
- Primary key: FormEventIdentifier
- Column count: 10

## Outbound Foreign Keys

- FK_EDP_Event_EDP_FormEvent: EDP.EDP_Event via EventIdentifier -> EventIdentifier
- FK_EDP_Form_EDP_FormEvent: EDP.EDP_Form via FormIdentifier -> FormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FormEventIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EventIdentifier | bigint | NO |  |  | Identifier that likely links this record to Event. [inferred] |
| 3 | FormIdentifier | bigint | NO |  |  | Identifier that likely links this record to Form. [inferred] |
| 4 | HasAttended | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 5 | DateAttended | datetime2(7) | YES |  |  | Temporal field associated with this record. [inferred] |
| 6 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
