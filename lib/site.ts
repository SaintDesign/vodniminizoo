export const siteConfig = {
  name: 'vodní miniZOO Baška',
  shortName: 'miniZOO Baška',
  description:
    'Vzdělávací zařízení v Baště s největším sladkovodním akváriem v regionu (41 000 l). Programy Voda v pohybu, Svět vody — pro školy, rodiny a skupiny.',
  url: 'https://www.vodniminizoo.cz',
  locale: 'cs_CZ',
  contact: {
    address: 'Baška 538, 739 01 Baška',
    phone: '+420 732 487 862',
    phoneHref: 'tel:+420732487862',
    email: 'info@vodniminizoo.cz',
    emailHref: 'mailto:info@vodniminizoo.cz',
    facebook: 'https://www.facebook.com/',
  },
  legal: {
    company: 'vodní miniZOO Baška z. s.',
    ico: '230 64 293',
    dic: 'CZ23064293',
    bankAccount: '131-3450970227 / 0100',
    bank: 'Komerční banka, a. s.',
    chair: 'Monika Zvonek Zavadilová',
    establishedAt: '14. března 2025',
  },
} as const;

export type SiteConfig = typeof siteConfig;
