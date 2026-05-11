import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Pravidla ochrany soukromí',
  description: 'Zásady zpracování osobních údajů (GDPR) vodní miniZOO Baška z. s.',
  alternates: { canonical: '/pravidla-ochrany-soukromi' },
};

export default function PravidlaPage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Pravidla ochrany soukromí</h1>
        </header>

        <div className="prose">
          <h2>Správce osobních údajů</h2>
          <p>
            <strong>{siteConfig.legal.company}</strong>
            <br />
            Sídlo: {siteConfig.legal.address}
            <br />
            IČ: {siteConfig.legal.ico} · DIČ: {siteConfig.legal.dic}
            <br />
            Kontakt: <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>
          </p>

          <h2>Jaké údaje zpracováváme</h2>
          <ul>
            <li>Kontaktní údaje při rezervaci programu (jméno, telefon, e-mail).</li>
            <li>Fakturační údaje pro účely vystavení daňového dokladu.</li>
            <li>Údaje účastníků soutěží (jméno, příjmení, adresa, e-mail, telefon).</li>
            <li>Anonymizované technické záznamy návštěvy webu.</li>
          </ul>

          <h2>Účel zpracování</h2>
          <ul>
            <li>Vyřízení rezervace, dotazu, daru či sponzoringu.</li>
            <li>Plnění zákonných povinností (účetnictví, archivace).</li>
            <li>Realizace soutěží a kontaktování výherců.</li>
            <li>Provoz a zlepšování webu.</li>
          </ul>

          <h2>Doba uchování</h2>
          <p>Údaje uchováváme po dobu nezbytně nutnou pro daný účel a v souladu se zákonnými lhůtami.</p>

          <h2>Vaše práva</h2>
          <ul>
            <li>Právo na přístup k osobním údajům</li>
            <li>Právo na opravu nepřesných údajů</li>
            <li>Právo na výmaz („právo být zapomenut")</li>
            <li>Právo na omezení zpracování</li>
            <li>Právo na přenositelnost údajů</li>
            <li>Právo vznést námitku proti zpracování</li>
            <li>Právo podat stížnost u Úřadu pro ochranu osobních údajů</li>
          </ul>

          <h2>Cookies</h2>
          <p>
            Web používá pouze technické cookies nezbytné pro správnou funkci. Analytické nebo marketingové cookies aktivujeme pouze s vaším výslovným souhlasem.
          </p>
        </div>
      </div>
    </section>
  );
}
