import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Soutěž „Zážitek ve vodním mini ZOO Baška"',
  description: 'Soutěž 2025/2026 — hlavní výhra zážitkový pobyt v hodnotě 11 000 Kč. Trvá od 1. 11. 2025 do 9. 12. 2026, losování 10. 12. 2026.',
  alternates: { canonical: '/souteze' },
};

export default function SoutezePage() {
  return (
    <>
      <PageHero
        eyebrow="Soutěž 2025/2026"
        title={<>Zážitek ve vodní <em>miniZOO</em> Baška</>}
        description="Hlavní výhra: zážitkový pobyt v hodnotě 11 000 Kč. Soutěž trvá od 1. 11. 2025 do 9. 12. 2026, losování 10. 12. 2026 živě na sociálních sítích."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'Soutěž' }]}
      />

      <section className="section section--paper">
        <div className="container">
          <div className="prose" data-reveal>
            <h2>Pravidla účasti</h2>
            <ul>
              <li>Účastník musí být starší 18 let.</li>
              <li>Obdrží slevenku na 10% vstupné.</li>
              <li>Navštíví vodní miniZOO Baška včetně restaurace Penzionu BAŠKA VODA CZ a provede útratu v celkové výši alespoň 400 Kč.</li>
              <li>Vyplní soutěžní kartičku s osobními údaji.</li>
              <li>Vhodí kartičku spolu s účtenkou a ústřižkem slevenky do sběrného boxu.</li>
            </ul>
            <p>Účastnit se lze opakovaně s novými účtenkami.</p>

            <h2>Ceny a výhry</h2>
            <ul>
              <li><strong>1 hlavní výhra</strong> — zážitkový pobyt v hodnotě 11 000 Kč</li>
              <li><strong>2 ceny útěchy</strong> — věcné ceny nebo poukázky podle aktuální nabídky</li>
            </ul>
            <p>Voucher je přenosný, není převoditelný na hotovost a je určen pro jeden pobyt.</p>

            <h2>Kontaktování vítězů</h2>
            <p>
              Výherci jsou kontaktováni bezprostředně po losování. Výhru je nutné přijmout do <strong>15. 12. 2026 do 23:55</strong>. Pokud se výherce nepodaří kontaktovat, přechází právo na náhradního kandidáta.
            </p>

            <hr />
            <p className="muted">Soutěž pořádá vodní miniZOO Baška z. s. ve spolupráci s restaurací Penzionu BAŠKA VODA CZ.</p>
          </div>
        </div>
      </section>
    </>
  );
}
