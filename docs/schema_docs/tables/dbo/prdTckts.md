# dbo.prdTckts

Supporting table in the dbo schema related to prd tckts.

## Snapshot

- Schema: dbo
- Table: prdTckts
- Priority: supporting schema
- Approximate rows: 0
- Primary key: not declared
- Column count: 25

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CUST_SRVC_ID | numeric(18,0) | YES |  |  | Field on dbo.prdTckts named CUST_SRVC_ID. [inferred] |
| 2 | SYS_CD | varchar(20) | YES |  |  | Field on dbo.prdTckts named SYS_CD. [inferred] |
| 3 | ORGNTR_USER_ID | numeric(18,0) | YES |  |  | Field on dbo.prdTckts named ORGNTR_USER_ID. [inferred] |
| 4 | CMPTR_ADR | varchar(100) | YES |  |  | Field on dbo.prdTckts named CMPTR_ADR. [inferred] |
| 5 | LCTN_ADR | varchar(50) | YES |  |  | Field on dbo.prdTckts named LCTN_ADR. [inferred] |
| 6 | SUBJ_DESC | varchar(50) | YES |  |  | Field on dbo.prdTckts named SUBJ_DESC. [inferred] |
| 7 | TASK_DEFN_ID | numeric(18,0) | YES |  |  | Field on dbo.prdTckts named TASK_DEFN_ID. [inferred] |
| 8 | PROJ_DESC | varchar(50) | YES |  |  | Field on dbo.prdTckts named PROJ_DESC. [inferred] |
| 9 | PRBLM_DESC | varchar(8000) | YES |  |  | Field on dbo.prdTckts named PRBLM_DESC. [inferred] |
| 10 | ASGND_USER_ID | numeric(18,0) | YES |  |  | Field on dbo.prdTckts named ASGND_USER_ID. [inferred] |
| 11 | PRRTY_NUM | numeric(18,0) | YES |  |  | Field on dbo.prdTckts named PRRTY_NUM. [inferred] |
| 12 | STUS_CD | varchar(20) | YES |  |  | Field on dbo.prdTckts named STUS_CD. [inferred] |
| 13 | CLOSED_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 14 | SCRE_NUM | numeric(18,0) | YES |  |  | Field on dbo.prdTckts named SCRE_NUM. [inferred] |
| 15 | BATCH_ID | numeric(18,0) | YES |  |  | Field on dbo.prdTckts named BATCH_ID. [inferred] |
| 16 | DACTVT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 17 | DLT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 18 | ADD_USER_ID | numeric(18,0) | YES |  |  | Field on dbo.prdTckts named ADD_USER_ID. [inferred] |
| 19 | ADD_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 20 | LAST_UPDT_USER_ID | numeric(18,0) | YES |  |  | Field on dbo.prdTckts named LAST_UPDT_USER_ID. [inferred] |
| 21 | LAST_UPDT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 22 | NTR_OF_RQST | varchar(50) | YES |  |  | Field on dbo.prdTckts named NTR_OF_RQST. [inferred] |
| 23 | TECH_RQRD | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 24 | SOURCE | varchar(50) | YES |  |  | Field on dbo.prdTckts named SOURCE. [inferred] |
| 25 | REUSED | numeric(18,0) | YES |  |  | Field on dbo.prdTckts named REUSED. [inferred] |
