# RPLR.RPLR_ClassEnum

Supporting table in the RPLR schema related to rplr class enum.

## Snapshot

- Schema: RPLR
- Table: RPLR_ClassEnum
- Priority: supporting schema
- Approximate rows: 3
- Primary key: EnumIdentifier
- Column count: 15

## Outbound Foreign Keys

- FK_RPLR_ClassEnum_RPLR_Class: RPLR.RPLR_Class via ClassIdentifier -> ClassIdentifier

## Inbound Foreign Keys

- FK_RPLR_ClassEnumMember_RPLR_ClassEnum: RPLR.RPLR_ClassEnumMember via EnumIdentifier -> EnumIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | EnumIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Access | nvarchar(50) | YES |  |  | Field on RPLR.RPLR_ClassEnum named Access. [inferred] |
| 3 | AnnotationsList | nvarchar(max) | YES |  |  | Field on RPLR.RPLR_ClassEnum named AnnotationsList. [inferred] |
| 4 | Documentation | nvarchar(max) | YES |  |  | Field on RPLR.RPLR_ClassEnum named Documentation. [inferred] |
| 5 | Name | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | Type | nvarchar(100) | YES |  |  | Type or category used to classify the record. [inferred] |
| 7 | Region | nvarchar(50) | YES |  |  | Field on RPLR.RPLR_ClassEnum named Region. [inferred] |
| 8 | ClassIdentifier | bigint | YES |  |  | Identifier that likely links this record to Class. [inferred] |
| 9 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddUserName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 11 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 13 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
