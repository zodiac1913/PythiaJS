# PMAP2.PMAP2_SpecialActAwardRecipient

Supporting table in the PMAP2 schema related to pmap2 special act award recipient.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_SpecialActAwardRecipient
- Priority: supporting schema
- Approximate rows: 31054
- Primary key: SpecialActAwardRecipientIdentifier
- Column count: 44

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SpecialActAwardRecipientIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AppraisalYear | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 3 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 4 | PersonnelNumber | nvarchar(8) | YES |  |  | Number used to identify or track this record. [inferred] |
| 5 | EmployeeName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | EmployeeEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 7 | AwardAmount | numeric(10,4) | YES |  |  | Field on PMAP2.PMAP2_SpecialActAwardRecipient named AwardAmount. [inferred] |
| 8 | AwardJustification | nvarchar(4000) | YES |  |  | Field on PMAP2.PMAP2_SpecialActAwardRecipient named AwardJustification. [inferred] |
| 9 | TimeOffHours | numeric(10,4) | YES |  |  | Field on PMAP2.PMAP2_SpecialActAwardRecipient named TimeOffHours. [inferred] |
| 10 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 11 | OfficeAcronym | nvarchar(50) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 12 | OfficeName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 13 | OfficeAdmin | nvarchar(50) | YES |  |  | Field on PMAP2.PMAP2_SpecialActAwardRecipient named OfficeAdmin. [inferred] |
| 14 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 16 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 17 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 18 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 19 | SubmittedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 20 | ForwardedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 21 | ApprovalDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 22 | ComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to Component. [inferred] |
| 23 | DivisonAcronym | nvarchar(50) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 24 | GroupIdentifier | bigint | YES |  |  | Identifier that likely links this record to Group. [inferred] |
| 25 | GroupAcronym | nvarchar(50) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 26 | ApproverEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ApproverEmployee. [inferred] |
| 27 | ForwardingEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ForwardingEmployee. [inferred] |
| 28 | SubmittedEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to SubmittedEmployee. [inferred] |
| 29 | SpecialActXoBudgetItemIdentifier | bigint | YES |  |  | Identifier that likely links this record to SpecialActXoBudgetItem. [inferred] |
| 30 | SpecialActAwardFteCeilingIdentifier | bigint | YES |  |  | Identifier that likely links this record to SpecialActAwardFteCeiling. [inferred] |
| 31 | NominatorEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to NominatorEmployee. [inferred] |
| 32 | NominatorSignDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 33 | NominatorFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 34 | ManagerSubmitDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 35 | ManagerSubmitEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerSubmitEmployee. [inferred] |
| 36 | SecondLevelManagerApproveDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 37 | SecondLevelManagerApproveEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to SecondLevelManagerApproveEmployee. [inferred] |
| 38 | SituationJustification | varchar(1500) | YES |  |  | Field on PMAP2.PMAP2_SpecialActAwardRecipient named SituationJustification. [inferred] |
| 39 | TaskActionJustification | varchar(1500) | YES |  |  | Field on PMAP2.PMAP2_SpecialActAwardRecipient named TaskActionJustification. [inferred] |
| 40 | ResultsJustification | varchar(1500) | YES |  |  | Field on PMAP2.PMAP2_SpecialActAwardRecipient named ResultsJustification. [inferred] |
| 41 | AccomplishmentFromDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 42 | AccomplishmentToDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 43 | SentToDepartmentDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 44 | IsAcceptedByDepartment | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
