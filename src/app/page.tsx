import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: 'Chhayachhetra VTC | Japan Employment & Vocational Training from Nepal',
  description: 'Nepal\'s trusted Japan employment consultancy. We provide SSW visa preparation, JLPT training, sector-specific vocational training, and complete Japan job placement support from Kathmandu.',
  alternates: { canonical: 'https://chhayachhetra.com.np' },
};

const stats = [
  { value: '14', label: 'Japan Work Sectors', sub: 'SSW categories covered' },
  { value: '3–6', label: 'Months Training', sub: 'Sector + language programs' },
  { value: 'N5–N3', label: 'JLPT Levels', sub: 'Japanese language training' },
  { value: '¥200K+', label: 'Avg. Monthly Salary', sub: 'Entry-level Japan jobs' },
];

const sectors = [
  { name: 'Construction',        icon: '🏗', demand: 'High' },
  { name: 'Agriculture',          icon: '🌾', demand: 'High' },
  { name: 'Nursing Care',         icon: '🏥', demand: 'Very High' },
  { name: 'Food Manufacturing',   icon: '🍱', demand: 'High' },
  { name: 'Hotel & Hospitality',  icon: '🏨', demand: 'Medium' },
  { name: 'Machine Parts',        icon: '⚙️', demand: 'High' },
  { name: 'Shipbuilding',         icon: '🚢', demand: 'Medium' },
  { name: 'Auto Repair',          icon: '🔧', demand: 'High' },
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <section style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          background: 'linear-gradient(160deg, #F8F6F1 0%, #EDE9E0 55%, #DDD7C8 100%)',
          position: 'relative',
          overflow: 'hidden',
          padding: '0 0',
        }}>
          {/* Japanese sun motif */}
          <div style={{
            position: 'absolute', right: '-120px', top: '50%', transform: 'translateY(-50%)',
            width: '600px', height: '600px', borderRadius: '50%',
            border: '1px solid rgba(188,0,45,0.12)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', right: '-60px', top: '50%', transform: 'translateY(-50%)',
            width: '480px', height: '480px', borderRadius: '50%',
            border: '1px solid rgba(188,0,45,0.08)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', right: '60px', top: '50%', transform: 'translateY(-50%)',
            width: '320px', height: '320px', borderRadius: '50%',
            background: 'rgba(188,0,45,0.05)',
            pointerEvents: 'none',
          }} />

          <div className="wrap" style={{ paddingTop: '120px', paddingBottom: '80px', position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: '720px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '32px' }}>
                <div style={{ width: '28px', height: '28px', background: '#1B3A6B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '10px', height: '10px', background: '#F8F6F1', borderRadius: '50%' }} />
                </div>
                <span className="eyebrow">Nepal → Japan Employment Specialists</span>
              </div>

              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem,6vw,5.2rem)', fontWeight: 600, color: '#0D0D0D', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '28px' }}>
                Your Gateway to
                <br />
                <span style={{ color: '#1B3A6B' }}>Working in Japan</span>
                <br />
                Starts Here.
              </h1>

              <p style={{ fontSize: '18px', color: '#6E6E6E', lineHeight: 1.75, maxWidth: '560px', marginBottom: '16px' }}>
                From vocational skill training and JLPT language preparation to SSW visa processing and Japan job placement — we handle every step of your journey from Nepal to Japan.
              </p>
              <p style={{ fontSize: '14px', color: '#1B3A6B', fontWeight: 500, marginBottom: '40px', letterSpacing: '0.02em' }}>
                ✓ Government Registered &nbsp;·&nbsp; ✓ 14 Japan Work Sectors &nbsp;·&nbsp; ✓ Full Documentation Support
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '60px' }}>
                <Link href="/process" className="btn btn-dark">See the Full Process →</Link>
                <Link href="/contact" className="btn btn-outline">Free Counselling</Link>
              </div>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(130px,1fr))', gap: '0', borderTop: '1px solid rgba(13,13,13,0.1)', paddingTop: '32px' }}>
                {stats.map((s, i) => (
                  <div key={s.label} style={{ paddingRight: '24px', paddingTop: '8px', borderRight: i < stats.length - 1 ? '1px solid rgba(13,13,13,0.08)' : 'none', marginRight: i < stats.length - 1 ? '24px' : '0' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 700, color: '#0D0D0D', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: '12px', fontWeight: 600, color: '#0D0D0D', marginTop: '4px' }}>{s.label}</div>
                    <div style={{ fontSize: '11px', color: '#6E6E6E', marginTop: '2px' }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS (teaser) ─────────────────────── */}
        <section className="section" style={{ background: '#0D0D0D' }}>
          <div className="wrap">
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '56px' }}>
              <div>
                <p className="eyebrow" style={{ color: 'rgba(188,0,45,0.9)', marginBottom: '16px' }}>Your Journey</p>
                <h2 className="section-title" style={{ color: '#F8F6F1' }}>From Kathmandu<br />to Japan in 5 Steps</h2>
              </div>
              <Link href="/process" className="btn btn-outline" style={{ borderColor: 'rgba(248,246,241,0.25)', color: '#F8F6F1' }}>
                View Full Process
              </Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '1px', background: 'rgba(248,246,241,0.07)' }}>
              {[
                { n:'01', title:'Free Counselling',     desc:'Understand your options, sector fit, and eligibility with our advisors.' },
                { n:'02', title:'Skill Training',       desc:'3–6 months of sector-specific vocational training at our Samakhusi center.' },
                { n:'03', title:'Language Training',    desc:'Japanese (JLPT N5–N3) language classes alongside your skill program.' },
                { n:'04', title:'Skills Test & Visa',   desc:'SSW skills test preparation, exam, and complete visa documentation.' },
                { n:'05', title:'Japan Placement',      desc:'Job matching, employer interviews, pre-departure briefing, and departure.' },
              ].map(step => (
                <div key={step.n} style={{ background: '#0D0D0D', padding: '40px 32px' }}>
                  <div className="step-num" style={{ color: 'rgba(248,246,241,0.1)', marginBottom: '20px' }}>{step.n}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: '#F8F6F1', marginBottom: '10px' }}>{step.title}</h3>
                  <p style={{ fontSize: '13px', color: 'rgba(248,246,241,0.45)', lineHeight: 1.75 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTORS ───────────────────────────────────── */}
        <section className="section" style={{ background: '#F8F6F1' }}>
          <div className="wrap">
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '16px' }}>
              <div>
                <p className="eyebrow" style={{ marginBottom: '16px' }}>Japan Work Sectors</p>
                <h2 className="section-title">14 Industries Open<br />to Nepali Workers</h2>
              </div>
              <Link href="/sectors" className="btn btn-outline">All Sectors & Details</Link>
            </div>
            <p style={{ fontSize: '15px', color: '#6E6E6E', maxWidth: '600px', lineHeight: 1.75, marginBottom: '48px' }}>
              Japan's Specified Skilled Worker (SSW) program opens 14 high-demand sectors to foreign workers. We train and place candidates across all of them.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '1px', background: 'rgba(13,13,13,0.08)' }}>
              {sectors.map(s => (
                <div key={s.name} className="card" style={{ padding: '28px 24px', background: '#fff' }}>
                  <div style={{ fontSize: '28px', marginBottom: '12px' }}>{s.icon}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 600, color: '#0D0D0D', marginBottom: '8px' }}>{s.name}</div>
                  <span className={`tag ${s.demand === 'Very High' ? 'tag-red' : ''}`} style={s.demand === 'High' ? { borderColor: 'rgba(13,13,13,0.2)', color: '#3D3D3D' } : {}}>
                    {s.demand} demand
                  </span>
                </div>
              ))}
              <Link href="/sectors" className="card" style={{ padding: '28px 24px', background: '#F8F6F1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textDecoration: 'none', gap: '8px' }}>
                <div style={{ fontSize: '28px' }}>→</div>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#1B3A6B', letterSpacing: '0.05em' }}>View All 14 Sectors</div>
              </Link>
            </div>
          </div>
        </section>

        {/* ── TRAINING PROGRAMS ─────────────────────────── */}
        <section className="section" style={{ background: '#EDE9E0' }}>
          <div className="wrap">
            <p className="eyebrow" style={{ marginBottom: '16px' }}>Training Programs</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '24px', marginBottom: '48px' }}>
              <h2 className="section-title">We Prepare You<br />Completely</h2>
              <Link href="/training" className="btn btn-outline">All Programs</Link>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '20px' }}>
              {[
                {
                  tag: 'Language', color: '#1B3A6B',
                  title: 'Japanese Language — JLPT',
                  duration: '3–6 months',
                  levels: ['N5 Beginner', 'N4 Elementary', 'N3 Intermediate'],
                  desc: 'Essential for all Japan-bound workers. We prepare you from zero to working-level Japanese.',
                },
                {
                  tag: 'Vocational', color: '#1a6b3a',
                  title: 'Sector Skill Training',
                  duration: '3–4 months',
                  levels: ['Construction', 'Agriculture', 'Food Mfg.', '+11 more'],
                  desc: 'Hands-on, practical skill training matching Japan employer requirements and SSW standards.',
                },
                {
                  tag: 'Certification', color: '#0D0D0D',
                  title: 'SSW Skills Test Prep',
                  duration: '4–8 weeks',
                  levels: ['Mock exams', 'Technical vocab', 'Japan standards'],
                  desc: 'Focused preparation for Japan\'s official Specified Skilled Worker skills evaluation tests.',
                },
                {
                  tag: 'Documentation', color: '#7a5c00',
                  title: 'Visa & Documentation',
                  duration: 'Ongoing support',
                  levels: ['COE application', 'Police clearance', 'Health check', 'Embassy liaison'],
                  desc: 'We manage the entire documentation process — correctly and on time, every time.',
                },
              ].map(prog => (
                <div key={prog.title} className="card" style={{ padding: '36px 32px', background: '#fff' }}>
                  <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: prog.color, display: 'block', marginBottom: '16px' }}>
                    {prog.tag}
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: '#0D0D0D', marginBottom: '8px' }}>{prog.title}</h3>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#6E6E6E', marginBottom: '16px', letterSpacing: '0.05em' }}>
                    Duration: {prog.duration}
                  </div>
                  <p style={{ fontSize: '13px', color: '#6E6E6E', lineHeight: 1.75, marginBottom: '20px' }}>{prog.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {prog.levels.map(l => (
                      <span key={l} className="tag" style={{ fontSize: '10px' }}>{l}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY US ────────────────────────────────────── */}
        <section className="section" style={{ background: '#F8F6F1' }}>
          <div className="wrap">
            <p className="eyebrow" style={{ marginBottom: '16px' }}>Why Choose Us</p>
            <h2 className="section-title" style={{ marginBottom: '56px' }}>The Chhayachhetra<br />Difference</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '32px' }}>
              {[
                { num: '01', title: 'Japan-Exclusive Focus', desc: 'We specialize only in Nepal→Japan employment. Every program, instructor, and process is built around Japan\'s specific requirements — not a generic "abroad" package.' },
                { num: '02', title: 'Registered & Compliant', desc: 'Government-registered consultancy in Nepal. We follow all DOE (Department of Foreign Employment) regulations, ensuring safe, legal, and ethical placement.' },
                { num: '03', title: 'End-to-End — Zero Gaps', desc: 'From your first counselling session to landing in Japan: training, language, SSW test, visa, employer matching, and pre-departure support — all under one roof.' },
                { num: '04', title: 'Transparent Costs', desc: 'No hidden fees. We provide a complete cost breakdown upfront — training fees, visa fees, agent fees — so you can plan with confidence.' },
                { num: '05', title: 'Qualified Instructors', desc: 'Language teachers with JLPT certification and vocational trainers with Japan work experience. Real knowledge, real results.' },
                { num: '06', title: 'Employer Network', desc: 'Direct relationships with Japanese employers and registered sending organizations (RCO/JITCO). We match you to verified, reputable companies.' },
              ].map(item => (
                <div key={item.num} style={{ borderTop: '2px solid rgba(13,13,13,0.08)', paddingTop: '28px' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700, color: '#1B3A6B', marginBottom: '14px', letterSpacing: '0.05em' }}>{item.num}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: '#0D0D0D', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ fontSize: '13px', color: '#6E6E6E', lineHeight: 1.8 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ────────────────────────────────── */}
        <section style={{ background: '#1B3A6B', padding: '80px 0' }}>
          <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '32px' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.8rem)', fontWeight: 600, color: '#fff', marginBottom: '12px', lineHeight: 1.1 }}>
                Ready to Start Your<br />Japan Journey?
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', maxWidth: '480px', lineHeight: 1.7 }}>
                Book a free counselling session with our Japan employment advisors. No commitment, just clarity.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <Link href="/contact" className="btn" style={{ background: '#fff', color: '#1B3A6B' }}>
                Book Free Counselling
              </Link>
              <a href="tel:+9779761292444" className="btn" style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.4)' }}>
                Call +977 976-1292444
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
