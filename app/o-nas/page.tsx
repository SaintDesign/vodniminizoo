import Image from 'next/image';
import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';
import { BookIcon, CalendarIcon, ClockIcon, DropIcon, GroupIcon, HouseIcon, WaveIcon } from '@/components/icons';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'O nás',
  description:
    'Vodní miniZOO Baška vznikla 14. března 2025 jako neziskové vzdělávací zařízení. Příběh od jediného kajmana z roku 2017 po moderní expozice s 41 000l akváriem, krokodýly nilskými a obří arapaimou.',
  alternates: { canonical: '/o-nas' },
};

const timeline = [
  {
    year: '2017',
    title: 'První obyvatel — kajman brýlový',
    body:
      'Projekt vodní miniZOO Baška se rodí. Přijímáme kajmana brýlového a vytváříme první podmínky pro chov a pozorování vodních plazů.',
  },
  {
    year: '2018 — 2019',
    title: 'Krokodýli nilští a první akvária',
    body:
      'Postupně přibývají další obyvatelé — krokodýli nilští, exotické sladkovodní ryby a první biotopová akvária. Začíná se rodit naučný přístup k chovu.',
  },
  {
    year: '2020',
    title: 'Stavba nového zázemí',
    body:
      'Zahajujeme výstavbu nového zázemí s velkoobjemovými akvárii. Cílíme na profesionální welfare, dlouhodobou stabilitu vody a otevření areálu veřejnosti.',
  },
  {
    year: '2024',
    title: '5,5 milionu Kč investováno',
    body:
      'Investice do areálu, technologií a expozic překračují 5,5 milionu Kč. Areál začíná fungovat jako plnohodnotné vzdělávací zařízení.',
  },
  {
    year: '14. 3. 2025',
    title: 'Vznik vodní miniZOO Baška z. s.',
    body:
      'Formálně zakládáme spolek (z. s.) s předsedkyní Monikou Zvonek Zavadilovou. Smyslem je dát projektu právní rámec a otevřít ho transparentní podpoře.',
  },
];

const values = [
  {
    title: 'Welfare na prvním místě',
    text:
      'Každá expozice je navržena tak, aby naplnila biologické potřeby konkrétního druhu — voda, světlo, prostor, ukrytí, sociální vazby.',
  },
  {
    title: 'Vzdělávání, ne zábava',
    text:
      'Nejsme zoologická zahrada v klasickém smyslu. Areál je přístupný výhradně v rámci komentovaných programů s odborným výkladem.',
  },
  {
    title: 'Lokálnost a krajina',
    text:
      'Beskydy, místní rybniční ekosystémy, koloběh vody — exotická zvířata používáme jako most k tomu, abychom mluvili o vodě tady doma.',
  },
  {
    title: 'Otevřenost a transparence',
    text:
      'Jsme nezisková organizace — financování, projekty i partnery sdílíme veřejně. Každý dárce má právo vědět, kam jeho podpora jde.',
  },
];

export default function ONasPage() {
  return (
    <>
      <PageHero
        eyebrow="Naše organizace"
        title={
          <>
            Otevíráme svět <em>vody</em>
            <br />
            srozumitelně.
          </>
        }
        description="Vodní miniZOO Baška je nezisková organizace zaměřená na vzdělávání o vodě, vodních ekosystémech a ochraně přírody. Vznikla 14. března 2025 a navazuje na osmiletou historii projektu."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'O nás' }]}
      />

      {/* Krátký fakt-strip pod heroem */}
      <section className="section section--tight">
        <div className="container">
          <div className="info-bar" data-reveal>
            <div className="info-bar__cell">
              <span className="info-bar__label">Založeno</span>
              <span className="info-bar__value">2017 (z. s. od 2025)</span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">Sídlo</span>
              <span className="info-bar__value">Baška, okr. Frýdek-Místek</span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">Forma</span>
              <span className="info-bar__value">Spolek (z. s.)</span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">Předsedkyně</span>
              <span className="info-bar__value">Monika Zvonek Zavadilová</span>
            </div>
          </div>
        </div>
      </section>

      {/* Příběh + obrázek */}
      <section className="section section--paper">
        <div className="container feature">
          <div className="feature__visual" data-reveal>
            <Image
              src="/assets/images/expozice.jpeg"
              alt="Pohled do interiéru expozice vodní miniZOO Baška"
              width={700}
              height={840}
              sizes="(min-width: 880px) 50vw, 100vw"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div data-reveal>
            <span className="eyebrow">Příběh</span>
            <h2 className="h-display">
              Od jediného <em>kajmana</em>
              <br />
              k velkému vodnímu světu.
            </h2>
            <p className="lead" style={{ marginTop: '1.2rem' }}>
              Začalo to v roce 2017 přijetím prvního zvířete — kajmana brýlového. Postupně přibývali krokodýli nilští, exotické sladkovodní ryby a další obyvatelé tropických vod. V roce 2020 jsme zahájili stavbu nového zázemí s velkoobjemovými akvárii.
            </p>
            <p style={{ color: 'var(--slate)', marginTop: '1rem' }}>
              Investice do areálu překročily do roku 2024 částku <strong>5,5 milionu korun</strong> — peníze, které šly do biologicky správně navržených expozic, kvalitních filtrací a vzdělávacích nástrojů. V březnu 2025 jsme projekt formálně zaštítili spolkem, abychom mohli pracovat transparentně a přijímat podporu.
            </p>
            <ul className="facts" style={{ marginTop: '2rem' }}>
              <li>
                <ClockIcon />
                <div>
                  <strong>2017</strong>
                  <span>První zvíře v projektu</span>
                </div>
              </li>
              <li>
                <BookIcon />
                <div>
                  <strong>2020</strong>
                  <span>Stavba nového zázemí</span>
                </div>
              </li>
              <li>
                <CalendarIcon />
                <div>
                  <strong>14. 3. 2025</strong>
                  <span>Vznik z. s.</span>
                </div>
              </li>
              <li>
                <DropIcon />
                <div>
                  <strong>5,5 mil. Kč</strong>
                  <span>Investováno do roku 2024</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Časová osa */}
      <section className="section section--cream">
        <div className="container">
          <div data-reveal style={{ marginBottom: '3rem', maxWidth: '60ch' }}>
            <span className="eyebrow">Časová osa projektu</span>
            <h2 className="h-display">
              Osm let <em>postupné</em> stavby.
            </h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Každý velký projekt začíná malým krokem. U nás to byl jeden plaz a sen o místě, kde se voda nejen ukáže, ale taky vysvětlí.
            </p>
          </div>

          <div className="timeline" data-reveal>
            {timeline.map((t) => (
              <div key={t.year} className="timeline__item">
                <span className="timeline__year">{t.year}</span>
                <h3 className="timeline__title">{t.title}</h3>
                <p className="timeline__body">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote / mise */}
      <section className="section section--paper">
        <div className="container">
          <div className="pullquote" data-reveal>
            <p className="pullquote__text">
              „Otevíráme důležitá ekologická témata <em>srozumitelným</em> a poutavým způsobem. Expozice nejsou cíl — jsou nástrojem, jak děti i dospělí pochopí, proč na vodě záleží."
            </p>
            <span className="pullquote__cite">{siteConfig.legal.chair}, předsedkyně z. s.</span>
          </div>
        </div>
      </section>

      {/* Hodnoty */}
      <section className="section section--cream">
        <div className="container">
          <div data-reveal style={{ marginBottom: '2.5rem', maxWidth: '60ch' }}>
            <span className="eyebrow">Naše hodnoty</span>
            <h2 className="h-display">
              Čtyři principy, na kterých <em>stojíme.</em>
            </h2>
          </div>
          <div className="values" data-reveal>
            {values.map((v, i) => (
              <article key={v.title} className="values__item">
                <span className="values__num">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Hlavní cíle a co u nás najdete */}
      <section className="section section--paper">
        <div className="container">
          <div className="prose" data-reveal>
            <span className="eyebrow">Mise &amp; cíle</span>
            <h2>
              Učíme rozumět vodě <em>jako jevu</em> a jako domovu.
            </h2>
            <p>
              Pracujeme s vzdělávacími programy zaměřenými na vodu a vodní ekosystémy. Naše expozice slouží jako živé učebnice — návštěvníci si témata neodvozují z teorie, ale doslova „si je sahají". Programy přizpůsobujeme věku a tematickému zájmu skupiny.
            </p>

            <h3>Naše hlavní cíle</h3>
            <ul>
              <li><strong>Rozvíjet kvalitní vzdělávání</strong> o vodě a vodních ekosystémech v regionu Beskyd a Moravskoslezského kraje.</li>
              <li><strong>Vytvářet metodicky propracované programy</strong> ve spolupráci s pedagogy MŠ, ZŠ a SŠ.</li>
              <li><strong>Budovat odborný realizační tým</strong> z chovatelů, biologů a lektorů.</li>
              <li><strong>Využívat expozice jako vzdělávací nástroje</strong> — ne jako samoúčelnou atrakci.</li>
            </ul>

            <h3>Co u nás najdete</h3>
            <ul>
              <li><strong>Velkoobjemová akvária</strong> s exotickými sladkovodními rybami — největší dosahuje objemu 41 000 litrů.</li>
              <li><strong>Venkovní biotopy</strong> a přírodní rybníky s místní faunou a florou.</li>
              <li><strong>Celoročně přístupnou naučnou stezku</strong> okolo areálu, věnovanou vodě v krajině.</li>
              <li><strong>Komentované prohlídky s odborným výkladem</strong> a interaktivní zážitky pro děti.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Mini galerie */}
      <section className="section section--cream">
        <div className="container">
          <div className="row" style={{ justifyContent: 'space-between', marginBottom: '2rem', gap: '2rem', alignItems: 'flex-end' }}>
            <div data-reveal>
              <span className="eyebrow">Z areálu</span>
              <h2 className="h-display">
                Pár pohledů na to, <em>kde se to děje.</em>
              </h2>
            </div>
          </div>
          <div className="gallery gallery--zoo" data-reveal>
            {[
              { src: '/assets/images/akvarium.jpeg', alt: 'Hlavní sladkovodní akvárium', caption: 'Hlavní akvárium 41 000 l' },
              { src: '/assets/images/krokodyl.jpeg', alt: 'Krokodýl nilský', caption: 'Krokodýl nilský' },
              { src: '/assets/images/expozice.jpeg', alt: 'Detail expozice', caption: 'Vnitřní expozice' },
              { src: '/assets/images/stezka.jpeg', alt: 'Naučná stezka', caption: 'Naučná stezka' },
              { src: '/assets/images/deti.jpeg', alt: 'Děti na programu', caption: 'Programy pro děti' },
              { src: '/assets/images/skola.jpeg', alt: 'Návštěva školy', caption: 'Školní výlety' },
            ].map((g) => (
              <figure key={g.src}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src={g.src} alt={g.alt} fill sizes="(min-width: 720px) 50vw, 100vw" style={{ objectFit: 'cover' }} />
                </div>
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Tým & právní */}
      <section className="section section--paper">
        <div className="container" style={{ display: 'grid', gap: '3rem', gridTemplateColumns: '1fr', alignItems: 'start' }}>
          <div className="contact-grid">
            <div data-reveal>
              <span className="eyebrow">Pro koho jsme</span>
              <h2 className="h-display" style={{ marginTop: '.5rem' }}>
                Vítáme každého, <em>kdo chce vědět víc.</em>
              </h2>
              <p className="lead" style={{ marginTop: '1rem' }}>
                Programy fungují pro mateřské školy, základní i střední, rodinné výlety, firemní skupiny a komunitní organizace. Obsah přizpůsobíme.
              </p>
              <ul className="facts" style={{ marginTop: '1.5rem' }}>
                <li>
                  <HouseIcon />
                  <div>
                    <strong>MŠ &amp; ZŠ</strong>
                    <span>Vzdělávací programy v souladu s RVP</span>
                  </div>
                </li>
                <li>
                  <GroupIcon />
                  <div>
                    <strong>Rodiny &amp; skupiny</strong>
                    <span>Vícegenerační komentovaná prohlídka</span>
                  </div>
                </li>
                <li>
                  <WaveIcon />
                  <div>
                    <strong>Firmy &amp; teambuilding</strong>
                    <span>Individuální dohody nad rámec programů</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="contact-card" data-reveal>
              <span className="eyebrow" style={{ marginBottom: '1rem' }}>Právní údaje</span>
              <dl>
                <div>
                  <dt>Organizace</dt>
                  <dd style={{ fontSize: '1.05rem' }}>{siteConfig.legal.company}</dd>
                </div>
                <div>
                  <dt>Sídlo</dt>
                  <dd style={{ fontSize: '1rem', color: 'var(--slate)' }}>{siteConfig.contact.address}</dd>
                </div>
                <div>
                  <dt>IČ</dt>
                  <dd style={{ fontSize: '1rem' }}>{siteConfig.legal.ico}</dd>
                </div>
                <div>
                  <dt>DIČ</dt>
                  <dd style={{ fontSize: '1rem' }}>{siteConfig.legal.dic}</dd>
                </div>
                <div>
                  <dt>Předsedkyně</dt>
                  <dd style={{ fontSize: '1rem' }}>{siteConfig.legal.chair}</dd>
                </div>
                <div>
                  <dt>Datum vzniku</dt>
                  <dd style={{ fontSize: '1rem' }}>{siteConfig.legal.establishedAt}</dd>
                </div>
              </dl>
              <p className="muted" style={{ fontSize: '.85rem', marginTop: '1.2rem' }}>
                Spolek registrovaný v rejstříku vedeném Krajským soudem v Ostravě.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Chcete nás podpořit nebo se <em>zapojit?</em>
          </>
        }
        description="Naše práce stojí na lidech — dárcích, sponzorech i dobrovolnících. Každá pomoc se počítá."
        actions={[
          { label: 'Možnosti podpory', href: '/podpora' },
          { label: 'Spojit se', href: '/kontakt', variant: 'ghost' },
        ]}
      />
    </>
  );
}
