import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Projekty a výzvy',
  description: 'Aktuální projekty: Komplexní filtrační soustava, naučná stezka Voda v pohybu, dokončení terária pro krokodýla nilského.',
  alternates: { canonical: '/projekty-a-vyzvy' },
};

const projects = [
  {
    deadline: '21. 01. 2026',
    title: 'Komplexní filtrační soustava — voda v pohybu a v rovnováze',
    body: 'Vícestupňová filtrační soustava, která zajišťuje dlouhodobě stabilní kvalitu vody, a zároveň slouží jako vzdělávací ukázka principů jejího čištění.',
  },
  {
    deadline: '19. 05. 2025',
    title: 'Naučná stezka „Voda v pohybu"',
    body: 'Vybudování naučné stezky v areálu s cílem přiblížit význam vody, její koloběh a její ochranu. Stezka je celoročně přístupná.',
  },
  {
    deadline: '19. 05. 2025',
    title: 'Dokončení terária pro krokodýla nilského',
    body: 'Kompletní dokončení expozice s důrazem na welfare a vzdělávací hodnotu prostoru.',
  },
];

export default function ProjektyPage() {
  return (
    <>
      <PageHero
        eyebrow="Co u nás roste"
        title={<>Projekty, na kterých <em>právě</em> pracujeme.</>}
        description="Investujeme do infrastruktury, která zlepšuje welfare zvířat a vzdělávací hodnotu areálu."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'Projekty a výzvy' }]}
      />

      <section className="section section--paper">
        <div className="container">
          <div className="cards">
            {projects.map((p) => (
              <article key={p.title} className="card" data-reveal>
                <div className="card__body">
                  <span className="card__tag">Termín · {p.deadline}</span>
                  <h3 className="card__title">{p.title}</h3>
                  <p className="card__text">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title={<>Chcete pomoct s konkrétním <em>projektem?</em></>}
        description="Nabízíme možnost adopce expozice nebo partnerství u jednotlivých iniciativ."
        actions={[
          { label: 'Sponzoring', href: '/sponzoring' },
          { label: 'Spojit se', href: '/kontakt', variant: 'ghost' },
        ]}
      />
    </>
  );
}
