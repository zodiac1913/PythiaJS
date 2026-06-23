# TC.TC_TravelCard

Supporting table in the TC schema related to tc travel card.

## Snapshot

- Schema: TC
- Table: TC_TravelCard
- Priority: supporting schema
- Approximate rows: 33
- Primary key: TravelCardIdentifier
- Column count: 36

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | TravelCardIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | HierarchyIdentifier | bigint | YES |  |  | Identifier that likely links this record to Hierarchy. [inferred] |
| 3 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 4 | EmployeeLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | ManagerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ManagerEmployee. [inferred] |
| 6 | ManagerLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | AcknowledgemntType | varchar(255) | YES |  |  | Type or category used to classify the record. [inferred] |
| 8 | HhsIdentifier | nvarchar(10) | YES |  |  | Identifier that likely links this record to Hhs. [inferred] |
| 9 | OrganizationCode | nvarchar(100) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 10 | RoutingList | nvarchar(100) | YES |  |  | Field on TC.TC_TravelCard named RoutingList. [inferred] |
| 11 | RequestReceivedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 12 | InstructionsSentDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 13 | TrainingCertificateDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 14 | AcknowledgementFormApprovalDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 15 | EmployeeSignatureDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 16 | SupervisorApprovalDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 17 | OnlineInstructionsSentDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 18 | AopcSubmittedDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 19 | ProcessorEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ProcessorEmployee. [inferred] |
| 20 | ProcessorLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 21 | PendingDeliveryEmailSentDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 22 | ReviewerEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to ReviewerEmployee. [inferred] |
| 23 | ReviewerLastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 25 | Comments | nvarchar(max) | YES |  |  | Field on TC.TC_TravelCard named Comments. [inferred] |
| 26 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 27 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 28 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 29 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 30 | AlternateManagerName | varchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 31 | AlternateManagerIdentifier | bigint | YES |  |  | Identifier that likely links this record to AlternateManager. [inferred] |
| 32 | AlternateManagerEmail | varchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 33 | SupervisorSignature | varchar(255) | YES |  |  | Field on TC.TC_TravelCard named SupervisorSignature. [inferred] |
| 34 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 35 | ProcessorApprovaDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 36 | RejectDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 37 | CardStatus | varchar(255) | YES |  |  | Status value describing the current state of the record. [inferred] |
