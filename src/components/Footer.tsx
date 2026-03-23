function Footer() {
  return (
    <footer className="sl-footer" aria-label="Pie de página">
      <div className="sl-container sl-footerInner">
        <div className="sl-footerBrand">
          <img
            className="sl-footerLogo"
            src="/logo.png"
            alt="SierraLabs"
            height={55}
            width={170}
          />
          <div className="sl-footerText">Desarrollo de Software y Soluciones IA</div>
        </div>

        <div className="sl-footerLinks">
          <a className="sl-footerLink" href="#inicio">
            Inicio
          </a>
          <a className="sl-footerLink" href="#portafolio">
            Portafolio
          </a>
          <a className="sl-footerLink" href="#acerca">
            Acerca De
          </a>
          <a className="sl-footerLink" href="#contacto">
            Contacto
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

