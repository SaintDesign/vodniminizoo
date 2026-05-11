import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Návštěvní řád',
  description: 'Návštěvní řád vodní miniZOO Baška — pravidla pro pobyt v areálu, zákazy, odpovědnosti, bezpečnost.',
  alternates: { canonical: '/navstevni-rad' },
};

export default function NavstevniRadPage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Návštěvní řád</h1>
          <p>vodní miniZOO Baška</p>
        </header>

        <div className="prose">
          <ol>
            <li>
              <strong>Vstup do vodní miniZOO Baška je možný v předem stanovených termínech v rámci výukových programů s průvodcem.</strong>
            </li>
            <li>
              Prosíme hosty, aby na prohlídku, která začíná vždy v celou hodinu, dorazili s mírným předstihem.
            </li>
            <li>
              Naše restaurace je Vám k dispozici již od <strong>14:00</strong>, rádi Vás přivítáme i před začátkem prohlídky.
            </li>
            <li>
              Návštěvníci jsou povinni řídit se pokyny průvodce a personálu zařízení.
            </li>
            <li>
              <strong>Je zakázáno:</strong>
              <ul>
                <li>krmit zvířata,</li>
                <li>klepat na skla akvárií a terárií,</li>
                <li>používat blesk při fotografování,</li>
                <li>manipulovat se zvířaty nebo technickým vybavením,</li>
                <li>vnášet vlastní zvířata do prostor expozic.</li>
              </ul>
            </li>
            <li>
              Děti se mohou pohybovat v areálu pouze v doprovodu dospělé osoby, která za ně nese plnou odpovědnost.
            </li>
            <li>
              Z bezpečnostních a hygienických důvodů není dovoleno konzumovat vlastní jídlo a nápoje v prostorách expozic.
            </li>
            <li>
              Do prostor expozic je zakázáno vnášet objemná zavazadla, ostré předměty, nářadí a jiné věci, které by mohly ohrozit bezpečnost návštěvníků, zvířat nebo způsobit poškození expozic, technického vybavení či zařízení. Tyto předměty je návštěvník povinen odložit u obsluhy na místě k tomu určeném. Provozovatel nenese odpovědnost za věci, které nebyly řádně předány obsluze k uložení.
            </li>
            <li>
              V případě mimořádné situace jsou návštěvníci povinni řídit se pokyny personálu.
            </li>
            <li>
              Porušení návštěvního řádu může vést k okamžitému ukončení prohlídky bez nároku na vrácení vstupného.
            </li>
          </ol>

          <p style={{ marginTop: '2rem', fontStyle: 'italic', textAlign: 'center', color: 'var(--color-text)' }}>
            Tento návštěvní řád slouží k ochraně zvířat, návštěvníků a k zajištění plynulého provozu zařízení.
          </p>
        </div>
      </div>
    </section>
  );
}
