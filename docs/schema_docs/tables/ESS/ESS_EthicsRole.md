# ESS.ESS_EthicsRole

Supporting table in the ESS schema related to ess ethics role.

## Snapshot

- Schema: ESS
- Table: ESS_EthicsRole
- Priority: supporting schema
- Approximate rows: 12
- Primary key: RoleIdentifier
- Column count: 9

## Inbound Foreign Keys

- FK__ESS_Ethic__RoleI__1BADE777: ESS.ESS_EthicsUserRole via RoleIdentifier -> RoleIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | RoleIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | RoleName | varchar(50) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | RoleCode | varchar(3) | NO |  |  | Code value used to classify or look up this record. [inferred] |
| 4 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 5 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 7 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
