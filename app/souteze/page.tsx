import type { Metadata } from 'next';

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

        <div className="prose">
          <p data-reveal style={{ fontSize: '1.05rem' }}>
            Zúčastněte se naší soutěže! Stačí od 1. 11. 2025 do 9. 12. 2026 navštívit vodní miniZOO Baška a restauraci Penzionu BAŠKA VODA CZ a provést útratu alespoň 400 Kč. Jídlo, pití i suvenýry se počítají — každý nákup vás přibližuje k výhře!
          </p>

          <h2>Pravidla soutěže<br />„Zážitek ve vodním mini ZOO Baška"</h2>

          <h3>Pořadatel soutěže</h3>
          <p>
            Vodní miniZOO Baška z. s., IČ: 23064293, se sídlem Baška 538, 739 01 Baška, ve spolupráci s Penzionem BAŠKA VODA CZ a dalšími partnery.
          </p>

          <h3>1. Doba konání soutěže</h3>
          <p>
            Soutěž probíhá od <strong>1. listopadu 2025 do 9. prosince 2026</strong> v areálu vodní miniZOO Baška a restauraci Penzionu BAŠKA VODA CZ.
          </p>

          <h3>2. Účast v soutěži</h3>
          <p>Do soutěže se může zapojit každá fyzická osoba starší 18 let, která:</p>
          <ul>
            <li>obdrží od spolupracujícího subjektu slevenku na 10% vstupné pro jednu osobu,</li>
            <li>navštíví vodní miniZOO Baška s restaurací Penzionu BAŠKA VODA CZ a provede útratu v celkové výši alespoň 400 Kč (útrata i za skupinu — jídlo, pití, dárkové předměty, pohlednice...),</li>
            <li>vyplní soutěžní kartičku (jméno, příjmení, adresa, telefon, e-mail),</li>
            <li>k soutěžní kartičce připojí účtenku o útratě a ústřižek slevenky,</li>
            <li>vhodí vyplněnou kartičku do uzamčeného sběrného boxu umístěného v prostorách vodní miniZOO Baška.</li>
          </ul>
          <p>
            Každá účtenka může být použita pouze jednou. Do soutěže se lze zapojit opakovaně s novou účtenkou a novou slevenkou.
          </p>

          <h3>3. Losování a výhry</h3>
          <p>
            Losování proběhne dne <strong>10. prosince 2026</strong> formou živého přenosu na sociálních sítích pořadatele prostřednictvím kola štěstí.
          </p>
          <p>Bude vylosováno:</p>
          <ul>
            <li><strong>1 hlavní výherce</strong> — získá zážitkový pobyt v hodnotě <strong>11 000 Kč</strong></li>
            <li><strong>2 výherci útěchy</strong>, kteří obdrží věcné ceny nebo poukázky dle aktuální nabídky pořadatele</li>
          </ul>
          <p>
            Výherci budou zveřejněni na webových stránkách www.vodniminizoo.cz a www.penzionbaskavoda.cz.
          </p>

          <h3>4. Předání výhry</h3>
          <p>
            Výherci budou kontaktováni e-mailem nebo telefonicky neprodleně po losování. Výherní voucher bude zaslán elektronicky (e-mailem) nebo poštou podle přání výherce.
          </p>
          <p>Voucher je:</p>
          <ul>
            <li>přenosný (může sloužit jako dárek),</li>
            <li>nepřevoditelný na hotovost a nelze jej směnit za peníze,</li>
            <li>platný pro jeden pobyt — nelze jej čerpat postupně ve více termínech.</li>
          </ul>
          <p>
            Termín čerpání zážitkového pobytu je nutné zvolit z nabízených termínů nejpozději 10 dní před plánovaným příjezdem. Obsah výherního balíčku bude popsán v samostatném dokumentu „Popis zážitkového pobytu".
          </p>

          <h3>4A. Nepřevzetí výhry a náhradní výherce</h3>
          <p>
            V případě, že se nepodaří výherce hlavní ceny kontaktovat nebo výhru do <strong>15. 12. 2026 do 23:55 hod.</strong> odmítne, ztrácí nárok na výhru bez nároku na jakoukoli kompenzaci.
          </p>
          <p>
            Na jeho místo automaticky nastupuje druhý vylosovaný účastník, který se tímto stává náhradním výhercem hlavní ceny.
          </p>
          <p>
            Pokud by se situace opakovala (tj. ani druhého výherce nebude možné kontaktovat, případně výhru odmítne do 5 dnů od oznámení), přechází nárok na výhru na třetího vylosovaného účastníka.
          </p>
          <p>
            Nebude-li možné kontaktovat ani třetího výherce, výhra propadá pořadateli soutěže, který si vyhrazuje právo rozhodnout o jejím dalším využití.
          </p>

          <h3>5. Ochrana osobních údajů (GDPR)</h3>
          <p>
            Účastí v soutěži dává soutěžící pořadateli souhlas se zpracováním osobních údajů v rozsahu jméno, příjmení, adresa, e-mail, telefonní číslo za účelem realizace soutěže, vyhodnocení a předání výher.
          </p>
          <p>
            Osobní údaje budou zpracovávány pouze po dobu nezbytně nutnou k organizaci soutěže a poté bezpečně zlikvidovány. Správcem údajů je vodní miniZOO Baška z. s.
          </p>

          <h3>6. Závěrečná ustanovení</h3>
          <p>Účastí v soutěži soutěžící potvrzuje, že se seznámil s tímto herním řádem a souhlasí s jeho zněním.</p>
          <p>
            Pořadatel si vyhrazuje právo podmínky soutěže kdykoliv upravit nebo pozastavit, pokud to vyžadují provozní nebo organizační důvody. Na výhry nevzniká právní nárok a nelze je vymáhat soudní cestou.
          </p>
          <p>
            Pořadatel si vyhrazuje právo zveřejnit jméno výherce a jeho obec bydliště v propagačních materiálech soutěže. Zařazením se do soutěže dávají výherci souhlas se zveřejněním jejich jména.
          </p>

          <p style={{ marginTop: '2rem', textAlign: 'center', color: 'var(--color-rose)' }}>
            <strong>Soutěž trvá: 1. 11. 2025 — 9. 12. 2026</strong>
            <br />
            Losování: 10. 12. 2026
            <br />
            Zveřejnění výherců: do 20. 12. 2026
          </p>
        </div>
      </div>
    </section>
  );
}
