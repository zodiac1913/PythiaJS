# BUS.BUS_DistanceOhc

Supporting table in the BUS schema related to bus distance ohc.

## Snapshot

- Schema: BUS
- Table: BUS_DistanceOhc
- Priority: supporting schema
- Approximate rows: 6734
- Primary key: not declared
- Column count: 12

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | DistanceIdentifier | bigint | YES |  |  | Identifier that likely links this record to Distance. [inferred] |
| 2 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | personnel_id | varchar(50) | YES |  |  | Field on BUS.BUS_DistanceOhc named personnel_id. [inferred] |
| 4 | empl_name | varchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | component | varchar(50) | YES |  |  | Field on BUS.BUS_DistanceOhc named component. [inferred] |
| 6 | bargaining_unit | varchar(50) | YES |  |  | Field on BUS.BUS_DistanceOhc named bargaining_unit. [inferred] |
| 7 | manager | varchar(50) | YES |  |  | Field on BUS.BUS_DistanceOhc named manager. [inferred] |
| 8 | pay_plan | varchar(50) | YES |  |  | Field on BUS.BUS_DistanceOhc named pay_plan. [inferred] |
| 9 | grade | varchar(50) | YES |  |  | Field on BUS.BUS_DistanceOhc named grade. [inferred] |
| 10 | job_series | varchar(50) | YES |  |  | Field on BUS.BUS_DistanceOhc named job_series. [inferred] |
| 11 | ehcm_telework_designation | varchar(50) | YES |  |  | Field on BUS.BUS_DistanceOhc named ehcm_telework_designation. [inferred] |
| 12 | hr_address | varchar(100) | YES |  |  | Field on BUS.BUS_DistanceOhc named hr_address. [inferred] |
