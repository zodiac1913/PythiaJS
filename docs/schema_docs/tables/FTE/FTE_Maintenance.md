# FTE.FTE_Maintenance

Supporting table in the FTE schema related to fte maintenance.

## Snapshot

- Schema: FTE
- Table: FTE_Maintenance
- Priority: supporting schema
- Approximate rows: 135
- Primary key: FteMaintenanceIdentifier
- Column count: 15

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FteMaintenanceIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AdminCode | nvarchar(100) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | FiscalYear | nvarchar(10) | YES |  |  | Field on FTE.FTE_Maintenance named FiscalYear. [inferred] |
| 4 | EffectiveDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | AvailableAmount | float | YES |  |  | Numeric value associated with this record. [inferred] |
| 6 | Available1415Amount | float | YES |  |  | Numeric value associated with this record. [inferred] |
| 7 | OrderNumber | float | YES |  |  | Number used to identify or track this record. [inferred] |
| 8 | Version | float | YES |  |  | Numeric value associated with this record. [inferred] |
| 13 | SubAdminCode | nvarchar(100) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 16 | DeactivateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 17 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 18 | AddUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 19 | AddTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 20 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 21 | LastUpdateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
