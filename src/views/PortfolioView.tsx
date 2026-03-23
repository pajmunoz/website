import CtaLink from '../components/CtaLink'
import SectionHeader from '../components/SectionHeader'
import { projects } from '../data/landingData'

function PortfolioView() {
  return (
    <section className="sl-section" aria-labelledby="portafolio" id="portafolio">
      <div className="sl-container">
        <SectionHeader
          id="portafolio"
          title="Explora nuestro trabajo"
          subtitle="Aplicaciones Web, Agentes IA, Automatizaciones, Aplicaciones Móviles y más."
        />

        <div className="sl-projectGrid">
          {projects.map((project) => (
            <article key={project.title} className="sl-projectCard">
              <div className="sl-projectThumb" aria-hidden="true">
                <div className="sl-projectThumbTag">{project.caption}</div>
              </div>
              <div className="sl-projectMeta">
                <div className="sl-projectCategory">{project.category}</div>
                <div className="sl-projectTitle">{project.title}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="sl-moreRow">
          <CtaLink href="#contacto" kind="secondary">
            Ver más proyectos
          </CtaLink>
        </div>
      </div>
    </section>
  )
}

export default PortfolioView

