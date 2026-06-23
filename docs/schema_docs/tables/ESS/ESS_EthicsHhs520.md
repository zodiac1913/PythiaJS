# ESS.ESS_EthicsHhs520

Supporting table in the ESS schema related to ess ethics hhs520.

## Snapshot

- Schema: ESS
- Table: ESS_EthicsHhs520
- Priority: supporting schema
- Approximate rows: 42
- Primary key: Hhs520Identifier
- Column count: 43

## Outbound Foreign Keys

- FK__ESS_Ethic__Ethic__06DE7E71: ESS.ESS_EthicsForm via EthicsFormIdentifier -> EthicsFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Hhs520Identifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | SupervisorName | varchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | SupervisorTitle | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named SupervisorTitle. [inferred] |
| 5 | SupervisorWorkPhone | varchar(17) | YES |  |  | Phone number related to this record. [inferred] |
| 6 | SupervisorFax | varchar(17) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named SupervisorFax. [inferred] |
| 7 | SupervisorCell | varchar(17) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named SupervisorCell. [inferred] |
| 8 | SupervisorEmail | varchar(50) | YES |  |  | Email address related to this record. [inferred] |
| 9 | AgencyComments | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named AgencyComments. [inferred] |
| 10 | OfficialDuty | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named OfficialDuty. [inferred] |
| 11 | OfficialDutyRelationship | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named OfficialDutyRelationship. [inferred] |
| 12 | OfficialDutyEffect | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named OfficialDutyEffect. [inferred] |
| 13 | OutsideEmployerAssignments | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named OutsideEmployerAssignments. [inferred] |
| 14 | ApplicableLawSummary | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named ApplicableLawSummary. [inferred] |
| 15 | SupervisorStatement | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named SupervisorStatement. [inferred] |
| 16 | isRecomendation | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 17 | EthicsOfficialName | varchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 18 | EthicsOfficialTitle | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named EthicsOfficialTitle. [inferred] |
| 19 | EthicsOfficialPhone | varchar(17) | YES |  |  | Phone number related to this record. [inferred] |
| 20 | EthicsOfficialFax | varchar(17) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named EthicsOfficialFax. [inferred] |
| 21 | EthicsOfficialCell | varchar(17) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named EthicsOfficialCell. [inferred] |
| 22 | EthicsOfficialEmail | varchar(50) | YES |  |  | Email address related to this record. [inferred] |
| 23 | EthicsOfficialOrganization | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named EthicsOfficialOrganization. [inferred] |
| 24 | ReviewStatus | varchar(20) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 25 | EthicsOfficialComments | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named EthicsOfficialComments. [inferred] |
| 26 | AgencyDesigneeName | varchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 27 | AgencyDesigneeTitle | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named AgencyDesigneeTitle. [inferred] |
| 28 | AgencyDesigneePhone | varchar(17) | YES |  |  | Phone number related to this record. [inferred] |
| 29 | AgencyDesigneeCell | varchar(17) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named AgencyDesigneeCell. [inferred] |
| 30 | AgencyDesigneeEmail | varchar(50) | YES |  |  | Email address related to this record. [inferred] |
| 31 | AgencyDesigneeOrganization | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named AgencyDesigneeOrganization. [inferred] |
| 32 | Decision | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named Decision. [inferred] |
| 33 | SpecifiedConditions | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named SpecifiedConditions. [inferred] |
| 34 | AgencyDesigneeComments | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named AgencyDesigneeComments. [inferred] |
| 35 | AddUserIdentifier | numeric(12,0) | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 36 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 37 | LastUpdateUserIdentifier | numeric(12,0) | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 38 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 39 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 40 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 41 | EthicsFormIdentifier | bigint | YES |  |  | Identifier that likely links this record to EthicsForm. [inferred] |
| 42 | EthicsOfficialReview | varchar(100) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named EthicsOfficialReview. [inferred] |
| 43 | AgencyDesigneeFax | varchar(17) | YES |  |  | Field on ESS.ESS_EthicsHhs520 named AgencyDesigneeFax. [inferred] |
