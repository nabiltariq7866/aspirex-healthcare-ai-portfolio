import { useState } from 'react'
import { projects } from '../data/projects'

const domains = [
  { name: 'Clinical Workflows', projectIds: ['careops-ai', 'clinician-copilot-ai', 'smartreferral-ai'] },
  { name: 'Patient Safety', projectIds: ['careops-ai', 'medsafe-ai'] },
  { name: 'Virtual Care', projectIds: ['virtualward-ai'] },
  { name: 'Population Health', projectIds: ['healthpopulation-ai'] },
  { name: 'Healthcare Data', projectIds: ['healthconnect-ai'] },
  { name: 'Security & Governance', projectIds: ['healthguard-ai'] },
]

export default function HealthcareMap() {
  const [active, setActive] = useState(0)
  const current = domains[active]
  const activeProjects = current.projectIds.map((id) => projects.find((p) => p.id === id)).filter(Boolean)

  return (
    <div className="healthcare-map">
      <div className="healthcare-map-track">
        <div className="healthcare-map-line" aria-hidden="true" />
        {domains.map((domain, index) => (
          <button
            key={domain.name}
            type="button"
            className={active === index ? 'active' : ''}
            onMouseEnter={() => setActive(index)}
            onFocus={() => setActive(index)}
            onClick={() => setActive(index)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            <i />
            <b>{domain.name}</b>
          </button>
        ))}
      </div>
      <div className="healthcare-map-detail">
        <div><span>ACTIVE DOMAIN</span><h3>{current.name}</h3><p>Product concepts mapped to this part of the healthcare operating model.</p></div>
        <div className="healthcare-map-projects">
          {activeProjects.map((project) => project && (
            <a href={`/projects/${project.id}`} key={project.id} style={{ '--accent': project.accent } as React.CSSProperties}>
              <i />
              <span><small>{project.number}</small><b>{project.name}</b></span>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
