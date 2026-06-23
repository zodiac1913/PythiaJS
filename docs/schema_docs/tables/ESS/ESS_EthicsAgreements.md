# ESS.ESS_EthicsAgreements

Supporting table in the ESS schema related to ess ethics agreements.

## Snapshot

- Schema: ESS
- Table: ESS_EthicsAgreements
- Priority: supporting schema
- Approximate rows: 7
- Primary key: AgreementIdentifier
- Column count: 15

## Outbound Foreign Keys

- FK__ESS_Ethic__Ethic__0B777FAE: ESS.ESS_EthicsForm via EthicsFormIdentifier -> EthicsFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AgreementIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | AgreementsEntity | varchar(255) | YES |  |  | Field on ESS.ESS_EthicsAgreements named AgreementsEntity. [inferred] |
| 4 | AgreementsTerm | varchar(255) | YES |  |  | Field on ESS.ESS_EthicsAgreements named AgreementsTerm. [inferred] |
| 5 | AgreementsCity | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsAgreements named AgreementsCity. [inferred] |
| 6 | AgreementsState | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsAgreements named AgreementsState. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | EthicsFormIdentifier | bigint | YES |  |  | Identifier that likely links this record to EthicsForm. [inferred] |
| 14 | isReviewEdit | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 15 | AgreementsComment | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsAgreements named AgreementsComment. [inferred] |
