# FTS.FTS_ReportAssignment

Supporting table in the FTS schema related to fts report assignment.

## Snapshot

- Schema: FTS
- Table: FTS_ReportAssignment
- Priority: supporting schema
- Approximate rows: 35
- Primary key: ReportAssignmentIdentifier
- Column count: 10

## Inbound Foreign Keys

- FK_FTS_ReportAssignmentConfiguration_FTS_ReportAssignment: FTS.FTS_ReportAssignmentConfiguration via ReportAssignmentIdentifier -> ReportAssignmentIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ReportAssignmentIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ReportIdentifier | bigint | NO |  |  | Identifier that likely links this record to Report. [inferred] |
| 3 | ReportUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ReportUser. [inferred] |
| 4 | TaskAccessLevelIdentifier | int | YES |  |  | Identifier that likely links this record to TaskAccessLevel. [inferred] |
| 5 | HomeTaskDefinitionIdentifier | bigint | NO |  |  | Identifier that likely links this record to HomeTaskDefinition. [inferred] |
| 6 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
