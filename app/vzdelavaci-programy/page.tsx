import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';
import { ArrowRight } from '@/components/icons';

export const metadata: Metadata = {
  title: 'Vzdělávací programy',
  description: 'Programy zaměřené na ochranu vody, čištění a roli pro ekosystémy. Voda v pohybu, Rybniční ekosystém, Arapaima gigas — pro děti, dospělé, školy i skupiny.',
  alternates: { canonical: '/vzdelavaci-programy' },
};

export default function VzdelavaciProgramy() {
  return (
    <>
      <PageHero
        eyebrow="Pro školy, skupiny i rodiny"
        title={<>Programy o <em>vodě,</em> ekosystémech a živých druzích.</>}
        description="Kombinujeme komentované prohlídky s představením místních i exotických vodních živočichů. Programy jsou určené dětem i dospělým, školám, organizacím a skupinám."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'Vzdělávací programy' }]}
      />

      <section className="section section--paper">
        <div className="container">
          <div data-reveal style={{ marginBottom: '3rem' }}>
            <span className="eyebrow">Aktuální nabídka</span>
            <h2 className="h-display">Tři programy, jeden <em>pevný</em> základ.</h2>
          </div>
          <div className="cards">
            <article className="card" data-reveal>
              <div className="card__media">
                <Image src="/assets/images/akvarium.jpeg" alt="Voda v pohybu" width={600} height={450} sizes="(min-width: 960px) 30vw, 100vw" />
              </div>
              <div className="card__body">
                <span className="card__tag">Aktuálně v provozu · 60 min</span>
                <h3 className="card__title">Voda v pohybu</h3>
                <p className="card__text">Vnitřní i venkovní okruh. Komentovaná prohlídka, setkání se zvířaty a praktický výklad o vodě v krajině.</p>
                <Link className="card__link" href="/vyukovy-program-voda-v-pohybu">Ceník a rezervace <ArrowRight /></Link>
              </div>
            </article>
            <article className="card" data-reveal>
              <div className="card__media">
                <Image src="/assets/images/stezka.jpeg" alt="Rybniční ekosystém" width={600} height={450} sizes="(min-width: 960px) 30vw, 100vw" />
              </div>
              <div className="card__body">
                <span className="card__tag">V přípravě</span>
                <h3 className="card__title">Rybniční ekosystém</h3>
                <p className="card__text">Hloubkový pohled na fungování rybníka, jeho obyvatele a vazby — od mikrofauny po dravé ryby.</p>
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
                <p className="card__text">Tematický program okolo jedné z největších sladkovodních ryb světa — biologie, lov, ochrana.</p>
                <span className="card__link muted">Brzy</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="prose" data-reveal>
            <span className="eyebrow">Pro koho</span>
            <h2>Programy přizpůsobujeme <em>vašemu</em> zájmu.</h2>
            <p>Cílíme na děti i dospělé. Pravidelně vítáme:</p>
            <ul>
              <li>Mateřské a základní školy</li>
              <li>Střední školy a gymnázia</li>
              <li>Rodinné výlety</li>
              <li>Firmy a teambuildingové skupiny</li>
              <li>Komunitní a volnočasové organizace</li>
            </ul>
            <p>Obsah programu lze v rámci individuální domluvy přizpůsobit věku a zaměření skupiny — kontaktujte nás dopředu.</p>
          </div>
        </div>
      </section>

      <CTABanner
        title={<>Plánujete <em>třídní výlet?</em></>}
        description="Pondělí — pátek dopoledne. Po předchozí závazné rezervaci."
        actions={[
          { label: 'Rezervovat', href: '/kontakt' },
          { label: 'Ceník', href: '/vyukovy-program-voda-v-pohybu', variant: 'ghost' },
        ]}
      />
    </>
  );
}
