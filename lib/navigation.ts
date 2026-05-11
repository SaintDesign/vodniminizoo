export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const mainNav: NavItem[] = [
  { label: 'O nás', href: '/o-nas' },
  { label: 'Vzdělávací programy', href: '/vzdelavaci-programy' },
  { label: 'program Svět vody', href: '/program-svet-vody' },
  { label: 'Fotogalerie', href: '/fotogalerie' },
  { label: 'Ceník', href: '/vyukovy-program-voda-v-pohybu' },
  { label: 'Navštívili nás', href: '/navstivilinas' },
  { label: 'Soutěž', href: '/souteze' },
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
  {
    label: 'Více',
    href: '/projekty-a-vyzvy',
    children: [
      { label: 'Projekty a výzvy', href: '/projekty-a-vyzvy' },
      { label: 'Návštěvní řád', href: '/navstevni-rad' },
      { label: 'Pravidla ochrany soukromí', href: '/pravidla-ochrany-soukromi' },
      { label: 'Licence a povinné informace', href: '/licence-a-povinne-informace' },
    ],
  },
];

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
