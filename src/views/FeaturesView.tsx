import SectionHeader from '../components/SectionHeader'
import { features } from '../data/landingData'

function FeaturesView() {
  return (
    <section className="sl-section sl-sectionAlt" aria-labelledby="queConstruimos" id="que">
      <div className="sl-container">
        <SectionHeader
          id="queConstruimos"
          title="Qué construimos"
          subtitle="Soluciones diseñadas para resolver problemas reales. Si lo puedes imaginar, lo podemos construir."
        />

        <div className="sl-grid6">
          {features.map((feature) => (
            <article key={feature.title} className="sl-card">
              <div className="sl-cardIcon" aria-hidden="true">
                {feature.title.slice(0, 1)}
              </div>
              <h3 className="sl-cardTitle">{feature.title}</h3>
              <p className="sl-cardText">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesView

