# FTE.FTE_CeilingRequestApprovalTracking

Supporting table in the FTE schema related to fte ceiling request approval tracking.

## Snapshot

- Schema: FTE
- Table: FTE_CeilingRequestApprovalTracking
- Priority: supporting schema
- Approximate rows: 6
- Primary key: CeilingRequestApprovalTrackingIdentifier
- Column count: 17

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CeilingRequestApprovalTrackingIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | CeilingRequestApprovalTrackingParentIdentifier | bigint | YES |  |  | Identifier that likely links this record to CeilingRequestApprovalTrackingParent. [inferred] |
| 3 | EmployeeUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to EmployeeUser. [inferred] |
| 4 | Status | nvarchar(100) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 6 | SignedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 7 | Comments | nvarchar(4000) | YES |  |  | Field on FTE.FTE_CeilingRequestApprovalTracking named Comments. [inferred] |
| 8 | AdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 9 | FteCount | numeric(6,2) | YES |  |  | Field on FTE.FTE_CeilingRequestApprovalTracking named FteCount. [inferred] |
| 10 | Fte1415Count | numeric(6,2) | YES |  |  | Field on FTE.FTE_CeilingRequestApprovalTracking named Fte1415Count. [inferred] |
| 11 | SpecialProgramDescriptionIdentifier | bigint | YES |  |  | Identifier that likely links this record to SpecialProgramDescription. [inferred] |
| 18 | IsApproved | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 19 | DeactivateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 20 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 21 | AddUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 22 | AddTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 23 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 24 | LastUpdateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
