# BUS.BUS_PhaseThreeTemp

Supporting table in the BUS schema related to bus phase three temp.

## Snapshot

- Schema: BUS
- Table: BUS_PhaseThreeTemp
- Priority: supporting schema
- Approximate rows: 619
- Primary key: PhaseThreeIdentifier
- Column count: 14

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PhaseThreeIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | Phase | nvarchar(50) | YES |  |  | Field on BUS.BUS_PhaseThreeTemp named Phase. [inferred] |
| 3 | Component | nvarchar(50) | YES |  |  | Field on BUS.BUS_PhaseThreeTemp named Component. [inferred] |
| 4 | PersonnelNumber | nvarchar(50) | YES |  |  | Number used to identify or track this record. [inferred] |
| 5 | EmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to Employee. [inferred] |
| 6 | LastFirstName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 7 | IsManager | nvarchar(50) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 8 | IsBargainingUnit | nvarchar(10) | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 9 | PayPlan | nvarchar(10) | YES |  |  | Field on BUS.BUS_PhaseThreeTemp named PayPlan. [inferred] |
| 10 | EhcmTelework | nvarchar(50) | YES |  |  | Field on BUS.BUS_PhaseThreeTemp named EhcmTelework. [inferred] |
| 11 | DutyLocationCode | nvarchar(50) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 12 | DutyLocationDescription | nvarchar(100) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 13 | DutyStation | nvarchar(100) | YES |  |  | Field on BUS.BUS_PhaseThreeTemp named DutyStation. [inferred] |
| 14 | HrAddress | nvarchar(200) | YES |  |  | Field on BUS.BUS_PhaseThreeTemp named HrAddress. [inferred] |
