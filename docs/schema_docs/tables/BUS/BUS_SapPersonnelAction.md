# BUS.BUS_SapPersonnelAction

Supporting table in the BUS schema related to bus sap personnel action.

## Snapshot

- Schema: BUS
- Table: BUS_SapPersonnelAction
- Priority: supporting schema
- Approximate rows: 1011891
- Primary key: SapPersonnelActionIdentifier
- Column count: 7

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SapPersonnelActionIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Description | nvarchar(100) | NO |  |  | Longer descriptive text for this value. [inferred] |
| 3 | Record | varchar(max) | NO |  |  | Field on BUS.BUS_SapPersonnelAction named Record. [inferred] |
| 4 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 5 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 7 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
