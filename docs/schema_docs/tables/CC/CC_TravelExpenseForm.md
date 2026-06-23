# CC.CC_TravelExpenseForm

Supporting table in the CC schema related to cc travel expense form.

## Snapshot

- Schema: CC
- Table: CC_TravelExpenseForm
- Priority: supporting schema
- Approximate rows: 0
- Primary key: TravelExpenseFormIdentifier
- Column count: 16

## Outbound Foreign Keys

- FK__CC_Travel__Appro__0523B257: CC.CC_ApprovalRequestForm via ApprovalRequestFormIdentifier -> ApprovalRequestFormIdentifier
- FK__CC_Travel__Delet__042F8E1E: CC.CC_Traveler via TravelerIdentifier -> TravelerIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | TravelExpenseFormIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | TravelerIdentifier | bigint | YES |  |  | Identifier that likely links this record to Traveler. [inferred] |
| 3 | EventName | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | EventLocation | varchar(100) | YES |  |  | Field on CC.CC_TravelExpenseForm named EventLocation. [inferred] |
| 5 | EventStartDate | date | YES |  |  | Date associated with this attribute or event. [inferred] |
| 6 | EventEndDate | date | YES |  |  | Date associated with this attribute or event. [inferred] |
| 7 | ExpenseDate | date | YES |  |  | Date associated with this attribute or event. [inferred] |
| 8 | Amount | decimal(10,2) | YES |  |  | Numeric value associated with this record. [inferred] |
| 9 | ApprovalRequestFormIdentifier | bigint | YES |  |  | Identifier that likely links this record to ApprovalRequestForm. [inferred] |
| 10 | Description | varchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 11 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 12 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 14 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | DeactivateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 16 | DeleteTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
