# FTS.FTS_AgreementStatus

Supporting table in the FTS schema related to fts agreement status.

## Snapshot

- Schema: FTS
- Table: FTS_AgreementStatus
- Priority: supporting schema
- Approximate rows: 36534
- Primary key: AgreementStatusIdentifier
- Column count: 12

## Outbound Foreign Keys

- FK_FTS_Agreement_FTS_AgreementStatus: FTS.FTS_Agreement via AgreementIdentifier -> AgreementIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AgreementStatusIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AgreementIdentifier | bigint | NO |  |  | Identifier that likely links this record to Agreement. [inferred] |
| 3 | Status | nvarchar(40) | NO |  |  | Status value describing the current state of the record. [inferred] |
| 4 | StatusDate | datetime2(7) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 5 | UserIdentifier | bigint | NO |  |  | Identifier that likely links this record to User. [inferred] |
| 6 | Comments | nvarchar(4000) | YES |  |  | Field on FTS.FTS_AgreementStatus named Comments. [inferred] |
| 7 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
