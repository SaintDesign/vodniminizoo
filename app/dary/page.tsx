import Link from 'next/link';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Dary',
  description: 'Podpořte vodní miniZOO Baška finančním darem na účet 131-3450970227/0100 (Komerční Banka). Na vyžádání vystavíme potvrzení pro daňové účely.',
  alternates: { canonical: '/dary' },
};

export default function DaryPage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Dary</h1>
        </header>

        <div className="prose">
          <h2 data-reveal>Každý dar pomáhá</h2>
          <p>
            Každý den se u nás něco děje — krmíme zvířata, čistíme, udržujeme terária i akvária, stavíme a vylepšujeme, abychom pro vás vše dokončili co nejdříve.
          </p>
          <p>
            <strong>Každý dar, malý i velký, nám v tom velmi pomáhá.</strong>
          </p>
          <p>
            Podpořit nás můžete jednorázově nebo pravidelně — finančně, materiálně či vlastními dovednostmi. Každá forma pomoci má pro nás obrovský význam.
          </p>

          <h3>Jak můžete pomoci</h3>
          <ul>
            <li>
              <strong>Finančním darem</strong> — převodem na náš účet <strong>{siteConfig.legal.bankAccount}</strong>, VS: vaše datum narození bez teček
            </li>
            <li>
              <strong>Dobrovolnickou pomocí</strong> — při údržbě areálu nebo organizaci akcí
            </li>
          </ul>
          <p>
            Na vyžádání vám rádi vystavíme potvrzení pro daňové účely.
            <br />
            Pokud budete souhlasit, s radostí uvedeme vaše jméno nebo logo na našem webu jako poděkování.
          </p>

          <p style={{ textAlign: 'center', color: 'var(--color-rose)', fontStyle: 'italic', marginTop: '1.5rem' }}>
            I malá pomoc má velký smysl.
          </p>

          <hr />

          <h2 data-reveal>Finanční dar</h2>
          <p>
            Finanční podpora je jedním z nejúčinnějších způsobů, jak se můžete zapojit do rozvoje vodní miniZOO. Pomáhá nám pokrýt každodenní péči o zvířata, rozšiřovat expozice, vylepšovat zázemí a pořádat vzdělávací programy pro veřejnost i školy.
          </p>
          <p>
            Dary přijímáme na účet vodního miniZOO, takže vždy víte, kam vaše podpora směřuje. Každý příspěvek — ať už jednorázový nebo pravidelný — má konkrétní dopad. Vážíme si vaší důvěry a otevřenosti, s jakou nám pomáháte vytvářet prostor, kde příroda inspiruje.
          </p>

          <p style={{ textAlign: 'center', marginTop: '2rem', padding: '1.5rem', background: 'var(--color-rose-bg)', borderRadius: 4 }}>
            <strong style={{ color: 'var(--color-rose)', fontSize: '1.1rem' }}>
              Číslo účtu: {siteConfig.legal.bankAccount}
            </strong>
            <br />
            {siteConfig.legal.bank}
            <br />
            <span style={{ color: 'var(--color-text)' }}>VS: vaše datum narození bez teček</span>
          </p>

          <div className="btn-row" style={{ marginTop: '2rem' }}>
            <a className="btn-rose" href="mailto:info@vodniminizoo.cz?subject=Potvrzen%C3%AD%20o%20daru">
              Žádost o potvrzení o daru
            </a>
          </div>

          <hr />

          <h2 data-reveal>Dobrovolnická pomoc</h2>
          <p>
            Pomáhat může každý — i bez finančního daru. V naší vodní miniZOO vítáme každého, kdo chce věnovat svůj čas, energii a dobrou vůli pro dobrou věc.
          </p>
          <p>
            Dobrovolníci jsou pro nás nepostradatelní — pomáhají udržovat areál v chodu, starají se o zvířata, vítají návštěvníky a podílejí se na programech pro školy i veřejnost.
          </p>

          <h3>Jak můžete pomoci</h3>
          <ul>
            <li>
              <strong>Péče o zvířata</strong> — pomoc s krmením, údržbou nádrží, přípravou potravy či běžnou péčí pod dohledem chovatele.
            </li>
            <li>
              <strong>Údržba areálu</strong> — práce na zahradě, úprava cest, drobné opravy, sekání trávy, výsadba rostlin nebo pomoc při zvelebování prostředí.
            </li>
            <li>
              <strong>Vzdělávací programy</strong> — asistence při komentovaných prohlídkách, školních exkurzích, workshopech a akcích pro děti.
            </li>
            <li>
              <strong>Akce a provoz</strong> — pomoc při organizaci besed, dnů otevřených dveří, výstav či doprovodných programů.
            </li>
            <li>
              <strong>Odborná či kreativní pomoc</strong> — grafika, fotografie, propagace, tvorba výukových materiálů nebo překlady textů.
            </li>
          </ul>

          <h3>Proč se zapojit</h3>
          <p>
            Dobrovolnictví u nás přináší radost z užitečné práce, nové zkušenosti, kontakt se zvířaty i přírodou a možnost být součástí smysluplného projektu.
          </p>
          <p>
            Záleží nám na tom, aby se každý dobrovolník cítil vítán a věděl, že jeho úsilí má skutečný smysl.
          </p>
          <p>
            Pokud se chcete zapojit, napište nám na <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a> nebo nás kontaktujte telefonicky. Rádi se s vámi domluvíme na možnostech spolupráce podle vašich časových možností a schopností.
          </p>

          <p className="center" style={{ marginTop: '2rem' }}>
            <Link href="/podpora" className="btn-rose" style={{ background: 'transparent', color: 'var(--color-rose)', boxShadow: 'inset 0 0 0 1px var(--color-rose)' }}>
              ZPĚT
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
