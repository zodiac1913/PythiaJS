# ESS.ESS_EthicsHhs521

Supporting table in the ESS schema related to ess ethics hhs521.

## Snapshot

- Schema: ESS
- Table: ESS_EthicsHhs521
- Priority: supporting schema
- Approximate rows: 19
- Primary key: Hhs521Identifier
- Column count: 45

## Outbound Foreign Keys

- FK__ESS_Ethic__Ethic__30104097: ESS.ESS_EthicsForm via EthicsFormIdentifier -> EthicsFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Hhs521Identifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | SupervisorName | varchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | SupervisorTitle | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named SupervisorTitle. [inferred] |
| 5 | SupervisorWorkPhone | varchar(12) | YES |  |  | Phone number related to this record. [inferred] |
| 6 | SupervisorFax | varchar(12) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named SupervisorFax. [inferred] |
| 7 | SupervisorCell | varchar(12) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named SupervisorCell. [inferred] |
| 8 | SupervisorEmail | varchar(50) | YES |  |  | Email address related to this record. [inferred] |
| 9 | isQuestionA | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 10 | QuestionAComments | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named QuestionAComments. [inferred] |
| 11 | isQuestionB | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 12 | QuestionBComments | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named QuestionBComments. [inferred] |
| 13 | isQuestionC | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 14 | QuestionCComments | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named QuestionCComments. [inferred] |
| 15 | isQuestionD | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 16 | QuestionDComments | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named QuestionDComments. [inferred] |
| 17 | isQuestionE | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 18 | QuestionEComments | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named QuestionEComments. [inferred] |
| 19 | SupervisorReview | varchar(25) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named SupervisorReview. [inferred] |
| 20 | SupervisorComments | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named SupervisorComments. [inferred] |
| 21 | EthicsOfficialName | varchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 22 | EthicsOfficialTitle | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named EthicsOfficialTitle. [inferred] |
| 23 | EthicsOfficialPhone | varchar(12) | YES |  |  | Phone number related to this record. [inferred] |
| 24 | EthicsOfficialFax | varchar(12) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named EthicsOfficialFax. [inferred] |
| 25 | EthicsOfficialCell | varchar(12) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named EthicsOfficialCell. [inferred] |
| 26 | EthicsOfficialEmail | varchar(50) | YES |  |  | Email address related to this record. [inferred] |
| 27 | EthicsOfficialOrganization | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named EthicsOfficialOrganization. [inferred] |
| 28 | EthicsOfficialReview | varchar(25) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named EthicsOfficialReview. [inferred] |
| 29 | EthicsOfficialComments | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named EthicsOfficialComments. [inferred] |
| 30 | AddUserIdentifier | numeric(12,0) | YES |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 31 | AddTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 32 | LastUpdateUserIdentifier | numeric(12,0) | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 33 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 34 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 35 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 36 | EthicsFormIdentifier | bigint | YES |  |  | Identifier that likely links this record to EthicsForm. [inferred] |
| 37 | AgencyDesigneeName | varchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 38 | AgencyDesigneeTitle | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named AgencyDesigneeTitle. [inferred] |
| 39 | AgencyDesigneePhone | varchar(12) | YES |  |  | Phone number related to this record. [inferred] |
| 40 | AgencyDesigneeCell | varchar(12) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named AgencyDesigneeCell. [inferred] |
| 41 | AgencyDesigneeEmail | varchar(50) | YES |  |  | Email address related to this record. [inferred] |
| 42 | AgencyDesigneeOrganization | varchar(50) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named AgencyDesigneeOrganization. [inferred] |
| 43 | AgencyDesigneeComments | varchar(4000) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named AgencyDesigneeComments. [inferred] |
| 44 | AgencyDesigneeReview | varchar(25) | YES |  |  | Field on ESS.ESS_EthicsHhs521 named AgencyDesigneeReview. [inferred] |
| 45 | SupervisorReviewStatus | numeric(1,0) | YES |  |  | Status value describing the current state of the record. [inferred] |
