# FSTRS.FSTRS_SignificantDeficiencyInformation

Supporting table in the FSTRS schema related to fstrs significant deficiency information.

## Snapshot

- Schema: FSTRS
- Table: FSTRS_SignificantDeficiencyInformation
- Priority: supporting schema
- Approximate rows: 143
- Primary key: SignificantDeficiencyInformationIdentifier
- Column count: 18

## Outbound Foreign Keys

- FK__FSTRS_Sig__FormI__5AA29D4F: FSTRS.FSTRS_Form via FormIdentifier -> FormIdentifier
- FK__FSTRS_Sig__Quest__5B96C188: FSTRS.FSTRS_Question via QuestionIdentifier -> QuestionIdentifier

## Inbound Foreign Keys

- FK__FSTRS_Sig__Signi__5E732E33: FSTRS.FSTRS_SignificantDeficiencyMilestone via SignificantDeficiencyInformationIdentifier -> SignificantDeficiencyInformationIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SignificantDeficiencyInformationIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FormIdentifier | bigint | NO |  |  | Identifier that likely links this record to Form. [inferred] |
| 3 | QuestionIdentifier | bigint | NO |  |  | Identifier that likely links this record to Question. [inferred] |
| 4 | ResponsibleOfficialContactIdentifier | bigint | YES |  |  | Identifier that likely links this record to ResponsibleOfficialContact. [inferred] |
| 5 | TitleDescription | varchar(1000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 6 | DeficiencyDescription | varchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 7 | SourceDiscoveryDescription | varchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 8 | CorrectionStrategyDescription | varchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 9 | DesiredOutcomeDescription | varchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 10 | OtherRelatedIssueDescription | varchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 11 | PreparePlanDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 12 | AuthorizedByName | varchar(80) | YES |  |  | Name or display label for this value. [inferred] |
| 13 | EffectiveResultDescription | varchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 14 | IsIncludeAgencyReport | varchar(1) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 15 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 16 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 17 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 18 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
