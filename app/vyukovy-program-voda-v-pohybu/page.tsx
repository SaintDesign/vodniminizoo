import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';
import { CalendarIcon, ClockIcon, GroupIcon } from '@/components/icons';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Voda v pohybu — ceník a rezervace',
  description: 'Program Voda v pohybu — délka 60 minut, kapacita 80 osob. Děti 120 Kč, dospělí 150 Kč, senioři 65+ a ZTP/ZTP+P 120 Kč. Pondělí–pátek dopoledne.',
  alternates: { canonical: '/vyukovy-program-voda-v-pohybu' },
};

export default function CenikPage() {
  return (
    <>
      <PageHero
        eyebrow="Ceník & rezervace"
        title={<>Voda v <em>pohybu</em> — 60 minut hlubokého ponoru.</>}
        description="Strukturovaný vzdělávací program zaměřený na ekologii a ochranu přírody, životní prostředí, vodní ekosystémy a biologii vybraných druhů."
        breadcrumbs={[
          { label: 'Domů', href: '/' },
          { label: 'Programy', href: '/vzdelavaci-programy' },
          { label: 'Voda v pohybu — ceník' },
        ]}
      />

      <section className="section section--paper">
        <div className="container">
          <div className="prose" data-reveal style={{ maxWidth: 'none' }}>
            <h2>Praktické informace</h2>
            <ul className="facts" style={{ margin: '1.5rem 0', maxWidth: 'none' }}>
              <li><ClockIcon /><div><strong>60 minut</strong><span>Délka programu</span></div></li>
              <li><CalendarIcon /><div><strong>Po — Pá dopoledne</strong><span>Po závazné rezervaci</span></div></li>
              <li><GroupIcon /><div><strong>Až 80 účastníků</strong><span>Maximální kapacita programu</span></div></li>
            </ul>

            <h3>Ceník vstupů</h3>
            <table className="price-table">
              <tbody>
                <tr><th>Dítě</th><td>120 Kč</td></tr>
                <tr><th>Dospělý</th><td>150 Kč</td></tr>
                <tr><th>Senior 65+ a ZTP/ZTP+P</th><td>120 Kč</td></tr>
                <tr><th>Pedagogický doprovod (na 10 dětí)</th><td>zdarma</td></tr>
              </tbody>
            </table>

            <p className="notice" style={{ marginTop: '1.5rem' }}>
              <strong>Doplňkový poplatek:</strong> Pro variantu programu bez občerstvení účtujeme 200 Kč na údržbu a ekologickou likvidaci odpadu. Programy s občerstvením tuto službu zahrnují zdarma.
            </p>

            <h3>Co program obsahuje</h3>
            <ul>
              <li>Komentovanou prohlídku vnitřní expozice (akvária, terária, krokodýli)</li>
              <li>Procházku venkovním okruhem a naučnou stezkou</li>
              <li>Setkání s vybranými druhy a možnost otázek odbornému průvodci</li>
              <li>Sezónně: krmení kaprů, „chytání" pstruha do ruky</li>
            </ul>

            <h3>Jak rezervovat</h3>
            <ol>
              <li>Vyberte si termín v dopoledních hodinách Po — Pá.</li>
              <li>
                Napište nám na <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a> nebo zavolejte na <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>.
              </li>
              <li>Potvrdíme dostupnost a zašleme závaznou rezervaci.</li>
            </ol>
          </div>
        </div>
      </section>

      <CTABanner
        title={<>Připraveni si <em>rezervovat?</em></>}
        description="Stačí jeden e-mail nebo telefonát — odepíšeme do dvou pracovních dnů."
        actions={[
          { label: siteConfig.contact.email, href: siteConfig.contact.emailHref },
          { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref, variant: 'ghost' },
        ]}
      />
    </>
  );
}
