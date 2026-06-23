# EDP.EDP_MandatoryTrainingChecklist

Supporting table in the EDP schema related to edp mandatory training checklist.

## Snapshot

- Schema: EDP
- Table: EDP_MandatoryTrainingChecklist
- Priority: supporting schema
- Approximate rows: 9
- Primary key: MandatoryTrainingChecklistIdentifier
- Column count: 9

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | MandatoryTrainingChecklistIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | MandatoryTrainingChecklistDescription | nvarchar(100) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 3 | MandatoryTrainingChecklistLinkText | nvarchar(100) | YES |  |  | Field on EDP.EDP_MandatoryTrainingChecklist named MandatoryTrainingChecklistLinkText. [inferred] |
| 4 | MandatoryTrainingChecklistLink | nvarchar(255) | YES |  |  | Field on EDP.EDP_MandatoryTrainingChecklist named MandatoryTrainingChecklistLink. [inferred] |
| 5 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 7 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
