# ESS.ESS_EthicsOge450

Supporting table in the ESS schema related to ess ethics oge450.

## Snapshot

- Schema: ESS
- Table: ESS_EthicsOge450
- Priority: supporting schema
- Approximate rows: 40
- Primary key: Oge450Identifier
- Column count: 20

## Outbound Foreign Keys

- FK__ESS_Ethic__ETHCS__7864AB3A: ESS.ESS_EthicsForm via EthicsFormIdentifier -> EthicsFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Oge450Identifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | SgeCode | varchar(3) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 4 | SgeEmail | varchar(40) | YES |  |  | Email address related to this record. [inferred] |
| 5 | IsAssetRequired | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 6 | IsLiabilityRequired | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 7 | IsOutsidePosRequired | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 8 | IsAgreementRequired | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 9 | IsGiftsRequired | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 10 | InitialReviewerSignature | varchar(100) | YES |  |  | Field on ESS.ESS_EthicsOge450 named InitialReviewerSignature. [inferred] |
| 11 | InitialReviewerSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 12 | Comments | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsOge450 named Comments. [inferred] |
| 13 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 14 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 16 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 17 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 18 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 19 | EthicsFormIdentifier | bigint | YES |  |  | Identifier that likely links this record to EthicsForm. [inferred] |
| 20 | IsSpousePaidOutsideFed | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
