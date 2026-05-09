import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Adresa Baška 538, 739 01 Baška. Telefon +420 732 487 862, e-mail info@vodniminizoo.cz. Rezervace programů, dotazy a spolupráce.',
  alternates: { canonical: '/kontakt' },
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Spojte se s námi"
        title={<>Plánujete <em>návštěvu?</em><br />Tady nás najdete.</>}
        description="Rezervace programu, dotaz pro pedagoga, sponzoring i mediální spolupráce — odpovídáme do dvou pracovních dnů."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'Kontakt' }]}
      />

      <section className="section section--paper">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card" data-reveal>
              <span className="eyebrow" style={{ marginBottom: '1rem' }}>Kontakt</span>
              <dl>
                <div><dt>Adresa</dt><dd>{siteConfig.contact.address}</dd></div>
                <div><dt>Telefon</dt><dd><a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a></dd></div>
                <div><dt>E-mail</dt><dd><a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a></dd></div>
                <div><dt>Facebook</dt><dd><a href={siteConfig.contact.facebook} rel="noopener noreferrer">Vodní mini ZOO Baška</a></dd></div>
              </dl>

              <hr style={{ border: 0, height: '1px', background: 'var(--line)', margin: '1.5rem 0' }} />

              <span className="eyebrow" style={{ marginBottom: '1rem' }}>Provozní informace</span>
              <dl>
                <div><dt>Otevírací doba</dt><dd style={{ fontSize: '1rem', color: 'var(--slate)' }}>Pouze v rámci vzdělávacích programů,<br />po předchozí závazné rezervaci</dd></div>
                <div><dt>Programy</dt><dd style={{ fontSize: '1rem', color: 'var(--slate)' }}>Pondělí — pátek dopoledne</dd></div>
                <div><dt>Restaurace</dt><dd style={{ fontSize: '1rem', color: 'var(--slate)' }}>Otevřena od 14:00</dd></div>
              </dl>

              <hr style={{ border: 0, height: '1px', background: 'var(--line)', margin: '1.5rem 0' }} />

              <span className="eyebrow" style={{ marginBottom: '1rem' }}>Fakturační údaje</span>
              <dl>
                <div><dt>Organizace</dt><dd style={{ fontSize: '1rem' }}>{siteConfig.legal.company}</dd></div>
                <div><dt>IČ</dt><dd style={{ fontSize: '1rem' }}>{siteConfig.legal.ico}</dd></div>
                <div><dt>DIČ</dt><dd style={{ fontSize: '1rem' }}>{siteConfig.legal.dic}</dd></div>
              </dl>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
                <a className="btn btn--moss" href={siteConfig.contact.emailHref}>Napsat e-mail</a>
                <a className="btn btn--ghost" href={siteConfig.contact.phoneHref}>Zavolat</a>
              </div>
            </div>

            <div data-reveal>
              <div className="map-frame">
                <iframe
                  loading="lazy"
                  title="Mapa — vodní miniZOO Baška, Baška 538"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=18.39%2C49.65%2C18.43%2C49.68&layer=mapnik&marker=49.665%2C18.413"
                />
              </div>
              <p className="muted" style={{ marginTop: '1rem', fontSize: '.9rem' }}>
                Areál se nachází přibližně 30 minut chůze od železničního nádraží Pržno. Parkování v obci.
              </p>
              <p className="notice" style={{ marginTop: '1rem' }}>
                <strong>Před návštěvou:</strong> přečtěte si prosím{' '}
                <Link href="/navstevni-rad" style={{ color: 'var(--moss-dk)', textDecoration: 'underline' }}>
                  návštěvní řád
                </Link>
                . Děti mohou být v areálu pouze v doprovodu dospělé osoby.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
