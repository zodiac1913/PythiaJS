# FTE.FTE_FurloughOverride

Supporting table in the FTE schema related to fte furlough override.

## Snapshot

- Schema: FTE
- Table: FTE_FurloughOverride
- Priority: supporting schema
- Approximate rows: 0
- Primary key: FurloughOverrideIdentifier
- Column count: 14

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FurloughOverrideIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | DecisionDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 3 | IsApproved | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 4 | FurloughStatus | nvarchar(100) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 5 | FurloughComments | nvarchar(4000) | YES |  |  | Field on FTE.FTE_FurloughOverride named FurloughComments. [inferred] |
| 6 | FurloughSubmitterEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to FurloughSubmitterEmployee. [inferred] |
| 7 | FurloughApproverEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to FurloughApproverEmployee. [inferred] |
| 8 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 9 | DeactivateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 12 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 14 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
