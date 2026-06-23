# RAP.RAP_ACTVTY_TBL

Supporting table in the RAP schema related to rap actvty tbl.

## Snapshot

- Schema: RAP
- Table: RAP_ACTVTY_TBL
- Priority: supporting schema
- Approximate rows: 272
- Primary key: ACTVTY_ID
- Column count: 40

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ACTVTY_ID | bigint | NO | PK, IDENTITY |  | Numeric value associated with this record. [inferred] |
| 2 | ACTVTY_CD | varchar(100) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named ACTVTY_CD. [inferred] |
| 3 | ACTVTY_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named ACTVTY_DESC. [inferred] |
| 4 | ACTVTY_CMPLT_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named ACTVTY_CMPLT_DESC. [inferred] |
| 5 | GL_REG_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named GL_REG_DESC. [inferred] |
| 6 | CNTRCTR_SPPRT_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named CNTRCTR_SPPRT_DESC. [inferred] |
| 7 | EMPLEE_EMAIL_ADR | varchar(40) | YES |  |  | Email address related to this record. [inferred] |
| 8 | EMPLEE_WORK_PHNE_NUM | varchar(16) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named EMPLEE_WORK_PHNE_NUM. [inferred] |
| 9 | EMPLEE_LAST_NAME | varchar(40) | YES |  |  | Name or display label for this value. [inferred] |
| 10 | EMPLEE_1ST_NAME | varchar(40) | YES |  |  | Name or display label for this value. [inferred] |
| 11 | EMPLEE_MDL_NAME | varchar(40) | YES |  |  | Name or display label for this value. [inferred] |
| 12 | PSTN_NAME | varchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 13 | EMPLEE_USER_ID | varchar(7) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named EMPLEE_USER_ID. [inferred] |
| 14 | ADMINV_CD | varchar(11) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named ADMINV_CD. [inferred] |
| 15 | OFC_ACRNM_NAME | varchar(10) | YES |  |  | Name or display label for this value. [inferred] |
| 16 | GRP_ACRNM_NAME | varchar(10) | YES |  |  | Name or display label for this value. [inferred] |
| 17 | DIV_ACRNM_NAME | varchar(10) | YES |  |  | Name or display label for this value. [inferred] |
| 18 | APRSL_YR | varchar(4) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named APRSL_YR. [inferred] |
| 19 | DLT_SW | varchar(1) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named DLT_SW. [inferred] |
| 20 | ADD_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 21 | ADD_USER_ID | varchar(7) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named ADD_USER_ID. [inferred] |
| 22 | LAST_UPDT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 23 | LAST_UPDT_USER_ID | varchar(7) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named LAST_UPDT_USER_ID. [inferred] |
| 24 | OMB_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named OMB_DESC. [inferred] |
| 25 | GPRA_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named GPRA_DESC. [inferred] |
| 26 | PMA_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named PMA_DESC. [inferred] |
| 27 | HHS_PRIORITY_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named HHS_PRIORITY_DESC. [inferred] |
| 28 | MMA_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named MMA_DESC. [inferred] |
| 29 | DRA_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named DRA_DESC. [inferred] |
| 30 | TRHCA_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named TRHCA_DESC. [inferred] |
| 31 | BIPA_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named BIPA_DESC. [inferred] |
| 32 | BBA_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named BBA_DESC. [inferred] |
| 33 | HIPPA_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named HIPPA_DESC. [inferred] |
| 34 | CMS_SP_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named CMS_SP_DESC. [inferred] |
| 35 | CMS_COOP_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named CMS_COOP_DESC. [inferred] |
| 36 | OTHER_DESC | varchar(4000) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named OTHER_DESC. [inferred] |
| 37 | RAP_SEQ_CD | numeric(38,0) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named RAP_SEQ_CD. [inferred] |
| 38 | ACTVTY_GRP_DESC | varchar(30) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named ACTVTY_GRP_DESC. [inferred] |
| 39 | ACTVTY_GRPFULL_DESC | varchar(100) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named ACTVTY_GRPFULL_DESC. [inferred] |
| 40 | ACTVTY_CD_07_2008 | varchar(100) | YES |  |  | Field on RAP.RAP_ACTVTY_TBL named ACTVTY_CD_07_2008. [inferred] |
