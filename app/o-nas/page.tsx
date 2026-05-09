import Image from 'next/image';
import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';
import { BookIcon, CalendarIcon, ClockIcon, DropIcon } from '@/components/icons';

export const metadata: Metadata = {
  title: 'O nás',
  description: 'Vodní miniZOO Baška vznikla 14. března 2025 jako neziskové vzdělávací zařízení. Otevíráme ekologická témata srozumitelně a poutavě.',
  alternates: { canonical: '/o-nas' },
};

export default function ONasPage() {
  return (
    <>
      <PageHero
        eyebrow="Naše organizace"
        title={<>Otevíráme svět <em>vody</em> srozumitelně.</>}
        description="Vodní miniZOO Baška je nezisková organizace zaměřená na vzdělávání o vodě, vodních ekosystémech a ochraně přírody. Vznikla 14. března 2025 a navazuje na osmiletou historii projektu."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'O nás' }]}
      />

      <section className="section section--paper">
        <div className="container feature">
          <div className="feature__visual" data-reveal>
            <Image src="/assets/images/expozice.jpeg" alt="Pohled do interiéru expozice" width={700} height={840} sizes="(min-width: 880px) 50vw, 100vw" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div data-reveal>
            <span className="eyebrow">Příběh</span>
            <h2 className="h-display">
              Od jediného kajmana k <em>velkému</em> vodnímu světu.
            </h2>
            <p className="lead" style={{ marginTop: '1.2rem' }}>
              Projekt začal v roce 2017 přijetím prvního zvířete — kajmana brýlového. Postupně přibývali krokodýli nilští, exotické ryby a další obyvatelé. V roce 2020 byla zahájena stavba nového zázemí s velkoobjemovými akvárii. Investice do roku 2024 překročila 5,5 milionu Kč.
            </p>
            <ul className="facts" style={{ marginTop: '2rem' }}>
              <li><ClockIcon /><div><strong>2017</strong><span>Přijetí prvního zvířete</span></div></li>
              <li><BookIcon /><div><strong>2020</strong><span>Stavba nového zázemí</span></div></li>
              <li><CalendarIcon /><div><strong>14. 3. 2025</strong><span>Vznik z. s.</span></div></li>
              <li><DropIcon /><div><strong>5,5 mil. Kč</strong><span>Investováno do roku 2024</span></div></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container">
          <div className="prose" data-reveal>
            <span className="eyebrow">Mise &amp; cíle</span>
            <h2>Otevírat ekologická témata <em>srozumitelným</em> a poutavým způsobem.</h2>
            <p>Pracujeme s vzdělávacími programy zaměřenými na vodu a vodní ekosystémy. Naše expozice slouží jako živé učebnice — návštěvníci si témata neodvozují z teorie, ale doslova „si je sahají".</p>
            <h3>Naše hlavní cíle</h3>
            <ul>
              <li>Rozvoj kvalitního vzdělávání o vodě a ekosystémech</li>
              <li>Vytváření metodicky propracovaných programů</li>
              <li>Budování odborného realizačního týmu</li>
              <li>Využívání expozic jako vzdělávacích nástrojů</li>
            </ul>
            <h3>Co u nás najdete</h3>
            <ul>
              <li>Velkoobjemová akvária s exotickými rybami</li>
              <li>Venkovní biotopy a přírodní rybníky</li>
              <li>Celoročně přístupná naučná stezka</li>
              <li>Komentované prohlídky s odborným výkladem</li>
            </ul>
            <hr />
            <h3>Právní údaje</h3>
            <p>
              <strong>vodní miniZOO Baška z. s.</strong>
              <br />
              Sídlo: Baška 538, 739 01 Baška
              <br />
              IČ: 230 64 293 · DIČ: CZ23064293
              <br />
              Předsedkyně: Monika Zvonek Zavadilová
              <br />
              Spolek registrovaný u Krajského soudu v Ostravě
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title={<>Chcete nás podpořit nebo se <em>zapojit?</em></>}
        description="Naše práce stojí na lidech — dárcích, sponzorech i dobrovolnících. Každá pomoc se počítá."
        actions={[
          { label: 'Možnosti podpory', href: '/podpora' },
          { label: 'Spojit se', href: '/kontakt', variant: 'ghost' },
        ]}
      />
    </>
  );
}
