import Image from 'next/image';
import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Projekty a výzvy',
  description:
    'Aktuální projekty vodní miniZOO Baška: Komplexní filtrační soustava (2026), naučná stezka Voda v pohybu, dokončení terária pro krokodýla nilského. Hledáme partnery.',
  alternates: { canonical: '/projekty-a-vyzvy' },
};

const projects = [
  {
    deadline: '21. 01. 2026',
    tag: 'Aktuální · technologie',
    title: 'Komplexní filtrační soustava — voda v pohybu a v rovnováze',
    body:
      'Vícestupňová filtrační soustava, která zajišťuje dlouhodobě stabilní kvalitu vody, a zároveň slouží jako vzdělávací ukázka principů jejího čištění. Filtrace zahrnuje mechanickou, biologickou i UV stupeň — každý se stane součástí výkladu o tom, jak voda zůstává čistá v přírodě i v akváriu.',
    image: '/assets/images/akvarium.jpeg',
    why: 'Stabilní voda = zdravá zvířata. A vzdělávací nástroj o tom, jak voda funguje v krajině.',
  },
  {
    deadline: '19. 05. 2025',
    tag: 'V realizaci · vzdělávání',
    title: 'Naučná stezka „Voda v pohybu"',
    body:
      'Vybudování naučné stezky v areálu s cílem přiblížit význam vody, její koloběh a ochranu. Stezka je celoročně přístupná a doplňuje vnitřní expozice o pohled na místní biotop. Každá zastávka představí konkrétní téma — od mokřadu přes rybník po pramen.',
    image: '/assets/images/stezka.jpeg',
    why: 'Stezka funguje jako prodloužená učebnice — návštěvník si může projít téma vlastním tempem.',
  },
  {
    deadline: '19. 05. 2025',
    tag: 'V realizaci · welfare',
    title: 'Dokončení terária pro krokodýla nilského',
    body:
      'Kompletní dokončení expozice s důrazem na welfare a vzdělávací hodnotu prostoru. Terárium splní moderní standardy chovu — vyhřívání, vodní plocha, místa k odpočinku, prostor pro pozorování bez stresu zvířete. Doprovodné panely vysvětlí biologii druhu i kontext jeho ochrany.',
    image: '/assets/images/krokodyl.jpeg',
    why: 'Welfare zvířete na prvním místě. A důstojný prostor pro vysvětlení, proč se krokodýl chrání.',
  },
];

export default function ProjektyPage() {
  return (
    <>
      <PageHero
        eyebrow="Co u nás roste"
        title={
          <>
            Projekty, na kterých <em>právě</em>
            <br />
            pracujeme.
          </>
        }
        description="Investujeme do infrastruktury, která zlepšuje welfare zvířat, vzdělávací hodnotu areálu a stabilitu provozu. U každého projektu hledáme partnery — sponzory, dárce i dobrovolníky."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'Projekty a výzvy' }]}
      />

      {/* Detailní projekty s obrázkem a alternujícím layoutem */}
      <section className="section section--paper">
        <div className="container" style={{ display: 'grid', gap: 'clamp(3rem, 6vw, 5rem)' }}>
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`feature${i % 2 === 1 ? ' feature--rev' : ''}`}
              data-reveal
            >
              <div className={`feature__visual${i === 1 ? ' feature__visual--blob' : ''}`}>
                <Image src={p.image} alt={p.title} width={700} height={840} sizes="(min-width: 880px) 50vw, 100vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <span className="eyebrow">{p.tag}</span>
                <h2 className="h-display">{p.title}</h2>
                <p style={{ color: 'var(--muted)', fontSize: '.9rem', letterSpacing: '.04em', marginTop: '.6rem' }}>
                  Termín · {p.deadline}
                </p>
                <p className="lead" style={{ marginTop: '1.2rem' }}>
                  {p.body}
                </p>
                <p className="notice" style={{ marginTop: '1.2rem' }}>
                  <strong>Proč to děláme:</strong> {p.why}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Princip transparence */}
      <section className="section section--cream">
        <div className="container">
          <div className="prose" data-reveal>
            <span className="eyebrow">Jak projekty financujeme</span>
            <h2>Transparentní cesta od <em>záměru</em> k realizaci.</h2>
            <p>
              U každého projektu pracujeme s reálným rozpočtem a otevřeným harmonogramem. Sponzoři a partneři vidí, kam jejich příspěvek míří — od nákupu materiálu po výstupní reportáž z dokončené expozice.
            </p>
            <ul>
              <li><strong>Vlastní zdroje</strong> — část projektu pokryjeme z příjmů programů a vlastní práce.</li>
              <li><strong>Sponzorské partnerství</strong> — větší investice řešíme s firemními partnery, kteří získají dlouhodobou viditelnost.</li>
              <li><strong>Drobné dary</strong> — průběžně se skládají na konkrétní položky (filtrace, krmení, materiál).</li>
              <li><strong>Dotace a granty</strong> — pravidelně se ucházíme o vhodné výzvy v oblasti vzdělávání a ochrany přírody.</li>
            </ul>
            <p>Chcete vstoupit do konkrétního projektu? <a href="/sponzoring">Podívejte se na možnosti partnerství</a> nebo nám napište.</p>
          </div>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Chcete pomoct s konkrétním <em>projektem?</em>
          </>
        }
        description="Nabízíme možnost adopce expozice nebo partnerství u jednotlivých iniciativ."
        actions={[
          { label: 'Sponzoring', href: '/sponzoring' },
          { label: 'Spojit se', href: '/kontakt', variant: 'ghost' },
        ]}
      />
    </>
  );
}
