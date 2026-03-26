import { buildWhatsAppUrl } from '../constants/whatsapp'

type PricingPlan = {
  name: string
  price: string
  pricePeriod: string
  accentClass: string
  borderTopClass: string
  checkClass: string
  featured: boolean
  bgClass?: string
  bullets: string[]
  buttonVariant: 'outline' | 'filled' | 'glass'
}

const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Plan Start',
    price: 'USD 120–180',
    pricePeriod: '/pago único',
    accentClass: 'text-primary',
    borderTopClass: 'border-t-primary/20',
    checkClass: 'text-primary',
    featured: false,
    buttonVariant: 'outline',
    bullets: [
      '1 landing page',
      'Diseño responsive',
      'Botón de WhatsApp',
      'Formulario de contacto',
      'Entrega rápida',
    ],
  },
  {
    name: 'Plan Growth',
    price: 'USD 250–400',
    pricePeriod: '/proyecto',
    accentClass: 'text-secondary',
    borderTopClass: 'border-t-secondary',
    checkClass: 'text-secondary',
    featured: true,
    bgClass: 'bg-surface-container-high/60',
    buttonVariant: 'filled',
    bullets: [
      'Web 3-5 secciones',
      'Diseño UX básico',
      'Optimización móvil',
      'Integración con WhatsApp',
      'SEO básico',
      'Analytics',
    ],
  },
  {
    name: 'Plan Pro',
    price: 'USD 450–700',
    pricePeriod: '/proyecto',
    accentClass: 'text-tertiary',
    borderTopClass: 'border-t-tertiary/20',
    checkClass: 'text-tertiary',
    featured: false,
    buttonVariant: 'outline',
    bullets: [
      'Web personalizada',
      'UX optimizado a conversión',
      'Mejora de performance',
      'SEO técnico básico',
      'Integraciones avanzadas',
    ],
  },
  {
    name: 'Plan System',
    price: 'USD 700–1200+',
    pricePeriod: '/proyecto',
    accentClass: 'text-on-surface',
    borderTopClass: 'border-t-white/10',
    checkClass: 'text-on-surface-variant',
    featured: false,
    buttonVariant: 'glass',
    bullets: [
      'App web o sistema a medida',
      'Dashboards',
      'Automatización',
      'Funcionalidades personalizadas',
    ],
  },
]

function ServicesView() {
  return (
    <section className="py-32 px-8 bg-surface-container-lowest" id="paquetes">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            Planes de inversión
          </h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto">
            Soluciones adaptadas a cada etapa de tu negocio, con transparencia y enfoque en
            resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan) => {
            const waMsg = `quiero mas informacion sobre el paquete ${plan.name}`
            const waHref = buildWhatsAppUrl(waMsg)
            return (
              <div
                key={plan.name}
                className={`glass-card p-8 rounded-xl flex flex-col h-full border-t-4 ${plan.borderTopClass} ${plan.bgClass ?? ''} relative overflow-hidden`}
              >
                {plan.featured && (
                  <div className="absolute top-4 right-4 bg-secondary text-on-secondary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    Popular
                  </div>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className={`text-2xl font-black ${plan.accentClass} mb-6`}>
                  {plan.price}
                  <span className="text-sm font-normal text-on-surface-variant">
                    {plan.pricePeriod}
                  </span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow text-sm">
                  {plan.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span
                        className={`material-symbols-outlined ${plan.checkClass} text-lg`}
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Consultar por WhatsApp: ${plan.name}`}
                  className={
                    plan.buttonVariant === 'filled'
                      ? `w-full py-3 rounded-full bg-secondary text-on-secondary font-bold hover:opacity-90 transition-opacity text-center block`
                      : plan.buttonVariant === 'glass'
                        ? `w-full py-3 rounded-full glass-card border-none text-on-surface font-bold hover:bg-white/10 transition-colors text-center block`
                        : `w-full py-3 rounded-full border ${plan.accentClass.replace('text-', 'border-')}/40 ${plan.accentClass} font-bold hover:bg-primary/10 transition-colors text-center block`
                  }
                >
                  Elegir Plan
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesView
