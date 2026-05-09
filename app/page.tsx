import Image from 'next/image';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { Hero } from '@/components/Hero';
import { ArrowRight, BookIcon, DropIcon, HouseIcon, WaveIcon } from '@/components/icons';

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* O nás feature */}
      <section className="section section--paper">
        <div className="container feature">
          <div className="feature__visual feature__visual--blob" data-reveal>
            <Image
              src="/assets/images/expozice.jpeg"
              alt="Pohled do expozice s akvárii vodní miniZOO Baška"
              width={700}
              height={700}
              sizes="(min-width: 880px) 50vw, 100vw"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div data-reveal>
            <span className="eyebrow">Kdo jsme</span>
            <h2 className="h-display">
              Učíme rozumět <em>vodě</em>
              <br />
              i tomu, co v ní žije.
            </h2>
            <p className="lead" style={{ marginTop: '1.2rem' }}>
              Začalo to v roce 2017 jediným kajmanem brýlovým. Dnes provozujeme moderní expozice tropických i místních vodních biotopů a vzdělávací programy pro školy, rodiny i firemní skupiny.
            </p>
            <ul className="facts" style={{ marginTop: '2rem' }}>
              <li>
                <DropIcon />
                <div>
                  <strong>Vodní biotopy</strong>
                  <span>Tropické, sladkovodní i venkovní rybníky</span>
                </div>
              </li>
              <li>
                <WaveIcon />
                <div>
                  <strong>Naučná stezka</strong>
                  <span>Celoročně přístupná, venkovní okruh</span>
                </div>
              </li>
              <li>
                <HouseIcon />
                <div>
                  <strong>Pro školy a skupiny</strong>
                  <span>Komentované programy s odborným výkladem</span>
                </div>
              </li>
            </ul>
            <Link className="btn btn--ghost" href="/o-nas" style={{ marginTop: '2rem' }}>
              Naše příběhy a poslání
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="section section--cream">
        <div className="container">
          <div className="row" style={{ justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', gap: '2rem' }}>
            <div data-reveal>
              <span className="eyebrow">Vzdělávací programy</span>
              <h2 className="h-display">
                Tři okruhy. Jeden <em>živý</em> svět.
              </h2>
            </div>
            <p className="muted" style={{ maxWidth: '48ch' }} data-reveal>
              Každý program kombinuje komentovanou prohlídku se setkáním s živými zvířaty a praktickým výkladem o ekosystému.
            </p>
          </div>

          <div className="cards">
            <article className="card" data-reveal>
              <div className="card__media">
                <Image src="/assets/images/akvarium.jpeg" alt="Velké sladkovodní akvárium" width={600} height={450} sizes="(min-width: 960px) 30vw, 100vw" />
              </div>
              <div className="card__body">
                <span className="card__tag">Hlavní program · 60 min</span>
                <h3 className="card__title">Voda v pohybu</h3>
                <p className="card__text">
                  Komentovaná prohlídka vnitřní expozice i venkovního okruhu. Dotkneme se pstruha, podíváme do akvárií a pochopíme, jak voda v krajině pracuje.
                </p>
                <Link className="card__link" href="/vyukovy-program-voda-v-pohybu">
                  Ceník a rezervace <ArrowRight />
                </Link>
              </div>
            </article>

            <article className="card" data-reveal>
              <div className="card__media">
                <Image src="/assets/images/krokodyl.jpeg" alt="Krokodýl nilský" width={600} height={450} sizes="(min-width: 960px) 30vw, 100vw" />
              </div>
              <div className="card__body">
                <span className="card__tag">Vnitřní okruh</span>
                <h3 className="card__title">Svět vody</h3>
                <p className="card__text">
                  Krokodýli, vodní želvy a obří Arapaima gigas v největším sladkovodním akváriu regionu. Tropické biotopy zblízka.
                </p>
                <Link className="card__link" href="/program-svet-vody">
                  Detail programu <ArrowRight />
                </Link>
              </div>
            </article>

            <article className="card" data-reveal>
              <div className="card__media">
                <Image src="/assets/images/stezka.jpeg" alt="Venkovní stezka" width={600} height={450} sizes="(min-width: 960px) 30vw, 100vw" />
              </div>
              <div className="card__body">
                <span className="card__tag">Venkovní okruh · celoročně</span>
                <h3 className="card__title">Rybniční ekosystém</h3>
                <p className="card__text">
                  Procházka okolo přírodních rybníků. Sladkovodní ryby, raci, škeble, obojživelníci i ptáci. Sezónně i krmení kaprů.
                </p>
                <Link className="card__link" href="/vzdelavaci-programy">
                  Více o programu <ArrowRight />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section--tight">
        <div className="container">
          <div className="stats" data-reveal>
            <div className="stats__item">
              <span className="stats__num">41 000</span>
              <span className="stats__label">litrů vody v hlavním akváriu</span>
            </div>
            <div className="stats__item">
              <span className="stats__num">2017</span>
              <span className="stats__label">založení projektu</span>
            </div>
            <div className="stats__item">
              <span className="stats__num">80</span>
              <span className="stats__label">kapacita programu</span>
            </div>
            <div className="stats__item">
              <span className="stats__num">100 %</span>
              <span className="stats__label">neziskově &amp; transparentně</span>
            </div>
          </div>
        </div>
      </section>

      {/* Animals gallery */}
      <section className="section section--paper">
        <div className="container">
          <div className="row" style={{ justifyContent: 'space-between', marginBottom: '2.5rem', gap: '2rem' }}>
            <div data-reveal>
              <span className="eyebrow">Naši obyvatelé</span>
              <h2 className="h-display">
                Sladkovodní obři <em>i ti drobní.</em>
              </h2>
            </div>
            <Link className="btn btn--ghost" href="/fotogalerie" data-reveal>
              Celá fotogalerie
            </Link>
          </div>

          <div className="gallery gallery--zoo" data-reveal>
            {[
              { src: '/assets/images/akvarium.jpeg', alt: 'Hlavní akvárium', caption: 'Akvárium · 41 000 l' },
              { src: '/assets/images/krokodyl.jpeg', alt: 'Krokodýl nilský', caption: 'Krokodýl nilský' },
              { src: '/assets/images/ocelatus-1.jpeg', alt: 'Astronotus ocellatus', caption: 'Astronotus ocellatus' },
              { src: '/assets/images/ocelatus-2.webp', alt: 'Tropická ryba', caption: 'Pestrá tropická ryba' },
              { src: '/assets/images/expozice.jpeg', alt: 'Interiér expozice', caption: 'Expozice' },
              { src: '/assets/images/stezka.jpeg', alt: 'Venkovní stezka', caption: 'Naučná stezka — celoročně' },
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

      {/* Audience */}
      <section className="section section--cream">
        <div className="container">
          <div className="center" style={{ maxWidth: '60ch', marginInline: 'auto' }} data-reveal>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Pro koho jsme</span>
            <h2 className="h-display">
              Vítáme děti, rodiny <em>i odborníky.</em>
            </h2>
            <p className="lead" style={{ margin: '1.2rem auto 3rem' }}>
              Programy přizpůsobujeme věku i tematickému zájmu. Zařízení je přístupné výhradně v rámci vzdělávacích programů s odborným výkladem.
            </p>
          </div>

          <div className="audience">
            <div className="audience__item" data-reveal>
              <HouseIcon />
              <h3>Mateřské školy</h3>
              <p>Hravá podoba, krátké úseky a setkání se zvířaty na úrovni očí dětí.</p>
            </div>
            <div className="audience__item" data-reveal>
              <BookIcon />
              <h3>Základní školy</h3>
              <p>Provazujeme s rámcovými programy — voda v krajině, ekosystém, biologie druhů.</p>
            </div>
            <div className="audience__item" data-reveal>
              <DropIcon />
              <h3>Rodiny</h3>
              <p>Krátká komentovaná prohlídka pro vícegenerační skupiny.</p>
            </div>
            <div className="audience__item" data-reveal>
              <WaveIcon />
              <h3>Skupiny &amp; firmy</h3>
              <p>Teambuilding, oborové návštěvy a možnost individuální dohody nad rámec programů.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section section--paper">
        <div className="container">
          <div data-reveal>
            <span className="eyebrow">Aktuální projekty</span>
            <h2 className="h-display">
              Co se u nás právě <em>tvoří.</em>
            </h2>
          </div>
          <div className="cards" style={{ marginTop: '2.5rem' }}>
            <article className="card" data-reveal>
              <div className="card__body">
                <span className="card__tag">Termín · 21. 01. 2026</span>
                <h3 className="card__title">Komplexní filtrační soustava</h3>
                <p className="card__text">
                  Vícestupňová filtrace pro dlouhodobě stabilní kvalitu vody — současně jako vzdělávací ukázka principů jejího čištění.
                </p>
              </div>
            </article>
            <article className="card" data-reveal>
              <div className="card__body">
                <span className="card__tag">Termín · 19. 05. 2025</span>
                <h3 className="card__title">Naučná stezka „Voda v pohybu"</h3>
                <p className="card__text">
                  Vybudování naučné stezky v areálu — koloběh vody, význam zadržování vody v krajině a její ochrana.
                </p>
              </div>
            </article>
            <article className="card" data-reveal>
              <div className="card__body">
                <span className="card__tag">Termín · 19. 05. 2025</span>
                <h3 className="card__title">Terárium pro krokodýla nilského</h3>
                <p className="card__text">Kompletní dokončení expozice s důrazem na welfare a vzdělávací hodnotu prostoru.</p>
              </div>
            </article>
          </div>
          <div style={{ marginTop: '2rem' }}>
            <Link className="btn btn--ghost" href="/projekty-a-vyzvy">
              Všechny projekty
            </Link>
          </div>
        </div>
      </section>

      <CTABanner
        title={<>Plánujete třídní výlet nebo <em>rodinnou návštěvu?</em></>}
        description="Dopolední rezervace pro skupiny do 80 osob — komentovaná prohlídka 60 minut, dospělí 150 Kč, děti 120 Kč."
        actions={[
          { label: 'Rezervovat program', href: '/kontakt' },
          { label: 'Ceník', href: '/vyukovy-program-voda-v-pohybu', variant: 'ghost' },
        ]}
      />
    </>
  );
}
