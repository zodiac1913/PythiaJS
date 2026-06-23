# CORE.TaskDefinition

Reference table for the catalog of task definitions used by workflow or request processes.

## Snapshot

- Schema: CORE
- Table: TaskDefinition
- Priority: primary schema
- Approximate rows: 45
- Primary key: TaskDefinitionIdentifier
- Column count: 38

## Usage Notes

- Use this table for the static catalog of task definitions rather than individual task instances.
- This is usually the best place to interpret what a task type represents before inspecting CORE.Task or CORE.TaskRequest rows.

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | TaskDefinitionIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | ControllerName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 3 | ActionName | nvarchar(50) | YES |  |  | Name or display label for this value. [inferred] |
| 4 | TaskDefinitionName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 5 | TaskTitleName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 6 | TaskDescription | nvarchar(255) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 7 | TaskIcon | nvarchar(100) | YES |  |  | Field on CORE.TaskDefinition named TaskIcon. [inferred] |
| 8 | AccessLevel0 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessLevel0. [inferred] |
| 9 | AccessLevel1 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessLevel1. [inferred] |
| 10 | AccessLevel2 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessLevel2. [inferred] |
| 11 | AccessLevel3 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessLevel3. [inferred] |
| 12 | AccessLevel4 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessLevel4. [inferred] |
| 13 | AccessLevel5 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessLevel5. [inferred] |
| 14 | AccessLevel6 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessLevel6. [inferred] |
| 15 | AccessLevel7 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessLevel7. [inferred] |
| 16 | AccessLevel8 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessLevel8. [inferred] |
| 17 | AccessLevel9 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessLevel9. [inferred] |
| 18 | IsDelegatable | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 19 | IsDesktopTask | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 20 | IsWebTask | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 21 | IsAssignable | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 22 | DeactivateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 23 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 24 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 25 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 26 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 27 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 28 | AccessDescription0 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessDescription0. [inferred] |
| 29 | AccessDescription1 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessDescription1. [inferred] |
| 30 | AccessDescription2 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessDescription2. [inferred] |
| 31 | AccessDescription3 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessDescription3. [inferred] |
| 32 | AccessDescription4 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessDescription4. [inferred] |
| 33 | AccessDescription5 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessDescription5. [inferred] |
| 34 | AccessDescription6 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessDescription6. [inferred] |
| 35 | AccessDescription7 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessDescription7. [inferred] |
| 36 | AccessDescription8 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessDescription8. [inferred] |
| 37 | AccessDescription9 | nvarchar(255) | YES |  |  | Field on CORE.TaskDefinition named AccessDescription9. [inferred] |
| 38 | IsRequestable | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
