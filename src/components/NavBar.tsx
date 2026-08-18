import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { siteConfig } from '../data/site'
import ThemeToggle from './ThemeToggle'

const navItems = [
  ['Overview', 'overview'],
  ['Projects', 'portfolio'],
  ['Capabilities', 'capabilities'],
  ['Process', 'approach'],
  ['Responsible AI', 'responsible-ai'],
  ['About', 'about'],
] as const

type SectionId = (typeof navItems)[number][1]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<SectionId>('overview')
  const location = useLocation()
  const navigate = useNavigate()
  const home = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!home) return

    let rafId = 0
    const updateActiveSection = () => {
      rafId = 0
      const nav = document.querySelector<HTMLElement>('.premium-nav')
      const navHeight = nav?.offsetHeight ?? 72
      const activationLine = window.scrollY + navHeight + Math.min(window.innerHeight * 0.24, 220)
      let current: SectionId = 'overview'

      for (const [, id] of navItems) {
        const section = document.getElementById(id)
        if (!section) continue
        const sectionTop = section.getBoundingClientRect().top + window.scrollY
        if (sectionTop <= activationLine) current = id
        else break
      }

      const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40
      if (nearBottom) current = 'about'
      setActive((previous) => previous === current ? previous : current)
    }

    const requestUpdate = () => {
      if (rafId) return
      rafId = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    const secondFrame = window.requestAnimationFrame(updateActiveSection)
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId)
      window.cancelAnimationFrame(secondFrame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [home])

  useEffect(() => {
    if (!home) return
    const hash = location.hash.replace('#', '') as SectionId
    if (!navItems.some(([, id]) => id === hash)) return

    setActive(hash)
    const timer = window.setTimeout(() => {
      const target = document.getElementById(hash)
      if (!target) return
      const nav = document.querySelector<HTMLElement>('.premium-nav')
      const top = target.getBoundingClientRect().top + window.scrollY - (nav?.offsetHeight ?? 72) - 18
      window.scrollTo({ top, behavior: 'smooth' })
    }, 80)

    return () => window.clearTimeout(timer)
  }, [home, location.hash])

  useEffect(() => setOpen(false), [location.pathname])

  const go = (id: SectionId) => {
    setOpen(false)
    setActive(id)
    if (!home) {
      navigate(`/#${id}`)
      return
    }

    const target = document.getElementById(id)
    if (!target) return
    const nav = document.querySelector<HTMLElement>('.premium-nav')
    const top = target.getBoundingClientRect().top + window.scrollY - (nav?.offsetHeight ?? 72) - 16
    window.history.replaceState(null, '', `/#${id}`)
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <>
      <header className={`premium-nav ${scrolled ? 'scrolled' : ''} ${home ? 'on-home' : 'on-detail'}`}>
        <div className="nav-inner">
          <button
            type="button"
            className="brand-lockup"
            onClick={() => {
              if (!home) {
                navigate('/')
                return
              }
              setActive('overview')
              window.history.replaceState(null, '', '/#overview')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            aria-label="Go to portfolio home"
          >
            <span className="brand-symbol"><i /><i /><i /></span>
            <span><b>{siteConfig.companyName}</b><small>Healthcare AI Portfolio</small></span>
          </button>

          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([label, id]) => {
              const isActive = home && active === id
              return (
                <button type="button" key={id} className={isActive ? 'active' : ''} aria-current={isActive ? 'page' : undefined} onClick={() => go(id)}>
                  {label}
                  {isActive && <motion.i layoutId="nav-active" transition={{ type: 'spring', stiffness: 500, damping: 38 }} />}
                </button>
              )
            })}
          </nav>

          <div className="nav-actions">
            <ThemeToggle />
            <button className="nav-cta" type="button" onClick={() => go('portfolio')}>Explore Projects <ArrowUpRight size={15} /></button>
            <button className="mobile-menu-btn" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Toggle navigation">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <motion.div className={`mobile-nav-panel ${open ? 'open' : ''}`} initial={false} animate={{ opacity: open ? 1 : 0, pointerEvents: open ? 'auto' : 'none' }}>
        <div className="mobile-nav-grid" aria-hidden="true" />
        <div className="mobile-nav-header"><span>ASPIREX LLC</span><small>Healthcare AI Product Portfolio</small></div>
        <nav aria-label="Mobile navigation">
          {navItems.map(([label, id], index) => {
            const isActive = home && active === id
            return (
              <button key={id} type="button" className={isActive ? 'active' : ''} aria-current={isActive ? 'page' : undefined} onClick={() => go(id)}>
                <span>{String(index + 1).padStart(2, '0')}</span><b>{label}</b><ArrowUpRight />
              </button>
            )
          })}
        </nav>
        <div className="mobile-nav-foot"><span>8 interactive product systems</span><span>Synthetic healthcare data</span></div>
      </motion.div>
    </>
  )
}
