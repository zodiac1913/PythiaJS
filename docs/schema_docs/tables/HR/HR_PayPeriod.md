# HR.HR_PayPeriod

Reference table for pay-period identifiers and date windows used across HR data.

## Snapshot

- Schema: HR
- Table: HR_PayPeriod
- Priority: primary schema
- Approximate rows: 1297
- Primary key: PayPeriodIdentifier
- Column count: 15

## Usage Notes

- Reference table for pay-period windows and identifiers.
- Use this table to translate pay period identifiers into start and end dates or to anchor time-based HR queries.
- IsCurrent and PayPeriodNumber are especially useful when the question refers to the current pay period or a numbered pay cycle.

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PayPeriodIdentifier | bigint | NO | PK, IDENTITY |  | Primary key for the pay-period record. [inferred] |
| 2 | PayPeriodStartDate | datetime2(0) | NO |  |  | Start date of the pay period. [inferred] |
| 3 | PayPeriodEndDate | datetime2(0) | NO |  |  | End date of the pay period. [inferred] |
| 4 | PayPeriodCalendarYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 5 | PayPeriodFiscalYear | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 6 | IsCurrent | bit | YES |  |  | Indicates whether this record is the current pay period. [inferred] |
| 7 | IsGenerated | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 8 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | PayrollYear | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 14 | PayPeriodNumber | nvarchar(2) | YES |  |  | Short pay-period number used in payroll and scheduling references. [inferred] |
| 15 | PayPeriodName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
