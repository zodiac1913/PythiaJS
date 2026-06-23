# RAP.RAPMVC_SNPSHT_TBL

Supporting table in the RAP schema related to rapmvc snpsht tbl.

## Snapshot

- Schema: RAP
- Table: RAPMVC_SNPSHT_TBL
- Priority: supporting schema
- Approximate rows: 7
- Primary key: SNPSHT_ID
- Column count: 8

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SNPSHT_ID | bigint | NO | PK, IDENTITY |  | Numeric value associated with this record. [inferred] |
| 2 | SNPSHT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 3 | ADD_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 4 | ADD_USER_ID | numeric(12,0) | YES |  |  | Field on RAP.RAPMVC_SNPSHT_TBL named ADD_USER_ID. [inferred] |
| 5 | LAST_UPDT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 6 | LAST_UPDT_USER_ID | numeric(12,0) | YES |  |  | Field on RAP.RAPMVC_SNPSHT_TBL named LAST_UPDT_USER_ID. [inferred] |
| 7 | DACTVT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 8 | DLT_TS | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
