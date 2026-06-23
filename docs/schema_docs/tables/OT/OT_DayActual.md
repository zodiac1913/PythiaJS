# OT.OT_DayActual

Supporting table in the OT schema related to ot day actual.

## Snapshot

- Schema: OT
- Table: OT_DayActual
- Priority: supporting schema
- Approximate rows: 3
- Primary key: DayActualIdentifier
- Column count: 13

## Outbound Foreign Keys

- FK_OT_DayActual_OT_OverTimeForm: OT.OT_OverTimeForm via OverTimeFormIdentifier -> OverTimeFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | DayActualIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | OverTimeFormIdentifier | bigint | NO |  |  | Identifier that likely links this record to OverTimeForm. [inferred] |
| 3 | WorkedDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 4 | WorkedStartTime | datetime2(7) | YES |  |  | Temporal field associated with this record. [inferred] |
| 5 | WorkedEndTime | datetime2(7) | YES |  |  | Temporal field associated with this record. [inferred] |
| 6 | WorkedHours | numeric(10,2) | YES |  |  | Field on OT.OT_DayActual named WorkedHours. [inferred] |
| 7 | WorkedCost | numeric(10,2) | YES |  |  | Field on OT.OT_DayActual named WorkedCost. [inferred] |
| 8 | WorkedIsCompTime | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 9 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 11 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 13 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
