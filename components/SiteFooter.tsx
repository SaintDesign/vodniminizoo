import Link from 'next/link';
import { siteConfig } from '@/lib/site';

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p className="lead">Provozovatel:</p>
        <p>{siteConfig.legal.company}</p>
        <p>Sídlo: {siteConfig.legal.address}</p>
        <p>IČ: {siteConfig.legal.ico}</p>
        <p>DIČ: {siteConfig.legal.dic}</p>
        <p>Právní forma: {siteConfig.legal.form}</p>
        <p>{siteConfig.legal.registry}</p>
        <p>{siteConfig.legal.body}</p>
        <p>{siteConfig.legal.actsAlone}</p>
        <p className="copy">
          {siteConfig.name} <strong>{siteConfig.legal.copyrightLine}</strong>
        </p>
        <p className="copy">
          <Link href="/pravidla-ochrany-soukromi">Cookies</Link>
        </p>
      </div>
    </footer>
  );
}
