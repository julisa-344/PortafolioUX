import { reduceMotion } from './motion';
import { initSmoothScroll } from './smooth-scroll';
import { initCursor } from './cursor';
import { initScrollAnimations, initLoadFallback, showStaticContent } from './animations';

// Marca que JavaScript cargó (mejora progresiva)
document.documentElement.classList.add('js-loaded');

initSmoothScroll();
initCursor();

if (reduceMotion) {
  showStaticContent();
} else {
  initScrollAnimations();
}

initLoadFallback();
