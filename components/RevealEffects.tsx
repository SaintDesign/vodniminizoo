'use client';

import { useEffect } from 'react';

export function RevealEffects() {
  useEffect(() => {
    const reveals = document.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!reveals.length) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
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
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );

    reveals.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
