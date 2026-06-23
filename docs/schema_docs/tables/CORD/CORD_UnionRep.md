# CORD.CORD_UnionRep

Supporting table in the CORD schema related to cord union rep.

## Snapshot

- Schema: CORD
- Table: CORD_UnionRep
- Priority: supporting schema
- Approximate rows: 66
- Primary key: UnionRepIdentifier
- Column count: 18

## Inbound Foreign Keys

- FK__CORD_Offi__Union__652654B0: CORD.CORD_OfficialTimeReport via UnionRepIdentifier -> UnionRepIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | UnionRepIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeName | varchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | EmployeeUserId | bigint | NO |  |  | Numeric value associated with this record. [inferred] |
| 4 | EmployeeLocation | varchar(100) | YES |  |  | Field on CORD.CORD_UnionRep named EmployeeLocation. [inferred] |
| 5 | EmployeeEmail | varchar(50) | YES |  |  | Email address related to this record. [inferred] |
| 6 | AdminCode | varchar(10) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 7 | Component | varchar(25) | YES |  |  | Field on CORD.CORD_UnionRep named Component. [inferred] |
| 8 | UnionRepRole | varchar(100) | NO |  |  | Field on CORD.CORD_UnionRep named UnionRepRole. [inferred] |
| 10 | OfficialTimeUsed | varchar(5) | YES |  |  | Field on CORD.CORD_UnionRep named OfficialTimeUsed. [inferred] |
| 11 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 12 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 14 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 16 | EmployeePhone | varchar(20) | YES |  |  | Phone number related to this record. [inferred] |
| 17 | ManagerIdentifier | bigint | NO |  |  | Identifier that likely links this record to Manager. [inferred] |
| 18 | ManagerName | varchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 19 | ManagerEmail | varchar(50) | YES |  |  | Email address related to this record. [inferred] |
