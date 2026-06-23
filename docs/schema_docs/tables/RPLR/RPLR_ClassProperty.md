# RPLR.RPLR_ClassProperty

Supporting table in the RPLR schema related to rplr class property.

## Snapshot

- Schema: RPLR
- Table: RPLR_ClassProperty
- Priority: supporting schema
- Approximate rows: 40
- Primary key: PropertyIdentifier
- Column count: 33

## Outbound Foreign Keys

- FK_RPLR_ClassProperty_RPLR_Class: RPLR.RPLR_Class via ClassIdentifier -> ClassIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PropertyIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ClassIdentifier | bigint | YES |  |  | Identifier that likely links this record to Class. [inferred] |
| 3 | Name | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | Type | nvarchar(50) | YES |  |  | Type or category used to classify the record. [inferred] |
| 5 | Title | nvarchar(100) | YES |  |  | Field on RPLR.RPLR_ClassProperty named Title. [inferred] |
| 6 | Access | nvarchar(50) | YES |  |  | Field on RPLR.RPLR_ClassProperty named Access. [inferred] |
| 7 | AnnotationsList | nvarchar(max) | YES |  |  | Field on RPLR.RPLR_ClassProperty named AnnotationsList. [inferred] |
| 8 | Documentation | nvarchar(max) | YES |  |  | Field on RPLR.RPLR_ClassProperty named Documentation. [inferred] |
| 9 | FieldName | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 10 | GetInnerCode | nvarchar(max) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 11 | Getter | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 12 | IsKey | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 13 | IsAutoProperty | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 14 | IsNullable | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 15 | IsStatic | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 16 | IsTableConstraint | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 17 | IsVirtual | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 18 | MaxLength | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 19 | MinLength | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 20 | DefaultValue | nvarchar(255) | YES |  |  | Field on RPLR.RPLR_ClassProperty named DefaultValue. [inferred] |
| 21 | RangeHigh | nvarchar(50) | YES |  |  | Field on RPLR.RPLR_ClassProperty named RangeHigh. [inferred] |
| 22 | RangeLow | nvarchar(50) | YES |  |  | Field on RPLR.RPLR_ClassProperty named RangeLow. [inferred] |
| 23 | Region | nvarchar(50) | YES |  |  | Field on RPLR.RPLR_ClassProperty named Region. [inferred] |
| 24 | SetInnerCode | nvarchar(max) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 25 | Setter | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 26 | TableColumn | nvarchar(50) | YES |  |  | Field on RPLR.RPLR_ClassProperty named TableColumn. [inferred] |
| 27 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 28 | AddUserName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 29 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 30 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 31 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 32 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 33 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
