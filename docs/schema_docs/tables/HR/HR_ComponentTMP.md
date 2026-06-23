# HR.HR_ComponentTMP

Business-critical table in the HR schema related to hr component tmp.

## Snapshot

- Schema: HR
- Table: HR_ComponentTMP
- Priority: primary schema
- Approximate rows: 2182
- Primary key: ComponentIdentifier
- Column count: 36

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ComponentIdentifier | bigint | NO | PK |  | Primary key identifier for this record. [inferred] |
| 2 | ParentComponentIdentifier | bigint | YES |  |  | Identifier that likely links this record to ParentComponent. [inferred] |
| 3 | PayPeriodIdentifier | bigint | YES |  |  | Identifier that likely links this record to PayPeriod. [inferred] |
| 4 | PayPeriodStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | PayPeriodEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 6 | AdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 7 | ComponentAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 8 | ComponentName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 9 | ComponentEffectiveDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 10 | ComponentMasterDeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 12 | OfficeAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 13 | OfficeAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 14 | OfficeName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 15 | GroupIdentifier | bigint | YES |  |  | Identifier that likely links this record to Group. [inferred] |
| 16 | GroupAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 17 | GroupAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 18 | GroupName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 19 | DivisionIdentifier | bigint | YES |  |  | Identifier that likely links this record to Division. [inferred] |
| 20 | DivisionAdminCode | nvarchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 21 | DivisionAcronym | nvarchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 22 | DivisionName | nvarchar(60) | YES |  |  | Name or display label for this value. [inferred] |
| 23 | CanIdentifier | int | YES |  |  | Identifier that likely links this record to Can. [inferred] |
| 24 | CanCode | nvarchar(255) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 25 | CanDescription | nvarchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 26 | GsaIdentifier | int | YES |  |  | Identifier that likely links this record to Gsa. [inferred] |
| 27 | GsaCode | nvarchar(255) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 28 | GsaDescription | nvarchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 29 | Level | nvarchar(50) | YES |  |  | Level or tier used to classify this record within a hierarchy. [inferred] |
| 30 | IsHr | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 31 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 32 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 33 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 34 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 35 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 36 | BusKey | nvarchar(10) | YES |  |  | Field on HR.HR_ComponentTMP named BusKey. [inferred] |
