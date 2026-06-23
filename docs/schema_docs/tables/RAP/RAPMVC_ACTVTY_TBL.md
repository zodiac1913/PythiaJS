# RAP.RAPMVC_ACTVTY_TBL

Supporting table in the RAP schema related to rapmvc actvty tbl.

## Snapshot

- Schema: RAP
- Table: RAPMVC_ACTVTY_TBL
- Priority: supporting schema
- Approximate rows: 228
- Primary key: ACTVTY_ID
- Column count: 14

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ACTVTY_ID | bigint | NO | PK, IDENTITY |  | Numeric value associated with this record. [inferred] |
| 2 | ACTVTY_CD | varchar(100) | YES |  |  | Field on RAP.RAPMVC_ACTVTY_TBL named ACTVTY_CD. [inferred] |
| 3 | ACTVTY_DESC | varchar(max) | YES |  |  | Field on RAP.RAPMVC_ACTVTY_TBL named ACTVTY_DESC. [inferred] |
| 4 | ACTVTY_CMPLT_DESC | varchar(max) | YES |  |  | Field on RAP.RAPMVC_ACTVTY_TBL named ACTVTY_CMPLT_DESC. [inferred] |
| 5 | ACTVTY_GRP_DESC | varchar(30) | YES |  |  | Field on RAP.RAPMVC_ACTVTY_TBL named ACTVTY_GRP_DESC. [inferred] |
| 6 | ACTVTY_GRPFULL_DESC | varchar(100) | YES |  |  | Field on RAP.RAPMVC_ACTVTY_TBL named ACTVTY_GRPFULL_DESC. [inferred] |
| 7 | LOB_DESC | varchar(100) | YES |  |  | Field on RAP.RAPMVC_ACTVTY_TBL named LOB_DESC. [inferred] |
| 8 | SNPSHT_ID | bigint | NO |  |  | Numeric value associated with this record. [inferred] |
| 9 | ADD_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 10 | ADD_USER_ID | numeric(12,0) | YES |  |  | Field on RAP.RAPMVC_ACTVTY_TBL named ADD_USER_ID. [inferred] |
| 11 | LAST_UPDT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 12 | LAST_UPDT_USER_ID | numeric(12,0) | YES |  |  | Field on RAP.RAPMVC_ACTVTY_TBL named LAST_UPDT_USER_ID. [inferred] |
| 13 | DACTVT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 14 | DLT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
