import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import ProjectVisual from './ProjectVisual'

const layoutMap: Record<string, string> = {
  'careops-ai': 'bento-wide-left',
  'clinician-copilot-ai': 'bento-narrow-right',
  'smartreferral-ai': 'bento-narrow-left',
  'medsafe-ai': 'bento-wide-right',
  'virtualward-ai': 'bento-cinematic',
  'healthpopulation-ai': 'bento-half',
  'healthconnect-ai': 'bento-half',
  'healthguard-ai': 'bento-cinematic',
}

export default function ProjectCard({ project, onPreview }: { project: Project; onPreview?: (project: Project) => void }) {
  const hasScreenshot = Boolean(project.screenshots?.hero)

  const onPointerMove = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`)
  }

  return (
    <article
      className={`project-card ${layoutMap[project.id] ?? 'bento-half'}`}
      style={{ '--accent': project.accent, '--accent-2': project.accent2, '--dark': project.dark } as React.CSSProperties}
      onPointerMove={onPointerMove}
    >
      <div className="project-card-light" aria-hidden="true" />

      <div className="project-card-copy">
        <div className="project-meta">
          <span>{project.number}</span>
          <i style={{ background: project.accent }} />
          {project.category}
        </div>

        <h3>{project.name}</h3>
        <h4>{project.subtitle}</h4>

        <p className="project-pinpoint">{project.tagline}</p>

        <div className="project-impact-preview" aria-label={`${project.name} intended impact`}>
          <small>DESIGNED IMPACT</small>
          <div>
            {project.impact.slice(0, 2).map((item) => (
              <span key={item}><i />{item}</span>
            ))}
          </div>
        </div>

        <div className="project-chips">
          {project.capabilities.slice(0, 3).map((capability) => (
            <span key={capability}>{capability}</span>
          ))}
        </div>

        <div className="project-links">
          <Link to={`/projects/${project.id}`}>
            Explore product <ArrowRight size={16} />
          </Link>

          {project.demoUrl ? (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Launch live demo <ArrowUpRight size={15} />
            </a>
          ) : (
            <span className="demo-pending">Demo link coming soon</span>
          )}
        </div>
      </div>

      <div className="project-visual-wrap">
        <ProjectVisual
          project={project}
          compact={false}
          onOpen={hasScreenshot && onPreview ? () => onPreview(project) : undefined}
        />
      </div>

      <span className="project-index-watermark" aria-hidden="true">{project.number}</span>
    </article>
  )
}
