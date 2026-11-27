import type { Project } from '../../components/ProjectCard.astro';
import { project as intense } from './intense';
import { project as sandraJordan } from './sandra-jordan';
import { project as bitdefender } from './bitdefender';
import { project as xplora } from './xplora';

/** Orden en que aparecen en /work (el índice 0 y 3 se muestran en tarjeta grande). */
const caseStudies = [xplora, bitdefender, intense, sandraJordan];

/** Tarjetas de proyecto, derivadas de los datos de cada caso de estudio. */
const publishedCards: Project[] = caseStudies.map((p) => ({
  slug: p.slug,
  title: p.card.title,
  category: p.card.category,
  tags: p.card.tags,
  thumbnail: p.card.thumbnail,
  year: p.year,
  featured: p.card.featured,
}));

/** Borradores: visibles solo en desarrollo local, nunca en el build publicado. */
const draftCards: Project[] = import.meta.env.DEV
  ? [
      {
        slug: 'detecta-his',
        title: 'Detecta Clínica HIS',
        category: 'Sistema hospitalario · En diseño',
        tags: ['Design System', 'Salud', 'UX/UI'],
        thumbnail: '/images/projects/detecta-his/cover.webp',
        year: '2026',
        featured: true,
      },
      {
        slug: 'detecta-app',
        title: 'Detecta Clínica App',
        category: 'App de salud',
        tags: ['UX/UI', 'Salud', 'Analítica'],
        thumbnail: '/images/projects/detecta-app/hero.webp',
        year: '2026',
        featured: true,
      },
    ]
  : [];

export const projectCards: Project[] = [...draftCards, ...publishedCards];

/** Proyectos destacados del home. */
export const featuredProjectCards = projectCards.slice(0, 2);
