import { defineProject } from '../types';

export const project = defineProject({
  slug: 'sandra-jordan',
  card: {
    title: 'Sandra Jordan Prima Alpaca',
    category: 'Rediseño Web de Lujo',
    tags: ['UI Design', 'Luxury Brand', 'Visual Design'],
    thumbnail: '/images/projects/sandra-jordan/portadacard.webp',
    featured: true,
  },
  title: 'Sandra Jordan Prima Alpaca',
  subtitle: 'Rediseño Web de Lujo para Marca de Textiles de Alpaca',
  year: '2025',
  client: 'Sandra Jordan @ Nerd',
  role: 'UI Designer',
  duration: '+4 meses',
  tools: ['Figma', 'Claude', 'ChatGPT', 'Gemini', 'Pencil'],
  tags: ['UI Design', 'Luxury Brand', 'Visual Design', 'Rediseño'],
  overview: 'Rediseño web de lujo para Sandra Jordan Prima Alpaca, marca premium de textiles de alpaca con showrooms propios. El sitio no vende productos online — permite solicitar muestras de tela y dirige a los usuarios a sus showrooms, donde ocurre la venta real. Me integré a un proyecto con avance previo, continuando y ajustando lo existente mientras diseñaba nuevas pantallas y flujos. El entregable incluyó el diseño completo del sitio, handoff a desarrolladores y QA del diseño implementado.',
  challenge: 'Entrar a un proyecto avanzado y entender qué se había hecho, por qué, y cómo continuarlo sin romper la coherencia visual. El cliente buscaba comunicarse como una marca de lujo — algo que su web anterior no lograba — y a la vez guiar al usuario hacia sus showrooms y la solicitud de muestras, que es donde ocurre la venta real. El reto fue elevar la experiencia visual manteniendo la línea gráfica establecida y sin que el cambio de mano se notara.',
  goals: [
    'Mantener la coherencia con el diseño previo y la línea gráfica establecida',
    'Diseñar y ajustar pantallas para completar el sitio',
    'Elevar la experiencia visual para comunicar lujo y exclusividad',
    'Dirigir al usuario hacia showrooms y solicitud de muestras',
    'Hacer el handoff a desarrolladores y QA del diseño implementado'
  ],
  process: [
    {
      phase: 'Research',
      title: 'Entender la marca y el mercado',
      description: 'Antes de diseñar analicé los competidores de Sandra Jordan: marcas de lujo como Loro Piana, Brunello Cucinelli y otras referencias premium de textiles. También revisé el trabajo existente para entender la línea gráfica establecida, el objetivo de la web y qué transmitir al usuario. La marca quería dejar atrás una web que no los representaba y comunicarse como lo que son: una marca de lujo.',
      image: '/images/projects/sandra-jordan/beanchmark.webp'
    },
    {
      phase: 'UI Design',
      title: 'Diseño y ajustes de pantallas',
      description: 'Continué y ajusté el trabajo existente del diseñador anterior mientras diseñaba todas las pantallas y flujos faltantes. El objetivo era que el resultado final se leyera como un sistema cohesivo de principio a fin, comunicando la exclusividad que la marca buscaba transmitir y guiando al usuario hacia showrooms y solicitud de muestras.',
      image: '/images/projects/sandra-jordan/portadacard.webp'
    },
    {
      phase: 'Handoff & QA',
      title: 'Entrega y revisión con desarrolladores',
      description: 'Una vez completado el diseño, hice el handoff al equipo de desarrollo y participé en el QA del diseño implementado, asegurando que la fidelidad visual se mantuviera en el producto final. Este proceso también estuvo presente en la mayoría de mis otros proyectos.',
      image: '/images/projects/sandra-jordan/desarrollo.webp'
    }
  ],
  highlights: [
    'Integración a un proyecto avanzado continuando y ajustando lo existente',
    'Diseño que eleva la identidad de una marca de lujo',
    'Flujos que dirigen al usuario a showrooms y solicitud de muestras',
    'Handoff a desarrolladores y QA del diseño implementado'
  ],
  testimonial: null as null | { quote: string; author: string; role: string },
  nextProject: {
    slug: 'xplora',
    title: 'Xplora'
  },
  desktopShowcase: {
    mainPages: [
      { src: '/images/projects/sandra-jordan/homemain.webp', label: 'Home', alt: 'Sandra Jordan - Página principal', url: 'sandrajordan.com' },
      { src: '/images/projects/sandra-jordan/productpage.webp', label: 'Product Page', alt: 'Sandra Jordan - Página de producto', url: 'sandrajordan.com/product' },
      { src: '/images/projects/sandra-jordan/textiles.webp', label: 'Textiles', alt: 'Sandra Jordan - Colección Textiles', url: 'sandrajordan.com/textiles' },
      { src: '/images/projects/sandra-jordan/showroom.webp', label: 'Showroom', alt: 'Sandra Jordan - Showroom', url: 'sandrajordan.com/showroom' }
    ],
    bespokePages: [
      { src: '/images/projects/sandra-jordan/bespokeprogram.webp', label: 'Bespoke Program', alt: 'Sandra Jordan - Programa Bespoke', url: 'sandrajordan.com/bespoke' },
      { src: '/images/projects/sandra-jordan/bespokerugs.webp', label: 'Bespoke Rugs', alt: 'Sandra Jordan - Alfombras Bespoke', url: 'sandrajordan.com/bespoke/rugs' },
      { src: '/images/projects/sandra-jordan/bespoketrhows.webp', label: 'Bespoke Throws', alt: 'Sandra Jordan - Mantas Bespoke', url: 'sandrajordan.com/bespoke/throws' }
    ],
    accountPages: [
      { src: '/images/projects/sandra-jordan/myaccountmydetails.webp', label: 'Account Details', alt: 'Sandra Jordan - Detalles de cuenta', url: 'sandrajordan.com/account' },
      { src: '/images/projects/sandra-jordan/myaccountmyfavorites1.webp', label: 'Favorites', alt: 'Sandra Jordan - Favoritos', url: 'sandrajordan.com/account/favorites' },
      { src: '/images/projects/sandra-jordan/myaccountmyfavorites4.webp', label: 'Orders', alt: 'Sandra Jordan - Pedidos', url: 'sandrajordan.com/account/orders' },
      { src: '/images/projects/sandra-jordan/myaccountmyorders.webp', label: 'My Orders', alt: 'Sandra Jordan - Mis pedidos', url: 'sandrajordan.com/account/my-orders' }
    ],
    contentPages: [
      { src: '/images/projects/sandra-jordan/about.webp', label: 'About', alt: 'Sandra Jordan - About', url: 'sandrajordan.com/about' },
      { src: '/images/projects/sandra-jordan/press.webp', label: 'Press', alt: 'Sandra Jordan - Press', url: 'sandrajordan.com/press' },
      { src: '/images/projects/sandra-jordan/inspiration.webp', label: 'Inspiration', alt: 'Sandra Jordan - Inspiración', url: 'sandrajordan.com/inspiration' }
    ]
  },
  mobileShowcase: [
    {
      title: 'Home',
      mobile: '/images/projects/sandra-jordan/homemobile.webp',
      description: 'Página principal con navegación elegante y acceso a colecciones'
    },
    {
      title: 'Bespoke Program',
      mobile: '/images/projects/sandra-jordan/bespokeprogrammobile.webp',
      description: 'Programa de personalización premium con navegación intuitiva'
    },
    {
      title: 'Bespoke Rugs',
      mobile: '/images/projects/sandra-jordan/bespokerugsmobile.webp',
      description: 'Selección de alfombras personalizadas con materiales premium'
    },
    {
      title: 'Bespoke Throws',
      mobile: '/images/projects/sandra-jordan/bespoketrhowsmobile.webp',
      description: 'Mantas bespoke con fibra de alpaca de alta calidad'
    },
    {
      title: 'My Moodboards',
      mobile: '/images/projects/sandra-jordan/myaccountfavoritesmobile1.webp',
      description: 'Gestión de productos favoritos con acceso rápido'
    },
    {
      title: 'My Collection',
      mobile: '/images/projects/sandra-jordan/myaccountdetailsmobile2.webp',
      description: 'Panel de usuario con información organizada'
    }
  ]
});
