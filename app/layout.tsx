import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import { RevealEffects } from '@/components/RevealEffects';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { siteConfig } from '@/lib/site';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-fraunces',
});

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#0a2233',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Vzdělávací centrum vodních ekosystémů`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legal.company, url: siteConfig.url }],
  creator: siteConfig.legal.company,
  publisher: siteConfig.legal.company,
  keywords: [
    'vodní miniZOO Baška',
    'akvárium Baška',
    'vzdělávací programy',
    'arapaima gigas',
    'krokodýl nilský',
    'vodní ekosystémy',
    'Beskydy ZOO',
    'školní výlet Baška',
    'sladkovodní akvárium',
  ],
  alternates: { canonical: '/' },
  icons: { icon: '/assets/images/logo.png' },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Vzdělávací centrum vodních ekosystémů`,
    description: siteConfig.description,
    images: [{ url: '/assets/images/akvarium.jpeg', width: 1200, height: 800, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name}`,
    description: siteConfig.description,
    images: ['/assets/images/akvarium.jpeg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
};

const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Zoo',
  name: siteConfig.name,
  image: `${siteConfig.url}/assets/images/akvarium.jpeg`,
  description: siteConfig.description,
  url: siteConfig.url,
  telephone: siteConfig.contact.phone,
  email: siteConfig.contact.email,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Baška 538',
    addressLocality: 'Baška',
    postalCode: '739 01',
    addressCountry: 'CZ',
  },
  sameAs: [siteConfig.contact.facebook],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Přeskočit na obsah
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <RevealEffects />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
