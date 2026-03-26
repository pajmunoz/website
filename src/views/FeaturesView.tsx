const FEATURE_CARDS = [
  {
    icon: 'language',
    title: 'Web Apps',
    description: 'Aplicaciones robustas y escalables con tecnologías modernas para optimizar tus operaciones de negocio.',
    accentClass: 'text-primary',
  },
  {
    icon: 'smartphone',
    title: 'Apps Móviles',
    description: 'Experiencias nativas y multiplataforma diseñadas para cautivar a tus usuarios en cualquier dispositivo.',
    accentClass: 'text-secondary',
  },
  {
    icon: 'settings_suggest',
    title: 'Herramientas Internas',
    description: 'Dashboards y sistemas de gestión personalizados que eliminan la fricción operativa de tu equipo.',
    accentClass: 'text-tertiary',
  },
  {
    icon: 'storefront',
    title: 'Marketplaces',
    description: 'Ecosistemas complejos de compra-venta diseñados para el crecimiento y la facilidad de transacción.',
    accentClass: 'text-primary',
  },
  {
    icon: 'cloud_sync',
    title: 'SaaS',
    description: 'Arquitecturas multi-tenant listas para el mercado global con planes de suscripción y gestión de usuarios.',
    accentClass: 'text-secondary',
  },
  {
    icon: 'psychology',
    title: 'Soluciones IA',
    description: 'Integración de modelos inteligentes para automatizar decisiones y análisis predictivo en tus plataformas.',
    accentClass: 'text-tertiary',
  },
]

function FeaturesView() {
  return (
    <section className="py-32 px-8 bg-surface-container-low" id="servicios">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Qué construimos</h2>
          <div className="h-1 w-24 bg-primary rounded-full" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURE_CARDS.map((card) => (
            <article
              key={card.title}
              className="glass-card p-10 rounded-xl hover:translate-y-[-8px] transition-transform group"
            >
              <span
                className={`material-symbols-outlined text-4xl ${card.accentClass} mb-6 block`}
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {card.icon}
              </span>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesView
