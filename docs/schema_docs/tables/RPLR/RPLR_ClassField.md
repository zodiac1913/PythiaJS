# RPLR.RPLR_ClassField

Supporting table in the RPLR schema related to rplr class field.

## Snapshot

- Schema: RPLR
- Table: RPLR_ClassField
- Priority: supporting schema
- Approximate rows: 28
- Primary key: FieldIdentifier
- Column count: 25

## Outbound Foreign Keys

- FK_RPLR_ClassField_RPLR_ClassClass: RPLR.RPLR_Class via ClassIdentifier -> ClassIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FieldIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ClassIdentifier | bigint | YES |  |  | Identifier that likely links this record to Class. [inferred] |
| 3 | Name | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | Title | nvarchar(100) | YES |  |  | Field on RPLR.RPLR_ClassField named Title. [inferred] |
| 5 | Access | nvarchar(50) | YES |  |  | Field on RPLR.RPLR_ClassField named Access. [inferred] |
| 6 | Type | nvarchar(100) | YES |  |  | Type or category used to classify the record. [inferred] |
| 7 | AnnotationsList | nvarchar(max) | YES |  |  | Field on RPLR.RPLR_ClassField named AnnotationsList. [inferred] |
| 8 | Documentation | nvarchar(max) | YES |  |  | Field on RPLR.RPLR_ClassField named Documentation. [inferred] |
| 9 | IsKey | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 10 | IsConstant | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 11 | IsNullable | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 12 | IsStatic | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 13 | IsTableConstraint | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 14 | MaxLength | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 15 | MinLength | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 16 | Region | nvarchar(50) | YES |  |  | Field on RPLR.RPLR_ClassField named Region. [inferred] |
| 17 | TableColumn | nvarchar(50) | YES |  |  | Field on RPLR.RPLR_ClassField named TableColumn. [inferred] |
| 18 | DefaultValue | nvarchar(255) | YES |  |  | Field on RPLR.RPLR_ClassField named DefaultValue. [inferred] |
| 19 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 20 | AddUserName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 21 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 22 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 23 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 24 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 25 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
