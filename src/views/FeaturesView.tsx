const FEATURE_CARDS = [
  {
    icon: 'language',
    title: 'Landing Pages',
    description: 'Landing pages en Quito pensadas para captar leads, agendar reuniones y convertir trafico en oportunidades reales.',
    accentClass: 'text-primary',
  },
  {
    icon: 'smartphone',
    title: 'Paginas Web',
    description: 'Sitios web profesionales para negocios, marcas personales y empresas que necesitan presencia digital clara y confiable.',
    accentClass: 'text-secondary',
  },
  {
    icon: 'settings_suggest',
    title: 'Sistemas Internos',
    description: 'Dashboards y sistemas de gestion para equipos que quieren automatizar procesos y reducir trabajo manual.',
    accentClass: 'text-tertiary',
  },
  {
    icon: 'storefront',
    title: 'Webs Comerciales',
    description: 'Experiencias web enfocadas en ventas, catalogos, formularios y canales de contacto para negocios en crecimiento.',
    accentClass: 'text-primary',
  },
  {
    icon: 'cloud_sync',
    title: 'Software a Medida',
    description: 'Plataformas y herramientas web a medida para empresas que necesitan procesos, usuarios y modulos personalizados.',
    accentClass: 'text-secondary',
  },
  {
    icon: 'psychology',
    title: 'Automatizacion e IA',
    description: 'Integracion de IA y automatizacion para acelerar tareas repetitivas y mejorar la operacion de tu negocio.',
    accentClass: 'text-tertiary',
  },
]

function FeaturesView() {
  return (
    <section className="py-32 px-8 bg-surface-container-low" id="servicios">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
            Que desarrollamos para negocios en Quito
          </h2>
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
