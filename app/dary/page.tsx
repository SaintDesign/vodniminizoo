import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Dary',
  description:
    'Číslo účtu pro dary: 131-3450970227/0100 (Komerční banka). Variabilní symbol = datum narození bez teček. Potvrzení o daru pro daňové účely na vyžádání.',
  alternates: { canonical: '/dary' },
};

export default function DaryPage() {
  return (
    <>
      <PageHero
        eyebrow="Finanční podpora"
        title={
          <>
            Dárcovský účet a <em>jak na to.</em>
          </>
        }
        description="Jednorázové i pravidelné finanční nebo materiální příspěvky. Na vyžádání vystavíme potvrzení o daru pro daňové účely. Každý dar má svůj smysl."
        breadcrumbs={[
          { label: 'Domů', href: '/' },
          { label: 'Podpora', href: '/podpora' },
          { label: 'Dary' },
        ]}
      />

      {/* Hlavní účet */}
      <section className="section section--paper">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card" data-reveal>
              <span className="eyebrow" style={{ marginBottom: '1rem' }}>Bankovní účet</span>
              <dl>
                <div>
                  <dt>Číslo účtu</dt>
                  <dd style={{ fontSize: '1.4rem' }}>{siteConfig.legal.bankAccount}</dd>
                </div>
                <div>
                  <dt>Banka</dt>
                  <dd style={{ fontSize: '1.05rem' }}>{siteConfig.legal.bank}</dd>
                </div>
                <div>
                  <dt>Variabilní symbol</dt>
                  <dd style={{ fontSize: '1rem', color: 'var(--slate)' }}>vaše datum narození bez teček</dd>
                </div>
                <div>
                  <dt>Příjemce</dt>
                  <dd style={{ fontSize: '1rem' }}>{siteConfig.legal.company}</dd>
                </div>
                <div>
                  <dt>IČ / DIČ</dt>
                  <dd style={{ fontSize: '1rem' }}>{siteConfig.legal.ico} · {siteConfig.legal.dic}</dd>
                </div>
              </dl>
              <div style={{ marginTop: '2rem', display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
                <a className="btn btn--moss" href="mailto:info@vodniminizoo.cz?subject=Potvrzen%C3%AD%20o%20daru">
                  Žádost o potvrzení o daru
                </a>
                <a className="btn btn--ghost" href={siteConfig.contact.phoneHref}>
                  Zavolat
                </a>
              </div>
            </div>

            <div className="prose" data-reveal style={{ maxWidth: 'none' }}>
              <h2>Pravidelná podpora</h2>
              <p>
                Trvalý příkaz i ten v hodnotě 100 Kč měsíčně nám velmi pomáhá s plánováním. Můžeme díky němu dlouhodobě naplánovat krmení, údržbu i investice do nových expozic.
              </p>
              <h3>Jak nastavit trvalý příkaz</h3>
              <ol>
                <li>Ve vašem internetovém bankovnictví zvolte „Trvalý příkaz / opakovanou platbu".</li>
                <li>Zadejte číslo účtu <strong>{siteConfig.legal.bankAccount}</strong>.</li>
                <li>Variabilní symbol = datum narození bez teček (např. 21071985).</li>
                <li>Frekvence: měsíčně / čtvrtletně / ročně — podle vás.</li>
              </ol>
              <p>
                Pokud chcete, abychom vám jednou ročně vystavili souhrnné potvrzení o daru pro daňové účely, napište nám e-mail na <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a> se jménem a adresou.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tiers — návrh hodnot */}
      <section className="section section--cream">
        <div className="container">
          <div data-reveal style={{ marginBottom: '2.5rem', maxWidth: '60ch' }}>
            <span className="eyebrow">Co znamená kolik</span>
            <h2 className="h-display">
              Orientační dopad <em>vašeho</em> daru.
            </h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Konkrétně si představte, co váš dar pokryje. Hodnoty jsou orientační — záleží na sezóně a aktuálních cenách.
            </p>
          </div>

          <div className="tiers" data-reveal>
            <article className="tier">
              <h3 className="tier__name">Drobný dar</h3>
              <p className="tier__price">300 Kč</p>
              <ul>
                <li>Týdenní krmení skupiny menších ryb</li>
                <li>Náhradní filtrační vložka</li>
                <li>Jeden vstup na program pro dítě ze sociálně slabší rodiny</li>
              </ul>
            </article>
            <article className="tier tier--featured">
              <h3 className="tier__name">Standardní dar</h3>
              <p className="tier__price">1 500 Kč</p>
              <ul>
                <li>Měsíční krmení velkých druhů</li>
                <li>Veterinární kontrola</li>
                <li>Materiály pro vzdělávací program</li>
                <li>Veřejné poděkování na webu</li>
              </ul>
            </article>
            <article className="tier">
              <h3 className="tier__name">Větší dar</h3>
              <p className="tier__price">10 000 Kč</p>
              <ul>
                <li>Symbolická adopce konkrétního zvířete</li>
                <li>Certifikát s fotografií</li>
                <li>Pozvánka na exkurzi v zázemí</li>
                <li>Veřejné poděkování v areálu</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Dobrovolnictví */}
      <section className="section section--paper">
        <div className="container">
          <div className="prose" data-reveal>
            <span className="eyebrow">Dobrovolnická pomoc</span>
            <h2>Není nutný <em>finanční</em> dar.</h2>
            <p>Můžete nabídnout svůj čas a dovednosti v těchto oblastech:</p>
            <ul>
              <li><strong>Péče o zvířata</strong> — krmení, údržba nádrží, asistence při větších úkonech.</li>
              <li><strong>Údržba areálu</strong> — práce na zahradě, opravy, sezónní úpravy.</li>
              <li><strong>Vzdělávací programy</strong> — asistence při prohlídkách, příprava materiálů.</li>
              <li><strong>Organizace akcí a programů</strong> — koordinace, registrace, propagace.</li>
              <li><strong>Odborná pomoc</strong> — grafika, fotografie, video, překlady, IT, právo, účetnictví.</li>
            </ul>
            <p>
              Zájemci o dobrovolnictví se mohou přihlásit na <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a> nebo telefonicky na <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>. Společně domluvíme rozsah, formu a frekvenci pomoci.
            </p>
            <blockquote>„Každý dar, malý i velký, nám velmi pomáhá."</blockquote>
          </div>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Máte dotaz k <em>daru?</em>
          </>
        }
        description="Ozvěte se — odpovíme do dvou pracovních dnů."
        actions={[
          { label: 'Napsat e-mail', href: siteConfig.contact.emailHref },
          { label: 'Zavolat', href: siteConfig.contact.phoneHref, variant: 'ghost' },
        ]}
      />
    </>
  );
}
