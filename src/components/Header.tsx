import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#que', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#paquetes', label: 'Paquetes' },
  { href: '#portafolio', label: 'Portafolio' },
  { href: '#acerca', label: 'Acerca De' },
  { href: '#contacto', label: 'Contacto' },
] as const

function Header() {
  const [activeHref, setActiveHref] = useState<string>('#inicio')

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.querySelector(item.href)).filter(
      (section): section is Element => Boolean(section),
    )

    if (!sections.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (!visible.length) {
          return
        }

        setActiveHref(`#${visible[0].target.id}`)
      },
      {
        root: null,
        rootMargin: '-35% 0px -50% 0px',
        threshold: [0.2, 0.35, 0.5, 0.7],
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <header className="sl-header">
      <div className="sl-container sl-headerInner">
        <a className="sl-logoLink" href="#inicio" aria-label="SierraLabs">
          <span className="sl-wordmark">SIERRA LABS</span>
        </a>

        <nav className="sl-nav" aria-label="Navegación principal">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              className={`sl-navLink${activeHref === item.href ? ' sl-navLinkActive' : ''}`}
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="sl-headerCtas">
          <a
            className="sl-primaryBtn"
            href="https://forms.gle/ukfE8YVW7R9oQvsL8"
            target="_blank"
            rel="noreferrer"
          >
            Agendar llamada
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

