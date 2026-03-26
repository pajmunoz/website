import CtaLink from '../components/CtaLink'

function HeroView() {
  return (
    <section className="sl-hero" id="inicio">
      <div className="sl-container sl-heroGrid">
        <div className="sl-heroCopy">
          <div className="sl-heroPill">Tecnología + Producto + SaaS</div>
          <h1 className="sl-heroTitle">
            De idea a producto
            <br />
            <span className="sl-gradientText">en tiempo récord</span>
          </h1>
          <p className="sl-heroSubtitle">
            Construimos productos digitales que facilitan tu trabajo y mejoran tu vida.
          </p>
          <div className="sl-heroActions">
            <CtaLink href="#contacto" kind="primary">
              Empezar proyecto
            </CtaLink>
            <CtaLink href="#portafolio" kind="secondary">
              Ver portafolio
            </CtaLink>
          </div>

          <div className="sl-trust">
            <div className="sl-trustLabel">
              Más de 10 años de experiencia con clientes de diferentes rubros.
            </div>
            <div className="sl-trustLogos" aria-hidden="true">
              {[
                '10+ años en desarrollo',
                'Startups y empresas',
                'Proyectos de alto impacto',
                'Soporte continuo',
              ].map((item) => (
                <div key={item} className="sl-trustLogoText">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sl-heroArt" aria-hidden="true">
          <div className="sl-heroArtCard">
            <img
              className="sl-heroArtLogo"
              src="/logo.png"
              alt=""
              height={120}
              width={360}
            />
            <div className="sl-heroArtCaption">
              Sierra Labs | Soluciones IA y Desarrollo de Software
            </div>
          </div>
          <div className="sl-heroGlow" />
        </div>
      </div>
    </section>
  )
}

export default HeroView

