# RAP.RAP_INFO_TBL

Supporting table in the RAP schema related to rap info tbl.

## Snapshot

- Schema: RAP
- Table: RAP_INFO_TBL
- Priority: supporting schema
- Approximate rows: 4888
- Primary key: RAP_ID
- Column count: 55

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | RAP_ID | bigint | NO | PK, IDENTITY |  | Numeric value associated with this record. [inferred] |
| 2 | EMPLEE_SSN_ID | varchar(9) | YES |  |  | Field on RAP.RAP_INFO_TBL named EMPLEE_SSN_ID. [inferred] |
| 3 | EMPLEE_LAST_NAME | varchar(40) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | EMPLEE_1ST_NAME | varchar(40) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | EMPLEE_MDL_NAME | varchar(40) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | PSTN_NAME | varchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | PAY_PLAN_CD | varchar(2) | YES |  |  | Field on RAP.RAP_INFO_TBL named PAY_PLAN_CD. [inferred] |
| 8 | JOB_SRS_CD | varchar(10) | YES |  |  | Field on RAP.RAP_INFO_TBL named JOB_SRS_CD. [inferred] |
| 9 | GRD_CD | varchar(2) | YES |  |  | Field on RAP.RAP_INFO_TBL named GRD_CD. [inferred] |
| 10 | EMPLEE_USER_ID | varchar(7) | YES |  |  | Field on RAP.RAP_INFO_TBL named EMPLEE_USER_ID. [inferred] |
| 11 | ADMINV_CD | varchar(11) | YES |  |  | Field on RAP.RAP_INFO_TBL named ADMINV_CD. [inferred] |
| 12 | BASE_HR_QTY | numeric(6,2) | YES |  |  | Field on RAP.RAP_INFO_TBL named BASE_HR_QTY. [inferred] |
| 13 | OFC_ACRNM_NAME | varchar(10) | YES |  |  | Name or display label for this value. [inferred] |
| 14 | GRP_ACRNM_NAME | varchar(10) | YES |  |  | Name or display label for this value. [inferred] |
| 15 | DIV_ACRNM_NAME | varchar(10) | YES |  |  | Name or display label for this value. [inferred] |
| 16 | ACTVTY_1_CD | varchar(100) | YES |  |  | Field on RAP.RAP_INFO_TBL named ACTVTY_1_CD. [inferred] |
| 17 | ACTVTY_2_CD | varchar(100) | YES |  |  | Field on RAP.RAP_INFO_TBL named ACTVTY_2_CD. [inferred] |
| 18 | ACTVTY_3_CD | varchar(100) | YES |  |  | Field on RAP.RAP_INFO_TBL named ACTVTY_3_CD. [inferred] |
| 19 | ACTVTY_4_CD | varchar(100) | YES |  |  | Field on RAP.RAP_INFO_TBL named ACTVTY_4_CD. [inferred] |
| 20 | ACTVTY_5_CD | varchar(100) | YES |  |  | Field on RAP.RAP_INFO_TBL named ACTVTY_5_CD. [inferred] |
| 21 | ACTVTY_1_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAP_INFO_TBL named ACTVTY_1_PCT. [inferred] |
| 22 | ACTVTY_2_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAP_INFO_TBL named ACTVTY_2_PCT. [inferred] |
| 23 | ACTVTY_3_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAP_INFO_TBL named ACTVTY_3_PCT. [inferred] |
| 24 | ACTVTY_4_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAP_INFO_TBL named ACTVTY_4_PCT. [inferred] |
| 25 | ACTVTY_5_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAP_INFO_TBL named ACTVTY_5_PCT. [inferred] |
| 26 | SPRVSR_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAP_INFO_TBL named SPRVSR_PCT. [inferred] |
| 27 | PO_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAP_INFO_TBL named PO_PCT. [inferred] |
| 28 | CUR_PO_SW | varchar(1) | YES |  |  | Field on RAP.RAP_INFO_TBL named CUR_PO_SW. [inferred] |
| 29 | PO_CRSE_SW | varchar(1) | YES |  |  | Field on RAP.RAP_INFO_TBL named PO_CRSE_SW. [inferred] |
| 30 | FTE_AMT | numeric(4,3) | YES |  |  | Field on RAP.RAP_INFO_TBL named FTE_AMT. [inferred] |
| 31 | FTE_1_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAP_INFO_TBL named FTE_1_PCT. [inferred] |
| 32 | FTE_2_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAP_INFO_TBL named FTE_2_PCT. [inferred] |
| 33 | FTE_3_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAP_INFO_TBL named FTE_3_PCT. [inferred] |
| 34 | FTE_4_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAP_INFO_TBL named FTE_4_PCT. [inferred] |
| 35 | FTE_5_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAP_INFO_TBL named FTE_5_PCT. [inferred] |
| 36 | ACTVTY_CMMNT | varchar(4000) | YES |  |  | Field on RAP.RAP_INFO_TBL named ACTVTY_CMMNT. [inferred] |
| 37 | APRSL_YR | varchar(4) | YES |  |  | Field on RAP.RAP_INFO_TBL named APRSL_YR. [inferred] |
| 38 | INPUT_DT | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 39 | DLT_SW | varchar(1) | YES |  |  | Field on RAP.RAP_INFO_TBL named DLT_SW. [inferred] |
| 40 | LCK_SW | varchar(1) | YES |  |  | Field on RAP.RAP_INFO_TBL named LCK_SW. [inferred] |
| 41 | ADD_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 42 | ADD_USER_ID | varchar(7) | YES |  |  | Field on RAP.RAP_INFO_TBL named ADD_USER_ID. [inferred] |
| 43 | LAST_UPDT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 44 | LAST_UPDT_USER_ID | varchar(7) | YES |  |  | Field on RAP.RAP_INFO_TBL named LAST_UPDT_USER_ID. [inferred] |
| 45 | PSTN_ID | varchar(6) | YES |  |  | Field on RAP.RAP_INFO_TBL named PSTN_ID. [inferred] |
| 46 | ARRA_SW | varchar(1) | YES |  |  | Field on RAP.RAP_INFO_TBL named ARRA_SW. [inferred] |
| 47 | ARRA_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_INFO_TBL named ARRA_DESC. [inferred] |
| 48 | CHIPRA_SW | varchar(1) | YES |  |  | Field on RAP.RAP_INFO_TBL named CHIPRA_SW. [inferred] |
| 49 | CHIPRA_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_INFO_TBL named CHIPRA_DESC. [inferred] |
| 50 | CYCLE_NUM | varchar(10) | YES |  |  | Field on RAP.RAP_INFO_TBL named CYCLE_NUM. [inferred] |
| 51 | ACA_SW | varchar(1) | YES |  |  | Field on RAP.RAP_INFO_TBL named ACA_SW. [inferred] |
| 52 | ACA_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_INFO_TBL named ACA_DESC. [inferred] |
| 53 | ACA_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAP_INFO_TBL named ACA_PCT. [inferred] |
| 54 | CMPLT_SW | varchar(1) | YES |  |  | Field on RAP.RAP_INFO_TBL named CMPLT_SW. [inferred] |
| 55 | ARRA_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAP_INFO_TBL named ARRA_PCT. [inferred] |
