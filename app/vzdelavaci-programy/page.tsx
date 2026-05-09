import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';
import { ArrowRight, BookIcon, CalendarIcon, GroupIcon, HouseIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Vzdělávací programy',
  description:
    'Programy zaměřené na ochranu vody, čištění vody a roli vodních ekosystémů. Voda v pohybu, Rybniční ekosystém, Arapaima gigas — pro děti, dospělé, školy i firemní skupiny.',
  alternates: { canonical: '/vzdelavaci-programy' },
};

const audiences = [
  {
    icon: <HouseIcon />,
    title: 'Mateřské školy',
    text: 'Hravá podoba programu, krátké úseky, setkání se zvířaty na úrovni očí dětí. Konkrétní zážitek, který zůstane.',
  },
  {
    icon: <BookIcon />,
    title: 'Základní školy',
    text: 'Provazujeme s rámcovými vzdělávacími programy — voda v krajině, ekosystém, biologie konkrétních druhů.',
  },
  {
    icon: <BookIcon />,
    title: 'Střední školy',
    text: 'Hlubší výklad, prostor pro odbornou diskuzi. Vhodné pro biologii, ekologii, environmentální výchovu i geografii.',
  },
  {
    icon: <GroupIcon />,
    title: 'Rodiny',
    text: 'Krátká komentovaná prohlídka pro vícegenerační skupiny. Děti i prarodiče si najdou své.',
  },
  {
    icon: <CalendarIcon />,
    title: 'Firmy & skupiny',
    text: 'Teambuilding, oborové návštěvy, exkurze pro klienty. Možnost individuální dohody nad rámec programů.',
  },
  {
    icon: <GroupIcon />,
    title: 'Komunitní organizace',
    text: 'Volnočasové kluby, skauti, dětské domovy, seniorská sdružení — programy přizpůsobíme zájmu skupiny.',
  },
];

export default function VzdelavaciProgramy() {
  return (
    <>
      <PageHero
        eyebrow="Pro školy, skupiny i rodiny"
        title={
          <>
            Programy o <em>vodě,</em>
            <br />
            ekosystémech a živých druzích.
          </>
        }
        description="Kombinujeme komentované prohlídky s představením místních i exotických vodních živočichů. Programy jsou určené dětem i dospělým — školám, organizacím, rodinám i firemním skupinám."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'Vzdělávací programy' }]}
      />

      <section className="section section--tight">
        <div className="container">
          <div className="info-bar" data-reveal>
            <div className="info-bar__cell">
              <span className="info-bar__label">Délka programů</span>
              <span className="info-bar__value">60 minut</span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">Kdy</span>
              <span className="info-bar__value">Po — Pá dopoledne</span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">Kapacita</span>
              <span className="info-bar__value">až 80 účastníků</span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">Cena od</span>
              <span className="info-bar__value">120 Kč / dítě</span>
            </div>
          </div>
        </div>
      </section>

      {/* Programy detail */}
      <section className="section section--paper">
        <div className="container">
          <div data-reveal style={{ marginBottom: '3rem', maxWidth: '60ch' }}>
            <span className="eyebrow">Aktuální nabídka</span>
            <h2 className="h-display">
              Tři programy, jeden <em>pevný</em> základ.
            </h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Každý program kombinuje komentovanou prohlídku s představením místních i exotických vodních živočichů. Obsah lze přizpůsobit věku a zaměření skupiny.
            </p>
          </div>

          <div className="cards">
            <article className="card" data-reveal>
              <div className="card__media">
                <Image src="/assets/images/akvarium.jpeg" alt="Voda v pohybu" width={600} height={450} sizes="(min-width: 960px) 30vw, 100vw" />
              </div>
              <div className="card__body">
                <span className="card__tag">Aktuálně v provozu · 60 min</span>
                <h3 className="card__title">Voda v pohybu</h3>
                <p className="card__text">
                  Vnitřní i venkovní okruh. Komentovaná prohlídka, setkání se zvířaty a praktický výklad o vodě v krajině. Hlavní program s pevným ceníkem.
                </p>
                <Link className="card__link" href="/vyukovy-program-voda-v-pohybu">
                  Ceník a rezervace <ArrowRight />
                </Link>
              </div>
            </article>

            <article className="card" data-reveal>
              <div className="card__media">
                <Image src="/assets/images/stezka.jpeg" alt="Rybniční ekosystém" width={600} height={450} sizes="(min-width: 960px) 30vw, 100vw" />
              </div>
              <div className="card__body">
                <span className="card__tag">V přípravě</span>
                <h3 className="card__title">Rybniční ekosystém</h3>
                <p className="card__text">
                  Hloubkový pohled na fungování rybníka, jeho obyvatele a vazby — od mikrofauny po dravé ryby. Pro starší žáky a zájemce o detail.
                </p>
                <span className="card__link muted">Brzy</span>
              </div>
            </article>

            <article className="card" data-reveal>
              <div className="card__media">
                <Image src="/assets/images/ocelatus-1.jpeg" alt="Arapaima gigas" width={600} height={450} sizes="(min-width: 960px) 30vw, 100vw" />
              </div>
              <div className="card__body">
                <span className="card__tag">V přípravě</span>
                <h3 className="card__title">Arapaima gigas</h3>
                <p className="card__text">
                  Tematický program okolo jedné z největších sladkovodních ryb světa — biologie, lov, ochrana, role v amazonském ekosystému.
                </p>
                <span className="card__link muted">Brzy</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Pro koho */}
      <section className="section section--cream">
        <div className="container">
          <div data-reveal style={{ marginBottom: '2.5rem', maxWidth: '60ch' }}>
            <span className="eyebrow">Pro koho</span>
            <h2 className="h-display">
              Programy přizpůsobujeme <em>vašemu</em> zájmu.
            </h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Cílíme na děti i dospělé. Pravidelně vítáme tyto skupiny — a obsah programu vám rádi přizpůsobíme dopředu.
            </p>
          </div>

          <div className="audience">
            {audiences.map((a) => (
              <div key={a.title} className="audience__item" data-reveal>
                {a.icon}
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Jak rezervovat — process steps */}
      <section className="section section--paper">
        <div className="container">
          <div data-reveal style={{ marginBottom: '2.5rem', maxWidth: '60ch' }}>
            <span className="eyebrow">Jak rezervovat</span>
            <h2 className="h-display">
              Tři kroky <em>k vaší</em> návštěvě.
            </h2>
          </div>

          <div className="steps" data-reveal>
            <div className="steps__item">
              <h3>Vyberte termín</h3>
              <p>Programy probíhají Po–Pá dopoledne v pravidelných slotech. Začínáme v celé hodiny, hosté přicházejí s mírným předstihem.</p>
            </div>
            <div className="steps__item">
              <h3>Napište nebo zavolejte</h3>
              <p>Zašlete e-mail na info@vodniminizoo.cz nebo zavolejte na +420 732 487 862. Uveďte velikost a věk skupiny.</p>
            </div>
            <div className="steps__item">
              <h3>Potvrzení rezervace</h3>
              <p>Obratem potvrdíme dostupnost a zašleme závaznou rezervaci s podklady pro pedagogický doprovod.</p>
            </div>
            <div className="steps__item">
              <h3>Den D — návštěva</h3>
              <p>Přijďte 10 minut před začátkem programu. Průvodce vás přivítá u vstupu do areálu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Co od programu očekávat — pull quote */}
      <section className="section section--cream">
        <div className="container">
          <div className="pullquote" data-reveal>
            <p className="pullquote__text">
              „Programy <em>kombinujeme</em> s krátkou diskuzí a praktickými ukázkami. Děti i dospělí odcházejí s konkrétním zážitkem, který jim zůstane."
            </p>
            <span className="pullquote__cite">Z reflexe pedagožky po návštěvě s 3. třídou ZŠ</span>
          </div>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Plánujete <em>třídní výlet?</em>
          </>
        }
        description="Pondělí — pátek dopoledne. Po předchozí závazné rezervaci."
        actions={[
          { label: 'Rezervovat', href: '/kontakt' },
          { label: 'Ceník', href: '/vyukovy-program-voda-v-pohybu', variant: 'ghost' },
        ]}
      />
    </>
  );
}
