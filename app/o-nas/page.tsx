import Image from 'next/image';
import type { Metadata } from 'next';
import { oNasImages } from '@/lib/images';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'O nás',
  description: 'Příběh vodní miniZOO Baška — od prvního kajmana z roku 2017 po neziskovou organizaci založenou 14. března 2025. Mise, cíle a vize.',
  alternates: { canonical: '/o-nas' },
};

export default function ONasPage() {
  return (
    <>
      <section className="section section--paper">
        <div className="container">
          <header className="page-heading" data-reveal>
            <h1>O nás</h1>
          </header>

          <div className="prose">
            <div data-reveal>
              <h3 style={{ color: 'var(--color-rose)', textAlign: 'left' }}>Příběh vodní miniZOO Baška</h3>
              <p>
                Vodní miniZOO v Bašce je ideálním místem pro všechny milovníky zvířat a přírody. Nabízíme vám možnost prohlédnout si fascinující expozice krokodýlů, želv, exotických ryb, ale i přírodní biotopy s místní faunou a naučit se více o jejich životě. Přijďte a objevte krásy vodního světa s námi!
              </p>
            </div>

            <figure style={{ margin: '2rem 0' }} data-reveal>
              <Image
                src={oNasImages.hero}
                alt="Areál vodní miniZOO Baška"
                width={760}
                height={420}
                sizes="(min-width: 800px) 760px, 92vw"
                style={{ width: '100%', height: 'auto', borderRadius: 4 }}
                unoptimized
              />
            </figure>

            <p>
              Co dnes znáte jako vodní miniZOO Baška, začalo zcela nenápadně. V roce 2017 se do naší soukromé péče dostal první obyvatel — Kajman brýlový. Následovali další dva Krokodýli čelnatí, vodní želvy a později i nejrůznější druhy exotických ryb. Chovatelské nadšení rostlo, stejně jako počet zvířat — až přibyl i Krokodýl nilský.
            </p>
            <p>
              Stávající prostory začaly být nedostačující, a když přišla doba covidových omezení, rozhodli jsme se přistoupit k zásadnímu kroku — výstavbě nového zázemí. Dne 28. března 2020 se začalo s výkopy pro první akvárium o objemu 9 000 litrů, následovala výstavba terárií pro krokodýly a dalších akvárií pro exotické ryby.
            </p>
            <p>
              Zlom přišel s přivezením dvou Arapaim gigas z Maďarské ZOO — ryb, které vyžadovaly velký prostor. Začali jsme pro ně budovat akvárium o objemu 41 000 litrů a společně s ním i nové terárium pro Krokodýla nilského.
            </p>
            <p>
              Zvířata přitahovala zájem nejen dětí, ale i dospělých. Nejprve přicházeli jednotlivci, později celé skupiny — školy, školky, zdravotně znevýhodnění a další návštěvníci, kteří u nás nacházeli nejen podívanou, ale i poutavý výklad.
            </p>
            <p>
              Projekt byl financován především ze soukromých zdrojů majitelů a ze spolupráce se společností MONFI trend, s.r.o. Ke konci roku 2024 však už investice přesáhla 5,5 milionu Kč a k dokončení bylo potřeba dalších 1,5 milionu.
            </p>
            <p>
              A právě zde vznikla myšlenka dát celé činnosti trvalý a veřejně prospěšný rámec — aby bylo možné získávat prostředky i od dárců a sponzorů, a hlavně, aby bylo možné plnohodnotně rozvíjet vzdělávací činnost.
            </p>
            <p>
              Dne {siteConfig.legal.establishedAt} tak vznikla vodní miniZOO Baška z. s. — nezisková organizace, která si klade za cíl pokračovat v rozběhnuté činnosti, rozvíjet vzdělávací programy pro školy i veřejnost a budovat povědomí o důležitosti ochrany přírody, místních biotopů a živočichů, kteří jsou jejich součástí.
            </p>
            <p>
              Naším posláním je otevírat důležitá ekologická témata srozumitelným a poutavým způsobem — zábavně, interaktivně a s důrazem na vzdělání. Věříme, že největší sílu má zážitek, který člověk prožije na vlastní oči — a právě to vám chceme nabídnout.
            </p>

            <h2 data-reveal>Cíle a vize</h2>

            <h3>Hlavní cíle vodní miniZOO Baška</h3>
            <h4>Rozvíjet kvalitní environmentální vzdělávání zaměřené na vodu a vodní ekosystémy</h4>
            <p>
              Cílem vodní miniZOO Baška je systematicky vytvářet a realizovat kvalitně připravené vzdělávací programy zaměřené na význam vody, její koloběh, čištění a vztah k životnímu prostředí i člověku, a to formou názorných ukázek, aktivit a přímého zážitku.
            </p>

            <h4>Vytvářet a postupně rozšiřovat ucelené vzdělávací programy s metodickou oporou</h4>
            <p>
              Cílem je navazovat na ověřený program Voda v pohybu a postupně připravovat další vzdělávací programy, které budou:
            </p>
            <ul>
              <li>metodicky propracované</li>
              <li>přizpůsobené různým cílovým skupinám</li>
              <li>propojené s aktivitami a praktickými ukázkami</li>
              <li>realizovatelné vyškoleným personálem</li>
            </ul>

            <h4>Zajistit odborně připravený a vzdělaný realizační tým</h4>
            <p>Cílem je vybudovat stabilní tým lektorů a průvodců, kteří budou:</p>
            <ul>
              <li>odborně zaškoleni v jednotlivých programech</li>
              <li>schopni samostatně vést výuku, prohlídky i přednášky</li>
              <li>dlouhodobě se rozvíjet v oblasti environmentálního vzdělávání</li>
            </ul>

            <h4>Využívat expozice a technické prvky jako vzdělávací nástroje</h4>
            <p>
              Cílem je dokončit a využívat expozice, ubikace a technické prvky (např. otevřené a průhledné filtry, modely čištění vody, naučnou stezku) nikoli pouze jako výstavní prvek, ale jako aktivní vzdělávací pomůcku pro přímý výklad a praktické porozumění tématu vody.
            </p>

            <h3>Rozvojové a dlouhodobé cíle</h3>
            <h4>Rozšiřovat zázemí a pracovní podmínky pro vzdělávací činnost</h4>
            <p>
              Cílem je postupně zlepšovat zázemí pro zaměstnance a lektory tak, aby odpovídalo rostoucím nárokům na kvalitu výuky, přípravu programů a práci s návštěvníky.
            </p>

            <h4>Rozvíjet spolupráci s odborníky a praxí</h4>
            <p>
              Cílem je organizovat v období jaro–podzim odborné přednášky a setkání s externími odborníky, jejichž činnost přímo souvisí s tématy vody, přírody, ochrany životního prostředí a udržitelnosti, a rozšiřovat tak vzdělávací nabídku pro veřejnost.
            </p>

            <h4>Otevírat prostor pro další vzdělávací aktivity po dokončení expozice</h4>
            <p>
              Cílem je využít dokončení celé vzdělávací expozice jako základ pro vznik nových vzdělávacích formátů, programů a aktivit, které budou reagovat na aktuální potřeby škol, veřejnosti i odborné sféry.
            </p>

            <h3>Expozice nabízí:</h3>
            <ul>
              <li>velkoobjemová akvária s exotickými rybami a vodními plazy</li>
              <li>venkovní přírodní biotopy s možností krmení a přímé interakce</li>
              <li>celoročně přístupnou naučnou stezku, součást výukových programů</li>
              <li>poutavé výklady pro všechny věkové skupiny</li>
            </ul>

            <h2 data-reveal>Provozovatel zařízení</h2>
            <p>
              Provozovatelem zařízení vodní miniZOO Baška je spolek <strong>vodní miniZOO Baška z. s.</strong>, nezisková právnická osoba založená dle občanského zákoníku.
            </p>

            <h3>Identifikační údaje</h3>
            <ul>
              <li>Sídlo: {siteConfig.legal.address}</li>
              <li>IČ: {siteConfig.legal.ico}</li>
              <li>DIČ: {siteConfig.legal.dic}</li>
              <li>Právní forma: {siteConfig.legal.form}</li>
              <li>Zápis: {siteConfig.legal.registry}</li>
            </ul>

            <h3>Statutární orgán</h3>
            <p>Statutárním orgánem spolku je výbor.</p>

            <h3>Předsedkyně výboru</h3>
            <p>
              <strong>{siteConfig.legal.chair}</strong>
              <br />
              <em>(za spolek jedná ve všech záležitostech samostatně)</em>
            </p>

            <h2 data-reveal>Sponzoři</h2>
            <p><strong>Ing. Hana Faitová</strong> — Významný sponzor</p>
            <p>
              Staňte se naším partnerem! Chcete-li být umístěni v této sekci, neváhejte nás kontaktovat pro více informací o možnostech sponzoringu.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
