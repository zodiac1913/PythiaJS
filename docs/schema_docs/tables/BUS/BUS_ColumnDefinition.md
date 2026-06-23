# BUS.BUS_ColumnDefinition

Supporting table in the BUS schema related to bus column definition.

## Snapshot

- Schema: BUS
- Table: BUS_ColumnDefinition
- Priority: supporting schema
- Approximate rows: 189
- Primary key: ColumnDefinitionIdentifier
- Column count: 29

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ColumnDefinitionIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ColumnName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | ColumnDescription | nvarchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 4 | InComponent | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 5 | ComponentDescription | nvarchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 6 | ComponentType | nvarchar(100) | YES |  |  | Type or category used to classify the record. [inferred] |
| 7 | ComponentSize | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 8 | InComponentHistory | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 9 | ComponentHistoryDescription | nvarchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 10 | ComponentHistoryType | nvarchar(100) | YES |  |  | Type or category used to classify the record. [inferred] |
| 11 | ComponentHistorySize | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 12 | InEmployee | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 13 | EmployeeDescription | nvarchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 14 | EmployeeType | nvarchar(100) | YES |  |  | Type or category used to classify the record. [inferred] |
| 15 | EmployeeSize | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 16 | InEmployeeHistory | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 17 | EmployeeHistoryDescription | nvarchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 18 | EmployeeHistoryType | nvarchar(100) | YES |  |  | Type or category used to classify the record. [inferred] |
| 19 | EmployeeHistorySize | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 20 | InPersonnelAction | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 21 | PersonnelActionDescription | nvarchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 22 | PersonnelActionType | nvarchar(100) | YES |  |  | Type or category used to classify the record. [inferred] |
| 23 | PersonnelActionSize | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 24 | TypesMatch | bit | YES |  |  | Type or category used to classify the record. [inferred] |
| 25 | SizesMatch | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 26 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 27 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 28 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 29 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
