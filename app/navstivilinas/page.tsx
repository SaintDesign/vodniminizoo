import Image from 'next/image';
import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Navštívili nás',
  description:
    'Školy, organizace a skupiny, které u nás absolvovaly vzdělávací program. Děkujeme za návštěvu — bez vás by naše práce neměla smysl.',
  alternates: { canonical: '/navstivilinas' },
};

const visits = [
  { src: '/assets/images/skola.jpeg', alt: 'ZŠ Komenského na návštěvě', caption: 'ZŠ Komenského' },
  { src: '/assets/images/deti.jpeg', alt: 'Děti na programu', caption: 'Programy pro nejmenší' },
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
        title={
          <>
            Školy a skupiny, které <em>u nás byly.</em>
          </>
        }
        description="Veliké poděkování patří všem pedagogům, dětem, rodinám a skupinám, které u nás absolvovaly vzdělávací program. Bez vás by naše práce neměla smysl."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'Navštívili nás' }]}
      />

      {/* Galerie návštěv */}
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
        </div>
      </section>

      {/* Reflexe */}
      <section className="section section--cream">
        <div className="container">
          <div className="pullquote" data-reveal>
            <p className="pullquote__text">
              „Programy <em>kombinujeme</em> s krátkou diskuzí a praktickými ukázkami. Děti i dospělí odcházejí s konkrétním zážitkem, který jim zůstane."
            </p>
            <span className="pullquote__cite">Reflexe pedagožky po návštěvě se 3. třídou ZŠ</span>
          </div>
        </div>
      </section>

      {/* Pro koho jsme */}
      <section className="section section--paper">
        <div className="container">
          <div className="prose" data-reveal>
            <span className="eyebrow">Komu programy svědčí</span>
            <h2>Vítáme <em>každého,</em> kdo chce vědět víc.</h2>
            <p>U nás byly mateřské školy, základní školy, střední školy i gymnázia. Občas přijde také skautský oddíl, dětský domov nebo seniorský klub. Programy přizpůsobujeme dopředu — ozvěte se nám e-mailem se zájmem a věkovou skupinou, dohodneme detaily.</p>
            <ul>
              <li>Mateřské a základní školy z Frýdku-Místku, Frýdlantu n. O. a okolí</li>
              <li>Střední školy a gymnázia s důrazem na biologii a ekologii</li>
              <li>Rodinné výlety, vícegenerační návštěvy</li>
              <li>Skautské oddíly a volnočasové kluby</li>
              <li>Komunitní organizace a senioři</li>
              <li>Firmy s CSR aktivitami a teambuildingy</li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Plánujete <em>třídní výlet?</em>
          </>
        }
        description="Volné termíny přijímáme po domluvě e-mailem nebo telefonicky."
        actions={[
          { label: 'Rezervovat', href: '/kontakt' },
          { label: 'Ceník', href: '/vyukovy-program-voda-v-pohybu', variant: 'ghost' },
        ]}
      />
    </>
  );
}
