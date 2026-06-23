# CORE.EuaLdapRowCount

Business-critical table in the CORE schema related to eua ldap row count.

## Snapshot

- Schema: CORE
- Table: EuaLdapRowCount
- Priority: primary schema
- Approximate rows: 0
- Primary key: EuaLdapRowCountIdentifier
- Column count: 6

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | EuaLdapRowCountIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | RowCount | int | NO |  | ((0)) | Numeric value associated with this record. [inferred] |
| 3 | AddUserIdentifier | bigint | NO |  | ((1)) | Identifier that likely links this record to AddUser. [inferred] |
| 4 | AddTimeStamp | datetime2(0) | NO |  | (getdate()) | Date and time associated with this attribute or event. [inferred] |
| 5 | LastUpdateUserIdentifier | bigint | NO |  | ((1)) | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 6 | LastUpdateTimeStamp | datetime2(0) | NO |  | (getdate()) | Date and time associated with this attribute or event. [inferred] |
