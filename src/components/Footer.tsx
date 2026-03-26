function Footer() {
  return (
    <footer className="bg-[#131313] w-full py-20 px-8 border-t border-[#BFF0FF]/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="text-xl font-bold text-[#BFF0FF]">SIERRA LABS</div>
          <p className="font-light text-sm leading-relaxed text-[#e5e2e1]/50 italic">
            © 2026 Sierra Labs. Quito, Ecuador.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#e5e2e1]/50 hover:text-[#BFF0FF] transition-colors cursor-pointer">
              public
            </span>
            <span className="material-symbols-outlined text-[#e5e2e1]/50 hover:text-[#BFF0FF] transition-colors cursor-pointer">
              account_circle
            </span>
            <span className="material-symbols-outlined text-[#e5e2e1]/50 hover:text-[#BFF0FF] transition-colors cursor-pointer">
              send
            </span>
          </div>
        </div>

        <div className="space-y-6">
          <h6 className="text-[#FFB77D] font-bold text-sm tracking-widest uppercase">Servicios</h6>
          <ul className="space-y-4 font-light text-sm">
            <li>
              <a className="text-[#e5e2e1]/50 hover:text-[#BFF0FF] transition-colors" href="#servicios">
                Desarrollo Web
              </a>
            </li>
            <li>
              <a className="text-[#e5e2e1]/50 hover:text-[#BFF0FF] transition-colors" href="#servicios">
                App Móviles
              </a>
            </li>
            <li>
              <a className="text-[#e5e2e1]/50 hover:text-[#BFF0FF] transition-colors" href="#servicios">
                Inteligencia Artificial
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h6 className="text-[#FFB77D] font-bold text-sm tracking-widest uppercase">Compañía</h6>
          <ul className="space-y-4 font-light text-sm">
            <li>
              <a className="text-[#e5e2e1]/50 hover:text-[#BFF0FF] transition-colors" href="#inicio">
                Inicio
              </a>
            </li>
            <li>
              <a className="text-[#e5e2e1]/50 hover:text-[#BFF0FF] transition-colors" href="#portafolio">
                Portafolio
              </a>
            </li>
            <li>
              <a className="text-[#e5e2e1]/50 hover:text-[#BFF0FF] transition-colors" href="#acerca">
                Acerca de
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h6 className="text-[#FFB77D] font-bold text-sm tracking-widest uppercase">Contacto</h6>
          <ul className="space-y-4 font-light text-sm">
            <li className="text-[#e5e2e1]/50">Quito, Ecuador</li>
            <li className="text-[#e5e2e1]/50">Atención local y remota</li>
            <li>
              <a
                className="text-[#FFB77D] border-b border-[#FFB77D]/30 pb-1"
                href="#contacto"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
