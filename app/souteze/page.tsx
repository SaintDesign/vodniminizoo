import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Soutěž „Zážitek ve vodním mini ZOO Baška"',
  description:
    'Soutěž 2025/2026 — hlavní výhra zážitkový pobyt v hodnotě 11 000 Kč. Soutěž trvá od 1. 11. 2025 do 9. 12. 2026, losování 10. 12. 2026 živě na sociálních sítích.',
  alternates: { canonical: '/souteze' },
};

export default function SoutezePage() {
  return (
    <>
      <PageHero
        eyebrow="Soutěž 2025 / 2026"
        title={
          <>
            Zážitek ve vodní <em>miniZOO</em>
            <br />
            Baška
          </>
        }
        description="Hlavní výhra: zážitkový pobyt v hodnotě 11 000 Kč. Soutěž trvá od 1. 11. 2025 do 9. 12. 2026, losování 10. 12. 2026 živě na sociálních sítích. Zúčastnit se může každý plnoletý návštěvník."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'Soutěž' }]}
      />

      <section className="section section--tight">
        <div className="container">
          <div className="info-bar" data-reveal>
            <div className="info-bar__cell">
              <span className="info-bar__label">Začátek</span>
              <span className="info-bar__value">1. 11. 2025</span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">Konec</span>
              <span className="info-bar__value">9. 12. 2026</span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">Losování</span>
              <span className="info-bar__value">10. 12. 2026 (živě)</span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">Hlavní výhra</span>
              <span className="info-bar__value">11 000 Kč</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ceny */}
      <section className="section section--paper">
        <div className="container">
          <div data-reveal style={{ marginBottom: '2.5rem', maxWidth: '60ch' }}>
            <span className="eyebrow">Co můžete vyhrát</span>
            <h2 className="h-display">
              Hlavní výhra <em>a dvě</em> ceny útěchy.
            </h2>
          </div>

          <div className="tiers" data-reveal>
            <article className="tier tier--featured">
              <h3 className="tier__name">Hlavní výhra</h3>
              <p className="tier__price">11 000 Kč</p>
              <ul>
                <li>Zážitkový pobyt v hodnotě 11 000 Kč</li>
                <li>Voucher přenosný — můžete ho někomu darovat</li>
                <li>Není převoditelný na hotovost</li>
                <li>Určen pro jeden pobyt</li>
              </ul>
            </article>
            <article className="tier">
              <h3 className="tier__name">Cena útěchy I.</h3>
              <p className="tier__price">věcná cena</p>
              <ul>
                <li>Věcná cena nebo poukázka</li>
                <li>Podle aktuální nabídky</li>
                <li>Hodnota dle losování</li>
              </ul>
            </article>
            <article className="tier">
              <h3 className="tier__name">Cena útěchy II.</h3>
              <p className="tier__price">věcná cena</p>
              <ul>
                <li>Věcná cena nebo poukázka</li>
                <li>Podle aktuální nabídky</li>
                <li>Hodnota dle losování</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Pravidla */}
      <section className="section section--cream">
        <div className="container">
          <div className="prose" data-reveal>
            <span className="eyebrow">Jak se zúčastnit</span>
            <h2>Pravidla <em>účasti.</em></h2>
            <ol>
              <li>Účastník musí být <strong>starší 18 let</strong>.</li>
              <li>Obdrží <strong>slevenku na 10% vstupné</strong>.</li>
              <li>Navštíví vodní miniZOO Baška včetně restaurace Penzionu BAŠKA VODA CZ a provede útratu v celkové výši alespoň <strong>400 Kč</strong>.</li>
              <li>Vyplní soutěžní kartičku s osobními údaji.</li>
              <li>Vhodí kartičku spolu s účtenkou a ústřižkem slevenky do sběrného boxu.</li>
            </ol>
            <p>Účastnit se lze opakovaně s novými účtenkami — čím vícekrát přijdete, tím vyšší šance na výhru.</p>

            <h2>Kontaktování vítězů</h2>
            <p>
              Výherci jsou kontaktováni bezprostředně po losování. Výhru je nutné přijmout do <strong>15. 12. 2026 do 23:55</strong>. Pokud se výherce nepodaří kontaktovat, přechází právo na náhradního kandidáta.
            </p>

            <hr />
            <p className="muted">
              Soutěž pořádá vodní miniZOO Baška z. s. ve spolupráci s restaurací Penzionu BAŠKA VODA CZ. Účastí v soutěži vyjadřujete souhlas s pravidly a se zpracováním osobních údajů pro účely soutěže.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Připraveni se <em>zúčastnit?</em>
          </>
        }
        description="Naplánujte si návštěvu, vezměte slevenku a zapojte se do losování."
        actions={[
          { label: 'Rezervovat program', href: '/kontakt' },
          { label: 'Ceník', href: '/vyukovy-program-voda-v-pohybu', variant: 'ghost' },
        ]}
      />
    </>
  );
}
