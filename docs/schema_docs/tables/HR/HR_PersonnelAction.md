# HR.HR_PersonnelAction

Primary personnel action table for employee events such as appointments, reassignments, awards, and separations.

## Snapshot

- Schema: HR
- Table: HR_PersonnelAction
- Priority: primary schema
- Approximate rows: 1069718
- Primary key: PersonnelActionIdentifier
- Column count: 143

## Usage Notes

- Primary candidate table for employee action questions such as appointments, reassignments, separations, or other personnel events.
- Use this table when HR.HR_Employee is not sufficient because the user is asking about the action itself rather than the employee's current state.
- High-value fields are usually Noa, NoaDescription, PersonnelActionSubmissionDate, PersonnelActionEffectiveDate, and the component and pay-period fields attached to the action.
- This table can often answer both what happened and when it happened, while HR.HR_Employee mainly answers what is true now.

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PersonnelActionIdentifier | bigint | NO | PK |  | Primary key for the personnel action record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Employee key used to connect the personnel action back to the employee. [inferred] |
| 3 | PersonnelNumber | nvarchar(8) | YES |  |  | Number used to identify or track this record. [inferred] |
| 4 | LastName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | FirstName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | MiddleName | nvarchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | Noa | nvarchar(255) | YES |  |  | Nature of Action code associated with the personnel event. [inferred] |
| 8 | NoaDescription | nvarchar(255) | YES |  |  | Human-readable description of the Nature of Action code. [inferred] |
| 9 | PersonnelActionSubmissionDate | datetime2(0) | YES |  |  | Date the personnel action was submitted. [inferred] |
| 10 | PersonnelActionEffectiveDate | datetime2(0) | YES |  |  | Date the personnel action became effective. [inferred] |
| 11 | PersonnelActionFiscalYear | nvarchar(4) | YES |  |  | Field on HR.HR_PersonnelAction named PersonnelActionFiscalYear. [inferred] |
| 12 | LegalAuthority1 | nvarchar(255) | YES |  |  | Field on HR.HR_PersonnelAction named LegalAuthority1. [inferred] |
| 13 | LegalAuthorityDescription1 | nvarchar(255) | YES |  |  | Field on HR.HR_PersonnelAction named LegalAuthorityDescription1. [inferred] |
| 14 | LegalAuthority2 | nvarchar(255) | YES |  |  | Field on HR.HR_PersonnelAction named LegalAuthority2. [inferred] |
| 15 | LegalAuthorityDescription2 | nvarchar(255) | YES |  |  | Field on HR.HR_PersonnelAction named LegalAuthorityDescription2. [inferred] |
| 16 | AwardCategory | nvarchar(255) | YES |  |  | Field on HR.HR_PersonnelAction named AwardCategory. [inferred] |
| 17 | AwardAmount | numeric(10,2) | YES |  |  | Field on HR.HR_PersonnelAction named AwardAmount. [inferred] |
| 18 | AwardTimeOffHourQuantity | numeric(6,2) | YES |  |  | Field on HR.HR_PersonnelAction named AwardTimeOffHourQuantity. [inferred] |
| 19 | GainAgency | nvarchar(255) | YES |  |  | Field on HR.HR_PersonnelAction named GainAgency. [inferred] |
| 20 | GainAgencyDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 21 | LossAgency | nvarchar(255) | YES |  |  | Field on HR.HR_PersonnelAction named LossAgency. [inferred] |
| 22 | LossAgencyDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 23 | OldSocialSecurityNumber | nvarchar(9) | YES |  |  | Number used to identify or track this record. [inferred] |
| 24 | NewSocialSecurityNumber | nvarchar(9) | YES |  |  | Number used to identify or track this record. [inferred] |
| 25 | AcademicDiscipline | nvarchar(255) | YES |  |  | Field on HR.HR_PersonnelAction named AcademicDiscipline. [inferred] |
| 26 | AcademicDisciplineDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 27 | InstructionalProgram | nvarchar(255) | YES |  |  | Field on HR.HR_PersonnelAction named InstructionalProgram. [inferred] |
| 28 | InstructionalProgramDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 29 | TemporaryPromotionEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 30 | Prefix | nvarchar(6) | YES |  |  | Field on HR.HR_PersonnelAction named Prefix. [inferred] |
| 31 | Suffix | nvarchar(16) | YES |  |  | Field on HR.HR_PersonnelAction named Suffix. [inferred] |
| 32 | SocialSecurityNumber | nvarchar(9) | YES |  |  | Number used to identify or track this record. [inferred] |
| 33 | MailStop | nvarchar(9) | YES |  |  | Field on HR.HR_PersonnelAction named MailStop. [inferred] |
| 34 | State | nvarchar(2) | YES |  |  | Field on HR.HR_PersonnelAction named State. [inferred] |
| 35 | Title | nvarchar(32) | YES |  |  | Field on HR.HR_PersonnelAction named Title. [inferred] |
| 36 | ComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to Component. [inferred] |
| 37 | ComponentHistoryIdentifier | bigint | YES |  |  | Identifier that likely links this record to ComponentHistory. [inferred] |
| 38 | AdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 39 | ComponentAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 40 | OfficeAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 41 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 42 | Building | nvarchar(10) | YES |  |  | Field on HR.HR_PersonnelAction named Building. [inferred] |
| 43 | BaseHours | numeric(6,2) | YES |  |  | Field on HR.HR_PersonnelAction named BaseHours. [inferred] |
| 44 | Salary | numeric(10,2) | YES |  |  | Field on HR.HR_PersonnelAction named Salary. [inferred] |
| 45 | LocalityAdjustment | numeric(10,2) | YES |  |  | Field on HR.HR_PersonnelAction named LocalityAdjustment. [inferred] |
| 46 | ProbationPeriodStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 47 | AppointmentEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 48 | AppointmentCategory | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named AppointmentCategory. [inferred] |
| 49 | AppointmentCategoryDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 50 | AnnuitantIndicator | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named AnnuitantIndicator. [inferred] |
| 51 | AnnuitantIndicatorDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 52 | AppointmentType | nvarchar(20) | YES |  |  | Type or category used to classify the record. [inferred] |
| 53 | AppointmentTypeDescription | nvarchar(255) | YES |  |  | Type or category used to classify the record. [inferred] |
| 54 | CanCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 55 | CanDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 56 | CompetitiveLevel | nvarchar(20) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 57 | CompetitiveLevelDescription | nvarchar(255) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 58 | FegliCoverageType | nvarchar(20) | YES |  |  | Type or category used to classify the record. [inferred] |
| 59 | FegliCoverageTypeDescription | nvarchar(255) | YES |  |  | Type or category used to classify the record. [inferred] |
| 60 | FunctionSensitivity | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named FunctionSensitivity. [inferred] |
| 61 | FunctionSensitivityDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 62 | Grade | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named Grade. [inferred] |
| 63 | GradeDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 64 | GsaCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 65 | GsaDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 66 | HighestEducationLevel | nvarchar(20) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 67 | HighestEducationLevelDescription | nvarchar(255) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 68 | HighestDegreeYearNumber | nvarchar(4) | YES |  |  | Number used to identify or track this record. [inferred] |
| 69 | HandicapType | nvarchar(20) | YES |  |  | Type or category used to classify the record. [inferred] |
| 70 | HandicapTypeDescription | nvarchar(255) | YES |  |  | Type or category used to classify the record. [inferred] |
| 71 | JobSeries | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named JobSeries. [inferred] |
| 72 | JobSeriesDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 73 | PayBasis | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named PayBasis. [inferred] |
| 74 | PayBasisDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 75 | PayPlan | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named PayPlan. [inferred] |
| 76 | PayPlanDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 77 | PayPeriodIdentifier | bigint | YES |  |  | Identifier that likely links this record to PayPeriod. [inferred] |
| 78 | PayPeriodStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 79 | PayPeriodEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 80 | PayRateDeterminant | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named PayRateDeterminant. [inferred] |
| 81 | PayRateDeterminantDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 82 | ProfessionalClassification | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named ProfessionalClassification. [inferred] |
| 83 | ProfessionalClassificationDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 84 | PositionNumber | nvarchar(6) | YES |  |  | Number used to identify or track this record. [inferred] |
| 85 | PositionIndicator | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named PositionIndicator. [inferred] |
| 86 | PositionIndicatorDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 87 | PositionFill | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named PositionFill. [inferred] |
| 88 | PositionFillDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 89 | PositionOccupied | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named PositionOccupied. [inferred] |
| 90 | PositionOccupiedDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 91 | PositionSensitivity | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named PositionSensitivity. [inferred] |
| 92 | PositionSensitivityDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 93 | PositionType | nvarchar(20) | YES |  |  | Type or category used to classify the record. [inferred] |
| 94 | PositionTypeDescription | nvarchar(255) | YES |  |  | Type or category used to classify the record. [inferred] |
| 95 | RaceNationalOrigin | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named RaceNationalOrigin. [inferred] |
| 96 | RaceNationalOriginDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 97 | RetirementPlan | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named RetirementPlan. [inferred] |
| 98 | RetirementPlanDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 99 | Sex | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named Sex. [inferred] |
| 100 | SexDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 101 | Smsa | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named Smsa. [inferred] |
| 102 | SmsaDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 103 | SpecialEmploymentProgram | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named SpecialEmploymentProgram. [inferred] |
| 104 | SpecialEmploymentProgramDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 105 | StatutoryCeiling | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named StatutoryCeiling. [inferred] |
| 106 | StatutoryCeilingDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 107 | Step | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named Step. [inferred] |
| 108 | StepDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 109 | Tenure | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named Tenure. [inferred] |
| 110 | TenureDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 111 | UnionCode | nvarchar(20) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 112 | UnionCodeDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 113 | UnitedStatesCitizenship | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named UnitedStatesCitizenship. [inferred] |
| 114 | UnitedStatesCitizenshipDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 115 | VeteranPreference | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named VeteranPreference. [inferred] |
| 116 | VeteranPreferenceDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 117 | VietnamEraVeteran | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named VietnamEraVeteran. [inferred] |
| 118 | VietnamEraVeteranDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 119 | IsFlsaExempt | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 120 | WorkSchedule | nvarchar(20) | YES |  |  | Field on HR.HR_PersonnelAction named WorkSchedule. [inferred] |
| 121 | WorkScheduleDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 122 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 123 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 124 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 125 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 126 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 127 | NoaSuffix | nvarchar(1) | YES |  |  | Field on HR.HR_PersonnelAction named NoaSuffix. [inferred] |
| 128 | EffectiveSequence | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 129 | OriginalPersonnelActionIdentifier | bigint | YES |  |  | Identifier that likely links this record to OriginalPersonnelAction. [inferred] |
| 130 | OriginalNoa | nvarchar(3) | YES |  |  | Field on HR.HR_PersonnelAction named OriginalNoa. [inferred] |
| 131 | OriginalNoaSuffix | nvarchar(1) | YES |  |  | Field on HR.HR_PersonnelAction named OriginalNoaSuffix. [inferred] |
| 132 | OriginalPersonnelActionEffectiveDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 133 | OriginalLegalAuthority1 | nvarchar(255) | YES |  |  | Field on HR.HR_PersonnelAction named OriginalLegalAuthority1. [inferred] |
| 134 | OriginalLegalAuthorityDescription1 | nvarchar(255) | YES |  |  | Field on HR.HR_PersonnelAction named OriginalLegalAuthorityDescription1. [inferred] |
| 135 | OriginalLegalAuthority2 | nvarchar(255) | YES |  |  | Field on HR.HR_PersonnelAction named OriginalLegalAuthority2. [inferred] |
| 136 | OriginalLegalAuthorityDescription2 | nvarchar(255) | YES |  |  | Field on HR.HR_PersonnelAction named OriginalLegalAuthorityDescription2. [inferred] |
| 137 | OriginalEffectiveSequence | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 138 | BusKey | nvarchar(10) | YES |  |  | Field on HR.HR_PersonnelAction named BusKey. [inferred] |
| 142 | WipStatus | nvarchar(3) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 143 | EmployeeRecordNumber | int | YES |  |  | Number used to identify or track this record. [inferred] |
| 144 | EmployeeHistoryIdentifier | bigint | YES |  |  | Identifier that likely links this record to EmployeeHistory. [inferred] |
| 145 | AwardCategoryDescription | nvarchar(150) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 147 | ProcessedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
