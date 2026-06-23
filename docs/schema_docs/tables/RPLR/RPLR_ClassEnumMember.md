# RPLR.RPLR_ClassEnumMember

Supporting table in the RPLR schema related to rplr class enum member.

## Snapshot

- Schema: RPLR
- Table: RPLR_ClassEnumMember
- Priority: supporting schema
- Approximate rows: 8
- Primary key: EnumMemberIdentifier
- Column count: 13

## Outbound Foreign Keys

- FK_RPLR_ClassEnumMember_RPLR_ClassEnum: RPLR.RPLR_ClassEnum via EnumIdentifier -> EnumIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | EnumMemberIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EnumIdentifier | bigint | YES |  |  | Identifier that likely links this record to Enum. [inferred] |
| 3 | AnnotationsList | nvarchar(max) | YES |  |  | Field on RPLR.RPLR_ClassEnumMember named AnnotationsList. [inferred] |
| 4 | Documentation | nvarchar(max) | YES |  |  | Field on RPLR.RPLR_ClassEnumMember named Documentation. [inferred] |
| 5 | Name | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | Value | nvarchar(100) | YES |  |  | Field on RPLR.RPLR_ClassEnumMember named Value. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddUserName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 9 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
