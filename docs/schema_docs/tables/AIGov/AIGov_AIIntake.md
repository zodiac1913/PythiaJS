# AIGov.AIGov_AIIntake

Supporting table in the AIGov schema related to aigov aiintake.

## Snapshot

- Schema: AIGov
- Table: AIGov_AIIntake
- Priority: supporting schema
- Approximate rows: 3
- Primary key: AIIntakeIdentifier
- Column count: 60

## Outbound Foreign Keys

- FK_AIGov_AIIntake_CapabilityFamily: AIGov.AIGov_CapabilityFamily via CapabilityFamilyIdentifier -> CapabilityFamilyIdentifier
- FK_AIGov_AIIntake_DataSensitivity: AIGov.AIGov_DataSensitivity via DataSensitivityIdentifier -> DataSensitivityIdentifier
- FK_AIGov_AIIntake_HumanOversightLevel: AIGov.AIGov_HumanOversightLevel via HumanOversightLevelIdentifier -> HumanOversightLevelIdentifier
- FK_AIGov_AIIntake_IntakePath: AIGov.AIGov_IntakePath via IntakePathIdentifier -> IntakePathIdentifier
- FK_AIGov_AIIntake_ModelSource: AIGov.AIGov_ModelSource via ModelSourceIdentifier -> ModelSourceIdentifier
- FK_AIGov_AIIntake_OutputAuthorityBasis: AIGov.AIGov_OutputAuthorityBasis via OutputAuthorityBasisIdentifier -> OutputAuthorityBasisIdentifier
- FK_AIGov_AIIntake_OutputBehavior: AIGov.AIGov_OutputBehavior via OutputBehaviorIdentifier -> OutputBehaviorIdentifier
- FK_AIGov_AIIntake_RiskBand: AIGov.AIGov_RiskBand via RiskBandIdentifier -> RiskBandIdentifier
- FK_AIGov_AIIntake_TrbStage: AIGov.AIGov_TrbStage via TrbStageIdentifier -> TrbStageIdentifier

## Inbound Foreign Keys

- FK_AIGov_AIIntakeHighImpactDomain_AIIntake: AIGov.AIGov_AIIntakeHighImpactDomain via AIIntakeIdentifier -> AIIntakeIdentifier
- FK_AIGov_AIIntakePatternTag_AIIntake: AIGov.AIGov_AIIntakePatternTag via AIIntakeIdentifier -> AIIntakeIdentifier

## Columns

| # | Column | Type | Null | Key | Default | Description |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | AIIntakeIdentifier | bigint | NO | PK, IDENTITY |  | Primary key identifier for this record. [inferred] |
| 2 | SubmittedAtUtc | datetime2(0) | NO |  | (sysutcdatetime()) | Temporal field associated with this record. [inferred] |
| 3 | SubmittedBy | nvarchar(256) | NO |  |  | Field on AIGov.AIGov_AIIntake named SubmittedBy. [inferred] |
| 4 | SystemName | nvarchar(200) | NO |  |  | Name or display label for this value. [inferred] |
| 5 | IntakePathIdentifier | int | YES |  |  | Identifier that likely links this record to IntakePath. [inferred] |
| 6 | IntakePathOther | nvarchar(200) | YES |  |  | Field on AIGov.AIGov_AIIntake named IntakePathOther. [inferred] |
| 7 | CapabilityFamilyIdentifier | int | NO |  |  | Identifier that likely links this record to CapabilityFamily. [inferred] |
| 8 | ModelSourceIdentifier | int | YES |  |  | Identifier that likely links this record to ModelSource. [inferred] |
| 9 | EstimatedProjectCostUsd | decimal(18,2) | YES |  |  | Numeric value associated with this record. [inferred] |
| 10 | WorkPlanSummary | nvarchar(max) | YES |  |  | Field on AIGov.AIGov_AIIntake named WorkPlanSummary. [inferred] |
| 11 | StaffingMix | nvarchar(500) | YES |  |  | Field on AIGov.AIGov_AIIntake named StaffingMix. [inferred] |
| 12 | FundingSource | nvarchar(200) | YES |  |  | Field on AIGov.AIGov_AIIntake named FundingSource. [inferred] |
| 13 | MarketResearchCompleted | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 14 | IdentifiedVendors | nvarchar(max) | YES |  |  | Field on AIGov.AIGov_AIIntake named IdentifiedVendors. [inferred] |
| 15 | ExpectedBenefitsAndRoi | nvarchar(max) | YES |  |  | Field on AIGov.AIGov_AIIntake named ExpectedBenefitsAndRoi. [inferred] |
| 16 | OutputBehaviorIdentifier | int | NO |  |  | Identifier that likely links this record to OutputBehavior. [inferred] |
| 17 | HumanOversightLevelIdentifier | int | NO |  |  | Identifier that likely links this record to HumanOversightLevel. [inferred] |
| 18 | OutputAuthorityBasisIdentifier | int | NO |  |  | Identifier that likely links this record to OutputAuthorityBasis. [inferred] |
| 19 | OutputAuthorityNotes | nvarchar(max) | YES |  |  | Field on AIGov.AIGov_AIIntake named OutputAuthorityNotes. [inferred] |
| 20 | DataSensitivityIdentifier | int | NO |  |  | Identifier that likely links this record to DataSensitivity. [inferred] |
| 21 | PiaCompleted | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 22 | PiaDetails | nvarchar(max) | YES |  |  | Field on AIGov.AIGov_AIIntake named PiaDetails. [inferred] |
| 23 | HasAto | bit | NO |  | ((0)) | Boolean-style indicator showing whether this condition is true. [inferred] |
| 24 | AtoSystemNameOrUuid | nvarchar(200) | YES |  |  | Field on AIGov.AIGov_AIIntake named AtoSystemNameOrUuid. [inferred] |
| 25 | AtoExpiration | nvarchar(100) | YES |  |  | Field on AIGov.AIGov_AIIntake named AtoExpiration. [inferred] |
| 26 | Fips199Category | nvarchar(100) | YES |  |  | Field on AIGov.AIGov_AIIntake named Fips199Category. [inferred] |
| 27 | PreDeploymentRiskPlanApplied | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 28 | PreDeploymentRiskPlanDetails | nvarchar(max) | YES |  |  | Field on AIGov.AIGov_AIIntake named PreDeploymentRiskPlanDetails. [inferred] |
| 29 | MaterialEffectScenario | nvarchar(max) | YES |  |  | Field on AIGov.AIGov_AIIntake named MaterialEffectScenario. [inferred] |
| 30 | PointsOfContact | nvarchar(max) | YES |  |  | Field on AIGov.AIGov_AIIntake named PointsOfContact. [inferred] |
| 31 | TrbStageIdentifier | int | NO |  |  | Identifier that likely links this record to TrbStage. [inferred] |
| 32 | UsesFoundationModel | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 33 | UsesChatExperience | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 34 | UsesAgenticExecution | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 35 | UsesMcpTools | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 36 | UsesRag | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 37 | UsesGraphRag | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 38 | UsesEmbeddings | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 39 | IsVendorEmbeddedAi | bit | NO |  | ((0)) | Boolean-style indicator showing whether this condition is true. [inferred] |
| 40 | UsesCentralizedGateway | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 41 | EstimatedMonthlyUsers | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 42 | EstimatedMonthlyInputTokens | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 43 | EstimatedMonthlyOutputTokens | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 44 | EstimatedMonthlySpendUsd | decimal(18,2) | YES |  |  | Numeric value associated with this record. [inferred] |
| 45 | EstimatedP95LatencyMs | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 46 | CollectsUserFeedback | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 47 | TracksAbandonedSessions | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 48 | TracksTokenUsage | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 49 | ContainsRegulatedData | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 50 | UsesExternalThirdPartyData | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 51 | CanExecuteWriteActions | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 52 | HumanApprovalRequired | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 53 | MaturityTier | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 54 | WeightedScore | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 55 | HighImpactClassification | bit | NO |  | ((0)) | Flag value stored as true or false. [inferred] |
| 56 | RiskScore | int | YES |  |  | Numeric value associated with this record. [inferred] |
| 57 | RiskBandIdentifier | int | YES |  |  | Identifier that likely links this record to RiskBand. [inferred] |
| 58 | RoutingSummary | nvarchar(max) | YES |  |  | Field on AIGov.AIGov_AIIntake named RoutingSummary. [inferred] |
| 59 | RiskSummary | nvarchar(max) | YES |  |  | Field on AIGov.AIGov_AIIntake named RiskSummary. [inferred] |
| 60 | ObservabilitySummary | nvarchar(max) | YES |  |  | Field on AIGov.AIGov_AIIntake named ObservabilitySummary. [inferred] |
