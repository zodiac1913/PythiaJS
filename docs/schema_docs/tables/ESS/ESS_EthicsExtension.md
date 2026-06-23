# ESS.ESS_EthicsExtension

Supporting table in the ESS schema related to ess ethics extension.

## Snapshot

- Schema: ESS
- Table: ESS_EthicsExtension
- Priority: supporting schema
- Approximate rows: 33
- Primary key: ExtensionIdentifier
- Column count: 16

## Outbound Foreign Keys

- FK__ESS_Ethic__Ethic__7D296057: ESS.ESS_EthicsForm via EthicsFormIdentifier -> EthicsFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ExtensionIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | ExtensionRequestDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 4 | ExtensionDays | int | NO |  |  | Numeric value associated with this record. [inferred] |
| 5 | ExtensionDueDate | datetime2(0) | NO |  |  | Date associated with this attribute or event. [inferred] |
| 6 | DateApproved | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 7 | ApprovedByEthicsReviewer | varchar(100) | YES |  |  | Field on ESS.ESS_EthicsExtension named ApprovedByEthicsReviewer. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | EthicsFormIdentifier | bigint | YES |  |  | Identifier that likely links this record to EthicsForm. [inferred] |
| 15 | ExtensionStatus | varchar(25) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 16 | ExtensionDescription | varchar(4000) | YES |  |  | Longer descriptive text for this value. [inferred] |
