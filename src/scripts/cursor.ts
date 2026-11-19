import gsap from 'gsap';
import { reduceMotion } from './motion';

/** Cursor personalizado con efecto magnético en botones (solo desktop). */
export function initCursor(): void {
  const cursor = document.getElementById('cursor');
  if (!cursor || window.innerWidth <= 1024 || reduceMotion) return;

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;
  let isHovering = false;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  gsap.ticker.add(() => {
    const speed = isHovering ? 0.2 : 0.15;
    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;
    gsap.set(cursor, {
      x: cursorX - 10,
      y: cursorY - 10,
    });
  });

  // Efecto hover en elementos interactivos
  document
    .querySelectorAll('a, button, .interactive, .project-card')
    .forEach((el) => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('is-hovering');
        isHovering = true;
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('is-hovering');
        isHovering = false;
      });
    });

  // Efecto magnético en botones
  document.querySelectorAll('.magnetic, .nav-cta').forEach((btn) => {
    btn.addEventListener('mousemove', (e) => {
      const rect = (btn as HTMLElement).getBoundingClientRect();
      const x = (e as MouseEvent).clientX - rect.left - rect.width / 2;
      const y = (e as MouseEvent).clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.3)',
      });
    });
  });
}
