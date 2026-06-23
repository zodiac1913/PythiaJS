# CC.CC_ApprovalRequestForm

Supporting table in the CC schema related to cc approval request form.

## Snapshot

- Schema: CC
- Table: CC_ApprovalRequestForm
- Priority: supporting schema
- Approximate rows: 0
- Primary key: ApprovalRequestFormIdentifier
- Column count: 73

## Inbound Foreign Keys

- FK__CC_Travel__Appro__0523B257: CC.CC_TravelExpenseForm via ApprovalRequestFormIdentifier -> ApprovalRequestFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ApprovalRequestFormIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Component | varchar(100) | YES |  |  | Field on CC.CC_ApprovalRequestForm named Component. [inferred] |
| 3 | ConferenceType | varchar(50) | YES |  |  | Type or category used to classify the record. [inferred] |
| 4 | ConferenceTitle | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named ConferenceTitle. [inferred] |
| 5 | ConferencePurpose | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named ConferencePurpose. [inferred] |
| 6 | CmsMissionExplained | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named CmsMissionExplained. [inferred] |
| 7 | ConferenceDates | date | YES |  |  | Temporal field associated with this record. [inferred] |
| 8 | CityofConference | varchar(100) | YES |  |  | Field on CC.CC_ApprovalRequestForm named CityofConference. [inferred] |
| 9 | StateorCountryofConference | varchar(100) | YES |  |  | Field on CC.CC_ApprovalRequestForm named StateorCountryofConference. [inferred] |
| 10 | EarlyRegistrationDeadline | date | YES |  |  | Temporal field associated with this record. [inferred] |
| 11 | ConferenceWebsite | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named ConferenceWebsite. [inferred] |
| 12 | NonCmsSponsoredEstimatedTotalCost | decimal(10,2) | YES |  |  | Numeric value associated with this record. [inferred] |
| 13 | NumberofAttendeesRequested | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 14 | NonCmsCostPerAttendee | decimal(10,2) | YES |  |  | Numeric value associated with this record. [inferred] |
| 15 | SpeakerOrAttendee | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named SpeakerOrAttendee. [inferred] |
| 16 | RegistrationFees | decimal(10,2) | YES |  |  | Numeric value associated with this record. [inferred] |
| 17 | TravelCosts | decimal(10,2) | YES |  |  | Numeric value associated with this record. [inferred] |
| 18 | OtherCosts | decimal(10,2) | YES |  |  | Numeric value associated with this record. [inferred] |
| 19 | ExplanationofOtherCosts | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named ExplanationofOtherCosts. [inferred] |
| 20 | RequestorName | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 21 | RequesterTitle | varchar(100) | YES |  |  | Field on CC.CC_ApprovalRequestForm named RequesterTitle. [inferred] |
| 22 | RequesterSignature | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named RequesterSignature. [inferred] |
| 23 | CenterOfficeDirectorName | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 24 | CenterOfficeDirectorTitle | varchar(100) | YES |  |  | Field on CC.CC_ApprovalRequestForm named CenterOfficeDirectorTitle. [inferred] |
| 25 | CenterOfficeDirectorSignature | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named CenterOfficeDirectorSignature. [inferred] |
| 26 | CmsStoName | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 27 | CmsStoTitle | varchar(100) | YES |  |  | Field on CC.CC_ApprovalRequestForm named CmsStoTitle. [inferred] |
| 28 | CmsStoSignature | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named CmsStoSignature. [inferred] |
| 29 | CmsPrincipalDepAdministratorName | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 30 | CmsPrincipalDepAdministratorTitle | varchar(100) | YES |  |  | Field on CC.CC_ApprovalRequestForm named CmsPrincipalDepAdministratorTitle. [inferred] |
| 31 | CmsPrincipalDepAdministratorSignature | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named CmsPrincipalDepAdministratorSignature. [inferred] |
| 32 | VenueName | varchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 33 | VenueAddress | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named VenueAddress. [inferred] |
| 34 | VenueCity | varchar(100) | YES |  |  | Field on CC.CC_ApprovalRequestForm named VenueCity. [inferred] |
| 35 | VenueState | varchar(100) | YES |  |  | Field on CC.CC_ApprovalRequestForm named VenueState. [inferred] |
| 36 | VenueCuntry | varchar(100) | YES |  |  | Field on CC.CC_ApprovalRequestForm named VenueCuntry. [inferred] |
| 37 | JustificationForUseOdNonFederalSpace | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named JustificationForUseOdNonFederalSpace. [inferred] |
| 38 | JustificationForConferenceFrequency | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named JustificationForConferenceFrequency. [inferred] |
| 39 | JustifyNumberOfDaysRequested | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named JustifyNumberOfDaysRequested. [inferred] |
| 40 | JustificationForNonVirtualAttendance | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named JustificationForNonVirtualAttendance. [inferred] |
| 41 | TotalNumberOfAttendees | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named TotalNumberOfAttendees. [inferred] |
| 42 | TotalNumberOfFederalAttendees | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named TotalNumberOfFederalAttendees. [inferred] |
| 43 | TotalNumberOfNonFederalAttendees | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named TotalNumberOfNonFederalAttendees. [inferred] |
| 44 | TotalNumberOfAttendeeesPaidedByCms | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named TotalNumberOfAttendeeesPaidedByCms. [inferred] |
| 45 | NumberOfFederalTravelersRequested | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named NumberOfFederalTravelersRequested. [inferred] |
| 46 | NumberOfNonFederalTravelersRequested | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named NumberOfNonFederalTravelersRequested. [inferred] |
| 47 | JustificationForTotalNumberOfAttendees | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named JustificationForTotalNumberOfAttendees. [inferred] |
| 48 | PrimaryMethodToSuportConference | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named PrimaryMethodToSuportConference. [inferred] |
| 49 | ConferenceSponsoredFundedByOtherOpdiv | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named ConferenceSponsoredFundedByOtherOpdiv. [inferred] |
| 50 | TotalEstimatedCostOfConference | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named TotalEstimatedCostOfConference. [inferred] |
| 51 | CostPerAttendee | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named CostPerAttendee. [inferred] |
| 52 | ContractorPlanningCosts | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named ContractorPlanningCosts. [inferred] |
| 53 | AudioVisualCosts | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named AudioVisualCosts. [inferred] |
| 54 | PrintingCosts | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named PrintingCosts. [inferred] |
| 55 | ExibitCosts | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named ExibitCosts. [inferred] |
| 56 | MeetingSpaceVenueCosts | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named MeetingSpaceVenueCosts. [inferred] |
| 57 | GrantCooperativeAgreement | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named GrantCooperativeAgreement. [inferred] |
| 58 | SpeakerFees | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named SpeakerFees. [inferred] |
| 59 | PromotionalMaterials | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named PromotionalMaterials. [inferred] |
| 60 | OtherCost | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named OtherCost. [inferred] |
| 61 | FederalAttendeeTravelCosts | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named FederalAttendeeTravelCosts. [inferred] |
| 62 | NonFederalAttendeeTravelCosts | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named NonFederalAttendeeTravelCosts. [inferred] |
| 63 | ExplanationOfOtherCost | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named ExplanationOfOtherCost. [inferred] |
| 64 | ExplanationOfContractorPlanningCosts | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named ExplanationOfContractorPlanningCosts. [inferred] |
| 65 | HhsContractNumberandTaskOrder | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named HhsContractNumberandTaskOrder. [inferred] |
| 66 | CircumstancesInSpendingGreatherThan$50000 | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named CircumstancesInSpendingGreatherThan$50000. [inferred] |
| 67 | ActionsTakenToReduceCost | varchar(255) | YES |  |  | Field on CC.CC_ApprovalRequestForm named ActionsTakenToReduceCost. [inferred] |
| 68 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 69 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 70 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 71 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 72 | DeactivateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 73 | DeleteTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
