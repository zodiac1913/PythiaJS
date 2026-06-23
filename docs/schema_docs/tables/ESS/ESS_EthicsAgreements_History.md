# ESS.ESS_EthicsAgreements_History

Supporting table in the ESS schema related to ess ethics agreements history.

## Snapshot

- Schema: ESS
- Table: ESS_EthicsAgreements_History
- Priority: supporting schema
- Approximate rows: 1
- Primary key: AgreementIdentifier
- Column count: 15

## Outbound Foreign Keys

- FK__ESS_Ethic__Ethic__54156987: ESS.ESS_EthicsForm via EthicsFormIdentifier -> EthicsFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AgreementIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | AgreementsEntity | varchar(255) | YES |  |  | Field on ESS.ESS_EthicsAgreements_History named AgreementsEntity. [inferred] |
| 4 | AgreementsTerm | varchar(255) | YES |  |  | Field on ESS.ESS_EthicsAgreements_History named AgreementsTerm. [inferred] |
| 5 | AgreementsCity | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsAgreements_History named AgreementsCity. [inferred] |
| 6 | AgreementsState | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsAgreements_History named AgreementsState. [inferred] |
| 7 | isReviewEdit | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 8 | AgreementsComment | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsAgreements_History named AgreementsComment. [inferred] |
| 9 | AddUserIdentifier | numeric(12,0) | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | numeric(12,0) | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | EthicsFormIdentifier | bigint | YES |  |  | Identifier that likely links this record to EthicsForm. [inferred] |
