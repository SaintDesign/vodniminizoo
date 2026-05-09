import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Pravidla ochrany soukromí',
  description: 'Zásady zpracování osobních údajů (GDPR) vodní miniZOO Baška z. s.',
  alternates: { canonical: '/pravidla-ochrany-soukromi' },
};

export default function GdprPage() {
  return (
    <>
      <PageHero
        eyebrow="GDPR"
        title={<>Pravidla <em>ochrany</em> soukromí</>}
        description="Záleží nám na vašem soukromí. Tato stránka popisuje, jaké údaje zpracováváme a proč."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'Pravidla ochrany soukromí' }]}
      />

      <section className="section section--paper">
        <div className="container">
          <div className="prose" data-reveal>
            <h2>Správce údajů</h2>
            <p>
              <strong>{siteConfig.legal.company}</strong>, {siteConfig.contact.address}, IČ: {siteConfig.legal.ico}, DIČ: {siteConfig.legal.dic}. Kontakt: <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>, <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>.
            </p>

            <h2>Jaké údaje zpracováváme</h2>
            <ul>
              <li><strong>Kontaktní a identifikační údaje</strong> — jméno, telefon, e-mail při rezervaci programu nebo dotazu.</li>
              <li><strong>Účetní údaje</strong> — fakturační údaje při daru nebo platbě.</li>
              <li><strong>Údaje ze soutěže</strong> — kontaktní údaje účastníků soutěže.</li>
              <li><strong>Provozní údaje</strong> — anonymizované technické záznamy návštěvy webu.</li>
            </ul>

            <h2>Účel zpracování</h2>
            <ul>
              <li>Vyřízení rezervace, dotazu, daru či sponzoringu.</li>
              <li>Plnění zákonných povinností (účetnictví, archivace).</li>
              <li>Provoz a zlepšování webu.</li>
              <li>Realizace soutěže a kontaktování výherců.</li>
            </ul>

            <h2>Doba uchování</h2>
            <p>Údaje uchováváme po dobu nezbytnou pro daný účel a v souladu se zákonnými lhůtami (zejména účetní údaje 10 let).</p>

            <h2>Vaše práva</h2>
            <ul>
              <li>právo na přístup k osobním údajům</li>
              <li>právo na opravu nepřesných údajů</li>
              <li>právo na výmaz („právo být zapomenut")</li>
              <li>právo na omezení zpracování</li>
              <li>právo na přenositelnost údajů</li>
              <li>právo vznést námitku proti zpracování</li>
              <li>právo podat stížnost u Úřadu pro ochranu osobních údajů</li>
            </ul>

            <h2>Cookies</h2>
            <p>Web používá pouze nezbytné technické cookies pro správnou funkci. Analytické nebo marketingové cookies aktivujeme pouze s vaším výslovným souhlasem.</p>

            <p className="muted" style={{ marginTop: '2rem' }}>Tato pravidla mohou být průběžně aktualizována. Datum poslední aktualizace: {new Date().getFullYear()}.</p>
          </div>
        </div>
      </section>
    </>
  );
}
