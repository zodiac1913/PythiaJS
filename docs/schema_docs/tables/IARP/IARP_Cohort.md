# IARP.IARP_Cohort

Supporting table in the IARP schema related to iarp cohort.

## Snapshot

- Schema: IARP
- Table: IARP_Cohort
- Priority: supporting schema
- Approximate rows: 9
- Primary key: CohortIdentifier
- Column count: 13

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CohortIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | CohortTitle | nvarchar(50) | YES |  |  | Field on IARP.IARP_Cohort named CohortTitle. [inferred] |
| 3 | CohortYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 4 | StartDate | datetime2(2) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 5 | EndDate | datetime2(2) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 6 | DeactivateTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | DeleteTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | ManagerReviewCloseDate | datetime2(2) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 13 | HostAssignmentCreateCloseDate | datetime2(2) | YES |  |  | Date associated with this attribute or event. [inferred] |
