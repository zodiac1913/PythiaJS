# FTS.FTS_Agreement

Supporting table in the FTS schema related to fts agreement.

## Snapshot

- Schema: FTS
- Table: FTS_Agreement
- Priority: supporting schema
- Approximate rows: 21315
- Primary key: AgreementIdentifier
- Column count: 62

## Inbound Foreign Keys

- FK_FTS_Agreement_FTS_AgreementHistory: FTS.FTS_AgreementHistory via AgreementIdentifier -> AgreementIdentifier
- FK_FTS_Agreement_FTS_AgreementStatus: FTS.FTS_AgreementStatus via AgreementIdentifier -> AgreementIdentifier
- FK_FTS_Agreement_FTS_CostAnalysis: FTS.FTS_CostAnalysis via AgreementIdentifier -> AgreementIdentifier
- FK_FTS_Agreement_FTS_RemoteWorkDesignation: FTS.FTS_RemoteWorkDesignation via AgreementIdentifier -> AgreementIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AgreementIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 3 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 4 | EmployeePositionTitle | nvarchar(32) | YES |  |  | Field on FTS.FTS_Agreement named EmployeePositionTitle. [inferred] |
| 5 | ManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerEmployee. [inferred] |
| 6 | Status | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 7 | SubmittedDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 8 | OfficeStreet1 | nvarchar(40) | YES |  |  | Field on FTS.FTS_Agreement named OfficeStreet1. [inferred] |
| 9 | OfficeStreet2 | nvarchar(40) | YES |  |  | Field on FTS.FTS_Agreement named OfficeStreet2. [inferred] |
| 10 | OfficeCity | nvarchar(30) | YES |  |  | Field on FTS.FTS_Agreement named OfficeCity. [inferred] |
| 11 | OfficeZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 12 | OfficePhone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 13 | BuildingIdentifier | bigint | YES |  |  | Identifier that likely links this record to Building. [inferred] |
| 14 | BuildingName | nvarchar(40) | YES |  |  | Name or display label for this value. [inferred] |
| 15 | AdsStreet1 | nvarchar(40) | YES |  |  | Field on FTS.FTS_Agreement named AdsStreet1. [inferred] |
| 16 | AdsStreet2 | nvarchar(40) | YES |  |  | Field on FTS.FTS_Agreement named AdsStreet2. [inferred] |
| 17 | AdsCity | nvarchar(30) | YES |  |  | Field on FTS.FTS_Agreement named AdsCity. [inferred] |
| 18 | AdsState | nvarchar(2) | YES |  |  | Field on FTS.FTS_Agreement named AdsState. [inferred] |
| 19 | AdsZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 20 | AdsPhone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 21 | AddressChanged | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 22 | IsReasonableAccommodation | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 23 | LocationFiftyMilesRule | bit | YES |  | ((0)) | Flag value stored as true or false. [inferred] |
| 24 | FiveDayTeleworkRule | bit | YES |  | ((0)) | Flag value stored as true or false. [inferred] |
| 25 | CostAnalysisFormRequired | bit | YES |  | ((0)) | Flag value stored as true or false. [inferred] |
| 26 | BoxTopApprovalRequired | bit | YES |  | ((0)) | Flag value stored as true or false. [inferred] |
| 27 | FirstApprovingOfficialIdentifier | bigint | YES |  |  | Identifier that likely links this record to FirstApprovingOfficial. [inferred] |
| 28 | FirstApprovingOfficialComments | nvarchar(4000) | YES |  |  | Field on FTS.FTS_Agreement named FirstApprovingOfficialComments. [inferred] |
| 29 | FirstApprovalDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 30 | SecondApprovingOfficialIdentifier | bigint | YES |  |  | Identifier that likely links this record to SecondApprovingOfficial. [inferred] |
| 31 | SecondApprovingOfficialComments | nvarchar(500) | YES |  |  | Field on FTS.FTS_Agreement named SecondApprovingOfficialComments. [inferred] |
| 32 | SecondApprovalDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 33 | FinalApprovingOfficialIdentifier | bigint | YES |  |  | Identifier that likely links this record to FinalApprovingOfficial. [inferred] |
| 34 | FinalApprovingOfficialComments | nvarchar(500) | YES |  |  | Field on FTS.FTS_Agreement named FinalApprovingOfficialComments. [inferred] |
| 35 | CancellationEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to CancellationEmployee. [inferred] |
| 36 | CancelledComments | nvarchar(500) | YES |  |  | Field on FTS.FTS_Agreement named CancelledComments. [inferred] |
| 37 | CancelledDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 38 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 39 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 40 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 41 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 42 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 43 | EmployeeName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 44 | ManagerName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 45 | FirstApprovingOfficialName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 46 | FirstApprovingOfficialStatus | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 47 | SecondApprovingOfficialName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 48 | SecondApprovingOfficialStatus | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 49 | FinalApprovingOfficalName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 50 | FinalApprovingOfficalStatus | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 51 | OfficeState | nvarchar(2) | YES |  |  | Field on FTS.FTS_Agreement named OfficeState. [inferred] |
| 52 | PayPeriodIdentifier | bigint | YES |  |  | Identifier that likely links this record to PayPeriod. [inferred] |
| 53 | IsPerforming | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 54 | HasTraining | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 55 | HasAwol | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 56 | IsDisciplinedPorn | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 57 | IsDisciplined | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 58 | IsAddressChangeRuleAccepted | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 59 | IsRemoteRegulationAccepted | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 60 | IsAdsLocalityAccpeted | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 61 | IsNotificationObligationAccepted | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 62 | AgreementYear | varchar(4) | YES |  |  | Field on FTS.FTS_Agreement named AgreementYear. [inferred] |
