import { BrainCircuit, HeartPulse, Layers3, Network, ShieldCheck } from 'lucide-react'

export const capabilityGroups = [
  { title: 'AI & Intelligence', icon: BrainCircuit, items: ['Predictive Analytics','AI Copilots','Pattern Detection','Risk Stratification','Intelligent Summarization'] },
  { title: 'Healthcare Workflows', icon: HeartPulse, items: ['Patient Safety','Virtual Care','Clinical Documentation','Population Health','Referral Management'] },
  { title: 'Enterprise Platforms', icon: Layers3, items: ['Operational Dashboards','Workflow Automation','Auditability','Role-Based Workflows','Data Visualization'] },
  { title: 'Healthcare Data', icon: Network, items: ['FHIR','HL7','DICOM','API Integrations','Longitudinal Records','Data Provenance'] },
  { title: 'Responsible AI', icon: ShieldCheck, items: ['Human-in-the-Loop','Explainability','Source Traceability','Governance','Model Oversight'] },
]
