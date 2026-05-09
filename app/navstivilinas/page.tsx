import Image from 'next/image';
import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Navštívili nás',
  description: 'Školy, organizace a skupiny, které u nás absolvovaly vzdělávací program. Děkujeme za návštěvu.',
  alternates: { canonical: '/navstivilinas' },
};

const visits = [
  { src: '/assets/images/skola.jpeg', alt: 'ZŠ Komenského na návštěvě', caption: 'ZŠ Komenského' },
  { src: '/assets/images/deti.jpeg', alt: 'Děti na programu', caption: 'Programy pro děti' },
  { src: '/assets/images/expozice.jpeg', alt: 'Skupina v expozici', caption: 'Komentovaná prohlídka' },
  { src: '/assets/images/stezka.jpeg', alt: 'Skupina na naučné stezce', caption: 'Naučná stezka' },
  { src: '/assets/images/akvarium.jpeg', alt: 'U akvária', caption: 'U akvária' },
  { src: '/assets/images/skola.jpeg', alt: 'Společná fotka', caption: 'Společná fotka' },
];

export default function NavstiviliNasPage() {
  return (
    <>
      <PageHero
        eyebrow="Děkujeme za návštěvu"
        title={<>Školy a skupiny, které u nás <em>byly.</em></>}
        description="Veliké poděkování patří všem pedagogům, dětem a skupinám, které u nás absolvovaly vzdělávací program. Bez vás by naše práce neměla smysl."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'Navštívili nás' }]}
      />

      <section className="section section--paper">
        <div className="container">
          <div className="gallery gallery--zoo" data-reveal>
            {visits.map((v, i) => (
              <figure key={`${v.src}-${i}`}>
                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                  <Image src={v.src} alt={v.alt} fill sizes="(min-width: 720px) 50vw, 100vw" style={{ objectFit: 'cover' }} />
                </div>
                <figcaption>{v.caption}</figcaption>
              </figure>
            ))}
          </div>

          <div className="prose" style={{ marginTop: '3rem' }} data-reveal>
            <blockquote>
              „Programy kombinujeme s krátkou diskuzí a praktickými ukázkami. Děti i dospělí odcházejí s konkrétním zážitkem, který jim zůstane."
            </blockquote>
          </div>
        </div>
      </section>

      <CTABanner
        title={<>Plánujete <em>třídní výlet?</em></>}
        description="Volné termíny přijímáme po domluvě e-mailem nebo telefonicky."
        actions={[
          { label: 'Rezervovat', href: '/kontakt' },
          { label: 'Ceník', href: '/vyukovy-program-voda-v-pohybu', variant: 'ghost' },
        ]}
      />
    </>
  );
}
