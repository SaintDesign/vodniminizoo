// vodní miniZOO Baška — site script
(() => {
  'use strict';

  // -----  Sticky header shadow on scroll
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // -----  Mobile menu
  const menu = document.getElementById('mobile-menu');
  const openBtn = document.querySelector('[data-menu-open]');
  const closeBtn = document.querySelector('[data-menu-close]');

  const closeMenu = () => {
    if (!menu) return;
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    document.documentElement.style.overflow = '';
  };
  const openMenu = () => {
    if (!menu) return;
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    document.documentElement.style.overflow = 'hidden';
  };

  openBtn?.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  // -----  Reveal-on-scroll
  const reveals = document.querySelectorAll('[data-reveal]');
  if (reveals.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('is-visible'));
  }

  // -----  Animated stats counter
  const counters = document.querySelectorAll('[data-count]');
  if (counters.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const decimals = (el.dataset.count.split('.')[1] || '').length;
        const duration = 1400;
        const startTime = performance.now();
        const fmt = el.dataset.format || '';
        const tick = (now) => {
          const t = Math.min(1, (now - startTime) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          const value = target * eased;
          el.textContent = (decimals > 0 ? value.toFixed(decimals) : Math.round(value).toLocaleString('cs-CZ')) + fmt;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => io.observe(el));
  }

  // -----  Subtle parallax on hero shapes
  const shapes = document.querySelectorAll('[data-parallax]');
  if (shapes.length && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        shapes.forEach(el => {
          const speed = parseFloat(el.dataset.parallax) || 0.1;
          el.style.transform = `translate3d(0, ${y * speed}px, 0)`;
        });
        ticking = false;
      });
    }, { passive: true });
  }

  // -----  Mark current nav link
  const path = location.pathname.replace(/\/+$/, '/') || '/';
  document.querySelectorAll('.nav__menu a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const norm = href.replace(/\/+$/, '/') || '/';
    if (norm === path) a.setAttribute('aria-current', 'page');
  });
})();
