# CATSDEV Query Playbook

Portable retrieval patterns for AI systems that need to translate non-technical user requests into likely table and field targets.

## Find employee by identity

- Intent: Resolve a person from common employee identifiers.
- Start tables: HR.HR_Employee, CORE.User
- Steps:
  - Search HR.HR_Employee first by PersonnelNumber, LastName plus FirstName, Email, or LogonName depending on what the user supplied.
  - If the question starts from a logon or account concept, resolve CORE.User first and then join back to HR.HR_Employee on UserIdentifier.
  - Return the HR.HR_Employee record as the main employee context unless the question is specifically about account permissions.

## Find employees by component reference

- Intent: Resolve employees from component acronym, office acronym, or admin code.
- Start tables: HR.HR_Component, HR.HR_Employee
- Steps:
  - Resolve the organizational reference in HR.HR_Component using ComponentAcronym, AdminCode, OfficeAcronym, OfficeAdminCode, GroupAcronym, GroupAdminCode, DivisionAcronym, or DivisionAdminCode.
  - Use the Level column to understand whether the matched record is a division, group, or office or center.
  - Use the resulting identifiers and codes to filter HR.HR_Employee, which already carries denormalized component, office, group, and division fields.

## Explain organization hierarchy

- Intent: Describe how a component rolls up through the org structure.
- Start tables: HR.HR_Component
- Steps:
  - Find the starting component in HR.HR_Component by acronym, admin code, or name.
  - Use ParentComponentIdentifier to walk upward through the hierarchy.
  - Use Level together with the Office, Group, and Division fields to explain the component's place in the structure.

## Find employee history

- Intent: Answer time-based questions about employee state changes.
- Start tables: HR.HR_EmployeeHistory, HR.HR_Employee
- Steps:
  - Resolve the employee in HR.HR_Employee first when needed.
  - Move to HR.HR_EmployeeHistory to inspect prior values over time for the same employee.
  - Use effective or timestamp-style columns in the historical record to place changes in sequence.

## Find employee actions

- Intent: Answer questions about personnel actions rather than current employee state.
- Start tables: HR.HR_PersonnelAction, HR.HR_Employee
- Steps:
  - Resolve the employee in HR.HR_Employee if the user only supplied person information.
  - Use HR.HR_PersonnelAction as the main table for action-centric questions.
  - Use HR.HR_Employee only as supporting context for the current or broad employee snapshot.

## Find user roles

- Intent: Determine which application roles belong to a user.
- Start tables: CORE.User, CORE.UserRole, CORE.Role
- Steps:
  - Resolve the user in CORE.User or via HR.HR_Employee.UserIdentifier.
  - Join CORE.UserRole on UserIdentifier.
  - Join CORE.Role on RoleIdentifier to get role names and definitions.

