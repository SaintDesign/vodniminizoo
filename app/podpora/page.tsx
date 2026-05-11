import Link from 'next/link';
import type { Metadata } from 'next';
import { podporaImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Podpora',
  description: 'Podpořte vodní miniZOO Baška — adopce, finanční dary, sponzoring nebo dobrovolnictví. Každý příspěvek, malý i velký, pomáhá zlepšovat podmínky pro naše zvířata.',
  alternates: { canonical: '/podpora' },
};

export default function PodporaPage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Podpora</h1>
        </header>

        <div className="prose">
          <p>
            Vodní miniZOO by bez laskavé pomoci lidí jako jste vy nemohla dělat to, co dělá. Každý příspěvek — malý i velký — pomáhá zlepšovat podmínky pro naše zvířecí svěřence, rozšiřovat chovatelské zázemí a pořádat programy, které přibližují přírodu dětem i dospělým.
          </p>

          <figure style={{ margin: '2rem 0' }} data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={podporaImages[0]} alt="Podpora areálu" style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
          </figure>

          <p>Možností, jak nás podpořit, je hned několik:</p>
          <ul>
            <li>
              <strong>Adopcí</strong> se stanete symbolickým rodičem některého ze zvířat a pomůžete mu přímo.
            </li>
            <li>
              <strong>Darem</strong>, finančním či materiálním, přispějete tam, kde je právě potřeba nejvíc.
            </li>
            <li>
              <strong>Sponzoringem</strong> jako jednotlivec nebo firma pomůžete dlouhodobě — a my vaši podporu s radostí veřejně poděkujeme.
            </li>
            <li>
              <strong>Dobrovolnictvím</strong> můžete přiložit ruku k dílu osobně — pomoci s péčí o zvířata, údržbou areálu, vzdělávacími programy či pořádáním akcí. Každá hodina vašeho času má pro nás velkou hodnotu.
            </li>
          </ul>

          <figure style={{ margin: '2rem 0' }} data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={podporaImages[1]} alt="Areál" style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
          </figure>

          <p style={{ fontStyle: 'italic', color: 'var(--color-rose)', textAlign: 'center', marginTop: '2rem' }}>
            Každá pomoc se počítá. A každá nese kus dobré vůle, která nás posouvá dál.
          </p>

          <div className="btn-row" style={{ marginTop: '2rem' }}>
            <Link className="btn-rose" href="/kontakt">Adopce</Link>
            <Link className="btn-rose" href="/dary">Dary</Link>
            <Link className="btn-rose" href="/sponzoring">Sponzoring</Link>
          </div>

          <figure style={{ margin: '2rem 0' }} data-reveal>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={podporaImages[2]} alt="Detail areálu" style={{ width: '100%', height: 'auto', borderRadius: 4 }} />
          </figure>

          <hr />

          <h2>Provozovatel</h2>
          <p style={{ textAlign: 'center' }}>
            {siteConfig.legal.company}
            <br />
            Sídlo: {siteConfig.legal.address}
            <br />
            IČ: {siteConfig.legal.ico}
            <br />
            DIČ: {siteConfig.legal.dic}
            <br />
            Právní forma: {siteConfig.legal.form}
            <br />
            {siteConfig.legal.registry}
            <br />
            {siteConfig.legal.body}
            <br />
            {siteConfig.legal.actsAlone}
          </p>
        </div>
      </div>
    </section>
  );
}
