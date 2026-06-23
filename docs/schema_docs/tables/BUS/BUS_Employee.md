# BUS.BUS_Employee

Supporting table in the BUS schema related to bus employee.

## Snapshot

- Schema: BUS
- Table: BUS_Employee
- Priority: supporting schema
- Approximate rows: 6391
- Primary key: not declared
- Column count: 192

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 2 | EmployeeHistoryIdentifier | bigint | YES |  |  | Identifier that likely links this record to EmployeeHistory. [inferred] |
| 3 | PersonnelNumber | nvarchar(8) | YES |  |  | Number used to identify or track this record. [inferred] |
| 4 | CommissionedCorpsSerialNumber | nvarchar(5) | YES |  |  | Number used to identify or track this record. [inferred] |
| 5 | UserIdentifier | bigint | YES |  |  | Identifier that likely links this record to User. [inferred] |
| 6 | LastName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | FirstName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 8 | MiddleName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 9 | Prefix | nvarchar(6) | YES |  |  | Field on BUS.BUS_Employee named Prefix. [inferred] |
| 10 | Suffix | nvarchar(16) | YES |  |  | Field on BUS.BUS_Employee named Suffix. [inferred] |
| 11 | NickName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 12 | LastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 13 | FirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 14 | LegalLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 15 | LegalFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 16 | UserLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 17 | Moniker | nvarchar(150) | YES |  |  | Field on BUS.BUS_Employee named Moniker. [inferred] |
| 18 | Echelon | nvarchar(50) | YES |  |  | Field on BUS.BUS_Employee named Echelon. [inferred] |
| 19 | BirthDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 20 | SocialSecurityNumber | nvarchar(9) | YES |  |  | Number used to identify or track this record. [inferred] |
| 21 | MailStop | nvarchar(9) | YES |  |  | Field on BUS.BUS_Employee named MailStop. [inferred] |
| 22 | Street1 | nvarchar(50) | YES |  |  | Field on BUS.BUS_Employee named Street1. [inferred] |
| 23 | Street2 | nvarchar(50) | YES |  |  | Field on BUS.BUS_Employee named Street2. [inferred] |
| 24 | City | nvarchar(50) | YES |  |  | Field on BUS.BUS_Employee named City. [inferred] |
| 25 | State | nvarchar(2) | YES |  |  | Field on BUS.BUS_Employee named State. [inferred] |
| 26 | ZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 27 | WorkLocation | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named WorkLocation. [inferred] |
| 28 | WorkPhone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 29 | WorkPhoneExtension | nvarchar(6) | YES |  |  | Phone number related to this record. [inferred] |
| 30 | Email | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 31 | IsManager | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 32 | HasManagerRole | int | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 33 | Title | nvarchar(32) | YES |  |  | Field on BUS.BUS_Employee named Title. [inferred] |
| 34 | ManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerEmployee. [inferred] |
| 35 | ManagerUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerUser. [inferred] |
| 36 | ManagerLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 37 | ManagerFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 38 | ManagerTitle | nvarchar(32) | YES |  |  | Field on BUS.BUS_Employee named ManagerTitle. [inferred] |
| 39 | ManagerPhone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 40 | ManagerEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 41 | ComponentHistoryIdentifier | bigint | YES |  |  | Identifier that likely links this record to ComponentHistory. [inferred] |
| 42 | ComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to Component. [inferred] |
| 43 | AdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 44 | ComponentAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 45 | ComponentName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 46 | ComponentEffectiveDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 47 | OfficeAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 48 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 49 | OfficeName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 50 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 51 | GroupAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 52 | GroupAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 53 | GroupName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 54 | GroupIdentifier | bigint | YES |  |  | Identifier that likely links this record to Group. [inferred] |
| 55 | DivisionAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 56 | DivisionAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 57 | DivisionName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 58 | DivisionIdentifier | bigint | YES |  |  | Identifier that likely links this record to Division. [inferred] |
| 59 | Building | nvarchar(10) | YES |  |  | Field on BUS.BUS_Employee named Building. [inferred] |
| 60 | SeparatedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 61 | BaseHours | numeric(6,2) | YES |  |  | Field on BUS.BUS_Employee named BaseHours. [inferred] |
| 62 | Salary | numeric(10,2) | YES |  |  | Field on BUS.BUS_Employee named Salary. [inferred] |
| 63 | LocalityAdjustment | numeric(10,2) | YES |  |  | Field on BUS.BUS_Employee named LocalityAdjustment. [inferred] |
| 64 | TotalSalary | numeric(11,2) | YES |  |  | Field on BUS.BUS_Employee named TotalSalary. [inferred] |
| 65 | CareerStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 66 | ServiceComputationDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 67 | RetirementEligibilityDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 68 | HhsEodDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 69 | CurrentGradeStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 70 | LastWigiDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 71 | ProbationPeriodStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 72 | AppointmentEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 73 | FullPosition | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named FullPosition. [inferred] |
| 74 | AppointmentCategory | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named AppointmentCategory. [inferred] |
| 75 | AppointmentCategoryDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 76 | DetailComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to DetailComponent. [inferred] |
| 77 | DetailOfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to DetailOffice. [inferred] |
| 78 | LogonName | nvarchar(20) | YES |  |  | Name or display label for this value. [inferred] |
| 79 | EuaCommunity | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named EuaCommunity. [inferred] |
| 80 | EuaRegion | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named EuaRegion. [inferred] |
| 81 | AnnuitantIndicator | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named AnnuitantIndicator. [inferred] |
| 82 | AnnuitantIndicatorDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 83 | AppointmentType | nvarchar(20) | YES |  |  | Type or category used to classify the record. [inferred] |
| 84 | AppointmentTypeDescription | nvarchar(150) | YES |  |  | Type or category used to classify the record. [inferred] |
| 85 | CanCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 86 | CanDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 87 | CompetitiveLevel | nvarchar(20) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 88 | CompetitiveLevelDescription | nvarchar(150) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 89 | FegliCoverageType | nvarchar(20) | YES |  |  | Type or category used to classify the record. [inferred] |
| 90 | FegliCoverageTypeDescription | nvarchar(150) | YES |  |  | Type or category used to classify the record. [inferred] |
| 91 | FunctionSensitivity | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named FunctionSensitivity. [inferred] |
| 92 | FunctionSensitivityDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 93 | Grade | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named Grade. [inferred] |
| 94 | GradeDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 95 | GsaCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 96 | GsaDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 97 | HighestEducationLevel | nvarchar(20) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 98 | HighestEducationLevelDescription | nvarchar(150) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 99 | HighestDegreeYearNumber | nvarchar(4) | YES |  |  | Number used to identify or track this record. [inferred] |
| 100 | HandicapType | nvarchar(20) | YES |  |  | Type or category used to classify the record. [inferred] |
| 101 | HandicapTypeDescription | nvarchar(150) | YES |  |  | Type or category used to classify the record. [inferred] |
| 102 | JobSeries | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named JobSeries. [inferred] |
| 103 | JobSeriesDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 104 | PayBasis | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named PayBasis. [inferred] |
| 105 | PayBasisDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 106 | PayPlan | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named PayPlan. [inferred] |
| 107 | PayPlanDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 108 | PayPeriodIdentifier | bigint | YES |  |  | Identifier that likely links this record to PayPeriod. [inferred] |
| 109 | PayPeriodStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 110 | PayPeriodEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 111 | PayRateDeterminant | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named PayRateDeterminant. [inferred] |
| 112 | PayRateDeterminantDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 113 | ProfessionalClassification | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named ProfessionalClassification. [inferred] |
| 114 | ProfessionalClassificationDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 115 | PositionNumber | nvarchar(6) | YES |  |  | Number used to identify or track this record. [inferred] |
| 116 | PositionIndicator | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named PositionIndicator. [inferred] |
| 117 | PositionIndicatorDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 118 | PositionFill | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named PositionFill. [inferred] |
| 119 | PositionFillDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 120 | PositionOccupied | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named PositionOccupied. [inferred] |
| 121 | PositionOccupiedDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 122 | PositionSensitivity | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named PositionSensitivity. [inferred] |
| 123 | PositionSensitivityDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 124 | PositionType | nvarchar(20) | YES |  |  | Type or category used to classify the record. [inferred] |
| 125 | PositionTypeDescription | nvarchar(150) | YES |  |  | Type or category used to classify the record. [inferred] |
| 126 | RaceNationalOrigin | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named RaceNationalOrigin. [inferred] |
| 127 | RaceNationalOriginDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 128 | RetirementPlan | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named RetirementPlan. [inferred] |
| 129 | RetirementPlanDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 130 | Sex | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named Sex. [inferred] |
| 131 | SexDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 132 | Smsa | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named Smsa. [inferred] |
| 133 | SmsaDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 134 | SpecialEmploymentProgram | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named SpecialEmploymentProgram. [inferred] |
| 135 | SpecialEmploymentProgramDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 136 | Step | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named Step. [inferred] |
| 137 | StepDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 138 | Tenure | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named Tenure. [inferred] |
| 139 | TenureDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 140 | UnionCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 141 | UnionCodeDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 142 | IsBargainingUnit | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 143 | UnitedStatesCitizenship | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named UnitedStatesCitizenship. [inferred] |
| 144 | UnitedStatesCitizenshipDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 145 | VeteranPreference | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named VeteranPreference. [inferred] |
| 146 | VeteranPreferenceDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 147 | VietnamEraVeteran | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named VietnamEraVeteran. [inferred] |
| 148 | VietnamEraVeteranDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 149 | IsFlsaExempt | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 150 | WorkSchedule | nvarchar(20) | YES |  |  | Field on BUS.BUS_Employee named WorkSchedule. [inferred] |
| 151 | WorkScheduleDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 152 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 153 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 154 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 155 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 156 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 157 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 158 | Latitude | numeric(17,14) | YES |  |  | Field on BUS.BUS_Employee named Latitude. [inferred] |
| 159 | Longitude | numeric(17,14) | YES |  |  | Field on BUS.BUS_Employee named Longitude. [inferred] |
| 160 | BuildingIdentifier | bigint | YES |  |  | Identifier that likely links this record to Building. [inferred] |
| 161 | RadiusDistance | numeric(19,14) | YES |  |  | Field on BUS.BUS_Employee named RadiusDistance. [inferred] |
| 162 | DrivingDistance | numeric(19,14) | YES |  |  | Field on BUS.BUS_Employee named DrivingDistance. [inferred] |
| 163 | RouteSteps | nvarchar(max) | YES |  |  | Field on BUS.BUS_Employee named RouteSteps. [inferred] |
| 164 | EthnicityRaceCode | nvarchar(6) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 165 | IsHispanic | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 166 | IsNativeAmerican | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 167 | IsAsian | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 168 | IsBlack | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 169 | IsPacificIslander | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 170 | IsWhite | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 171 | HhsIdentifier | nvarchar(10) | YES |  |  | Identifier that likely links this record to Hhs. [inferred] |
| 172 | AdsStreet1 | nvarchar(50) | YES |  |  | Field on BUS.BUS_Employee named AdsStreet1. [inferred] |
| 173 | AdsStreet2 | nvarchar(50) | YES |  |  | Field on BUS.BUS_Employee named AdsStreet2. [inferred] |
| 174 | AdsCity | nvarchar(50) | YES |  |  | Field on BUS.BUS_Employee named AdsCity. [inferred] |
| 175 | AdsState | nvarchar(2) | YES |  |  | Field on BUS.BUS_Employee named AdsState. [inferred] |
| 176 | AdsZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 177 | AdsLatitude | numeric(17,14) | YES |  |  | Field on BUS.BUS_Employee named AdsLatitude. [inferred] |
| 178 | AdsLongitude | numeric(17,14) | YES |  |  | Field on BUS.BUS_Employee named AdsLongitude. [inferred] |
| 179 | AdsRadiusDistance | numeric(19,14) | YES |  |  | Field on BUS.BUS_Employee named AdsRadiusDistance. [inferred] |
| 180 | AdsDrivingDistance | numeric(19,14) | YES |  |  | Field on BUS.BUS_Employee named AdsDrivingDistance. [inferred] |
| 181 | AdsRouteSteps | nvarchar(max) | YES |  |  | Field on BUS.BUS_Employee named AdsRouteSteps. [inferred] |
| 182 | TourType | nvarchar(100) | YES |  |  | Type or category used to classify the record. [inferred] |
| 183 | TourTypeDescription | nvarchar(150) | YES |  |  | Type or category used to classify the record. [inferred] |
| 184 | BuildingName | nvarchar(40) | YES |  |  | Name or display label for this value. [inferred] |
| 185 | EmployeeRemoteWorkSelection | nvarchar(100) | YES |  |  | Field on BUS.BUS_Employee named EmployeeRemoteWorkSelection. [inferred] |
| 186 | LocalityArea | nvarchar(100) | YES |  |  | Field on BUS.BUS_Employee named LocalityArea. [inferred] |
| 187 | LocalityAreaDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 188 | BusKey | nvarchar(10) | YES |  |  | Field on BUS.BUS_Employee named BusKey. [inferred] |
| 191 | HourlyRate | numeric(5,2) | YES |  |  | Field on BUS.BUS_Employee named HourlyRate. [inferred] |
| 192 | OvertimeRate | numeric(5,2) | YES |  |  | Field on BUS.BUS_Employee named OvertimeRate. [inferred] |
| 193 | RemoteTeleworkAgreementType | nvarchar(20) | YES |  |  | Type or category used to classify the record. [inferred] |
| 194 | RemoteTeleworkAgreementTypeDescription | nvarchar(150) | YES |  |  | Type or category used to classify the record. [inferred] |
