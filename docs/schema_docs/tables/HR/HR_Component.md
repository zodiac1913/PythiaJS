# HR.HR_Component

Primary organizational component table. Components can represent divisions, groups, and offices or centers depending on the Level value.

## Snapshot

- Schema: HR
- Table: HR_Component
- Priority: high
- Approximate rows: 2182
- Primary key: ComponentIdentifier
- Column count: 36

## Usage Notes

- Use ComponentAcronym and AdminCode as common search handles when a user refers to an office, center, group, or division by shorthand.
- This table is primarily for resolving organizational context and hierarchy, not for replacing HR.HR_Employee as the main employee data source.
- Level indicates what kind of component a record represents and should be used to distinguish divisions, groups, and offices or centers.
- Once the component is identified here, the AI can usually return to HR.HR_Employee to find employee records for that division, group, office, or center.
- ParentComponentIdentifier expresses rollup hierarchy even when the database does not expose it as a formal foreign key.

## Conventional Joins

- Self-join ParentComponentIdentifier to ComponentIdentifier to traverse org hierarchy.
- Use ComponentAcronym or AdminCode to resolve user-provided component references before analyzing Level or parent-child rollups.
- After the component is resolved here, use HR.HR_Employee as the main table to retrieve employee records for that organization slice.

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ComponentIdentifier | bigint | NO | PK |  | Primary key for the organizational component. [inferred] |
| 2 | ParentComponentIdentifier | bigint | YES |  |  | Identifier of the parent component used to build the organizational hierarchy. [inferred] |
| 3 | PayPeriodIdentifier | bigint | YES |  |  | Identifier that likely links this record to PayPeriod. [inferred] |
| 4 | PayPeriodStartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | PayPeriodEndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 6 | AdminCode | nvarchar(11) | YES |  |  | Administrative code used to identify the component. [inferred] |
| 7 | ComponentAcronym | nvarchar(10) | YES |  |  | Short acronym users are likely to search for when asking about a component. [inferred] |
| 8 | ComponentName | nvarchar(60) | YES |  |  | Display name of the component. [inferred] |
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
| 29 | Level | nvarchar(50) | YES |  |  | Component classification level that distinguishes divisions, groups, and offices or centers. [inferred] |
| 30 | IsHr | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 31 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 32 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 33 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 34 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 35 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 36 | BusKey | nvarchar(10) | YES |  |  | Field on HR.HR_Component named BusKey. [inferred] |
