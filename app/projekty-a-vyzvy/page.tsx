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
    date: 'Archivní projekt',
    title: 'Historická filtrace',
    image: projektyImages.filtraceOld,
    body:
      'Pohled na vývoj naší filtrační infrastruktury v čase. Pravidelně investujeme do zlepšování kvality vody a welfare zvířat.',
  },
];

export default function ProjektyPage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Projekty a výzvy</h1>
        </header>

        <div style={{ maxWidth: 900, marginInline: 'auto', display: 'grid', gap: '3rem' }}>
          {projects.map((p) => (
            <article key={p.title} data-reveal>
              <figure style={{ margin: 0, marginBottom: '1.5rem', overflow: 'hidden', borderRadius: 4 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.title} style={{ width: '100%', height: 'auto' }} />
              </figure>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-rose)', fontSize: '1.6rem', fontWeight: 700, marginBottom: '.4rem' }}>
                {p.title}
              </h2>
              <p style={{ color: 'var(--color-text)', fontSize: '.85rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                {p.date}
              </p>
              <p style={{ color: 'var(--color-text)', lineHeight: 1.75 }}>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
