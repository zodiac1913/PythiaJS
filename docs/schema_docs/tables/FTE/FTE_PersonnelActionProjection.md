# FTE.FTE_PersonnelActionProjection

Supporting table in the FTE schema related to fte personnel action projection.

## Snapshot

- Schema: FTE
- Table: FTE_PersonnelActionProjection
- Priority: supporting schema
- Approximate rows: 1172
- Primary key: PersonnelActionProjectionIdentifier
- Column count: 27

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PersonnelActionProjectionIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | nvarchar(9) | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | LastName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | FirstName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | ApprovedByIdentifier | numeric(38,0) | YES |  |  | Identifier that likely links this record to ApprovedBy. [inferred] |
| 6 | ParActionCodeIdentifier | numeric(38,0) | YES |  |  | Identifier that likely links this record to ParActionCode. [inferred] |
| 7 | ParReasonCodeIdentifier | numeric(38,0) | YES |  |  | Identifier that likely links this record to ParReasonCode. [inferred] |
| 8 | EffectiveDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 9 | NotToExceedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 10 | CanCode | nvarchar(8) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 11 | DenialReason | nvarchar(4000) | YES |  |  | Field on FTE.FTE_PersonnelActionProjection named DenialReason. [inferred] |
| 12 | ToPayPlanCode | nvarchar(2) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 13 | ToGradeCode | nvarchar(2) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 14 | ToAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 15 | ToDetailAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 16 | ToBaseHours | numeric(6,2) | YES |  |  | Field on FTE.FTE_PersonnelActionProjection named ToBaseHours. [inferred] |
| 17 | PersonnelNumber | nvarchar(50) | YES |  |  | Number used to identify or track this record. [inferred] |
| 20 | FromAdminCode | nvarchar(50) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 27 | ApprovalDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 31 | ProgramDescriptionIdentifier | numeric(38,0) | YES |  |  | Identifier that likely links this record to ProgramDescription. [inferred] |
| 32 | ToSpBaseHours | numeric(6,2) | YES |  |  | Field on FTE.FTE_PersonnelActionProjection named ToSpBaseHours. [inferred] |
| 33 | DeactivateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 34 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 35 | AddUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 36 | AddTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 37 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 38 | LastUpdateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
