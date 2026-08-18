import { Maximize2 } from 'lucide-react'
import type { Project } from '../data/projects'
import BrowserFrame from './BrowserFrame'
import ProductMockup from './ProductMockup'

export default function ProjectVisual({
  project,
  compact = false,
  screenshot,
  onOpen,
  priority = false,
}: {
  project: Project
  compact?: boolean
  screenshot?: string
  onOpen?: () => void
  priority?: boolean
}) {
  const image = screenshot ?? project.screenshots?.hero

  return (
    <div className="project-visual" style={{ '--accent': project.accent } as React.CSSProperties}>
      <BrowserFrame accent={project.accent} compact={compact} title={project.name}>
        {image ? (
          <img
            className="project-screenshot"
            src={image}
            alt={`${project.name} interface preview`}
            loading={priority ? 'eager' : 'lazy'}
          />
        ) : (
          <ProductMockup project={project} detailed={!compact} />
        )}
      </BrowserFrame>
      {image && onOpen && (
        <button className="visual-expand" type="button" onClick={onOpen} aria-label={`Open ${project.name} screenshot`}>
          <Maximize2 size={15} />
          <span>Expand interface</span>
        </button>
      )}
    </div>
  )
}
