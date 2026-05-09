'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export function RevealEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)');
    if (!reveals.length) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      reveals.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -5% 0px' },
    );

    reveals.forEach((el) => io.observe(el));

    // Pojistka: pokud z nějakého důvodu observer nefiruje
    // (chyba, lazy navigace, atd.), po 1.5 s ukaž vše.
    const safety = window.setTimeout(() => {
      reveals.forEach((el) => el.classList.add('is-visible'));
    }, 1500);

    return () => {
      io.disconnect();
      window.clearTimeout(safety);
    };
  }, [pathname]);

  return null;
}
