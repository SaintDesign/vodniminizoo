import type { Metadata } from 'next';
import { navstiviliImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Navštívili nás',
  description: 'Školy, školky, organizace i milovníci zvířat všeho věku, kteří navštívili naši vodní miniZOO Baška.',
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
    date: '27. 10. 2025',
    title: 'Slezská diakonie na výpravě za zvířaty',
    image: navstiviliImages.armadaSpasy,
    body:
      'Děkujeme Slezské diakonii za milou návštěvu našeho vodního miniZOO. Velice si vážíme zájmu a podpory, kterou nám projevují, a těšíme se na další společné aktivity v rámci naší vzdělávací činnosti.',
  },
  {
    date: '21. 10. 2025',
    title: 'Z Havířova k nám přijeli děti z Armády spásy ČR',
    image: navstiviliImages.armadaSpasy,
    body:
      'Ani chladné počasí dnes nezabránilo krásnému zážitku! Do vodní miniZOO Baška dorazila skupinka 7 dětí z Armády spásy v České republice, z. s., v doprovodu velmi milých a usměvavých dospělých, se kterými jsme společně strávili báječné poledne.',
  },
  {
    date: '15. 10. 2025',
    title: 'Navštívila nás Základní škola Frýdlant nad Ostravicí - Komenského',
    image: navstiviliImages.zsKomenskeho,
    body:
      'Do vodní miniZOO Baška tentokrát zavítaly děti ze Základní školy Frýdlant nad Ostravicí, Komenského 420. Čtyřicet zvídavých školáků si užilo komentovanou prohlídku, během které se dozvěděli spoustu zajímavostí.',
  },
  {
    date: '13. 06. 2025',
    title: 'ŽIRAFA na návštěvě vodní miniZOO',
    image: navstiviliImages.obrazek,
    body:
      'Ve vodní miniZOO Baška jsme měli tu čest přivítat skupinu pěti klientů a dvou vychovatelek z organizace ŽIRAFA FM. Společně strávili dopoledne plné zážitků — komentovaná prohlídka, procházka zahradou s rybníky a chutné občerstvení v restauraci Penzionu BAŠKA VODA CZ vytvořily pestrý a pohodový program.',
  },
  {
    date: '12. 06. 2025',
    title: 'Návštěva žáků 1. ročníku ze ZŠ a MŠ Staré Město',
    image: navstiviliImages.img2052,
    body:
      'Dne 12. června 2025 jsme ve vodní miniZOO Baška přivítali skupinu 14 žáků z 1. ročníku Základní a Mateřské školy Staré Město. Malí návštěvníci si užili komentovanou prohlídku, během které kladli zvídavé otázky a projevili velký zájem o zvířata.',
  },
  {
    date: 'Přírodní škola',
    title: 'Přírodní škola ve vodní miniZOO Baška',
    image: navstiviliImages.deti,
    body:
      'Skupinu žáků z Přírodní školy — malého, důvěrného gymnázia, kde je škola nejen učebnou, ale především plnohodnotným využitím „tady a teď". Jejich zájem, vnímavost a slušné chování nás doslova pohladily na duši.',
  },
  {
    date: 'Návštěvy',
    title: 'Ekologické centrum',
    image: navstiviliImages.ecoCenter,
    body:
      'Společné setkání s odborníky z oblasti environmentálního vzdělávání. Děkujeme za inspirativní spolupráci.',
  },
];

export default function NavstiviliNasPage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Navštívili nás</h1>
        </header>

        <div style={{ maxWidth: 1100, marginInline: 'auto', display: 'grid', gap: '3.5rem' }}>
          {visits.map((v) => (
            <article key={v.title} className="project-row" data-reveal>
              <div className="project-row__body">
                <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--color-rose)', fontSize: '1.75rem', fontWeight: 700, lineHeight: 1.3, marginBottom: '.4rem' }}>
                  {v.title}
                </h2>
                <p style={{ color: 'var(--color-text)', fontSize: '.85rem', marginBottom: '1rem', fontStyle: 'italic' }}>
                  {v.date}
                </p>
                <p style={{ color: 'var(--color-text)', lineHeight: 1.75 }}>{v.body}</p>
              </div>
              <figure className="project-row__media" style={{ margin: 0 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.image} alt={v.title} style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
              </figure>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
