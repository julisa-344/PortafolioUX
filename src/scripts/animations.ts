import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const $$ = (selector: string) => document.querySelectorAll<HTMLElement>(selector);

/**
 * Reduced motion: todo queda en su estado final, sin animaciones.
 * (El hero de la home tiene su propia línea de tiempo en Hero.astro.)
 */
export function showStaticContent(): void {
  $$('.reveal, .reveal-fade, .img-reveal').forEach((el) => {
    if (!el.closest('[data-hero="home"]')) el.classList.add('is-visible');
  });
  $$('.counter').forEach((el) => {
    el.innerText = el.dataset.target || '0';
  });
}

/**
 * Aparición de elementos .reveal.
 * Omite .img-reveal (usa transiciones CSS) y el hero de la home (tiene su propia timeline).
 */
function initReveal(): void {
  $$('.reveal:not(.img-reveal)').forEach((el) => {
    if (el.closest('[data-hero="home"]')) return;

    const delay = el.dataset.delay ? parseFloat(el.dataset.delay) : 0;
    const to = { opacity: 1, y: 0, scale: 1, duration: 1.2, delay, ease: 'expo.out' };
    const from = { opacity: 0, y: 80, scale: 0.95 };

    // Si ya está en el viewport al cargar (ej. hero de un caso de estudio), anima de inmediato
    const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight * 0.95;
    if (alreadyVisible) {
      gsap.fromTo(el, from, to);
      return;
    }

    gsap.fromTo(el, from, {
      ...to,
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
    });
  });
}

/** Revelado de imágenes (.img-reveal) + parallax sutil. */
function initImageReveal(): void {
  $$('.img-reveal').forEach((container) => {
    const img = container.querySelector('img');
    const delay = container.dataset.delay ? parseFloat(container.dataset.delay) * 1000 : 0;

    // La animación la hace CSS; aquí solo se agrega la clase
    ScrollTrigger.create({
      trigger: container,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        setTimeout(() => container.classList.add('is-visible'), delay);
      },
    });

    if (img) {
      gsap.to(img, {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }
  });
}

/** Títulos .split-text: aparición palabra por palabra. */
function initSplitText(): void {
  $$('.split-text').forEach((heading) => {
    const words = (heading.textContent || '').split(' ');
    heading.innerHTML = words
      .map(
        (word) =>
          `<span class="word-wrapper inline-block overflow-hidden"><span class="word inline-block">${word}</span></span>`,
      )
      .join(' ');

    gsap.fromTo(
      heading.querySelectorAll('.word'),
      { y: '100%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 1,
        stagger: 0.05,
        ease: 'expo.out',
        scrollTrigger: { trigger: heading, start: 'top 85%', toggleActions: 'play none none none' },
      },
    );
  });
}

/** Secciones con scroll horizontal fijado (.horizontal-scroll). */
function initHorizontalScroll(): void {
  $$('.horizontal-scroll').forEach((section) => {
    const container = section.querySelector<HTMLElement>('.horizontal-container');
    if (!container) return;

    const scrollWidth = container.scrollWidth - window.innerWidth;
    gsap.to(container, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
  });
}

/** Grillas .stagger-grid: sus hijos aparecen escalonados. */
function initStaggerGrids(): void {
  $$('.stagger-grid').forEach((grid) => {
    gsap.fromTo(
      grid.children,
      { opacity: 0, y: 30, scale: 0.95 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.35,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: grid, start: 'top 80%', toggleActions: 'play none none none' },
      },
    );
  });
}

/** Contadores numéricos (.counter con data-target). */
function initCounters(): void {
  $$('.counter').forEach((counter) => {
    const target = parseInt(counter.dataset.target || '0');

    ScrollTrigger.create({
      trigger: counter,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(counter, {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          ease: 'power2.out',
        });
      },
    });
  });
}

/** Líneas divisorias (.section-divider) que se dibujan al entrar. */
function initDividers(): void {
  $$('.section-divider').forEach((divider) => {
    gsap.fromTo(
      divider,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 1.5,
        ease: 'expo.out',
        scrollTrigger: { trigger: divider, start: 'top 85%', toggleActions: 'play none none none' },
      },
    );
  });
}

export function initScrollAnimations(): void {
  initReveal();
  initImageReveal();
  initSplitText();
  initHorizontalScroll();
  initStaggerGrids();
  initCounters();
  initDividers();
}

/** Al cargar todo: recalcula ScrollTrigger y muestra imágenes en viewport que no se activaron. */
export function initLoadFallback(): void {
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
    document.querySelectorAll('.img-reveal:not(.is-visible)').forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight) {
        el.classList.add('is-visible');
      }
    });
  });
}
