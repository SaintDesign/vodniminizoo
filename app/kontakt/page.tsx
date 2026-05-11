import type { Metadata } from 'next';
import { kontaktImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Vodní miniZOO Baška z.s., Baška 538, 739 01 Baška. Telefon +420 732 487 862, e-mail info@vodniminizoo.cz.',
  alternates: { canonical: '/kontakt' },
};

export default function KontaktPage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'clamp(2.2rem, 1.5rem + 2.2vw, 3rem)',
          color: 'var(--color-rose)',
          display: 'inline-block',
          position: 'relative',
          paddingBottom: '.5rem',
          marginBottom: '2rem',
          textAlign: 'left',
        }}>
          Kontakt
          <span style={{ position: 'absolute', left: 0, bottom: 0, width: 60, height: 2, background: 'var(--color-rose)' }} />
        </h1>

        {/* 2-sloupcový layout: kontaktní info vlevo, form vpravo */}
        <div className="cols-2" data-reveal>
          <div className="cols-2__col">
            <p style={{ marginBottom: '1.5rem' }}>
              Vážení návštěvníci, pokud máte zájem navštívit naši vodní miniZOO, můžete nás kontaktovat prostřednictvím následujících možností:
            </p>

            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1.25rem' }}>
              <li style={{ display: 'grid', gridTemplateColumns: '32px 1fr', alignItems: 'center', gap: '.8rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24" style={{ color: 'var(--color-rose)' }}>
                  <path d="M12 22s-7-7-7-13a7 7 0 1 1 14 0c0 6-7 13-7 13z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
                <div>
                  <strong style={{ color: 'var(--color-rose)', display: 'block' }}>{siteConfig.contact.company}</strong>
                  <span style={{ color: 'var(--color-text)', fontSize: '.95rem' }}>{siteConfig.contact.address}</span>
                </div>
              </li>
              <li style={{ display: 'grid', gridTemplateColumns: '32px 1fr', alignItems: 'center', gap: '.8rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24" style={{ color: 'var(--color-rose)' }}>
                  <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19 19 0 0 1-8.27-2.94 19 19 0 0 1-6-6A19 19 0 0 1 3.93 4.11 1 1 0 0 1 5 3h4a1 1 0 0 1 1 .75 12 12 0 0 0 .65 2.6 1 1 0 0 1-.23 1L8.91 8.91a16 16 0 0 0 6 6l1.56-1.56a1 1 0 0 1 1-.23 12 12 0 0 0 2.6.65 1 1 0 0 1 .75 1z" />
                </svg>
                <div>
                  <a href={siteConfig.contact.phoneHref} style={{ color: 'var(--color-rose)', fontWeight: 600 }}>
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </li>
              <li style={{ display: 'grid', gridTemplateColumns: '32px 1fr', alignItems: 'center', gap: '.8rem' }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24" style={{ color: 'var(--color-rose)' }}>
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <div>
                  <a href={siteConfig.contact.emailHref} style={{ color: 'var(--color-rose)', fontWeight: 600 }}>
                    {siteConfig.contact.email}
                  </a>
                </div>
              </li>
              <li style={{ display: 'grid', gridTemplateColumns: '32px 1fr', alignItems: 'center', gap: '.8rem' }}>
                <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24" style={{ color: 'var(--color-rose)' }}>
                  <path d="M13 22v-8h3l1-4h-4V7c0-1 .3-2 2-2h2V1.2A23 23 0 0 0 14 1c-3 0-5 2-5 5v4H6v4h3v8z" />
                </svg>
                <div>
                  <a href={siteConfig.contact.facebook} rel="noopener noreferrer" style={{ color: 'var(--color-rose)', fontWeight: 600 }}>
                    {siteConfig.contact.facebookLabel}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="cols-2__col">
            <form className="kontakt-form" action={siteConfig.contact.emailHref} method="post" style={{ display: 'grid', gap: '1rem' }}>
              <label style={{ display: 'grid', gap: '.35rem', color: 'var(--color-ink)', fontSize: '.9rem', fontWeight: 600 }}>
                Jméno a příjmení
                <input type="text" name="name" required style={{ padding: '.75rem 1rem', border: '1px solid var(--color-line)', borderRadius: 4, fontFamily: 'var(--font-body)', fontSize: '1rem' }} />
              </label>
              <label style={{ display: 'grid', gap: '.35rem', color: 'var(--color-ink)', fontSize: '.9rem', fontWeight: 600 }}>
                E-mail
                <input type="email" name="email" placeholder="@" required style={{ padding: '.75rem 1rem', border: '1px solid var(--color-line)', borderRadius: 4, fontFamily: 'var(--font-body)', fontSize: '1rem' }} />
              </label>
              <label style={{ display: 'grid', gap: '.35rem', color: 'var(--color-ink)', fontSize: '.9rem', fontWeight: 600 }}>
                Zpráva
                <textarea name="message" required style={{ minHeight: 110, padding: '.75rem 1rem', border: '1px solid var(--color-line)', borderRadius: 4, fontFamily: 'var(--font-body)', fontSize: '1rem', resize: 'vertical' }} />
              </label>
              <button type="submit" className="btn-rose" style={{ justifySelf: 'start' }}>Odeslat</button>
            </form>
          </div>
        </div>

        <hr style={{ border: 0, height: 1, background: 'var(--color-line)', margin: '3rem auto', maxWidth: 1100 }} />

        {/* Pěší trasa */}
        <div className="cols-2" data-reveal>
          <div className="cols-2__col">
            <p>Vážení návštěvníci,</p>
            <p>
              <strong>Krásná pěší trasa z nádraží Pržno až do vodní miniZOO Baška</strong>
            </p>
            <p>
              Pro návštěvníky, kteří k nám cestují <strong>hromadnou dopravou</strong>, doporučujeme vyhlídkovou <strong>pěší trasu</strong> z vlakového nádraží <strong>Pržno</strong>. Trasa vede převážně mimo rušnou komunikaci, skýtá výhledy na Beskydy a pokračuje kolem potoka.
            </p>
            <p>
              Délka trasy: <strong>přibližně 30 minut chůze</strong> ➡
            </p>
          </div>
          <div className="cols-2__col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', alignItems: 'start' }}>
            <figure style={{ margin: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={kontaktImages.pesiTrasa} alt="Mapa pěší trasy z Pržna" style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
            </figure>
            <figure style={{ margin: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={kontaktImages.qrTrasa} alt="QR kód pěší trasy" style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
            </figure>
          </div>
        </div>

        <hr style={{ border: 0, height: 1, background: 'var(--color-line)', margin: '3rem auto', maxWidth: 1100 }} />

        {/* OpenStreetMap mapa */}
        <div style={{ maxWidth: 1100, marginInline: 'auto' }} data-reveal>
          <div style={{ aspectRatio: '16/9', overflow: 'hidden', borderRadius: 4, border: '1px solid var(--color-line)' }}>
            <iframe
              loading="lazy"
              title="Mapa — vodní miniZOO Baška, Baška 538"
              src="https://www.openstreetmap.org/export/embed.html?bbox=18.39%2C49.65%2C18.43%2C49.68&layer=mapnik&marker=49.665%2C18.413"
              style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
