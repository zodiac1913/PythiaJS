# BUS.BUS_BIISEMPLOYEE

Supporting table in the BUS schema related to bus biisemployee.

## Snapshot

- Schema: BUS
- Table: BUS_BIISEMPLOYEE
- Priority: supporting schema
- Approximate rows: 6714
- Primary key: not declared
- Column count: 88

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SSN | varchar(9) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named SSN. [inferred] |
| 2 | EMP_LAST_NAME | varchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 3 | EMP_FIRST_NAME | varchar(30) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | EMP_MID_INIT_NAME | varchar(1) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | VETERANS_STATUS_CD | varchar(1) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 6 | BIRTH_DT | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named BIRTH_DT. [inferred] |
| 7 | VETERANS_PREFERENCE_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named VETERANS_PREFERENCE_CD. [inferred] |
| 8 | LV_SCD_DT | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named LV_SCD_DT. [inferred] |
| 9 | HANDICAP_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named HANDICAP_CD. [inferred] |
| 10 | RETMT_PLAN_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named RETMT_PLAN_CD. [inferred] |
| 11 | APPT_TYPE_CD | varchar(1) | YES |  |  | Type or category used to classify the record. [inferred] |
| 12 | WORK_SCHEDULE_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named WORK_SCHEDULE_CD. [inferred] |
| 13 | APPT_NTE_DT | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named APPT_NTE_DT. [inferred] |
| 14 | EOD_EVENT_EFF_DT | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named EOD_EVENT_EFF_DT. [inferred] |
| 15 | EMP_GRADE_START_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named EMP_GRADE_START_DTE. [inferred] |
| 16 | POSITION_TITLE_NAME | varchar(32) | YES |  |  | Name or display label for this value. [inferred] |
| 17 | COMPETITIVE_LEVEL_CD | varchar(4) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 18 | BARGAINING_UNIT_CD | varchar(4) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named BARGAINING_UNIT_CD. [inferred] |
| 19 | POSITION_NUM | varchar(8) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named POSITION_NUM. [inferred] |
| 20 | SUPERVISORY_STATUS_CD | varchar(1) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 21 | APPT_NUM | varchar(2) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named APPT_NUM. [inferred] |
| 22 | FUNCTNL_CLASSFCTN_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named FUNCTNL_CLASSFCTN_CD. [inferred] |
| 23 | FILLING_POSITION_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named FILLING_POSITION_CD. [inferred] |
| 24 | PAY_PLAN_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named PAY_PLAN_CD. [inferred] |
| 25 | PATCO | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named PATCO. [inferred] |
| 26 | OCCUPATION_CD | varchar(4) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named OCCUPATION_CD. [inferred] |
| 27 | GRADE_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named GRADE_CD. [inferred] |
| 28 | STEP_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named STEP_CD. [inferred] |
| 29 | ANN_SALARY_RATE_AMT | numeric(14,2) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named ANN_SALARY_RATE_AMT. [inferred] |
| 30 | PAY_BASIS_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named PAY_BASIS_CD. [inferred] |
| 31 | FEGLI_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named FEGLI_CD. [inferred] |
| 32 | PERMANENT_TEMP_POSITION_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named PERMANENT_TEMP_POSITION_CD. [inferred] |
| 33 | TENURE_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named TENURE_CD. [inferred] |
| 34 | PRD_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named PRD_CD. [inferred] |
| 35 | PRD_DESCR | varchar(80) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named PRD_DESCR. [inferred] |
| 36 | SEX_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named SEX_CD. [inferred] |
| 37 | US_CITIZENSHIP_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named US_CITIZENSHIP_CD. [inferred] |
| 38 | TIMEKEEPER_NUM | varchar(5) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named TIMEKEEPER_NUM. [inferred] |
| 39 | POSITION_SENSITIVITY_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named POSITION_SENSITIVITY_CD. [inferred] |
| 40 | CAREER_START_DT | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named CAREER_START_DT. [inferred] |
| 41 | PROB_TRIAL_START_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named PROB_TRIAL_START_DTE. [inferred] |
| 42 | WIGI_START_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named WIGI_START_DTE. [inferred] |
| 43 | ADMIN_CD | varchar(11) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named ADMIN_CD. [inferred] |
| 44 | CAN_CD | varchar(8) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named CAN_CD. [inferred] |
| 45 | DUTY_STATION_CD | varchar(9) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named DUTY_STATION_CD. [inferred] |
| 46 | PERSONNEL_OFFICE_ID_CD | varchar(4) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named PERSONNEL_OFFICE_ID_CD. [inferred] |
| 47 | TERMINAL_SITE_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named TERMINAL_SITE_CD. [inferred] |
| 48 | MSA_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named MSA_CD. [inferred] |
| 49 | EDUCATION_LEVEL_CD | varchar(2) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 50 | YEAR_DEGREE_ATTAINED_DTE | smallint | YES |  |  | Numeric value associated with this record. [inferred] |
| 51 | LEGAL_AUTH_CD | varchar(3) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named LEGAL_AUTH_CD. [inferred] |
| 52 | LEGAL_AUTH2_CD | varchar(3) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named LEGAL_AUTH2_CD. [inferred] |
| 53 | FLSA_CATEGORY_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named FLSA_CATEGORY_CD. [inferred] |
| 54 | POSITION_OCCUPIED_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named POSITION_OCCUPIED_CD. [inferred] |
| 55 | SPECIAL_PROGRAM_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named SPECIAL_PROGRAM_CD. [inferred] |
| 56 | COMPUTER_POSITION_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named COMPUTER_POSITION_CD. [inferred] |
| 57 | ANNUITANT_IND_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named ANNUITANT_IND_CD. [inferred] |
| 58 | LAST_OPM_NOA_CD | varchar(3) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named LAST_OPM_NOA_CD. [inferred] |
| 59 | LAST_OPM_NOA_SUFFIX_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named LAST_OPM_NOA_SUFFIX_CD. [inferred] |
| 60 | LAST_OPM_EVENT_EFF_DT | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named LAST_OPM_EVENT_EFF_DT. [inferred] |
| 61 | NOA_HOLD_CD | varchar(3) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named NOA_HOLD_CD. [inferred] |
| 62 | CEIL_REPORTING_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named CEIL_REPORTING_CD. [inferred] |
| 63 | BASE_HRS | smallint | YES |  |  | Numeric value associated with this record. [inferred] |
| 64 | LOCALITY_PAY_AMT | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 65 | FEHB_PLAN_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named FEHB_PLAN_CD. [inferred] |
| 66 | RACE_NATL_ORIGIN_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named RACE_NATL_ORIGIN_CD. [inferred] |
| 67 | OPM_APPT_TYPE_CD | varchar(2) | YES |  |  | Type or category used to classify the record. [inferred] |
| 68 | EMP_NAME_PREFIX | varchar(4) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named EMP_NAME_PREFIX. [inferred] |
| 69 | EMP_NAME_SUFFIX | varchar(15) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named EMP_NAME_SUFFIX. [inferred] |
| 70 | LOAD_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named LOAD_DTE. [inferred] |
| 71 | EMPLID | varchar(8) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named EMPLID. [inferred] |
| 72 | ADDRESS1 | varchar(50) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named ADDRESS1. [inferred] |
| 73 | ADDRESS2 | varchar(50) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named ADDRESS2. [inferred] |
| 74 | CITY | varchar(50) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named CITY. [inferred] |
| 75 | STATE | varchar(30) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named STATE. [inferred] |
| 76 | ZIP_CD | varchar(5) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named ZIP_CD. [inferred] |
| 77 | ZIP_CD_EXT | varchar(4) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named ZIP_CD_EXT. [inferred] |
| 78 | JOB_CODE | varchar(15) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 79 | RETIRE_SCD_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named RETIRE_SCD_DTE. [inferred] |
| 80 | EMPL_RCD | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 81 | POSITION_NUM_EHRP | varchar(8) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named POSITION_NUM_EHRP. [inferred] |
| 82 | OPDIV | varchar(8) | NO |  |  | Field on BUS.BUS_BIISEMPLOYEE named OPDIV. [inferred] |
| 83 | FULL_STEP | varchar(2) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named FULL_STEP. [inferred] |
| 84 | UNTOUCHED_SAL | numeric(10,2) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named UNTOUCHED_SAL. [inferred] |
| 85 | ERI_CD | varchar(6) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named ERI_CD. [inferred] |
| 86 | ITAS_TOUR_TYPE | varchar(100) | YES |  |  | Type or category used to classify the record. [inferred] |
| 87 | GVT_LOCALITY_AREA | varchar(2) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named GVT_LOCALITY_AREA. [inferred] |
| 88 | LOCALITY_AREA_DESCR | nvarchar(30) | YES |  |  | Field on BUS.BUS_BIISEMPLOYEE named LOCALITY_AREA_DESCR. [inferred] |
