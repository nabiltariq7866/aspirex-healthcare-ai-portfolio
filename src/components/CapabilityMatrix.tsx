import { useState } from 'react'
import { motion } from 'framer-motion'
import { capabilityGroups } from '../data/capabilities'

export default function CapabilityMatrix() {
  const [active, setActive] = useState(0)
  const group = capabilityGroups[active]
  const Icon = group.icon

  return (
    <div className="capability-matrix">
      <div className="capability-hub">
        <motion.div className="capability-orb" layoutId="capability-orb"><Icon /></motion.div>
        <span>FULL AI PRODUCT STACK</span>
        <h3>{group.title}</h3>
        <p>{group.items.join(' · ')}</p>
      </div>
      <div className="capability-nodes">
        {capabilityGroups.map((item, index) => {
          const NodeIcon = item.icon
          return (
            <button
              type="button"
              className={active === index ? 'active' : ''}
              key={item.title}
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              onClick={() => setActive(index)}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              <i><NodeIcon /></i>
              <b>{item.title}</b>
              <small>{item.items.slice(0, 2).join(' · ')}</small>
            </button>
          )
        })}
      </div>
      <div className="capability-tech-strip">
        {group.items.map((item, index) => (
          <motion.span key={item} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * .04 }}>{item}</motion.span>
        ))}
      </div>
    </div>
  )
}
