import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#paquetes', label: 'Paquetes' },
  { href: '#contacto', label: 'Contacto' },
  { href: '/blog/', label: 'Noticias' },
] as const

function Header() {
  const [activeHref, setActiveHref] = useState<string>('#servicios')
  const [pastHero, setPastHero] = useState<boolean>(false)
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    function updateState() {
      const triggerY = window.scrollY + window.innerHeight * 0.35

      const trackedItems = NAV_ITEMS.filter((item) => item.href.startsWith('#'))
      let current: string = trackedItems[0]?.href ?? '#servicios'
      let currentTop = -Infinity
      for (const item of trackedItems) {
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

  useEffect(() => {
    if (!menuOpen) return
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

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
              onClick={() => setMenuOpen(false)}
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

        <button
          aria-controls="mobile-nav"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-full border border-[#BFF0FF]/15 bg-surface/30 text-[#e5e2e1] transition-colors hover:border-[#BFF0FF]/30 hover:text-[#BFF0FF]"
          onClick={() => setMenuOpen((v) => !v)}
          type="button"
        >
          <span aria-hidden="true" className="material-symbols-outlined text-[22px]">
            {menuOpen ? 'close' : 'menu'}
          </span>
        </button>

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

      {menuOpen ? (
        <div className="md:hidden px-6 pb-5">
          <div
            className="glass-card rounded-2xl px-4 py-3"
            id="mobile-nav"
            role="dialog"
            aria-label="Menú de navegación"
          >
            <div className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-semibold tracking-tight text-[#e5e2e1]/90 hover:bg-white/5 hover:text-[#BFF0FF] transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </nav>
  )
}

export default Header
