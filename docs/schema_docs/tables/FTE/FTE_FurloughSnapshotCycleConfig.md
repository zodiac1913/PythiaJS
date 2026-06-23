# FTE.FTE_FurloughSnapshotCycleConfig

Supporting table in the FTE schema related to fte furlough snapshot cycle config.

## Snapshot

- Schema: FTE
- Table: FTE_FurloughSnapshotCycleConfig
- Priority: supporting schema
- Approximate rows: 7
- Primary key: FurloughSnapshotCycleConfigIdentifier
- Column count: 12

## Outbound Foreign Keys

- FK__FTE_Furlo__Furlo__3487E15F: FTE.FTE_FurloughSnapshotCycle via FurloughSnapshotCycleIdentifier -> FurloughSnapshotCycleIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | FurloughSnapshotCycleConfigIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | FurloughSnapshotCycleIdentifier | bigint | NO |  |  | Identifier that likely links this record to FurloughSnapshotCycle. [inferred] |
| 3 | FurloughSnapshotCycleConfigType | nvarchar(100) | YES |  |  | Type or category used to classify the record. [inferred] |
| 4 | FurloughSnapshotCycleConfigDescription | nvarchar(max) | YES |  |  | Longer descriptive text for this value. [inferred] |
| 5 | FurloughSnapshotCycleConfigDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 6 | FurloughSnapshotCycleConfigSwitch | bit | YES |  |  | Flag value stored as true or false. [inferred] |
| 7 | DeactivateTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 8 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 9 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 10 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 11 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 12 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
