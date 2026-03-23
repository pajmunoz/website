import SectionHeader from '../components/SectionHeader'
import { testimonials } from '../data/landingData'

function TestimonialsView() {
  return (
    <section className="sl-section" aria-labelledby="testimonios" id="testimonios">
      <div className="sl-container">
        <SectionHeader
          id="testimonios"
          title="Testimonios"
          subtitle="Lo que dicen de nosotros. Emprendedores y líderes de negocios confían en Sierra Labs."
        />

        <div className="sl-testimonialGrid">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="sl-testimonial">
              <div className="sl-testimonialQuote">"{testimonial.quote}"</div>
              <div className="sl-testimonialFooter">
                <div className="sl-testimonialName">{testimonial.name}</div>
                <div className="sl-testimonialRole">{testimonial.role}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsView

