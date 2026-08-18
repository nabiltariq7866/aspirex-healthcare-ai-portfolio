import { useEffect } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '../data/projects'

export type LightboxState = { project: Project; images: string[]; index: number } | null

export default function ProjectLightbox({ state, onChange, onClose }: { state: LightboxState; onChange: (index: number) => void; onClose: () => void }) {
  useEffect(() => {
    if (!state) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onChange((state.index - 1 + state.images.length) % state.images.length)
      if (event.key === 'ArrowRight') onChange((state.index + 1) % state.images.length)
    }
    window.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [state, onChange, onClose])

  return (
    <AnimatePresence>
      {state && (
        <motion.div className="lightbox-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={onClose}>
          <motion.div
            className="lightbox-shell"
            initial={{ opacity: 0, scale: .96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: .97, y: 10 }}
            transition={{ duration: .36, ease: [0.22, 1, 0.36, 1] }}
            onMouseDown={(event: React.MouseEvent<HTMLDivElement>) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${state.project.name} interface preview`}
          >
            <div className="lightbox-head">
              <div><span>{state.project.number} · {state.project.category}</span><b>{state.project.name}</b></div>
              <button type="button" onClick={onClose} aria-label="Close preview"><X /></button>
            </div>
            <div className="lightbox-stage">
              <img src={state.images[state.index]} alt={`${state.project.name} screen ${state.index + 1}`} />
              {state.images.length > 1 && (
                <>
                  <button className="lightbox-nav prev" type="button" onClick={() => onChange((state.index - 1 + state.images.length) % state.images.length)} aria-label="Previous screenshot"><ArrowLeft /></button>
                  <button className="lightbox-nav next" type="button" onClick={() => onChange((state.index + 1) % state.images.length)} aria-label="Next screenshot"><ArrowRight /></button>
                </>
              )}
            </div>
            <div className="lightbox-foot"><span>Interface {String(state.index + 1).padStart(2, '0')} / {String(state.images.length).padStart(2, '0')}</span><span>Synthetic demonstration environment</span></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
