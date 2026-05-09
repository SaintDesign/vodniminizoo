import Image from 'next/image';
import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';
import { ClockIcon, DropIcon, GroupIcon, WaveIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Svět vody',
  description:
    'Hlavní program vodní miniZOO Baška. Vnitřní okruh s krokodýly, vodními želvami a obří Arapaima gigas v největším sladkovodním akváriu regionu (41 000 l). Venkovní okruh s rybníky, raky, obojživelníky a místními biotopy.',
  alternates: { canonical: '/program-svet-vody' },
};

const animals = [
  {
    src: '/assets/images/krokodyl.jpeg',
    name: 'Krokodýl nilský',
    sci: 'Crocodylus niloticus',
    tag: 'Tropický plaz',
    meta: 'Africký dravec, který v dospělosti dosahuje až 5 metrů. U nás žije v ohřívaném teráriu s vodní plochou.',
  },
  {
    src: '/assets/images/akvarium.jpeg',
    name: 'Arapaima gigas',
    sci: 'Arapaima gigas',
    tag: '41 000 l akvárium',
    meta: 'Jedna z největších sladkovodních ryb světa. V Amazonii dorůstá až 4,5 m. U nás je hvězdou hlavního akvária.',
  },
  {
    src: '/assets/images/ocelatus-1.jpeg',
    name: 'Astronotus ocellatus',
    sci: 'Astronotus ocellatus',
    tag: 'Cichlida',
    meta: 'Inteligentní jihoamerická ryba známá svým výrazným vzorem a osobností — pozná svého chovatele.',
  },
  {
    src: '/assets/images/ocelatus-2.webp',
    name: 'Tropické sladkovody',
    sci: 'Sortiment druhů',
    tag: 'Mix biotopu',
    meta: 'Pestrá kolekce ryb z asijských, afrických a jihoamerických vod. Společně demonstrují rozmanitost sladké vody.',
  },
];

const learnings = [
  {
    tag: 'Téma 1',
    title: 'Tropické sladkovody',
    text: 'Amazonie, jezera východní Afriky, asijské delty. Kde žijí naši největší obyvatelé a proč právě tam.',
  },
  {
    tag: 'Téma 2',
    title: 'Místní biotop',
    text: 'Co najdeme v rybníce u Beskyd a proč jsou raci nejlepším ukazatelem zdravé vody. Klíčové druhy a vazby.',
  },
  {
    tag: 'Téma 3',
    title: 'Voda v krajině',
    text: 'Jak voda cestuje, kde se zadržuje, co jí pomáhá zůstat čistou. Hospodaření s vodou v 21. století.',
  },
  {
    tag: 'Téma 4',
    title: 'Welfare a chov',
    text: 'Jak se starat o tropická zvířata zodpovědně — filtrace, teplota, krmení, prostor a jejich biologie.',
  },
];

export default function SvetVodyPage() {
  return (
    <>
      <PageHero
        eyebrow="Hlavní vzdělávací program"
        title={
          <>
            Svět <em>vody</em> — od kapky
            <br />
            po obří akvárium.
          </>
        }
        description="Vnitřní i venkovní okruh, který představí tropické i místní vodní biotopy. Setkáte se s krokodýly, vodními želvami a sladkovodním obrem Arapaima gigas. Plus prohlídka místních rybníků s raky, obojživelníky a ptáky."
        breadcrumbs={[
          { label: 'Domů', href: '/' },
          { label: 'Programy', href: '/vzdelavaci-programy' },
          { label: 'Svět vody' },
        ]}
      />

      <section className="section section--tight">
        <div className="container">
          <div className="info-bar" data-reveal>
            <div className="info-bar__cell">
              <span className="info-bar__label">Délka</span>
              <span className="info-bar__value">60 minut</span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">Kapacita</span>
              <span className="info-bar__value">až 80 osob</span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">Termín</span>
              <span className="info-bar__value">Po — Pá dopoledne</span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">Hlavní akvárium</span>
              <span className="info-bar__value">41 000 litrů</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vnitřní okruh */}
      <section className="section section--paper">
        <div className="container feature">
          <div className="feature__visual" data-reveal>
            <Image
              src="/assets/images/akvarium.jpeg"
              alt="Sladkovodní akvárium s arapaimou"
              width={700}
              height={840}
              sizes="(min-width: 880px) 50vw, 100vw"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div data-reveal>
            <span className="eyebrow">Vnitřní okruh</span>
            <h2 className="h-display">
              Tropické <em>vody</em> zblízka.
            </h2>
            <p className="lead" style={{ marginTop: '1.2rem' }}>
              Hlavní atrakcí je největší sladkovodní akvárium v regionu — 41 000 litrů s obřími rybami Arapaima gigas, jednou z největších sladkovodních ryb na světě. Provedeme vás světem vodních želv, krokodýlů a dalších obyvatel tropických vod.
            </p>
            <p style={{ color: 'var(--slate)', marginTop: '1rem' }}>
              Programem se dozvíte, jak zvířata žijí, čím se živí a jaké podmínky potřebují. Mluvíme o welfare chovu, biologii konkrétních druhů a o tom, proč na sladké vodě tak záleží — i té tady doma.
            </p>
            <ul className="facts" style={{ marginTop: '2rem' }}>
              <li>
                <WaveIcon />
                <div>
                  <strong>41 000 litrů</strong>
                  <span>Hlavní sladkovodní akvárium</span>
                </div>
              </li>
              <li>
                <DropIcon />
                <div>
                  <strong>Arapaima gigas</strong>
                  <span>Sladkovodní obr Amazonie</span>
                </div>
              </li>
              <li>
                <GroupIcon />
                <div>
                  <strong>Vodní želvy</strong>
                  <span>Pozorování pohybu i krmení</span>
                </div>
              </li>
              <li>
                <ClockIcon />
                <div>
                  <strong>Krokodýli nilští</strong>
                  <span>V dohřívaném teráriu</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Animal grid */}
      <section className="section section--cream">
        <div className="container">
          <div data-reveal style={{ marginBottom: '2.5rem', maxWidth: '60ch' }}>
            <span className="eyebrow">Naši obyvatelé</span>
            <h2 className="h-display">
              Hvězdy programu <em>Svět vody.</em>
            </h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Setkáte se s druhy, které byste jinak museli hledat na třech kontinentech. U nás je vidíte zblízka, s odborným výkladem.
            </p>
          </div>

          <div className="animal-grid" data-reveal>
            {animals.map((a) => (
              <article key={a.name} className="animal-card">
                <Image src={a.src} alt={a.name} fill sizes="(min-width: 880px) 25vw, 50vw" style={{ objectFit: 'cover' }} />
                <div className="animal-card__body">
                  <span className="animal-card__tag">{a.tag}</span>
                  <span className="animal-card__sci">{a.sci}</span>
                  <h3 className="animal-card__name">{a.name}</h3>
                  <p className="animal-card__meta">{a.meta}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Venkovní okruh */}
      <section className="section section--paper">
        <div className="container feature feature--rev">
          <div className="feature__visual feature__visual--blob" data-reveal>
            <Image
              src="/assets/images/stezka.jpeg"
              alt="Venkovní okruh s rybníkem"
              width={700}
              height={700}
              sizes="(min-width: 880px) 50vw, 100vw"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div data-reveal>
            <span className="eyebrow">Venkovní okruh</span>
            <h2 className="h-display">
              Tady doma — <em>rybníky,</em>
              <br />
              raci a ptáci.
            </h2>
            <p className="lead" style={{ marginTop: '1.2rem' }}>
              Procházka okolo přírodních rybníků zaměřená na místní vodní biotopy. Návštěvníci poznají sladkovodní ryby, raky, škeble, obojživelníky i ptáky. Mluvíme o funkci ekosystému, zadržování vody v krajině a roli čisté vody.
            </p>
            <p style={{ color: 'var(--slate)', marginTop: '1rem' }}>
              Tato část programu vede skrz celoročně přístupnou naučnou stezku — i v zimě tu na vás čeká pohled na živý rybník v jiné podobě.
            </p>
            <p className="notice" style={{ marginTop: '1.2rem' }}>
              <strong>Sezónní bonus:</strong> děti si mohou zkusit chytit pstruha do ruky nebo nakrmit kapry. Záleží na ročním období a stavu hladiny.
            </p>
          </div>
        </div>
      </section>

      {/* Co se naučíte — 4 témata */}
      <section className="section section--cream">
        <div className="container">
          <div className="prose center" data-reveal style={{ marginBottom: '3rem' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Co se naučíte</span>
            <h2>
              Voda jako <em>pohyb,</em> domov a zdroj.
            </h2>
            <p>
              Programem se dozvíte, jak zvířata žijí, čím se živí a jaké podmínky potřebují. Zaměřujeme se na vzájemné vazby v ekosystému — od mikrofauny rybníka až po obří dravce Amazonie.
            </p>
          </div>

          <div className="cards">
            {learnings.map((l) => (
              <article key={l.title} className="card" data-reveal>
                <div className="card__body">
                  <span className="card__tag">{l.tag}</span>
                  <h3 className="card__title">{l.title}</h3>
                  <p className="card__text">{l.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--paper">
        <div className="container">
          <div data-reveal style={{ marginBottom: '2.5rem', textAlign: 'center', maxWidth: '60ch', marginInline: 'auto' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Časté dotazy</span>
            <h2 className="h-display">
              Než přijdete <em>poprvé.</em>
            </h2>
          </div>

          <div className="faq" data-reveal>
            <details>
              <summary>Pro jakou věkovou skupinu je program vhodný?</summary>
              <div className="faq__body">
                <p>Program přizpůsobujeme věku skupiny. Pravidelně vítáme děti od mateřských škol po střední školy, rodiny s dětmi i dospělé skupiny. Při rezervaci napište, jakou skupinu přivedete — přizpůsobíme jazyk i hloubku výkladu.</p>
              </div>
            </details>
            <details>
              <summary>Jak dlouho program trvá a co všechno zahrnuje?</summary>
              <div className="faq__body">
                <p>Program trvá <strong>60 minut</strong> a zahrnuje vnitřní okruh (akvária, terária s krokodýly, vodní želvy) i venkovní okruh (přírodní rybníky, naučná stezka). Tempo přizpůsobíme zájmu skupiny.</p>
              </div>
            </details>
            <details>
              <summary>Funguje program i v zimě nebo za deště?</summary>
              <div className="faq__body">
                <p>Ano. Vnitřní okruh je v krytém zázemí, naučná stezka je celoročně přístupná. Při dešti zkrátíme venkovní část a věnujeme více času expozicím uvnitř.</p>
              </div>
            </details>
            <details>
              <summary>Mohou si děti zvířata sáhnout?</summary>
              <div className="faq__body">
                <p>Manipulace se zvířaty není povolena z důvodu welfare. Sezónně ale nabízíme zážitkové aktivity — chycení pstruha do ruky nebo krmení kaprů, vždy pod dohledem průvodce.</p>
              </div>
            </details>
            <details>
              <summary>Kolik program stojí?</summary>
              <div className="faq__body">
                <p>Děti 120 Kč, dospělí 150 Kč, senioři 65+ a držitelé ZTP/ZTP+P 120 Kč, pedagogický doprovod (1 na 10 dětí) zdarma. Detailní ceník najdete na <a href="/vyukovy-program-voda-v-pohybu">stránce Voda v pohybu</a>.</p>
              </div>
            </details>
            <details>
              <summary>Jak se k vám dostanu?</summary>
              <div className="faq__body">
                <p>Adresa Baška 538, 739 01 Baška (okres Frýdek-Místek). Areál je přibližně 30 minut chůze od železničního nádraží Pržno, autem dostupné z dálnice D48. Parkování v obci.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Chcete přijít na program <em>Svět vody?</em>
          </>
        }
        description="Délka 60 minut · kapacita 80 osob · po předchozí závazné rezervaci. Podrobný ceník najdete na samostatné stránce."
        actions={[
          { label: 'Ceník programu', href: '/vyukovy-program-voda-v-pohybu' },
          { label: 'Rezervovat', href: '/kontakt', variant: 'ghost' },
        ]}
      />
    </>
  );
}
