import SectionHeader from '../components/SectionHeader'
import { processSteps } from '../data/landingData'

function ProcessView() {
  return (
    <section className="sl-section sl-process" aria-labelledby="proceso" id="proceso">
      <div className="sl-container">
        <div className="sl-processBackdrop" aria-hidden="true">
          ESTRATEGIA
        </div>
        <SectionHeader
          id="proceso"
          title="Nuestro proceso"
          subtitle="Nos encargamos de que todo el proceso sea agradable, productivo y puntual."
        />

        <div className="sl-processGrid">
          {processSteps.map((step) => (
            <article key={step.title} className="sl-step">
              <div className="sl-stepNum">{step.num}</div>
              <div className="sl-stepTitle">{step.title}</div>
              <p className="sl-stepText">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessView

