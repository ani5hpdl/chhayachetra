import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Chhayachhetra VTC | Japan Employment & Vocational Training from Nepal',
  description: "Nepal's trusted Japan employment consultancy. SSW visa preparation, JLPT training, sector-specific vocational training, and complete Japan job placement support from Kathmandu.",
  alternates: { canonical: 'https://chhayachhetra.com.np' },
};

const stats = [
  { value: '14',    label: 'Work Sectors',    sub: 'SSW categories' },
  { value: '3–6',   label: 'Months Training', sub: 'Skill + language' },
  { value: 'N5–N3', label: 'JLPT Levels',     sub: 'Language training' },
  { value: '¥200K+',label: 'Monthly Salary',  sub: 'Entry-level avg.' },
];

const sectors = [
  { name: 'Construction',        icon: '🏗',  demand: 'High' },
  { name: 'Agriculture',         icon: '🌾',  demand: 'High' },
  { name: 'Nursing Care',        icon: '🏥',  demand: 'Very High' },
  { name: 'Food Manufacturing',  icon: '🍱',  demand: 'High' },
  { name: 'Hotel & Hospitality', icon: '🏨',  demand: 'Medium' },
  { name: 'Machine Parts',       icon: '⚙️',  demand: 'High' },
  { name: 'Shipbuilding',        icon: '🚢',  demand: 'Medium' },
  { name: 'Auto Repair',         icon: '🔧',  demand: 'High' },
];

// Clean, well-lit Japan images — no neon bleed
const IMG_TOKYO_DAY   = 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=1400&q=85'; // Tokyo skyline day
const IMG_FUJI        = 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1200&q=80'; // Mt Fuji
const IMG_STREET      = 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=900&q=80';  // Japan street
const IMG_WORKER      = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80';  // Construction
const IMG_TORII       = 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=900&q=80';  // Torii gates
const IMG_SAKURA      = 'https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1400&q=85'; // Sakura / Japan scenery

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: 'hidden' }}>

        {/* ═══════════════════════════════════════════════════
            HERO  —  split layout: left content / right image
        ═══════════════════════════════════════════════════ */}
        <section style={{
          minHeight: '100vh',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          background: '#F4F7FC',
          paddingTop: '72px', // navbar offset
        }}>

          {/* LEFT — content panel */}
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: 'clamp(48px,8vw,96px) clamp(24px,5vw,72px) clamp(48px,8vw,96px) clamp(24px,7vw,96px)',
            position: 'relative', zIndex: 1,
          }}>

            {/* Eyebrow */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
              <div style={{ width: '28px', height: '2px', background: '#1B3A6B' }} />
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#1B3A6B' }}>
                Nepal → Japan Specialists
              </span>
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
              fontWeight: 700,
              color: '#0D1B2A',
              lineHeight: 1.10,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
            }}>
              Your Gateway<br />
              to <span style={{ color: '#1B3A6B' }}>Working</span><br />
              <span style={{ color: '#1B3A6B' }}>in Japan</span><br />
              Starts Here.
            </h1>

            {/* Sub */}
            <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.80, maxWidth: '420px', marginBottom: '28px' }}>
              From vocational skill training and JLPT preparation to SSW visa processing and Japan job placement — complete end-to-end support from Kathmandu.
            </p>

            {/* Trust badges */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
              {['Govt. Registered', '14 Sectors', 'JLPT Certified', 'Full Visa Support'].map(b => (
                <span key={b} style={{
                  fontSize: '10px', fontWeight: 600, letterSpacing: '0.08em',
                  padding: '5px 12px', borderRadius: '2px',
                  background: '#E8EFF9', color: '#1B3A6B',
                  border: '1px solid rgba(27,58,107,0.15)',
                }}>{b}</span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '52px' }}>
              <Link href="/contact" style={{
                background: '#1B3A6B', color: '#fff',
                padding: '14px 28px', fontWeight: 700, fontSize: '11px',
                letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}>
                Free Counselling →
              </Link>
              <Link href="/process" style={{
                background: 'transparent', color: '#1B3A6B',
                border: '1.5px solid rgba(27,58,107,0.30)',
                padding: '14px 28px', fontWeight: 600, fontSize: '11px',
                letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
              }}>
                See the Process
              </Link>
            </div>

            {/* Stats row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,auto)', gap: '0', borderTop: '1px solid rgba(27,58,107,0.12)', paddingTop: '28px', width: 'fit-content' }}>
              {stats.map((s, i) => (
                <div key={s.label} style={{ paddingRight: '24px', marginRight: '24px', borderRight: i < stats.length - 1 ? '1px solid rgba(27,58,107,0.10)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: '#0D1B2A', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#2E3F55', marginTop: '4px', letterSpacing: '0.04em' }}>{s.label}</div>
                  <div style={{ fontSize: '9px', color: '#5E7491', marginTop: '2px' }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image mosaic */}
          <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
            {/* Main full image */}
            <Image
              src={IMG_TOKYO_DAY}
              alt="Tokyo Japan skyline"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              unoptimized
            />
            {/* Subtle left fade so it blends with content panel */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #F4F7FC 0%, transparent 18%)' }} />

            {/* Floating info card — bottom left of image */}
            <div style={{
              position: 'absolute', bottom: '40px', left: '24px',
              background: 'rgba(11,24,45,0.88)', backdropFilter: 'blur(12px)',
              padding: '16px 20px', borderRadius: '4px',
              borderLeft: '3px solid #4A7FC1',
              maxWidth: '220px',
            }}>
              <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4A7FC1', marginBottom: '6px' }}>Currently open</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', lineHeight: 1.5 }}>Japan SSW 2025 intake — accepting applications now</div>
            </div>

            {/* Japanese text watermark */}
            <div style={{
              position: 'absolute', top: '40px', right: '24px',
              fontSize: '11px', letterSpacing: '0.24em', color: 'rgba(255,255,255,0.50)',
              fontWeight: 500, writingMode: 'vertical-rl',
            }}>
              日本への第一歩
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            TRUST BAR
        ═══════════════════════════════════════════════════ */}
        <div style={{ background: '#1B3A6B', padding: '16px 0' }}>
          <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0' }}>
            {[
              { icon: '✓', text: 'Government Registered Consultancy' },
              { icon: '✓', text: 'DOE Compliant & Ethical Placement' },
              { icon: '✓', text: 'JLPT-Certified Language Instructors' },
              { icon: '✓', text: 'Direct Japan Employer Network' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 28px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                <span style={{ color: '#6BA3D6', fontWeight: 700, fontSize: '12px' }}>{item.icon}</span>
                <span style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.80)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════
            HOW IT WORKS  — clean numbered steps
        ═══════════════════════════════════════════════════ */}
        <section className="section" style={{ background: '#0D1B2A' }}>
          <div className="wrap">
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', marginBottom: '56px' }}>
              <div>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#4A7FC1', marginBottom: '12px' }}>Your Journey</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, color: '#EEF3FB', lineHeight: 1.1 }}>Kathmandu to Japan<br />in 5 Clear Steps</h2>
              </div>
              <Link href="/process" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A7FC1', textDecoration: 'none', borderBottom: '1px solid rgba(74,127,193,0.40)', paddingBottom: '2px' }}>
                Full Process Details →
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '1px', background: 'rgba(74,127,193,0.10)' }}>
              {[
                { n:'01', title:'Free Counselling',  desc:'Understand your options, sector fit, and eligibility.' },
                { n:'02', title:'Skill Training',    desc:'3–6 months of sector-specific vocational training.' },
                { n:'03', title:'Language Training', desc:'JLPT N5–N3 Japanese classes alongside skill program.' },
                { n:'04', title:'Skills Test & Visa',desc:'SSW skills test prep, exam, and visa documentation.' },
                { n:'05', title:'Japan Placement',   desc:'Job matching, interviews, pre-departure, departure.' },
              ].map((step, i) => (
                <div key={step.n} style={{ background: '#0D1B2A', padding: '36px 24px', borderTop: `2px solid ${i === 4 ? '#4A7FC1' : i === 0 ? '#2A5298' : 'rgba(74,127,193,0.20)'}` }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '40px', fontWeight: 700, color: 'rgba(74,127,193,0.10)', lineHeight: 1, marginBottom: '16px' }}>{step.n}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 600, color: '#EEF3FB', marginBottom: '8px' }}>{step.title}</h3>
                  <p style={{ fontSize: '12px', color: 'rgba(238,243,251,0.42)', lineHeight: 1.75 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            LIFE IN JAPAN  — editorial 3-photo strip
        ═══════════════════════════════════════════════════ */}
        <section className="section" style={{ background: '#F4F7FC' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center', marginBottom: '64px' }}>
              <div>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#1B3A6B', marginBottom: '12px' }}>Life in Japan</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.1 }}>A Better Future<br />Awaits You</h2>
              </div>
              <p style={{ fontSize: '14px', color: '#5E7491', lineHeight: 1.85 }}>
                Thousands of Nepali workers are building successful careers in Japan. Stable income, career growth, and a world-class work environment — all within your reach through our proven placement program.
              </p>
            </div>

            {/* 3-image editorial grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: '10px', height: '360px', marginBottom: '40px' }}>
              {[
                { src: IMG_SAKURA,  alt: 'Beautiful Japan scenery',    label: 'Quality of Life' },
                { src: IMG_TORII,   alt: 'Fushimi Inari torii gates',  label: 'Rich Culture' },
                { src: IMG_STREET,  alt: 'Japan city street',          label: 'Modern Cities' },
              ].map((img, i) => (
                <div key={i} style={{ position: 'relative', overflow: 'hidden', borderRadius: '4px' }}>
                  <Image src={img.src} alt={img.alt} fill style={{ objectFit: 'cover' }} unoptimized />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,24,45,0.70) 0%, transparent 55%)' }} />
                  <div style={{ position: 'absolute', bottom: '16px', left: '16px' }}>
                    <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#fff', background: 'rgba(27,58,107,0.75)', padding: '4px 10px', borderRadius: '2px' }}>{img.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* 3 stat callouts */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '16px' }}>
              {[
                { value: '¥200K+', label: 'Average Monthly Salary',    desc: 'Starting salary for SSW workers in Japan' },
                { value: '5 yrs',  label: 'SSW Type 2 Visa Duration',  desc: 'With option to bring family members' },
                { value: '14',     label: 'Open Hiring Sectors',       desc: 'Industries actively recruiting Nepali workers' },
              ].map(b => (
                <div key={b.label} style={{ padding: '24px', background: '#fff', borderRadius: '4px', borderTop: '3px solid #1B3A6B', boxShadow: '0 2px 16px rgba(27,58,107,0.06)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '30px', fontWeight: 700, color: '#1B3A6B', lineHeight: 1, marginBottom: '6px' }}>{b.value}</div>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#0D1B2A', marginBottom: '5px', letterSpacing: '0.02em' }}>{b.label}</div>
                  <div style={{ fontSize: '12px', color: '#5E7491', lineHeight: 1.6 }}>{b.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            SECTORS GRID  — dark
        ═══════════════════════════════════════════════════ */}
        <section className="section" style={{ background: '#0D1B2A' }}>
          <div className="wrap">
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', marginBottom: '12px' }}>
              <div>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#4A7FC1', marginBottom: '12px' }}>Japan Work Sectors</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, color: '#EEF3FB', lineHeight: 1.1 }}>14 Industries Open<br />to Nepali Workers</h2>
              </div>
              <Link href="/sectors" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#4A7FC1', textDecoration: 'none', borderBottom: '1px solid rgba(74,127,193,0.40)', paddingBottom: '2px' }}>
                All Sectors & Details →
              </Link>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(238,243,251,0.45)', maxWidth: '520px', lineHeight: 1.80, marginBottom: '40px' }}>
              Japan's SSW program opens 14 high-demand sectors to foreign workers. We train and place candidates across all of them.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(190px,1fr))', gap: '1px', background: 'rgba(74,127,193,0.08)' }}>
              {sectors.map(s => (
                <div key={s.name} style={{ background: '#0F2035', padding: '24px 20px' }}>
                  <div style={{ fontSize: '22px', marginBottom: '10px' }}>{s.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 600, color: '#EEF3FB', marginBottom: '8px' }}>{s.name}</div>
                  <span style={{
                    fontSize: '9px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase',
                    padding: '3px 8px', borderRadius: '2px',
                    background: s.demand === 'Very High' ? 'rgba(74,127,193,0.20)' : 'rgba(255,255,255,0.05)',
                    color: s.demand === 'Very High' ? '#8BB8E8' : 'rgba(238,243,251,0.35)',
                    border: `1px solid ${s.demand === 'Very High' ? 'rgba(74,127,193,0.35)' : 'rgba(255,255,255,0.08)'}`,
                  }}>{s.demand} demand</span>
                </div>
              ))}
              <Link href="/sectors" style={{ background: '#1B3A6B', padding: '24px 20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', gap: '6px' }}>
                <span style={{ fontSize: '20px', color: '#8BB8E8' }}>→</span>
                <span style={{ fontSize: '11px', fontWeight: 700, color: '#8BB8E8', letterSpacing: '0.06em', textAlign: 'center' }}>All 14 Sectors</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            TRAINING PROGRAMS
        ═══════════════════════════════════════════════════ */}
        <section className="section" style={{ background: '#F4F7FC' }}>
          <div className="wrap">
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '20px', marginBottom: '40px' }}>
              <div>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#1B3A6B', marginBottom: '12px' }}>Training Programs</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.1 }}>We Prepare You<br />Completely</h2>
              </div>
              <Link href="/training" style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1B3A6B', textDecoration: 'none', borderBottom: '1px solid rgba(27,58,107,0.30)', paddingBottom: '2px' }}>
                All Programs →
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '16px' }}>
              {[
                { accent:'#1B3A6B', tag:'Language',      title:'Japanese Language — JLPT', dur:'3–6 months',    chips:['N5 Beginner','N4 Elementary','N3 Intermediate'],         desc:"Essential for all Japan-bound workers. From zero to working-level Japanese." },
                { accent:'#0F5C2E', tag:'Vocational',    title:'Sector Skill Training',    dur:'3–4 months',    chips:['Construction','Agriculture','Food Mfg.','+11 more'],      desc:'Hands-on training matching Japan employer requirements and SSW standards.' },
                { accent:'#0D1B2A', tag:'Certification', title:'SSW Skills Test Prep',     dur:'4–8 weeks',     chips:['Mock exams','Technical vocab','Japan standards'],         desc:"Focused preparation for Japan's official SSW skills evaluation tests." },
                { accent:'#7A5C00', tag:'Visa Support',  title:'Visa & Documentation',     dur:'Ongoing',       chips:['COE application','Police clearance','Embassy liaison'],   desc:'We manage the entire documentation process — correctly and on time.' },
              ].map(p => (
                <div key={p.title} style={{ background: '#fff', padding: '32px 28px', borderTop: `3px solid ${p.accent}`, borderRadius: '0 0 4px 4px', boxShadow: '0 2px 16px rgba(27,58,107,0.06)' }}>
                  <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: p.accent, display: 'block', marginBottom: '12px' }}>{p.tag}</span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: '#0D1B2A', marginBottom: '6px' }}>{p.title}</h3>
                  <div style={{ fontSize: '11px', fontWeight: 600, color: '#5E7491', marginBottom: '12px' }}>Duration: {p.dur}</div>
                  <p style={{ fontSize: '13px', color: '#5E7491', lineHeight: 1.75, marginBottom: '18px' }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {p.chips.map(c => <span key={c} style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase', padding: '3px 9px', border: '1px solid rgba(27,58,107,0.18)', color: '#2E3F55', borderRadius: '2px' }}>{c}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            WHY US
        ═══════════════════════════════════════════════════ */}
        <section className="section" style={{ background: '#0D1B2A' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '64px', alignItems: 'start' }}>
              <div style={{ position: 'sticky', top: '100px' }}>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#4A7FC1', marginBottom: '12px' }}>Why Choose Us</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 700, color: '#EEF3FB', lineHeight: 1.1, marginBottom: '20px' }}>The Chhayachhetra Difference</h2>
                <p style={{ fontSize: '13px', color: 'rgba(238,243,251,0.45)', lineHeight: 1.80 }}>
                  We're not a generic "abroad placement" agency. We are Nepal's dedicated Japan employment specialists — built from the ground up to serve one purpose.
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(74,127,193,0.08)' }}>
                {[
                  { num:'01', title:'Japan-Exclusive Focus',    desc:"Every program, instructor, and process is built around Japan's specific requirements — not a generic abroad package." },
                  { num:'02', title:'Registered & Compliant',   desc:'Government-registered, DOE-compliant. Safe, legal, and ethical placement — every single time.' },
                  { num:'03', title:'End-to-End Support',       desc:'Training, language, SSW test, visa, employer matching, pre-departure — all under one roof in Samakhusi.' },
                  { num:'04', title:'Transparent Costs',        desc:'No hidden fees. Complete cost breakdown upfront — training, visa, agent fees — so you plan with confidence.' },
                  { num:'05', title:'Qualified Instructors',    desc:'JLPT-certified language teachers and vocational trainers with real Japan work experience.' },
                  { num:'06', title:'Employer Network',         desc:'Direct relationships with verified Japanese employers and RCO/JITCO sending organizations.' },
                ].map(item => (
                  <div key={item.num} style={{ background: '#0F2035', padding: '28px 24px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#4A7FC1', marginBottom: '10px', letterSpacing: '0.08em' }}>{item.num}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 600, color: '#EEF3FB', marginBottom: '8px' }}>{item.title}</h3>
                    <p style={{ fontSize: '12px', color: 'rgba(238,243,251,0.42)', lineHeight: 1.80 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            CTA  — full-bleed image, clean & bold
        ═══════════════════════════════════════════════════ */}
        <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <Image src={IMG_FUJI} alt="Mount Fuji Japan" fill style={{ objectFit: 'cover', objectPosition: 'center 60%' }} unoptimized />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,18,38,0.78)' }} />
          </div>
          <div className="wrap" style={{ position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.30em', color: '#4A7FC1', marginBottom: '16px' }}>
                日本への旅 — YOUR JOURNEY TO JAPAN
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.10, marginBottom: '16px' }}>
                Ready to Start Your<br />Japan Journey?
              </h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.60)', lineHeight: 1.80, maxWidth: '480px' }}>
                Book a free counselling session. No commitment — just clarity on your path from Nepal to Japan.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '220px' }}>
              <Link href="/contact" style={{
                display: 'block', textAlign: 'center',
                background: '#1B3A6B', color: '#fff',
                padding: '16px 32px', fontWeight: 700, fontSize: '11px',
                letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none',
                border: '2px solid #2A5298',
              }}>
                Book Free Counselling
              </Link>
              <a href="tel:+9779761292444" style={{
                display: 'block', textAlign: 'center',
                background: 'transparent', color: 'rgba(255,255,255,0.75)',
                padding: '14px 32px', fontWeight: 600, fontSize: '11px',
                letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none',
                border: '1.5px solid rgba(255,255,255,0.18)',
              }}>
                +977 976-1292444
              </a>
              <p style={{ fontSize: '10px', color: 'rgba(255,255,255,0.28)', textAlign: 'center', marginTop: '2px', letterSpacing: '0.04em' }}>
                Town Planning, Samakhusi, Kathmandu
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}