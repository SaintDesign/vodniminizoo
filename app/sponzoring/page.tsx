import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sponzoring',
  description: 'Sponzoring vodní miniZOO Baška — viditelné poděkování, spolupráce na konkrétních projektech, individuální benefity pro firmy.',
  alternates: { canonical: '/sponzoring' },
};

export default function SponzoringPage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Sponzoring</h1>
        </header>

        <div className="prose">
          <h2 data-reveal>Buďte s námi vidět a dělat dobré věci</h2>
          <p>
            Chcete podpořit smysluplný projekt, který má srdce, a zároveň zviditelnit svou firmu? Spojte své jméno s vodní miniZOO a staňte se naším partnerem.
          </p>
          <p>
            Sponzoring je pro nás důležitou součástí stability a rozvoje — umožňuje nám plánovat dopředu, tvořit nové expozice, vzdělávat veřejnost a pečovat o přírodní biotop kolem nás.
          </p>

          <h3>Co nabízíme sponzorům</h3>
          <ul>
            <li>Viditelné poděkování na našem webu, v prostorech miniZOO i na akcích</li>
            <li>Spolupráci na konkrétních projektech (např. stavba expozice, adopce areálu)</li>
            <li>Možnost individuálního domluvení benefitů (reklama, společné akce apod.)</li>
          </ul>

          <p style={{ marginTop: '2rem', color: 'var(--color-rose)', fontStyle: 'italic', textAlign: 'center' }}>
            Vaše podpora je pro nás závazek — a my ji vracíme otevřeností, vděčností a spoluprací.
          </p>

          <p className="center" style={{ marginTop: '2rem' }}>
            <Link href="/podpora" className="btn-rose" style={{ background: 'transparent', color: 'var(--color-rose)', boxShadow: 'inset 0 0 0 1px var(--color-rose)' }}>
              ZPĚT
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
