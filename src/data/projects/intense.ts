import { defineProject } from '../types';

export const project = defineProject({
  slug: 'intense',
  card: {
    title: 'Intense Viajes',
    category: 'Rediseño Web para Agencia de Viajes',
    tags: ['UX Research', 'Wireframes', 'UI Design'],
    thumbnail: '/images/projects/intense/portadaCard.webp',
    featured: true,
  },
  title: 'Intense Peru',
  subtitle: 'Rediseño Web para Agencia de Viajes Boutique',
  year: '2025',
  client: 'Intense Peru @ Nerd',
  role: 'UX/UI Designer',
  duration: '4+ meses',
  tools: ['Figma', 'FigJam', 'Claude', 'ChatGPT', 'Gemini', 'Pencil'],
  tags: ['UX Research', 'UI Design', 'Rediseño'],
  overview: 'Rediseño del sitio web para Intense Peru, agencia de viajes boutique con itinerarios exclusivos dirigidos a los mercados de Estados Unidos, México e Italia. El proyecto partió desde cero: kick-off con el cliente, recepción del brief, benchmark de competidores (directos, indirectos, nacionales e internacionales), sitemap, wireframes y UI Design.',
  challenge: 'El cliente quería un diseño de lujo, de muy alta fidelidad — algo que comunicara exclusividad desde el primer vistazo. El reto no fue solo el diseño en sí, sino también liderar reuniones con distintos interlocutores del cliente, presentar y justificar las decisiones de diseño frente a distintas perspectivas, y mantener el foco en los objetivos del usuario.',
  goals: [
    'Transmitir exclusividad y lujo desde el primer vistazo',
    'Definir la identidad tipográfica del proyecto',
    'Estructurar la arquitectura de información del sitio completo',
    'Diseñar wireframes de todas las pantallas y flujos',
    'Priorizar "Design your Trip" e itinerarios como eje central del sitio'
  ],
  process: [
    {
      phase: 'Research',
      title: 'Kick-off y Benchmark',
      description: 'El proyecto arrancó con un kick-off donde recibí el brief del cliente. Luego realicé un benchmark exhaustivo analizando competidores directos e indirectos, nacionales e internacionales: Abercrombie & Kent, Kuoda, Aracari, Belmond y otros referentes de viajes de lujo. El objetivo fue entender cómo las mejores marcas comunican exclusividad y qué patrones de diseño generan confianza en el usuario.',
      image: '/images/projects/intense/beanchmark.webp'
    },
    {
      phase: 'Sitemap',
      title: 'Arquitectura de Información',
      description: 'Definí la estructura del sitio desde cero, priorizando las páginas de itinerarios y la sección "Design your Trip" como ejes centrales de conversión. Organicé el contenido para facilitar el descubrimiento de destinos y journeys, con flujos que apuntaban hacia el contacto directo y la cotización personalizada.',
      image: '/images/projects/intense/sitemap.webp'
    },
    {
      phase: 'Wireframes',
      title: 'Wireframes y Flujos',
      description: 'Diseñé los wireframes de todas las pantallas del sitio — sin excepción — para validar la estructura antes de pasar al diseño visual. Se prestó especial atención a los itinerarios (que manejaban mucha información) y a "Design your Trip", el flujo más complejo del proyecto. Esta etapa también implicó presentar y defender cada decisión de diseño frente al equipo del cliente.',
      image: '/images/projects/intense/wireframes.webp'
    },
    {
      phase: 'UI Design',
      title: 'Tipografía y UI',
      description: 'Definí la identidad tipográfica del proyecto y la apliqué a las pantallas, construyendo una interfaz premium inspirada en la estética Belmond: limpia, con mucho peso visual en las imágenes y textos reducidos. Incorporé las imágenes en la estructura, aunque su selección y refinamiento final fue continuado con el cliente.',
      image: '/images/projects/intense/portadaCard.webp'
    }
  ],
  highlights: [
    'Proyecto desde cero: kick-off, brief, benchmark, sitemap, wireframes y UI',
    'Identidad tipográfica definida para la marca',
    'Diseño visual premium con énfasis en imágenes de alta calidad',
    '"Design your Trip" como eje central: flujo de itinerarios personalizados',
    'Wireframes de absolutamente todas las pantallas del sitio'
  ],
  testimonial: {
    quote: 'Julisa formó parte del equipo de trabajo que nos apoyó en el desarrollo de nuestra nueva página web. Realizó un excelente trabajo en la maquetación y diseño. Destacó por su gran creatividad y por desarrollar cada propuesta bajo un concepto claramente enfocado en el cliente, cuidando tanto la estética como la experiencia de usuario. Su aporte fue clave para lograr un resultado alineado con nuestros objetivos, demostrando profesionalismo, compromiso y gran atención a los detalles. Sin duda, recomendamos su trabajo.',
    author: 'Juan Pablo Arce',
    authorUrl: 'https://www.linkedin.com/in/juan-pablo-arce-70739b35/',
    role: 'Intense Perú'
  },
  nextProject: {
    slug: 'sandra-jordan',
    title: 'Sandra Jordan Prima Alpaca'
  },
  desktopShowcase: {
    mainPages: [
      { src: '/images/projects/intense/HOME.webp', label: 'Home', alt: 'Intense Peru - Página principal', url: 'intenseperu.com' },
      { src: '/images/projects/intense/DESTINATIONS.webp', label: 'Destinos', alt: 'Intense Peru - Página de destinos', url: 'intenseperu.com/destinations' }
    ],
    journeysPages: [
      { src: '/images/projects/intense/Journeys.webp', label: 'Journeys', alt: 'Intense Peru - Todos los viajes', url: 'intenseperu.com/journeys' },
      { src: '/images/projects/intense/itinerary.webp', label: 'Itinerario', alt: 'Intense Peru - Detalle de itinerario', url: 'intenseperu.com/itinerary' }
    ],
    contentPages: [
      { src: '/images/projects/intense/BLOG.webp', label: 'Blog', alt: 'Intense Peru - Blog de viajes', url: 'intenseperu.com/blog' },
      { src: '/images/projects/intense/CONTACT.webp', label: 'Contacto', alt: 'Intense Peru - Página de contacto', url: 'intenseperu.com/contact' }
    ]
  },
  mobileShowcase: [
    {
      title: 'Home',
      mobile: '/images/projects/intense/Home-mobile.webp'
    },
    {
      title: 'Header',
      mobile: '/images/projects/intense/Header-mobile.webp'
    },
    {
      title: 'Destinations',
      mobile: '/images/projects/intense/destinations-mobile.webp'
    },
    {
      title: 'Journeys',
      mobile: '/images/projects/intense/journeys-mobile.webp'
    },
    {
      title: 'Itinerary',
      mobile: '/images/projects/intense/itinerary-mobile.webp'
    },
    {
      title: 'Design Your Trip',
      mobile: '/images/projects/intense/DESIGNYOURTRIP-mobile.webp'
    },
    {
      title: 'Blog',
      mobile: '/images/projects/intense/blog-mobile.webp'
    }
  ]
});
