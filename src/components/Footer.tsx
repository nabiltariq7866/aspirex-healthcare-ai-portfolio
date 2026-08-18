import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { siteConfig } from '../data/site'

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-glow" aria-hidden="true" />
      <div className="footer-main">
        <div className="footer-brand">
          <span className="brand-symbol"><i /><i /><i /></span>
          <div><b>{siteConfig.companyName}</b><h3>Healthcare AI Product Portfolio</h3><p>Interactive product concepts spanning patient safety, virtual care, population intelligence, interoperability and responsible AI governance.</p></div>
        </div>
        <div className="footer-col"><span>Projects</span>{projects.slice(0, 4).map((project) => <Link key={project.id} to={`/projects/${project.id}`}>{project.name}</Link>)}</div>
        <div className="footer-col"><span>More systems</span>{projects.slice(4).map((project) => <Link key={project.id} to={`/projects/${project.id}`}>{project.name}</Link>)}</div>
        <div className="footer-col"><span>Contact</span><a href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a><a href={siteConfig.websiteUrl} target="_blank" rel="noopener noreferrer">aspirexllc.io <ArrowUpRight size={13} /></a></div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 {siteConfig.companyName}</span>
        <p>Portfolio demonstrations use synthetic data and simulate healthcare workflows. They are not production clinical systems.</p>
      </div>
    </footer>
  )
}
