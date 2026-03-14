import type { Metadata, Viewport } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['400','500','600','700'] });
const dmSans   = DM_Sans({ subsets: ['latin'], variable: '--font-body', display: 'swap', weight: ['300','400','500','600'] });

const BASE = 'https://chhayachhetra.com.np';

export const viewport: Viewport = { themeColor: '#BC002D', width: 'device-width', initialScale: 1 };

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: 'Chhayachhetra VTC | Japan Employment & Vocational Training — Nepal',
    template: '%s | Chhayachhetra VTC Nepal',
  },
  description: 'Chhayachhetra VTC is Nepal\'s trusted Japan employment consultancy and vocational training center in Samakhusi, Kathmandu. SSW visa, JLPT, TOPIK, EPS-TOPIK, skill training and Japan job placement.',
  keywords: [
    'Japan job Nepal', 'SSW visa Nepal', 'Specified Skilled Worker Nepal',
    'Japan employment consultancy Kathmandu', 'JLPT training Nepal', 'EPS-TOPIK Nepal',
    'vocational training Japan Nepal', 'Japan manpower agency Nepal',
    'Chhayachhetra VTC', 'Samakhusi Japan consultancy',
    'Japan work visa Nepal 2024', 'Nepal to Japan job',
  ],
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website', locale: 'en_NP', url: BASE, siteName: 'Chhayachhetra VTC',
    title: 'Chhayachhetra VTC | Japan Employment & Vocational Training from Nepal',
    description: 'Your trusted partner for Japan-bound employment from Nepal. SSW visa, JLPT, sector training, and end-to-end placement support.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  alternates: { canonical: BASE },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': ['EducationalOrganization', 'LocalBusiness', 'EmploymentAgency'],
  name: 'Chhayachhetra Vocational Training & Consulting Pvt. Ltd.',
  alternateName: 'Chhayachhetra VTC',
  url: BASE,
  description: 'Japan employment consultancy and vocational training center in Kathmandu, Nepal. SSW visa preparation, JLPT training, and sector-specific skill development.',
  address: { '@type': 'PostalAddress', streetAddress: 'Town Planning, Samakhusi', addressLocality: 'Kathmandu', addressRegion: 'Bagmati', addressCountry: 'NP' },
  telephone: '+977-976-1292444',
  email: 'chhayachhetra.vtc@gmail.com',
  areaServed: [{ '@type': 'Country', name: 'Nepal' }, { '@type': 'Country', name: 'Japan' }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
