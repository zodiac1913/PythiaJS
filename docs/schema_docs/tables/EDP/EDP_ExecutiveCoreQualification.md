# EDP.EDP_ExecutiveCoreQualification

Supporting table in the EDP schema related to edp executive core qualification.

## Snapshot

- Schema: EDP
- Table: EDP_ExecutiveCoreQualification
- Priority: supporting schema
- Approximate rows: 27
- Primary key: ExecutiveCoreQualificationIdentifier
- Column count: 10

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ExecutiveCoreQualificationIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Year | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 3 | Type | nvarchar(25) | YES |  |  | Type or category used to classify the record. [inferred] |
| 4 | Competency | nvarchar(25) | YES |  |  | Field on EDP.EDP_ExecutiveCoreQualification named Competency. [inferred] |
| 5 | CompetencyDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 6 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
