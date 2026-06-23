# HR.HR_ComponentHistoryTMP

Business-critical table in the HR schema related to hr component history tmp.

## Snapshot

- Schema: HR
- Table: HR_ComponentHistoryTMP
- Priority: primary schema
- Approximate rows: 334896
- Primary key: ComponentHistoryIdentifier
- Column count: 37

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ComponentHistoryIdentifier | bigint | NO | PK |  | Primary key identifier for this record. [inferred] |
| 2 | ComponentIdentifier | bigint | NO |  |  | Identifier that likely links this record to Component. [inferred] |
| 3 | ParentComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to ParentComponent. [inferred] |
| 4 | PayPeriodIdentifier | bigint | YES |  |  | Identifier that likely links this record to PayPeriod. [inferred] |
| 5 | PayPeriodStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 6 | PayPeriodEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 7 | AdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 8 | ComponentAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 9 | ComponentName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 10 | ComponentEffectiveDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 11 | ComponentMasterDeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 13 | OfficeAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 14 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 15 | OfficeName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 16 | GroupIdentifier | bigint | YES |  |  | Identifier that likely links this record to Group. [inferred] |
| 17 | GroupAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 18 | GroupAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 19 | GroupName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 20 | DivisionIdentifier | bigint | YES |  |  | Identifier that likely links this record to Division. [inferred] |
| 21 | DivisionAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 22 | DivisionAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 23 | DivisionName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 24 | CanIdentifier | int | YES |  |  | Identifier that likely links this record to Can. [inferred] |
| 25 | CanCode | nvarchar(255) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 26 | CanDescription | nvarchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 27 | GsaIdentifier | int | YES |  |  | Identifier that likely links this record to Gsa. [inferred] |
| 28 | GsaCode | nvarchar(255) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 29 | GsaDescription | nvarchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 30 | Level | nvarchar(50) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 31 | IsHr | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 32 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 33 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 34 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 35 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 36 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 37 | BusKey | nvarchar(10) | YES |  |  | Field on HR.HR_ComponentHistoryTMP named BusKey. [inferred] |
