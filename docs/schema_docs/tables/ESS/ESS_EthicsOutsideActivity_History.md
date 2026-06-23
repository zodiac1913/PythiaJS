# ESS.ESS_EthicsOutsideActivity_History

Supporting table in the ESS schema related to ess ethics outside activity history.

## Snapshot

- Schema: ESS
- Table: ESS_EthicsOutsideActivity_History
- Priority: supporting schema
- Approximate rows: 5
- Primary key: OustideActivityIdentifier
- Column count: 85

## Outbound Foreign Keys

- FK__ESS_Ethic__Ethic__4807C5B9: ESS.ESS_EthicsForm via EthicsFormIdentifier -> EthicsFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | OustideActivityIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | OrganizationName | varchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | OrganizationType | varchar(255) | YES |  |  | Type or category used to classify the record. [inferred] |
| 5 | PositionName | varchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | isNoLongerHeld | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 7 | NoLongerHeldDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 8 | ActivityType | varchar(50) | YES |  |  | Type or category used to classify the record. [inferred] |
| 9 | isSelfEmployedActivity | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 10 | SelfEmployedDescription | varchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 11 | ActivityMaterialUsed | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named ActivityMaterialUsed. [inferred] |
| 12 | ActivityMaterialExplained | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named ActivityMaterialExplained. [inferred] |
| 13 | OutsideEntityName | varchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 14 | ContactName | varchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 15 | ContactTitle | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named ContactTitle. [inferred] |
| 16 | OutsideEntityAddress | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named OutsideEntityAddress. [inferred] |
| 17 | OutsideEntityCity | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named OutsideEntityCity. [inferred] |
| 18 | OutsideEntityState | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named OutsideEntityState. [inferred] |
| 19 | OutsideEntityZipCode | varchar(50) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 20 | ContactPhone | varchar(12) | YES |  |  | Phone number related to this record. [inferred] |
| 21 | ContactFax | varchar(12) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named ContactFax. [inferred] |
| 22 | ContactCellPhone | varchar(12) | YES |  |  | Phone number related to this record. [inferred] |
| 23 | ContactEmail | varchar(50) | YES |  |  | Email address related to this record. [inferred] |
| 24 | OutsideEntityLocation | varchar(255) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named OutsideEntityLocation. [inferred] |
| 25 | DescribeTravel | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named DescribeTravel. [inferred] |
| 26 | TravelProvided | varchar(5) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named TravelProvided. [inferred] |
| 27 | EstimatedTravelAmount | numeric(8,2) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named EstimatedTravelAmount. [inferred] |
| 28 | PeriodCoverFromDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 29 | PeriodCoveredToDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 30 | HoursPerDay | varchar(2) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named HoursPerDay. [inferred] |
| 31 | DayPerWeek | varchar(1) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named DayPerWeek. [inferred] |
| 32 | WeeksPerYear | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 33 | OutsideWorkingHours | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 34 | ActivityCompensation | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named ActivityCompensation. [inferred] |
| 35 | CompensationTypes | varchar(255) | YES |  |  | Type or category used to classify the record. [inferred] |
| 36 | CompensationAmount | numeric(8,2) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named CompensationAmount. [inferred] |
| 37 | Payor | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named Payor. [inferred] |
| 38 | isFundingSource | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 39 | FundingSourceDescription | varchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 40 | isGranteeContractorOther | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 41 | GranteeContractorOtherDescription | varchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 42 | ApprovalDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 43 | isActivityPerformed | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 44 | BeginningDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 45 | ServiceDate | varchar(4000) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 46 | HoursSpent | varchar(4) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named HoursSpent. [inferred] |
| 47 | LeaveUsed | varchar(5) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named LeaveUsed. [inferred] |
| 48 | EndingDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 49 | DatePaid | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named DatePaid. [inferred] |
| 50 | DatePaymentDue | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named DatePaymentDue. [inferred] |
| 51 | AddUserIdentifier | numeric(12,0) | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 52 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 53 | LastUpdateUserIdentifier | numeric(12,0) | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 54 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 55 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 56 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 57 | isReviewEdit | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 58 | OutsidePositionComment | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named OutsidePositionComment. [inferred] |
| 59 | OtherActivityType | varchar(255) | YES |  |  | Type or category used to classify the record. [inferred] |
| 60 | isSubjectMatterofActivity | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 61 | isTextofDisclaimer | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 62 | isTravel | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 63 | isAtOwnExpense | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 64 | isInKindorReimbursed | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 65 | DaysPerWeek | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 66 | HoursPerWeek | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 67 | NumberOfHoursOrDays | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 68 | isCompensated | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 69 | DescribeCompensation | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named DescribeCompensation. [inferred] |
| 70 | isPriorCompensation | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 71 | HHS520FromIdentifier | bigint | YES |  |  | Identifier that likely links this record to HHS520From. [inferred] |
| 72 | OGE450FromIdentifier | bigint | YES |  |  | Identifier that likely links this record to OGE450From. [inferred] |
| 73 | OutsideActivity450Identifier | bigint | YES |  |  | Identifier that likely links this record to OutsideActivity450. [inferred] |
| 74 | HoursOrDays | varchar(5) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named HoursOrDays. [inferred] |
| 75 | AdditionalSpace | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named AdditionalSpace. [inferred] |
| 76 | PreviousOutsideActivities | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named PreviousOutsideActivities. [inferred] |
| 77 | IncomeReimbursementTypePaid | varchar(50) | YES |  |  | Type or category used to classify the record. [inferred] |
| 78 | IncomeReimbursementTypeDue | varchar(50) | YES |  |  | Type or category used to classify the record. [inferred] |
| 79 | AmountDue | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named AmountDue. [inferred] |
| 80 | AmountPaid | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named AmountPaid. [inferred] |
| 81 | isRenewalAnticpated | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 82 | isPaymentDue | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 83 | isPaymentReceived | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 84 | EthicsFormIdentifier | bigint | YES |  |  | Identifier that likely links this record to EthicsForm. [inferred] |
| 85 | TotalLeaveUsed | varchar(15) | YES |  |  | Field on ESS.ESS_EthicsOutsideActivity_History named TotalLeaveUsed. [inferred] |
