# COVID.COVID_VaccinationCard

Supporting table in the COVID schema related to covid vaccination card.

## Snapshot

- Schema: COVID
- Table: COVID_VaccinationCard
- Priority: supporting schema
- Approximate rows: 63
- Primary key: VaccinationCardIdentifier
- Column count: 25

## Outbound Foreign Keys

- FK_COVID_VaccinationStatus: COVID.COVID_VaccinationStatus via VaccinationStatusIdentifier -> VaccinationStatusIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | VaccinationCardIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | VaccinationStatusIdentifier | bigint | NO |  |  | Identifier that likely links this record to VaccinationStatus. [inferred] |
| 3 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 4 | FileName | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | FileDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 6 | FileBinary | varbinary(max) | YES |  |  | Field on COVID.COVID_VaccinationCard named FileBinary. [inferred] |
| 7 | IsCurrent | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 8 | VaccinationType | nvarchar(255) | YES |  |  | Type or category used to classify the record. [inferred] |
| 9 | VaccinationDate1 | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 10 | LotNumber1 | nvarchar(255) | YES |  |  | Field on COVID.COVID_VaccinationCard named LotNumber1. [inferred] |
| 11 | Location1 | nvarchar(255) | YES |  |  | Field on COVID.COVID_VaccinationCard named Location1. [inferred] |
| 12 | VaccinationDate2 | datetime2(0) | YES |  |  | Temporal field associated with this record. [inferred] |
| 13 | LotNumber2 | nvarchar(255) | YES |  |  | Field on COVID.COVID_VaccinationCard named LotNumber2. [inferred] |
| 14 | Location2 | nvarchar(255) | YES |  |  | Field on COVID.COVID_VaccinationCard named Location2. [inferred] |
| 15 | IsBooster | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 16 | VerifierEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to VerifierEmployee. [inferred] |
| 17 | VerifierName | nvarchar(255) | YES |  |  | Name or display label for this value. [inferred] |
| 18 | VerificationDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 19 | IsExempt | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 20 | ExceptionStatus | nvarchar(255) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 21 | ExceptionDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 22 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 23 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 24 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 25 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
