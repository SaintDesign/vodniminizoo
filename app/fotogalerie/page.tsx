import type { Metadata } from 'next';
import { fotogalerieImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Fotogalerie',
  description: 'Fotogalerie z vodní miniZOO Baška — akvária, expozice, naučná stezka, naši obyvatelé.',
  alternates: { canonical: '/fotogalerie' },
};

export default function FotogaleriePage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Fotogalerie</h1>
        </header>

        <div className="foto-grid" data-reveal>
          {fotogalerieImages.map((p, i) => (
            <figure key={p.src} className={`foto-grid__item foto-grid__item--${(i % 4) + 1}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.src} alt={p.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
