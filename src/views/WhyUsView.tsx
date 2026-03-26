const WHY_US_CARDS = [
  {
    icon: 'hub',
    title: 'Consultoría de IA',
    text: 'No solo codificamos, asesoramos sobre cómo la IA puede transformar tu modelo de negocio.',
    iconBg: 'bg-primary/10 group-hover:bg-primary/20',
    iconColor: 'text-primary',
  },
  {
    icon: 'verified',
    title: 'Estándares Pro',
    text: 'Aplicamos metodologías ágiles y Clean Architecture para asegurar que tu código dure años.',
    iconBg: 'bg-secondary/10 group-hover:bg-secondary/20',
    iconColor: 'text-secondary',
  },
  {
    icon: 'chat',
    title: 'Comunicación',
    text: 'Sin secretos. Canales abiertos y actualizaciones constantes para que siempre sepas en qué punto estamos.',
    iconBg: 'bg-tertiary/10 group-hover:bg-tertiary/20',
    iconColor: 'text-tertiary',
  },
  {
    icon: 'support_agent',
    title: 'Soporte Continuo',
    text: 'El lanzamiento es solo el inicio. Ofrecemos mantenimiento y evolución técnica proactiva.',
    iconBg: 'bg-primary/10 group-hover:bg-primary/20',
    iconColor: 'text-primary',
  },
]

function WhyUsView() {
  return (
    <section className="py-32 px-8 bg-surface-container-low" id="acerca">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            Por qué elegirnos
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Nuestra ventaja competitiva reside en la combinación de ingeniería de precisión y visión
            humana.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_US_CARDS.map((card) => (
            <div key={card.title} className="text-center group">
              <div
                className={`w-20 h-20 ${card.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-8 transition-colors`}
              >
                <span className={`material-symbols-outlined text-4xl ${card.iconColor}`}>
                  {card.icon}
                </span>
              </div>
              <h5 className="text-xl font-bold mb-4">{card.title}</h5>
              <p className="text-on-surface-variant text-sm leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUsView
