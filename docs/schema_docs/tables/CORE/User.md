# CORE.User

Primary user account table. Use this table to resolve logon and user-account identity, commonly through UserIdentifier.

## Snapshot

- Schema: CORE
- Table: User
- Priority: high
- Approximate rows: 15868
- Primary key: UserIdentifier
- Column count: 14

## Usage Notes

- Use this table when the question is about logon names, user accounts, or when another table exposes UserIdentifier.
- UserIdentifier is a common cross-schema bridge into HR and other business tables.

## Conventional Joins

- Join to HR.HR_Employee on UserIdentifier to connect user accounts back to employee context.

## Inbound Foreign Keys

- FK_UserRole_User: CORE.UserRole via UserIdentifier -> UserIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | UserIdentifier | bigint | NO | PK, IDENTITY |  | Primary key for the user account and the main join key used across the database. [inferred] |
| 2 | LastName | nvarchar(50) | NO |  |  | Name or display label for this value. [inferred] |
| 3 | FirstName | nvarchar(50) | NO |  |  | Name or display label for this value. [inferred] |
| 4 | LogonName | nvarchar(50) | NO |  |  | Network or application logon name for the user account. [inferred] |
| 5 | MiddleName | nvarchar(50) | NO |  |  | Name or display label for this value. [inferred] |
| 6 | Prefix | nvarchar(50) | YES |  |  | Field on CORE.User named Prefix. [inferred] |
| 7 | Suffix | nvarchar(50) | YES |  |  | Field on CORE.User named Suffix. [inferred] |
| 8 | TypeIdentifier | bigint | NO |  |  | Reference to the user type classification. [inferred] |
| 9 | SocialSecurityNumber | nvarchar(50) | NO |  |  | Number used to identify or track this record. [inferred] |
| 10 | DeactivateTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 12 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 13 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 14 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
