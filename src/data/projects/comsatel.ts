import { defineProject } from '../types';

export const project = defineProject({
  slug: 'comsatel',
  card: {
    title: 'Comsatel',
    category: 'Rediseño Web Multi-país',
    tags: ['UX Research', 'UI Design', 'Multi-país'],
    thumbnail: '/images/projects/comsatel/portadacard.webp',
    featured: true,
  },
  title: 'Comsatel',
  subtitle: 'Rediseño Web Multi-país para Gestión de Flotas GPS',
  year: '2025',
  client: 'Comsatel @ Nerd',
  role: 'UX/UI Designer',
  duration: '4+ meses',
  tools: ['Figma', 'FigJam', 'Gemini', 'ChatGPT', 'Claude', 'Pencil'],
  tags: ['UX/UI Design', 'Multi-país', 'B2B', 'SaaS'],
  overview: 'Rediseño web para Comsatel, empresa líder en soluciones de rastreo GPS vehicular con presencia en Perú, Colombia y Bolivia. Me integré a un proyecto que ya tenía un avance previo, en una industria que no conocía: altamente técnica, con múltiples productos, servicios y sectores. Sin sitemap ni wireframes como punto de partida, el trabajo fue entender a fondo al cliente y lanzarse directamente a la creación de pantallas. Perú funcionó como la matriz y Colombia y Bolivia siguieron la misma estructura, adaptando solo el contenido.',
  challenge: 'Me enfrenté a una industria completamente desconocida y muy compleja, con un cliente que maneja muchísima información distribuida en tres webs distintas. El traspaso no fue ordenado y no había un punto de partida claro, así que tuve que digerir todo por mi cuenta antes de poder diseñar. El mayor reto fue definir el header: cómo estructurar servicios, sectores, soluciones y herramientas de forma que fuera digerible. La solución fue plantear un mega menú organizado por pasos progresivos.',
  goals: [
    'Entender una industria técnica y compleja desde cero',
    'Definir la arquitectura de información sin un punto de partida claro',
    'Diseñar un mega menú claro para múltiples servicios y sectores',
    'Unificar la experiencia para Perú, Colombia y Bolivia',
    'Cubrir todo el sitio: flujos, herramientas, versión mobile y más'
  ],
  process: [
    {
      phase: 'Research',
      title: 'Aprender la industria desde adentro',
      description: 'Sin un punto de partida claro, hice un research intensivo: analicé competidores del sector GPS y rastreo vehicular, estudié los productos y servicios de Comsatel en profundidad y entendí los sectores a los que atiende — transporte, logística, minería, entre otros. Este trabajo de investigación fue la base para poder tomar decisiones de arquitectura con criterio.',
      image: '/images/projects/comsatel/beanchmark.webp'
    },
    {
      phase: 'Arquitectura',
      title: 'Definir la navegación desde cero',
      description: 'Sin sitemap ni wireframes previos, empecé directamente a definir los flujos y la estructura. El principal reto fue el header: Comsatel maneja servicios, soluciones, sectores y herramientas — todo con mucha información. Propuse un mega menú organizado por pasos progresivos para que la navegación fuera digerible sin abrumar al usuario.',
      image: '/images/projects/comsatel/sitemap.webp'
    },
    {
      phase: 'UI Design',
      title: 'Diseño completo del sitio',
      description: 'Diseñé todo el sitio manteniendo la identidad corporativa de Comsatel: desde el home hasta herramientas como el cotizador, la calculadora de ahorro, el libro de reclamaciones y más. Perú fue la versión matriz y Colombia y Bolivia siguieron la misma estructura adaptando el contenido. También incluí la versión mobile de todas las secciones.',
      image: '/images/projects/comsatel/portadacard.webp'
    }
  ],
  highlights: [
    'Research profundo para entender una industria técnica desconocida',
    'Mega menú progresivo para organizar información compleja',
    'Arquitectura unificada para Perú (matriz), Colombia y Bolivia',
    'Cobertura total: flujos, herramientas, versión mobile y más'
  ],
  nextProject: {
    slug: 'bitdefender',
    title: 'Bitdefender'
  },
  desktopShowcase: {
    mainPages: [
      { src: '/images/projects/comsatel/home1.webp', label: 'Home', alt: 'Comsatel - Página principal', url: 'comsatel.com.pe' },
      { src: '/images/projects/comsatel/solucion1.webp', label: 'Soluciones', alt: 'Comsatel - Página de soluciones', url: 'comsatel.com.pe/soluciones' }
    ],
    servicesPages: [
      { src: '/images/projects/comsatel/sector1.webp', label: 'Sectores', alt: 'Comsatel - Sectores', url: 'comsatel.com.pe/sectores' },
      { src: '/images/projects/comsatel/desktop751.webp', label: 'Servicios', alt: 'Comsatel - Servicios', url: 'comsatel.com.pe/servicios' },
      { src: '/images/projects/comsatel/desktop821.webp', label: 'Detalle Servicio', alt: 'Comsatel - Detalle de servicio', url: 'comsatel.com.pe/servicio-detalle' }
    ],
    quoterPages: [
      { src: '/images/projects/comsatel/cotizador1.webp', label: 'Cotizador - Inicio', alt: 'Comsatel - Cotizador paso 1', url: 'comsatel.com.pe/cotizador' },
      { src: '/images/projects/comsatel/cotizador2.webp', label: 'Cotizador - Paso 2', alt: 'Comsatel - Cotizador paso 2', url: 'comsatel.com.pe/cotizador' },
      { src: '/images/projects/comsatel/cotizador3.webp', label: 'Cotizador - Paso 3', alt: 'Comsatel - Cotizador paso 3', url: 'comsatel.com.pe/cotizador' }
    ],
    toolsPages: [
      { src: '/images/projects/comsatel/calculadoradelahorro.webp', label: 'Calculadora de Ahorro', alt: 'Comsatel - Calculadora de ahorro', url: 'comsatel.com.pe/calculadora' },
      { src: '/images/projects/comsatel/actualizatusdatos.webp', label: 'Actualiza tus Datos', alt: 'Comsatel - Formulario actualización', url: 'comsatel.com.pe/actualiza-datos' },
      { src: '/images/projects/comsatel/formulariolibrodereclamaciones.webp', label: 'Libro de Reclamaciones', alt: 'Comsatel - Libro de reclamaciones', url: 'comsatel.com.pe/reclamaciones' }
    ]
  },
  mobileShowcase: [
    {
      title: 'Home',
      mobile: '/images/projects/comsatel/homemobile1.webp'
    },
    {
      title: 'Header',
      mobile: '/images/projects/comsatel/headermobile.webp'
    },
    {
      title: 'Servicios',
      mobile: '/images/projects/comsatel/mobileservicios1.webp'
    },
    {
      title: 'Sectores',
      mobile: '/images/projects/comsatel/mobilesector1.webp'
    },
    {
      title: 'Soluciones',
      mobile: '/images/projects/comsatel/solutionmobile1.webp'
    },
    {
      title: 'Productos',
      mobile: '/images/projects/comsatel/productosmobile1.webp'
    },
    {
      title: 'Cotizador',
      mobile: '/images/projects/comsatel/cotizadormobile3.webp'
    },
    {
      title: 'Cotizador - Paso 2',
      mobile: '/images/projects/comsatel/cotizadormobile21.webp'
    },
    {
      title: 'Actualiza Datos',
      mobile: '/images/projects/comsatel/actualizadatosmobile1.webp'
    }
  ]
});
