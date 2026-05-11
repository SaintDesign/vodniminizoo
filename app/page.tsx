import Image from 'next/image';
import Link from 'next/link';
import { ContactBlock } from '@/components/ContactBlock';
import { FeatureRow } from '@/components/FeatureRow';
import { siteConfig } from '@/lib/site';

export default function HomePage() {
  return (
    <>
      {/* Hero — Svět vody + rozvrh */}
      <section className="section section--paper home-hero">
        <div className="container" data-reveal>
          <h1>{siteConfig.hero.title}</h1>
          <p className="home-hero__time">{siteConfig.hero.schedule}</p>
          <p className="home-hero__cta-text">{siteConfig.hero.note}</p>
        </div>
        <div className="container">
          <div className="home-hero__img" data-reveal>
            <Image
              src="/assets/images/ocelatus-1.jpeg"
              alt="Astronotus ocellatus v akváriu"
              width={1100}
              height={620}
              priority
              sizes="(min-width: 1140px) 1100px, 92vw"
            />
            <div className="home-hero__badge">
              <Image src="/assets/images/logo.png" alt="vodní miniZOO Baška" width={110} height={110} />
            </div>
          </div>
        </div>
      </section>

      {/* Intro odstavce */}
      <section className="section section--paper" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="intro" data-reveal>
            <p>
              Vodní miniZOO Baška je trvalé zařízení pro chov a prezentaci volně žijících vodních živočichů, provozované s důrazem na odbornost, ochranu přírody a environmentální vzdělávání. Zařízení je přístupné veřejnosti výhradně v rámci vzdělávacích programů s odborným výkladem.
            </p>
            <p>
              Veškeré <Link href="/vzdelavaci-programy">programy</Link> jsou vedeny průvodcem a jsou zaměřeny na poznávání vodních živočichů, jejich přirozených biotopů, fungování vodních ekosystémů a seznámení se se složitými procesy čištění vody. Výklad je koncipován tak, aby srozumitelnou a názornou formou přibližoval význam ochrany vod, biodiverzity a udržitelného přístupu člověka k vodnímu prostředí.
            </p>
            <p>
              Vodní miniZOO Baška je zařízení se vzdělávacím a osvětovým posláním, jehož cílem je zvyšovat povědomí veřejnosti o významu vody, života v ní a o odpovědnosti člověka za stav přírodních ekosystémů.
            </p>
            <p>Návštěva je možná výhradně v rámci předem organizovaných termínech s průvodcem.</p>
          </div>
        </div>
      </section>

      {/* O nás (růžová sekce) */}
      <section className="section section--rose">
        <div className="container">
          <FeatureRow
            title="O nás"
            image="/assets/images/ocelatus-2.webp"
            imageAlt="Cichlida papouščí"
            caption="Cichlida papouščí"
            body={
              <p>
                Vodní miniZOO v Bašce je ideálním místem pro všechny milovníky zvířat a přírody. Nabízíme vám možnost prohlédnout si fascinující expozice krokodýlů, želv, exotických ryb, ale i přírodní biotopy s místní faunou a naučit se více o jejich životě díky výukovým programům. Přijďte a objevte krásy vodního světa s námi!
              </p>
            }
            more={{ label: 'Pokračujte v příběhu', href: '/o-nas' }}
          />
        </div>
      </section>

      {/* Vzdělávací a zážitkové programy */}
      <section className="section section--paper">
        <div className="container">
          <FeatureRow
            title="Vzdělávací a zážitkové programy"
            image="/assets/images/deti.jpeg"
            imageAlt="Vzdělávací a zážitkové programy"
            body={
              <p>
                Vodní miniZOO BAŠKA nabízí vzdělávací a zážitkové programy pro mateřské a základní školy, školní družiny, organizace pečující o osoby se zdravotním znevýhodněním i volnočasové skupiny.
              </p>
            }
            more={{ label: 'Pokračujte v příběhu', href: '/vzdelavaci-programy' }}
          />
        </div>
      </section>

      {/* Navštívili nás (růžová) */}
      <section className="section section--rose">
        <div className="container">
          <FeatureRow
            title="Navštívili nás"
            image="/assets/images/skola.jpeg"
            imageAlt="Skupina dětí na návštěvě"
            body={
              <p>
                Naši miniZOO s oblibou navštěvují školy, školky, organizace i milovníci zvířat všeho věku. Každá návštěva je jedinečný zážitek plný poznání. I vy se můžete stát součástí našich příběhů — stačí nás navštívit a nechat u nás kousek své radosti.
              </p>
            }
            more={{ label: 'Tady uvidíte všechny', href: '/navstivilinas' }}
          />
        </div>
      </section>

      {/* "Barunka" a její kamarádi */}
      <section className="section section--rose">
        <div className="container">
          <div className="section__head" data-reveal>
            <h2>„Barunka" a její kamarádi</h2>
            <Link className="more" href="/fotogalerie">Fotogalerie</Link>
          </div>
          <div className="gallery-grid" data-reveal>
            <figure>
              <div className="gallery-grid__media">
                <Image src="/assets/images/krokodyl.jpeg" alt="Barunka" width={500} height={500} sizes="(min-width: 1100px) 350px, 45vw" />
              </div>
              <figcaption>Barunka</figcaption>
            </figure>
            <figure>
              <div className="gallery-grid__media">
                <Image src="/assets/images/expozice.jpeg" alt="Kožnatka floridská" width={500} height={500} sizes="(min-width: 1100px) 350px, 45vw" />
              </div>
              <figcaption>Kožnatka floridská</figcaption>
            </figure>
            <figure>
              <div className="gallery-grid__media">
                <Image src="/assets/images/akvarium.jpeg" alt="Arapaima gigas" width={500} height={500} sizes="(min-width: 1100px) 350px, 45vw" />
              </div>
              <figcaption>Arapaima gigas</figcaption>
            </figure>
            <figure>
              <div className="gallery-grid__media">
                <Image src="/assets/images/ocelatus-1.jpeg" alt="Ocelatus" width={500} height={500} sizes="(min-width: 1100px) 350px, 45vw" />
              </div>
              <figcaption>Ocelatus</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <ContactBlock />
    </>
  );
}
