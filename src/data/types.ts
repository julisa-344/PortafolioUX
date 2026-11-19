export interface ProcessStep {
  phase: string;
  title: string;
  description: string;
  image: string;
  /** Muestra la imagen dentro de un BrowserMockup */
  mockup?: boolean;
  url?: string;
  imageLabel?: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  authorUrl?: string;
}

/** Datos de la tarjeta de proyecto (home y /work) */
export interface ProjectCardData {
  title: string;
  category: string;
  tags: string[];
  thumbnail: string;
  featured?: boolean;
}

export interface CaseStudyProject {
  slug: string;
  card: ProjectCardData;
  title: string;
  subtitle: string;
  year: string;
  client: string;
  role: string;
  duration: string;
  tools: string[];
  tags: string[];
  overview: string;
  challenge: string;
  goals: string[];
  process: ProcessStep[];
  highlights?: string[];
  testimonial?: Testimonial | null;
  nextProject: { slug: string; title: string };
}

/**
 * Valida los campos comunes de un caso de estudio y conserva el tipo exacto
 * de los campos propios de cada proyecto (showcases, etc.).
 */
export function defineProject<T extends CaseStudyProject>(project: T): T {
  return project;
}
