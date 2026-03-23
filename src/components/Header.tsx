function Header() {
  return (
    <header className="sl-header">
      <div className="sl-container sl-headerInner">
        <a className="sl-logoLink" href="#inicio" aria-label="SierraLabs">
          <img
            className="sl-logo"
            src="/logo.png"
            alt="SierraLabs"
            height={68}
            width={210}
          />
        </a>

        <nav className="sl-nav" aria-label="Navegación principal">
          <a className="sl-navLink" href="#inicio">
            Inicio
          </a>
          <a className="sl-navLink" href="#portafolio">
            Portafolio
          </a>
          <a className="sl-navLink" href="#acerca">
            Acerca De
          </a>
          <a className="sl-navLink" href="#contacto">
            Contacto
          </a>
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

