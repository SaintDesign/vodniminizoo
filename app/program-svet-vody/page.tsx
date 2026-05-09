import Image from 'next/image';
import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';
import { DropIcon, WaveIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Svět vody',
  description: 'Vnitřní okruh s krokodýly, vodními želvami a obří Arapaima gigas v největším sladkovodním akváriu regionu (41 000 l). Venkovní okruh s rybníky a místními biotopy.',
  alternates: { canonical: '/program-svet-vody' },
};

export default function SvetVodyPage() {
  return (
    <>
      <PageHero
        eyebrow="Hlavní vzdělávací program"
        title={<>Svět <em>vody</em> — od kapky po obří akvárium</>}
        description="Vnitřní i venkovní okruh, který představí tropické i místní vodní biotopy. Setkáte se s krokodýly, vodními želvami a sladkovodním obrem Arapaima gigas."
        breadcrumbs={[
          { label: 'Domů', href: '/' },
          { label: 'Programy', href: '/vzdelavaci-programy' },
          { label: 'Svět vody' },
        ]}
      />

      <section className="section section--paper">
        <div className="container feature">
          <div className="feature__visual" data-reveal>
            <Image src="/assets/images/akvarium.jpeg" alt="Sladkovodní akvárium s arapaimou" width={700} height={840} sizes="(min-width: 880px) 50vw, 100vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div data-reveal>
            <span className="eyebrow">Vnitřní okruh</span>
            <h2 className="h-display">Tropické <em>vody</em> zblízka.</h2>
            <p className="lead" style={{ marginTop: '1.2rem' }}>
              Hlavní atrakcí je největší sladkovodní akvárium v regionu — 41 000 litrů s obřími rybami Arapaima gigas, jednou z největších sladkovodních ryb na světě. Provedeme vás světem vodních želv, krokodýlů a dalších obyvatel tropických vod.
            </p>
            <ul className="facts" style={{ marginTop: '2rem' }}>
              <li><WaveIcon /><div><strong>41 000 litrů</strong><span>Hlavní sladkovodní akvárium</span></div></li>
              <li><DropIcon /><div><strong>Arapaima gigas</strong><span>Jedna z největších sladkovodních ryb</span></div></li>
              <li><WaveIcon /><div><strong>Vodní želvy</strong><span>Pohyb i krmení v reálném čase</span></div></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container feature feature--rev">
          <div className="feature__visual feature__visual--blob" data-reveal>
            <Image src="/assets/images/stezka.jpeg" alt="Venkovní okruh s rybníkem" width={700} height={700} sizes="(min-width: 880px) 50vw, 100vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div data-reveal>
            <span className="eyebrow">Venkovní okruh</span>
            <h2 className="h-display">Tady doma — <em>rybníky,</em> raci, ptáci.</h2>
            <p className="lead" style={{ marginTop: '1.2rem' }}>
              Procházka okolo přírodních rybníků zaměřená na místní vodní biotopy. Návštěvníci poznají sladkovodní ryby, raky, škeble, obojživelníky i ptáky. Mluvíme o funkci ekosystému, zadržování vody v krajině a roli čisté vody.
            </p>
            <p className="notice" style={{ marginTop: '1.2rem' }}>
              <strong>Sezónní bonus:</strong> děti si mohou zkusit chytit pstruha do ruky nebo nakrmit kapry.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="prose center" data-reveal>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Co se naučíte</span>
            <h2>Voda jako <em>pohyb,</em> domov a zdroj.</h2>
            <p>Programem se dozvíte, jak zvířata žijí, čím se živí a jaké podmínky potřebují. Zaměřujeme se na vzájemné vazby v ekosystému — od mikrofauny rybníka až po obří dravce Amazonie.</p>
          </div>
          <div className="cards" style={{ marginTop: '3rem' }}>
            <article className="card" data-reveal><div className="card__body"><span className="card__tag">Téma 1</span><h3 className="card__title">Tropické sladkovody</h3><p className="card__text">Amazonie, jezera východní Afriky, asijské delty — kde žijí naši největší obyvatelé.</p></div></article>
            <article className="card" data-reveal><div className="card__body"><span className="card__tag">Téma 2</span><h3 className="card__title">Místní biotop</h3><p className="card__text">Co najdeme v rybníce u Beskyd a proč jsou raci ukazatelem zdravé vody.</p></div></article>
            <article className="card" data-reveal><div className="card__body"><span className="card__tag">Téma 3</span><h3 className="card__title">Voda v krajině</h3><p className="card__text">Jak voda cestuje, kde se zadržuje a co jí pomáhá zůstat čistou.</p></div></article>
          </div>
        </div>
      </section>

      <CTABanner
        title={<>Chcete přijít na program <em>Svět vody?</em></>}
        description="Délka 60 minut · kapacita 80 osob · po předchozí závazné rezervaci. Podrobný ceník najdete na samostatné stránce."
        actions={[
          { label: 'Ceník programu', href: '/vyukovy-program-voda-v-pohybu' },
          { label: 'Rezervovat', href: '/kontakt', variant: 'ghost' },
        ]}
      />
    </>
  );
}
