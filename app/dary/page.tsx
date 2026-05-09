import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Dary',
  description: 'Číslo účtu pro dary: 131-3450970227/0100. Variabilní symbol = datum narození bez teček. Potvrzení pro daňové účely na vyžádání.',
  alternates: { canonical: '/dary' },
};

export default function DaryPage() {
  return (
    <>
      <PageHero
        eyebrow="Finanční podpora"
        title={<>Dárcovský účet a <em>jak na to.</em></>}
        description="Jednorázové i pravidelné finanční nebo materiální příspěvky. Na vyžádání vystavíme potvrzení o daru pro daňové účely."
        breadcrumbs={[
          { label: 'Domů', href: '/' },
          { label: 'Podpora', href: '/podpora' },
          { label: 'Dary' },
        ]}
      />

      <section className="section section--paper">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card" data-reveal>
              <span className="eyebrow" style={{ marginBottom: '1rem' }}>Bankovní účet</span>
              <dl>
                <div><dt>Číslo účtu</dt><dd>{siteConfig.legal.bankAccount}</dd></div>
                <div><dt>Banka</dt><dd>{siteConfig.legal.bank}</dd></div>
                <div><dt>Variabilní symbol</dt><dd>vaše datum narození bez teček</dd></div>
                <div><dt>Příjemce</dt><dd>{siteConfig.legal.company}</dd></div>
              </dl>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
                <a className="btn btn--moss" href="mailto:info@vodniminizoo.cz?subject=Potvrzen%C3%AD%20o%20daru">
                  Žádost o potvrzení o daru
                </a>
              </div>
            </div>

            <div className="prose" data-reveal style={{ maxWidth: 'none' }}>
              <h2>Dobrovolnická pomoc</h2>
              <p>Není nutný finanční dar. Můžete nabídnout svůj čas a dovednosti v těchto oblastech:</p>
              <ul>
                <li>Péče o zvířata (krmení, údržba nádrží)</li>
                <li>Údržba areálu (práce na zahradě, opravy)</li>
                <li>Vzdělávací programy (asistence při prohlídkách)</li>
                <li>Organizace akcí a programů</li>
                <li>Odborná pomoc (grafika, fotografie, překlady)</li>
              </ul>
              <p>
                Zájemci o dobrovolnictví se mohou přihlásit na <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a> nebo telefonicky na <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>.
              </p>
              <blockquote>„Každý dar, malý i velký, nám velmi pomáhá."</blockquote>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
