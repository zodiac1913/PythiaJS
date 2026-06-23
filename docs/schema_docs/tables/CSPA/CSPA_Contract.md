# CSPA.CSPA_Contract

Supporting table in the CSPA schema related to cspa contract.

## Snapshot

- Schema: CSPA
- Table: CSPA_Contract
- Priority: supporting schema
- Approximate rows: 1259
- Primary key: ContractIdentifier
- Column count: 15

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | ContractIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | VendorIdentifier | bigint | NO |  |  | Identifier that likely links this record to Vendor. [inferred] |
| 3 | VendorName | nvarchar(250) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | ContractNumber | nvarchar(250) | YES |  |  | Number used to identify or track this record. [inferred] |
| 5 | OrderNumber | nvarchar(250) | YES |  |  | Number used to identify or track this record. [inferred] |
| 6 | CmsContractingOfficerRepresentativeIdentifier | bigint | NO |  |  | Identifier that likely links this record to CmsContractingOfficerRepresentative. [inferred] |
| 7 | CmsContractingOfficerIdentifier | bigint | NO |  |  | Identifier that likely links this record to CmsContractingOfficer. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | Component | nvarchar(400) | YES |  |  | Field on CSPA.CSPA_Contract named Component. [inferred] |
| 14 | VendorContactName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 15 | VendorContactEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
