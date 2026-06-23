# XO.XO_Privilege

Supporting table in the XO schema related to xo privilege.

## Snapshot

- Schema: XO
- Table: XO_Privilege
- Priority: supporting schema
- Approximate rows: 17
- Primary key: PrivilegeIdentifier
- Column count: 12

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PrivilegeIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | PrivilegeName | nvarchar(150) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | PrivilegeDescription | nvarchar(max) | NO |  |  | Longer descriptive text for this value. [inferred] |
| 4 | TaskDefinitionIdentifier | bigint | YES |  |  | Identifier that likely links this record to TaskDefinition. [inferred] |
| 5 | TaskTitle | nvarchar(150) | YES |  |  | Field on XO.XO_Privilege named TaskTitle. [inferred] |
| 6 | HasLevel | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 7 | DeactivatedTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
