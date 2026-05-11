import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Licence a povinné informace',
  description: 'Vodní miniZOO Baška — trvalé zařízení pro chov a prezentaci volně žijících živočichů. Provozovatel, IČO, podmínky provozování.',
  alternates: { canonical: '/licence-a-povinne-informace' },
};

export default function LicencePage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Licence a povinné informace</h1>
        </header>

        <div className="prose">
          <p>
            Vodní miniZOO Baška je trvalé zařízení pro chov a prezentaci volně žijících živočichů, provozované za účelem vzdělávání, environmentální osvěty a poznávání vodních ekosystémů.
          </p>
          <p>
            Zařízení je posuzováno dle zákona č. 162/2003 Sb., o podmínkách provozování zoologických zahrad. Provozovatel zahájil kroky k získání licence k provozování zoologické zahrady u Ministerstva životního prostředí České republiky.
          </p>
          <p>
            <strong>Provozovatel:</strong> vodní miniZOO Baška z. s. <strong>IČO:</strong> 23064293 <strong>Sídlo:</strong> Baška 538, 739 01 Baška
          </p>
          <p>
            Zařízení je přístupné veřejnosti výhradně v rámci vzdělávacích programů s průvodcem, v organizovaných skupinách a za dodržení návštěvního řádu.
          </p>
          <p>Ochrana zvířat, jejich welfare a bezpečnost návštěvníků jsou pro provozovatele prioritou.</p>
        </div>
      </div>
    </section>
  );
}
