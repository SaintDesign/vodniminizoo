import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHero } from '@/components/PageHero';
import { ArrowRight } from '@/components/icons';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Podpora',
  description: 'Podpořte naši vzdělávací činnost. Adopce zvířete, finanční dary, sponzoring nebo dobrovolnictví — každá pomoc se počítá.',
  alternates: { canonical: '/podpora' },
};

export default function PodporaPage() {
  return (
    <>
      <PageHero
        eyebrow="Pomozte nám růst"
        title={<>Každý dar — malý i velký — <em>nás posouvá.</em></>}
        description="Naše práce stojí na třech pilířích: lidé, kteří přijdou na program, lidé, kteří přiloží ruku k dílu, a lidé, kteří finančně či materiálně přispějí."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'Podpora' }]}
      />

      <section className="section section--paper">
        <div className="container">
          <div className="cards">
            <article className="card" data-reveal>
              <div className="card__body">
                <span className="card__tag">Symbolická podpora</span>
                <h3 className="card__title">Adopce zvířete</h3>
                <p className="card__text">Staňte se symbolickým rodičem některého z našich obyvatel. Získáte certifikát a možnost setkání.</p>
                <Link className="card__link" href="/kontakt">Kontaktovat <ArrowRight /></Link>
              </div>
            </article>
            <article className="card" data-reveal>
              <div className="card__body">
                <span className="card__tag">Finančně</span>
                <h3 className="card__title">Dary</h3>
                <p className="card__text">Jednorázové i pravidelné finanční nebo materiální příspěvky. Na vyžádání vystavíme potvrzení pro daňové účely.</p>
                <Link className="card__link" href="/dary">Detail <ArrowRight /></Link>
              </div>
            </article>
            <article className="card" data-reveal>
              <div className="card__body">
                <span className="card__tag">Dlouhodobě</span>
                <h3 className="card__title">Sponzoring</h3>
                <p className="card__text">Pro firmy i jednotlivce. Veřejné poděkování, partnerství u konkrétních projektů, individuální dohody.</p>
                <Link className="card__link" href="/sponzoring">Detail <ArrowRight /></Link>
              </div>
            </article>
            <article className="card" data-reveal>
              <div className="card__body">
                <span className="card__tag">Časem</span>
                <h3 className="card__title">Dobrovolnictví</h3>
                <p className="card__text">Péče o zvířata, údržba areálu, asistence při programech, grafika, fotografie, překlady — pomáháte podle svých možností.</p>
                <a className="card__link" href={siteConfig.contact.emailHref}>Přihlásit se <ArrowRight /></a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="prose" data-reveal>
            <blockquote>„Každý dar, malý i velký, nám velmi pomáhá. Na vyžádání zveřejníme jméno či logo dárce."</blockquote>
            <p>
              Provozovatel: <strong>{siteConfig.legal.company}</strong>, sídlo {siteConfig.contact.address}. IČ {siteConfig.legal.ico}, DIČ {siteConfig.legal.dic}. Spolek registrovaný v rejstříku vedeném Krajským soudem v Ostravě.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
