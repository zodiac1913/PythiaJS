# HR.HR_PayPeriodTMP

Business-critical table in the HR schema related to hr pay period tmp.

## Snapshot

- Schema: HR
- Table: HR_PayPeriodTMP
- Priority: primary schema
- Approximate rows: 1297
- Primary key: PayPeriodIdentifier
- Column count: 15

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PayPeriodIdentifier | bigint | NO | PK |  | Primary key identifier for this record. [inferred] |
| 2 | PayPeriodStartDate | datetime2(0) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 3 | PayPeriodEndDate | datetime2(0) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 4 | PayPeriodCalendarYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 5 | PayPeriodFiscalYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 6 | IsCurrent | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 7 | IsGenerated | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 8 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | PayrollYear | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 14 | PayPeriodNumber | nvarchar(2) | YES |  |  | Number used to identify or track this record. [inferred] |
| 15 | PayPeriodName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
