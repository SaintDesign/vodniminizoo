import Image from 'next/image';
import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Fotogalerie',
  description: 'Fotogalerie z naší vzdělávací činnosti — akvária, expozice, naučná stezka, krokodýli a další obyvatelé vodní miniZOO Baška.',
  alternates: { canonical: '/fotogalerie' },
};

const galleryA = [
  { src: '/assets/images/akvarium.jpeg', alt: 'Hlavní sladkovodní akvárium', caption: 'Hlavní akvárium · 41 000 l' },
  { src: '/assets/images/krokodyl.jpeg', alt: 'Krokodýl nilský', caption: 'Krokodýl nilský' },
  { src: '/assets/images/ocelatus-1.jpeg', alt: 'Astronotus ocellatus', caption: 'Astronotus ocellatus' },
  { src: '/assets/images/ocelatus-2.webp', alt: 'Tropická ryba', caption: 'Tropická ryba' },
  { src: '/assets/images/expozice.jpeg', alt: 'Pohled do expozice', caption: 'Expozice' },
  { src: '/assets/images/stezka.jpeg', alt: 'Naučná stezka', caption: 'Naučná stezka — celoročně' },
];

const galleryB = [
  { src: '/assets/images/deti.jpeg', alt: 'Děti při programu', caption: 'Programy pro děti' },
  { src: '/assets/images/skola.jpeg', alt: 'Návštěva ZŠ Komenského', caption: 'Návštěvy škol' },
  { src: '/assets/images/expozice.jpeg', alt: 'Detail expozice', caption: 'Detail' },
  { src: '/assets/images/krokodyl.jpeg', alt: 'Krokodýl', caption: 'Krokodýl nilský' },
  { src: '/assets/images/ocelatus-1.jpeg', alt: 'Pestrá ryba', caption: 'Astronotus' },
  { src: '/assets/images/akvarium.jpeg', alt: 'Akvárium', caption: 'Pohled do akvária' },
];

function Gallery({ items }: { items: typeof galleryA }) {
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
        title={<>Vodní svět <em>v obrazech.</em></>}
        description="Akvária, terária, naučná stezka, naši obyvatelé i programy. Fotogalerie se průběžně rozšiřuje."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'Fotogalerie' }]}
      />

      <section className="section section--paper">
        <div className="container">
          <Gallery items={galleryA} />
          <div style={{ marginTop: '2rem' }}>
            <Gallery items={galleryB} />
          </div>
        </div>
      </section>

      <CTABanner
        title={<>Chcete to vidět <em>naživo?</em></>}
        description="Foto je hezké, ale dotyk pstruha v ruce nikdo nenahradí."
        actions={[
          { label: 'Ceník programů', href: '/vyukovy-program-voda-v-pohybu' },
          { label: 'Rezervovat', href: '/kontakt', variant: 'ghost' },
        ]}
      />
    </>
  );
}
