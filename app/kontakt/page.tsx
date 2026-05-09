import Link from 'next/link';
import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kontakt',
  description:
    'Adresa Baška 538, 739 01 Baška (okres Frýdek-Místek). Telefon +420 732 487 862, e-mail info@vodniminizoo.cz. Rezervace programů, dotazy a spolupráce.',
  alternates: { canonical: '/kontakt' },
};

export default function KontaktPage() {
  return (
    <>
      <PageHero
        eyebrow="Spojte se s námi"
        title={
          <>
            Plánujete <em>návštěvu?</em>
            <br />
            Tady nás najdete.
          </>
        }
        description="Rezervace programu, dotaz pro pedagoga, sponzoring i mediální spolupráce — odpovídáme do dvou pracovních dnů. Nebo zavolejte rovnou."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'Kontakt' }]}
      />

      <section className="section section--tight">
        <div className="container">
          <div className="info-bar" data-reveal>
            <div className="info-bar__cell">
              <span className="info-bar__label">Telefon</span>
              <span className="info-bar__value">
                <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
              </span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">E-mail</span>
              <span className="info-bar__value">
                <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>
              </span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">Adresa</span>
              <span className="info-bar__value">{siteConfig.contact.address}</span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">Provoz</span>
              <span className="info-bar__value">Po — Pá dopoledne</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card" data-reveal>
              <span className="eyebrow" style={{ marginBottom: '1rem' }}>Kontakt</span>
              <dl>
                <div>
                  <dt>Adresa</dt>
                  <dd>{siteConfig.contact.address}</dd>
                </div>
                <div>
                  <dt>Telefon</dt>
                  <dd>
                    <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>E-mail</dt>
                  <dd>
                    <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>Facebook</dt>
                  <dd>
                    <a href={siteConfig.contact.facebook} rel="noopener noreferrer">
                      Vodní mini ZOO Baška
                    </a>
                  </dd>
                </div>
              </dl>

              <hr style={{ border: 0, height: '1px', background: 'var(--line)', margin: '1.5rem 0' }} />

              <span className="eyebrow" style={{ marginBottom: '1rem' }}>Provozní informace</span>
              <dl>
                <div>
                  <dt>Otevírací doba</dt>
                  <dd style={{ fontSize: '1rem', color: 'var(--slate)' }}>
                    Pouze v rámci vzdělávacích programů,
                    <br />
                    po předchozí závazné rezervaci
                  </dd>
                </div>
                <div>
                  <dt>Programy</dt>
                  <dd style={{ fontSize: '1rem', color: 'var(--slate)' }}>Pondělí — pátek dopoledne</dd>
                </div>
                <div>
                  <dt>Restaurace</dt>
                  <dd style={{ fontSize: '1rem', color: 'var(--slate)' }}>Otevřena od 14:00</dd>
                </div>
              </dl>

              <hr style={{ border: 0, height: '1px', background: 'var(--line)', margin: '1.5rem 0' }} />

              <span className="eyebrow" style={{ marginBottom: '1rem' }}>Fakturační údaje</span>
              <dl>
                <div>
                  <dt>Organizace</dt>
                  <dd style={{ fontSize: '1rem' }}>{siteConfig.legal.company}</dd>
                </div>
                <div>
                  <dt>IČ</dt>
                  <dd style={{ fontSize: '1rem' }}>{siteConfig.legal.ico}</dd>
                </div>
                <div>
                  <dt>DIČ</dt>
                  <dd style={{ fontSize: '1rem' }}>{siteConfig.legal.dic}</dd>
                </div>
              </dl>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
                <a className="btn btn--moss" href={siteConfig.contact.emailHref}>
                  Napsat e-mail
                </a>
                <a className="btn btn--ghost" href={siteConfig.contact.phoneHref}>
                  Zavolat
                </a>
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

              <div style={{ marginTop: '2rem' }}>
                <span className="eyebrow">Jak se k nám dostat</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', letterSpacing: '-.01em', marginTop: '.6rem' }}>
                  Doprava do Bašky
                </h3>
                <ul className="facts" style={{ marginTop: '1rem' }}>
                  <li>
                    <strong>Vlakem</strong>
                    <span>Stanice Pržno (linka Frýdek-Místek — Frýdlant n. O.), poté ~30 min chůze</span>
                  </li>
                  <li>
                    <strong>Autem</strong>
                    <span>Z dálnice D48, sjezd Frýdek-Místek, dále směr Frýdlant n. O. / Baška</span>
                  </li>
                  <li>
                    <strong>Autobusem</strong>
                    <span>Linky z Frýdku-Místku — zastávka Baška</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--cream">
        <div className="container">
          <div data-reveal style={{ marginBottom: '2.5rem', textAlign: 'center', maxWidth: '60ch', marginInline: 'auto' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Časté dotazy</span>
            <h2 className="h-display">
              Než nás <em>kontaktujete.</em>
            </h2>
          </div>

          <div className="faq" data-reveal>
            <details>
              <summary>Můžu k vám přijít bez rezervace?</summary>
              <div className="faq__body">
                <p>Ne. Areál je přístupný výhradně v rámci vzdělávacích programů s odborným výkladem, vždy po předchozí závazné rezervaci. Volnou prohlídku nenabízíme.</p>
              </div>
            </details>
            <details>
              <summary>Kolik dní dopředu se mám objednat?</summary>
              <div className="faq__body">
                <p>Ideálně 1–3 týdny dopředu, zejména pro skupiny škol. Při menších skupinách rádi domluvíme termín i v kratším horizontu — zavolejte nebo napište.</p>
              </div>
            </details>
            <details>
              <summary>Otevíráte i odpoledne nebo o víkendu?</summary>
              <div className="faq__body">
                <p>Standardně programy probíhají pondělí — pátek dopoledne. Mimo tento čas pouze po individuální dohodě (sponzorské akce, firemní skupiny). Restaurace Penzionu BAŠKA VODA CZ je otevřena od 14:00.</p>
              </div>
            </details>
            <details>
              <summary>Hledám kontakt na médiích / pro PR.</summary>
              <div className="faq__body">
                <p>Pro mediální dotazy a PR napište prosím přímo na <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a> s předmětem „Médium / PR". Odpovíme do 2 pracovních dnů.</p>
              </div>
            </details>
            <details>
              <summary>Jak se k vám dostanu z Frýdku-Místku?</summary>
              <div className="faq__body">
                <p>Autem ~10 minut směr Frýdlant nad Ostravicí. Vlakem na zastávku Pržno + ~30 minut chůze. Autobusové spoje z Frýdku-Místku jezdí pravidelně, zastávka Baška.</p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
