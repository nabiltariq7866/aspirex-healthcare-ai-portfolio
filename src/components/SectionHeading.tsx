export default function SectionHeading({ eyebrow, title, copy, invert = false }: { eyebrow: string; title: string; copy?: string; invert?: boolean }) {
  return (
    <div className={`section-heading ${invert ? 'invert' : ''}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}
