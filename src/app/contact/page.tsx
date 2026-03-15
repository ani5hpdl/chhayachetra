import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Chhayachhetra VTC | Free Japan Employment Counselling — Kathmandu',
  description: 'Contact Chhayachhetra VTC for free Japan employment counselling. Visit us at Town Planning, Samakhusi, Kathmandu. Call +977 976-1292444 or email chhayachhetra.vtc@gmail.com.',
  keywords: ['contact Chhayachhetra VTC','Japan job counselling Nepal','Japan employment inquiry Kathmandu'],
  alternates: { canonical: 'https://chhayachhetra.com.np/contact' },
};

const localSchema = {
  '@context': 'https://schema.org', '@type': 'LocalBusiness',
  name: 'Chhayachhetra Vocational Training & Consulting Pvt. Ltd.',
  telephone: '+977-976-1292444', email: 'chhayachhetra.vtc@gmail.com',
  address: { '@type': 'PostalAddress', streetAddress: 'Town Planning, Samakhusi', addressLocality: 'Kathmandu', addressCountry: 'NP' },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '18:00' }],
};

const IMG_HERO = 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1200&q=80';

const contactItems = [
  { label:'Address', value:'Town Planning, Samakhusi\nKathmandu, Nepal',       href:'https://maps.google.com/?q=Samakhusi+Kathmandu', external: true  },
  { label:'Phone',   value:'+977 976-1292444',                                  href:'tel:+9779761292444',                              external: false },
  { label:'Email',   value:'chhayachhetra.vtc@gmail.com',                       href:'mailto:chhayachhetra.vtc@gmail.com',               external: false },
  { label:'Hours',   value:'Sunday – Friday\n9:00 AM – 6:00 PM',                href: null,                                             external: false },
];

const expectItems = [
  '30–45 minute session with a Japan employment advisor',
  'Honest eligibility assessment for your chosen sector',
  'Complete process and timeline walkthrough',
  'Transparent cost breakdown — no surprises later',
  'Open Q&A — bring all your questions',
];

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Navbar />
      <main style={{ overflowX: 'hidden' }}>

        {/* ═══════════════════════════════════════
            HERO — split layout
        ═══════════════════════════════════════ */}
        <section className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '55vh', background: '#F4F7FC', paddingTop: '72px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(48px,7vw,88px) clamp(24px,5vw,72px) clamp(48px,7vw,88px) clamp(24px,7vw,96px)' }}>
            <nav style={{ marginBottom: '24px' }}>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '8px', alignItems: 'center', fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                <li><Link href="/" style={{ color: '#5E7491', textDecoration: 'none' }}>Home</Link></li>
                <li style={{ color: '#D0DCF0' }}>/</li>
                <li style={{ color: '#1B3A6B' }}>Contact</li>
              </ol>
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '2px', background: '#1B3A6B' }} />
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#1B3A6B' }}>Get in Touch</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.8vw,3.4rem)', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.10, letterSpacing: '-0.02em', marginBottom: '20px' }}>
              Book Your Free<br /><span style={{ color: '#1B3A6B' }}>Japan Counselling</span><br /><span style={{ color: '#1B3A6B' }}>Session</span>
            </h1>
            <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.80, maxWidth: '400px', marginBottom: '32px' }}>
              No commitment. No fees. Just an honest conversation about your Japan employment options, eligibility, and next steps.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {['Free of Charge','No Obligation','Same-Day Response','Walk-ins Welcome'].map(t => (
                <span key={t} style={{ fontSize: '11px', fontWeight: 600, padding: '5px 12px', background: '#EEF3FB', color: '#1B3A6B', borderRadius: '4px', border: '1px solid rgba(27,58,107,0.15)' }}>{t}</span>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block" style={{ minHeight: '55vh' }}>
            <Image src={IMG_HERO} alt="Mount Fuji Japan" fill style={{ objectFit: 'cover', objectPosition: 'center 60%' }} priority unoptimized />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #F4F7FC 0%, transparent 18%)' }} />
            <div style={{ position: 'absolute', bottom: '40px', left: '24px', background: 'rgba(11,24,45,0.88)', backdropFilter: 'blur(12px)', padding: '16px 20px', borderRadius: '4px', borderLeft: '3px solid #4A7FC1', maxWidth: '220px' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4A7FC1', marginBottom: '6px' }}>Response time</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', lineHeight: 1.5 }}>We respond to all inquiries within 24 hours</div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            TRUST BAR
        ═══════════════════════════════════════ */}
        <div style={{ background: '#1B3A6B', padding: '16px 0' }}>
          <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Free Counselling — No Obligation','Walk-ins Welcome Sun–Fri','Respond Within 24 Hours','Honest & Transparent Advice'].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 28px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                <span style={{ color: '#6BA3D6', fontWeight: 700, fontSize: '12px' }}>✓</span>
                <span style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.80)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════
            MAIN CONTENT — info + form
        ═══════════════════════════════════════ */}
        <section style={{ background: '#F4F7FC', padding: '80px 0' }}>
          <div className="wrap">
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 lg:gap-16 items-start">

              {/* LEFT — contact info */}
              <div>

                {/* Contact details card */}
                <div style={{ background: '#fff', border: '1px solid #E8EFF9', borderRadius: '8px', overflow: 'hidden', marginBottom: '16px' }}>
                  <div style={{ background: '#0D1B2A', padding: '20px 24px' }}>
                    <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#4A7FC1', margin: '0 0 4px' }}>Our Office</p>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: '#EEF3FB', margin: 0 }}>Chhayachhetra VTC</h2>
                  </div>
                  <div>
                    {contactItems.map(({ label, value, href, external }, i) => (
                      <div key={label} style={{ display: 'grid', gridTemplateColumns: '76px 1fr', gap: '12px', padding: '14px 20px', background: i % 2 === 0 ? '#F9FAFB' : '#fff', borderBottom: '1px solid #E8EFF9' }}>
                        <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#9CA3AF', paddingTop: '2px' }}>{label}</span>
                        {href ? (
                          <a href={href} target={external ? '_blank' : undefined} rel="noopener noreferrer"
                            style={{ fontSize: '13px', color: '#1B3A6B', fontWeight: 500, textDecoration: 'none', whiteSpace: 'pre-line', lineHeight: 1.6 }}>
                            {value}
                          </a>
                        ) : (
                          <span style={{ fontSize: '13px', color: '#374151', fontWeight: 500, whiteSpace: 'pre-line', lineHeight: 1.6 }}>{value}</span>
                        )}
                      </div>
                    ))}
                    <div style={{ padding: '16px 20px', background: '#fff' }}>
                      <a href="https://maps.google.com/?q=Samakhusi+Kathmandu" target="_blank" rel="noopener noreferrer"
                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', background: '#EEF3FB', color: '#1B3A6B', padding: '10px', fontWeight: 700, fontSize: '11px', letterSpacing: '0.10em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '4px', border: '1px solid rgba(27,58,107,0.15)' }}>
                        Open in Google Maps →
                      </a>
                    </div>
                  </div>
                </div>

                {/* What to expect card */}
                <div style={{ background: '#0D1B2A', borderRadius: '8px', overflow: 'hidden' }}>
                  <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(74,127,193,0.15)' }}>
                    <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#4A7FC1', margin: '0 0 4px' }}>Free Counselling Session</p>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, color: '#EEF3FB', margin: 0 }}>What to Expect</h3>
                  </div>
                  <div style={{ padding: '20px 24px' }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {expectItems.map(item => (
                        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '12px', color: 'rgba(238,243,251,0.60)', lineHeight: 1.65 }}>
                          <span style={{ color: '#4A7FC1', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid rgba(74,127,193,0.15)', fontSize: '11px', color: 'rgba(238,243,251,0.35)', textAlign: 'center', letterSpacing: '0.04em' }}>
                      Session duration: 30–45 minutes · Completely free
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT — form */}
              <ContactForm />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            QUICK CONTACT STRIP
        ═══════════════════════════════════════ */}
        <div style={{ background: '#fff', borderTop: '1px solid #E8EFF9', borderBottom: '1px solid #E8EFF9', padding: '40px 0' }}>
          <div className="wrap">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { method:'Call Us',  detail:'+977 976-1292444',            sub:'Sun–Fri, 9am–6pm',      href:'tel:+9779761292444' },
                { method:'Email Us', detail:'chhayachhetra.vtc@gmail.com', sub:'Reply within 24 hours', href:'mailto:chhayachhetra.vtc@gmail.com' },
                { method:'Visit Us', detail:'Samakhusi, Kathmandu',        sub:'Walk-ins welcome',      href:'https://maps.google.com/?q=Samakhusi+Kathmandu' },
              ].map(c => (
                <a key={c.method} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '20px 24px', background: '#F4F7FC', borderRadius: '6px', border: '1px solid #E8EFF9', textDecoration: 'none' }}>
                  <div style={{ width: '44px', height: '44px', background: '#1B3A6B', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: '18px' }}>{c.method === 'Call Us' ? '📞' : c.method === 'Email Us' ? '✉️' : '📍'}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '3px' }}>{c.method}</div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: '#0D1B2A', marginBottom: '2px' }}>{c.detail}</div>
                    <div style={{ fontSize: '11px', color: '#5E7491' }}>{c.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════
            GOOGLE MAP EMBED
        ═══════════════════════════════════════ */}
        <section style={{ background: '#0D1B2A', padding: '64px 0 0' }}>
          <div className="wrap" style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ width: '28px', height: '2px', background: '#4A7FC1' }} />
                  <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#4A7FC1' }}>Find Us</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, color: '#EEF3FB', margin: 0, lineHeight: 1.1 }}>
                  Town Planning, Samakhusi<br />Kathmandu, Nepal
                </h2>
              </div>
              <a
                href="https://maps.google.com/?q=Chhayachhetra+Vocational+Training+Consulting+Samakhusi+Kathmandu"
                target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#4A7FC1', textDecoration: 'none', borderBottom: '1.5px solid rgba(74,127,193,0.40)', paddingBottom: '2px', whiteSpace: 'nowrap' }}
              >
                Open in Google Maps →
              </a>
            </div>
          </div>

          {/* Map embed — full width, no side padding */}
          <div style={{ position: 'relative', width: '100%', height: '440px', overflow: 'hidden' }}>
            {/* Overlay bar at top to blend with dark section */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '32px', background: 'linear-gradient(to bottom, #0D1B2A, transparent)', zIndex: 1, pointerEvents: 'none' }} />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.0056089716695!2d85.3175093!3d27.727259800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19251f5f0f6f%3A0xfd8f3c0313291081!2sChhayachhetra%20Vocational%20Training%20%26%20Consulting%20Pvt.%20Ltd.!5e1!3m2!1sen!2snp!4v1773547206191!5m2!1sen!2snp"
              width="100%"
              height="440"
              style={{ border: 0, display: 'block', filter: 'grayscale(15%) contrast(1.05)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chhayachhetra VTC location — Samakhusi, Kathmandu"
            />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}