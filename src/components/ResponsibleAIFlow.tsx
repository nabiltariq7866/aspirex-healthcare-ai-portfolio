import { BrainCircuit, CheckCircle2, Database, FileSearch, UserCheck } from 'lucide-react'

const nodes = [
  { title: 'Healthcare input', copy: 'Patient, workflow or operational context', Icon: Database },
  { title: 'AI assistance', copy: 'Signal · Summary · Recommendation', Icon: BrainCircuit },
  { title: 'Evidence layer', copy: 'Source records · Provenance · Reasoning', Icon: FileSearch },
  { title: 'Human decision', copy: 'Approve · Modify · Reject', Icon: UserCheck },
]

export default function ResponsibleAIFlow() {
  return (
    <div className="responsible-flow">
      <div className="responsible-flow-line" aria-hidden="true"><i /></div>
      {nodes.map(({ title, copy, Icon }, index) => (
        <div className="responsible-node" key={title}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <i><Icon /></i>
          <b>{title}</b>
          <small>{copy}</small>
          {index === nodes.length - 1 && <em><CheckCircle2 size={13} /> Human accountability preserved</em>}
        </div>
      ))}
    </div>
  )
}
