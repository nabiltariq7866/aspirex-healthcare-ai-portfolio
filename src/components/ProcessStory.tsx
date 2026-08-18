import { motion } from 'framer-motion'

const steps = [
  ['01', 'Understand the Workflow', 'Start with the real operating decision, handoff, constraint and accountability model—not a technology feature list.'],
  ['02', 'Unify Operational Data', 'Bring the evidence, workflow context and system state into one usable product layer.'],
  ['03', 'Introduce AI Assistance', 'Use AI where it can summarize, prioritize, detect patterns or remove repeated manual effort.'],
  ['04', 'Keep Humans in Control', 'Make review, override, provenance and accountability explicit in every high-impact workflow.'],
  ['05', 'Measure & Improve', 'Track outcomes, operational signals and feedback so the system becomes more useful over time.'],
]

export default function ProcessStory() {
  return (
    <div className="process-story">
      <div className="process-sticky">
        <span>HOW WE BUILD</span>
        <h2>Technology follows the workflow.</h2>
        <p>We design around the real operating decision first, then introduce intelligence where it improves clarity, speed or coordination.</p>
        <div className="process-progress"><i /></div>
      </div>
      <div className="process-steps">
        {steps.map(([number, title, copy], index) => (
          <motion.article
            key={number}
            className="process-story-step"
            initial={{ opacity: .35, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: .6 }}
            transition={{ duration: .5 }}
          >
            <span>{number}</span>
            <div><small>STEP {String(index + 1).padStart(2, '0')}</small><h3>{title}</h3><p>{copy}</p></div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
