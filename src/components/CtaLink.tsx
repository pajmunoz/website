type CtaLinkProps = {
  children: string
  href: string
  kind: 'primary' | 'secondary'
}

function CtaLink({ children, href, kind }: CtaLinkProps) {
  const className = kind === 'primary' ? 'sl-primaryBtn' : 'sl-secondaryBtn'

  return (
    <a className={className} href={href}>
      {children}
    </a>
  )
}

export default CtaLink

