import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Ceník',
  description: 'Ceník vstupů na program Svět vody (40 minut, So-Ne) a vzdělávací program Voda v pohybu pro skupiny a školy (60 minut, Po-Pá dopoledne).',
  alternates: { canonical: '/vyukovy-program-voda-v-pohybu' },
};

export default function CenikPage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Ceník</h1>
        </header>

        <div className="prose">
          <h2 data-reveal>Veřejnost</h2>
          <h3 style={{ textAlign: 'center', color: 'var(--color-rose)' }}>Program Svět vody</h3>
          <p>
            <strong>Sobota:</strong> v 15:00, 16:00 a 17:00.<br />
            <strong>Neděle:</strong> v 15:00, 16:00 a 17:00.
          </p>
          <p>Restaurace otevřena od 14:00.</p>

          <h4 style={{ textAlign: 'center' }}>Ceník programu Svět vody — 40 minut</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0', maxWidth: '500px', marginInline: 'auto' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-line)' }}>
                <td style={{ padding: '.6rem 1rem' }}>Dospělý</td>
                <td style={{ padding: '.6rem 1rem', textAlign: 'right', color: 'var(--color-rose)', fontWeight: 600 }}>120 Kč</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-line)' }}>
                <td style={{ padding: '.6rem 1rem' }}>Děti od 1 roku — 15 let</td>
                <td style={{ padding: '.6rem 1rem', textAlign: 'right', color: 'var(--color-rose)', fontWeight: 600 }}>95 Kč</td>
              </tr>
              <tr>
                <td style={{ padding: '.6rem 1rem' }}>Senioři 65+ a ZTP/ZTP+P</td>
                <td style={{ padding: '.6rem 1rem', textAlign: 'right', color: 'var(--color-rose)', fontWeight: 600 }}>95 Kč</td>
              </tr>
            </tbody>
          </table>

          <p>Platbu je možné provést v hotovosti, nebo pohodlně pomocí QR kódu.</p>

          <h3>Vstup pouze s průvodcem</h3>
          <ul>
            <li>Kapacita prohlídek je omezena, doporučujeme předchozí telefonickou rezervaci.</li>
            <li>V případě naplnění kapacity mají přednost rezervace.</li>
            <li>Zvolte prosím vhodné oblečení a obuv.</li>
            <li>Účastí na prohlídce návštěvníci souhlasí s návštěvním řádem zařízení.</li>
            <li>Z provozních nebo bezpečnostních důvodů může dojít ke změně termínu prohlídky.</li>
            <li>Vhodné pro dospělé, děti již od 2 měsíců, pro zdravotně znevýhodněné (není bezbariérové).</li>
          </ul>

          <h3>Rezervace a dotazy</h3>
          <p>
            ✉ <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>
            <br />
            ✆ <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
          </p>
          <p style={{ fontSize: '.85rem', color: 'var(--color-text)', textAlign: 'right' }}>VP/PR/12026</p>

          <hr />

          <h2 data-reveal>Organizace, skupiny a školy</h2>
          <h3 style={{ textAlign: 'center', color: 'var(--color-rose)' }}>Program Voda v pohybu</h3>
          <p>
            <strong>Pondělí — Pátek:</strong> v dopoledních hodinách, po předchozí závazné rezervaci.
          </p>

          <h4 style={{ textAlign: 'center' }}>Ceník program Voda v pohybu — 60 minut</h4>
          <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0', maxWidth: '500px', marginInline: 'auto' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--color-line)' }}>
                <td style={{ padding: '.6rem 1rem' }}>Dítě</td>
                <td style={{ padding: '.6rem 1rem', textAlign: 'right', color: 'var(--color-rose)', fontWeight: 600 }}>120 Kč</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-line)' }}>
                <td style={{ padding: '.6rem 1rem' }}>Dospělý</td>
                <td style={{ padding: '.6rem 1rem', textAlign: 'right', color: 'var(--color-rose)', fontWeight: 600 }}>150 Kč</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--color-line)' }}>
                <td style={{ padding: '.6rem 1rem' }}>Senioři 65+ a ZTP/ZTP+P</td>
                <td style={{ padding: '.6rem 1rem', textAlign: 'right', color: 'var(--color-rose)', fontWeight: 600 }}>120 Kč</td>
              </tr>
              <tr>
                <td style={{ padding: '.6rem 1rem' }}>Pedagogický doprovod (k 10 dětem)</td>
                <td style={{ padding: '.6rem 1rem', textAlign: 'right', color: 'var(--color-rose)', fontWeight: 600 }}>zdarma</td>
              </tr>
            </tbody>
          </table>

          <p>Platbu je možné provést v hotovosti, na fakturu s úhradou předem, nebo pohodlně pomocí QR kódu.</p>

          <p>Pro školy, školky a organizované skupiny nabízíme strukturované vzdělávací programy zaměřené na:</p>
          <ul>
            <li>ekologii a ochranu přírody,</li>
            <li>životní prostředí a vodní ekosystémy,</li>
            <li>chov a biologii vybraných druhů.</li>
          </ul>
          <p>Tyto programy jsou poskytovány jako samostatná vzdělávací služba a jsou zpoplatněny dle rozsahu a náročnosti.</p>
          <p>Programy realizujeme převážně v týdnu v dopoledních hodinách po předchozí telefonické závazné rezervaci.</p>
          <p>Maximální počet na jeden program je 80 účastníků.</p>

          <h3>Verze s občerstvením / bez občerstvení</h3>
          <p>
            Pro verzi bez občerstvení účtujeme 200 Kč na úklid areálu a ekologickou likvidaci odpadu. Prohlídky s občerstvením tuto službu mají zdarma.
          </p>
        </div>
      </div>
    </section>
  );
}
