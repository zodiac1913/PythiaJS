# ERC.ERC_Form

Supporting table in the ERC schema related to erc form.

## Snapshot

- Schema: ERC
- Table: ERC_Form
- Priority: supporting schema
- Approximate rows: 5
- Primary key: FormIdentifier
- Column count: 55

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FormIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | LastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | FirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | LastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | Email | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 7 | ManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerEmployee. [inferred] |
| 8 | ManagerLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 9 | ManagerTitle | nvarchar(50) | YES |  |  | Field on ERC.ERC_Form named ManagerTitle. [inferred] |
| 10 | ManagerPhone | nvarchar(20) | YES |  |  | Phone number related to this record. [inferred] |
| 11 | ManagerEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 12 | DurationDays | bigint | YES |  |  | Numeric value associated with this record. [inferred] |
| 13 | DeploymentDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 14 | SubmittedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 15 | Grade | nvarchar(20) | YES |  |  | Field on ERC.ERC_Form named Grade. [inferred] |
| 16 | ManagerDecision | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 17 | ManagerSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 18 | HasPendingActions | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 19 | LerDecision | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 20 | LerSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 21 | SupportingIaaNumber | nvarchar(100) | YES |  |  | Number used to identify or track this record. [inferred] |
| 22 | CaresLink | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 23 | CaresLinkThree | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 24 | Languages | nvarchar(max) | YES |  |  | Field on ERC.ERC_Form named Languages. [inferred] |
| 25 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 26 | OfficeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Office. [inferred] |
| 27 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 28 | ComponentAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 29 | AdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 30 | WorkLocation | nvarchar(20) | YES |  |  | Field on ERC.ERC_Form named WorkLocation. [inferred] |
| 31 | WorkPhone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 32 | Title | nvarchar(50) | YES |  |  | Field on ERC.ERC_Form named Title. [inferred] |
| 33 | Street1 | nvarchar(40) | YES |  |  | Field on ERC.ERC_Form named Street1. [inferred] |
| 34 | Street2 | nvarchar(40) | YES |  |  | Field on ERC.ERC_Form named Street2. [inferred] |
| 35 | City | nvarchar(30) | YES |  |  | Field on ERC.ERC_Form named City. [inferred] |
| 36 | State | nvarchar(2) | YES |  |  | Field on ERC.ERC_Form named State. [inferred] |
| 37 | ZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 38 | IsBargainingUnit | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 39 | MissionIdentifier | bigint | NO |  |  | Identifier that likely links this record to Mission. [inferred] |
| 40 | IsCor | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 41 | HasGpc | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 42 | HasConcur | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 43 | AlternatePhoneNumber | nvarchar(10) | YES |  |  | Number used to identify or track this record. [inferred] |
| 44 | AdminApprovalUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to AdminApprovalUser. [inferred] |
| 45 | AdminApprovalDateFinal | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 46 | ManagerReasonForDenial | nvarchar(max) | YES |  |  | Field on ERC.ERC_Form named ManagerReasonForDenial. [inferred] |
| 47 | ManagerAlternateDeploymentDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 48 | ManagerAlternateDurationDays | bigint | YES |  |  | Numeric value associated with this record. [inferred] |
| 49 | OfmApprovalEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to OfmApprovalEmployee. [inferred] |
| 50 | OfmApprovalDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 51 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 52 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 53 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 54 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 55 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
