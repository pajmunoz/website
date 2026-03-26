type SectionHeaderProps = {
  id: string
  subtitle: string
  title: string
}

function SectionHeader({ id, subtitle, title }: SectionHeaderProps) {
  return (
    <div className="sl-sectionHead">
      <h2 className="sl-sectionTitle" id={id}>
        {title}
      </h2>
      <div className="sl-sectionLine" aria-hidden="true" />
      <p className="sl-sectionSubtitle">{subtitle}</p>
    </div>
  )
}

export default SectionHeader

