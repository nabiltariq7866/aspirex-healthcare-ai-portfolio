export type ProjectCategory =
  | 'Clinical Operations'
  | 'Patient Safety'
  | 'Population Health'
  | 'Interoperability'
  | 'Virtual Care'
  | 'AI Governance'

export type Project = {
  id: string
  number: string
  name: string
  shortName: string
  subtitle: string
  category: ProjectCategory
  tagline: string
  description: string
  capabilities: string[]
  technologies: string[]
  accent: string
  accent2: string
  dark: string
  demoUrl: string
  screenshots?: { hero?: string; secondary?: string[] }
  caseStudyPath?: string
  featured: boolean
  problem: string
  approach: string
  workflow: string[]
  aiCapabilities: string[]
}

// Paste each deployed demo URL into demoUrl. Empty values render “Demo link coming soon”.
export const projects: Project[] = [
  {
    id: 'careops-ai', number: '01', name: 'CareOps AI', shortName: 'CareOps',
    subtitle: 'Healthcare Operations & Patient Safety Platform', category: 'Clinical Operations',
    tagline: 'Hospital operations intelligence with patient-safety workflows built into the command layer.',
    description: 'A healthcare operations concept that unifies operational visibility, safety monitoring, workflow intelligence and human-reviewed escalation support.',
    capabilities: ['Operational Command Centre','Patient Safety Monitoring','Workflow Intelligence','Clinical Escalation Support','Predictive Operational Signals','Human Review Workflows'],
    technologies: ['React','TypeScript','Workflow Intelligence','Predictive Analytics'],
    accent: '#2E7FA3', accent2: '#55B5C7', dark: '#173B54', demoUrl: '', featured: true,
    problem: 'Operational teams often work across fragmented dashboards and manual escalation paths, reducing visibility when workload and patient-safety pressures rise.',
    approach: 'CareOps brings operational signals, safety observations and structured human review into one command experience without positioning AI as an autonomous clinical decision-maker.',
    workflow: ['Review command-centre signals','Open operational safety context','Assess evidence and escalation factors','Confirm a human-reviewed action','Track workflow state and auditability'],
    aiCapabilities: ['Operational prioritization','Predictive workload signals','Structured summaries','Human-reviewed escalation suggestions'],
  },
  {
    id: 'clinician-copilot-ai', number: '02', name: 'Clinician Copilot AI', shortName: 'Clinician Copilot',
    subtitle: 'Ambient Documentation & Clinical Workflow Assistant', category: 'Clinical Operations',
    tagline: 'AI-assisted documentation and workflow context designed around clinician review.',
    description: 'An ambient clinical workflow assistant exploring draft documentation, context summaries, evidence-grounded assistance and explicit clinician approval.',
    capabilities: ['Ambient Clinical Documentation','AI-Assisted Note Generation','Workflow Summaries','Evidence-Grounded Assistance','Clinical Task Support','Human Review & Approval'],
    technologies: ['React','TypeScript','LLM Workflows','RAG Concepts'],
    accent: '#5A8299', accent2: '#78A8C1', dark: '#2A3E4E', demoUrl: '', featured: true,
    problem: 'Clinical documentation consumes significant attention and can fragment the relationship between source context, follow-up tasks and final reviewed notes.',
    approach: 'The copilot creates editable draft assistance while preserving source context and keeping the clinician responsible for final documentation.',
    workflow: ['Capture synthetic encounter context','Generate a structured draft','Review cited evidence','Edit clinical documentation','Approve or reject the final draft'],
    aiCapabilities: ['Ambient summarization','Draft note generation','Context retrieval','Task extraction','Source-grounded assistance'],
  },
  {
    id: 'smartreferral-ai', number: '03', name: 'SmartReferral AI', shortName: 'SmartReferral',
    subtitle: 'Referral, Waiting List & Intelligent Scheduling Platform', category: 'Clinical Operations',
    tagline: 'Referral orchestration, waiting-list intelligence and transparent scheduling support.',
    description: 'A referral operations platform concept for structured intake, prioritization support, capacity visibility and scheduling workflows.',
    capabilities: ['Referral Intake','Waiting List Intelligence','Prioritization Support','Capacity Visibility','Scheduling Workflows','Operational Analytics'],
    technologies: ['React','TypeScript','Rules Engine Concepts','Operational Analytics'],
    accent: '#5877D8', accent2: '#50AFC8', dark: '#263B69', demoUrl: '', featured: false,
    problem: 'Referral teams must balance urgency, waiting time, capacity and incomplete information while maintaining transparent decision processes.',
    approach: 'SmartReferral creates a traceable referral workflow where prioritization support and scheduling intelligence remain visible to human coordinators.',
    workflow: ['Receive structured referral','Validate referral completeness','Review prioritization evidence','Match capacity and pathway','Schedule and monitor waiting-list state'],
    aiCapabilities: ['Referral summarization','Priority support','Capacity matching','Waiting-list signals'],
  },
  {
    id: 'medsafe-ai', number: '04', name: 'MedSafe AI', shortName: 'MedSafe',
    subtitle: 'Medication Error, ADR & Patient Safety Intelligence', category: 'Patient Safety',
    tagline: 'Medication safety intelligence from incident capture through investigation and corrective action.',
    description: 'An interactive patient-safety experience covering medication events, adverse drug reactions, safety signals, AI-assisted observations, investigations and corrective actions.',
    capabilities: ['Medication Event Reporting','ADR Monitoring','Safety Review Queue','Similar Incident Intelligence','Safety Signals','AI Safety Insights','Root Cause Analysis','Corrective Action Kanban'],
    technologies: ['React','TypeScript','Deterministic AI','Safety Analytics'],
    accent: '#80536E', accent2: '#D06C6A', dark: '#4A3243', demoUrl: '', screenshots: { hero: '/projects/medsafe-command-centre.png', secondary: ['/projects/medsafe-analytics.png'] }, featured: true,
    problem: 'Medication-safety workflows span reporting, triage, pattern identification, investigation and corrective action, often across disconnected tools.',
    approach: 'MedSafe connects the safety workflow end-to-end while clearly separating AI-assisted observations from final human classification and causality decisions.',
    workflow: ['Report a medication event','Review AI extraction','Confirm safety classification','Explore similar incidents and signals','Open investigation','Track corrective action'],
    aiCapabilities: ['Entity extraction','Severity suggestion','Similarity grouping','Safety-signal surfacing','Evidence-linked insights'],
  },
  {
    id: 'virtualward-ai', number: '05', name: 'VirtualWard AI', shortName: 'VirtualWard',
    subtitle: 'Hospital-at-Home & Remote Patient Monitoring', category: 'Virtual Care',
    tagline: 'Remote patient monitoring operations with care plans, alerts and virtual review workflows.',
    description: 'A hospital-at-home concept for monitoring observations, missing readings, device continuity, care plans, adherence, escalation and virtual consultations.',
    capabilities: ['Patient Monitoring','Live Observations','Alerts','Missing Reading Detection','Device Monitoring','Care Plans','Medication Adherence','Virtual Consultations','AI Monitoring Insights'],
    technologies: ['React','TypeScript','Remote Monitoring','Deterministic Scenarios'],
    accent: '#357F86', accent2: '#4FB7A6', dark: '#1D4A50', demoUrl: '', screenshots: { hero: '/projects/virtualward-overview.png', secondary: ['/projects/virtualward-care-plans.png'] }, featured: true,
    problem: 'Virtual wards require a clear operational picture across patients, expected readings, devices, alerts, clinical review and communication.',
    approach: 'VirtualWard combines monitoring continuity and care-management workflows while keeping escalation and clinical review explicitly human-controlled.',
    workflow: ['Review virtual ward census','Inspect monitoring signals','Investigate missing or abnormal readings','Contact or escalate appropriately','Complete review and care-plan tasks'],
    aiCapabilities: ['Monitoring prioritization','Missing-reading intelligence','Adherence insights','Patient monitoring summaries'],
  },
  {
    id: 'healthpopulation-ai', number: '06', name: 'HealthPopulation AI', shortName: 'HealthPopulation',
    subtitle: 'Population Health & Chronic Disease Intelligence', category: 'Population Health',
    tagline: 'Population risk, chronic-disease cohorts and proactive care-management intelligence.',
    description: 'A population-health platform exploring risk stratification, cohort intelligence, preventive care gaps, outreach and care-management workflows.',
    capabilities: ['Population Overview','Risk Stratification','Cohort Builder','Care Gaps','High Utilization','Medication Adherence','Outreach Campaigns','Care Management','Population Trends'],
    technologies: ['React','TypeScript','Risk Stratification','Cohort Intelligence'],
    accent: '#61718E', accent2: '#C99B46', dark: '#303C58', demoUrl: '', screenshots: { hero: '/projects/healthpopulation-adherence.png' }, featured: false,
    problem: 'Population health teams need to translate large aggregate populations into transparent, actionable cohorts and prioritized care workflows.',
    approach: 'HealthPopulation combines aggregate population intelligence with detailed synthetic patient workflows, preserving the distinction between risk signals and clinical decisions.',
    workflow: ['Review population overview','Open a high-risk cohort','Inspect patient-level risk evidence','Create outreach or follow-up','Track care-gap and cohort-state changes'],
    aiCapabilities: ['Diabetes risk','Cardiovascular risk','Readmission risk','Care-gap intelligence','Outreach prioritization'],
  },
  {
    id: 'healthconnect-ai', number: '07', name: 'HealthConnect AI', shortName: 'HealthConnect',
    subtitle: 'Healthcare Interoperability & Unified Patient 360 Platform', category: 'Interoperability',
    tagline: 'Interoperability observability, identity resolution and provenance-preserving Patient 360.',
    description: 'A healthcare interoperability concept spanning connected systems, patient identity review, unified longitudinal records, data quality and source-grounded AI.',
    capabilities: ['Interoperability Command Centre','Patient Identity Matching','Duplicate Review','Unified Patient Record','Longitudinal Timeline','FHIR / HL7 / DICOM Workflows','Data Quality','Provenance','Source-Grounded AI Copilot'],
    technologies: ['React','TypeScript','FHIR R4','HL7 v2','DICOM','REST APIs'],
    accent: '#2F80ED', accent2: '#56B4D3', dark: '#183F5A', demoUrl: '', screenshots: { hero: '/projects/healthconnect-overview.png', secondary: ['/projects/healthconnect-landscape.png'] }, featured: true,
    problem: 'Healthcare records arrive from many systems with different identifiers, freshness, terminology and provenance requirements.',
    approach: 'HealthConnect makes integration health, source lineage, identity evidence and unified longitudinal context visible without silently overwriting source records.',
    workflow: ['Monitor connected systems','Review identity candidate','Preserve source identifiers','Open unified Patient 360','Inspect provenance and data quality','Use source-grounded AI assistance'],
    aiCapabilities: ['Identity-match assistance','Data-quality summarization','Source-grounded patient summaries','Provenance-aware assistance'],
  },
  {
    id: 'healthguard-ai', number: '08', name: 'HealthGuard AI', shortName: 'HealthGuard',
    subtitle: 'Healthcare Cybersecurity & AI Governance Platform', category: 'AI Governance',
    tagline: 'Healthcare security operations and responsible AI governance in one evidence-driven workspace.',
    description: 'A security and AI-governance platform concept covering alerts, investigations, access intelligence, model oversight, validation and accountable risk management.',
    capabilities: ['Security Command Centre','Security Alerts','Investigations','Access Intelligence','Privileged Access','Data Export Monitoring','AI Model Registry','Validation','Human Oversight','AI Governance','Risk Register'],
    technologies: ['React','TypeScript','Security Analytics','AI Governance'],
    accent: '#506BCF', accent2: '#C68A49', dark: '#213150', demoUrl: '', screenshots: { hero: '/projects/healthguard-risk-register.png', secondary: ['/projects/healthguard-model-registry.png'] }, featured: true,
    problem: 'Healthcare AI introduces security, privacy, access and governance obligations that must remain connected to evidence and accountable owners.',
    approach: 'HealthGuard provides a synthetic command layer for security investigations and AI governance, keeping containment and governance decisions explicitly human-reviewed.',
    workflow: ['Review security or AI risk signal','Inspect supporting evidence','Open investigation or governance review','Record human decision','Track controls, risk and audit history'],
    aiCapabilities: ['Security anomaly surfacing','Risk prioritization','Governance evidence summaries','Drift and bias monitoring support'],
  },
]

export const categories = ['All','Clinical Operations','Patient Safety','Population Health','Interoperability','Virtual Care','AI Governance'] as const
