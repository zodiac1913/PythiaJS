# HR.CurrentFMIBuildingDescriptions

Business-critical table in the HR schema related to current fmibuilding descriptions.

## Snapshot

- Schema: HR
- Table: CurrentFMIBuildingDescriptions
- Priority: primary schema
- Approximate rows: 9
- Primary key: not declared
- Column count: 7

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | SITECODE | char(10) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 2 | BLDGCODE | char(10) | YES |  |  | Code value used to classify or look up this record. [inferred] |
| 3 | BLDGDESC | char(60) | YES |  |  | Field on HR.CurrentFMIBuildingDescriptions named BLDGDESC. [inferred] |
| 4 | CITY | char(30) | YES |  |  | Field on HR.CurrentFMIBuildingDescriptions named CITY. [inferred] |
| 5 | STATE | char(60) | YES |  |  | Field on HR.CurrentFMIBuildingDescriptions named STATE. [inferred] |
| 6 | STREET | char(40) | YES |  |  | Field on HR.CurrentFMIBuildingDescriptions named STREET. [inferred] |
| 7 | ZIP | char(10) | YES |  |  | Field on HR.CurrentFMIBuildingDescriptions named ZIP. [inferred] |
