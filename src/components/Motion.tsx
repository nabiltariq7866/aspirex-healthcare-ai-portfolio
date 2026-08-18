import type { PropsWithChildren } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export function Reveal({ children, className = '', delay = 0, y = 28 }: PropsWithChildren<{ className?: string; delay?: number; y?: number }>) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.72, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function FadeMask({ children, className = '', delay = 0 }: PropsWithChildren<{ className?: string; delay?: number }>) {
  const reduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 18, scale: 0.985 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{ duration: 0.82, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export const motionEase = ease
