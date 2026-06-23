# PMAP2.PMAP2_Award

Supporting table in the PMAP2 schema related to pmap2 award.

## Snapshot

- Schema: PMAP2
- Table: PMAP2_Award
- Priority: supporting schema
- Approximate rows: 35387
- Primary key: AwardIdentifier
- Column count: 43

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AwardIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AdministrativeCode | varchar(11) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | OfficeAcronym | varchar(10) | YES |  |  | Short acronym or abbreviation used to identify this value. [inferred] |
| 4 | OfficeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Office. [inferred] |
| 5 | LastFirstName | varchar(62) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | CommonAccountingNumber | varchar(255) | YES |  |  | Number used to identify or track this record. [inferred] |
| 7 | PersonnelNumber | varchar(15) | YES |  |  | Number used to identify or track this record. [inferred] |
| 8 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 9 | WorkSchedule | varchar(12) | YES |  |  | Field on PMAP2.PMAP2_Award named WorkSchedule. [inferred] |
| 10 | IsManager | varchar(3) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 11 | PayPlan | varchar(255) | YES |  |  | Field on PMAP2.PMAP2_Award named PayPlan. [inferred] |
| 12 | JobSeries | varchar(255) | YES |  |  | Field on PMAP2.PMAP2_Award named JobSeries. [inferred] |
| 13 | Grade | varchar(255) | YES |  |  | Field on PMAP2.PMAP2_Award named Grade. [inferred] |
| 14 | Step | varchar(255) | YES |  |  | Field on PMAP2.PMAP2_Award named Step. [inferred] |
| 15 | TotalSalary | numeric(22,8) | YES |  |  | Field on PMAP2.PMAP2_Award named TotalSalary. [inferred] |
| 16 | HourlyRate | numeric(16,7) | YES |  |  | Field on PMAP2.PMAP2_Award named HourlyRate. [inferred] |
| 17 | LastWigiDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 18 | RatingCode | varchar(2) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 19 | RatingDescription | numeric(3,2) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 20 | QsiAmount | numeric(7,2) | YES |  |  | Field on PMAP2.PMAP2_Award named QsiAmount. [inferred] |
| 21 | QsiJustification | varchar(4000) | YES |  |  | Field on PMAP2.PMAP2_Award named QsiJustification. [inferred] |
| 22 | AwardPercentage | numeric(5,4) | YES |  |  | Field on PMAP2.PMAP2_Award named AwardPercentage. [inferred] |
| 23 | TotalAward | numeric(10,5) | YES |  |  | Field on PMAP2.PMAP2_Award named TotalAward. [inferred] |
| 24 | TimeOffHours | numeric(7,2) | YES |  |  | Field on PMAP2.PMAP2_Award named TimeOffHours. [inferred] |
| 25 | TimeOffValue | numeric(10,5) | YES |  |  | Field on PMAP2.PMAP2_Award named TimeOffValue. [inferred] |
| 26 | CashValue | numeric(10,5) | YES |  |  | Field on PMAP2.PMAP2_Award named CashValue. [inferred] |
| 27 | LastQsiDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 28 | HoldAwardPayout | numeric(7,2) | YES |  |  | Field on PMAP2.PMAP2_Award named HoldAwardPayout. [inferred] |
| 29 | NonCompetitivePromotionDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 30 | CompetitivePromotionDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 31 | BaseHourQuantity | numeric(6,2) | YES |  |  | Field on PMAP2.PMAP2_Award named BaseHourQuantity. [inferred] |
| 32 | AppraisalYear | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 33 | PayPeriodIdentifier | bigint | YES |  |  | Identifier that likely links this record to PayPeriod. [inferred] |
| 34 | PlanIdentifier | bigint | YES |  |  | Identifier that likely links this record to Plan. [inferred] |
| 35 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 36 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 37 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 38 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 39 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 40 | QsiAcceptedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 41 | ItoCATSProcessedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 42 | PerformanceCATSProcessedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 44 | PerformanceJustification | varchar(max) | YES |  |  | Field on PMAP2.PMAP2_Award named PerformanceJustification. [inferred] |
