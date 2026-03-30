# Bugfix Requirements Document

## Introduction

The query autocomplete functionality in src/ui/index.html supports two query modes but has broken parsing logic that prevents suggestions from appearing correctly. The autocomplete should detect whether the user is typing traditional SQL (`SELECT ... FROM ...`) or PostgreSQL-style queries (`table operation ...`) and provide context-aware suggestions for tables, fields, and keywords. Currently, the parsing logic fails to extract table context in normal SQL mode and doesn't properly handle field lists in Postgres-style mode, causing suggestions to be missing or incorrect.

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN user types `SELECT field` in normal SQL mode THEN the system provides field suggestions without knowing which table's fields to suggest (suggests all fields from all tables instead of table-specific fields)

1.2 WHEN user types `SELECT * FROM tablename` and continues typing in normal SQL mode THEN the system fails to extract the table name from the FROM clause, so subsequent field suggestions don't use the correct table context

1.3 WHEN user types `song select id, title` in Postgres-style mode THEN the system's parseQueryContext function doesn't properly parse the comma-separated field list, causing incorrect context detection for subsequent suggestions

1.4 WHEN user types a partial word at the cursor position THEN the system may not correctly extract the current word being typed, causing suggestions to not filter properly or appear at the wrong time

1.5 WHEN user types `SELECT field FROM` in normal SQL mode THEN the system should show table suggestions but the context parsing may not correctly identify this as table suggestion mode

### Expected Behavior (Correct)

2.1 WHEN user types `SELECT field` in normal SQL mode THEN the system SHALL provide table suggestions in an autocomplete list, and once the user picks a table, the system SHALL switch back to field mode and provide field autocomplete suggestions for that selected table

2.2 WHEN user types `SELECT * FROM tablename WHERE` in normal SQL mode THEN the system SHALL extract "tablename" from the FROM clause and use it to provide table-specific field suggestions for the WHERE clause

2.3 WHEN user types `song select id, title where` in Postgres-style mode THEN the system SHALL correctly parse "song" as the table name and recognize that the user is now in WHERE clause context, providing field suggestions from the song table

2.4 WHEN user types a partial word at the cursor position THEN the system SHALL correctly extract the current incomplete word and filter suggestions to match only items starting with that partial word

2.5 WHEN user types `SELECT field FROM ` (with trailing space) in normal SQL mode THEN the system SHALL recognize this as table suggestion context and display available table names

2.6 WHEN user types `tablename select` in Postgres-style mode THEN the system SHALL recognize "tablename" as the table and show field suggestions for that specific table

### Unchanged Behavior (Regression Prevention)

3.1 WHEN user presses Tab with autocomplete suggestions visible THEN the system SHALL CONTINUE TO complete with the first suggestion

3.2 WHEN user presses Ctrl+Space in field context THEN the system SHALL CONTINUE TO open the field selector modal with WASD and arrow key navigation

3.3 WHEN user clicks on an autocomplete suggestion THEN the system SHALL CONTINUE TO insert that suggestion at the cursor position, replacing the current partial word

3.4 WHEN autocomplete has no suggestions or the current word is less than 1 character THEN the system SHALL CONTINUE TO hide the autocomplete dropdown

3.5 WHEN user types SQL keywords like WHERE, ORDER BY, JOIN THEN the system SHALL CONTINUE TO provide appropriate keyword suggestions

3.6 WHEN schema cache is not loaded for the current connection THEN the system SHALL CONTINUE TO load it before providing suggestions

3.7 WHEN user switches between normal SQL and Postgres-style syntax within the same query box THEN the system SHALL CONTINUE TO detect the mode correctly based on query structure

3.8 WHEN user finishes typing a Postgres-style SQL query and presses the run query button THEN the system SHALL automatically convert the Postgres-style syntax to normal SQL syntax before executing the query (since most databases understand normal SQL)
