# RPLR.RPLR_ClassParameter

Supporting table in the RPLR schema related to rplr class parameter.

## Snapshot

- Schema: RPLR
- Table: RPLR_ClassParameter
- Priority: supporting schema
- Approximate rows: 142
- Primary key: ParameterIdentifier
- Column count: 16

## Outbound Foreign Keys

- FK_RPLR_ClassParameter_RPLR_ClassMethod: RPLR.RPLR_ClassMethod via MethodIdentifier -> MethodIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ParameterIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Documentation | nvarchar(max) | YES |  |  | Field on RPLR.RPLR_ClassParameter named Documentation. [inferred] |
| 3 | IsNullable | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 4 | IsOut | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 5 | IsRef | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 6 | Name | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | Type | nvarchar(150) | YES |  |  | Type or category used to classify the record. [inferred] |
| 8 | DefaultValue | nvarchar(255) | YES |  |  | Field on RPLR.RPLR_ClassParameter named DefaultValue. [inferred] |
| 9 | MethodIdentifier | bigint | YES |  |  | Identifier that likely links this record to Method. [inferred] |
| 10 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 11 | AddUserName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 12 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 14 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 16 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
