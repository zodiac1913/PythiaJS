# UTL.UTL_Report

Supporting table in the UTL schema related to utl report.

## Snapshot

- Schema: UTL
- Table: UTL_Report
- Priority: supporting schema
- Approximate rows: 4
- Primary key: ReportIdentifier
- Column count: 15

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ReportIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Name | nvarchar(50) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | Description | nvarchar(2000) | NO |  |  | Longer descriptive text for this value. [inferred] |
| 4 | TaskDefinitionIdentifier | bigint | YES |  |  | Identifier that likely links this record to TaskDefinition. [inferred] |
| 5 | Alias | nvarchar(10) | YES |  |  | Field on UTL.UTL_Report named Alias. [inferred] |
| 6 | AccessModifier | nvarchar(50) | NO |  |  | Field on UTL.UTL_Report named AccessModifier. [inferred] |
| 7 | RoleName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 8 | IsFavorite | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 9 | IsDefault | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 10 | IsAutoRun | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 11 | Data | nvarchar(max) | NO |  |  | Field on UTL.UTL_Report named Data. [inferred] |
| 12 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 14 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
