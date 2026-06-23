# FTS.FTS_RemoteWorkDesignation

Supporting table in the FTS schema related to fts remote work designation.

## Snapshot

- Schema: FTS
- Table: FTS_RemoteWorkDesignation
- Priority: supporting schema
- Approximate rows: 23011
- Primary key: RemoteWorkDesignationIdentifier
- Column count: 36

## Outbound Foreign Keys

- FK_FTS_Agreement_FTS_RemoteWorkDesignation: FTS.FTS_Agreement via AgreementIdentifier -> AgreementIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | RemoteWorkDesignationIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | AgreementIdentifier | bigint | NO |  |  | Identifier that likely links this record to Agreement. [inferred] |
| 3 | EmployeeIdentifier | bigint | NO |  |  | Identifier that likely links this record to Employee. [inferred] |
| 4 | RemoteWorkCategory | nvarchar(40) | YES |  |  | Field on FTS.FTS_RemoteWorkDesignation named RemoteWorkCategory. [inferred] |
| 5 | PositionRemoteWorkCategory | nvarchar(40) | YES |  |  | Field on FTS.FTS_RemoteWorkDesignation named PositionRemoteWorkCategory. [inferred] |
| 6 | PersonSpecificException | nvarchar(200) | YES |  |  | Field on FTS.FTS_RemoteWorkDesignation named PersonSpecificException. [inferred] |
| 7 | PositionRequiredOnSiteHours | numeric(4,2) | YES |  |  | Field on FTS.FTS_RemoteWorkDesignation named PositionRequiredOnSiteHours. [inferred] |
| 8 | IsCurrent | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 9 | IsApproved | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 10 | StartDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 11 | EndDate | datetime2(0) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 12 | Comment | nvarchar(max) | YES |  |  | Field on FTS.FTS_RemoteWorkDesignation named Comment. [inferred] |
| 13 | FirstApprovingOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to FirstApprovingOfficialEmployee. [inferred] |
| 14 | FirstApprovingOfficialName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 15 | FirstApprovingOfficialComment | nvarchar(4000) | YES |  |  | Field on FTS.FTS_RemoteWorkDesignation named FirstApprovingOfficialComment. [inferred] |
| 16 | FirstApprovingOfficialStatus | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 17 | FirstApprovalDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 18 | SecondApprovingOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to SecondApprovingOfficialEmployee. [inferred] |
| 19 | SecondApprovingOfficialName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 20 | SecondApprovingOfficialComment | nvarchar(500) | YES |  |  | Field on FTS.FTS_RemoteWorkDesignation named SecondApprovingOfficialComment. [inferred] |
| 21 | SecondApprovingOfficialStatus | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 22 | SecondApprovalDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 23 | FinalApprovingOfficialEmployeeIdentifier | bigint | YES |  |  | Identifier that likely links this record to FinalApprovingOfficialEmployee. [inferred] |
| 24 | FinalApprovingOfficalName | nvarchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 25 | FinalApprovingOfficialComment | nvarchar(500) | YES |  |  | Field on FTS.FTS_RemoteWorkDesignation named FinalApprovingOfficialComment. [inferred] |
| 26 | FinalApprovingOfficalStatus | nvarchar(40) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 27 | DeleteTimeStamp | datetime2(7) | YES |  |  | Date and time associated with this attribute or event. [inferred] |
| 28 | AddUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to AddUser. [inferred] |
| 29 | AddTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 30 | LastUpdateUserIdentifier | bigint | NO |  |  | Identifier that likely links this record to LastUpdateUser. [inferred] |
| 31 | LastUpdateTimeStamp | datetime2(7) | NO |  |  | Date and time associated with this attribute or event. [inferred] |
| 32 | ManagerRemoteWorkSelection | varchar(100) | YES |  |  | Field on FTS.FTS_RemoteWorkDesignation named ManagerRemoteWorkSelection. [inferred] |
| 33 | EmployeeRemoteWorkSelection | varchar(100) | YES |  |  | Field on FTS.FTS_RemoteWorkDesignation named EmployeeRemoteWorkSelection. [inferred] |
| 34 | HasAcknowledged | bit | YES |  |  | Boolean-style indicator showing whether this condition is true. [inferred] |
| 35 | EmployeeAcknowledgedDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 36 | ManagerDesignationDate | datetime2(7) | YES |  |  | Date associated with this attribute or event. [inferred] |
