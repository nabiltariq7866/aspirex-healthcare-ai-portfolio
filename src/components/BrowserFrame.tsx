import type { ReactNode } from 'react'

export default function BrowserFrame({
  children,
  accent,
  compact = false,
  title = 'Healthcare AI',
  className = '',
}: {
  children: ReactNode
  accent: string
  compact?: boolean
  title?: string
  className?: string
}) {
  return (
    <div
      className={`browser-frame ${compact ? 'compact' : ''} ${className}`}
      style={{ '--project-accent': accent } as React.CSSProperties}
    >
      <div className="browser-chrome">
        <span className="traffic" aria-hidden="true"><i /><i /><i /></span>
        <span className="browser-title">{title}</span>
        <span className="browser-status"><i /> Synthetic demo</span>
      </div>
      <div className="browser-content">{children}</div>
    </div>
  )
}
