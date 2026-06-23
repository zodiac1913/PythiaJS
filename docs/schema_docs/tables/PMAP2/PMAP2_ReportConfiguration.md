# PMAP2.PMAP2_ReportConfiguration

Supporting table in the PMAP2 schema related to pmap2 report configuration.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_ReportConfiguration
- Priority: supporting schema
- Approximate rows: 0
- Primary key: ReportConfigurationIdentifier
- Column count: 22

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ReportConfigurationIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Title | nvarchar(255) | NO |  |  | Field on PMAP2.PMAP2_ReportConfiguration named Title. [inferred] |
| 3 | Description | nvarchar(255) | NO |  |  | Longer descriptive text for this value. [inferred] |
| 4 | Category | nvarchar(255) | NO |  |  | Field on PMAP2.PMAP2_ReportConfiguration named Category. [inferred] |
| 5 | ActionLink | nvarchar(255) | NO |  |  | Field on PMAP2.PMAP2_ReportConfiguration named ActionLink. [inferred] |
| 6 | InputCriteria | nvarchar(max) | YES |  |  | Field on PMAP2.PMAP2_ReportConfiguration named InputCriteria. [inferred] |
| 7 | OutputFields | nvarchar(max) | YES |  |  | Field on PMAP2.PMAP2_ReportConfiguration named OutputFields. [inferred] |
| 8 | IsAssignedAccessLevel0 | bit | NO |  | ((0)) | Boolean-style indicator showing whether this condition is true. [inferred] |
| 9 | IsAssignedAccessLevel1 | bit | NO |  | ((0)) | Boolean-style indicator showing whether this condition is true. [inferred] |
| 10 | IsAssignedAccessLevel2 | bit | NO |  | ((0)) | Boolean-style indicator showing whether this condition is true. [inferred] |
| 11 | IsAssignedAccessLevel3 | bit | NO |  | ((0)) | Boolean-style indicator showing whether this condition is true. [inferred] |
| 12 | IsAssignedAccessLevel4 | bit | NO |  | ((0)) | Boolean-style indicator showing whether this condition is true. [inferred] |
| 13 | IsAssignedAccessLevel5 | bit | NO |  | ((0)) | Boolean-style indicator showing whether this condition is true. [inferred] |
| 14 | IsAssignedAccessLevel6 | bit | NO |  | ((0)) | Boolean-style indicator showing whether this condition is true. [inferred] |
| 15 | IsAssignedAccessLevel7 | bit | NO |  | ((0)) | Boolean-style indicator showing whether this condition is true. [inferred] |
| 16 | IsAssignedAccessLevel8 | bit | NO |  | ((0)) | Boolean-style indicator showing whether this condition is true. [inferred] |
| 17 | IsAssignedAccessLevel9 | bit | NO |  | ((0)) | Boolean-style indicator showing whether this condition is true. [inferred] |
| 18 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 19 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 20 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 21 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 22 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
