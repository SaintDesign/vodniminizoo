import type { Metadata } from 'next';
import { soutezImage } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Soutěž 2026',
  description: 'Soutěž „Zážitek ve vodním mini ZOO Baška" — hlavní výhra zážitkový pobyt v hodnotě 11 000 Kč. Soutěž trvá od 1. 11. 2025 do 9. 12. 2026, losování 10. 12. 2026.',
  alternates: { canonical: '/souteze' },
};

export default function SoutezePage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Soutěž 2026</h1>
        </header>

        {/* 2-sloupcový layout: banner vlevo, pravidla vpravo */}
        <div className="cols-2" data-reveal>
          <div className="cols-2__col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={soutezImage} alt="Soutěž 2026 — Zápoj se do soutěže o 11 000 Kč" style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
            <p style={{ marginTop: '1.5rem' }}>
              Zúčastněte se naší soutěže! Stačí od 1. 11. 2025 do 9. 12. 2026 navštívit vodní miniZOO Baška a restauraci Penzionu BAŠKA VODA CZ a provést útratu alespoň 400 Kč. Jídlo, pití i suvenýry se počítají — každý nákup vás přibližuje k výhře!
            </p>
          </div>

          <div className="cols-2__col">
            <h3>PRAVIDLA SOUTĚŽE</h3>
            <p style={{ fontStyle: 'italic', textAlign: 'center', marginBottom: '1rem' }}>
              „ZÁŽITEK VE VODNÍM MINI ZOO BAŠKA"
            </p>

            <h4>Pořadatel soutěže:</h4>
            <p>
              Vodní miniZOO Baška z. s., IČ: 23064293, se sídlem Baška 538, 739 01 Baška ve spolupráci s Penzionem BAŠKA VODA CZ a dalšími partnery.
            </p>

            <h4>1. Doba konání soutěže</h4>
            <p>
              Soutěž probíhá od <strong>1. listopadu 2025 do 9. prosince 2026</strong> v areálu vodní miniZOO Baška a restauraci Penzionu BAŠKA VODA CZ.
            </p>

            <h4>2. Účast v soutěži</h4>
            <p>Do soutěže se může zapojit každá fyzická osoba starší 18 let, která:</p>
            <ul>
              <li>obdrží od spolupracujícího subjektu slevenku na 10% vstupné pro jednu osobu,</li>
              <li>navštíví vodní miniZOO Baška s restaurací Penzionu BAŠKA VODA CZ a provede útratu v celkové výši alespoň 400 Kč,</li>
              <li>vyplní soutěžní kartičku (jméno, příjmení, adresa, telefon, e-mail),</li>
              <li>k soutěžní kartičce připojí účtenku o útratě a ústřižek slevenky,</li>
              <li>vhodí vyplněnou kartičku do uzamčeného sběrného boxu umístěného v prostorách vodní miniZOO Baška.</li>
            </ul>

            <h4>3. Losování a výhry</h4>
            <p>
              Losování proběhne dne <strong>10. prosince 2026</strong> formou živého přenosu na sociálních sítích pořadatele.
            </p>
            <ul>
              <li><strong>1 hlavní výherce</strong> — zážitkový pobyt v hodnotě <strong>11 000 Kč</strong></li>
              <li><strong>2 výherci útěchy</strong> — věcné ceny nebo poukázky</li>
            </ul>

            <h4>4. Předání výhry</h4>
            <p>
              Výherci budou kontaktováni e-mailem nebo telefonicky neprodleně po losování. Voucher je přenosný, nepřevoditelný na hotovost, platný pro jeden pobyt.
            </p>
            <p>
              Pokud se výherce hlavní ceny nepodaří kontaktovat nebo výhru do <strong>15. 12. 2026 do 23:55 hod.</strong> odmítne, nárok přechází na náhradního výherce.
            </p>

            <h4>5. Ochrana osobních údajů (GDPR)</h4>
            <p>
              Účastí v soutěži dáváte souhlas se zpracováním osobních údajů. Správcem je vodní miniZOO Baška z. s.
            </p>

            <p style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--color-rose)' }}>
              <strong>Soutěž trvá: 1. 11. 2025 — 9. 12. 2026</strong>
              <br />
              Losování: 10. 12. 2026 · Zveřejnění výherců: do 20. 12. 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
