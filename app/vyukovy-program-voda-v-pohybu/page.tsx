import Image from 'next/image';
import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Ceník',
  description: 'Ceník vstupů — Program Svět vody (víkendy, 40 min) a vzdělávací program Voda v pohybu pro skupiny a školy (Po–Pá dopoledne, 60 min).',
  alternates: { canonical: '/vyukovy-program-voda-v-pohybu' },
};

export default function CenikPage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Ceník</h1>
        </header>

        <div className="cenik-cols">
          {/* LEVÝ SLOUPEC — Veřejnost */}
          <div className="cenik-col" data-reveal>
            <p><strong>Veřejnost</strong></p>
            <h3>Program Svět vody</h3>
            <p style={{ marginTop: '1.25rem' }}>
              <strong>Sobota:</strong> v 15:00, 16:00 a 17:00.
              <br />
              <strong>Neděle:</strong> v 15:00, 16:00 a 17:00.
            </p>
            <p style={{ marginTop: '1rem' }}>Restaurace otevřena od 14:00.</p>

            <hr />

            <h4>Ceník programu Svět vody &nbsp; 40 minut</h4>
            <div className="cenik-table">
              <div className="cenik-row"><strong>Dospělý</strong><span className="price">120 Kč</span></div>
              <div className="cenik-row"><strong>Děti od 1 roku -15 let</strong><span className="price">95 Kč</span></div>
              <div className="cenik-row"><strong>Senioři 65+ a ZTP/ZTP+P</strong><span className="price">95 kč</span></div>
            </div>

            <p style={{ marginTop: '1.25rem' }}>
              Platbu je možné provést v hotovosti, nebo pohodlně pomocí QR kodu.
            </p>

            <hr />

            <p style={{ marginTop: '1rem' }}>Vstup pouze s průvodcem</p>
            <p>
              Kapacita prohlídek je omezena, <strong>doporučujeme předchozí telefonickou rezervaci.</strong>
            </p>
            <p>V případě naplnění kapacity mají přednost rezervace.</p>
            <p>Zvolte prosím vhodné oblečení a obuv.</p>
            <p>
              Účastí na prohlídce návštěvníci souhlasí s návštěvním <a href="/navstevni-rad">řádem zařízení</a>.
            </p>
            <p>Z provozních nebo bezpečnostních důvodů může dojít ke změně termínu prohlídky.</p>
            <p>
              <strong>Vhodné pro dospělé, děti již od 2 měsíců, pro zdravotně znevýhodněné (není bezbariérové)</strong>
            </p>

            <p style={{ marginTop: '1.5rem' }}>
              Rezervace a dotazy:
              <br />
              ✉ <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>
              <br />
              📞 <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
            </p>

            <p style={{ marginTop: '2rem', fontSize: '.85rem', color: 'var(--color-text)' }}>VP/PR/12026</p>
          </div>

          {/* PRAVÝ SLOUPEC — Organizace, skupiny a školy */}
          <div className="cenik-col" data-reveal>
            <p><strong>Organizace, skupiny a školy</strong></p>
            <h3>Program Voda v pohybu</h3>
            <p style={{ marginTop: '1.25rem' }}>
              <strong>Pondělí - Pátek:</strong> v dopoledních hodinách, po předchozí závazné rezervaci
            </p>

            <hr />

            <h4>Ceník program Voda v pohybu &nbsp; 60 minut</h4>
            <div className="cenik-table">
              <div className="cenik-row"><strong>Dítě</strong><span className="price">120 Kč</span></div>
              <div className="cenik-row"><strong>Dospělý</strong><span className="price">150 Kč</span></div>
              <div className="cenik-row"><strong>Senioři 65+ a ZTP/ZTP+P</strong><span className="price">120 kč</span></div>
            </div>
            <p style={{ marginTop: '.5rem', fontSize: '.95rem' }}>
              (pedagogický doprovod <strong>zdarma</strong>/ k 10 dětem)
            </p>

            <p style={{ marginTop: '1.25rem' }}>
              Platbu je možné provést v hotovosti, na fakturu s uhradou předem, nebo pohodlně pomocí QR kodu.
            </p>

            <hr />

            <p>Pro školy, školky a organizované skupiny nabízíme strukturované vzdělávací programy zaměřené na:</p>
            <ul>
              <li>ekologii a ochranu přírody,</li>
              <li>životní prostředí a vodní ekosystémy,</li>
              <li>chov a biologii vybraných druhů.</li>
            </ul>
            <p>
              Tyto programy jsou poskytovány jako samostatná vzdělávací služba a jsou zpoplatněny dle rozsahu a náročnosti.
            </p>
            <p>
              Programy realizujeme převážně v týdnu v dopoledních hodinách po předchozí telefonické závazné rezervaci.
            </p>
            <p>Maximální počet na jeden program je 80 účastníků.</p>
            <p>Verze s občerstvením/ bez občerstvení.</p>
            <p>
              Pro verzi bez občerstvení účtujeme 200kč, na uklid areálu a ekologickou likvidaci odpadu.
              <br />
              Prohlídky s občerstvením tuto službu mají zdarma.
            </p>
          </div>
        </div>

        <div className="nove-koupite" data-reveal>
          <h3>Nově u nás koupíte</h3>
          <Image
            src="/assets/images/nove-koupite.jpeg"
            alt="Samolepka 16,- a Turistická známka 50,-"
            width={900}
            height={400}
            sizes="(min-width: 980px) 900px, 92vw"
          />
        </div>
      </div>
    </section>
  );
}
