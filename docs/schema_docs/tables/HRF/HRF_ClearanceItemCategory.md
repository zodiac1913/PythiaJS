# HRF.HRF_ClearanceItemCategory

Supporting table in the HRF schema related to hrf clearance item category.

## Snapshot

- Schema: HRF
- Table: HRF_ClearanceItemCategory
- Priority: supporting schema
- Approximate rows: 8
- Primary key: ClearenceItemCategoryIdentifier
- Column count: 9

## Inbound Foreign Keys

- FK_HRF_ClearanceItem_HRF_ClearanceItemCategory: HRF.HRF_ClearanceItem via ClearenceItemCategoryIdentifier -> ClearenceItemCategoryIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ClearenceItemCategoryIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | CategoryName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | CategoryOfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to CategoryOffice. [inferred] |
| 4 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 5 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 7 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
