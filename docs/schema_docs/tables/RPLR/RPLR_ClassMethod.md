# RPLR.RPLR_ClassMethod

Supporting table in the RPLR schema related to rplr class method.

## Snapshot

- Schema: RPLR
- Table: RPLR_ClassMethod
- Priority: supporting schema
- Approximate rows: 69
- Primary key: MethodIdentifier
- Column count: 23

## Outbound Foreign Keys

- FK_RPLR_ClassMethod_RPLR_Class: RPLR.RPLR_Class via ClassIdentifier -> ClassIdentifier

## Inbound Foreign Keys

- FK_RPLR_ClassParameter_RPLR_ClassMethod: RPLR.RPLR_ClassParameter via MethodIdentifier -> MethodIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | MethodIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ClassIdentifier | bigint | YES |  |  | Identifier that likely links this record to Class. [inferred] |
| 3 | Name | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | ParentIdentifier | bigint | YES |  |  | Identifier that likely links this record to Parent. [inferred] |
| 5 | ParentName | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | ParentType | nvarchar(100) | YES |  |  | Type or category used to classify the record. [inferred] |
| 7 | Type | nvarchar(255) | YES |  |  | Type or category used to classify the record. [inferred] |
| 8 | Access | nvarchar(50) | YES |  |  | Field on RPLR.RPLR_ClassMethod named Access. [inferred] |
| 9 | AnnotationsList | nvarchar(max) | YES |  |  | Field on RPLR.RPLR_ClassMethod named AnnotationsList. [inferred] |
| 10 | Documentation | nvarchar(max) | YES |  |  | Field on RPLR.RPLR_ClassMethod named Documentation. [inferred] |
| 11 | InnerCode | nvarchar(max) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 12 | IsAsync | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 13 | IsStatic | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 14 | IsVirtual | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 15 | Override | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 16 | Region | nvarchar(50) | YES |  |  | Field on RPLR.RPLR_ClassMethod named Region. [inferred] |
| 17 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 18 | AddUserName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 19 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 20 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 21 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 22 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 23 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
