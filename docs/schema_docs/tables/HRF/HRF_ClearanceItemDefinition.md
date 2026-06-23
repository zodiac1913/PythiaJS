# HRF.HRF_ClearanceItemDefinition

Supporting table in the HRF schema related to hrf clearance item definition.

## Snapshot

- Schema: HRF
- Table: HRF_ClearanceItemDefinition
- Priority: supporting schema
- Approximate rows: 18
- Primary key: ClearanceItemDefinitionIdentifier
- Column count: 13

## Inbound Foreign Keys

- FK_HRF_ClearanceItem_HRF_ClearanceItemDefinition: HRF.HRF_ClearanceItem via ClearanceItemDefinitionIdentifier -> ClearanceItemDefinitionIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ClearanceItemDefinitionIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ClearenceItemCategoryIdentifier | bigint | NO |  |  | Identifier that likely links this record to ClearenceItemCategory. [inferred] |
| 3 | IsLastDutyDayOnly | bit | NO |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 4 | IsSignatoryOnly | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 5 | DisableNA | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 6 | ItemOfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ItemOffice. [inferred] |
| 7 | ItemDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
