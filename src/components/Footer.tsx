function Footer() {
  return (
    <footer className="sl-footer" aria-label="Pie de página">
      <div className="sl-container sl-footerInner">
        <div className="sl-footerBrand">
          <div className="sl-footerWordmark">SIERRA LABS</div>
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

