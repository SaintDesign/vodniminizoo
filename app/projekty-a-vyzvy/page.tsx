import Link from 'next/link';
import type { Metadata } from 'next';
import { projektyImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Projekty a výzvy',
  description: 'Aktuální projekty vodní miniZOO Baška — komplexní filtrační soustava, expozice, vzdělávací aktivity.',
  alternates: { canonical: '/projekty-a-vyzvy' },
};

const projects = [
  {
    date: '21. 01. 2026',
    title: 'Komplexní filtrační soustava — voda v pohybu a v rovnováze',
    image: projektyImages.vodaVPohybu,
    body:
      'Součástí expozic vodní miniZOO Baška je komplexní, vícestupňová filtrační soustava, která zajišťuje dlouhodobě stabilní kvalitu vody pro chov vodních živočichů a zároveň slouží jako názorná vzdělávací ukázka procesů čištění vody. Celý systém je navržen s důrazem na biologickou rovnováhu, minimalizaci spotřeby vody a šetrné nakládání s vodou.',
  },
  {
    date: '19. 05. 2025',
    title: 'Dokončení terária pro krokodýla nilského',
    image: projektyImages.filtraceOld,
    body:
      'Cílem projektu je kompletní dokončení expozice krokodýla nilského v areálu vodní miniZOO Baška.',
  },
];

export default function ProjektyPage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Projekty a výzvy</h1>
        </header>

        <div style={{ maxWidth: 1100, marginInline: 'auto', display: 'grid', gap: '4rem' }}>
          {projects.map((p, i) => (
            <article key={p.title} className="project-row" data-reveal>
              <div className="project-row__body">
                <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-rose)', fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '.4rem' }}>
                  {p.title}
                </h2>
                <p style={{ color: 'var(--color-text)', fontSize: '.85rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                  {p.date}
                </p>
                <p style={{ color: 'var(--color-ink)', fontWeight: 600, lineHeight: 1.75 }}>{p.body}</p>
              </div>
              <figure className="project-row__media" style={{ margin: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.title} style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
              </figure>
            </article>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link className="btn-rose" href="/">ZPĚT</Link>
        </div>
      </div>
    </section>
  );
}
