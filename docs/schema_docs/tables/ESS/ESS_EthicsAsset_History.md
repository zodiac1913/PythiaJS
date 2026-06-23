# ESS.ESS_EthicsAsset_History

Supporting table in the ESS schema related to ess ethics asset history.

## Snapshot

- Schema: ESS
- Table: ESS_EthicsAsset_History
- Priority: supporting schema
- Approximate rows: 10
- Primary key: AssetIdentifier
- Column count: 16

## Outbound Foreign Keys

- FK__ESS_Ethic__Ethic__4A8BFF4D: ESS.ESS_EthicsForm via EthicsFormIdentifier -> EthicsFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AssetIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | AssetName | varchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | AssetDescription | varchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | NoLongerHeldSwitch | varchar(1) | YES |  |  | Field on ESS.ESS_EthicsAsset_History named NoLongerHeldSwitch. [inferred] |
| 6 | NoLongerHeldDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 7 | isReviewEdit | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 8 | AssetComment | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsAsset_History named AssetComment. [inferred] |
| 9 | AddUserIdentifier | numeric(12,0) | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | numeric(12,0) | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | EthicsFormIdentifier | bigint | YES |  |  | Identifier that likely links this record to EthicsForm. [inferred] |
| 16 | isNoLongerHeld | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
