import { useRef } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { projects } from '../data/projects'
import ProjectVisual from './ProjectVisual'

const stack = [
  { project: projects[6], className: 'hero-product healthconnect', label: 'Interoperability', factor: 1 },
  { project: projects[4], className: 'hero-product virtualward', label: 'Virtual monitoring', factor: .7 },
  { project: projects[3], className: 'hero-product medsafe', label: 'Patient safety', factor: .58 },
  { project: projects[7], className: 'hero-product healthguard', label: 'AI governance', factor: .42 },
]

export default function HeroProductStack() {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduced = useReducedMotion()

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduced || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width - .5) * 2
    const y = ((event.clientY - rect.top) / rect.height - .5) * 2
    ref.current.style.setProperty('--pointer-x', x.toFixed(3))
    ref.current.style.setProperty('--pointer-y', y.toFixed(3))
  }

  const reset = () => {
    if (!ref.current) return
    ref.current.style.setProperty('--pointer-x', '0')
    ref.current.style.setProperty('--pointer-y', '0')
  }

  return (
    <div ref={ref} className="hero-product-stack" onPointerMove={onPointerMove} onPointerLeave={reset}>
      <div className="hero-stack-grid" aria-hidden="true" />
      <div className="hero-stack-glow" aria-hidden="true" />
      {stack.map(({ project, className, label, factor }, index) => (
        <motion.div
          key={project.id}
          className={className}
          style={{ '--parallax': factor } as React.CSSProperties}
          initial={reduced ? false : { opacity: 0, y: 34, scale: .95 }}
          animate={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: .86, delay: .18 + index * .11, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero-product-label"><i style={{ background: project.accent }} />{label}</span>
          <ProjectVisual project={project} compact priority={index === 0} />
        </motion.div>
      ))}
      <motion.div
        className="hero-stack-proof"
        initial={reduced ? false : { opacity: 0, y: 14 }}
        animate={reduced ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: .72, delay: .78 }}
      >
        <span>08</span>
        <div><b>Interactive product systems</b><small>Real interfaces · synthetic healthcare data</small></div>
      </motion.div>
    </div>
  )
}
