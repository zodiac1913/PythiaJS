# RAP.RAPMVC_CA_TBL

Supporting table in the RAP schema related to rapmvc ca tbl.

## Snapshot

- Schema: RAP
- Table: RAPMVC_CA_TBL
- Priority: supporting schema
- Approximate rows: 0
- Primary key: CA_ID
- Column count: 11

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CA_ID | bigint | NO | PK, IDENTITY |  | Numeric value associated with this record. [inferred] |
| 2 | CA_CD | varchar(100) | YES |  |  | Field on RAP.RAPMVC_CA_TBL named CA_CD. [inferred] |
| 3 | CA_DESC | varchar(max) | YES |  |  | Field on RAP.RAPMVC_CA_TBL named CA_DESC. [inferred] |
| 4 | CA_CMPLT_DESC | varchar(max) | YES |  |  | Field on RAP.RAPMVC_CA_TBL named CA_CMPLT_DESC. [inferred] |
| 5 | SNPSHT_ID | bigint | NO |  |  | Numeric value associated with this record. [inferred] |
| 6 | ADD_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 7 | ADD_USER_ID | numeric(12,0) | YES |  |  | Field on RAP.RAPMVC_CA_TBL named ADD_USER_ID. [inferred] |
| 8 | LAST_UPDT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 9 | LAST_UPDT_USER_ID | numeric(12,0) | YES |  |  | Field on RAP.RAPMVC_CA_TBL named LAST_UPDT_USER_ID. [inferred] |
| 10 | DACTVT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 11 | DLT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
