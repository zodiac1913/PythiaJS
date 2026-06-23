# ERC.ERC_Mission

Supporting table in the ERC schema related to erc mission.

## Snapshot

- Schema: ERC
- Table: ERC_Mission
- Priority: supporting schema
- Approximate rows: 10
- Primary key: MissionIdentifier
- Column count: 13

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | MissionIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | MissionName | nvarchar(300) | YES |  |  | Name or display label for this value. [inferred] |
| 3 | MissionDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 4 | MissionLocation | nvarchar(300) | YES |  |  | Field on ERC.ERC_Mission named MissionLocation. [inferred] |
| 5 | MissionYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 6 | StartDate | datetime2(0) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 7 | EndDate | datetime2(0) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 8 | SupportingIaaNumber | nvarchar(100) | YES |  |  | Number used to identify or track this record. [inferred] |
| 9 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 11 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 13 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
