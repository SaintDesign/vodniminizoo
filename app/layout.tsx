import type { Metadata, Viewport } from 'next';
import { Open_Sans, Playfair_Display } from 'next/font/google';
import { RevealEffects } from '@/components/RevealEffects';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { siteConfig } from '@/lib/site';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-playfair',
});

const openSans = Open_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-open-sans',
});

export const viewport: Viewport = {
  themeColor: '#c6739e',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: '/' },
  icons: { icon: '/assets/images/logo.png' },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: '/assets/images/akvarium.jpeg', width: 1200, height: 800, alt: siteConfig.name }],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs" className={`${playfair.variable} ${openSans.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body>
        <a className="skip-link" href="#main">Přeskočit na obsah</a>
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
