import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Pravidla ochrany soukromí',
  description: 'Zásady zpracování osobních údajů (GDPR) vodní miniZOO Baška z. s.',
  alternates: { canonical: '/pravidla-ochrany-soukromi' },
};

export default function GdprPage() {
  return (
    <section className="section section--paper">
      <div className="container">
        <header className="page-heading" data-reveal>
          <h1>Pravidla ochrany soukromí</h1>
        </header>

        <div className="prose">
          <p>
            <strong>{siteConfig.legal.company}</strong>
            <br />
            Sídlo: {siteConfig.legal.address}
            <br />
            IČO: 23064293
            <br />
            E-mail: <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>
            <br />
            Tel.: <a href={siteConfig.contact.phoneHref}>{siteConfig.contact.phone}</a>
            <br />
            Web: www.vodniminizoo.cz
          </p>

          <h2>Úvodní ustanovení</h2>
          <p>
            Tato pravidla popisují, jak spolek vodní miniZOO Baška z. s. (dále jen „Správce") zpracovává osobní údaje návštěvníků, dárců, dobrovolníků, partnerů, škol, organizací a dalších osob, které s námi přicházejí do kontaktu.
          </p>
          <p>Zpracování osobních údajů probíhá v souladu s:</p>
          <ul>
            <li>Nařízením (EU) 2016/679 (GDPR),</li>
            <li>zákonem č. 110/2019 Sb., o zpracování osobních údajů,</li>
            <li>a dalšími právními předpisy České republiky.</li>
          </ul>

          <h2>Účely zpracování osobních údajů</h2>
          <p>Osobní údaje zpracováváme pouze v rozsahu nezbytném pro zajištění našich aktivit:</p>
          <p>
            <strong>Organizace a evidence vzdělávacích programů a prohlídek</strong> (např. jméno školy, organizace, kontaktní osoba, telefon, e-mail).
          </p>
          <p>
            Zveřejňování článků a fotodokumentace z akcí a návštěv v rámci environmentální výchovy, vzdělávání a osvěty probíhá výhradně se souhlasem dotčených osob nebo zástupců organizací.
          </p>
          <p>
            U zveřejněných článků může být uveden název zařízení, IČO, odkaz na webové stránky či logo, pokud s tím daná organizace výslovně souhlasila.
          </p>
          <p>
            Součástí uděleného souhlasu je rovněž možnost zveřejnění fotografií a schváleného článku (nebo jeho části) na sociálních sítích provozovaných spolkem, zejména na platformách Facebook a Instagram. V tomto rozsahu může být uvedena zmínka o subjektu či organizaci, která se akce zúčastnila, vždy však v souladu s poskytnutým souhlasem a s ohledem na ochranu osobních údajů.
          </p>
          <p>
            <strong>Komunikace s dárci a sponzory</strong>, vedení účetnictví a plnění zákonných povinností (např. vystavení potvrzení o daru, vedení účetních dokladů).
          </p>
          <p>
            <strong>Soutěže a marketingové akce</strong> — např. slosování o zážitkový pobyt, kde účastník vyplňuje své jméno, příjmení, adresu, telefon a e-mail. Údaje jsou použity pouze k organizaci soutěže a oznámení výherce.
          </p>
          <p>
            <strong>Bezpečnost osob a majetku</strong> — areál je monitorován kamerovým systémem bez záznamu, sloužícím pouze k okamžitému dohledu a prevenci škod.
          </p>
          <p>
            <strong>Dobrovolnická spolupráce a smluvní vztahy</strong> — vedení kontaktů dobrovolníků, osobních údajů potřebných pro dohody o výkonu dobrovolnické činnosti.
          </p>

          <h2>Rozsah zpracovávaných údajů</h2>
          <p>Podle účelu mohou být zpracovávány zejména tyto údaje:</p>
          <ul>
            <li>jméno, příjmení, titul</li>
            <li>název a IČO organizace, funkce</li>
            <li>adresa, telefon, e-mail</li>
            <li>případně fotografie či videozáznam se souhlasem účastníků</li>
            <li>údaje nezbytné pro účetnictví (např. dary, platby)</li>
            <li>údaje uvedené ve formuláři pro soutěž</li>
          </ul>

          <h2>Právní základ zpracování</h2>
          <p>Zpracování probíhá na základě:</p>
          <ul>
            <li>souhlasu subjektu údajů,</li>
            <li>plnění právní povinnosti (např. účetnictví, daně),</li>
            <li>oprávněného zájmu Správce (např. zajištění bezpečnosti, zveřejnění informací o veřejné akci),</li>
            <li>nebo plnění smluvního vztahu (např. darovací smlouvy, dohody o dobrovolnictví).</li>
          </ul>
          <p>
            Souhlas lze kdykoliv odvolat e-mailem na adresu <a href={siteConfig.contact.emailHref}>{siteConfig.contact.email}</a>.
          </p>

          <h2>Doba uchování osobních údajů</h2>
          <ul>
            <li>Údaje o dárcích, partnerech a účetní doklady: 10 let dle zákona o účetnictví.</li>
            <li>Údaje o účastnících programů, dobrovolnících a soutěžích: 3 roky od ukončení akce nebo soutěže.</li>
            <li>Fotografie a články zveřejněné se souhlasem: do odvolání souhlasu.</li>
          </ul>
          <p>Po uplynutí lhůt jsou údaje bezpečně vymazány nebo anonymizovány.</p>

          <h2>Příjemci osobních údajů</h2>
          <p>Osobní údaje nejsou předávány třetím osobám, s výjimkou subjektů, které pro nás zajišťují:</p>
          <ul>
            <li>provoz webových stránek,</li>
            <li>analytické služby,</li>
            <li>účetní a daňové zpracování,</li>
            <li>případné veřejné financování (např. poskytovatelé dotací, auditoři).</li>
          </ul>
          <p>Všichni zpracovatelé jsou vázáni smluvní povinností mlčenlivosti a zabezpečení údajů.</p>

          <h2>Práva subjektů údajů</h2>
          <p>Každá fyzická osoba má právo:</p>
          <ul>
            <li>požadovat přístup ke svým osobním údajům,</li>
            <li>žádat opravu nebo výmaz údajů,</li>
            <li>omezit zpracování,</li>
            <li>vznést námitku proti zpracování,</li>
            <li>na přenositelnost údajů,</li>
            <li>kdykoli odvolat souhlas,</li>
            <li>podat stížnost k Úřadu pro ochranu osobních údajů (www.uoou.cz).</li>
          </ul>

          <h2>Zabezpečení údajů</h2>
          <p>Správce přijal technická a organizační opatření k ochraně osobních údajů:</p>
          <ul>
            <li>přístup chráněn hesly a antivirovými systémy,</li>
            <li>zálohování a šifrování přístupových údajů,</li>
            <li>poučení osob, které s údaji pracují,</li>
            <li>omezený přístup k údajům pouze oprávněným osobám.</li>
          </ul>

          <h2>Zveřejňování fotografií a článků</h2>
          <p>
            Fotografie, jména nebo názvy organizací zveřejňujeme výhradně se souhlasem účastníků nebo jejich zástupců.
            <br />
            Souhlas je možné kdykoli písemně nebo elektronicky odvolat.
            <br />
            Po odvolání bude zveřejněný obsah odstraněn z webu a sociálních sítí v přiměřené době.
          </p>

          <h2>Závěrečná ustanovení</h2>
          <p>
            Správce je oprávněn tato pravidla průběžně aktualizovat v případě změn právních předpisů či způsobu zpracování údajů. Aktuální verze je vždy dostupná na webových stránkách www.vodniminizoo.cz.
          </p>
          <p>Tato pravidla ochrany osobních údajů nabývají účinnosti dnem 1. 10. 2025.</p>
        </div>
      </div>
    </section>
  );
}
