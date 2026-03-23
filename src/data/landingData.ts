import type {
  FeatureCard,
  ProjectCard,
  ServiceCard,
  StepCard,
  Testimonial,
  WhyUsCard,
} from '../types/landing'

export const features: FeatureCard[] = [
  {
    description: 'Web Apps, plataformas y cursos a la medida.',
    title: 'Web Apps',
  },
  {
    description: 'Aplicaciones nativas y modernas para iOS y Android.',
    title: 'Apps Móviles',
  },
  {
    description:
      'Herramientas internas para eliminar el desorden y estandarizar tu negocio.',
    title: 'Herramientas Internas',
  },
  {
    description: 'Marketplaces que conectan compradores y vendedores de manera fluida.',
    title: 'Marketplaces',
  },
  {
    description: 'SaaS listo para generar ingresos que tus usuarios amarán.',
    title: 'SaaS',
  },
  {
    description: 'Agentes de IA y automatizaciones para evolucionar tu forma de trabajar.',
    title: 'Soluciones IA',
  },
]

export const processSteps: StepCard[] = [
  {
    num: 'Paso 1',
    title: 'Descubrimiento',
    text: 'Entendemos tu negocio y tu idea, identificamos oportunidades, establecemos objetivos claros y definimos un plan de desarrollo estructurado para garantizar un proyecto sin fricciones.',
  },
  {
    num: 'Paso 2',
    title: 'Diseño',
    text: 'Trabajamos en colaboración contigo para entregar el primer plano de la solución, asegurándonos de que esté alineado con tu visión.',
  },
  {
    num: 'Paso 3',
    title: 'Desarrollo',
    text: 'Construimos de forma rápida y eficiente sin comprometer la calidad, garantizando que cada hito resuelva un problema y te acerque a tus objetivos.',
  },
  {
    num: 'Paso 4',
    title: 'Lanzamiento',
    text: '3, 2, 1 y lanzamos! Implementamos tus soluciones, las evolucionamos y brindamos soporte continuo mientras tu negocio crece.',
  },
]

export const serviceCards: ServiceCard[] = [
  {
    badgeText: 'Available',
    eyebrow: 'Desarrollo de apps y software',
    title: 'Desarrollo a la medida',
    bullets: [
      'Aplicación publicada y 100% funcional',
      'UI/UX Personalizado',
      'Soporte post-lanzamiento',
      'Desarrollador Full-Stack y Project Manager dedicado',
      'Espacios limitados',
    ],
  },
  {
    badgeText: 'Available',
    eyebrow: 'Implementación de IA',
    title: 'Automatización IA',
    bullets: [
      'Análisis completo de oportunidad IA',
      'Diseño y desarrollo de soluciones IA',
      'Desarrollo de automatizaciones IA',
      'Implementación y capacitación',
      'Arquitecto y Desarrollador de Automatizaciones IA dedicado',
      'Pausa o cancela en cualquier momento',
    ],
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Jose I. Hernandez',
    quote:
      'Necesitaba una solución personalizada en el campo médico, y Sierra Labs entregó exactamente lo que quería. Su respuesta rápida, sus revisiones semanales y su enfoque adaptado hicieron que el resultado fuera perfecto.',
    role: 'Fundador en Renova',
  },
  {
    name: 'Blanca Gutierrez',
    quote:
      'Trabajé con Sierra Labs para automatizar las citas que programamos en nuestra tienda, ¡y su servicio fue excelente! Entendieron perfectamente lo que necesitaba y realizaron un trabajo excelente. Altamente recomendado.',
    role: 'Fundador en Autié Bridal',
  },
  {
    name: 'Guillem Pasarin',
    quote:
      'Sierra Labs integró sin problemas múltiples aplicaciones y nos guió claramente en cada paso. Su comunicación y profesionalismo hicieron que un proyecto complejo se sintiera simple. Una gran experiencia, ¡altamente recomendado!',
    role: 'Fundador en Anana Homes',
  },
  {
    name: 'Cristal Hernandez',
    quote:
      'Me facilitó enormemente comunicarme con el cliente de inmediato, permitiéndome proporcionar información al instante. ¡Realmente hacen de todo! Excelente',
    role: 'Fundador en Essenova',
  },
]

export const projects: ProjectCard[] = [
  {
    caption: 'Web App',
    category: 'Aplicaciones Web',
    title: 'The Legends: Organizador de Ligas de Padel',
  },
  {
    caption: 'App Móvil',
    category: 'Aplicaciones Móviles',
    title: 'Krek Cover: Simple Budget Management',
  },
  {
    caption: 'Herramienta Interna',
    category: 'Herramientas Internas',
    title: 'Hinojosa Asesores',
  },
  {
    caption: 'Agente IA',
    category: 'Agentes IA',
    title: 'PetroSa',
  },
  {
    caption: 'Landing / Sitio',
    category: 'Sitios Web',
    title: 'Sierra Labs Showcase',
  },
  {
    caption: 'Workflow IA',
    category: 'Automatizaciones',
    title: 'Ops Automation Suite',
  },
]

export const whyUsCards: WhyUsCard[] = [
  {
    title: 'Consultoría de IA',
    text: 'Nuestro equipo de expertos sabe cómo construir exactamente lo que necesitas, de la mejor manera posible.',
  },
  {
    title: 'Estándares de desarrollo',
    text: 'Cada aspecto de nuestro trabajo está planeado, diseñado y construido con los más altos estándares de desarrollo.',
  },
  {
    title: 'Comunicación constante',
    text: 'Comunicación constante, puntualidad y transparencia son parte de nuestros valores principales.',
  },
  {
    title: 'Soporte continuo',
    text: 'Nuestro objetivo es convertirnos en tu partner tecnológico de confianza, brindando soporte continuo y asegurando que tus productos crezcan con tu negocio.',
  },
]

