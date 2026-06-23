# OT.OT_DayRequested

Supporting table in the OT schema related to ot day requested.

## Snapshot

- Schema: OT
- Table: OT_DayRequested
- Priority: supporting schema
- Approximate rows: 12
- Primary key: DayRequestedIdentifier
- Column count: 11

## Outbound Foreign Keys

- FK_OT_DayRequested_OT_OverTimeForm: OT.OT_OverTimeForm via OverTimeFormIdentifier -> OverTimeFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | DayRequestedIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | OverTimeFormIdentifier | bigint | NO |  |  | Identifier that likely links this record to OverTimeForm. [inferred] |
| 3 | ToBeWorkedDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 4 | ToBeWorkedHours | numeric(10,2) | YES |  |  | Field on OT.OT_DayRequested named ToBeWorkedHours. [inferred] |
| 5 | ToBeWorkedCost | numeric(10,2) | YES |  |  | Field on OT.OT_DayRequested named ToBeWorkedCost. [inferred] |
| 6 | ToBeWorkedIsCompTime | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 7 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
