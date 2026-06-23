# DOA.DOA_Authority

Supporting table in the DOA schema related to doa authority.

## Snapshot

- Schema: DOA
- Table: DOA_Authority
- Priority: supporting schema
- Approximate rows: 1227
- Primary key: AuthorityIdentifier
- Column count: 24

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AuthorityIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AuthorityTypeIdentifier | bigint | YES |  |  | Identifier that likely links this record to AuthorityType. [inferred] |
| 3 | AuthorityType | nvarchar(255) | YES |  |  | Type or category used to classify the record. [inferred] |
| 4 | TopicAreaIdentifier | bigint | YES |  |  | Identifier that likely links this record to TopicArea. [inferred] |
| 5 | TopicArea | nvarchar(255) | YES |  |  | Field on DOA.DOA_Authority named TopicArea. [inferred] |
| 6 | ProgrammaticSection | nvarchar(255) | YES |  |  | Field on DOA.DOA_Authority named ProgrammaticSection. [inferred] |
| 7 | ComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to Component. [inferred] |
| 8 | ComponentAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 9 | Description | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 10 | LowestLevelDelegatees | nvarchar(max) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 11 | Limitations | nvarchar(max) | YES |  |  | Field on DOA.DOA_Authority named Limitations. [inferred] |
| 12 | ApprovalDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 13 | ApprovalAuthority | nvarchar(255) | YES |  |  | Field on DOA.DOA_Authority named ApprovalAuthority. [inferred] |
| 14 | LegalAuthority | nvarchar(255) | YES |  |  | Field on DOA.DOA_Authority named LegalAuthority. [inferred] |
| 15 | ReviewedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 16 | PackageLink | nvarchar(255) | YES |  |  | Field on DOA.DOA_Authority named PackageLink. [inferred] |
| 17 | PackageTitle | nvarchar(255) | YES |  |  | Field on DOA.DOA_Authority named PackageTitle. [inferred] |
| 18 | AuthorityLink | nvarchar(255) | YES |  |  | Field on DOA.DOA_Authority named AuthorityLink. [inferred] |
| 19 | AuthorityTitle | nvarchar(255) | YES |  |  | Field on DOA.DOA_Authority named AuthorityTitle. [inferred] |
| 20 | ComponentUpdatedTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 21 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 22 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 23 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 24 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
