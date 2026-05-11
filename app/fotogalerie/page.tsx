import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fotogalerie',
  description: 'Fotogalerie z vodní miniZOO Baška — akvária, expozice, naučná stezka, naši obyvatelé.',
  alternates: { canonical: '/fotogalerie' },
};

const photos = [
  { src: '/assets/images/akvarium.jpeg', alt: 'Hlavní akvárium', caption: 'Hlavní akvárium 41 000 l' },
  { src: '/assets/images/krokodyl.jpeg', alt: 'Krokodýl nilský', caption: 'Krokodýl nilský' },
  { src: '/assets/images/ocelatus-1.jpeg', alt: 'Astronotus ocellatus', caption: 'Ocelatus' },
  { src: '/assets/images/ocelatus-2.webp', alt: 'Cichlida papouščí', caption: 'Cichlida papouščí' },
  { src: '/assets/images/expozice.jpeg', alt: 'Expozice', caption: 'Vnitřní expozice' },
  { src: '/assets/images/stezka.jpeg', alt: 'Naučná stezka', caption: 'Naučná stezka' },
  { src: '/assets/images/deti.jpeg', alt: 'Děti při programu', caption: 'Programy pro děti' },
  { src: '/assets/images/skola.jpeg', alt: 'Návštěva školy', caption: 'Návštěvy škol' },
];

export default function FotogaleriePage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Fotogalerie</h1>
        </header>

        <div className="gallery-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }} data-reveal>
          {photos.map((p) => (
            <figure key={p.src}>
              <div className="gallery-grid__media">
                <Image src={p.src} alt={p.alt} width={500} height={500} sizes="(min-width: 1100px) 25vw, 45vw" />
              </div>
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
