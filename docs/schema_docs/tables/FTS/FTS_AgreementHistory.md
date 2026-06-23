# FTS.FTS_AgreementHistory

Supporting table in the FTS schema related to fts agreement history.

## Snapshot

- Schema: FTS
- Table: FTS_AgreementHistory
- Priority: supporting schema
- Approximate rows: 34348
- Primary key: AgreementHistoryIdentifier
- Column count: 63

## Outbound Foreign Keys

- FK_FTS_Agreement_FTS_AgreementHistory: FTS.FTS_Agreement via AgreementIdentifier -> AgreementIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AgreementHistoryIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AgreementIdentifier | bigint | NO |  |  | Identifier that likely links this record to Agreement. [inferred] |
| 3 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 4 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 5 | EmployeePositionTitle | nvarchar(32) | YES |  |  | Field on FTS.FTS_AgreementHistory named EmployeePositionTitle. [inferred] |
| 6 | ManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerEmployee. [inferred] |
| 7 | Status | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 8 | SubmittedDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 9 | OfficeStreet1 | nvarchar(40) | YES |  |  | Field on FTS.FTS_AgreementHistory named OfficeStreet1. [inferred] |
| 10 | OfficeStreet2 | nvarchar(40) | YES |  |  | Field on FTS.FTS_AgreementHistory named OfficeStreet2. [inferred] |
| 11 | OfficeCity | nvarchar(30) | YES |  |  | Field on FTS.FTS_AgreementHistory named OfficeCity. [inferred] |
| 12 | OfficeZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 13 | OfficePhone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 14 | BuildingIdentifier | bigint | YES |  |  | Identifier that likely links this record to Building. [inferred] |
| 15 | BuildingName | nvarchar(40) | YES |  |  | Name or display label for this value. [inferred] |
| 16 | AdsStreet1 | nvarchar(40) | YES |  |  | Field on FTS.FTS_AgreementHistory named AdsStreet1. [inferred] |
| 17 | AdsStreet2 | nvarchar(40) | YES |  |  | Field on FTS.FTS_AgreementHistory named AdsStreet2. [inferred] |
| 18 | AdsCity | nvarchar(30) | YES |  |  | Field on FTS.FTS_AgreementHistory named AdsCity. [inferred] |
| 19 | AdsState | nvarchar(2) | YES |  |  | Field on FTS.FTS_AgreementHistory named AdsState. [inferred] |
| 20 | AdsZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 21 | AdsPhone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 22 | AddressChanged | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 23 | IsReasonableAccommodation | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 24 | LocationFiftyMilesRule | bit | YES |  | ((0)) | Flag value stored as true or false. [inferred] |
| 25 | FiveDayTeleworkRule | bit | YES |  | ((0)) | Flag value stored as true or false. [inferred] |
| 26 | CostAnalysisFormRequired | bit | YES |  | ((0)) | Flag value stored as true or false. [inferred] |
| 27 | BoxTopApprovalRequired | bit | YES |  | ((0)) | Flag value stored as true or false. [inferred] |
| 28 | FirstApprovingOfficialIdentifier | bigint | YES |  |  | Identifier that likely links this record to FirstApprovingOfficial. [inferred] |
| 29 | FirstApprovingOfficialComments | nvarchar(4000) | YES |  |  | Field on FTS.FTS_AgreementHistory named FirstApprovingOfficialComments. [inferred] |
| 30 | FirstApprovalDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 31 | SecondApprovingOfficialIdentifier | bigint | YES |  |  | Identifier that likely links this record to SecondApprovingOfficial. [inferred] |
| 32 | SecondApprovingOfficialComments | nvarchar(500) | YES |  |  | Field on FTS.FTS_AgreementHistory named SecondApprovingOfficialComments. [inferred] |
| 33 | SecondApprovalDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 34 | FinalApprovingOfficialIdentifier | bigint | YES |  |  | Identifier that likely links this record to FinalApprovingOfficial. [inferred] |
| 35 | FinalApprovingOfficialComments | nvarchar(500) | YES |  |  | Field on FTS.FTS_AgreementHistory named FinalApprovingOfficialComments. [inferred] |
| 36 | CancellationEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to CancellationEmployee. [inferred] |
| 37 | CancelledComments | nvarchar(500) | YES |  |  | Field on FTS.FTS_AgreementHistory named CancelledComments. [inferred] |
| 38 | CancelledDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 39 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 40 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 41 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 42 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 43 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 44 | EmployeeName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 45 | ManagerName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 46 | FirstApprovingOfficialName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 47 | FirstApprovingOfficialStatus | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 48 | SecondApprovingOfficialName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 49 | SecondApprovingOfficialStatus | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 50 | FinalApprovingOfficalName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 51 | FinalApprovingOfficalStatus | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 52 | OfficeState | nvarchar(2) | YES |  |  | Field on FTS.FTS_AgreementHistory named OfficeState. [inferred] |
| 53 | PayPeriodIdentifier | bigint | YES |  |  | Identifier that likely links this record to PayPeriod. [inferred] |
| 54 | IsPerforming | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 55 | HasTraining | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 56 | HasAwol | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 57 | IsDisciplinedPorn | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 58 | IsDisciplined | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 59 | IsAddressChangeRuleAccepted | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 60 | IsRemoteRegulationAccepted | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 61 | IsAdsLocalityAccpeted | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 62 | IsNotificationObligationAccepted | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 63 | AgreementYear | varchar(4) | YES |  |  | Field on FTS.FTS_AgreementHistory named AgreementYear. [inferred] |
