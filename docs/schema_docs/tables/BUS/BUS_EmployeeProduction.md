# BUS.BUS_EmployeeProduction

Supporting table in the BUS schema related to bus employee production.

## Snapshot

- Schema: BUS
- Table: BUS_EmployeeProduction
- Priority: supporting schema
- Approximate rows: 14218
- Primary key: not declared
- Column count: 151

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 2 | PersonnelNumber | nvarchar(8) | YES |  |  | Number used to identify or track this record. [inferred] |
| 3 | CommissionedCorpsSerialNumber | nvarchar(5) | YES |  |  | Number used to identify or track this record. [inferred] |
| 4 | UserIdentifier | bigint | YES |  |  | Identifier that likely links this record to User. [inferred] |
| 5 | LastName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | FirstName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | MiddleName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 8 | Prefix | nvarchar(6) | YES |  |  | Field on BUS.BUS_EmployeeProduction named Prefix. [inferred] |
| 9 | Suffix | nvarchar(16) | YES |  |  | Field on BUS.BUS_EmployeeProduction named Suffix. [inferred] |
| 10 | NickName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 11 | LastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 12 | FirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 13 | LegalLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 14 | LegalFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 15 | UserLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 16 | Moniker | nvarchar(150) | YES |  |  | Field on BUS.BUS_EmployeeProduction named Moniker. [inferred] |
| 17 | Echelon | nvarchar(50) | YES |  |  | Field on BUS.BUS_EmployeeProduction named Echelon. [inferred] |
| 18 | BirthDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 19 | SocialSecurityNumber | nvarchar(9) | YES |  |  | Number used to identify or track this record. [inferred] |
| 20 | MailStop | nvarchar(9) | YES |  |  | Field on BUS.BUS_EmployeeProduction named MailStop. [inferred] |
| 21 | Street1 | nvarchar(40) | YES |  |  | Field on BUS.BUS_EmployeeProduction named Street1. [inferred] |
| 22 | Street2 | nvarchar(40) | YES |  |  | Field on BUS.BUS_EmployeeProduction named Street2. [inferred] |
| 23 | City | nvarchar(30) | YES |  |  | Field on BUS.BUS_EmployeeProduction named City. [inferred] |
| 24 | State | nvarchar(2) | YES |  |  | Field on BUS.BUS_EmployeeProduction named State. [inferred] |
| 25 | ZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 26 | WorkLocation | nvarchar(20) | YES |  |  | Field on BUS.BUS_EmployeeProduction named WorkLocation. [inferred] |
| 27 | WorkPhone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 28 | WorkPhoneExtension | nvarchar(6) | YES |  |  | Phone number related to this record. [inferred] |
| 29 | Email | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 30 | IsManager | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 31 | HasManagerRole | int | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 32 | Title | nvarchar(19) | YES |  |  | Field on BUS.BUS_EmployeeProduction named Title. [inferred] |
| 33 | ManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerEmployee. [inferred] |
| 34 | ManagerUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerUser. [inferred] |
| 35 | ManagerLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 36 | ManagerFirstLastName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 37 | ManagerTitle | nvarchar(19) | YES |  |  | Field on BUS.BUS_EmployeeProduction named ManagerTitle. [inferred] |
| 38 | ManagerPhone | nvarchar(10) | YES |  |  | Phone number related to this record. [inferred] |
| 39 | ManagerEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 40 | ComponentHistoryIdentifier | bigint | YES |  |  | Identifier that likely links this record to ComponentHistory. [inferred] |
| 41 | ComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to Component. [inferred] |
| 42 | AdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 43 | ComponentAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 44 | Component | nvarchar(60) | YES |  |  | Field on BUS.BUS_EmployeeProduction named Component. [inferred] |
| 45 | ComponentEffectiveDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 46 | OfficeAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 47 | ComputedOfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 48 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 49 | Office | nvarchar(60) | YES |  |  | Field on BUS.BUS_EmployeeProduction named Office. [inferred] |
| 50 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 51 | GroupAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 52 | GroupAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 53 | GroupName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 54 | Building | nvarchar(10) | YES |  |  | Field on BUS.BUS_EmployeeProduction named Building. [inferred] |
| 55 | SeparatedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 56 | BaseHours | numeric(6,2) | YES |  |  | Field on BUS.BUS_EmployeeProduction named BaseHours. [inferred] |
| 57 | Salary | numeric(10,2) | YES |  |  | Field on BUS.BUS_EmployeeProduction named Salary. [inferred] |
| 58 | LocalityAdjustment | numeric(10,2) | YES |  |  | Field on BUS.BUS_EmployeeProduction named LocalityAdjustment. [inferred] |
| 59 | TotalSalary | numeric(11,2) | YES |  |  | Field on BUS.BUS_EmployeeProduction named TotalSalary. [inferred] |
| 60 | CareerStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 61 | ServiceComputationDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 62 | RetirementEligibilityDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 63 | HhsEodDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 64 | CurrentGradeStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 65 | LastWigiDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 66 | ProbationPeriodStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 67 | AppointmentEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 68 | FullPosition | nvarchar(20) | YES |  |  | Field on BUS.BUS_EmployeeProduction named FullPosition. [inferred] |
| 69 | IsExternalEmployee | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 70 | AppointmentCategoryCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 71 | DetailComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to DetailComponent. [inferred] |
| 72 | DetailOfficeComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to DetailOfficeComponent. [inferred] |
| 73 | UserLogonName | nvarchar(20) | YES |  |  | Name or display label for this value. [inferred] |
| 74 | EuaIdentifierType | nvarchar(20) | YES |  |  | Type or category used to classify the record. [inferred] |
| 75 | EuaRegionCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 76 | AnnuitantIndicatorCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 77 | AnnuitantIndicatorDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 78 | AppointmentTypeCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 79 | AppointmentTypeDescription | nvarchar(150) | YES |  |  | Type or category used to classify the record. [inferred] |
| 80 | CommonAccountingNumber | nvarchar(20) | YES |  |  | Number used to identify or track this record. [inferred] |
| 81 | CommonAccountingNumberDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 82 | CompetitiveLevelCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 83 | CompetitiveLevelDescription | nvarchar(150) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 84 | FegliCoverageTypeCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 85 | FegliCoverageTypeDescription | nvarchar(150) | YES |  |  | Type or category used to classify the record. [inferred] |
| 86 | FunctionSensitivityCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 87 | FunctionSensitivityDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 88 | GradeCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 89 | GradeDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 90 | GsaCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 91 | GsaDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 92 | HighestEducationLevelCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 93 | HighestEducationLevelDescription | nvarchar(150) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 94 | HighestDegreeYearNumber | nvarchar(4) | YES |  |  | Number used to identify or track this record. [inferred] |
| 95 | HandicapTypeCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 96 | HandicapTypeDescription | nvarchar(150) | YES |  |  | Type or category used to classify the record. [inferred] |
| 97 | JobSeriesCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 98 | JobSeriesDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 99 | PayBasisCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 100 | PayBasisDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 101 | PayPlanCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 102 | PayPlanDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 103 | PayPeriodIdentifier | bigint | YES |  |  | Identifier that likely links this record to PayPeriod. [inferred] |
| 104 | PayPeriodStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 105 | PayPeriodEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 106 | PayRateDeterminantCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 107 | PayRateDeterminantDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 108 | ProfessionalClassificationCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 109 | ProfessionalClassificationDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 110 | PositionNumber | nvarchar(6) | YES |  |  | Number used to identify or track this record. [inferred] |
| 111 | PositionIndicatorCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 112 | PositionIndicatorDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 113 | PositionOccupiedCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 114 | PositionOccupiedDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 115 | PositionSensitivityCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 116 | PositionSensitivityDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 117 | PositionTypeCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 118 | PositionTypeDescription | nvarchar(150) | YES |  |  | Type or category used to classify the record. [inferred] |
| 119 | RaceNationalOriginCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 120 | RaceNationalOriginDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 121 | RetirementPlanCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 122 | RetirementPlanDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 123 | EmployeeSexCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 124 | SexDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 125 | SmsaCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 126 | SmsaDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 127 | SpecialEmploymentProgramCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 128 | SpecialEmploymentProgramDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 129 | StepCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 130 | StepDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 131 | TenureCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 132 | TenureDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 133 | UnionCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 134 | UnionDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 135 | IsBargainingUnit | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 136 | UnitedStatesCitizenshipCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 137 | UnitedStatesCitizenshipDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 138 | VeteranPreferenceCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 139 | VeteranPreferenceDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 140 | VietnamEraVeteranCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 141 | VietnamEraVeteranDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 142 | IsFlsaExempt | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 143 | WorkScheduleCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 144 | WorkScheduleDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 145 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 146 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 147 | AddUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 148 | AddTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 149 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 150 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 151 | BatchIdentifier | bigint | YES |  |  | Identifier that likely links this record to Batch. [inferred] |
