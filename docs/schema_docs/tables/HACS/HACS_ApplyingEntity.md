# HACS.HACS_ApplyingEntity

Supporting table in the HACS schema related to hacs applying entity.

## Snapshot

- Schema: HACS
- Table: HACS_ApplyingEntity
- Priority: supporting schema
- Approximate rows: 34
- Primary key: ApplyingEntityIdentifier
- Column count: 25

## Outbound Foreign Keys

- FK_ApplyingEntity_Application: HACS.HACS_Application via ApplicationIdentifier -> ApplicationIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ApplyingEntityIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | IsNominator | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 3 | IsApplicant | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 4 | DisplayName | nvarchar(400) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | LastName | nvarchar(200) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | FirstName | nvarchar(200) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | MiddleName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 8 | Email | nvarchar(200) | YES |  |  | Email address related to this record. [inferred] |
| 9 | Phone | nvarchar(200) | YES |  |  | Phone number related to this record. [inferred] |
| 10 | IsSge | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 11 | IsRepresentative | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 12 | Street | nvarchar(200) | YES |  |  | Field on HACS.HACS_ApplyingEntity named Street. [inferred] |
| 13 | City | nvarchar(200) | YES |  |  | Field on HACS.HACS_ApplyingEntity named City. [inferred] |
| 14 | State | nvarchar(200) | YES |  |  | Field on HACS.HACS_ApplyingEntity named State. [inferred] |
| 15 | ZipCode | nvarchar(200) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 16 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 17 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 18 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 19 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 20 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 21 | ApplicationIdentifier | bigint | YES |  |  | Identifier that likely links this record to Application. [inferred] |
| 22 | Remarks | nvarchar(1000) | YES |  |  | Field on HACS.HACS_ApplyingEntity named Remarks. [inferred] |
| 23 | NominatorType | nvarchar(200) | YES |  |  | Type or category used to classify the record. [inferred] |
| 24 | NominatorOrganization | nvarchar(400) | YES |  |  | Field on HACS.HACS_ApplyingEntity named NominatorOrganization. [inferred] |
| 25 | IsRecommender | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
