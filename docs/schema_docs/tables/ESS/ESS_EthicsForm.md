# ESS.ESS_EthicsForm

Supporting table in the ESS schema related to ess ethics form.

## Snapshot

- Schema: ESS
- Table: ESS_EthicsForm
- Priority: supporting schema
- Approximate rows: 102
- Primary key: EthicsFormIdentifier
- Column count: 46

## Inbound Foreign Keys

- FK__ESS_Comen__Ethic__67D0B2C3: ESS.ESS_Coments via EthicsFormIdentifier -> EthicsFormIdentifier
- FK__ESS_Ethic__ETHCS__7864AB3A: ESS.ESS_EthicsOge450 via EthicsFormIdentifier -> EthicsFormIdentifier
- FK__ESS_Ethic__Ethic__01EE1574: ESS.ESS_EthicsAsset via EthicsFormIdentifier -> EthicsFormIdentifier
- FK__ESS_Ethic__Ethic__06B2CA91: ESS.ESS_EthicsLiability via EthicsFormIdentifier -> EthicsFormIdentifier
- FK__ESS_Ethic__Ethic__06DE7E71: ESS.ESS_EthicsHhs520 via EthicsFormIdentifier -> EthicsFormIdentifier
- FK__ESS_Ethic__Ethic__0B777FAE: ESS.ESS_EthicsAgreements via EthicsFormIdentifier -> EthicsFormIdentifier
- FK__ESS_Ethic__Ethic__103C34CB: ESS.ESS_EthicsGifts via EthicsFormIdentifier -> EthicsFormIdentifier
- FK__ESS_Ethic__Ethic__30104097: ESS.ESS_EthicsHhs521 via EthicsFormIdentifier -> EthicsFormIdentifier
- FK__ESS_Ethic__Ethic__4807C5B9: ESS.ESS_EthicsOutsideActivity_History via EthicsFormIdentifier -> EthicsFormIdentifier
- FK__ESS_Ethic__Ethic__4A8BFF4D: ESS.ESS_EthicsAsset_History via EthicsFormIdentifier -> EthicsFormIdentifier
- FK__ESS_Ethic__Ethic__4F50B46A: ESS.ESS_EthicsLiability_History via EthicsFormIdentifier -> EthicsFormIdentifier
- FK__ESS_Ethic__Ethic__54156987: ESS.ESS_EthicsAgreements_History via EthicsFormIdentifier -> EthicsFormIdentifier
- FK__ESS_Ethic__Ethic__58DA1EA4: ESS.ESS_EthicsGifts_History via EthicsFormIdentifier -> EthicsFormIdentifier
- FK__ESS_Ethic__Ethic__7D296057: ESS.ESS_EthicsExtension via EthicsFormIdentifier -> EthicsFormIdentifier
- FK__ESS_Ethic__Ethic__7E88643B: ESS.ESS_EthicsOutsideActivity via EthicsFormIdentifier -> EthicsFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | EthicsFormIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | FilingYear | varchar(4) | NO |  |  | Field on ESS.ESS_EthicsForm named FilingYear. [inferred] |
| 4 | CoveredYear | varchar(4) | NO |  |  | Field on ESS.ESS_EthicsForm named CoveredYear. [inferred] |
| 5 | FormType | varchar(25) | NO |  |  | Type or category used to classify the record. [inferred] |
| 6 | EmployeeName | varchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 7 | EmployeeEmail | varchar(100) | NO |  |  | Email address related to this record. [inferred] |
| 8 | PositionTitle | varchar(50) | NO |  |  | Field on ESS.ESS_EthicsForm named PositionTitle. [inferred] |
| 9 | GradeStep | varchar(50) | NO |  |  | Field on ESS.ESS_EthicsForm named GradeStep. [inferred] |
| 10 | Salary | numeric(8,2) | YES |  |  | Field on ESS.ESS_EthicsForm named Salary. [inferred] |
| 11 | Agency | varchar(20) | NO |  |  | Field on ESS.ESS_EthicsForm named Agency. [inferred] |
| 12 | SubComponent | varchar(20) | NO |  |  | Field on ESS.ESS_EthicsForm named SubComponent. [inferred] |
| 13 | WorkAddress | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsForm named WorkAddress. [inferred] |
| 14 | WorkCity | varchar(25) | YES |  |  | Field on ESS.ESS_EthicsForm named WorkCity. [inferred] |
| 15 | WorkState | varchar(5) | YES |  |  | Field on ESS.ESS_EthicsForm named WorkState. [inferred] |
| 16 | WorkZipCode | varchar(10) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 17 | WorkPhone | varchar(17) | YES |  |  | Phone number related to this record. [inferred] |
| 18 | WorkFax | varchar(17) | YES |  |  | Field on ESS.ESS_EthicsForm named WorkFax. [inferred] |
| 19 | WorkCell | varchar(17) | YES |  |  | Field on ESS.ESS_EthicsForm named WorkCell. [inferred] |
| 20 | FormReviewStatus | varchar(25) | NO |  |  | Status value describing the current state of the record. [inferred] |
| 21 | EthicsFormStatus | varchar(25) | NO |  |  | Status value describing the current state of the record. [inferred] |
| 22 | DateFiled | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 23 | PageNumber | varchar(3) | NO |  |  | Number used to identify or track this record. [inferred] |
| 24 | EmployeeeSignature | varchar(100) | YES |  |  | Field on ESS.ESS_EthicsForm named EmployeeeSignature. [inferred] |
| 25 | EmployeeSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 26 | SupervisorSignature | varchar(100) | YES |  |  | Field on ESS.ESS_EthicsForm named SupervisorSignature. [inferred] |
| 27 | SupervisorSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 28 | EthicsReviewerSignature | varchar(100) | YES |  |  | Field on ESS.ESS_EthicsForm named EthicsReviewerSignature. [inferred] |
| 29 | EthicsReviewerSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 30 | EthicsOfficialSignature | varchar(100) | YES |  |  | Field on ESS.ESS_EthicsForm named EthicsOfficialSignature. [inferred] |
| 31 | EthicsOfficialSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 32 | AgencyDesigneeSignature | varchar(100) | YES |  |  | Field on ESS.ESS_EthicsForm named AgencyDesigneeSignature. [inferred] |
| 33 | AgencyDesigneeSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 34 | AgencyComments | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsForm named AgencyComments. [inferred] |
| 35 | DisclosureStatus | varchar(25) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 36 | AppointmentType | varchar(255) | YES |  |  | Type or category used to classify the record. [inferred] |
| 37 | AppointmentDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 38 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 39 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 40 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 41 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 42 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 43 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 44 | FormDueDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 45 | OtherAppointmentType | varchar(255) | YES |  |  | Type or category used to classify the record. [inferred] |
| 46 | IsSpecialGovernmentEmployee | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
