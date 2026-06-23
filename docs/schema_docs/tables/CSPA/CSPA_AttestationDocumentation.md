# CSPA.CSPA_AttestationDocumentation

Supporting table in the CSPA schema related to cspa attestation documentation.

## Snapshot

- Schema: CSPA
- Table: CSPA_AttestationDocumentation
- Priority: supporting schema
- Approximate rows: 15
- Primary key: AttestationDocumentationIdentifier
- Column count: 19

## Outbound Foreign Keys

- FK_CSPA_Attestation: CSPA.CSPA_Attestation via AttestationIdentifier -> AttestationIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AttestationDocumentationIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AttestationIdentifier | bigint | NO |  |  | Identifier that likely links this record to Attestation. [inferred] |
| 3 | FileName | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | FileDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | FileBinary | varbinary(max) | YES |  |  | Field on CSPA.CSPA_AttestationDocumentation named FileBinary. [inferred] |
| 6 | IsCurrent | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 7 | AttestationType | nvarchar(255) | YES |  |  | Type or category used to classify the record. [inferred] |
| 8 | IsAttestation | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 9 | VerifierEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to VerifierEmployee. [inferred] |
| 10 | VerifierName | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 11 | VerificationDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 12 | VendorContactName | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 13 | VendorEmail | nvarchar(255) | YES |  |  | Email address related to this record. [inferred] |
| 14 | SubmissionDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 15 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 16 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 17 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 18 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 19 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
