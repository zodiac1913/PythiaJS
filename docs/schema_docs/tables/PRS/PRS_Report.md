# PRS.PRS_Report

Supporting table in the PRS schema related to prs report.

## Snapshot

- Schema: PRS
- Table: PRS_Report
- Priority: supporting schema
- Approximate rows: 1
- Primary key: ReportIdentifier
- Column count: 11

## Inbound Foreign Keys

- FK_PRS_ReportColumn_PRS_Report: PRS.PRS_ReportColumn via ReportIdentifier -> ReportIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ReportIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ReportPageName | nvarchar(200) | YES |  |  | Name or display label for this value. [inferred] |
| 3 | ReportTypeName | nvarchar(200) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | ReportTitle | nvarchar(200) | YES |  |  | Field on PRS.PRS_Report named ReportTitle. [inferred] |
| 5 | ReportDescription | nvarchar(600) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 6 | HomeTaskDefinitionIdentifier | bigint | YES |  |  | Identifier that likely links this record to HomeTaskDefinition. [inferred] |
| 7 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
