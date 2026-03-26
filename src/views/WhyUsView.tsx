import SectionHeader from '../components/SectionHeader'
import { whyUsCards } from '../data/landingData'

function WhyUsView() {
  return (
    <section className="sl-section sl-sectionAlt" aria-labelledby="acerca" id="acerca">
      <div className="sl-container">
        <SectionHeader
          id="acerca"
          title="Por qué elegirnos"
          subtitle="Sin costos inflados, plazos lentos ni interminables idas y vueltas de agencias tradicionales. Solo productos confiables y de alta calidad entregados a tus términos."
        />

        <div className="sl-whyGrid">
          {whyUsCards.map((item) => (
            <article key={item.title} className="sl-whyCard">
              <div className="sl-whyTitle">{item.title}</div>
              <div className="sl-whyText">{item.text}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUsView

