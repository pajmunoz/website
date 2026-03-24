import SectionHeader from '../components/SectionHeader'
import { buildWhatsAppUrl } from '../constants/whatsapp'
import { serviceCards } from '../data/landingData'

function ServicesView() {
  return (
    <section className="sl-section" aria-labelledby="servicios" id="servicios">
      <div className="sl-container">
        <SectionHeader
          id="servicios"
          title="Paquetes"
          subtitle="Opciones claras según la etapa de tu negocio."
        />

        <div className="sl-serviceGrid">
          {serviceCards.map((card) => {
            const whatsappMessage = `quiero mas informacion sobre el paquete ${card.badgeText}`
            const whatsappHref = buildWhatsAppUrl(whatsappMessage)
            return (
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
                  <a
                    aria-label={`Consultar por WhatsApp: ${card.badgeText}`}
                    className="sl-primaryBtn"
                    href={whatsappHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesView

