# COVID.COVID_VaccinationStatus

Supporting table in the COVID schema related to covid vaccination status.

## Snapshot

- Schema: COVID
- Table: COVID_VaccinationStatus
- Priority: supporting schema
- Approximate rows: 17
- Primary key: VaccinationStatusIdentifier
- Column count: 11

## Inbound Foreign Keys

- FK_COVID_VaccinationStatus: COVID.COVID_VaccinationCard via VaccinationStatusIdentifier -> VaccinationStatusIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | VaccinationStatusIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | IsFullyVaccinated | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 4 | IsPartiallyVaccinated | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 5 | IsNotVaccinated | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 6 | IsMedicalReligious | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 7 | HasDeclinedAnswer | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 8 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 9 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 11 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
