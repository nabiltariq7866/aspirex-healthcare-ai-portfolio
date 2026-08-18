import { useCallback, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, CheckCircle2, Sparkles } from 'lucide-react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import HeroProductStack from '../components/HeroProductStack'
import ProjectCard from '../components/ProjectCard'
import ProjectVisual from '../components/ProjectVisual'
import ProjectLightbox, { type LightboxState } from '../components/ProjectLightbox'
import CapabilityMatrix from '../components/CapabilityMatrix'
import HealthcareMap from '../components/HealthcareMap'
import ProcessStory from '../components/ProcessStory'
import ResponsibleAIFlow from '../components/ResponsibleAIFlow'
import ArchitectureVisual from '../components/ArchitectureVisual'
import SectionHeading from '../components/SectionHeading'
import { FadeMask, Reveal } from '../components/Motion'
import { categories, projects, type Project } from '../data/projects'
import { siteConfig } from '../data/site'

const principles = [
  'AI suggests, humans decide',
  'Evidence remains visible',
  'Source provenance is preserved',
  'Clinical decisions require review',
  'Synthetic portfolio data only',
  'Actions remain auditable',
]

export default function HomePage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All')
  const [lightbox, setLightbox] = useState<LightboxState>(null)
  const reduced = useReducedMotion()
  const filtered = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.category === filter), [filter])
  const featured = projects.find((project) => project.id === 'healthconnect-ai') ?? projects[0]

  const openPreview = useCallback((project: Project) => {
    const images = [project.screenshots?.hero, ...(project.screenshots?.secondary ?? [])].filter(Boolean) as string[]
    if (!images.length) return
    setLightbox({ project, images, index: 0 })
  }, [])

  return (
    <div className="site-shell">
      <NavBar />
      <main>
        <section id="overview" className="hero-section">
          <div className="hero-backdrop" aria-hidden="true"><i className="hero-radial one" /><i className="hero-radial two" /><i className="hero-grid-lines" /></div>
          <div className="hero-inner">
            <motion.div className="hero-copy" initial={reduced ? false : { opacity: 0, y: 28 }} animate={reduced ? undefined : { opacity: 1, y: 0 }} transition={{ duration: .82, ease: [0.22, 1, 0.36, 1] }}>
              <div className="hero-kicker"><Sparkles size={14} /> Healthcare AI Product Portfolio <span>08 SYSTEMS</span></div>
              <h1>AI systems designed around <em>real healthcare workflows.</em></h1>
              <p>A suite of interactive healthcare AI platforms exploring patient safety, virtual care, population health, interoperability, clinical intelligence and responsible AI governance.</p>
              <div className="hero-actions">
                <button className="primary-btn" type="button" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>Explore the Portfolio <ArrowRight size={17} /></button>
                <button className="secondary-btn dark" type="button" onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}>View Capabilities <ArrowDown size={16} /></button>
              </div>
              <div className="hero-proof-row">
                {[['08', 'AI Platforms'], ['100%', 'Synthetic Data'], ['Human', 'Review Built In'], ['Enterprise', 'Workflows']].map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
              </div>
            </motion.div>
            <HeroProductStack />
          </div>
          <div className="hero-scroll-cue"><span>Scroll to explore</span><i /></div>
        </section>

        <section className="metric-transition" aria-label="Portfolio overview">
          <div className="metric-panel">
            {[['08', 'Interactive AI Systems'], ['06', 'Healthcare Domains'], ['100%', 'Synthetic Demo Data'], ['Human', 'Decision Accountability']].map(([value, label], index) => (
              <Reveal className="metric-panel-item" delay={index * .06} key={label}><strong>{value}</strong><span>{label}</span></Reveal>
            ))}
          </div>
        </section>

        <section className="featured-story section-dark-soft">
          <div className="featured-story-inner">
            <Reveal className="featured-copy">
              <div className="featured-index"><span>{featured.number}</span><i /><b>FEATURED PRODUCT</b></div>
              <h2>{featured.name}</h2>
              <h3>{featured.subtitle}</h3>
              <p>{featured.description}</p>
              <div className="featured-capabilities">{featured.capabilities.slice(0, 3).map((item) => <span key={item}><CheckCircle2 size={14} />{item}</span>)}</div>
              <div className="featured-actions"><a href={`/projects/${featured.id}`} className="primary-btn light">Explore Product <ArrowRight size={16} /></a>{featured.demoUrl ? <a href={featured.demoUrl} target="_blank" rel="noopener noreferrer" className="secondary-btn dark">Launch Demo <ArrowUpRight size={15} /></a> : <span className="featured-demo-pending">Live demo URL ready to connect</span>}</div>
            </Reveal>
            <FadeMask className="featured-visual-wrap" delay={.08}><ProjectVisual project={featured} onOpen={() => openPreview(featured)} priority /></FadeMask>
          </div>
        </section>

        <section id="portfolio" className="portfolio-section section">
          <Reveal><SectionHeading eyebrow="The product portfolio" title="Eight healthcare systems. One capability story." copy="Each product tackles a different operational challenge—and each interface is designed around transparent workflows, evidence and human accountability." /></Reveal>
          <Reveal className="portfolio-toolbar" delay={.06}>
            <div className="filter-segment" role="tablist" aria-label="Filter projects">
              {categories.map((category) => <button type="button" role="tab" aria-selected={filter === category} key={category} className={filter === category ? 'active' : ''} onClick={() => setFilter(category)}>{category}{filter === category && <motion.i layoutId="filter-active" />}</button>)}
            </div>
            <span>{String(filtered.length).padStart(2, '0')} systems shown</span>
          </Reveal>
          <motion.div layout className="project-bento">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div layout key={project.id} initial={{ opacity: 0, scale: .985 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: .98 }} transition={{ duration: .36 }}>
                  <ProjectCard project={project} onPreview={openPreview} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </section>

        <section id="capabilities" className="capability-section section-dark">
          <div className="section-inner-wide">
            <Reveal><SectionHeading invert eyebrow="Full-stack capability" title="Built across the full AI product stack." copy="Product engineering, healthcare data, workflow intelligence, enterprise infrastructure and responsible AI—designed as one coherent system." /></Reveal>
            <Reveal delay={.08}><CapabilityMatrix /></Reveal>
          </div>
        </section>

        <section className="ecosystem-section section">
          <Reveal><SectionHeading eyebrow="Healthcare ecosystem" title="A portfolio mapped across the operating model." copy="Move across the healthcare domains to see how the products connect clinical work, safety, virtual care, population intelligence, data and governance." /></Reveal>
          <Reveal delay={.08}><HealthcareMap /></Reveal>
        </section>

        <section id="approach" className="process-story-section section">
          <ProcessStory />
        </section>

        <section id="responsible-ai" className="responsible-section">
          <div className="responsible-ambient" aria-hidden="true" />
          <div className="responsible-inner">
            <Reveal className="responsible-heading"><span>RESPONSIBLE AI BY DESIGN</span><h2>AI assistance.<br /><em>Human accountability.</em></h2><p>High-impact healthcare decisions remain reviewable, evidence-linked and explicitly human-controlled throughout the portfolio.</p></Reveal>
            <Reveal delay={.08}><ResponsibleAIFlow /></Reveal>
            <div className="responsible-principles">{principles.map((principle, index) => <Reveal className="responsible-principle" delay={index * .04} key={principle}><span>{String(index + 1).padStart(2, '0')}</span><b>{principle}</b></Reveal>)}</div>
          </div>
        </section>

        <section className="architecture-section section">
          <Reveal><SectionHeading eyebrow="Engineering architecture" title="From healthcare data to intelligent workflow." copy="A visual architecture spanning interoperability, product engineering, AI assistance and enterprise infrastructure—not a technology logo wall." /></Reveal>
          <Reveal delay={.08}><ArchitectureVisual /></Reveal>
        </section>

        <section id="about" className="studio-section section">
          <Reveal className="studio-layout">
            <div className="studio-statement"><span>ASPIREX LLC · PRODUCT ENGINEERING</span><h2>Building intelligent systems for complex healthcare operations.</h2><p>The portfolio represents practical capability across modern frontend engineering, healthcare data, AI-assisted workflows and enterprise product systems.</p><a href={siteConfig.websiteUrl} target="_blank" rel="noopener noreferrer">Visit AspireX LLC <ArrowUpRight size={15} /></a></div>
            <div className="studio-capabilities">{['AI Platforms', 'Enterprise Systems', 'Workflow Automation', 'Healthcare Data', 'AI Governance'].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><b>{item}</b><i /></div>)}</div>
          </Reveal>
        </section>

        <section className="final-cta-section">
          <div className="final-cta-grid" aria-hidden="true" />
          <div className="final-cta-orbit one" aria-hidden="true" /><div className="final-cta-orbit two" aria-hidden="true" />
          <Reveal className="final-cta-copy"><span>WHAT SHOULD WE BUILD NEXT?</span><h2>What healthcare workflow should we make <em>smarter next?</em></h2><p>We design AI-assisted platforms around real operational workflows—from patient safety and virtual care to interoperability, population health and AI governance.</p><div><a className="primary-btn light" href={`mailto:${siteConfig.contactEmail}`}>Discuss a Project <ArrowUpRight size={16} /></a><button className="secondary-btn dark" type="button" onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}>Explore Portfolio <ArrowRight size={16} /></button></div></Reveal>
        </section>
      </main>
      <Footer />
      <ProjectLightbox state={lightbox} onChange={(index) => setLightbox((current) => current ? { ...current, index } : current)} onClose={() => setLightbox(null)} />
    </div>
  )
}
