# FTE.FTE_Adjustment

Supporting table in the FTE schema related to fte adjustment.

## Snapshot

- Schema: FTE
- Table: FTE_Adjustment
- Priority: supporting schema
- Approximate rows: 1
- Primary key: FteAdjustmentIdentifier
- Column count: 15

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FteAdjustmentIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FromAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | FromDetailAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 4 | ToAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 5 | ToDetailAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 6 | FteCount | numeric(4,2) | YES |  |  | Field on FTE.FTE_Adjustment named FteCount. [inferred] |
| 7 | Fte1415Count | numeric(4,2) | YES |  |  | Field on FTE.FTE_Adjustment named Fte1415Count. [inferred] |
| 8 | Comment | nvarchar(500) | YES |  |  | Field on FTE.FTE_Adjustment named Comment. [inferred] |
| 9 | NotApplicableDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 16 | DeactivateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 17 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 18 | AddUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 19 | AddTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 20 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 21 | LastUpdateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
