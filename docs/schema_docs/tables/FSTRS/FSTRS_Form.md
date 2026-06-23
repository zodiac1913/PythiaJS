# FSTRS.FSTRS_Form

Supporting table in the FSTRS schema related to fstrs form.

## Snapshot

- Schema: FSTRS
- Table: FSTRS_Form
- Priority: supporting schema
- Approximate rows: 4559
- Primary key: FormIdentifier
- Column count: 31

## Outbound Foreign Keys

- FK__FSTRS_For__FormT__4C547DF8: FSTRS.FSTRS_FormType via FormTypeIdentifier -> FormTypeIdentifier

## Inbound Foreign Keys

- FK__FSTRS_Hig__FormI__4F30EAA3: FSTRS.FSTRS_HighRiskActivity via FormIdentifier -> FormIdentifier
- FK__FSTRS_Res__FormI__56D20C6B: FSTRS.FSTRS_Response via FormIdentifier -> FormIdentifier
- FK__FSTRS_Sig__FormI__5AA29D4F: FSTRS.FSTRS_SignificantDeficiencyInformation via FormIdentifier -> FormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FormIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FormTypeIdentifier | bigint | NO |  |  | Identifier that likely links this record to FormType. [inferred] |
| 3 | FiscalYear | varchar(4) | YES |  |  | Field on FSTRS.FSTRS_Form named FiscalYear. [inferred] |
| 4 | AdministrativeCode | varchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 5 | CenterAcronymName | varchar(10) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | GroupAcronymName | varchar(10) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | ComponentAcronymName | varchar(10) | YES |  |  | Name or display label for this value. [inferred] |
| 8 | ComponentName | varchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 9 | DirectorName | varchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 10 | BusinessProcessDescription | varchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 11 | IsHighRiskActivity | varchar(1) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 12 | IsOperationalReview | varchar(1) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 13 | AdditionalInfoText | varchar(4000) | YES |  |  | Field on FSTRS.FSTRS_Form named AdditionalInfoText. [inferred] |
| 14 | AssuranceLevelCode | varchar(50) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 15 | LastCompletedSectionCode | varchar(50) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 16 | ReviewTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 17 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 18 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 19 | IsSystemOwner | varchar(1) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 20 | IsArchivedForm | varchar(1) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 21 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 22 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 23 | IsSectionB2 | varchar(1) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 24 | IsSectionB3 | varchar(1) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 25 | AssignedManagerUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to AssignedManagerUser. [inferred] |
| 26 | AssignedManagerProxyIdentifier | bigint | YES |  |  | Identifier that likely links this record to AssignedManagerProxy. [inferred] |
| 27 | FormSubmitterUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to FormSubmitterUser. [inferred] |
| 28 | CoordinatorUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to CoordinatorUser. [inferred] |
| 29 | CoordinatorProxyUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to CoordinatorProxyUser. [inferred] |
| 30 | Coordinator2ProxyUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to Coordinator2ProxyUser. [inferred] |
| 31 | Coordinator3ProxyUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to Coordinator3ProxyUser. [inferred] |
