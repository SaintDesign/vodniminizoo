import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Navštívili nás',
  description: 'Školy, školky, organizace i milovníci zvířat všeho věku, kteří navštívili naši vodní miniZOO. Příběhy spolupráce a partnerství.',
  alternates: { canonical: '/navstivilinas' },
};

const visits = [
  {
    date: '26. 03. 2026',
    title: 'Ekologické centrum HUBERT',
    image: '/assets/images/skola.jpeg',
    body:
      'V našem areálu jsme s radostí přivítali ekologické centrum HUBERT, které se zapojilo do programu Voda v pohybu. Setkání s lidmi, kteří sdílejí vztah k přírodě, pro nás vždy znamená víc než jen jednu návštěvu — často z nich vznikají dlouhodobá partnerství a přátelství. Děkujeme za milou atmosféru, inspirativní spolupráci a těšíme se na další setkání.',
  },
];

export default function NavstiviliNasPage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Navštívili nás</h1>
        </header>

        <div style={{ maxWidth: 900, marginInline: 'auto', display: 'grid', gap: '3rem' }}>
          {visits.map((v) => (
            <article key={v.title} data-reveal>
              <figure style={{ margin: 0, marginBottom: '1.5rem', overflow: 'hidden', borderRadius: 4 }}>
                <Image src={v.image} alt={v.title} width={900} height={500} sizes="(min-width: 980px) 900px, 92vw" />
              </figure>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-rose)', fontSize: '1.6rem', fontWeight: 400, marginBottom: '.4rem' }}>
                {v.title}
              </h2>
              <p style={{ color: 'var(--color-text)', fontSize: '.85rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                {v.date}
              </p>
              <p style={{ color: 'var(--color-text)', lineHeight: 1.75 }}>{v.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
