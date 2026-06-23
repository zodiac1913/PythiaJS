# HR.HR_BuildingTMP

Business-critical table in the HR schema related to hr building tmp.

## Snapshot

- Schema: HR
- Table: HR_BuildingTMP
- Priority: primary schema
- Approximate rows: 21
- Primary key: BuildingIdentifier
- Column count: 13

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | BuildingIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | BuildingName | nvarchar(40) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | Street | nvarchar(40) | YES |  |  | Field on HR.HR_BuildingTMP named Street. [inferred] |
| 4 | City | nvarchar(30) | YES |  |  | Field on HR.HR_BuildingTMP named City. [inferred] |
| 5 | State | nvarchar(2) | YES |  |  | Field on HR.HR_BuildingTMP named State. [inferred] |
| 6 | ZipCode | nvarchar(9) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 7 | BuildingLatitude | numeric(17,14) | YES |  |  | Field on HR.HR_BuildingTMP named BuildingLatitude. [inferred] |
| 8 | BuildingLongitude | numeric(17,14) | YES |  |  | Field on HR.HR_BuildingTMP named BuildingLongitude. [inferred] |
| 9 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 11 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 13 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
