import type { Metadata } from 'next';
import { CTABanner } from '@/components/CTABanner';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Návštěvní řád',
  description:
    'Návštěvní řád vodní miniZOO Baška — pravidla pro pobyt v areálu, zákazy, odpovědnosti, bezpečnost a welfare zvířat. Před návštěvou si prosím pozorně přečtěte.',
  alternates: { canonical: '/navstevni-rad' },
};

export default function NavstevniRadPage() {
  return (
    <>
      <PageHero
        eyebrow="Pravidla pobytu"
        title={
          <>
            Návštěvní <em>řád</em>
          </>
        }
        description="Aby si návštěvu užili všichni — návštěvníci i naši obyvatelé. Před příchodem si prosím pozorně přečtěte následující body."
        breadcrumbs={[{ label: 'Domů', href: '/' }, { label: 'Návštěvní řád' }]}
      />

      <section className="section section--paper">
        <div className="container">
          <div className="prose" data-reveal>
            <h2>Základní pravidla</h2>
            <ol>
              <li>Vstup je možný pouze v předem stanovených termínech v rámci výukových programů.</li>
              <li>Hosté přicházejí s mírným předstihem. Prohlídky začínají v celé hodiny.</li>
              <li>Restaurace Penzionu BAŠKA VODA CZ je dostupná od 14:00.</li>
              <li>Všichni návštěvníci se podřizují pokynům průvodců a personálu.</li>
            </ol>

            <h2>Co je v areálu zakázáno</h2>
            <ul>
              <li><strong>Krmení zvířat</strong> mimo organizované krmení v rámci programu.</li>
              <li><strong>Klepání</strong> na skla akvárií a terárií — vyplašené zvíře se může poranit.</li>
              <li><strong>Fotografování s bleskem</strong> — blesk plaší zvířata, zejména plazy.</li>
              <li><strong>Manipulace</strong> se zvířaty, vybavením, technologií nebo dekoracemi.</li>
              <li>Vstup s <strong>vlastními domácími zvířaty</strong>.</li>
              <li>Vlastní jídlo a nápoje v expozicích.</li>
              <li>Velké kufry, ostré předměty a nářadí v prostorách.</li>
            </ul>

            <h2>Odpovědnosti</h2>
            <ul>
              <li>Děti mohou být v areálu pouze v doprovodu dospělé osoby, která za ně nese plnou odpovědnost.</li>
              <li>Provozovatel neodpovídá za věci, které návštěvníci neodložili obsluze.</li>
              <li>Porušení pravidel může vést k ukončení prohlídky <strong>bez nároku na vrácení vstupného</strong>.</li>
              <li>V mimořádných situacích je nutné poslouchat pokyny personálu.</li>
              <li>V případě úrazu nebo zdravotního problému neprodleně kontaktujte průvodce.</li>
            </ul>

            <h2>Welfare zvířat — proč ta pravidla</h2>
            <p>
              Zákazy nejsou administrativa, ale ochrana — pro vás i pro naše zvířata. Krokodýli, arapaimy a další druhy reagují citlivě na hluk, světlo i náhlé pohyby. Stresované zvíře přestane jíst, špatně se hojí a v nejhorším případě si může ublížit. Pravidla pomáhají, aby zvířata zůstala zdravá a vy jste je viděli v jejich přirozeném chování.
            </p>

            <hr />
            <p>
              <strong>Děkujeme</strong>, že nám pomáháte chránit zvířata i příjemnou atmosféru v areálu.
            </p>
          </div>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Připraveni přijít na <em>program?</em>
          </>
        }
        description="Pravidla čteme rádi všichni. Na zbytek vás těšíme my i naši obyvatelé."
        actions={[
          { label: 'Rezervovat', href: '/kontakt' },
          { label: 'Ceník', href: '/vyukovy-program-voda-v-pohybu', variant: 'ghost' },
        ]}
      />
    </>
  );
}
