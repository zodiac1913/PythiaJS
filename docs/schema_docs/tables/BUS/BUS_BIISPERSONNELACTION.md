# BUS.BUS_BIISPERSONNELACTION

Supporting table in the BUS schema related to bus biispersonnelaction.

## Snapshot

- Schema: BUS
- Table: BUS_BIISPERSONNELACTION
- Priority: supporting schema
- Approximate rows: 3625
- Primary key: not declared
- Column count: 89

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SSN | varchar(20) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named SSN. [inferred] |
| 2 | NEW_SSN | varchar(9) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named NEW_SSN. [inferred] |
| 3 | VETERANS_STATUS_CD | varchar(1) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 4 | VETERANS_PREFERENCE_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named VETERANS_PREFERENCE_CD. [inferred] |
| 5 | FUNCTNL_CLASSFCTN_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named FUNCTNL_CLASSFCTN_CD. [inferred] |
| 6 | PATCO | varchar(10) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named PATCO. [inferred] |
| 7 | SEX_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named SEX_CD. [inferred] |
| 8 | PERSONNEL_OFFICE_ID_CD | varchar(15) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named PERSONNEL_OFFICE_ID_CD. [inferred] |
| 9 | TERMINAL_SITE_CD | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 10 | EOD_LEGAL_AUTH | varchar(3) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named EOD_LEGAL_AUTH. [inferred] |
| 11 | EOD_LEGAL_AUTH2 | varchar(3) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named EOD_LEGAL_AUTH2. [inferred] |
| 12 | US_CITIZENSHIP_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named US_CITIZENSHIP_CD. [inferred] |
| 13 | BIRTH_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named BIRTH_DTE. [inferred] |
| 14 | PROB_TRIAL_PERIOD_START_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named PROB_TRIAL_PERIOD_START_DTE. [inferred] |
| 15 | CAREER_START_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named CAREER_START_DTE. [inferred] |
| 16 | WGI_START_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named WGI_START_DTE. [inferred] |
| 17 | LV_SCD_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named LV_SCD_DTE. [inferred] |
| 18 | RETMT_SCD_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named RETMT_SCD_DTE. [inferred] |
| 19 | EMP_EOD_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named EMP_EOD_DTE. [inferred] |
| 20 | EMP_GRADE_START_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named EMP_GRADE_START_DTE. [inferred] |
| 21 | EVENT_SUBMITTED_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named EVENT_SUBMITTED_DTE. [inferred] |
| 22 | CAN_CD | varchar(15) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named CAN_CD. [inferred] |
| 23 | CAN_NEW_CD | varchar(15) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named CAN_NEW_CD. [inferred] |
| 24 | EVENT_EFF_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named EVENT_EFF_DTE. [inferred] |
| 25 | NOA_CD | varchar(4) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named NOA_CD. [inferred] |
| 26 | EMP_LAST_NAME | nvarchar(40) | YES |  |  | Name or display label for this value. [inferred] |
| 27 | EMP_FIRST_NAME | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 28 | EMP_MID_INIT | nvarchar(40) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named EMP_MID_INIT. [inferred] |
| 29 | TENURE_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named TENURE_CD. [inferred] |
| 30 | HANDICAP_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named HANDICAP_CD. [inferred] |
| 31 | RETMT_PLAN_CD | varchar(4) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named RETMT_PLAN_CD. [inferred] |
| 32 | COMPUTER_POSITION_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named COMPUTER_POSITION_CD. [inferred] |
| 33 | ANNUITANT_IND_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named ANNUITANT_IND_CD. [inferred] |
| 34 | WORK_SCHEDULE_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named WORK_SCHEDULE_CD. [inferred] |
| 35 | LEGAL_AUTH_CD | varchar(3) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named LEGAL_AUTH_CD. [inferred] |
| 36 | LEGAL_AUTH2_CD | varchar(3) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named LEGAL_AUTH2_CD. [inferred] |
| 37 | AGCY_SUBELEMENT_PRIOR_CD | varchar(15) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named AGCY_SUBELEMENT_PRIOR_CD. [inferred] |
| 38 | POSITION_TITLE_NAME | nvarchar(32) | YES |  |  | Name or display label for this value. [inferred] |
| 39 | SUPERVSRY_MGRL_PROB_START_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named SUPERVSRY_MGRL_PROB_START_DTE. [inferred] |
| 40 | POSITION_NUM | nvarchar(10) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named POSITION_NUM. [inferred] |
| 41 | PAY_PLAN_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named PAY_PLAN_CD. [inferred] |
| 42 | OCCUPATION_CD | nvarchar(10) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named OCCUPATION_CD. [inferred] |
| 43 | GRADE_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named GRADE_CD. [inferred] |
| 44 | STEP_CD | varchar(15) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named STEP_CD. [inferred] |
| 45 | PAY_BASIS_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named PAY_BASIS_CD. [inferred] |
| 46 | SCHLD_ANN_SALARY_AMT | numeric(15,4) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named SCHLD_ANN_SALARY_AMT. [inferred] |
| 47 | AGCY_SUBELEMENT_CD | varchar(15) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named AGCY_SUBELEMENT_CD. [inferred] |
| 48 | ORGTNL_COMPONENT_CD | varchar(15) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named ORGTNL_COMPONENT_CD. [inferred] |
| 49 | DUTY_STATION_CD | varchar(15) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named DUTY_STATION_CD. [inferred] |
| 50 | MSA_CD | varchar(4) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named MSA_CD. [inferred] |
| 51 | CEIL_REPORTING_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named CEIL_REPORTING_CD. [inferred] |
| 52 | POSITION_OCCUPIED_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named POSITION_OCCUPIED_CD. [inferred] |
| 53 | BARGAINING_UNIT_CD | varchar(15) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named BARGAINING_UNIT_CD. [inferred] |
| 54 | SPECIAL_PROGRAM_CD | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 55 | SUPERVSRY_STATUS_CD | varchar(1) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 56 | BASE_HRS | numeric(5,2) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named BASE_HRS. [inferred] |
| 57 | APPT_NTE_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named APPT_NTE_DTE. [inferred] |
| 58 | FILLING_POSITION_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named FILLING_POSITION_CD. [inferred] |
| 59 | FLSA_CATGRY_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named FLSA_CATGRY_CD. [inferred] |
| 60 | PERMANENT_TEMP_POSITION_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named PERMANENT_TEMP_POSITION_CD. [inferred] |
| 61 | PRD_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named PRD_CD. [inferred] |
| 62 | APPT_TYPE_CD | varchar(2) | YES |  |  | Type or category used to classify the record. [inferred] |
| 63 | EDUCATION_LEVEL_CD | varchar(2) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 64 | INSTRUCTIONAL_PROGRAM_CD | varchar(6) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named INSTRUCTIONAL_PROGRAM_CD. [inferred] |
| 65 | RACE_NATL_ORIGIN_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named RACE_NATL_ORIGIN_CD. [inferred] |
| 66 | COMPETITIVE_LEVEL_CD | nvarchar(5) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 67 | POSITION_SENSITIVITY_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named POSITION_SENSITIVITY_CD. [inferred] |
| 68 | TEMP_PROMTN_EXP_DTE | varchar(5000) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named TEMP_PROMTN_EXP_DTE. [inferred] |
| 69 | CASH_AWARD_AMT | numeric(15,4) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named CASH_AWARD_AMT. [inferred] |
| 70 | INDVDL_GROUP_AWARD | varchar(4) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named INDVDL_GROUP_AWARD. [inferred] |
| 71 | EMP_ID | varchar(8) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named EMP_ID. [inferred] |
| 72 | TIME_OFF_GRANTED_HRS | numeric(5,2) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named TIME_OFF_GRANTED_HRS. [inferred] |
| 73 | LOCALITY_PAY_PRIOR_AMT | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 74 | FEGLI_CD | varchar(2) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named FEGLI_CD. [inferred] |
| 75 | LOCALITY_PAY_AMT | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 76 | REPORTS_TO | varchar(8) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named REPORTS_TO. [inferred] |
| 77 | EFFSEQ | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 78 | EMPL_REC_NO | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 79 | CORR_CANCL_NOA_CD | varchar(3) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named CORR_CANCL_NOA_CD. [inferred] |
| 80 | CORR_CANCL_NOA_SUFFIX_CD | varchar(1) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named CORR_CANCL_NOA_SUFFIX_CD. [inferred] |
| 81 | CORR_CANCL_EFF_DTE | date | YES |  |  | Temporal field associated with this record. [inferred] |
| 82 | CORR_CANCL_LEGAL_AUTH_CD | varchar(3) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named CORR_CANCL_LEGAL_AUTH_CD. [inferred] |
| 83 | CORR_CANCL_LEGAL_AUTH_TXT | nvarchar(250) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named CORR_CANCL_LEGAL_AUTH_TXT. [inferred] |
| 84 | CORR_CANCL_LEGAL_AUTH2_CD | varchar(3) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named CORR_CANCL_LEGAL_AUTH2_CD. [inferred] |
| 85 | CORR_CANCL_LEGAL_AUTH2_TXT | nvarchar(250) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named CORR_CANCL_LEGAL_AUTH2_TXT. [inferred] |
| 86 | CORR_CANCL_EFFSEQ | numeric(3,0) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named CORR_CANCL_EFFSEQ. [inferred] |
| 87 | GVT_WIP_STATUS | varchar(3) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 88 | ERI_CD | nvarchar(6) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named ERI_CD. [inferred] |
| 89 | PROCESSED_DT | varchar(20) | YES |  |  | Field on BUS.BUS_BIISPERSONNELACTION named PROCESSED_DT. [inferred] |
