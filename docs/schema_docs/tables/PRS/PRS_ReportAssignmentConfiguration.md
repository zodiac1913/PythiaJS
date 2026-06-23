# PRS.PRS_ReportAssignmentConfiguration

Supporting table in the PRS schema related to prs report assignment configuration.

## Snapshot

- Schema: PRS
- Table: PRS_ReportAssignmentConfiguration
- Priority: supporting schema
- Approximate rows: 6
- Primary key: ReportAssignmentConfigurationIdentifier
- Column count: 14

## Outbound Foreign Keys

- FK_PRS_ReportAssignmentConfiguration_PRS_ReportAssignment: PRS.PRS_ReportAssignment via ReportAssignmentIdentifier -> ReportAssignmentIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ReportAssignmentConfigurationIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ReportAssignmentIdentifier | bigint | NO |  |  | Identifier that likely links this record to ReportAssignment. [inferred] |
| 3 | ReportAssignmentConfigurationName | nvarchar(200) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | ReportIdentifier | bigint | NO |  |  | Identifier that likely links this record to Report. [inferred] |
| 5 | ReportUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ReportUser. [inferred] |
| 6 | TaskAccessLevelIdentifier | int | YES |  |  | Identifier that likely links this record to TaskAccessLevel. [inferred] |
| 7 | HomeTaskDefinitionIdentifier | bigint | NO |  |  | Identifier that likely links this record to HomeTaskDefinition. [inferred] |
| 8 | ConfigurationKeyName | nvarchar(200) | YES |  |  | Name or display label for this value. [inferred] |
| 9 | ConfigurationKeyValue | bigint | YES |  |  | Numeric value associated with this record. [inferred] |
| 10 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 12 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 14 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
