# FSTRS.FSTRS_Question

Supporting table in the FSTRS schema related to fstrs question.

## Snapshot

- Schema: FSTRS
- Table: FSTRS_Question
- Priority: supporting schema
- Approximate rows: 2600
- Primary key: QuestionIdentifier
- Column count: 15

## Outbound Foreign Keys

- FK__FSTRS_Que__FormT__53F59FC0: FSTRS.FSTRS_FormType via FormTypeIdentifier -> FormTypeIdentifier

## Inbound Foreign Keys

- FK__FSTRS_Res__Quest__57C630A4: FSTRS.FSTRS_Response via QuestionIdentifier -> QuestionIdentifier
- FK__FSTRS_Sig__Quest__5B96C188: FSTRS.FSTRS_SignificantDeficiencyInformation via QuestionIdentifier -> QuestionIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | QuestionIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FormTypeIdentifier | bigint | NO |  |  | Identifier that likely links this record to FormType. [inferred] |
| 3 | SubsectionCode | varchar(3) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 4 | QuestionNumber | bigint | YES |  |  | Number used to identify or track this record. [inferred] |
| 5 | QuestionText | varchar(1000) | YES |  |  | Field on FSTRS.FSTRS_Question named QuestionText. [inferred] |
| 6 | QuestionResponseYesText | varchar(1000) | YES |  |  | Field on FSTRS.FSTRS_Question named QuestionResponseYesText. [inferred] |
| 7 | QuestionResponseNoText | varchar(1000) | YES |  |  | Field on FSTRS.FSTRS_Question named QuestionResponseNoText. [inferred] |
| 8 | FiscalYear | varchar(4) | YES |  |  | Field on FSTRS.FSTRS_Question named FiscalYear. [inferred] |
| 9 | PreviousYearQuestionIdentifier | bigint | YES |  |  | Identifier that likely links this record to PreviousYearQuestion. [inferred] |
| 10 | HelpText | varchar(4000) | YES |  |  | Field on FSTRS.FSTRS_Question named HelpText. [inferred] |
| 11 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 12 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 14 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | QuestionResponseNaText | varchar(1000) | YES |  |  | Field on FSTRS.FSTRS_Question named QuestionResponseNaText. [inferred] |
