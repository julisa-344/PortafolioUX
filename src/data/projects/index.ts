import type { Project } from '../../components/ProjectCard.astro';
import { project as intense } from './intense';
import { project as sandraJordan } from './sandra-jordan';
import { project as comsatel } from './comsatel';
import { project as bitdefender } from './bitdefender';
import { project as xplora } from './xplora';

/** Orden en que aparecen en /work (el índice 0 y 3 se muestran en tarjeta grande). */
const caseStudies = [intense, sandraJordan, comsatel, bitdefender, xplora];

/** Tarjetas de proyecto, derivadas de los datos de cada caso de estudio. */
export const projectCards: Project[] = caseStudies.map((p) => ({
  slug: p.slug,
  title: p.card.title,
  category: p.card.category,
  tags: p.card.tags,
  thumbnail: p.card.thumbnail,
  year: p.year,
  featured: p.card.featured,
}));

/** Proyectos destacados del home. */
export const featuredProjectCards = projectCards.slice(0, 2);
