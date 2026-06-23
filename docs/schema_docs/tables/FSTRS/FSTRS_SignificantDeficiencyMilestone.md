# FSTRS.FSTRS_SignificantDeficiencyMilestone

Supporting table in the FSTRS schema related to fstrs significant deficiency milestone.

## Snapshot

- Schema: FSTRS
- Table: FSTRS_SignificantDeficiencyMilestone
- Priority: supporting schema
- Approximate rows: 3
- Primary key: SignificantDeficiencyMilestoneIdentifier
- Column count: 10

## Outbound Foreign Keys

- FK__FSTRS_Sig__Signi__5E732E33: FSTRS.FSTRS_SignificantDeficiencyInformation via SignificantDeficiencyInformationIdentifier -> SignificantDeficiencyInformationIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SignificantDeficiencyMilestoneIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | SignificantDeficiencyInformationIdentifier | bigint | NO |  |  | Identifier that likely links this record to SignificantDeficiencyInformation. [inferred] |
| 3 | ActionStopRequired | varchar(4000) | YES |  |  | Field on FSTRS.FSTRS_SignificantDeficiencyMilestone named ActionStopRequired. [inferred] |
| 4 | TrainingCompletionDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 5 | RevisedCompletionDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 6 | ActualCompletionDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 7 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 8 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 10 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
