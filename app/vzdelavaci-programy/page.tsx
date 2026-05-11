import Link from 'next/link';
import type { Metadata } from 'next';

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

        <div className="btn-row" data-reveal style={{ marginBottom: '2rem' }}>
          <Link className="btn-rose" href="/navstevni-rad">Informace k návštěvě</Link>
        </div>

        <div className="prose">
          <div className="btn-row" data-reveal>
            <Link className="btn-rose" href="#metodika">Metodika výukového programu</Link>
          </div>

          <p id="metodika" style={{ marginTop: '2rem' }}>
            Voda je základem života — pro přírodu, ekosystémy i člověka. V připravovaných vzdělávacích programech se zaměřujeme na ochranu vody v přírodě, význam čištění vody, její roli pro rostliny, živočichy i krajinu a na téma zadržování vody v krajině.
          </p>
          <p>
            Součástí programů jsou komentované prohlídky, které propojují svět exotických vodních zvířat, plazů, želv a ryb s místním biotopem čtyř rybníků. Návštěvníci se seznámí nejen s rybami našich vod — zejména pstruhem potočním, duhovým a sivenem americkým, ale také s kaprem, amurem, karasem, jeseterem či dalšími druhy ryb. Pozornost věnujeme i dalším obyvatelům vodního prostředí, jako jsou škeble, raci, obojživelníci a vzácní ptáci, které voda přirozeně přitahuje. Zároveň představujeme exotická vodní zvířata, mezi nimi krokodýly, vodní želvy a velké sladkovodní ryby. Pýchou našeho zařízení je chov královny Amazonky — arapaimy gigas, jedné z největších sladkovodních ryb světa, která je silným symbolem významu ochrany vodních ekosystémů napříč kontinenty.
          </p>
          <p>
            Programy jsou určeny dětem i dospělým, široké veřejnosti o víkendech, stejně jako školám, organizacím, skupinám a osobám s různými typy zdravotního znevýhodnění. Vše probíhá po individuální domluvě, s možností přizpůsobení obsahu, rozsahu i formy programu konkrétním potřebám účastníků.
          </p>
          <p style={{ textAlign: 'center', fontStyle: 'italic', color: 'var(--color-rose)', marginTop: '2rem' }}>
            Poznejte vodu v souvislostech — s respektem, pochopením a zážitkem.
          </p>

          <h2 data-reveal>Voda v pohybu</h2>
          <p style={{ textAlign: 'center' }}>
            <Link className="btn-rose" href="/program-svet-vody">Detail programu</Link>
            {' '}
            <Link className="btn-rose" href="/vyukovy-program-voda-v-pohybu" style={{ background: 'transparent', color: 'var(--color-rose)', boxShadow: 'inset 0 0 0 1px var(--color-rose)' }}>Ceník &amp; rezervace</Link>
          </p>

          <h2 data-reveal>Rybniční ekosystém</h2>
          <p>
            Tento vzdělávací program je v současné době ve fázi aktualizace a přípravy pro webové zobrazení. Jeho obsah bude zveřejněn v nejbližší době. Děkujeme za pochopení.
          </p>

          <h2 data-reveal>Arapaima gigas</h2>
          <p>
            Tento vzdělávací program je v současné době ve fázi aktualizace a přípravy pro webové zobrazení. Jeho obsah bude zveřejněn v nejbližší době. Děkujeme za pochopení.
          </p>

          <hr />
          <p className="center">
            <Link href="/navstevni-rad">Návštěvní řád</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
