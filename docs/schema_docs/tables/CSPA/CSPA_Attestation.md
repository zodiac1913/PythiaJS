# CSPA.CSPA_Attestation

Supporting table in the CSPA schema related to cspa attestation.

## Snapshot

- Schema: CSPA
- Table: CSPA_Attestation
- Priority: supporting schema
- Approximate rows: 1259
- Primary key: AttestationIdentifier
- Column count: 21

## Inbound Foreign Keys

- FK_CSPA_Attestation: CSPA.CSPA_AttestationDocumentation via AttestationIdentifier -> AttestationIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AttestationIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | VendorIdentifier | bigint | NO |  |  | Identifier that likely links this record to Vendor. [inferred] |
| 3 | VendorName | nvarchar(250) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | ContractIdentifier | bigint | NO |  |  | Identifier that likely links this record to Contract. [inferred] |
| 5 | ContractName | nvarchar(250) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | OrderNumber | nvarchar(250) | YES |  |  | Number used to identify or track this record. [inferred] |
| 7 | OrderName | nvarchar(250) | YES |  |  | Name or display label for this value. [inferred] |
| 8 | CmsContractingOfficer | bigint | NO |  |  | Numeric value associated with this record. [inferred] |
| 9 | CmsContractingOfficerRepresentativeIdentifier | bigint | NO |  |  | Identifier that likely links this record to CmsContractingOfficerRepresentative. [inferred] |
| 10 | VendorContactName | nvarchar(250) | YES |  |  | Name or display label for this value. [inferred] |
| 11 | VendorEmail | nvarchar(250) | YES |  |  | Email address related to this record. [inferred] |
| 12 | AttestationType | nvarchar(50) | YES |  |  | Type or category used to classify the record. [inferred] |
| 13 | IsAttestation | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 14 | AttestationDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 15 | AttestationDocumentation | nvarchar(max) | YES |  |  | Field on CSPA.CSPA_Attestation named AttestationDocumentation. [inferred] |
| 16 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 17 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 18 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 19 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 20 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 21 | Component | nvarchar(400) | YES |  |  | Field on CSPA.CSPA_Attestation named Component. [inferred] |
