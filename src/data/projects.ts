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
  industryChallenge: string
  solution: string
  impact: string[]
  problemHeadline: string
  solutionHeadline: string
  outcomeHeadline: string
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
    tagline: 'Hospital pressure is rarely one problem. CareOps brings patient flow, capacity, discharge risk and safety signals into one operational view.',
    description: 'An AI-assisted healthcare operations platform designed to help hospital teams see operational pressure earlier, coordinate across workflows and keep escalations accountable.',
    industryChallenge: 'Hospitals are managing growing demand while coordinating beds, referrals, discharges, appointments and patient-safety escalations across multiple teams and systems. When operational visibility is fragmented, bottlenecks and delayed handoffs become harder to identify early.',
    solution: 'CareOps AI brings patient flow, capacity, referral status, discharge risk and safety signals into a single command centre, then supports prioritization, escalation and accountable follow-up without automating clinical decisions.',
    impact: ['Spot operational pressure earlier','Coordinate teams from one live view','Reduce manual escalation and handoff friction'],
    problemHeadline: 'Operational pressure hides across disconnected workflows.',
    solutionHeadline: 'Bring flow, capacity and safety into one command view.',
    outcomeHeadline: 'See bottlenecks earlier and coordinate action faster.',
    capabilities: ['Operational Command Centre','Patient Safety Monitoring','Workflow Intelligence','Clinical Escalation Support','Predictive Operational Signals','Human Review Workflows'],
    technologies: ['React','TypeScript','Workflow Intelligence','Predictive Analytics'],
    accent: '#3BC4B5', accent2: '#C59B48', dark: '#191922', demoUrl: 'https://careops-ai-one.vercel.app/', screenshots: { hero: '/projects/careops-overview.webp' }, featured: true,
    problem: 'Hospitals are managing growing demand while coordinating beds, referrals, discharges, appointments and patient-safety escalations across multiple teams and systems. When operational visibility is fragmented, bottlenecks and delayed handoffs become harder to identify early.',
    approach: 'CareOps AI brings patient flow, capacity, referral status, discharge risk and safety signals into a single command centre, then supports prioritization, escalation and accountable follow-up without automating clinical decisions.',
    workflow: ['Review command-centre signals','Open operational safety context','Assess evidence and escalation factors','Confirm a human-reviewed action','Track workflow state and auditability'],
    aiCapabilities: ['Operational prioritization','Predictive workload signals','Structured summaries','Human-reviewed escalation suggestions'],
  },
  {
    id: 'clinician-copilot-ai', number: '02', name: 'Clinician Copilot AI', shortName: 'Clinician Copilot',
    subtitle: 'Ambient Documentation & Clinical Workflow Assistant', category: 'Clinical Operations',
    tagline: 'Clinicians lose time moving between encounter context, notes and follow-up work. Clinician Copilot turns that context into reviewable documentation and actions.',
    description: 'An AI-assisted clinical workspace that converts encounter context into editable documentation, evidence-linked assistance and follow-up actions while keeping the clinician in control.',
    industryChallenge: 'Clinicians increasingly move between patient conversations, documentation, medication review, follow-up tasks and multiple digital systems. The friction is not simply writing notes—it is assembling context accurately while preserving enough time and attention for clinical work.',
    solution: 'Clinician Copilot AI turns encounter context into structured draft notes, medication-reconciliation signals, follow-up actions and source-grounded assistance that the clinician can review, edit, approve or reject.',
    impact: ['Reduce documentation assembly work','Keep evidence visible during review','Support faster follow-up without removing clinician control'],
    problemHeadline: 'Documentation steals time from clinical work.',
    solutionHeadline: 'Turn encounter context into reviewable notes and actions.',
    outcomeHeadline: 'Give clinicians more time for patient care.',
    capabilities: ['Ambient Clinical Documentation','AI-Assisted Note Generation','Workflow Summaries','Evidence-Grounded Assistance','Clinical Task Support','Human Review & Approval'],
    technologies: ['React','TypeScript','LLM Workflows','RAG Concepts'],
    accent: '#8FAF9A', accent2: '#C59B48', dark: '#191922', demoUrl: 'https://clinician-copilot-ai.vercel.app/', screenshots: { hero: '/projects/clinician-copilot-overview.webp' }, featured: true,
    problem: 'Clinicians increasingly move between patient conversations, documentation, medication review, follow-up tasks and multiple digital systems. The friction is not simply writing notes—it is assembling context accurately while preserving enough time and attention for clinical work.',
    approach: 'Clinician Copilot AI turns encounter context into structured draft notes, medication-reconciliation signals, follow-up actions and source-grounded assistance that the clinician can review, edit, approve or reject.',
    workflow: ['Capture synthetic encounter context','Generate a structured draft','Review cited evidence','Edit clinical documentation','Approve or reject the final draft'],
    aiCapabilities: ['Ambient summarization','Draft note generation','Context retrieval','Task extraction','Source-grounded assistance'],
  },
  {
    id: 'smartreferral-ai', number: '03', name: 'SmartReferral AI', shortName: 'SmartReferral',
    subtitle: 'Referral, Waiting List & Intelligent Scheduling Platform', category: 'Clinical Operations',
    tagline: 'Incomplete referrals and waiting-list pressure slow patient access. SmartReferral identifies readiness gaps, risk and capacity opportunities in one workflow.',
    description: 'An AI-assisted referral and access platform designed to surface incomplete referrals, waiting-list pressure and scheduling opportunities before they become larger access bottlenecks.',
    industryChallenge: 'Healthcare access teams are balancing long waiting lists, incomplete referrals, appointment-capacity constraints and pressure to move patients through pathways efficiently. A referral can remain delayed simply because required information is missing or the right slot is difficult to identify.',
    solution: 'SmartReferral AI structures referral intake, identifies missing information, surfaces waiting-list and breach risk, highlights cancellation-ready patients and supports transparent capacity matching and scheduling.',
    impact: ['Progress complete referrals sooner','Use available capacity more intelligently','Give access teams clearer waiting-list risk visibility'],
    problemHeadline: 'Incomplete referrals slow access to care.',
    solutionHeadline: 'Surface readiness gaps, risk and capacity opportunities.',
    outcomeHeadline: 'Move the right patient toward the right slot sooner.',
    capabilities: ['Referral Intake','Waiting List Intelligence','Prioritization Support','Capacity Visibility','Scheduling Workflows','Operational Analytics'],
    technologies: ['React','TypeScript','Rules Engine Concepts','Operational Analytics'],
    accent: '#C59B48', accent2: '#9375B5', dark: '#191922', demoUrl: 'https://smart-referral-ai-jade.vercel.app/', screenshots: { hero: '/projects/smartreferral-overview.webp' }, featured: false,
    problem: 'Healthcare access teams are balancing long waiting lists, incomplete referrals, appointment-capacity constraints and pressure to move patients through pathways efficiently. A referral can remain delayed simply because required information is missing or the right slot is difficult to identify.',
    approach: 'SmartReferral AI structures referral intake, identifies missing information, surfaces waiting-list and breach risk, highlights cancellation-ready patients and supports transparent capacity matching and scheduling.',
    workflow: ['Receive structured referral','Validate referral completeness','Review prioritization evidence','Match capacity and pathway','Schedule and monitor waiting-list state'],
    aiCapabilities: ['Referral summarization','Priority support','Capacity matching','Waiting-list signals'],
  },
  {
    id: 'medsafe-ai', number: '04', name: 'MedSafe AI', shortName: 'MedSafe',
    subtitle: 'Medication Error, ADR & Patient Safety Intelligence', category: 'Patient Safety',
    tagline: 'Medication incidents are often reviewed one by one. MedSafe connects events, patterns and investigation evidence so safety teams can see what is repeating.',
    description: 'A medication-safety intelligence platform that connects incident reporting, pattern detection, human review, investigation and corrective action in one traceable workflow.',
    industryChallenge: 'Medication-safety teams manage incidents, near misses, adverse drug reactions and recurring risks across large volumes of clinical activity. Individual events may be reviewed, but common patterns across medications, wards, shifts or workflows can be harder to recognize early.',
    solution: 'MedSafe AI connects medication events, ADRs, near misses and investigation evidence into a safety intelligence layer that surfaces similar incidents, recurring patterns and emerging signals for human validation.',
    impact: ['Connect isolated events into visible patterns','Prioritize safety reviews with clearer evidence','Carry findings into investigation and corrective action'],
    problemHeadline: 'Safety events are easy to review in isolation.',
    solutionHeadline: 'Connect incidents, patterns and investigation evidence.',
    outcomeHeadline: 'Spot recurring risk before it becomes harder to manage.',
    capabilities: ['Medication Event Reporting','ADR Monitoring','Safety Review Queue','Similar Incident Intelligence','Safety Signals','AI Safety Insights','Root Cause Analysis','Corrective Action Kanban'],
    technologies: ['React','TypeScript','Deterministic AI','Safety Analytics'],
    accent: '#80536E', accent2: '#D06C6A', dark: '#191922', demoUrl: 'https://med-safe-ai.vercel.app/', screenshots: { hero: '/projects/medsafe-command-centre.webp', secondary: ['/projects/medsafe-analytics.webp'] }, featured: true,
    problem: 'Medication-safety teams manage incidents, near misses, adverse drug reactions and recurring risks across large volumes of clinical activity. Individual events may be reviewed, but common patterns across medications, wards, shifts or workflows can be harder to recognize early.',
    approach: 'MedSafe AI connects medication events, ADRs, near misses and investigation evidence into a safety intelligence layer that surfaces similar incidents, recurring patterns and emerging signals for human validation.',
    workflow: ['Report a medication event','Review AI extraction','Confirm safety classification','Explore similar incidents and signals','Open investigation','Track corrective action'],
    aiCapabilities: ['Entity extraction','Severity suggestion','Similarity grouping','Safety-signal surfacing','Evidence-linked insights'],
  },
  {
    id: 'virtualward-ai', number: '05', name: 'VirtualWard AI', shortName: 'VirtualWard',
    subtitle: 'Hospital-at-Home & Remote Patient Monitoring', category: 'Virtual Care',
    tagline: 'Remote patients can deteriorate between scheduled reviews. VirtualWard brings readings, alerts, device continuity and care-plan work into one live view.',
    description: 'A hospital-at-home and remote-monitoring workspace designed to help clinical teams identify who needs attention, why, and what follow-up is still outstanding.',
    industryChallenge: 'Virtual wards and hospital-at-home programs extend care beyond the hospital, but clinicians must still identify deterioration, missing observations and adherence issues without continuously seeing the patient in person. Device failures and incomplete readings add another layer of operational risk.',
    solution: 'VirtualWard AI brings remote observations, device connectivity, alerts, missing readings, medication adherence, care plans and virtual-review workflows into one monitoring workspace with explicit human escalation.',
    impact: ['Identify patients needing attention sooner','Reduce blind spots from missing readings or device issues','Coordinate monitoring, review and care-plan follow-up'],
    problemHeadline: 'Remote deterioration can happen between scheduled reviews.',
    solutionHeadline: 'Unify readings, alerts, devices and care-plan activity.',
    outcomeHeadline: 'Help teams focus sooner on patients needing attention.',
    capabilities: ['Patient Monitoring','Live Observations','Alerts','Missing Reading Detection','Device Monitoring','Care Plans','Medication Adherence','Virtual Consultations','AI Monitoring Insights'],
    technologies: ['React','TypeScript','Remote Monitoring','Deterministic Scenarios'],
    accent: '#3BC4B5', accent2: '#C59B48', dark: '#191922', demoUrl: 'https://virtualward-ai.vercel.app/', screenshots: { hero: '/projects/virtualward-overview.webp', secondary: ['/projects/virtualward-care-plans.webp'] }, featured: true,
    problem: 'Virtual wards and hospital-at-home programs extend care beyond the hospital, but clinicians must still identify deterioration, missing observations and adherence issues without continuously seeing the patient in person. Device failures and incomplete readings add another layer of operational risk.',
    approach: 'VirtualWard AI brings remote observations, device connectivity, alerts, missing readings, medication adherence, care plans and virtual-review workflows into one monitoring workspace with explicit human escalation.',
    workflow: ['Review virtual ward census','Inspect monitoring signals','Investigate missing or abnormal readings','Contact or escalate appropriately','Complete review and care-plan tasks'],
    aiCapabilities: ['Monitoring prioritization','Missing-reading intelligence','Adherence insights','Patient monitoring summaries'],
  },
  {
    id: 'healthpopulation-ai', number: '06', name: 'HealthPopulation AI', shortName: 'HealthPopulation',
    subtitle: 'Population Health & Chronic Disease Intelligence', category: 'Population Health',
    tagline: 'High-risk patients and care gaps are easy to lose inside population-scale data. HealthPopulation turns risk signals into prioritized cohorts and outreach work.',
    description: 'A population-health intelligence platform that translates large synthetic populations into transparent risk cohorts, care gaps and actionable care-management workflows.',
    industryChallenge: 'Population-health teams are responsible for large patient populations while trying to identify who is at greatest risk, who is overdue for preventive care and where outreach is most urgent. The challenge is turning thousands of disconnected signals into understandable priorities.',
    solution: 'HealthPopulation AI combines chronic-disease risk, preventive-care gaps, readmission risk, adherence concerns and utilization patterns to identify priority cohorts and connect those insights to outreach and follow-up workflows.',
    impact: ['Prioritize the highest-need cohorts','Turn care gaps into structured outreach','Give care managers clearer population-level risk visibility'],
    problemHeadline: 'Population-scale risk can hide inside fragmented data.',
    solutionHeadline: 'Turn risk signals into prioritized cohorts and outreach.',
    outcomeHeadline: 'Focus care-management effort where it matters most.',
    capabilities: ['Population Overview','Risk Stratification','Cohort Builder','Care Gaps','High Utilization','Medication Adherence','Outreach Campaigns','Care Management','Population Trends'],
    technologies: ['React','TypeScript','Risk Stratification','Cohort Intelligence'],
    accent: '#9375B5', accent2: '#C59B48', dark: '#191922', demoUrl: 'https://healthpopulation-ai.vercel.app/', screenshots: { hero: '/projects/healthpopulation-overview.webp' }, featured: false,
    problem: 'Population-health teams are responsible for large patient populations while trying to identify who is at greatest risk, who is overdue for preventive care and where outreach is most urgent. The challenge is turning thousands of disconnected signals into understandable priorities.',
    approach: 'HealthPopulation AI combines chronic-disease risk, preventive-care gaps, readmission risk, adherence concerns and utilization patterns to identify priority cohorts and connect those insights to outreach and follow-up workflows.',
    workflow: ['Review population overview','Open a high-risk cohort','Inspect patient-level risk evidence','Create outreach or follow-up','Track care-gap and cohort-state changes'],
    aiCapabilities: ['Diabetes risk','Cardiovascular risk','Readmission risk','Care-gap intelligence','Outreach prioritization'],
  },
  {
    id: 'healthconnect-ai', number: '07', name: 'HealthConnect AI', shortName: 'HealthConnect',
    subtitle: 'Healthcare Interoperability & Unified Patient 360 Platform', category: 'Interoperability',
    tagline: 'Disconnected systems create fragmented patient records. HealthConnect unifies identity, provenance and longitudinal data into one traceable Patient 360.',
    description: 'A healthcare interoperability platform designed to connect source systems while keeping identity evidence, data quality and provenance visible across the unified patient journey.',
    industryChallenge: 'Healthcare data remains distributed across EHRs, labs, imaging, pharmacy, insurance and other platforms. Connecting interfaces alone does not solve uncertain patient identity, duplicate records, inconsistent terminology, stale data or the need to understand exactly where information came from.',
    solution: 'HealthConnect AI creates a unified interoperability and Patient 360 layer that monitors connected systems, supports patient-identity review, preserves source identifiers and provenance, exposes data-quality issues and grounds AI assistance in visible source records.',
    impact: ['Create a more complete patient view','Keep source lineage and identity evidence traceable','Surface interoperability and data-quality issues before they are hidden'],
    problemHeadline: 'Disconnected systems create fragmented patient records.',
    solutionHeadline: 'Unify identity, provenance and longitudinal information.',
    outcomeHeadline: 'Give teams one more traceable Patient 360 view.',
    capabilities: ['Interoperability Command Centre','Patient Identity Matching','Duplicate Review','Unified Patient Record','Longitudinal Timeline','FHIR / HL7 / DICOM Workflows','Data Quality','Provenance','Source-Grounded AI Copilot'],
    technologies: ['React','TypeScript','FHIR R4','HL7 v2','DICOM','REST APIs'],
    accent: '#3BC4B5', accent2: '#C59B48', dark: '#191922', demoUrl: 'https://healthconnect-ai-neon.vercel.app/', screenshots: { hero: '/projects/healthconnect-overview.webp', secondary: ['/projects/healthconnect-landscape.webp'] }, featured: true,
    problem: 'Healthcare data remains distributed across EHRs, labs, imaging, pharmacy, insurance and other platforms. Connecting interfaces alone does not solve uncertain patient identity, duplicate records, inconsistent terminology, stale data or the need to understand exactly where information came from.',
    approach: 'HealthConnect AI creates a unified interoperability and Patient 360 layer that monitors connected systems, supports patient-identity review, preserves source identifiers and provenance, exposes data-quality issues and grounds AI assistance in visible source records.',
    workflow: ['Monitor connected systems','Review identity candidate','Preserve source identifiers','Open unified Patient 360','Inspect provenance and data quality','Use source-grounded AI assistance'],
    aiCapabilities: ['Identity-match assistance','Data-quality summarization','Source-grounded patient summaries','Provenance-aware assistance'],
  },
  {
    id: 'healthguard-ai', number: '08', name: 'HealthGuard AI', shortName: 'HealthGuard',
    subtitle: 'Healthcare Cybersecurity & AI Governance Platform', category: 'AI Governance',
    tagline: 'Healthcare AI adds new security and governance risks. HealthGuard connects security signals, model oversight and human review in one accountable workspace.',
    description: 'A healthcare cybersecurity and AI-governance platform designed to connect operational security, model oversight, evidence and accountable risk decisions.',
    industryChallenge: 'Healthcare organizations are adopting more APIs, connected systems and AI models while facing tighter expectations around security, privacy, model oversight and clinical accountability. Traditional monitoring may not provide enough context for AI-specific risks such as drift, sensitive-data exposure or overdue governance reviews.',
    solution: 'HealthGuard AI combines security signals, access activity, AI model registry and validation, governance reviews, investigations and risk tracking so teams can surface issues while keeping containment and governance decisions explicitly human-controlled.',
    impact: ['Connect security and AI-governance evidence','Prioritize model and access risks for review','Keep approvals, investigations and ownership auditable'],
    problemHeadline: 'Healthcare AI creates new security and governance risk.',
    solutionHeadline: 'Connect security signals, model oversight and review.',
    outcomeHeadline: 'Keep high-impact AI decisions accountable and auditable.',
    capabilities: ['Security Command Centre','Security Alerts','Investigations','Access Intelligence','Privileged Access','Data Export Monitoring','AI Model Registry','Validation','Human Oversight','AI Governance','Risk Register'],
    technologies: ['React','TypeScript','Security Analytics','AI Governance'],
    accent: '#C59B48', accent2: '#FF6B6B', dark: '#191922', demoUrl: 'https://healthguard-ai-rho.vercel.app/', screenshots: { hero: '/projects/healthguard-overview.webp', secondary: ['/projects/healthguard-model-registry.webp'] }, featured: true,
    problem: 'Healthcare organizations are adopting more APIs, connected systems and AI models while facing tighter expectations around security, privacy, model oversight and clinical accountability. Traditional monitoring may not provide enough context for AI-specific risks such as drift, sensitive-data exposure or overdue governance reviews.',
    approach: 'HealthGuard AI combines security signals, access activity, AI model registry and validation, governance reviews, investigations and risk tracking so teams can surface issues while keeping containment and governance decisions explicitly human-controlled.',
    workflow: ['Review security or AI risk signal','Inspect supporting evidence','Open investigation or governance review','Record human decision','Track controls, risk and audit history'],
    aiCapabilities: ['Security anomaly surfacing','Risk prioritization','Governance evidence summaries','Drift and bias monitoring support'],
  },
]

export const categories = ['All','Clinical Operations','Patient Safety','Population Health','Interoperability','Virtual Care','AI Governance'] as const
