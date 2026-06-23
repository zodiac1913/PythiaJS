# HACS.HACS_Panelist

Supporting table in the HACS schema related to hacs panelist.

## Snapshot

- Schema: HACS
- Table: HACS_Panelist
- Priority: supporting schema
- Approximate rows: 6
- Primary key: PanelistIdentifier
- Column count: 11

## Inbound Foreign Keys

- FK_PanelDecision_Panelist: HACS.HACS_PanelDecision via PanelistIdentifer -> PanelistIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PanelistIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | Role | nvarchar(100) | NO |  |  | Field on HACS.HACS_Panelist named Role. [inferred] |
| 4 | FirstLastName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 5 | Email | nvarchar(max) | NO |  |  | Email address related to this record. [inferred] |
| 6 | DeactivateTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | DeleteTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
