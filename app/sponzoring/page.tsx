import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Sponzoring',
  description: 'Staňte se sponzorem smysluplného projektu se srdcem. Veřejné poděkování, spolupráce na konkrétních projektech, individuální dohody.',
  alternates: { canonical: '/sponzoring' },
};

export default function SponzoringPage() {
  return (
    <>
      <PageHero
        eyebrow="Pro firmy i jednotlivce"
        title={<>Smysluplný projekt <em>se srdcem.</em></>}
        description="Sponzorství je důležitou součástí naší stability a rozvoje — umožňuje nám plánovat dopředu, vytvářet nové expozice, vzdělávat veřejnost a pečovat o přírodní biotop kolem nás."
        breadcrumbs={[
          { label: 'Domů', href: '/' },
          { label: 'Podpora', href: '/podpora' },
          { label: 'Sponzoring' },
        ]}
      />

      <section className="section section--paper">
        <div className="container">
          <div data-reveal style={{ marginBottom: '2.5rem' }}>
            <span className="eyebrow">Co získáte</span>
            <h2 className="h-display">Tři benefity pro <em>partnery.</em></h2>
          </div>
          <div className="cards">
            <article className="card" data-reveal>
              <div className="card__body">
                <span className="card__tag">Viditelnost</span>
                <h3 className="card__title">Veřejné poděkování</h3>
                <p className="card__text">Viditelné poděkování na webu, přímo v areálu vodní miniZOO i na akcích, které pořádáme.</p>
              </div>
            </article>
            <article className="card" data-reveal>
              <div className="card__body">
                <span className="card__tag">Partnerství</span>
                <h3 className="card__title">Spolupráce na projektu</h3>
                <p className="card__text">Možnost partnerství u konkrétních iniciativ — budování expozic, adopce konkrétní části areálu, projektové spolupráce.</p>
              </div>
            </article>
            <article className="card" data-reveal>
              <div className="card__body">
                <span className="card__tag">Individuálně</span>
                <h3 className="card__title">Vlastní dohoda</h3>
                <p className="card__text">Otevřeni jsme i jiným formátům — propagaci, společným aktivitám, exkurzím pro vaše zaměstnance nebo klienty.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <CTABanner
        title={<>Promluvme si o <em>spolupráci.</em></>}
        description="Připravíme nabídku přesně podle toho, jak chcete být u našeho projektu vidět."
        actions={[
          { label: 'Kontaktovat', href: siteConfig.contact.emailHref },
          { label: 'Více kontaktů', href: '/kontakt', variant: 'ghost' },
        ]}
      />
    </>
  );
}
