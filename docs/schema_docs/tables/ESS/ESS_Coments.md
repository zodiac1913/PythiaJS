# ESS.ESS_Coments

Supporting table in the ESS schema related to ess coments.

## Snapshot

- Schema: ESS
- Table: ESS_Coments
- Priority: supporting schema
- Approximate rows: 9
- Primary key: CommentsIdentifier
- Column count: 14

## Outbound Foreign Keys

- FK__ESS_Comen__Ethic__67D0B2C3: ESS.ESS_EthicsForm via EthicsFormIdentifier -> EthicsFormIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | CommentsIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 3 | DateOfComments | datetime2(0) | NO |  |  | Temporal field associated with this record. [inferred] |
| 4 | EmployeeName | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | CommentDescritpion | varchar(4000) | NO |  |  | Field on ESS.ESS_Coments named CommentDescritpion. [inferred] |
| 6 | AddUserIdentifier | numeric(12,0) | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 7 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | LastUpdateUserIdentifier | numeric(12,0) | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 10 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 12 | EthicsFormIdentifier | bigint | YES |  |  | Identifier that likely links this record to EthicsForm. [inferred] |
| 13 | isPublicEdit | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 14 | CommentsRead | varchar(5) | YES |  |  | Field on ESS.ESS_Coments named CommentsRead. [inferred] |
