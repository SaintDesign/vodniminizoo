import Link from 'next/link';
import type { Metadata } from 'next';
import { daryImages } from '@/lib/images';
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

        <div className="prose" data-reveal style={{ marginBottom: '3rem' }}>
          <h2 style={{ textAlign: 'left' }}>Každý dar pomáhá</h2>
          <p>
            Každý den se u nás něco děje — krmíme zvířata, čistíme, udržujeme terária i akvária, stavíme a vylepšujeme, abychom pro vás vše dokončili co nejdříve.
            <br />
            Každý dar, malý i velký, nám v tom velmi pomáhá.
          </p>
          <p>
            Podpořit nás můžete jednorázově nebo pravidelně — finančně, materiálně či vlastními dovednostmi. Každá forma pomoci má pro nás obrovský význam.
          </p>

          <h4>Jak můžete pomoci:</h4>
          <ul>
            <li><strong>Finančním darem</strong> — převodem na náš účet <strong>{siteConfig.legal.bankAccount}</strong> VS: vaše datum narození bez teček</li>
            <li><strong>Dobrovolnickou pomocí</strong> — při údržbě areálu nebo organizaci akcí</li>
          </ul>
          <p>
            Na vyžádání vám rádi vystavíme potvrzení pro daňové účely.
            <br />
            Pokud budete souhlasit, s radostí uvedeme vaše jméno nebo logo na našem webu jako poděkování.
          </p>
          <p style={{ textAlign: 'center', color: 'var(--color-rose)', fontStyle: 'italic', marginTop: '1.5rem' }}>
            I malá pomoc má velký smysl.
          </p>
        </div>

        {/* 2-sloupcový layout: Finanční dar | Dobrovolnická pomoc */}
        <div className="cols-2" data-reveal>
          <div className="cols-2__col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={daryImages.peni} alt="Finanční dar" />
            <h3>Finanční dar</h3>
            <p>
              Finanční podpora je jedním z nejúčinnějších způsobů, jak se můžete zapojit do rozvoje vodní miniZOO. Pomáhá nám pokrýt každodenní péči o zvířata, rozšiřovat expozice, vylepšovat zázemí a pořádat vzdělávací programy pro veřejnost i školy.
            </p>
            <p>
              Dary přijímáme na <strong>účet vodního miniZOO</strong>, takže vždy víte, kam vaše podpora směřuje. Každý příspěvek — ať už jednorázový nebo pravidelný — má konkrétní dopad. Vážíme si vaší důvěry a otevřenosti, s jakou nám pomáháte vytvářet prostor, kde příroda inspiruje.
            </p>
            <p>
              Údaje k převodu najdete níže. Pokud si přejete vystavit potvrzení o daru pro daňové účely, stačí vyplnit náš formulář.
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              <strong>Číslo účtu:</strong> {siteConfig.legal.bankAccount} {siteConfig.legal.bank}
              <br />
              <strong>VS:</strong> vaše datum narození bez teček
            </p>
            <p style={{ marginTop: '1.5rem' }}>
              <a className="btn-rose" href="mailto:info@vodniminizoo.cz?subject=Potvrzen%C3%AD%20o%20daru" style={{ display: 'inline-block' }}>
                Žádost o potvrzení o daru
              </a>
            </p>
          </div>

          <div className="cols-2__col">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={daryImages.sponzor} alt="Dobrovolnická pomoc" />
            <h3>Dobrovolnická pomoc</h3>
            <p>
              Pomáhat může každý — i bez finančního daru. V naší Vodní miniZOO vítáme každého, kdo chce věnovat svůj čas, energii a dobrou vůli pro dobrou věc.
            </p>
            <p>
              Dobrovolníci jsou pro nás nepostradatelní — pomáhají udržovat areál v chodu, starají se o zvířata, vítají návštěvníky a podílejí se na programech pro školy i veřejnost.
            </p>
            <h4>Jak můžete pomoci</h4>
            <ul>
              <li><strong>Péče o zvířata</strong> — pomoc s krmením, údržbou nádrží, přípravou potravy či běžnou péčí pod dohledem chovatele.</li>
              <li><strong>Údržba areálu</strong> — práce na zahradě, úprava cest, drobné opravy.</li>
              <li><strong>Vzdělávací programy</strong> — asistence při komentovaných prohlídkách.</li>
              <li><strong>Akce a provoz</strong> — pomoc při organizaci besed, dnů otevřených dveří.</li>
              <li><strong>Odborná či kreativní pomoc</strong> — grafika, fotografie, propagace, překlady.</li>
            </ul>
            <h4>Proč se zapojit</h4>
            <p>
              Dobrovolnictví u nás přináší radost z užitečné práce, nové zkušenosti, kontakt se zvířaty i přírodou a možnost být součástí smysluplného projektu.
            </p>
            <p>
              Pokud se chcete zapojit, napište nám na <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a> nebo nás kontaktujte telefonicky. Rádi se s vámi domluvíme na možnostech spolupráce podle vašich časových možností a schopností.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link className="btn-rose" href="/podpora" style={{ background: 'transparent', color: 'var(--color-rose)', boxShadow: 'inset 0 0 0 1px var(--color-rose)' }}>
            ZPĚT
          </Link>
        </div>
      </div>
    </section>
  );
}
