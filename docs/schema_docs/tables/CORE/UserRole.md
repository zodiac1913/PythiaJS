# CORE.UserRole

Bridge table that assigns application roles to user accounts.

## Snapshot

- Schema: CORE
- Table: UserRole
- Priority: primary schema
- Approximate rows: 0
- Primary key: UserRoleIdentifier
- Column count: 8

## Usage Notes

- Bridge table between CORE.User and CORE.Role.
- Use this table when the question is about which roles a user has or which users belong to a role.
- This table is usually not the final answer by itself; it is the join surface that connects users to human-readable role names.

## Outbound Foreign Keys

- FK_UserRole_Role: CORE.Role via RoleIdentifier -> RoleIdentifier
- FK_UserRole_User: CORE.User via UserIdentifier -> UserIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | UserRoleIdentifier | bigint | NO | PK, IDENTITY |  | Primary key for the user-role assignment record. [inferred] |
| 2 | UserIdentifier | bigint | NO |  |  | User account key for the assigned role. [inferred] |
| 3 | RoleIdentifier | bigint | NO |  |  | Role key for the assigned role. [inferred] |
| 4 | DeleteTimeStamp | datetime2(0) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 5 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 6 | AddTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 7 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 8 | LastUpdateTimeStamp | datetime2(0) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
