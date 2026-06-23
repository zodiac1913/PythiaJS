# ESS.ESS_EthicsAsset

Supporting table in the ESS schema related to ess ethics asset.

## Snapshot

- Schema: ESS
- Table: ESS_EthicsAsset
- Priority: supporting schema
- Approximate rows: 25
- Primary key: AssetIdentifier
- Column count: 15

## Outbound Foreign Keys

- FK__ESS_Ethic__Ethic__01EE1574: ESS.ESS_EthicsForm via EthicsFormIdentifier -> EthicsFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AssetIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | AssetName | varchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | AssetDescription | varchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | IsNoLongerHeld | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 6 | NoLongerHeldDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | EthicsFormIdentifier | bigint | YES |  |  | Identifier that likely links this record to EthicsForm. [inferred] |
| 14 | isReviewEdit | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 15 | AssetComment | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsAsset named AssetComment. [inferred] |
