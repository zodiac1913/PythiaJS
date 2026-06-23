# IDP.IDP_Form

Supporting table in the IDP schema related to idp form.

## Snapshot

- Schema: IDP
- Table: IDP_Form
- Priority: supporting schema
- Approximate rows: 17
- Primary key: FormIdentifier
- Column count: 25

## Inbound Foreign Keys

- FK__IDP_Goal__FormId__1DA47C07: IDP.IDP_Goal via FormIdentifier -> FormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FormIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | PlanTitle | nvarchar(255) | NO |  |  | Field on IDP.IDP_Form named PlanTitle. [inferred] |
| 3 | MentorFullName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | EmployeeFullName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 5 | EmployeePostion | nvarchar(255) | NO |  |  | Field on IDP.IDP_Form named EmployeePostion. [inferred] |
| 6 | EmployeeComponent | nvarchar(255) | NO |  |  | Field on IDP.IDP_Form named EmployeeComponent. [inferred] |
| 7 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 8 | OfficeAcronym | nvarchar(10) | NO |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 9 | OfficeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Office. [inferred] |
| 10 | GroupAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 11 | GroupIdentifier | bigint | YES |  |  | Identifier that likely links this record to Group. [inferred] |
| 12 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 13 | MentorEmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to MentorEmployee. [inferred] |
| 14 | EffectiveStartDate | datetime2(0) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 15 | EffectiveEndDate | datetime2(0) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 16 | PlanStatus | nvarchar(max) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 17 | IsPublic | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 18 | PlanAmountCompleted | nvarchar(max) | YES |  |  | Field on IDP.IDP_Form named PlanAmountCompleted. [inferred] |
| 19 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 20 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 21 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 22 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 23 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 24 | FormType | varchar(100) | YES |  |  | Type or category used to classify the record. [inferred] |
| 25 | MentorSignatureDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
