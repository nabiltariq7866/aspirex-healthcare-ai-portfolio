import { useCallback, useLayoutEffect, useState } from 'react'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ShieldCheck } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProjectVisual from '../components/ProjectVisual'
import ProjectLightbox, { type LightboxState } from '../components/ProjectLightbox'
import { FadeMask, Reveal } from '../components/Motion'
import { projects, type Project } from '../data/projects'

function DetailArchitecture({ project }: { project: Project }) {
  const layers = [
    ['HEALTHCARE SOURCES', project.technologies.filter((item) => ['FHIR R4', 'HL7 v2', 'DICOM', 'REST APIs'].includes(item)).join(' · ') || 'Synthetic workflow sources'],
    ['DATA / WORKFLOW LAYER', 'Structured context · State · Provenance'],
    ['AI INTELLIGENCE', project.aiCapabilities.slice(0, 3).join(' · ')],
    ['OPERATIONAL WORKFLOW', project.workflow.slice(1, 4).join(' · ')],
    ['HUMAN DECISION', 'Review · Modify · Approve · Audit'],
  ]
  return <div className="detail-architecture">{layers.map(([title, copy], index) => <div key={title}><span>{String(index + 1).padStart(2, '0')}</span><b>{title}</b><p>{copy}</p>{index < layers.length - 1 && <i />}</div>)}</div>
}

export default function ProjectDetailPage() {
  const { projectId } = useParams()
  const index = projects.findIndex((project) => project.id === projectId)
  const [lightbox, setLightbox] = useState<LightboxState>(null)
  if (index < 0) return <Navigate to="/" replace />

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  /*
   * ProjectDetailPage is reused when navigating from one project
   * detail route to another. Force the new project to start at the
   * top even if the previous project was scrolled near the bottom.
   */
  useLayoutEffect(() => {
    const html = document.documentElement
    const body = document.body

    const previousHtmlBehavior = html.style.scrollBehavior
    const previousBodyBehavior = body.style.scrollBehavior

    html.style.scrollBehavior = 'auto'
    body.style.scrollBehavior = 'auto'

    const reset = () => {
      window.scrollTo(0, 0)
      html.scrollTop = 0
      body.scrollTop = 0
    }

    reset()

    const frame = window.requestAnimationFrame(() => {
      reset()

      window.requestAnimationFrame(() => {
        reset()

        html.style.scrollBehavior = previousHtmlBehavior
        body.style.scrollBehavior = previousBodyBehavior
      })
    })

    return () => {
      window.cancelAnimationFrame(frame)

      html.style.scrollBehavior = previousHtmlBehavior
      body.style.scrollBehavior = previousBodyBehavior
    }
  }, [projectId])

  const openPreview = useCallback((target: Project) => {
    const images = [target.screenshots?.hero, ...(target.screenshots?.secondary ?? [])].filter(Boolean) as string[]
    if (!images.length) return
    setLightbox({ project: target, images, index: 0 })
  }, [])

  return (
    <div className="site-shell project-detail-shell" style={{ '--accent': project.accent, '--accent-2': project.accent2, '--dark': project.dark } as React.CSSProperties}>
      <NavBar />
      <main>
        <section className="project-detail-hero">
          <div className="detail-ambient one" aria-hidden="true" /><div className="detail-ambient two" aria-hidden="true" />
          <div className="detail-hero-inner">
            <Reveal className="detail-hero-copy">
              <Link className="detail-back" to="/#portfolio"><ArrowLeft size={15} /> Back to portfolio</Link>
              <div className="detail-project-label"><span>{project.number}</span><i />{project.category}</div>
              <h1>{project.name}</h1>
              <h2>{project.subtitle}</h2>
              <p>{project.description}</p>
              <div className="detail-actions">
                {project.demoUrl ? <a className="primary-btn light" href={project.demoUrl} target="_blank" rel="noopener noreferrer">Launch Live Demo <ArrowUpRight size={16} /></a> : <span className="detail-demo-pending">Live demo URL ready to connect</span>}
                <a className="secondary-btn dark" href="#product-story">Explore the product story <ArrowRight size={15} /></a>
              </div>
            </Reveal>
            <FadeMask className="detail-hero-visual" delay={.08}><ProjectVisual project={project} onOpen={project.screenshots?.hero ? () => openPreview(project) : undefined} priority /></FadeMask>
          </div>
          <div className="detail-hero-meta"><span>SYNTHETIC DATA</span><span>HUMAN REVIEW</span><span>INTERACTIVE WORKFLOW</span></div>
        </section>

        <section id="product-story" className="detail-editorial section">
          <Reveal className="editorial-number">01</Reveal>
          <Reveal className="editorial-heading"><span>THE PROBLEM</span><h2>The operational challenge.</h2></Reveal>
          <Reveal className="editorial-copy"><p>{project.problem}</p></Reveal>
          <Reveal className="editorial-number">02</Reveal>
          <Reveal className="editorial-heading"><span>PRODUCT APPROACH</span><h2>How the platform responds.</h2></Reveal>
          <Reveal className="editorial-copy"><p>{project.approach}</p></Reveal>
        </section>

        <section className="detail-capabilities-section section">
          <Reveal className="detail-section-heading"><span>03 · CAPABILITY ARCHITECTURE</span><h2>A focused workflow system—not a collection of disconnected features.</h2></Reveal>
          <div className="detail-capability-list">{project.capabilities.map((capability, capabilityIndex) => <Reveal className="detail-capability-row" delay={capabilityIndex * .025} key={capability}><span>{String(capabilityIndex + 1).padStart(2, '0')}</span><b>{capability}</b><i /></Reveal>)}</div>
        </section>

        <section className="detail-workflow-section section-dark-soft">
          <div className="detail-workflow-inner">
            <Reveal className="detail-workflow-copy"><span>04 · EXAMPLE WORKFLOW</span><h2>From signal to accountable action.</h2><p>The demonstration is designed as a connected product journey so every screen reflects the current synthetic workflow state.</p></Reveal>
            <div className="detail-workflow-track">{project.workflow.map((step, workflowIndex) => <Reveal className="detail-workflow-step" delay={workflowIndex * .045} key={step}><span>{String(workflowIndex + 1).padStart(2, '0')}</span><i /><b>{step}</b></Reveal>)}</div>
          </div>
        </section>

        <section className="detail-ai-section">
          <div className="detail-ai-grid" aria-hidden="true" />
          <div className="detail-ai-inner">
            <Reveal className="detail-ai-copy"><span><ShieldCheck size={15} /> RESPONSIBLE AI</span><h2>AI that supports the workflow without hiding the evidence.</h2><p>Assistance is framed as draft, prioritization, summarization or signal support—not autonomous clinical judgement.</p></Reveal>
            <div className="detail-ai-list">{project.aiCapabilities.map((item, aiIndex) => <Reveal className="detail-ai-item" delay={aiIndex * .045} key={item}><span>{String(aiIndex + 1).padStart(2, '0')}</span><Check size={15} /><b>{item}</b></Reveal>)}</div>
          </div>
        </section>

        <section className="detail-architecture-section section">
          <Reveal className="detail-section-heading"><span>05 · SYSTEM ARCHITECTURE</span><h2>Healthcare context → intelligence → accountable workflow.</h2></Reveal>
          <Reveal delay={.08}><DetailArchitecture project={project} /></Reveal>
          <Reveal className="detail-tech-foot"><p>Technology represented in this concept</p><div>{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div><small>Portfolio demonstrations use synthetic data and simulated workflows. No live clinical integration is implied.</small></Reveal>
        </section>

        <section className="next-project-section" style={{ '--next-accent': next.accent, '--next-dark': next.dark } as React.CSSProperties}>
          <div className="next-project-copy"><span>NEXT PRODUCT · {next.number}</span><h2>{next.name}</h2><p>{next.subtitle}</p><Link to={`/projects/${next.id}`}>Explore next product <ArrowRight size={17} /></Link></div>
          <div className="next-project-visual"><ProjectVisual project={next} compact /></div>
        </section>
      </main>
      <Footer />
      <ProjectLightbox state={lightbox} onChange={(lightboxIndex) => setLightbox((current) => current ? { ...current, index: lightboxIndex } : current)} onClose={() => setLightbox(null)} />
    </div>
  )
}
