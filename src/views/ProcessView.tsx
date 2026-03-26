const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Descubrimiento',
    text: 'Analizamos tu mercado y definimos los requerimientos clave para asegurar que el producto resuelva problemas reales.',
    borderClass: 'border-primary',
    textClass: 'text-primary',
  },
  {
    num: '02',
    title: 'Diseño',
    text: 'Creamos interfaces intuitivas y estéticas que garantizan una experiencia de usuario excepcional y memorable.',
    borderClass: 'border-secondary',
    textClass: 'text-secondary',
  },
  {
    num: '03',
    title: 'Desarrollo',
    text: 'Nuestros ingenieros transforman los diseños en código limpio, escalable y de alto rendimiento utilizando stacks modernos.',
    borderClass: 'border-tertiary',
    textClass: 'text-tertiary',
  },
  {
    num: '04',
    title: 'Lanzamiento',
    text: 'Desplegamos tu producto con estándares de calidad premium y te acompañamos en el crecimiento continuo.',
    borderClass: 'border-primary',
    textClass: 'text-primary',
  },
]

function ProcessView() {
  return (
    <section className="py-32 px-8" id="proceso">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
              Nuestro proceso
            </h2>
            <p className="text-on-surface-variant text-lg">
              Un camino estructurado desde la concepción hasta el éxito en el mercado.
            </p>
          </div>
          <div
            data-anim="process-backdrop"
            className="text-8xl font-black text-outline-variant/10 select-none"
            aria-hidden="true"
          >
            ESTRATEGIA
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div
            data-anim="process-line"
            className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 -z-10"
            aria-hidden="true"
          />
          {PROCESS_STEPS.map((step) => (
            <div key={step.num} className="relative">
              <div
                className={`w-16 h-16 rounded-full bg-surface-container-highest ${step.borderClass} border flex items-center justify-center ${step.textClass} font-bold text-xl mb-8 glass-card`}
              >
                {step.num}
              </div>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-on-surface-variant text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessView
