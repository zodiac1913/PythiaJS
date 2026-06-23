# HRF.HRF_ClearanceItem

Supporting table in the HRF schema related to hrf clearance item.

## Snapshot

- Schema: HRF
- Table: HRF_ClearanceItem
- Priority: supporting schema
- Approximate rows: 2430
- Primary key: ClearanceItemIdentifier
- Column count: 22

## Outbound Foreign Keys

- FK_HRF_ClearanceItem_HRF_ClearanceItemCategory: HRF.HRF_ClearanceItemCategory via ClearenceItemCategoryIdentifier -> ClearenceItemCategoryIdentifier
- FK_HRF_ClearanceItem_HRF_ClearanceItemDefinition: HRF.HRF_ClearanceItemDefinition via ClearanceItemDefinitionIdentifier -> ClearanceItemDefinitionIdentifier
- FK_HRF_ClearanceItem_HRF_EmployeeClearance: HRF.HRF_EmployeeClearance via EmployeeClearanceIdentifier -> EmployeeClearanceIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ClearanceItemIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeClearanceIdentifier | bigint | NO |  |  | Identifier that likely links this record to EmployeeClearance. [inferred] |
| 3 | ClearanceItemDefinitionIdentifier | bigint | NO |  |  | Identifier that likely links this record to ClearanceItemDefinition. [inferred] |
| 4 | ClearanceItemDefinitionDescription | nvarchar(150) | NO |  |  | Longer descriptive text for this value. [inferred] |
| 5 | IsLastDutyDayOnly | bit | NO |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 6 | IsSignatoryOnly | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 7 | DisableNA | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 8 | ClearenceItemCategoryIdentifier | bigint | NO |  |  | Identifier that likely links this record to ClearenceItemCategory. [inferred] |
| 9 | ClearenceItemCategoryName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 10 | ItemOfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ItemOffice. [inferred] |
| 11 | ItemStatus | nvarchar(50) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 12 | ItemSignatureDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 13 | ItemSignatureUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ItemSignatureUser. [inferred] |
| 14 | ItemSignatureUserInitials | nvarchar(20) | YES |  |  | Field on HRF.HRF_ClearanceItem named ItemSignatureUserInitials. [inferred] |
| 15 | ItemSignatureUserEmail | nvarchar(150) | YES |  |  | Email address related to this record. [inferred] |
| 16 | ItemSignatureUserComments | nvarchar(max) | YES |  |  | Field on HRF.HRF_ClearanceItem named ItemSignatureUserComments. [inferred] |
| 17 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 18 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 19 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 20 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 21 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 22 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
