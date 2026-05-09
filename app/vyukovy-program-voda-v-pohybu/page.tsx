import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';
import { CalendarIcon, ClockIcon, GroupIcon } from '@/components/icons';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Voda v pohybu — ceník a rezervace',
  description:
    'Program Voda v pohybu — délka 60 minut, kapacita 80 osob. Děti 120 Kč, dospělí 150 Kč, senioři 65+ a ZTP/ZTP+P 120 Kč, pedagogický doprovod zdarma. Pondělí–pátek dopoledne.',
  alternates: { canonical: '/vyukovy-program-voda-v-pohybu' },
};

export default function CenikPage() {
  return (
    <>
      <PageHero
        eyebrow="Ceník & rezervace"
        title={
          <>
            Voda v <em>pohybu</em> — 60 minut
            <br />
            hlubokého ponoru.
          </>
        }
        description="Strukturovaný vzdělávací program zaměřený na ekologii a ochranu přírody, životní prostředí, vodní ekosystémy a biologii vybraných druhů. Přístupné dětem od MŠ po dospělé."
        breadcrumbs={[
          { label: 'Domů', href: '/' },
          { label: 'Programy', href: '/vzdelavaci-programy' },
          { label: 'Voda v pohybu — ceník' },
        ]}
      />

      <section className="section section--tight">
        <div className="container">
          <div className="info-bar" data-reveal>
            <div className="info-bar__cell">
              <span className="info-bar__label">Délka</span>
              <span className="info-bar__value">60 minut</span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">Termín</span>
              <span className="info-bar__value">Po — Pá dopoledne</span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">Kapacita</span>
              <span className="info-bar__value">až 80 osob</span>
            </div>
            <div className="info-bar__cell">
              <span className="info-bar__label">Vstupné od</span>
              <span className="info-bar__value">120 Kč / dítě</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--paper">
        <div className="container">
          <div className="prose" data-reveal style={{ maxWidth: 'none' }}>
            <span className="eyebrow">Praktické informace</span>
            <h2>Co potřebujete vědět <em>před rezervací.</em></h2>

            <ul className="facts" style={{ margin: '1.5rem 0', maxWidth: 'none' }}>
              <li>
                <ClockIcon />
                <div>
                  <strong>60 minut</strong>
                  <span>Délka programu</span>
                </div>
              </li>
              <li>
                <CalendarIcon />
                <div>
                  <strong>Po — Pá dopoledne</strong>
                  <span>Po závazné rezervaci</span>
                </div>
              </li>
              <li>
                <GroupIcon />
                <div>
                  <strong>Až 80 účastníků</strong>
                  <span>Maximální kapacita</span>
                </div>
              </li>
            </ul>

            <h3>Ceník vstupů</h3>
            <table className="price-table">
              <tbody>
                <tr>
                  <th>Dítě</th>
                  <td>120 Kč</td>
                </tr>
                <tr>
                  <th>Dospělý</th>
                  <td>150 Kč</td>
                </tr>
                <tr>
                  <th>Senior 65+ a ZTP/ZTP+P</th>
                  <td>120 Kč</td>
                </tr>
                <tr>
                  <th>Pedagogický doprovod (na 10 dětí)</th>
                  <td>zdarma</td>
                </tr>
              </tbody>
            </table>

            <p className="notice" style={{ marginTop: '1.5rem' }}>
              <strong>Doplňkový poplatek:</strong> Pro variantu programu bez občerstvení účtujeme 200 Kč na údržbu a ekologickou likvidaci odpadu. Programy s občerstvením tuto službu zahrnují zdarma.
            </p>

            <h3>Co program obsahuje</h3>
            <ul>
              <li>Komentovanou prohlídku vnitřní expozice — akvária, terária, krokodýli, vodní želvy</li>
              <li>Procházku venkovním okruhem a celoročně přístupnou naučnou stezkou</li>
              <li>Setkání s vybranými druhy a možnost otázek odbornému průvodci</li>
              <li>Sezónně: krmení kaprů, „chytání" pstruha do ruky, ukázka místní fauny rybníka</li>
              <li>Tematický výklad o vodě v krajině, koloběhu vody a ochraně sladké vody</li>
            </ul>

            <h3>Pro koho je program</h3>
            <ul>
              <li>Mateřské školy (přizpůsobená délka i jazyk výkladu)</li>
              <li>Základní školy (1. — 9. třída)</li>
              <li>Střední školy a gymnázia (s důrazem na biologii a ekologii)</li>
              <li>Rodiny s dětmi i dospělé skupiny</li>
              <li>Firemní teambuildingy a komunitní organizace</li>
            </ul>

            <h3>Jak rezervovat</h3>
            <ol>
              <li>Vyberte si termín v dopoledních hodinách Po — Pá.</li>
              <li>
                Napište nám na <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a> nebo zavolejte na <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>. Uveďte počet účastníků a věkovou skupinu.
              </li>
              <li>Potvrdíme dostupnost a zašleme závaznou rezervaci do 2 pracovních dnů.</li>
              <li>V den návštěvy přijeďte 10 minut před začátkem programu.</li>
            </ol>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--cream">
        <div className="container">
          <div data-reveal style={{ marginBottom: '2.5rem', textAlign: 'center', maxWidth: '60ch', marginInline: 'auto' }}>
            <span className="eyebrow" style={{ justifyContent: 'center' }}>Časté dotazy</span>
            <h2 className="h-display">
              Praktické <em>otázky.</em>
            </h2>
          </div>

          <div className="faq" data-reveal>
            <details>
              <summary>Můžu zrušit nebo přesunout rezervaci?</summary>
              <div className="faq__body">
                <p>Ano, do <strong>3 pracovních dnů před termínem</strong> zdarma. Pozdější změna nebo storno se posuzuje individuálně podle kapacity dalších termínů.</p>
              </div>
            </details>
            <details>
              <summary>Co si máme přinést?</summary>
              <div className="faq__body">
                <p>Pohodlné oblečení podle počasí — část programu probíhá venku. V zimě teplé oblečení, v létě pokrývku hlavy. Nic dalšího potřeba není.</p>
              </div>
            </details>
            <details>
              <summary>Můžeme přijít s vlastním jídlem?</summary>
              <div className="faq__body">
                <p>V expozicích vlastní jídlo a nápoje nejsou povolené. Po programu lze využít restaurace Penzionu BAŠKA VODA CZ (otevřena od 14:00) nebo si jídlo dát v okolí.</p>
              </div>
            </details>
            <details>
              <summary>Jak je to s parkováním?</summary>
              <div className="faq__body">
                <p>Parkování pro autobusy i osobní vozy je v obci Baška, několik minut chůze od areálu. Doporučujeme dorazit s předstihem.</p>
              </div>
            </details>
            <details>
              <summary>Vystavujete fakturu?</summary>
              <div className="faq__body">
                <p>Ano. Pro školy a organizace standardně fakturujeme s 14denní splatností. Při rezervaci uveďte fakturační údaje.</p>
              </div>
            </details>
            <details>
              <summary>Co když máme méně účastníků než minimum?</summary>
              <div className="faq__body">
                <p>Konkrétní minimum nemáme — domluvíme individuální rezervaci. Pro malé skupiny (do 10 osob) se cena chová stejně jako u větších.</p>
              </div>
            </details>
            <details>
              <summary>Je areál bezbariérový?</summary>
              <div className="faq__body">
                <p>Vnitřní expozice jsou přístupné pro vozíčkáře. Venkovní okruh má místa s nerovnoměrným terénem — doporučujeme zavolat dopředu, projdeme s vámi konkrétní možnosti.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Připraveni si <em>rezervovat?</em>
          </>
        }
        description="Stačí jeden e-mail nebo telefonát — odepíšeme do dvou pracovních dnů."
        actions={[
          { label: siteConfig.contact.email, href: siteConfig.contact.emailHref },
          { label: siteConfig.contact.phone, href: siteConfig.contact.phoneHref, variant: 'ghost' },
        ]}
      />
    </>
  );
}
