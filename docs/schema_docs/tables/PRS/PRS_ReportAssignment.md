# PRS.PRS_ReportAssignment

Supporting table in the PRS schema related to prs report assignment.

## Snapshot

- Schema: PRS
- Table: PRS_ReportAssignment
- Priority: supporting schema
- Approximate rows: 8
- Primary key: ReportAssignmentIdentifier
- Column count: 11

## Inbound Foreign Keys

- FK_PRS_ReportAssignmentConfiguration_PRS_ReportAssignment: PRS.PRS_ReportAssignmentConfiguration via ReportAssignmentIdentifier -> ReportAssignmentIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ReportAssignmentIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ReportIdentifier | bigint | NO |  |  | Identifier that likely links this record to Report. [inferred] |
| 3 | ReportUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ReportUser. [inferred] |
| 4 | TaskAccessLevelIdentifier | int | YES |  |  | Identifier that likely links this record to TaskAccessLevel. [inferred] |
| 5 | TaskRoleLevelIdentifier | int | YES |  |  | Identifier that likely links this record to TaskRoleLevel. [inferred] |
| 6 | HomeTaskDefinitionIdentifier | bigint | NO |  |  | Identifier that likely links this record to HomeTaskDefinition. [inferred] |
| 7 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
