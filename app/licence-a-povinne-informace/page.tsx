import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Licence a povinné informace',
  description: 'Licence, povinné informace a právní statut spolku vodní miniZOO Baška z. s.',
  alternates: { canonical: '/licence-a-povinne-informace' },
};

export default function LicencePage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Licence a povinné informace</h1>
        </header>

        <div className="prose">
          <h2>Provozovatel</h2>
          <p>
            <strong>{siteConfig.legal.company}</strong>
            <br />
            Sídlo: {siteConfig.legal.address}
            <br />
            IČ: {siteConfig.legal.ico}
            <br />
            DIČ: {siteConfig.legal.dic}
            <br />
            Právní forma: {siteConfig.legal.form}
            <br />
            {siteConfig.legal.registry}
          </p>

          <h2>Statutární orgán</h2>
          <p>Statutárním orgánem spolku je výbor.</p>
          <p>
            <strong>Předsedkyně výboru:</strong> {siteConfig.legal.chair}
            <br />
            <em>{siteConfig.legal.actsAlone}</em>
          </p>

          <h2>Kontaktní údaje</h2>
          <p>
            Telefon: <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
            <br />
            E-mail: <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>
          </p>

          <h2>Bankovní spojení</h2>
          <p>
            {siteConfig.legal.bank}
            <br />
            Číslo účtu: {siteConfig.legal.bankAccount}
          </p>

          <h2>Autorská práva</h2>
          <p>
            Obsah webu — texty, fotografie, grafika, logo — je chráněn autorským právem a je majetkem {siteConfig.legal.company} nebo jejích smluvních partnerů. Bez předchozího písemného souhlasu jej nelze používat k jiným účelům.
          </p>

          <h2>Mimosoudní řešení sporů</h2>
          <p>
            Případné spotřebitelské spory lze mimosoudně řešit u České obchodní inspekce (<a href="https://www.coi.cz" rel="noopener noreferrer">www.coi.cz</a>).
          </p>
        </div>
      </div>
    </section>
  );
}
