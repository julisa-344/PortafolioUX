import { defineProject } from '../types';

export const project = defineProject({
  slug: 'xplora',
  card: {
    title: 'Xplora',
    category: 'Rediseño Web + Desarrollo',
    tags: ['UX Research', 'UI Design', 'Frontend Dev'],
    thumbnail: '/images/projects/xplora/portadaCard.webp',
    featured: true,
  },
  title: 'Xplora',
  subtitle: 'Rediseño de plataforma para descubrir cafeterías en Lima según el perfil del usuario',
  year: '2025',
  client: 'Xplora',
  role: 'UX/UI & Frontend',
  duration: '1 mes',
  tools: ['React', 'Next.js', 'Tailwind CSS', 'GitHub', 'Claude', 'ChatGPT'],
  tags: ['UX Research', 'UI Design', 'Frontend Development', 'Rediseño'],
  liveUrl: 'https://xplora.chat/',
  overview: 'Xplora es una plataforma que ayuda a los usuarios de Lima a encontrar la cafetería perfecta según su perfil. El cliente ya tenía una web avanzada pero sin un diseño en Figma, así que en lugar de crear uno desde cero para luego pasarlo a código, fuimos directo al repositorio: hice el research, definí los perfiles de usuario, replantée la arquitectura y los filtros, y ejecuté todo el rediseño directamente en el código existente.',
  challenge: 'El principal reto fue continuar un código que no escribí yo, entender las decisiones previas y hacer mejoras significativas desde adentro sin romper lo que ya funcionaba. Además, la plataforma trataba a todos los usuarios igual sin considerar que cada uno llega con una necesidad distinta — trabajar, socializar o encontrar café de especialidad. Reorganizar esa experiencia basándome en datos reales fue el núcleo del proyecto.',
  goals: [
    'Identificar los tres perfiles principales de usuario',
    'Rediseñar el sistema de filtros según necesidades reales',
    'Mejorar la navegación para reducir el tiempo de decisión',
    'Implementar el rediseño directamente en el repositorio'
  ],
  process: [
    {
      phase: 'Research',
      title: 'Entender antes de tocar el código',
      description: 'El cliente tenía una web funcionando pero sin diseño en Figma. Antes de intervenir revisé el comportamiento de los usuarios, analicé qué estaba fallando en la experiencia actual y estudié plataformas similares. El hallazgo clave fue que los usuarios no buscaban "una cafetería" en abstracto, sino un contexto muy específico — trabajar, reunirse con amigos o encontrar café de especialidad. Eso definió todo el rediseño.',
      image: '/images/projects/xplora/antes.webp',
      mockup: true,
      url: 'xplora.chat',
      imageLabel: 'Versión original'
    },
    {
      phase: 'Definición',
      title: 'Perfilado y rediseño de filtros',
      description: 'Con los tres perfiles identificados redefiní el sistema de filtros para que reflejaran necesidades reales: wifi, nivel de ruido, tipo de café, capacidad para grupos. Los filtros dejaron de ser atributos genéricos y pasaron a ser herramientas orientadas a cada tipo de usuario.',
      image: '/images/projects/xplora/home.webp',
      mockup: false
    },
    {
      phase: 'Implementación',
      title: 'Rediseño directo en el repositorio',
      description: 'Con la arquitectura y los filtros definidos, trabajé el rediseño directamente en el repositorio del cliente en React y Next.js, sin archivo Figma previo. El proceso fue iterativo: ajustaba, revisaba en el navegador y refinaba. La colaboración con el equipo se gestionó a través de GitHub con revisiones de código y pull requests. El entregable fue el producto final en producción, con mejor navegación, diseño más coherente y filtros basados en datos reales de usuarios.',
      image: '/images/projects/xplora/desarrollo.webp',
      mockup: false
    }
  ],
  testimonial: {
    quote: 'Julisa se encargó del rediseño total de la web y el resultado fue increíble. Partiendo de nuestra idea, ella logró que los colores y el estilo tuvieran muchísima más coherencia y un enfoque súper moderno. Propuso estructuras nuevas para la información que hicieron que todo se vea impecable y sea fácil de navegar. La ejecución fue de diez; entregó un trabajo con una calidad y un profesionalismo que superó nuestras expectativas.',
    author: 'Edgar Chambilla',
    role: 'Founder & CEO, Xplora'
  },
  desktopShowcase: {
    mainPages: [
      { src: '/images/projects/xplora/home.webp', label: 'Home', alt: 'Xplora — Home rediseñada', url: 'xplora.chat' },
      { src: '/images/projects/xplora/loginweb.webp', label: 'Login', alt: 'Xplora — Pantalla de login', url: 'xplora.chat/login' }
    ]
  },
  mobileShowcase: [
    {
      title: 'Home',
      mobile: '/images/projects/xplora/homemobile.webp'
    },
    {
      title: 'Cafeterías',
      mobile: '/images/projects/xplora/cafeteriamobile.webp'
    },
    {
      title: 'Login',
      mobile: '/images/projects/xplora/loginmobile.webp'
    }
  ],
  nextProject: {
    slug: 'intense',
    title: 'Intense Viajes'
  }
});
