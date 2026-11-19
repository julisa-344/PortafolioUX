/** True si el usuario pidió reducir el movimiento (prefers-reduced-motion). */
export const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** True en dispositivos con puntero táctil/grueso. */
export const isTouch = window.matchMedia('(pointer: coarse)').matches;
