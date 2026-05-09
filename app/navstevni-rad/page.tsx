import type { Metadata } from 'next';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Návštěvní řád',
  description: 'Návštěvní řád vodní miniZOO Baška — pravidla pro pobyt v areálu, zákazy, odpovědnosti a bezpečnost.',
  alternates: { canonical: '/navstevni-rad' },
};

export default function NavstevniRadPage() {
  return (
    <>
      <PageHero
        eyebrow="Pravidla pobytu"
        title={<>Návštěvní <em>řád</em></>}
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
              <li>Restaurace je dostupná od 14:00.</li>
              <li>Všichni návštěvníci se podřizují pokynům průvodců a personálu.</li>
            </ol>

            <h2>Co je v areálu zakázáno</h2>
            <ul>
              <li>Krmení zvířat (mimo organizované krmení v rámci programu)</li>
              <li>Klepání na skla akvárií a terárií</li>
              <li>Fotografování s bleskem</li>
              <li>Manipulace se zvířaty nebo vybavením</li>
              <li>Vstup s vlastními domácími zvířaty</li>
              <li>Vlastní jídlo a nápoje v expozicích</li>
              <li>Velké kufry, ostré předměty a nářadí v prostorách</li>
            </ul>

            <h2>Odpovědnosti</h2>
            <ul>
              <li>Děti mohou být v areálu pouze v doprovodu dospělé osoby, která za ně nese odpovědnost.</li>
              <li>Provozovatel neodpovídá za věci neodložené obsluze.</li>
              <li>Porušení pravidel může vést k ukončení prohlídky bez nároku na vrácení vstupného.</li>
              <li>V mimořádných situacích je nutné poslouchat pokyny personálu.</li>
            </ul>

            <hr />
            <p><strong>Děkujeme</strong>, že nám pomáháte chránit zvířata i příjemnou atmosféru v areálu.</p>
          </div>
        </div>
      </section>
    </>
  );
}
