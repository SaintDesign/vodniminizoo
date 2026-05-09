import Link from 'next/link';
import { footerLinks } from '@/lib/navigation';
import { siteConfig } from '@/lib/site';
import { FacebookIcon, MailIcon } from './icons';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>{siteConfig.name}</h3>
            <p>
              Neziskové vzdělávací zařízení (z. s.) zaměřené na vodu, vodní ekosystémy a ochranu přírody. Otevíráme důležitá ekologická témata srozumitelně.
            </p>
            <div className="social">
              <a href={siteConfig.contact.facebook} aria-label="Facebook" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
              <a href={siteConfig.contact.emailHref} aria-label="E-mail">
                <MailIcon />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Návštěva</h4>
            <ul>
              {footerLinks.visit.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>O projektu</h4>
            <ul>
              {footerLinks.about.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Podpora</h4>
            <ul>
              {footerLinks.support.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {siteConfig.legal.company} · IČ {siteConfig.legal.ico} · DIČ {siteConfig.legal.dic}
          </span>
          <span>
            <Link href="/pravidla-ochrany-soukromi" style={{ marginRight: '1rem' }}>
              Ochrana soukromí
            </Link>
            <Link href="/licence-a-povinne-informace">Licence</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
