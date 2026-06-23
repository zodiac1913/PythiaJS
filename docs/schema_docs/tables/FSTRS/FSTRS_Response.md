# FSTRS.FSTRS_Response

Supporting table in the FSTRS schema related to fstrs response.

## Snapshot

- Schema: FSTRS
- Table: FSTRS_Response
- Priority: supporting schema
- Approximate rows: 49562
- Primary key: ResponseIdentifier
- Column count: 9

## Outbound Foreign Keys

- FK__FSTRS_Res__FormI__56D20C6B: FSTRS.FSTRS_Form via FormIdentifier -> FormIdentifier
- FK__FSTRS_Res__Quest__57C630A4: FSTRS.FSTRS_Question via QuestionIdentifier -> QuestionIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ResponseIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FormIdentifier | bigint | NO |  |  | Identifier that likely links this record to Form. [inferred] |
| 3 | QuestionIdentifier | bigint | NO |  |  | Identifier that likely links this record to Question. [inferred] |
| 4 | IsResponse | varchar(1) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 5 | ResponseComment | varchar(4000) | YES |  |  | Field on FSTRS.FSTRS_Response named ResponseComment. [inferred] |
| 6 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 7 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
