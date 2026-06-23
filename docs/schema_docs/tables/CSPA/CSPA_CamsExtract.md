# CSPA.CSPA_CamsExtract

Supporting table in the CSPA schema related to cspa cams extract.

## Snapshot

- Schema: CSPA
- Table: CSPA_CamsExtract
- Priority: supporting schema
- Approximate rows: 1259
- Primary key: CamsExtractIdentifier
- Column count: 16

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CamsExtractIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | VendorName | nvarchar(100) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | ContractNumber | nvarchar(50) | NO |  |  | Number used to identify or track this record. [inferred] |
| 4 | OrderNumber | nvarchar(50) | YES |  |  | Number used to identify or track this record. [inferred] |
| 5 | Component | nvarchar(50) | NO |  |  | Field on CSPA.CSPA_CamsExtract named Component. [inferred] |
| 6 | ContractingOfficerRepresentativeEua | nvarchar(50) | YES |  |  | Field on CSPA.CSPA_CamsExtract named ContractingOfficerRepresentativeEua. [inferred] |
| 7 | ContractingOfficerRepresentative | nvarchar(50) | NO |  |  | Field on CSPA.CSPA_CamsExtract named ContractingOfficerRepresentative. [inferred] |
| 8 | ContractingOfficerEua | nvarchar(50) | YES |  |  | Field on CSPA.CSPA_CamsExtract named ContractingOfficerEua. [inferred] |
| 9 | ContractingOfficer | nvarchar(50) | NO |  |  | Field on CSPA.CSPA_CamsExtract named ContractingOfficer. [inferred] |
| 10 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 11 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 13 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 14 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 15 | VendorContactName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 16 | VendorContactEmail | nvarchar(100) | YES |  |  | Email address related to this record. [inferred] |
