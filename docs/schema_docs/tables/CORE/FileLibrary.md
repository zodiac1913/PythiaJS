# CORE.FileLibrary

Business-critical table in the CORE schema related to file library.

## Snapshot

- Schema: CORE
- Table: FileLibrary
- Priority: primary schema
- Approximate rows: 22
- Primary key: FileLibraryIdentifier
- Column count: 17

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FileLibraryIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FileCategory | nvarchar(50) | NO |  |  | Field on CORE.FileLibrary named FileCategory. [inferred] |
| 3 | DeleteOnDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 4 | FileSubcategory | nvarchar(50) | YES |  |  | Field on CORE.FileLibrary named FileSubcategory. [inferred] |
| 5 | OriginalFileName | nvarchar(150) | NO |  |  | Name or display label for this value. [inferred] |
| 6 | SaveFileName | nvarchar(255) | NO |  |  | Name or display label for this value. [inferred] |
| 7 | FileLocation | nvarchar(255) | NO |  |  | Field on CORE.FileLibrary named FileLocation. [inferred] |
| 8 | FileDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 9 | FileSize | decimal(18,0) | NO |  |  | Numeric value associated with this record. [inferred] |
| 10 | FileType | nvarchar(5) | YES |  |  | Type or category used to classify the record. [inferred] |
| 11 | TaskDefinitionIdentifier | bigint | YES |  |  | Identifier that likely links this record to TaskDefinition. [inferred] |
| 12 | ThreadIdentifier | bigint | YES |  |  | Identifier that likely links this record to Thread. [inferred] |
| 13 | IsPublic | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 14 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 15 | AddTimeStamp | datetime | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 16 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 17 | LastUpdateTimeStamp | datetime | NO |  |  | Date and time associated with this attribute or event. [inferred] |
