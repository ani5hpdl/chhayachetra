import type { Metadata, Viewport } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['400','500','600','700'] });
const dmSans   = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['300','400','500','600'] });

const BASE = 'https://chhayachhetra.com.np';

export const viewport: Viewport = {
  themeColor: '#1B3A6B',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE),

  title: {
    default: 'Chhayachhetra VTC | Japan Employment & Vocational Training Center — Nepal',
    template: '%s | Chhayachhetra VTC Nepal',
  },

  description: 'Chhayachhetra VTC is Nepal\'s #1 Japan employment consultancy and vocational training center in Samakhusi, Kathmandu. Expert guidance for SSW visa, JLPT N5–N3, EPS-TOPIK, sector skill training, and guaranteed Japan job placement.',

  keywords: [
    // Core service keywords
    'Japan job Nepal', 'Japan employment Nepal', 'Nepal to Japan work visa',
    'SSW visa Nepal', 'Specified Skilled Worker Nepal', 'SSW visa Kathmandu',
    // Training keywords
    'JLPT training Nepal', 'JLPT N5 N4 N3 Kathmandu', 'Japanese language course Nepal',
    'EPS-TOPIK Nepal', 'EPS-TOPIK training Kathmandu', 'Korean language training Nepal',
    'vocational training Japan Nepal', 'SSW skills test preparation Nepal',
    // Agency/consultancy keywords
    'Japan manpower agency Nepal', 'Japan employment consultancy Kathmandu',
    'Japan recruitment agency Nepal', 'Japan work permit Nepal',
    // Brand keywords
    'Chhayachhetra VTC', 'Chhayachhetra Vocational Training',
    'Samakhusi Japan consultancy', 'Japan consultancy Kathmandu',
    // Location + intent keywords
    'Japan job Kathmandu 2025', 'Nepal Japan SSW 2025', 'work in Japan from Nepal',
  ],

  authors: [{ name: 'Chhayachhetra VTC', url: BASE }],
  creator: 'Chhayachhetra Vocational Training & Consulting Pvt. Ltd.',
  publisher: 'Chhayachhetra VTC',
  category: 'Employment & Education',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_NP',
    url: BASE,
    siteName: 'Chhayachhetra VTC',
    title: 'Chhayachhetra VTC | Japan Employment & Vocational Training from Nepal',
    description: 'Your trusted partner for Japan-bound employment from Nepal. SSW visa, JLPT, EPS-TOPIK, sector-specific skill training, and complete end-to-end Japan job placement support from Kathmandu.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chhayachhetra VTC — Nepal\'s Japan Employment & Vocational Training Center',
        type: 'image/png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Chhayachhetra VTC | Japan Employment & Vocational Training from Nepal',
    description: 'Nepal\'s trusted Japan employment consultancy. SSW visa, JLPT, EPS-TOPIK, skill training & placement from Kathmandu.',
    images: ['/og-image.png'],
  },

  alternates: {
    canonical: BASE,
    languages: {
      'en-NP': BASE,
    },
  },

  verification: {
    google: '55DeVWWRFT825lKYtz5vLMmWOO33_D5XYX8A_Uyivew',
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness', 'EmploymentAgency'],
  '@id': `${BASE}/#organization`,
  name: 'Chhayachhetra Vocational Training & Consulting Pvt. Ltd.',
  alternateName: ['Chhayachhetra VTC', 'Chhayachhetra Japan Consultancy', 'छायाक्षेत्र VTC'],
  url: BASE,
  logo: {
    '@type': 'ImageObject',
    url: `${BASE}/logo.png`,
    width: 400,
    height: 400,
  },
  image: `${BASE}/og-image.png`,
  description: 'Japan employment consultancy and vocational training center in Samakhusi, Kathmandu, Nepal. Expert SSW visa preparation, JLPT language training, EPS-TOPIK, and sector-specific skill development for Nepal to Japan employment.',
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Town Planning, Samakhusi',
    addressLocality: 'Kathmandu',
    addressRegion: 'Bagmati Province',
    postalCode: '44600',
    addressCountry: 'NP',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '27.7172',
    longitude: '85.3240',
  },
  telephone: '+977-976-1292444',
  email: 'chhayachhetra.vtc@gmail.com',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    { '@type': 'Country', name: 'Nepal' },
    { '@type': 'Country', name: 'Japan' },
  ],
  serviceType: [
    'Japan Employment Consultancy',
    'SSW Visa Preparation',
    'JLPT Language Training',
    'EPS-TOPIK Training',
    'Vocational Skills Training',
    'Pre-departure Orientation',
  ],
  hasMap: 'https://maps.google.com/?q=Samakhusi+Kathmandu',
  sameAs: [
    'https://www.facebook.com/chhayachhetravtc',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE}/#website`,
  url: BASE,
  name: 'Chhayachhetra VTC',
  description: 'Nepal\'s trusted Japan employment consultancy and vocational training center.',
  publisher: { '@id': `${BASE}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${BASE}/?s={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'en-NP',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </head>
      <body>{children}</body>
    </html>
  );
}