import { defineProject } from '../types';

export const project = defineProject({
  slug: 'bitdefender',
  card: {
    title: 'Bitdefender',
    category: 'UX Research',
    tags: ['UX Research', 'Benchmark', 'Wireframes'],
    thumbnail: '/images/projects/bitdefender/portadaCard.webp',
    featured: true,
  },
  title: 'Bitdefender',
  subtitle: 'Investigación UX para Software de Seguridad',
  year: '2026',
  client: 'Bitdefender @ Nerd',
  role: 'UX Researcher',
  duration: '2 meses',
  tools: ['Figma', 'FigJam', 'Claude', 'ChatGPT', 'Gemini', 'Pencil', 'Stitch AI'],
  tags: ['UX Research', 'Benchmark', 'Wireframes', 'Sitemap'],
  overview: 'Investigación UX completa para el rediseño del sitio web de Bitdefender, líder global en ciberseguridad. El proyecto se abordó desde cero con todo el equipo: benchmark de competidores, sitemap y wireframes. Bitdefender no solo estaba rediseñando su web — también estaba migrando su portafolio completo, pasando de múltiples productos individuales a dos planes simplificados. El proyecto finalizó en la etapa de wireframes, que es precisamente donde me especializo: UX y diseño basado en datos.',
  challenge: 'El reto más complejo de todos mis proyectos en términos de arquitectura. Bitdefender no vende el software directamente — vende códigos de activación que el usuario luego tiene que ir a activar en Bitdefender Central. Ese paso intermedio generaba fricción y cierta decepción en el usuario, así que parte del reto fue diseñar una comunicación que preparara al usuario para ese proceso sin que se sintiera engañado. A eso se sumó la migración de portafolio: el cliente pasaba de múltiples productos individuales (con variables de años, dispositivos y complementos) a dos planes simplificados. Diseñar esa transición sin dejar sin salida a usuarios que necesitaran renovar productos del portafolio anterior fue el núcleo del trabajo. Además, el sitio atendía dos segmentos muy distintos: B2C (hogares) y B2B (empresas), cada uno con necesidades y flujos propios.',
  goals: [
    'Analizar competidores líderes en ciberseguridad a nivel global',
    'Comunicar con claridad el proceso de compra (código) y activación en Bitdefender Central',
    'Diseñar la migración de portafolio para no alienar a usuarios existentes',
    'Simplificar la complejidad de planes, variables y complementos',
    'Diferenciar y optimizar flujos para B2C (hogares) y B2B (empresas)'
  ],
  process: [
    {
      phase: 'Research',
      title: 'Benchmark Competitivo',
      description: 'Analizamos los principales competidores del mercado de ciberseguridad: Norton, McAfee, Kaspersky y ESET. Estudié sus propuestas de valor, cómo comunican planes y precios, cómo segmentan a sus usuarios y qué decisiones de arquitectura toman para simplificar un catálogo inherentemente complejo. Fue la base para entender el estándar del mercado y encontrar las oportunidades de mejora.',
      image: '/images/projects/bitdefender/beanchmark.webp'
    },
    {
      phase: 'Sitemap',
      title: 'Arquitectura de Información',
      description: 'Definí la estructura del sitio diferenciando los dos segmentos: B2C y B2B, cada uno con comportamientos distintos. Un punto crítico fue la migración del portafolio: propuse mantener el portafolio anterior en un nivel jerárquico inferior para que el nuevo portafolio simplificado fuera el punto de entrada, sin dejar sin acceso a usuarios que necesitaran renovar un producto anterior. También contemplé cómo comunicar el flujo real de compra — el usuario adquiere un código y luego activa en Bitdefender Central — de forma que la experiencia fuera clara y no generara frustración.',
      image: '/images/projects/bitdefender/sitemap.webp'
    },
    {
      phase: 'Wireframes',
      title: 'Wireframes de Alta Fidelidad',
      description: 'Diseñé los wireframes para todas las páginas principales: home, páginas de productos y planes, blog, carrito, cuenta y flujos de checkout. El mayor desafío fue comunicar con claridad los planes, sus variables (cantidad de años, dispositivos, complementos) y el flujo de compra simplificado — especialmente para un producto que históricamente era confuso para el usuario.',
      image: '/images/projects/bitdefender/wireframes.webp'
    }
  ],
  highlights: [
    'Proyecto más retante en arquitectura, navegación y flujos de usuario',
    'Diseño del flujo de compra por código con activación en Bitdefender Central',
    'Solución para la migración de portafolio sin alienar usuarios existentes',
    'Simplificación de planes con variables complejas (años, dispositivos, complementos)',
    'Segmentación y flujos diferenciados para B2C y B2B',
    'Benchmark completo de competidores del mercado de ciberseguridad'
  ],
  nextProject: {
    slug: 'intense',
    title: 'Intense Viajes'
  },
  wireframeShowcase: {
    mainPages: [
      { src: '/images/projects/bitdefender/home.webp', label: 'Home', alt: 'Bitdefender - Página principal' },
      { src: '/images/projects/bitdefender/hogar.webp', label: 'Hogar', alt: 'Bitdefender - Productos para hogar' },
      { src: '/images/projects/bitdefender/Products.webp', label: 'Productos', alt: 'Bitdefender - Lista de productos' }
    ],
    contentPages: [
      { src: '/images/projects/bitdefender/blog.webp', label: 'Blog', alt: 'Bitdefender - Blog' },
      { src: '/images/projects/bitdefender/blog-detalle.webp', label: 'Blog Detalle', alt: 'Bitdefender - Artículo de blog' },
      { src: '/images/projects/bitdefender/contacto.webp', label: 'Contacto', alt: 'Bitdefender - Página de contacto' }
    ],
    ecommercePages: [
      { src: '/images/projects/bitdefender/cart.webp', label: 'Carrito', alt: 'Bitdefender - Carrito de compras' },
      { src: '/images/projects/bitdefender/Account.webp', label: 'Cuenta', alt: 'Bitdefender - Mi cuenta' },
      { src: '/images/projects/bitdefender/Gracias.webp', label: 'Confirmación', alt: 'Bitdefender - Página de gracias' }
    ],
    businessPages: [
      { src: '/images/projects/bitdefender/empresa-detalle.webp', label: 'Empresa Detalle', alt: 'Bitdefender - Detalle para empresas' }
    ]
  }
});
