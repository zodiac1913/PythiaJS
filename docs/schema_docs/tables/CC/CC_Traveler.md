# CC.CC_Traveler

Supporting table in the CC schema related to cc traveler.

## Snapshot

- Schema: CC
- Table: CC_Traveler
- Priority: supporting schema
- Approximate rows: 0
- Primary key: TravelerIdentifier
- Column count: 18

## Inbound Foreign Keys

- FK__CC_Travel__Delet__042F8E1E: CC.CC_TravelExpenseForm via TravelerIdentifier -> TravelerIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | TravelerIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | TravelerName | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 3 | Component | varchar(100) | YES |  |  | Field on CC.CC_Traveler named Component. [inferred] |
| 4 | TravelType | varchar(50) | YES |  |  | Type or category used to classify the record. [inferred] |
| 5 | CityofDestination | varchar(100) | YES |  |  | Field on CC.CC_Traveler named CityofDestination. [inferred] |
| 6 | PurposeofTravel | varchar(255) | YES |  |  | Field on CC.CC_Traveler named PurposeofTravel. [inferred] |
| 7 | AirClassService | varchar(50) | YES |  |  | Field on CC.CC_Traveler named AirClassService. [inferred] |
| 8 | AirfareRailCost | decimal(10,2) | YES |  |  | Numeric value associated with this record. [inferred] |
| 9 | PerDiemCost | decimal(10,2) | YES |  |  | Numeric value associated with this record. [inferred] |
| 10 | ConferenceRegistrationFee | decimal(10,2) | YES |  |  | Numeric value associated with this record. [inferred] |
| 11 | OtherExpenses | decimal(10,2) | YES |  |  | Numeric value associated with this record. [inferred] |
| 12 | TotalEstimatedCost | decimal(10,2) | YES |  |  | Numeric value associated with this record. [inferred] |
| 13 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 14 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 16 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 17 | DeactivateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 18 | DeleteTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
