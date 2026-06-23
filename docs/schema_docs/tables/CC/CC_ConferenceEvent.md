# CC.CC_ConferenceEvent

Supporting table in the CC schema related to cc conference event.

## Snapshot

- Schema: CC
- Table: CC_ConferenceEvent
- Priority: supporting schema
- Approximate rows: 0
- Primary key: ConferenceEventIdentifier
- Column count: 15

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ConferenceEventIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EventName | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 3 | EventLocation | varchar(100) | YES |  |  | Field on CC.CC_ConferenceEvent named EventLocation. [inferred] |
| 4 | EventStartDate | date | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | EventEndDate | date | YES |  |  | Date associated with this attribute or event. [inferred] |
| 6 | EventAddress | varchar(255) | YES |  |  | Field on CC.CC_ConferenceEvent named EventAddress. [inferred] |
| 7 | EventCity | varchar(100) | YES |  |  | Field on CC.CC_ConferenceEvent named EventCity. [inferred] |
| 8 | EventState | varchar(100) | YES |  |  | Field on CC.CC_ConferenceEvent named EventState. [inferred] |
| 9 | EventCountry | varchar(100) | YES |  |  | Field on CC.CC_ConferenceEvent named EventCountry. [inferred] |
| 10 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 11 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 13 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | DeactivateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | DeleteTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
