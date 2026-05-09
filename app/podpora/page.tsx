import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';
import { ArrowRight } from '@/components/icons';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Podpora',
  description:
    'Podpořte naši vzdělávací činnost. Adopce zvířete, finanční dary, sponzoring nebo dobrovolnictví — každá pomoc se počítá. 100% transparentně.',
  alternates: { canonical: '/podpora' },
};

export default function PodporaPage() {
  return (
    <>
      <PageHero
        eyebrow="Pomozte nám růst"
        title={
          <>
            Každý dar — malý i velký —<br />
            <em>nás posouvá.</em>
          </>
        }
        description="Naše práce stojí na třech pilířích: lidé, kteří přijdou na program, lidé, kteří přiloží ruku k dílu, a lidé, kteří finančně či materiálně přispějí."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'Podpora' }]}
      />

      {/* Proč nás podpořit */}
      <section className="section section--paper">
        <div className="container">
          <div data-reveal style={{ marginBottom: '2.5rem', maxWidth: '60ch' }}>
            <span className="eyebrow">Proč podporovat</span>
            <h2 className="h-display">
              Jste-li tady, <em>záleží vám na tom</em> stejně jako nám.
            </h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Vodu bereme jako samozřejmost — dokud ji nepotřebujeme. Vzdělávání o vodě začíná u dětí, které dnes přijdou na program a za 30 let budou rozhodovat o krajině.
            </p>
          </div>

          <div className="values" data-reveal>
            <article className="values__item">
              <span className="values__num">01</span>
              <h3>Vzdělávání bez bariér</h3>
              <p>Programy držíme cenově dostupné pro běžné školy. Bez vaší podpory bychom je museli zdražit.</p>
            </article>
            <article className="values__item">
              <span className="values__num">02</span>
              <h3>Welfare zvířat</h3>
              <p>Tropické druhy potřebují stabilní teplotu, kvalitní filtraci a prostor. Tady investice nikdy nekončí.</p>
            </article>
            <article className="values__item">
              <span className="values__num">03</span>
              <h3>Místní krajina</h3>
              <p>Naučná stezka, rybníky a venkovní biotopy — to všechno vyžaduje průběžnou údržbu.</p>
            </article>
            <article className="values__item">
              <span className="values__num">04</span>
              <h3>Transparence</h3>
              <p>Jsme nezisková organizace (z. s.). Každá koruna jde do projektu, který si můžete přijít zkontrolovat.</p>
            </article>
          </div>
        </div>
      </section>

      {/* 4 cesty podpory */}
      <section className="section section--cream">
        <div className="container">
          <div data-reveal style={{ marginBottom: '2.5rem', maxWidth: '60ch' }}>
            <span className="eyebrow">Čtyři cesty</span>
            <h2 className="h-display">
              Vyberte si, jak <em>nám</em> chcete pomoct.
            </h2>
          </div>

          <div className="cards">
            <article className="card" data-reveal>
              <div className="card__media">
                <Image src="/assets/images/krokodyl.jpeg" alt="Adopce zvířete" width={600} height={450} sizes="(min-width: 960px) 25vw, 100vw" />
              </div>
              <div className="card__body">
                <span className="card__tag">Symbolická podpora</span>
                <h3 className="card__title">Adopce zvířete</h3>
                <p className="card__text">
                  Staňte se symbolickým rodičem některého z našich obyvatel — krokodýla, arapaimy, kajmana. Získáte certifikát a možnost setkání.
                </p>
                <Link className="card__link" href="/kontakt">
                  Kontaktovat <ArrowRight />
                </Link>
              </div>
            </article>

            <article className="card" data-reveal>
              <div className="card__media">
                <Image src="/assets/images/akvarium.jpeg" alt="Finanční dary" width={600} height={450} sizes="(min-width: 960px) 25vw, 100vw" />
              </div>
              <div className="card__body">
                <span className="card__tag">Finančně</span>
                <h3 className="card__title">Dary</h3>
                <p className="card__text">
                  Jednorázové i pravidelné finanční nebo materiální příspěvky. Na vyžádání vystavíme potvrzení o daru pro daňové účely.
                </p>
                <Link className="card__link" href="/dary">
                  Detail a číslo účtu <ArrowRight />
                </Link>
              </div>
            </article>

            <article className="card" data-reveal>
              <div className="card__media">
                <Image src="/assets/images/expozice.jpeg" alt="Sponzoring" width={600} height={450} sizes="(min-width: 960px) 25vw, 100vw" />
              </div>
              <div className="card__body">
                <span className="card__tag">Dlouhodobě</span>
                <h3 className="card__title">Sponzoring</h3>
                <p className="card__text">
                  Pro firmy i jednotlivce. Veřejné poděkování, partnerství u konkrétních projektů, individuální dohody nad rámec.
                </p>
                <Link className="card__link" href="/sponzoring">
                  Možnosti partnerství <ArrowRight />
                </Link>
              </div>
            </article>

            <article className="card" data-reveal>
              <div className="card__media">
                <Image src="/assets/images/deti.jpeg" alt="Dobrovolnictví" width={600} height={450} sizes="(min-width: 960px) 25vw, 100vw" />
              </div>
              <div className="card__body">
                <span className="card__tag">Časem</span>
                <h3 className="card__title">Dobrovolnictví</h3>
                <p className="card__text">
                  Péče o zvířata, údržba areálu, asistence při programech, grafika, fotografie, překlady — pomáháte podle svých možností.
                </p>
                <a className="card__link" href={siteConfig.contact.emailHref}>
                  Přihlásit se <ArrowRight />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section section--paper">
        <div className="container">
          <div className="pullquote" data-reveal>
            <p className="pullquote__text">
              „Každý dar, malý i velký, nám velmi pomáhá. <em>Na vyžádání</em> zveřejníme jméno či logo dárce."
            </p>
            <span className="pullquote__cite">vodní miniZOO Baška z. s.</span>
          </div>
        </div>
      </section>

      {/* Provozovatel */}
      <section className="section section--cream">
        <div className="container">
          <div className="prose" data-reveal>
            <span className="eyebrow">Provozovatel</span>
            <h2>Komu posíláte <em>peníze.</em></h2>
            <p>
              <strong>{siteConfig.legal.company}</strong>, sídlo {siteConfig.contact.address}. IČ {siteConfig.legal.ico}, DIČ {siteConfig.legal.dic}. Spolek registrovaný v rejstříku vedeném Krajským soudem v Ostravě, předsedkyně {siteConfig.legal.chair}.
            </p>
            <p>
              Veškeré finanční toky vedeme transparentně podle účetních standardů pro neziskové organizace. Hospodaření zveřejňujeme po skončení kalendářního roku — v případě zájmu vám rádi pošleme detailní vyúčtování konkrétního projektu.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Promluvme si o tom, jak <em>spolupracujeme.</em>
          </>
        }
        description="Napište, zavolejte. Připravíme nabídku přesně podle toho, jak chcete pomoct."
        actions={[
          { label: 'Napsat e-mail', href: siteConfig.contact.emailHref },
          { label: 'Zavolat', href: siteConfig.contact.phoneHref, variant: 'ghost' },
        ]}
      />
    </>
  );
}
