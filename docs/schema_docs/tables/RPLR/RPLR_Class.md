# RPLR.RPLR_Class

Supporting table in the RPLR schema related to rplr class.

## Snapshot

- Schema: RPLR
- Table: RPLR_Class
- Priority: supporting schema
- Approximate rows: 8
- Primary key: ClassIdentifier
- Column count: 31

## Inbound Foreign Keys

- FK_RPLR_ClassEnum_RPLR_Class: RPLR.RPLR_ClassEnum via ClassIdentifier -> ClassIdentifier
- FK_RPLR_ClassField_RPLR_ClassClass: RPLR.RPLR_ClassField via ClassIdentifier -> ClassIdentifier
- FK_RPLR_ClassMethod_RPLR_Class: RPLR.RPLR_ClassMethod via ClassIdentifier -> ClassIdentifier
- FK_RPLR_ClassProperty_RPLR_Class: RPLR.RPLR_ClassProperty via ClassIdentifier -> ClassIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ClassIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | SuperClass | nvarchar(255) | YES |  |  | Field on RPLR.RPLR_Class named SuperClass. [inferred] |
| 3 | ParentIdentifier | bigint | YES |  |  | Identifier that likely links this record to Parent. [inferred] |
| 4 | ParentName | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | ParentType | nvarchar(100) | YES |  |  | Type or category used to classify the record. [inferred] |
| 6 | ProjectIdentifier | bigint | YES |  |  | Identifier that likely links this record to Project. [inferred] |
| 7 | ProjectName | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 8 | TableIdentifier | bigint | YES |  |  | Identifier that likely links this record to Table. [inferred] |
| 9 | TableSchema | nvarchar(255) | YES |  |  | Field on RPLR.RPLR_Class named TableSchema. [inferred] |
| 10 | TableName | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 11 | Name | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 12 | TypeOfClass | nvarchar(50) | YES |  |  | Type or category used to classify the record. [inferred] |
| 13 | ModelSource | nvarchar(50) | YES |  |  | Field on RPLR.RPLR_Class named ModelSource. [inferred] |
| 14 | DataName | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 15 | Access | nvarchar(50) | YES |  |  | Field on RPLR.RPLR_Class named Access. [inferred] |
| 16 | AnnotationsList | nvarchar(max) | YES |  |  | Field on RPLR.RPLR_Class named AnnotationsList. [inferred] |
| 17 | DirectivesList | nvarchar(max) | YES |  |  | Field on RPLR.RPLR_Class named DirectivesList. [inferred] |
| 18 | Documentation | nvarchar(max) | YES |  |  | Field on RPLR.RPLR_Class named Documentation. [inferred] |
| 19 | IsPartial | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 20 | IsStatic | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 21 | NameSpace | nvarchar(255) | YES |  |  | Field on RPLR.RPLR_Class named NameSpace. [inferred] |
| 22 | InnerCode | nvarchar(max) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 23 | Language | nvarchar(50) | YES |  |  | Field on RPLR.RPLR_Class named Language. [inferred] |
| 24 | AdditionalConfig | varchar(max) | YES |  |  | Field on RPLR.RPLR_Class named AdditionalConfig. [inferred] |
| 25 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 26 | AddUserName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 27 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 28 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 29 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 30 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 31 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
