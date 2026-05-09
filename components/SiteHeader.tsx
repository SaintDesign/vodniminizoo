'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { mainNav } from '@/lib/navigation';
import { siteConfig } from '@/lib/site';
import { ArrowRight, CloseIcon, MenuIcon } from './icons';

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.documentElement.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container nav">
          <Link href="/" className="nav__logo" aria-label={`${siteConfig.name} — domovská stránka`}>
            <Image src="/assets/images/logo.png" alt="" width={56} height={40} priority />
            <span className="nav__logo-text">
              {siteConfig.shortName}
              <em>vodní svět</em>
            </span>
          </Link>

          <ul className="nav__menu">
            {mainNav.map((item) => (
              <li key={item.href} className={item.children ? 'nav__has-sub' : undefined}>
                <Link href={item.href} aria-current={isActive(pathname, item.href) ? 'page' : undefined}>
                  {item.label}
                  {item.children ? ' ▾' : ''}
                </Link>
                {item.children && (
                  <ul className="nav__sub">
                    {item.children.map((sub) => (
                      <li key={sub.href}>
                        <Link href={sub.href}>{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="nav__cta">
            <Link className="btn btn--moss" href="/kontakt">
              Rezervovat program
              <ArrowRight className="arrow" />
            </Link>
          </div>

          <button
            type="button"
            className="nav__toggle"
            onClick={() => setMenuOpen(true)}
            aria-label="Otevřít menu"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
          >
            <MenuIcon />
          </button>
        </div>
      </header>

      <aside className={`mobile-menu${menuOpen ? ' is-open' : ''}`} id="mobile-menu" aria-hidden={!menuOpen}>
        <div className="mobile-menu__head">
          <Link href="/" className="nav__logo" onClick={() => setMenuOpen(false)}>
            <Image src="/assets/images/logo.png" alt="" width={44} height={32} />
            <span className="nav__logo-text" style={{ color: 'var(--cream)' }}>
              {siteConfig.shortName}
              <em style={{ color: 'var(--aqua)' }}>vodní svět</em>
            </span>
          </Link>
          <button type="button" className="mobile-menu__close" onClick={() => setMenuOpen(false)} aria-label="Zavřít menu">
            <CloseIcon />
          </button>
        </div>
        <nav>
          <Link href="/o-nas">O nás</Link>
          <Link href="/vzdelavaci-programy">Vzdělávací programy</Link>
          <Link href="/program-svet-vody">Svět vody</Link>
          <Link href="/vyukovy-program-voda-v-pohybu">Ceník</Link>
          <Link href="/fotogalerie">Fotogalerie</Link>
          <Link href="/projekty-a-vyzvy">Projekty</Link>
          <Link href="/podpora">Podpora</Link>
          <Link href="/kontakt">Kontakt</Link>
        </nav>
        <div className="mobile-menu__footer">
          <span>{siteConfig.contact.address}</span>
          <span>{siteConfig.contact.phone}</span>
          <span>{siteConfig.contact.email}</span>
        </div>
      </aside>
    </>
  );
}
