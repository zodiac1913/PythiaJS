# OT.OT_BiWeeklyLimit

Supporting table in the OT schema related to ot bi weekly limit.

## Snapshot

- Schema: OT
- Table: OT_BiWeeklyLimit
- Priority: supporting schema
- Approximate rows: 110
- Primary key: BiWeeklyLimitIdentifier
- Column count: 14

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | BiWeeklyLimitIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Year | nvarchar(4) | YES |  |  | Field on OT.OT_BiWeeklyLimit named Year. [inferred] |
| 3 | YearStartDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 4 | YearEndDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | LocalityPayCode | nvarchar(4) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 6 | LocalityPayDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 7 | LocalityPayPercent | numeric(4,2) | YES |  |  | Field on OT.OT_BiWeeklyLimit named LocalityPayPercent. [inferred] |
| 8 | BiWeeklyCap | numeric(12,2) | YES |  |  | Field on OT.OT_BiWeeklyLimit named BiWeeklyCap. [inferred] |
| 9 | SalaryPayCap | numeric(12,2) | YES |  |  | Field on OT.OT_BiWeeklyLimit named SalaryPayCap. [inferred] |
| 10 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 12 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 14 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
