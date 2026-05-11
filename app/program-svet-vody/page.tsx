import Link from 'next/link';
import type { Metadata } from 'next';
import { svetVodyImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Program Svět vody',
  description: 'Komentované prohlídky vnitřního i venkovního okruhu. Krokodýli, vodní želvy, Arapaima gigas v největším akváriu Moravskoslezského kraje (41 000 l). Místní biotopy a život kolem rybníků.',
  alternates: { canonical: '/program-svet-vody' },
};

const labels = ['Krokodýl', 'Arapaima gigas', 'Obojživelníci', 'Naučná stezka'];

export default function ProgramSvetVodyPage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Program Svět vody</h1>
        </header>

        {/* Hero 4-up s animaly */}
        <div className="gallery-grid" data-reveal style={{ marginBottom: '3rem' }}>
          {svetVodyImages.map((src, i) => (
            <figure key={src}>
              <div className="gallery-grid__media">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={labels[i]} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <figcaption>{labels[i]}</figcaption>
            </figure>
          ))}
        </div>

        {/* 2-sloupcový layout: Vnitřní okruh | Venkovní okruh */}
        <div className="cols-2" data-reveal>
          <div className="cols-2__col">
            <h3>Vnitřní okruh — svět vodních obrů a exotických živočichů</h3>
            <p>
              Vnitřní okruh vás zavede do kouzelného světa vodních želv, krokodýlů a dalších obyvatel tropických vod. Děti i dospělí se ocitnou tváří v tvář zvířatům, která běžně znají jen z obrázků nebo dokumentů, a mohou je pozorovat z bezprostřední blízkosti.
            </p>
            <p>
              Největším zážitkem je setkání s <strong>Arapaimami gigas</strong>, jedněmi z největších sladkovodních ryb na světě. Pro tyto obří ryby jsme vybudovali největší akvárium v Moravskoslezském kraji o objemu <strong>41 000 litrů</strong>. Už samotný pohled do akvária vyvolává úžas a často i otázku: „Opravdu takhle velká ryba existuje?"
            </p>
            <p>
              Během prohlídky se návštěvníci hravou a srozumitelnou formou dozví, jak tato zvířata žijí, čím se živí, jak se chovají a co všechno potřebují ke spokojenému životu v lidské péči. Výklad je přizpůsoben dětem, ale zaujme i dospělé, kteří si odnesou řadu zajímavostí. Návštěva vnitřního okruhu je tak nejen zábavným dobrodružstvím, ale i příjemným poznáním světa vody a jeho neobyčejných obyvatel.
            </p>
          </div>

          <div className="cols-2__col">
            <h3>Venkovní okruh — život kolem vody v přírodě</h3>
            <p>
              Příjemná procházka kolem přírodních rybníků vás zavede do světa místních vodních a mokřadních biotopů. Během výukového programu nahlédnete do života sladkovodních ryb, raků, škeblí, obojživelníků i ptáků, kteří se zdržují v okolí vody. Dozvíte se, jak funguje rybniční ekosystém, proč je důležité zadržování vody v krajině a jakou roli hraje čistá voda pro přírodu i člověka.
            </p>
            <p>
              Výklad se přizpůsobuje ročnímu období — pozorujeme ryby, ptáky, páření žab i vývoj vodních rostlin. Děti si v některých obdobích mohou zkusit chytit pstruha do ruky nebo nakrmit kapry, což je zážitek, na který jen tak nezapomenou.
            </p>
          </div>
        </div>

        <hr style={{ border: 0, height: 1, background: 'var(--color-line)', margin: '3rem auto', maxWidth: 1100 }} />

        <div style={{ textAlign: 'center' }}>
          <Link className="btn-rose" href="/vyukovy-program-voda-v-pohybu">CENÍK</Link>
        </div>
      </div>
    </section>
  );
}
