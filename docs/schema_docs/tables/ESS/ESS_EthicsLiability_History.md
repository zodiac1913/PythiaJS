# ESS.ESS_EthicsLiability_History

Supporting table in the ESS schema related to ess ethics liability history.

## Snapshot

- Schema: ESS
- Table: ESS_EthicsLiability_History
- Priority: supporting schema
- Approximate rows: 4
- Primary key: LiabilityIdentifier
- Column count: 15

## Outbound Foreign Keys

- FK__ESS_Ethic__Ethic__4F50B46A: ESS.ESS_EthicsForm via EthicsFormIdentifier -> EthicsFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | LiabilityIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | LiabilityName | varchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | LiabilitiyType | varchar(255) | YES |  |  | Type or category used to classify the record. [inferred] |
| 5 | LiabilityCity | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsLiability_History named LiabilityCity. [inferred] |
| 6 | LiabilityState | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsLiability_History named LiabilityState. [inferred] |
| 7 | isReviewEdit | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 8 | LiabilityComment | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsLiability_History named LiabilityComment. [inferred] |
| 9 | AddUserIdentifier | numeric(12,0) | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | numeric(12,0) | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | EthicsFormIdentifier | bigint | YES |  |  | Identifier that likely links this record to EthicsForm. [inferred] |
