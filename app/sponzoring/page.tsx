import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sponzoring',
  description:
    'Staňte se sponzorem smysluplného projektu se srdcem. Veřejné poděkování, spolupráce na konkrétních projektech, adopce expozice, individuální balíčky pro firmy.',
  alternates: { canonical: '/sponzoring' },
};

export default function SponzoringPage() {
  return (
    <>
      <PageHero
        eyebrow="Pro firmy i jednotlivce"
        title={
          <>
            Smysluplný projekt <em>se srdcem.</em>
          </>
        }
        description="Sponzorství je důležitou součástí naší stability a rozvoje — umožňuje nám plánovat dopředu, vytvářet nové expozice, vzdělávat veřejnost a pečovat o přírodní biotop kolem nás."
        breadcrumbs={[
          { label: 'Domů', href: '/' },
          { label: 'Podpora', href: '/podpora' },
          { label: 'Sponzoring' },
        ]}
      />

      {/* 3 hlavní benefity */}
      <section className="section section--paper">
        <div className="container">
          <div data-reveal style={{ marginBottom: '2.5rem', maxWidth: '60ch' }}>
            <span className="eyebrow">Co získáte</span>
            <h2 className="h-display">
              Tři benefity pro <em>partnery.</em>
            </h2>
          </div>
          <div className="cards">
            <article className="card" data-reveal>
              <div className="card__body">
                <span className="card__tag">01 · Viditelnost</span>
                <h3 className="card__title">Veřejné poděkování</h3>
                <p className="card__text">
                  Viditelné poděkování na webu, přímo v areálu vodní miniZOO i na akcích, které pořádáme. Logo na partnerské stěně.
                </p>
              </div>
            </article>
            <article className="card" data-reveal>
              <div className="card__body">
                <span className="card__tag">02 · Partnerství</span>
                <h3 className="card__title">Spolupráce na projektu</h3>
                <p className="card__text">
                  Možnost partnerství u konkrétních iniciativ — budování expozic, adopce konkrétní části areálu, projektové spolupráce.
                </p>
              </div>
            </article>
            <article className="card" data-reveal>
              <div className="card__body">
                <span className="card__tag">03 · Individuálně</span>
                <h3 className="card__title">Vlastní dohoda</h3>
                <p className="card__text">
                  Otevřeni jsme i jiným formátům — propagaci, společným aktivitám, exkurzím pro vaše zaměstnance nebo klienty.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Balíčky / tiers */}
      <section className="section section--cream">
        <div className="container">
          <div data-reveal style={{ marginBottom: '2.5rem', maxWidth: '60ch' }}>
            <span className="eyebrow">Návrh balíčků</span>
            <h2 className="h-display">
              Tři úrovně. <em>A vlastní</em> řešení.
            </h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Balíčky jsou orientační — finální dohoda je vždy individuální. Rádi se přizpůsobíme tomu, co vám dává smysl.
            </p>
          </div>

          <div className="tiers" data-reveal>
            <article className="tier">
              <h3 className="tier__name">Partner</h3>
              <p className="tier__price">25 000 Kč<small> / rok</small></p>
              <ul>
                <li>Logo a poděkování na webu</li>
                <li>Poděkování na sociálních sítích</li>
                <li>2× exkurze pro zaměstnance v zázemí</li>
                <li>Roční výroční zpráva</li>
              </ul>
            </article>

            <article className="tier tier--featured">
              <h3 className="tier__name">Hlavní partner</h3>
              <p className="tier__price">75 000 Kč<small> / rok</small></p>
              <ul>
                <li>Logo prominentně na webu i v areálu</li>
                <li>PR článek o spolupráci</li>
                <li>Adopce vybrané expozice (akvárium / terárium)</li>
                <li>4× exkurze, prohlídka pro klienty</li>
                <li>Společné CSR akce s vlastním brandingem</li>
              </ul>
            </article>

            <article className="tier">
              <h3 className="tier__name">Generální partner</h3>
              <p className="tier__price">na míru</p>
              <ul>
                <li>Stálá viditelnost ve všech materiálech</li>
                <li>Pojmenování konkrétního projektu nebo areálu</li>
                <li>Dlouhodobá strategická spolupráce</li>
                <li>Pravidelná medializace partnerství</li>
                <li>Plně individuální dohoda</li>
              </ul>
            </article>
          </div>

          <p className="muted" style={{ marginTop: '1.5rem', fontSize: '.9rem' }}>
            Uvedené hodnoty jsou orientační. Konkrétní rozsah benefitů sjednáváme individuálně.
          </p>
        </div>
      </section>

      {/* Quote */}
      <section className="section section--paper">
        <div className="container">
          <div className="pullquote" data-reveal>
            <p className="pullquote__text">
              „Sponzorství je <em>důležitou součástí</em> naší stability a rozvoje — umožňuje nám plánovat dopředu, vytvářet nové expozice a pečovat o biotop kolem nás."
            </p>
            <span className="pullquote__cite">vodní miniZOO Baška z. s.</span>
          </div>
        </div>
      </section>

      {/* Co konkrétně podpoříte */}
      <section className="section section--cream">
        <div className="container">
          <div className="prose" data-reveal>
            <span className="eyebrow">Konkrétní projekty</span>
            <h2>Co aktuálně <em>budujeme</em> a kde pomůžete.</h2>
            <ul>
              <li><strong>Komplexní filtrační soustava</strong> — vícestupňová filtrace pro stabilní kvalitu vody. Termín 21. 01. 2026.</li>
              <li><strong>Naučná stezka „Voda v pohybu"</strong> — vybudování stezky s důrazem na vzdělávací hodnotu a celoroční přístup.</li>
              <li><strong>Dokončení terária pro krokodýla nilského</strong> — kompletní dokončení expozice s důrazem na welfare.</li>
            </ul>
            <p>U každého projektu hledáme partnery, kteří mu dají jméno a získají dlouhodobou viditelnost.</p>
          </div>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Promluvme si o <em>spolupráci.</em>
          </>
        }
        description="Připravíme nabídku přesně podle toho, jak chcete být u našeho projektu vidět."
        actions={[
          { label: 'Kontaktovat', href: siteConfig.contact.emailHref },
          { label: 'Více kontaktů', href: '/kontakt', variant: 'ghost' },
        ]}
      />
    </>
  );
}
