# CORE.Role

Reference table for named application roles and permission groupings.

## Snapshot

- Schema: CORE
- Table: Role
- Priority: primary schema
- Approximate rows: 28
- Primary key: RoleIdentifier
- Column count: 7

## Usage Notes

- Use this table to understand named application roles or permission groupings.
- Pair this table with CORE.UserRole when the question is about which users hold which roles.
- RoleName is usually the business-facing value an AI should surface back to the user.

## Inbound Foreign Keys

- FK_UserRole_Role: CORE.UserRole via RoleIdentifier -> RoleIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | RoleIdentifier | bigint | NO | PK, IDENTITY |  | Primary key for the application role. [inferred] |
| 2 | RoleName | nvarchar(255) | NO |  |  | Human-readable name of the application role. [inferred] |
| 3 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 4 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 5 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 7 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
