import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { cn } from '@/lib/utils';
import { Analytics } from "@vercel/analytics/next"
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const SITE_URL = 'https://docs.lumierelabs.xyz';

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  ],
  colorScheme: 'dark light',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    template: '%s | Lumière Docs',
    default: 'Lumière Docs — The Ultimate Discord Utility',
  },

  description:
    'Official documentation for Lumière. Explore features, configuration guides, moderation logs, and advanced utility tools.',

  keywords: [
    'Discord bot',
    'Lumière',
    'moderation',
    'discord utility',
    'bot documentation',
    'discord logging',
  ],

  authors: [{ name: 'Mahito', url: 'https://lumierelabs.xyz' }],
  creator: 'Lumière Labs',
  publisher: 'Lumière Labs',
  applicationName: 'Lumière Docs',
  category: 'technology',
  generator: 'Next.js',

  // Canonical URL — this prevents duplicate-content confusion across
  // trailing slashes, query params, or staging mirrors.
  alternates: {
    canonical: '/',
  },

  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Lumière Docs',
    title: 'Lumière Docs',
    description:
      'Official documentation for Lumière — the ultimate Discord utility bot.',
    images: [
      {
        url: '/og/docs/default',
        width: 1200,
        height: 630,
        alt: 'Lumière Docs',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Lumière Docs',
    description:
      'Official documentation for Lumière — the ultimate Discord utility bot.',
    images: ['/og/docs/default'],
    creator: '@_M4hito',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? '',
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  manifest: '/site.webmanifest',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Lumière Labs',
      url: 'https://lumierelabs.xyz',
      logo: `${SITE_URL}/favicon.ico`,
      sameAs: [
        'https://x.com/_M4hito',
        'https://github.com/Mahito0x',
        'https://discord.gg/RZP3A9dq7S',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Lumière Docs',
      description:
        'Official documentation for Lumière, a multi-purpose Discord bot.',
      publisher: { '@id': `${SITE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/search?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Lumière',
      applicationCategory: 'Discord Bot',
      operatingSystem: 'Discord',
      url: 'https://lumierelabs.xyz',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free tier available; Lumière Plus offers additional features.',
      },
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'TechArticle',
      '@id': `${SITE_URL}/#docs`,
      headline: 'Lumière Documentation',
      about: { '@type': 'SoftwareApplication', name: 'Lumière' },
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
  ],
};

function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ 
        __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') 
      }}
    />
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={cn('font-sans antialiased', inter.variable)}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
      </head>
      <body className="flex flex-col min-h-screen selection:bg-white/20">
        <RootProvider>
          {children}
          <Analytics/>
        </RootProvider>
      </body>
    </html>
  );
}