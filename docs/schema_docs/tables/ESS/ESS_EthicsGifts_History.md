# ESS.ESS_EthicsGifts_History

Supporting table in the ESS schema related to ess ethics gifts history.

## Snapshot

- Schema: ESS
- Table: ESS_EthicsGifts_History
- Priority: supporting schema
- Approximate rows: 1
- Primary key: GiftsIdentifier
- Column count: 13

## Outbound Foreign Keys

- FK__ESS_Ethic__Ethic__58DA1EA4: ESS.ESS_EthicsForm via EthicsFormIdentifier -> EthicsFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | GiftsIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | GiftSource | varchar(255) | YES |  |  | Field on ESS.ESS_EthicsGifts_History named GiftSource. [inferred] |
| 4 | GiftDescription | varchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | isReviewEdit | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 6 | GiftsComment | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsGifts_History named GiftsComment. [inferred] |
| 7 | AddUserIdentifier | numeric(12,0) | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | numeric(12,0) | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | EthicsFormIdentifier | bigint | YES |  |  | Identifier that likely links this record to EthicsForm. [inferred] |
