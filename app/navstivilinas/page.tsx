import type { Metadata } from 'next';
import { navstiviliImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Navštívili nás',
  description: 'Školy, školky, organizace i milovníci zvířat všeho věku, kteří navštívili naši vodní miniZOO.',
  alternates: { canonical: '/navstivilinas' },
};

const visits = [
  {
    date: '26. 03. 2026',
    title: 'Ekologické centrum HUBERT',
    image: navstiviliImages.hubert,
    body:
      'V našem areálu jsme s radostí přivítali ekologické centrum HUBERT, které se zapojilo do programu Voda v pohybu. Setkání s lidmi, kteří sdílejí vztah k přírodě, pro nás vždy znamená víc než jen jednu návštěvu — často z nich vznikají dlouhodobá partnerství a přátelství. Děkujeme za milou atmosféru, inspirativní spolupráci a těšíme se na další setkání.',
  },
  {
    date: 'Návštěvy škol',
    title: 'ZŠ Komenského',
    image: navstiviliImages.zsKomenskeho,
    body: 'Žáci ze ZŠ Komenského absolvovali komentovanou prohlídku a poznali svět vodních ekosystémů.',
  },
  {
    date: 'Návštěvy škol',
    title: 'Děti na programu',
    image: navstiviliImages.deti,
    body: 'Společné setkání s dětmi a jejich pedagogy. Děkujeme za nadšení a chuť se učit.',
  },
  {
    date: 'Organizace',
    title: 'Armáda spásy',
    image: navstiviliImages.armadaSpasy,
    body: 'V areálu jsme přivítali také organizaci Armáda spásy. Vážíme si toho, že u nás našli prostor pro společný zážitek.',
  },
  {
    date: 'Návštěva',
    title: 'Ekologické centrum',
    image: navstiviliImages.ecoCenter,
    body: 'Společné setkání s odborníky z oblasti environmentálního vzdělávání.',
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.image} alt={v.title} style={{ width: '100%', height: 'auto' }} />
              </figure>
              <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-rose)', fontSize: '1.6rem', fontWeight: 700, marginBottom: '.4rem' }}>
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
