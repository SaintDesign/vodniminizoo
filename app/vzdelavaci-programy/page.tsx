import Link from 'next/link';
import type { Metadata } from 'next';
import { programyImages } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Vzdělávací programy',
  description: 'Vzdělávací programy zaměřené na ochranu vody, čištění a roli pro ekosystémy. Voda v pohybu, Rybniční ekosystém, Arapaima gigas — pro děti, dospělé, školy i skupiny.',
  alternates: { canonical: '/vzdelavaci-programy' },
};

export default function VzdelavaciProgramyPage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Vzdělávací programy</h1>
        </header>

        <div className="btn-row" data-reveal style={{ marginBottom: '2.5rem' }}>
          <Link className="btn-rose" href="/navstevni-rad">Informace k návštěvě</Link>
        </div>

        <div className="btn-row" data-reveal style={{ marginBottom: '2rem' }}>
          <Link className="btn-rose" href="#metodika">Metodika výukového programu</Link>
        </div>

        <div className="prose">
          <figure style={{ margin: '2rem 0' }} data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={programyImages.group} alt="Skupina při programu" style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
          </figure>

          <p id="metodika">
            Voda je základem života — pro přírodu, ekosystémy i člověka. V připravovaných vzdělávacích programech se zaměřujeme na ochranu vody v přírodě, význam čištění vody, její roli pro rostliny, živočichy i krajinu a na téma zadržování vody v krajině.
          </p>

          <figure style={{ margin: '2rem 0' }} data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={programyImages.child1} alt="Dítě při výuce" style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
          </figure>

          <p>
            Součástí programů jsou komentované prohlídky, které propojují svět exotických vodních zvířat, plazů, želv a ryb s místním biotopem čtyř rybníků. Návštěvníci se seznámí nejen s rybami našich vod — zejména pstruhem potočním, duhovým a sivenem americkým, ale také s kaprem, amurem, karasem, jeseterem či dalšími druhy ryb. Pozornost věnujeme i dalším obyvatelům vodního prostředí, jako jsou škeble, raci, obojživelníci a vzácní ptáci, které voda přirozeně přitahuje. Zároveň představujeme exotická vodní zvířata, mezi nimi krokodýly, vodní želvy a velké sladkovodní ryby. Pýchou našeho zařízení je chov královny Amazonky — arapaimy gigas, jedné z největších sladkovodních ryb světa, která je silným symbolem významu ochrany vodních ekosystémů napříč kontinenty.
          </p>

          <figure style={{ margin: '2rem 0' }} data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={programyImages.child2} alt="Aktivita s dětmi" style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
          </figure>

          <p>
            Programy jsou určeny dětem i dospělým, široké veřejnosti o víkendech, stejně jako školám, organizacím, skupinám a osobám s různými typy zdravotního znevýhodnění. Vše probíhá po individuální domluvě, s možností přizpůsobení obsahu, rozsahu i formy programu konkrétním potřebám účastníků.
          </p>
          <p style={{ textAlign: 'center', fontStyle: 'italic', color: 'var(--color-rose)', marginTop: '2rem' }}>
            Poznejte vodu v souvislostech — s respektem, pochopením a zážitkem.
          </p>
        </div>

        {/* 3-sloupcový layout dole: Voda v pohybu | Rybniční ekosystém | Arapaima gigas */}
        <div className="cards-3" data-reveal style={{ marginTop: '4rem' }}>
          <div className="cards-3__item">
            <h3><Link href="/program-svet-vody">Voda v pohybu</Link></h3>
            <p style={{ textAlign: 'center' }}>
              Vnitřní i venkovní okruh — komentovaná prohlídka, setkání se zvířaty a praktický výklad o vodě v krajině.
            </p>
          </div>
          <div className="cards-3__item">
            <h3>Rybniční ekosystém</h3>
            <p>
              Tento vzdělávací program je v současné době ve fázi aktualizace a přípravy pro webové zobrazení. Jeho obsah bude zveřejněn v nejbližší době. Děkujeme za pochopení.
            </p>
          </div>
          <div className="cards-3__item">
            <h3>Arapaima gigas</h3>
            <p>
              Tento vzdělávací program je v současné době ve fázi aktualizace a přípravy pro webové zobrazení. Jeho obsah bude zveřejněn v nejbližší době. Děkujeme za pochopení.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link className="btn-rose" href="/navstevni-rad">Návštěvní řád</Link>
        </div>
      </div>
    </section>
  );
}
