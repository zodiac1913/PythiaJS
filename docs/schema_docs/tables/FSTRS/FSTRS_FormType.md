# FSTRS.FSTRS_FormType

Supporting table in the FSTRS schema related to fstrs form type.

## Snapshot

- Schema: FSTRS
- Table: FSTRS_FormType
- Priority: supporting schema
- Approximate rows: 5
- Primary key: FormTypeIdentifier
- Column count: 6

## Inbound Foreign Keys

- FK__FSTRS_For__FormT__4C547DF8: FSTRS.FSTRS_Form via FormTypeIdentifier -> FormTypeIdentifier
- FK__FSTRS_Que__FormT__53F59FC0: FSTRS.FSTRS_Question via FormTypeIdentifier -> FormTypeIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FormTypeIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FormName | varchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 3 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 4 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 5 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 6 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
