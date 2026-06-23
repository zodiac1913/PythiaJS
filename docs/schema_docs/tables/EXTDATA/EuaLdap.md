# EXTDATA.EuaLdap

Supporting table in the EXTDATA schema related to eua ldap.

## Snapshot

- Schema: EXTDATA
- Table: EuaLdap
- Priority: supporting schema
- Approximate rows: 43351
- Primary key: uid
- Column count: 25

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | uid | varchar(100) | NO | PK |  | Field on EXTDATA.EuaLdap named uid. [inferred] |
| 2 | displayName | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 3 | employeeNumber | varchar(100) | YES |  |  | Number used to identify or track this record. [inferred] |
| 4 | cmsCommunity | varchar(100) | YES |  |  | Field on EXTDATA.EuaLdap named cmsCommunity. [inferred] |
| 5 | cmsUserCategory | varchar(100) | YES |  |  | Field on EXTDATA.EuaLdap named cmsUserCategory. [inferred] |
| 6 | cmsSalutation | varchar(100) | YES |  |  | Field on EXTDATA.EuaLdap named cmsSalutation. [inferred] |
| 7 | cmsPreferredFirstName | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 8 | cmsPreferredLastName | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 9 | cmsMiddleInitial | varchar(100) | YES |  |  | Field on EXTDATA.EuaLdap named cmsMiddleInitial. [inferred] |
| 10 | cmsSuffix | varchar(100) | YES |  |  | Field on EXTDATA.EuaLdap named cmsSuffix. [inferred] |
| 11 | mail | varchar(100) | YES |  |  | Field on EXTDATA.EuaLdap named mail. [inferred] |
| 12 | cmsAlternateEmail | varchar(100) | YES |  |  | Email address related to this record. [inferred] |
| 13 | cmsPersonnelLocation | varchar(100) | YES |  |  | Field on EXTDATA.EuaLdap named cmsPersonnelLocation. [inferred] |
| 14 | cmsWorkPhone | varchar(100) | YES |  |  | Phone number related to this record. [inferred] |
| 15 | cmsWorkPhoneExt | varchar(100) | YES |  |  | Phone number related to this record. [inferred] |
| 16 | cmsFirstApproverID | varchar(100) | YES |  |  | Field on EXTDATA.EuaLdap named cmsFirstApproverID. [inferred] |
| 17 | cmsFormCMSRegion | varchar(100) | YES |  |  | Field on EXTDATA.EuaLdap named cmsFormCMSRegion. [inferred] |
| 18 | cmsPersonID | varchar(100) | YES |  |  | Field on EXTDATA.EuaLdap named cmsPersonID. [inferred] |
| 19 | cmsIDCreationDate | varchar(100) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 20 | cmsIDAssignmentDate | varchar(100) | YES |  |  | Date associated with this attribute or event. [inferred] |
| 21 | cmsUserStatus | varchar(100) | YES |  |  | Status value describing the current state of the record. [inferred] |
| 22 | cmsSuperUserRestoreComment | varchar(300) | YES |  |  | Field on EXTDATA.EuaLdap named cmsSuperUserRestoreComment. [inferred] |
| 23 | cmsLegalLastName | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 24 | cmsLegalFirstname | varchar(100) | YES |  |  | Name or display label for this value. [inferred] |
| 25 | Neo | varchar(300) | YES |  |  | Field on EXTDATA.EuaLdap named Neo. [inferred] |
