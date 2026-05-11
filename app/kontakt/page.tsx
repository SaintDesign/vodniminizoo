import type { Metadata } from 'next';
import { ContactBlock } from '@/components/ContactBlock';
import { kontaktImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Vodní miniZOO Baška z.s., Baška 538, 739 01 Baška. Telefon +420 732 487 862, e-mail info@vodniminizoo.cz.',
  alternates: { canonical: '/kontakt' },
};

export default function KontaktPage() {
  return (
    <>
      <ContactBlock />

      <section className="section section--paper">
        <div className="container">
          <div className="prose">
            <h2 data-reveal>Krásná pěší trasa z nádraží Pržno až do vodní miniZOO Baška</h2>
            <p>Vážení návštěvníci,</p>
            <p>
              pro návštěvníky, kteří k nám cestují hromadnou dopravou, doporučujeme vyhlídkovou pěší trasu z vlakového nádraží Pržno. Trasa vede převážně mimo rušnou komunikaci, skýtá výhledy na Beskydy a pokračuje kolem potoka.
            </p>
            <p style={{ color: 'var(--color-rose)', textAlign: 'center', fontSize: '1.1rem' }}>
              <strong>Délka trasy: přibližně 30 minut chůze ➡</strong>
            </p>

            <figure style={{ margin: '2rem 0' }} data-reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={kontaktImages.pesiTrasa} alt="Pěší trasa Pržno → vodní miniZOO Baška" style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
            </figure>

            <figure style={{ margin: '2rem auto', maxWidth: 400 }} data-reveal>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={kontaktImages.qrTrasa} alt="QR kód pěší trasy" style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
              <figcaption style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '.9rem', marginTop: '.5rem', color: 'var(--color-text)' }}>
                QR kód pěší trasy
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
