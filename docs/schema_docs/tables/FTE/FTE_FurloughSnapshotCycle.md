# FTE.FTE_FurloughSnapshotCycle

Supporting table in the FTE schema related to fte furlough snapshot cycle.

## Snapshot

- Schema: FTE
- Table: FTE_FurloughSnapshotCycle
- Priority: supporting schema
- Approximate rows: 1
- Primary key: FurloughSnapshotCycleIdentifier
- Column count: 9

## Inbound Foreign Keys

- FK__FTE_Furlo__Furlo__3487E15F: FTE.FTE_FurloughSnapshotCycleConfig via FurloughSnapshotCycleIdentifier -> FurloughSnapshotCycleIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FurloughSnapshotCycleIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FurloughSnapshotCycleDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 3 | FurloughSnapshotCycleStatus | nvarchar(100) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 4 | DeactivateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 5 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 6 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 7 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 9 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
