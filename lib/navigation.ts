export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: 'O nás', href: '/o-nas' },
  {
    label: 'Programy',
    href: '/vzdelavaci-programy',
    children: [
      { label: 'Vzdělávací programy', href: '/vzdelavaci-programy' },
      { label: 'Svět vody', href: '/program-svet-vody' },
      { label: 'Voda v pohybu — ceník', href: '/vyukovy-program-voda-v-pohybu' },
    ],
  },
  { label: 'Fotogalerie', href: '/fotogalerie' },
  { label: 'Projekty', href: '/projekty-a-vyzvy' },
  {
    label: 'Podpora',
    href: '/podpora',
    children: [
      { label: 'Možnosti podpory', href: '/podpora' },
      { label: 'Dary', href: '/dary' },
      { label: 'Sponzoring', href: '/sponzoring' },
    ],
  },
  { label: 'Kontakt', href: '/kontakt' },
];

export const footerLinks = {
  visit: [
    { label: 'Svět vody', href: '/program-svet-vody' },
    { label: 'Programy', href: '/vzdelavaci-programy' },
    { label: 'Ceník', href: '/vyukovy-program-voda-v-pohybu' },
    { label: 'Návštěvní řád', href: '/navstevni-rad' },
    { label: 'Fotogalerie', href: '/fotogalerie' },
  ],
  about: [
    { label: 'O nás', href: '/o-nas' },
    { label: 'Projekty a výzvy', href: '/projekty-a-vyzvy' },
    { label: 'Navštívili nás', href: '/navstivilinas' },
    { label: 'Soutěž', href: '/souteze' },
  ],
  support: [
    { label: 'Možnosti podpory', href: '/podpora' },
    { label: 'Dary', href: '/dary' },
    { label: 'Sponzoring', href: '/sponzoring' },
    { label: 'Kontakt', href: '/kontakt' },
  ],
} as const;

export const allRoutes = [
  '/',
  '/o-nas',
  '/vzdelavaci-programy',
  '/program-svet-vody',
  '/vyukovy-program-voda-v-pohybu',
  '/fotogalerie',
  '/navstivilinas',
  '/souteze',
  '/podpora',
  '/dary',
  '/sponzoring',
  '/kontakt',
  '/projekty-a-vyzvy',
  '/navstevni-rad',
  '/pravidla-ochrany-soukromi',
  '/licence-a-povinne-informace',
] as const;
