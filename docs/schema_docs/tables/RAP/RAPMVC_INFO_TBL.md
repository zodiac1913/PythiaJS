# RAP.RAPMVC_INFO_TBL

Supporting table in the RAP schema related to rapmvc info tbl.

## Snapshot

- Schema: RAP
- Table: RAPMVC_INFO_TBL
- Priority: supporting schema
- Approximate rows: 6715
- Primary key: RAP_ID
- Column count: 70

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | RAP_ID | bigint | NO | PK, IDENTITY |  | Numeric value associated with this record. [inferred] |
| 2 | EMPLEE_ID | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named EMPLEE_ID. [inferred] |
| 3 | ACTVTY_1_CD | varchar(100) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named ACTVTY_1_CD. [inferred] |
| 4 | ACTVTY_2_CD | varchar(100) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named ACTVTY_2_CD. [inferred] |
| 5 | ACTVTY_3_CD | varchar(100) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named ACTVTY_3_CD. [inferred] |
| 6 | ACTVTY_4_CD | varchar(100) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named ACTVTY_4_CD. [inferred] |
| 7 | ACTVTY_5_CD | varchar(100) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named ACTVTY_5_CD. [inferred] |
| 8 | ACTVTY_1_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named ACTVTY_1_PCT. [inferred] |
| 9 | ACTVTY_2_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named ACTVTY_2_PCT. [inferred] |
| 10 | ACTVTY_3_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named ACTVTY_3_PCT. [inferred] |
| 11 | ACTVTY_4_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named ACTVTY_4_PCT. [inferred] |
| 12 | ACTVTY_5_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named ACTVTY_5_PCT. [inferred] |
| 13 | COST_1_CD | varchar(100) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named COST_1_CD. [inferred] |
| 14 | COST_2_CD | varchar(100) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named COST_2_CD. [inferred] |
| 15 | COST_3_CD | varchar(100) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named COST_3_CD. [inferred] |
| 16 | COST_4_CD | varchar(100) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named COST_4_CD. [inferred] |
| 17 | COST_5_CD | varchar(100) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named COST_5_CD. [inferred] |
| 18 | COST_1_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named COST_1_PCT. [inferred] |
| 19 | COST_2_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named COST_2_PCT. [inferred] |
| 20 | COST_3_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named COST_3_PCT. [inferred] |
| 21 | COST_4_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named COST_4_PCT. [inferred] |
| 22 | COST_5_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named COST_5_PCT. [inferred] |
| 23 | FTE_AMT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named FTE_AMT. [inferred] |
| 24 | FTE_1_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named FTE_1_PCT. [inferred] |
| 25 | FTE_2_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named FTE_2_PCT. [inferred] |
| 26 | FTE_3_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named FTE_3_PCT. [inferred] |
| 27 | FTE_4_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named FTE_4_PCT. [inferred] |
| 28 | FTE_5_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named FTE_5_PCT. [inferred] |
| 29 | CA_AMT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named CA_AMT. [inferred] |
| 30 | CA_1_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named CA_1_PCT. [inferred] |
| 31 | CA_2_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named CA_2_PCT. [inferred] |
| 32 | CA_3_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named CA_3_PCT. [inferred] |
| 33 | CA_4_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named CA_4_PCT. [inferred] |
| 34 | CA_5_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named CA_5_PCT. [inferred] |
| 35 | SNPSHT_ID | bigint | NO |  |  | Numeric value associated with this record. [inferred] |
| 36 | INPUT_DT | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 37 | DLT_SW | varchar(1) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named DLT_SW. [inferred] |
| 38 | LCK_SW | varchar(1) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named LCK_SW. [inferred] |
| 39 | ADD_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 40 | ADD_USER_ID | numeric(12,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named ADD_USER_ID. [inferred] |
| 41 | LAST_UPDT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 42 | LAST_UPDT_USER_ID | numeric(12,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named LAST_UPDT_USER_ID. [inferred] |
| 43 | CMPLT_SW | varchar(1) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named CMPLT_SW. [inferred] |
| 44 | CMPNT_ID | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named CMPNT_ID. [inferred] |
| 45 | PAY_PRD_ID | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named PAY_PRD_ID. [inferred] |
| 46 | EMPLEE_USER_ID | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named EMPLEE_USER_ID. [inferred] |
| 47 | DACTVT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 48 | DLT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 49 | OFC_ACRNM_NAME | varchar(10) | YES |  |  | Name or display label for this value. [inferred] |
| 50 | GRP_ACRNM_NAME | varchar(10) | YES |  |  | Name or display label for this value. [inferred] |
| 51 | DIV_ACRNM_NAME | varchar(10) | YES |  |  | Name or display label for this value. [inferred] |
| 52 | ADMINV_CD | varchar(11) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named ADMINV_CD. [inferred] |
| 53 | OFC_ADMIN | varchar(11) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named OFC_ADMIN. [inferred] |
| 54 | GRP_ADMIN | varchar(11) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named GRP_ADMIN. [inferred] |
| 55 | DIV_ADMIN | varchar(11) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named DIV_ADMIN. [inferred] |
| 56 | OFC_NAME | varchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 57 | GRP_NAME | varchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 58 | DIV_NAME | varchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 59 | SP_CD | varchar(100) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named SP_CD. [inferred] |
| 60 | SP_1_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named SP_1_PCT. [inferred] |
| 61 | SP_2_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named SP_2_PCT. [inferred] |
| 62 | SP_3_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named SP_3_PCT. [inferred] |
| 63 | SP_4_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named SP_4_PCT. [inferred] |
| 64 | SP_5_PCT | numeric(38,0) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named SP_5_PCT. [inferred] |
| 65 | SP_AMT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named SP_AMT. [inferred] |
| 66 | SP_CALC_1_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named SP_CALC_1_PCT. [inferred] |
| 67 | SP_CALC_2_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named SP_CALC_2_PCT. [inferred] |
| 68 | SP_CALC_3_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named SP_CALC_3_PCT. [inferred] |
| 69 | SP_CALC_4_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named SP_CALC_4_PCT. [inferred] |
| 70 | SP_CALC_5_PCT | numeric(4,3) | YES |  |  | Field on RAP.RAPMVC_INFO_TBL named SP_CALC_5_PCT. [inferred] |
