import type { Metadata } from 'next';
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
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday'], opens: '09:00', closes: '17:00' }],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <Navbar />
      <main>
        <section style={{ background: 'linear-gradient(160deg,#F4F7FC 0%,#EEF3FB 100%)', paddingTop: '120px', paddingBottom: '64px' }}>
          <div className="wrap">
            <p className="eyebrow" style={{ marginBottom: '20px' }}>Get in Touch</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 600, color: '#0D0D0D', lineHeight: 1.05, marginBottom: '24px' }}>
              Book Your Free<br /><span style={{ color: '#1B3A6B' }}>Japan Counselling Session</span>
            </h1>
            <p style={{ fontSize: '17px', color: '#6E6E6E', lineHeight: 1.75, maxWidth: '540px' }}>
              No commitment. No fees. Just an honest conversation about your Japan employment options, eligibility, and next steps.
            </p>
          </div>
        </section>

        <section className="section" style={{ background: '#F4F7FC' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '64px', alignItems: 'start' }}>
              {/* Contact info */}
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: '#0D0D0D', marginBottom: '32px' }}>Our Office</h2>
                {[
                  { label: 'Address', value: 'Town Planning, Samakhusi\nKathmandu, Nepal', link: 'https://maps.google.com/?q=Samakhusi+Kathmandu' },
                  { label: 'Phone', value: '+977 976-1292444', link: 'tel:+9779761292444' },
                  { label: 'Email', value: 'chhayachhetra.vtc@gmail.com', link: 'mailto:chhayachhetra.vtc@gmail.com' },
                  { label: 'Office Hours', value: 'Sunday – Friday\n9:00 AM – 5:00 PM', link: null },
                ].map(item => (
                  <div key={item.label} style={{ display: 'flex', gap: '20px', marginBottom: '28px', paddingBottom: '28px', borderBottom: '1px solid rgba(13,13,13,0.08)' }}>
                    <div style={{ width: '40px', height: '40px', background: '#1B3A6B', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <div style={{ width: '12px', height: '12px', background: '#F4F7FC', borderRadius: '50%' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6E6E6E', marginBottom: '6px' }}>{item.label}</div>
                      {item.link ? (
                        <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ fontSize: '14px', color: '#0D0D0D', textDecoration: 'none', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{item.value}</a>
                      ) : (
                        <p style={{ fontSize: '14px', color: '#0D0D0D', margin: 0, whiteSpace: 'pre-line', lineHeight: 1.6 }}>{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}

                <div style={{ background: '#0D0D0D', padding: '28px' }}>
                  <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', color: '#1B3A6B', textTransform: 'uppercase', marginBottom: '10px' }}>What to Expect</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {['30–45 minute session with a Japan employment advisor','Honest eligibility assessment for your sector','Complete process and timeline explanation','Cost breakdown (no surprises later)','Q&A — bring all your questions'].map(i=>(
                      <li key={i} style={{ fontSize: '12px', color: 'rgba(248,246,241,0.55)', display: 'flex', gap: '8px', marginBottom: '8px', lineHeight: 1.5, alignItems: 'flex-start' }}>
                        <span style={{ color: '#1B3A6B', flexShrink: 0 }}>✓</span> {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Form */}
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
