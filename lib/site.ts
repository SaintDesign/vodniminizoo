export const siteConfig = {
  name: 'vodní miniZOO Baška',
  subtitle: 's restaurací a penzionem',
  description:
    'Vodní miniZOO Baška — vzdělávací zařízení pro chov a prezentaci volně žijících vodních živočichů. Komentované prohlídky pro veřejnost, školy i skupiny.',
  url: 'https://www.vodniminizoo.cz',
  locale: 'cs_CZ',
  hero: {
    title: 'Svět vody',
    schedule: 'Sobota - Neděle 15:00 - 16:00 - 17:00 hod',
    note: 'rezervujte si termín telefonicky',
  },
  contact: {
    company: 'vodní miniZOO Baška z.s.',
    address: 'Baška 538, 739 01 Baška',
    phone: '+420 732 487 862',
    phoneHref: 'tel:+420732487862',
    email: 'info@vodniminizoo.cz',
    emailHref: 'mailto:info@vodniminizoo.cz',
    facebook: 'https://www.facebook.com/',
    facebookLabel: '@facebookovástránka',
  },
  legal: {
    company: 'vodní miniZOO Baška z. s.',
    address: 'Baška 538, 739 01 Baška',
    ico: '230 64 293',
    dic: 'CZ23064293',
    form: 'spolek',
    registry: 'Zapsán ve spolkovém rejstříku vedeném Krajským soudem v Ostravě, oddíl L, vložka 21898',
    body: 'Statutární orgán: výbor',
    actsAlone: 'Za spolek jedná předsedkyně výboru samostatně.',
    chair: 'Monika Zvonek Zavadilová',
    bankAccount: '131-3450970227 / 0100',
    bank: 'Komerční banka, a. s.',
    establishedAt: '14. března 2025',
    copyrightLine: '© 2026 Kateřina Kocurková',
  },
} as const;

export type SiteConfig = typeof siteConfig;
