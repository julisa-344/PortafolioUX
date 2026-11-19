import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reduceMotion, isTouch } from './motion';

declare global {
  interface Window {
    lenis?: Lenis;
  }
}

/**
 * Scroll suave con Lenis, sincronizado con ScrollTrigger.
 * Con "reducir movimiento" se usa el scroll nativo (sin Lenis).
 */
export function initSmoothScroll(): void {
  if (reduceMotion) return;

  const lenis = new Lenis({
    duration: isTouch ? 1.0 : 1.2,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    gestureOrientation: 'vertical',
    smoothWheel: !isTouch,
    touchMultiplier: 2,
    infinite: false,
    autoRaf: true, // único loop de raf
  });

  window.lenis = lenis;

  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.lagSmoothing(0);
}
