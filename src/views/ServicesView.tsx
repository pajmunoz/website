import CtaLink from '../components/CtaLink'
import SectionHeader from '../components/SectionHeader'
import { serviceCards } from '../data/landingData'

function ServicesView() {
  return (
    <section className="sl-section" aria-labelledby="servicios" id="servicios">
      <div className="sl-container">
        <SectionHeader
          id="servicios"
          title="Servicios"
          subtitle="Tu nuevo partner tecnológico comprometido a la calidad y los resultados."
        />

        <div className="sl-serviceGrid">
          {serviceCards.map((card) => (
            <article key={card.title} className="sl-serviceCard">
              <div className="sl-serviceBadge">{card.badgeText}</div>
              <div className="sl-serviceEyebrow">{card.eyebrow}</div>
              <h3 className="sl-serviceTitle">{card.title}</h3>
              <ul className="sl-bullets">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="sl-bullet">
                    <span className="sl-bulletDot" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="sl-serviceActions">
                <CtaLink href="#contacto" kind="primary">
                  Empezar proyecto
                </CtaLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesView

