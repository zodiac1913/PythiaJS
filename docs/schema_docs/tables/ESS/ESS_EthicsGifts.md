# ESS.ESS_EthicsGifts

Supporting table in the ESS schema related to ess ethics gifts.

## Snapshot

- Schema: ESS
- Table: ESS_EthicsGifts
- Priority: supporting schema
- Approximate rows: 6
- Primary key: GiftsIdentifier
- Column count: 13

## Outbound Foreign Keys

- FK__ESS_Ethic__Ethic__103C34CB: ESS.ESS_EthicsForm via EthicsFormIdentifier -> EthicsFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | GiftsIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | GiftSource | varchar(255) | YES |  |  | Field on ESS.ESS_EthicsGifts named GiftSource. [inferred] |
| 4 | GiftDescription | varchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 6 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 8 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | EthicsFormIdentifier | bigint | YES |  |  | Identifier that likely links this record to EthicsForm. [inferred] |
| 12 | isReviewEdit | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 13 | GiftsComment | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsGifts named GiftsComment. [inferred] |
