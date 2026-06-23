# ESS.ESS_EthicsDesignation

Supporting table in the ESS schema related to ess ethics designation.

## Snapshot

- Schema: ESS
- Table: ESS_EthicsDesignation
- Priority: supporting schema
- Approximate rows: 10
- Primary key: DesginationIdentifier
- Column count: 17

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | DesginationIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | EmployeeFirstName | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | EmployeeLastName | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | OfficeCode | varchar(50) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 6 | GroupCode | varchar(50) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 7 | DivisionCode | varchar(50) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 8 | FilingYear | varchar(4) | YES |  |  | Field on ESS.ESS_EthicsDesignation named FilingYear. [inferred] |
| 9 | IsDesginated | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 10 | DesignationType | varchar(6) | YES |  |  | Type or category used to classify the record. [inferred] |
| 11 | DesignationDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 12 | AddUserIdentifier | numeric(12,0) | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 13 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | LastUpdateUserIdentifier | numeric(12,0) | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 15 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 16 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 17 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
