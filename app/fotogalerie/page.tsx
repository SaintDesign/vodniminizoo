import Image from 'next/image';
import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Fotogalerie',
  description:
    'Fotogalerie z naší vzdělávací činnosti — akvária, expozice, naučná stezka, krokodýli, arapaima a další obyvatelé vodní miniZOO Baška. Plus pohledy na programy a školní návštěvy.',
  alternates: { canonical: '/fotogalerie' },
};

const animalsGallery = [
  { src: '/assets/images/akvarium.jpeg', alt: 'Hlavní sladkovodní akvárium', caption: 'Hlavní akvárium · 41 000 l' },
  { src: '/assets/images/krokodyl.jpeg', alt: 'Krokodýl nilský', caption: 'Krokodýl nilský' },
  { src: '/assets/images/ocelatus-1.jpeg', alt: 'Astronotus ocellatus', caption: 'Astronotus ocellatus' },
  { src: '/assets/images/ocelatus-2.webp', alt: 'Tropická ryba', caption: 'Tropická ryba' },
  { src: '/assets/images/expozice.jpeg', alt: 'Pohled do expozice', caption: 'Vnitřní expozice' },
  { src: '/assets/images/stezka.jpeg', alt: 'Naučná stezka', caption: 'Naučná stezka — celoročně' },
];

const programsGallery = [
  { src: '/assets/images/deti.jpeg', alt: 'Děti při programu', caption: 'Programy pro děti' },
  { src: '/assets/images/skola.jpeg', alt: 'Návštěva ZŠ Komenského', caption: 'Návštěvy škol' },
  { src: '/assets/images/expozice.jpeg', alt: 'Detail expozice', caption: 'Komentovaná prohlídka' },
  { src: '/assets/images/krokodyl.jpeg', alt: 'Setkání s krokodýlem', caption: 'U terária krokodýla' },
  { src: '/assets/images/ocelatus-1.jpeg', alt: 'U akvária', caption: 'Pohled do akvária' },
  { src: '/assets/images/akvarium.jpeg', alt: 'Akvárium', caption: 'Sladkovodní obři' },
];

function Gallery({ items }: { items: { src: string; alt: string; caption: string }[] }) {
  return (
    <div className="gallery gallery--zoo" data-reveal>
      {items.map((g, i) => (
        <figure key={`${g.src}-${i}`}>
          <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <Image src={g.src} alt={g.alt} fill sizes="(min-width: 720px) 50vw, 100vw" style={{ objectFit: 'cover' }} />
          </div>
          <figcaption>{g.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

export default function FotogaleriePage() {
  return (
    <>
      <PageHero
        eyebrow="Pohledy do areálu"
        title={
          <>
            Vodní svět <em>v obrazech.</em>
          </>
        }
        description="Akvária, terária, naučná stezka, naši obyvatelé i programy. Fotogalerie se průběžně rozšiřuje s tím, jak rostou expozice."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'Fotogalerie' }]}
      />

      {/* Naši obyvatelé */}
      <section className="section section--paper">
        <div className="container">
          <div data-reveal style={{ marginBottom: '2rem', maxWidth: '60ch' }}>
            <span className="eyebrow">Naši obyvatelé</span>
            <h2 className="h-display">
              Vodní svět <em>zblízka.</em>
            </h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Sladkovodní obři i ti drobní. Pohled do akvárií, terárií i naučné stezky.
            </p>
          </div>
          <Gallery items={animalsGallery} />
        </div>
      </section>

      {/* Programy & návštěvy */}
      <section className="section section--cream">
        <div className="container">
          <div data-reveal style={{ marginBottom: '2rem', maxWidth: '60ch' }}>
            <span className="eyebrow">Programy &amp; návštěvy</span>
            <h2 className="h-display">
              Tady se to <em>doopravdy</em> děje.
            </h2>
            <p className="lead" style={{ marginTop: '1rem' }}>
              Děti, školy, rodiny i pedagogové při programu. To je smysl celé naší práce.
            </p>
          </div>
          <Gallery items={programsGallery} />
        </div>
      </section>

      <CTABanner
        title={
          <>
            Chcete to vidět <em>naživo?</em>
          </>
        }
        description="Foto je hezké, ale dotyk pstruha v ruce nikdo nenahradí."
        actions={[
          { label: 'Ceník programů', href: '/vyukovy-program-voda-v-pohybu' },
          { label: 'Rezervovat', href: '/kontakt', variant: 'ghost' },
        ]}
      />
    </>
  );
}
