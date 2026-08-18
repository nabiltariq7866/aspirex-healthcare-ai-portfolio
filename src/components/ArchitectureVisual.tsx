import { BrainCircuit, CloudCog, Code2, DatabaseZap } from 'lucide-react'

const layers = [
  { label: 'DATA', title: 'Healthcare Data Layer', items: ['FHIR', 'HL7', 'DICOM', 'REST APIs'], Icon: DatabaseZap },
  { label: 'APPLICATION', title: 'Product Engineering', items: ['React', 'TypeScript', 'Django', 'FastAPI'], Icon: Code2 },
  { label: 'INTELLIGENCE', title: 'AI & Decision Support', items: ['LLMs', 'RAG', 'Predictive AI', 'Agentic Workflows'], Icon: BrainCircuit },
  { label: 'INFRASTRUCTURE', title: 'Enterprise Infrastructure', items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'], Icon: CloudCog },
]

export default function ArchitectureVisual() {
  return (
    <div className="architecture-visual">
      {layers.map(({ label, title, items, Icon }, index) => (
        <div className="architecture-layer" key={label}>
          <span>{label}</span>
          <i className="architecture-icon"><Icon /></i>
          <div><h3>{title}</h3><p>{items.map((item) => <em key={item}>{item}</em>)}</p></div>
          {index < layers.length - 1 && <b className="architecture-connector" aria-hidden="true" />}
        </div>
      ))}
    </div>
  )
}
