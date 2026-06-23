# ESS.ESS_Notifications

Supporting table in the ESS schema related to ess notifications.

## Snapshot

- Schema: ESS
- Table: ESS_Notifications
- Priority: supporting schema
- Approximate rows: 1
- Primary key: NotificationIdentifier
- Column count: 9

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | NotificationIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | NotificationType | varchar(100) | NO |  |  | Type or category used to classify the record. [inferred] |
| 3 | NotificationMessage | varchar(100) | NO |  |  | Field on ESS.ESS_Notifications named NotificationMessage. [inferred] |
| 4 | AddUserIdentifier | numeric(12,0) | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 5 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | LastUpdateUserIdentifier | numeric(12,0) | YES |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 7 | LastUpdateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
