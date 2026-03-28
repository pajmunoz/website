import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#proceso', label: 'Proceso' },
  { href: '#paquetes', label: 'Paquetes' },
  { href: '#portafolio', label: 'Nuestro trabajo' },
  { href: '#acerca', label: 'Elígenos' },
  { href: '#conocenos', label: 'Conócenos' },
  { href: '#contacto', label: 'Contacto' },
] as const

function Header() {
  const [activeHref, setActiveHref] = useState<string>('#inicio')
  const [pastHero, setPastHero] = useState<boolean>(false)

  useEffect(() => {
    function updateState() {
      const triggerY = window.scrollY + window.innerHeight * 0.35

      let current: string = NAV_ITEMS[0].href
      let currentTop = -Infinity
      for (const item of NAV_ITEMS) {
        const el = document.querySelector(item.href)
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY
          if (top <= triggerY && top > currentTop) {
            current = item.href
            currentTop = top
          }
        }
      }
      setActiveHref(current)

      const hero = document.querySelector('#inicio')
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom
        setPastHero(heroBottom <= 80)
      }
    }

    updateState()
    window.addEventListener('scroll', updateState, { passive: true })
    return () => window.removeEventListener('scroll', updateState)
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl dark:bg-[#131313]/60 border-b border-[#BFF0FF]/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <a href="#inicio" aria-label="SierraLabs inicio">
          <img
            src="/logo-sierralabs.svg"
            alt="Sierra Labs"
            className="h-9 w-auto object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </a>

        <div className="hidden md:flex items-center space-x-8 font-medium tracking-tight text-sm">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={
                activeHref === item.href
                  ? 'text-[#BFF0FF] border-b-2 border-[#BFF0FF] pb-1 transition-all duration-300'
                  : 'text-[#e5e2e1]/70 hover:text-[#BFF0FF] transition-all duration-300'
              }
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          className={`bg-gradient-to-r from-primary-container to-primary text-on-primary-container px-6 py-2 rounded-full font-bold text-sm active:scale-95 hover:shadow-[0_0_20px_rgba(191,240,255,0.3)] transition-all duration-300 ${
            pastHero
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
          href="https://forms.gle/ukfE8YVW7R9oQvsL8"
          target="_blank"
          rel="noreferrer"
          aria-hidden={!pastHero}
        >
          Empezar proyecto
        </a>
      </div>
    </nav>
  )
}

export default Header
