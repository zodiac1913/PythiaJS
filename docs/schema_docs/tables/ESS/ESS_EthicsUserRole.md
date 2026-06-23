# ESS.ESS_EthicsUserRole

Supporting table in the ESS schema related to ess ethics user role.

## Snapshot

- Schema: ESS
- Table: ESS_EthicsUserRole
- Priority: supporting schema
- Approximate rows: 21
- Primary key: UserRoleIdentifier
- Column count: 12

## Outbound Foreign Keys

- FK__ESS_Ethic__RoleI__1BADE777: ESS.ESS_EthicsRole via RoleIdentifier -> RoleIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | UserRoleIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIndentifer | bigint | NO |  |  | Numeric value associated with this record. [inferred] |
| 3 | UserRoleCode | bigint | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 4 | EmployeeFirstName | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | EmployeeLastName | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 7 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | RoleIdentifier | bigint | YES |  |  | Identifier that likely links this record to Role. [inferred] |
