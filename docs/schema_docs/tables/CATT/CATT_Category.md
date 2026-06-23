# CATT.CATT_Category

Supporting table in the CATT schema related to catt category.

## Snapshot

- Schema: CATT
- Table: CATT_Category
- Priority: supporting schema
- Approximate rows: 18
- Primary key: CategoryIdentifier
- Column count: 9

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CategoryIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | CategoryName | nvarchar(max) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | CategoryComponent | nvarchar(10) | YES |  |  | Field on CATT.CATT_Category named CategoryComponent. [inferred] |
| 4 | DeactivateTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 5 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 6 | AddTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 8 | LastUpdateTimeStamp | datetime2(2) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | DeleteTimeStamp | datetime2(2) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
