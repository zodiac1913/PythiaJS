# HR.HR_EmployeeNoRouteINDEXBKW4

Business-critical table in the HR schema related to hr employee no route indexbkw4.

## Snapshot

- Schema: HR
- Table: HR_EmployeeNoRouteINDEXBKW4
- Priority: primary schema
- Approximate rows: 15525
- Primary key: EmployeeIdentifier
- Column count: 179

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | EmployeeIdentifier | bigint | NO | PK |  | Primary key identifier for this record. [inferred] |
| 2 | PersonnelNumber | nvarchar(8) | YES |  |  | Number used to identify or track this record. [inferred] |
| 3 | CommissionedCorpsSerialNumber | nvarchar(5) | YES |  |  | Number used to identify or track this record. [inferred] |
| 4 | UserIdentifier | bigint | YES |  |  | Identifier that likely links this record to User. [inferred] |
| 5 | LastName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | FirstName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | MiddleName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 8 | Prefix | nvarchar(6) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named Prefix. [inferred] |
| 9 | Suffix | nvarchar(16) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named Suffix. [inferred] |
| 10 | NickName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 11 | LastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 12 | FirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 13 | LegalLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 14 | LegalFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 15 | UserLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 16 | Moniker | nvarchar(150) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named Moniker. [inferred] |
| 17 | Echelon | nvarchar(50) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named Echelon. [inferred] |
| 18 | BirthDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 19 | SocialSecurityNumber | nvarchar(9) | YES |  |  | Number used to identify or track this record. [inferred] |
| 20 | MailStop | nvarchar(9) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named MailStop. [inferred] |
| 21 | Street1 | nvarchar(50) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named Street1. [inferred] |
| 22 | Street2 | nvarchar(50) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named Street2. [inferred] |
| 23 | City | nvarchar(50) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named City. [inferred] |
| 24 | State | nvarchar(2) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named State. [inferred] |
| 25 | ZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 26 | WorkLocation | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named WorkLocation. [inferred] |
| 27 | WorkPhone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 28 | WorkPhoneExtension | nvarchar(6) | YES |  |  | Phone number related to this record. [inferred] |
| 29 | Email | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 30 | IsManager | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 31 | HasManagerRole | int | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 32 | Title | nvarchar(19) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named Title. [inferred] |
| 33 | ManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerEmployee. [inferred] |
| 34 | ManagerUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerUser. [inferred] |
| 35 | ManagerLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 36 | ManagerFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 37 | ManagerTitle | nvarchar(19) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named ManagerTitle. [inferred] |
| 38 | ManagerPhone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 39 | ManagerEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 40 | ComponentHistoryIdentifier | bigint | YES |  |  | Identifier that likely links this record to ComponentHistory. [inferred] |
| 41 | ComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to Component. [inferred] |
| 42 | AdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 43 | ComponentAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 44 | ComponentName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 45 | ComponentEffectiveDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 46 | OfficeAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 47 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 48 | OfficeName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 49 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 50 | GroupAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 51 | GroupAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 52 | GroupName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 53 | GroupIdentifier | bigint | YES |  |  | Identifier that likely links this record to Group. [inferred] |
| 54 | DivisionAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 55 | DivisionAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 56 | DivisionName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 57 | DivisionIdentifier | bigint | YES |  |  | Identifier that likely links this record to Division. [inferred] |
| 58 | Building | nvarchar(10) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named Building. [inferred] |
| 59 | SeparatedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 60 | BaseHours | numeric(6,2) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named BaseHours. [inferred] |
| 61 | Salary | numeric(10,2) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named Salary. [inferred] |
| 62 | LocalityAdjustment | numeric(10,2) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named LocalityAdjustment. [inferred] |
| 63 | TotalSalary | numeric(11,2) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named TotalSalary. [inferred] |
| 64 | CareerStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 65 | ServiceComputationDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 66 | RetirementEligibilityDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 67 | HhsEodDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 68 | CurrentGradeStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 69 | LastWigiDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 70 | ProbationPeriodStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 71 | AppointmentEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 72 | FullPosition | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named FullPosition. [inferred] |
| 73 | AppointmentCategory | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named AppointmentCategory. [inferred] |
| 74 | AppointmentCategoryDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 75 | DetailComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to DetailComponent. [inferred] |
| 76 | DetailOfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to DetailOffice. [inferred] |
| 77 | LogonName | nvarchar(20) | YES |  |  | Name or display label for this value. [inferred] |
| 78 | EuaCommunity | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named EuaCommunity. [inferred] |
| 79 | EuaRegion | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named EuaRegion. [inferred] |
| 80 | AnnuitantIndicator | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named AnnuitantIndicator. [inferred] |
| 81 | AnnuitantIndicatorDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 82 | AppointmentType | nvarchar(20) | YES |  |  | Type or category used to classify the record. [inferred] |
| 83 | AppointmentTypeDescription | nvarchar(150) | YES |  |  | Type or category used to classify the record. [inferred] |
| 84 | CanCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 85 | CanDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 86 | CompetitiveLevel | nvarchar(20) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 87 | CompetitiveLevelDescription | nvarchar(150) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 88 | FegliCoverageType | nvarchar(20) | YES |  |  | Type or category used to classify the record. [inferred] |
| 89 | FegliCoverageTypeDescription | nvarchar(150) | YES |  |  | Type or category used to classify the record. [inferred] |
| 90 | FunctionSensitivity | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named FunctionSensitivity. [inferred] |
| 91 | FunctionSensitivityDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 92 | Grade | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named Grade. [inferred] |
| 93 | GradeDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 94 | GsaCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 95 | GsaDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 96 | HighestEducationLevel | nvarchar(20) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 97 | HighestEducationLevelDescription | nvarchar(150) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 98 | HighestDegreeYearNumber | nvarchar(4) | YES |  |  | Number used to identify or track this record. [inferred] |
| 99 | HandicapType | nvarchar(20) | YES |  |  | Type or category used to classify the record. [inferred] |
| 100 | HandicapTypeDescription | nvarchar(150) | YES |  |  | Type or category used to classify the record. [inferred] |
| 101 | JobSeries | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named JobSeries. [inferred] |
| 102 | JobSeriesDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 103 | PayBasis | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named PayBasis. [inferred] |
| 104 | PayBasisDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 105 | PayPlan | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named PayPlan. [inferred] |
| 106 | PayPlanDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 107 | PayPeriodIdentifier | bigint | YES |  |  | Identifier that likely links this record to PayPeriod. [inferred] |
| 108 | PayPeriodStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 109 | PayPeriodEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 110 | PayRateDeterminant | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named PayRateDeterminant. [inferred] |
| 111 | PayRateDeterminantDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 112 | ProfessionalClassification | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named ProfessionalClassification. [inferred] |
| 113 | ProfessionalClassificationDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 114 | PositionNumber | nvarchar(6) | YES |  |  | Number used to identify or track this record. [inferred] |
| 115 | PositionIndicator | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named PositionIndicator. [inferred] |
| 116 | PositionIndicatorDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 117 | PositionFill | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named PositionFill. [inferred] |
| 118 | PositionFillDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 119 | PositionOccupied | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named PositionOccupied. [inferred] |
| 120 | PositionOccupiedDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 121 | PositionSensitivity | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named PositionSensitivity. [inferred] |
| 122 | PositionSensitivityDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 123 | PositionType | nvarchar(20) | YES |  |  | Type or category used to classify the record. [inferred] |
| 124 | PositionTypeDescription | nvarchar(150) | YES |  |  | Type or category used to classify the record. [inferred] |
| 125 | RaceNationalOrigin | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named RaceNationalOrigin. [inferred] |
| 126 | RaceNationalOriginDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 127 | RetirementPlan | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named RetirementPlan. [inferred] |
| 128 | RetirementPlanDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 129 | Sex | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named Sex. [inferred] |
| 130 | SexDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 131 | Smsa | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named Smsa. [inferred] |
| 132 | SmsaDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 133 | SpecialEmploymentProgram | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named SpecialEmploymentProgram. [inferred] |
| 134 | SpecialEmploymentProgramDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 135 | Step | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named Step. [inferred] |
| 136 | StepDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 137 | Tenure | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named Tenure. [inferred] |
| 138 | TenureDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 139 | UnionCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 140 | UnionCodeDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 141 | IsBargainingUnit | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 142 | UnitedStatesCitizenship | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named UnitedStatesCitizenship. [inferred] |
| 143 | UnitedStatesCitizenshipDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 144 | VeteranPreference | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named VeteranPreference. [inferred] |
| 145 | VeteranPreferenceDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 146 | VietnamEraVeteran | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named VietnamEraVeteran. [inferred] |
| 147 | VietnamEraVeteranDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 148 | IsFlsaExempt | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 149 | WorkSchedule | nvarchar(20) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named WorkSchedule. [inferred] |
| 150 | WorkScheduleDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 151 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 152 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 153 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 154 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 155 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 156 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 157 | Latitude | numeric(17,14) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named Latitude. [inferred] |
| 158 | Longitude | numeric(17,14) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named Longitude. [inferred] |
| 159 | BuildingIdentifier | bigint | YES |  |  | Identifier that likely links this record to Building. [inferred] |
| 160 | RadiusDistance | numeric(19,14) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named RadiusDistance. [inferred] |
| 161 | DrivingDistance | numeric(19,14) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named DrivingDistance. [inferred] |
| 163 | EthnicityRaceCode | nvarchar(6) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 164 | IsHispanic | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 165 | IsNativeAmerican | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 166 | IsAsian | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 167 | IsBlack | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 168 | IsPacificIslander | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 169 | IsWhite | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 170 | HhsIdentifier | nvarchar(10) | YES |  |  | Identifier that likely links this record to Hhs. [inferred] |
| 171 | AdsStreet1 | nvarchar(50) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named AdsStreet1. [inferred] |
| 172 | AdsStreet2 | nvarchar(50) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named AdsStreet2. [inferred] |
| 173 | AdsCity | nvarchar(50) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named AdsCity. [inferred] |
| 174 | AdsState | nvarchar(2) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named AdsState. [inferred] |
| 175 | AdsZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 176 | AdsLatitude | numeric(17,14) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named AdsLatitude. [inferred] |
| 177 | AdsLongitude | numeric(17,14) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named AdsLongitude. [inferred] |
| 178 | AdsRadiusDistance | numeric(19,14) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named AdsRadiusDistance. [inferred] |
| 179 | AdsDrivingDistance | numeric(19,14) | YES |  |  | Field on HR.HR_EmployeeNoRouteINDEXBKW4 named AdsDrivingDistance. [inferred] |
| 181 | TourType | nvarchar(100) | YES |  |  | Type or category used to classify the record. [inferred] |
