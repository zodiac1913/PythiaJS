# FSTRS.FSTRS_HighRiskActivity

Supporting table in the FSTRS schema related to fstrs high risk activity.

## Snapshot

- Schema: FSTRS
- Table: FSTRS_HighRiskActivity
- Priority: supporting schema
- Approximate rows: 0
- Primary key: HighRiskActivityIdentifier
- Column count: 8

## Outbound Foreign Keys

- FK__FSTRS_Hig__FormI__4F30EAA3: FSTRS.FSTRS_Form via FormIdentifier -> FormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | HighRiskActivityIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FormIdentifier | bigint | NO |  |  | Identifier that likely links this record to Form. [inferred] |
| 3 | HighRiskActivityDescription | varchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 4 | HighRiskActivityContactIdentifier | bigint | YES |  |  | Identifier that likely links this record to HighRiskActivityContact. [inferred] |
| 5 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 6 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 8 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
