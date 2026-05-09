import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Licence a povinné informace',
  description: 'Licence, povinné informace, právní statut spolku a obchodní údaje vodní miniZOO Baška z. s.',
  alternates: { canonical: '/licence-a-povinne-informace' },
};

export default function LicencePage() {
  return (
    <>
      <PageHero
        eyebrow="Právní informace"
        title={<>Licence a <em>povinné</em> informace</>}
        description="Identifikační údaje provozovatele, právní statut a další povinné informace."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'Licence a povinné informace' }]}
      />

      <section className="section section--paper">
        <div className="container">
          <div className="prose" data-reveal>
            <h2>Provozovatel</h2>
            <p>
              <strong>{siteConfig.legal.company}</strong><br />
              Sídlo: {siteConfig.contact.address}<br />
              IČ: {siteConfig.legal.ico}<br />
              DIČ: {siteConfig.legal.dic}<br />
              Právní forma: spolek<br />
              Spolek registrovaný v rejstříku vedeném Krajským soudem v Ostravě.<br />
              Předsedkyně: {siteConfig.legal.chair}<br />
              Datum vzniku z. s.: {siteConfig.legal.establishedAt}
            </p>

            <h2>Kontaktní údaje</h2>
            <p>
              Telefon: <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a><br />
              E-mail: <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>
            </p>

            <h2>Bankovní spojení</h2>
            <p>
              {siteConfig.legal.bank}<br />
              Číslo účtu: {siteConfig.legal.bankAccount}
            </p>

            <h2>Autorská práva</h2>
            <p>Veškerý obsah webu (texty, fotografie, grafika, logo) je chráněn autorským právem a je majetkem {siteConfig.legal.company} nebo jejích smluvních partnerů. Bez předchozího písemného souhlasu jej nelze používat k jiným účelům.</p>

            <h2>Ochrana zvířat</h2>
            <p>Provozovatel postupuje v souladu s českou legislativou v oblasti ochrany zvířat proti týrání, držení vybraných druhů zvířat a veterinární péče.</p>

            <h2>Mimosoudní řešení sporů</h2>
            <p>
              Případné spotřebitelské spory lze mimosoudně řešit u České obchodní inspekce (
              <a href="https://www.coi.cz" rel="noopener noreferrer">www.coi.cz</a>).
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
