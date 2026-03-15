import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "About Chhayachhetra VTC | Nepal's Japan Employment Specialists",
  description: 'Learn about Chhayachhetra Vocational Training & Consulting Pvt. Ltd. — a government-registered Japan employment consultancy and vocational training center in Samakhusi, Kathmandu, Nepal.',
  alternates: { canonical: 'https://chhayachhetra.com.np/about' },
};

const IMG_HERO   = 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1600&q=85';
const IMG_FUJI   = 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1200&q=80';
const IMG_OFFICE = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80';
const IMG_TEAM   = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80';

const values = [
  { n:'01', title:'Honesty First',    desc:"We tell you the truth about Japan — the opportunities, challenges, costs, and realistic timelines. No false promises, ever." },
  { n:'02', title:'Legal & Ethical',  desc:'Every placement is fully legal, DOE-compliant, and through verified Japanese employers. We protect your rights at every step.' },
  { n:'03', title:'Quality Training', desc:"We don't cut corners. Your success in Japan depends on how well-prepared you are — so we prepare you properly, every time." },
  { n:'04', title:'Lifelong Support', desc:"Our relationship doesn't end when you board the plane. We're available to you even after you arrive and settle in Japan." },
];

const stats = [
  { value: '14',   label: 'Japan work sectors covered' },
  { value: '6–12', label: 'Months avg. placement time' },
  { value: 'N5–N3',label: 'JLPT levels trained' },
  { value: '100%', label: 'Transparent fee structure' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: 'hidden' }}>

        {/* ═══════════════════════════════════════
            HERO — split layout
        ═══════════════════════════════════════ */}
        <section className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '65vh', background: '#F4F7FC', paddingTop: '72px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(48px,7vw,88px) clamp(24px,5vw,72px) clamp(48px,7vw,88px) clamp(24px,7vw,96px)' }}>
            <nav style={{ marginBottom: '24px' }}>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '8px', alignItems: 'center', fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                <li><Link href="/" style={{ color: '#5E7491', textDecoration: 'none' }}>Home</Link></li>
                <li style={{ color: '#D0DCF0' }}>/</li>
                <li style={{ color: '#1B3A6B' }}>About</li>
              </ol>
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '2px', background: '#1B3A6B' }} />
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#1B3A6B' }}>About Us</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.8vw,3.4rem)', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.10, letterSpacing: '-0.02em', marginBottom: '20px' }}>
              Nepal's Trusted<br /><span style={{ color: '#1B3A6B' }}>Japan Employment</span><br /><span style={{ color: '#1B3A6B' }}>Partner</span>
            </h1>
            <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.80, maxWidth: '420px', marginBottom: '36px' }}>
              A government-registered vocational training center and employment consultancy specializing exclusively in Nepal-to-Japan employment — based in Samakhusi, Kathmandu.
            </p>
            {/* Trust chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
              {['Govt. Registered (DoFE)','Japan-Exclusive Focus','Samakhusi, Kathmandu','Est. 2020'].map(t => (
                <span key={t} style={{ fontSize: '11px', fontWeight: 600, padding: '5px 12px', background: '#EEF3FB', color: '#1B3A6B', borderRadius: '4px', border: '1px solid rgba(27,58,107,0.15)' }}>{t}</span>
              ))}
            </div>
            {/* Quick stats */}
            <div style={{ display: 'flex', gap: '0', borderTop: '1px solid rgba(27,58,107,0.12)', paddingTop: '28px', width: 'fit-content' }}>
              {[{ value:'14', label:'Sectors' },{ value:'6–12mo', label:'Avg. Placement' },{ value:'100%', label:'Transparent Fees' }].map((s, i) => (
                <div key={s.label} style={{ paddingRight: '24px', marginRight: '24px', borderRight: i < 2 ? '1px solid rgba(27,58,107,0.10)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: '#1B3A6B', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#5E7491', marginTop: '4px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block" style={{ minHeight: '65vh' }}>
            <Image src={IMG_HERO} alt="Japan street" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority unoptimized />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #F4F7FC 0%, transparent 18%)' }} />
            <div style={{ position: 'absolute', bottom: '40px', left: '24px', background: 'rgba(11,24,45,0.88)', backdropFilter: 'blur(12px)', padding: '16px 20px', borderRadius: '4px', borderLeft: '3px solid #4A7FC1', maxWidth: '220px' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4A7FC1', marginBottom: '6px' }}>Our mission</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', lineHeight: 1.5 }}>Prepare Nepali workers not just to go to Japan — but to succeed there</div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            TRUST BAR
        ═══════════════════════════════════════ */}
        <div style={{ background: '#1B3A6B', padding: '16px 0' }}>
          <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Department of Foreign Employment Registered','Japan SSW Visa Specialists','JLPT-Certified Language Instructors','500+ Japan Visa Applications Processed'].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 28px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                <span style={{ color: '#6BA3D6', fontWeight: 700, fontSize: '12px' }}>✓</span>
                <span style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.80)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════
            WHO WE ARE — 2-col editorial
        ═══════════════════════════════════════ */}
        <section style={{ background: '#fff', padding: '96px 0' }}>
          <div className="wrap">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

              {/* Left — text */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
                  <div style={{ width: '28px', height: '2px', background: '#1B3A6B' }} />
                  <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#1B3A6B' }}>Who We Are</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.1, marginBottom: '28px' }}>
                  Nepal's Dedicated<br />Japan Employment Center
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    "Chhayachhetra Vocational Training & Consulting Pvt. Ltd. is based in Town Planning, Samakhusi, Kathmandu. We are registered under Nepal's Department of Foreign Employment (DoFE) and operate as a licensed consulting agency and vocational school.",
                    "Our focus is narrow by design: we specialize exclusively in Nepal→Japan employment through Japan's Specified Skilled Worker (SSW) visa program. This single-country focus means every instructor, every curriculum, and every process is optimized for one destination — Japan.",
                    "We believe the best way to get Nepali workers to Japan safely and successfully is through genuine preparation — proper language training, real vocational skills, correct documentation, and honest counselling about what life in Japan is actually like.",
                  ].map((para, i) => (
                    <p key={i} style={{ fontSize: '14px', color: '#4A5568', lineHeight: 1.90, margin: 0 }}>{para}</p>
                  ))}
                </div>

                {/* Quote block */}
                <div style={{ marginTop: '40px', borderLeft: '3px solid #1B3A6B', paddingLeft: '24px' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: '#0D1B2A', lineHeight: 1.45, fontStyle: 'italic', margin: '0 0 10px' }}>
                    "We prepare Nepali workers not just to go to Japan — but to <span style={{ color: '#1B3A6B' }}>succeed</span> there."
                  </p>
                  <span style={{ fontSize: '11px', fontWeight: 600, color: '#5E7491', letterSpacing: '0.08em', textTransform: 'uppercase' }}>— Chhayachhetra VTC</span>
                </div>
              </div>

              {/* Right — stat grid + images */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* 2x2 stat grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(27,58,107,0.10)' }}>
                  {stats.map(s => (
                    <div key={s.label} style={{ background: '#F4F7FC', padding: '28px 24px' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 700, color: '#1B3A6B', lineHeight: 1, marginBottom: '6px' }}>{s.value}</div>
                      <div style={{ fontSize: '12px', color: '#5E7491', lineHeight: 1.5 }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Two small images */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', height: '200px' }}>
                  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
                    <Image src={IMG_OFFICE} alt="Our office" fill style={{ objectFit: 'cover' }} unoptimized />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,24,45,0.30)' }} />
                    <div style={{ position: 'absolute', bottom: '12px', left: '12px' }}>
                      <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'rgba(27,58,107,0.75)', padding: '3px 8px', borderRadius: '2px' }}>Our Office</span>
                    </div>
                  </div>
                  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
                    <Image src={IMG_TEAM} alt="Our team" fill style={{ objectFit: 'cover' }} unoptimized />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,24,45,0.30)' }} />
                    <div style={{ position: 'absolute', bottom: '12px', left: '12px' }}>
                      <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#fff', background: 'rgba(27,58,107,0.75)', padding: '3px 8px', borderRadius: '2px' }}>Our Team</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            VALUES — dark section
        ═══════════════════════════════════════ */}
        <section className="section" style={{ background: '#0D1B2A' }}>
          <div className="wrap">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-24">
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#4A7FC1', marginBottom: '12px' }}>What Drives Us</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, color: '#EEF3FB', lineHeight: 1.1, marginBottom: '20px' }}>Our Values</h2>
                <p style={{ fontSize: '13px', color: 'rgba(238,243,251,0.45)', lineHeight: 1.80 }}>
                  These principles guide every decision we make — from how we counsel candidates to how we process documentation.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(74,127,193,0.08)' }}>
                {values.map(v => (
                  <div key={v.n} style={{ background: '#0F2035', padding: '32px 28px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 700, color: '#4A7FC1', marginBottom: '14px', letterSpacing: '0.08em' }}>{v.n}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 700, color: '#EEF3FB', marginBottom: '10px' }}>{v.title}</h3>
                    <p style={{ fontSize: '13px', color: 'rgba(238,243,251,0.50)', lineHeight: 1.85, margin: 0 }}>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            LOCATION — map-style info block
        ═══════════════════════════════════════ */}
        <section style={{ background: '#F4F7FC', padding: '96px 0' }}>
          <div className="wrap">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ width: '28px', height: '2px', background: '#1B3A6B' }} />
                  <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#1B3A6B' }}>Find Us</span>
                </div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.1, marginBottom: '28px' }}>
                  Visit Our Office<br />in Kathmandu
                </h2>
                {/* Info rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0', border: '1px solid #E8EFF9', borderRadius: '6px', overflow: 'hidden', marginBottom: '28px' }}>
                  {[
                    { label: 'Address',   value: 'Town Planning, Samakhusi, Kathmandu, Nepal' },
                    { label: 'Phone',     value: '+977 976-1292444' },
                    { label: 'Email',     value: 'chhayachhetra.vtc@gmail.com' },
                    { label: 'Hours',     value: 'Sunday – Friday, 9:00 AM – 6:00 PM' },
                    { label: 'Closed',    value: 'Saturday & Public Holidays' },
                  ].map(({ label, value }, i, arr) => (
                    <div key={label} style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '16px', padding: '14px 20px', background: i % 2 === 0 ? '#F9FAFB' : '#fff', borderBottom: i < arr.length - 1 ? '1px solid #E8EFF9' : 'none' }}>
                      <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9CA3AF', paddingTop: '1px' }}>{label}</span>
                      <span style={{ fontSize: '13px', color: '#1F2937', fontWeight: 500 }}>{value}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <Link href="/contact" style={{ background: '#1B3A6B', color: '#fff', padding: '13px 28px', fontWeight: 700, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', border: '2px solid #2A5298', display: 'inline-block' }}>
                    Book Appointment →
                  </Link>
                  <a href="https://maps.google.com/?q=Samakhusi+Kathmandu" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: '#1B3A6B', padding: '11px 28px', fontWeight: 600, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', border: '1.5px solid rgba(27,58,107,0.30)', display: 'inline-block' }}>
                    Open in Maps
                  </a>
                </div>
              </div>

              {/* Right — image */}
              <div style={{ position: 'relative', height: '420px', borderRadius: '6px', overflow: 'hidden' }}>
                <Image src={IMG_HERO} alt="Kathmandu Nepal" fill style={{ objectFit: 'cover', objectPosition: 'center' }} unoptimized />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,24,45,0.35)' }} />
                <div style={{ position: 'absolute', top: '24px', right: '24px', background: 'rgba(11,24,45,0.85)', backdropFilter: 'blur(10px)', padding: '14px 18px', borderRadius: '4px', borderLeft: '2px solid #4A7FC1' }}>
                  <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FC1', marginBottom: '4px' }}>Location</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>Samakhusi, Kathmandu</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.55)', marginTop: '2px' }}>Bagmati Province, Nepal</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CTA
        ═══════════════════════════════════════ */}
        <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <Image src={IMG_FUJI} alt="Mount Fuji Japan" fill style={{ objectFit: 'cover', objectPosition: 'center 60%' }} unoptimized />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,18,38,0.82)' }} />
          </div>
          <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.30em', color: '#4A7FC1', marginBottom: '16px' }}>
              日本への第一歩 — FIRST STEP TO JAPAN
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.10, marginBottom: '16px' }}>
              Come Meet Us
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.60)', lineHeight: 1.80, maxWidth: '440px', margin: '0 auto 36px' }}>
              Town Planning, Samakhusi, Kathmandu. Open Sunday–Friday, 9am–6pm. Walk-ins welcome.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
              <Link href="/contact" style={{ background: '#1B3A6B', color: '#fff', padding: '16px 36px', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', border: '2px solid #2A5298', display: 'inline-block' }}>
                Get in Touch →
              </Link>
              <a href="tel:+9779761292444" style={{ background: 'transparent', color: 'rgba(255,255,255,0.75)', padding: '14px 32px', fontWeight: 600, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.18)', display: 'inline-block' }}>
                +977 976-1292444
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}