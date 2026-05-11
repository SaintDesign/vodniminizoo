'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { mainNav } from '@/lib/navigation';
import { siteConfig } from '@/lib/site';

function isActive(pathname: string, href: string): boolean {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(href + '/');
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="site-header__logo" aria-label={`${siteConfig.name} — domovská stránka`}>
          <Image src="/assets/images/logo.png" alt="" width={220} height={150} priority />
        </Link>

        <p className="site-header__title">{siteConfig.name}</p>
        <p className="site-header__subtitle">{siteConfig.subtitle}</p>

        <nav className="site-nav" aria-label="Hlavní navigace">
          <button
            type="button"
            className="site-nav__toggle"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-nav-list"
            aria-label={open ? 'Zavřít menu' : 'Otevřít menu'}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
          <ul id="site-nav-list" className={`site-nav__list${open ? ' is-open' : ''}`}>
            {mainNav.map((item) => (
              <li key={item.href} className={item.children ? 'site-nav__has-sub' : undefined}>
                <Link href={item.href} aria-current={isActive(pathname, item.href) ? 'page' : undefined}>
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="site-nav__sub">
                    {item.children.map((sub) => (
                      <li key={sub.href}>
                        <Link href={sub.href} aria-current={pathname === sub.href ? 'page' : undefined}>
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
