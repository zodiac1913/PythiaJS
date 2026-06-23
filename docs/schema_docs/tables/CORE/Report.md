# CORE.Report

Business-critical table in the CORE schema related to report.

## Snapshot

- Schema: CORE
- Table: Report
- Priority: primary schema
- Approximate rows: 32
- Primary key: ReportIdentifier
- Column count: 16

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ReportIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Name | nvarchar(50) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | Description | nvarchar(2000) | NO |  |  | Longer descriptive text for this value. [inferred] |
| 4 | TaskDefinitionIdentifier | bigint | YES |  |  | Identifier that likely links this record to TaskDefinition. [inferred] |
| 5 | Alias | nvarchar(10) | YES |  |  | Field on CORE.Report named Alias. [inferred] |
| 6 | AccessModifier | nvarchar(50) | NO |  |  | Field on CORE.Report named AccessModifier. [inferred] |
| 7 | RoleName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 8 | IsFavorite | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 9 | IsDefault | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 10 | IsAutoRun | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 11 | IsAdvanced | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 12 | Data | nvarchar(max) | NO |  |  | Field on CORE.Report named Data. [inferred] |
| 13 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 15 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 16 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
