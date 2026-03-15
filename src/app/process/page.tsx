import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Japan Employment Process from Nepal — Step by Step | Chhayachhetra VTC',
  description: 'Complete step-by-step guide to getting a Japan job from Nepal. SSW visa process, training timeline, skills test, COE application, and pre-departure checklist.',
  keywords: ['Japan SSW visa process Nepal','how to go Japan from Nepal','SSW visa steps Nepal','Japan work visa timeline Nepal','COE Japan Nepal'],
  alternates: { canonical: 'https://chhayachhetra.com.np/process' },
};

const IMG_PROCESS_HERO = 'https://images.unsplash.com/photo-1576021182211-9ea8dced3690?w=1800&q=85';
const IMG_TRAINING     = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=80';
const IMG_DEPARTURE    = 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80';

const steps = [
  {
    n: '01', color: '#1B3A6B', bgAccent: 'rgba(27,58,107,0.08)',
    title: 'Free Counselling & Assessment',
    duration: 'Day 1',
    overview: 'Your journey begins with a free one-on-one session with our Japan employment advisor.',
    details: [
      'Understand your background, work experience, and career goals',
      'Assess eligibility for Japan\'s SSW (Specified Skilled Worker) program',
      'Match you to the most suitable work sector',
      'Explain full process, timeline, costs, and realistic expectations',
      'Answer all questions about life and work in Japan',
    ],
    note: 'No commitment required. Completely free.',
  },
  {
    n: '02', color: '#0F5C2E', bgAccent: 'rgba(15,92,46,0.07)',
    title: 'Enrollment & Vocational Skill Training',
    duration: '3–4 months',
    overview: 'Sector-specific hands-on training at our Samakhusi center aligned with Japan employer standards.',
    details: [
      'Choose from 14 SSW-recognized Japan industries',
      'Practical, hands-on training — not just classroom theory',
      'Japanese work culture, safety standards, sector terminology',
      'Small batch sizes (max 15 students) for personalized instruction',
      'Regular assessments and progress tracking',
      'Industry-standard tools and equipment throughout',
    ],
    note: 'Construction & agriculture: 3 months. Nursing care: 4 months.',
  },
  {
    n: '03', color: '#7A5C00', bgAccent: 'rgba(122,92,0,0.07)',
    title: 'Japanese Language Training (JLPT)',
    duration: '3–6 months — runs parallel',
    overview: 'Japanese language is mandatory for all SSW categories. We run it alongside vocational training to save time.',
    details: [
      'Start from beginner (N5) to working-level Japanese (N3)',
      'Focus on practical workplace communication, not just exam prep',
      'Hiragana, katakana, basic kanji, and sector vocabulary',
      'JLPT-certified instructors with Japan work experience',
      'JLPT exam registration assistance included',
      'Minimum requirement: JLPT N4 for most SSW categories',
    ],
    note: 'Language and vocational training run concurrently to save time.',
  },
  {
    n: '04', color: '#0D4F9A', bgAccent: 'rgba(13,79,154,0.07)',
    title: 'SSW Skills Test & Visa Documentation',
    duration: '4–8 weeks',
    overview: 'Sit Japan\'s official SSW evaluation test, then complete all visa documentation processing.',
    details: [
      'Intensive SSW skills test prep with mock exams and past papers',
      'Test by Japan\'s designated organizations (in Nepal or Japan)',
      'Upon passing: COE application to Japan Immigration',
      'Police Clearance Certificate (PCC) from Nepal Police',
      'Medical examination at designated hospitals',
      'Embassy visa application submission and tracking',
    ],
    note: 'COE processing: 1–3 months. Visa sticker: 1–2 weeks after COE.',
  },
  {
    n: '05', color: '#1B3A6B', bgAccent: 'rgba(27,58,107,0.08)',
    title: 'Job Placement & Departure to Japan',
    duration: '2–4 weeks after visa',
    overview: 'Employer matching, contract review, pre-departure orientation, and your flight to Japan.',
    details: [
      'Match with verified Japanese employers through our network',
      'Employer interview preparation (video or in-person)',
      'Employment contract review and explanation in Nepali',
      'Pre-departure orientation: workplace culture, banking, housing',
      'Airport assistance and departure coordination',
      'Post-arrival support contacts in Japan provided',
    ],
    note: 'Average total timeline: 6–12 months from counselling to Japan departure.',
  },
];

const timeline = [
  { month: 'Month 1',    activity: 'Counselling, enrollment, begin vocational + language training' },
  { month: 'Month 2–3',  activity: 'Intensive skill training + Japanese N5 → N4 level' },
  { month: 'Month 4',    activity: 'Complete vocational training, continue Japanese to N4–N3' },
  { month: 'Month 5',    activity: 'SSW skills test preparation, mock exams, complete JLPT' },
  { month: 'Month 6',    activity: 'Sit SSW skills test + submit COE application + documentation' },
  { month: 'Month 7–9',  activity: 'COE processing by Japan Immigration (1–3 months)' },
  { month: 'Month 9–10', activity: 'Visa sticker, employer matching, pre-departure orientation' },
  { month: 'Month 10–12',activity: 'Departure to Japan — begin working' },
];

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main style={{ overflowX: 'hidden' }}>

        {/* ═══════════════════════════════════════════
            HERO — split layout matching homepage
        ═══════════════════════════════════════════ */}
        <section className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '70vh', background: '#F4F7FC', paddingTop: '72px' }}>

          {/* LEFT — content */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(48px,7vw,88px) clamp(24px,5vw,72px) clamp(48px,7vw,88px) clamp(24px,7vw,96px)' }}>
            {/* Breadcrumb */}
            <nav style={{ marginBottom: '24px' }}>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '8px', alignItems: 'center', fontSize: '10px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                <li><Link href="/" style={{ color: '#5E7491', textDecoration: 'none' }}>Home</Link></li>
                <li style={{ color: '#D0DCF0' }}>/</li>
                <li style={{ color: '#1B3A6B' }}>Process</li>
              </ol>
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '2px', background: '#1B3A6B' }} />
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#1B3A6B' }}>Step-by-Step Journey</span>
            </div>

            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.8vw,3.4rem)', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.10, letterSpacing: '-0.02em', marginBottom: '20px' }}>
              Nepal to Japan:<br />
              <span style={{ color: '#1B3A6B' }}>The Complete</span><br />
              <span style={{ color: '#1B3A6B' }}>Process</span>
            </h1>

            <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.80, maxWidth: '420px', marginBottom: '36px' }}>
              A structured, transparent path from your first visit to our office to your first day at work in Japan — everything handled under one roof.
            </p>

            {/* 3 key stats */}
            <div style={{ display: 'flex', gap: '0', borderTop: '1px solid rgba(27,58,107,0.12)', paddingTop: '28px', width: 'fit-content' }}>
              {[
                { value: '6–12', label: 'Months Total' },
                { value: '5',    label: 'Clear Steps' },
                { value: '100%', label: 'Guided' },
              ].map((s, i) => (
                <div key={s.label} style={{ paddingRight: '24px', marginRight: '24px', borderRight: i < 2 ? '1px solid rgba(27,58,107,0.10)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 700, color: '#1B3A6B', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#5E7491', marginTop: '4px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — image */}
          <div className="relative hidden lg:block" style={{ minHeight: '70vh' }}>
            <Image src={IMG_PROCESS_HERO} alt="Japan employment training" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority unoptimized />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #F4F7FC 0%, transparent 18%)' }} />
            <div style={{ position: 'absolute', bottom: '40px', left: '24px', background: 'rgba(11,24,45,0.88)', backdropFilter: 'blur(12px)', padding: '16px 20px', borderRadius: '4px', borderLeft: '3px solid #4A7FC1', maxWidth: '220px' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4A7FC1', marginBottom: '6px' }}>Next intake</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', lineHeight: 1.5 }}>Rolling enrollment — join any month</div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            TRUST BAR
        ═══════════════════════════════════════════ */}
        <div style={{ background: '#1B3A6B', padding: '16px 0' }}>
          <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Free Initial Counselling', 'Parallel Skill + Language Training', 'Full Visa Documentation Support', 'Post-Arrival Japan Support'].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 28px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                <span style={{ color: '#6BA3D6', fontWeight: 700, fontSize: '12px' }}>✓</span>
                <span style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.80)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            STEPS — alternating layout
        ═══════════════════════════════════════════ */}
        <section style={{ background: '#F4F7FC', padding: '0' }}>
          {steps.map((step, i) => (
            <div key={step.n} style={{ borderTop: '1px solid rgba(27,58,107,0.10)', background: i % 2 === 0 ? '#F4F7FC' : '#fff' }}>
              <div className="wrap" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
                <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-6 lg:gap-0">

                  {/* Step number */}
                  <div style={{ paddingTop: '4px' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '72px', fontWeight: 700, color: 'rgba(27,58,107,0.07)', lineHeight: 1, userSelect: 'none' }}>{step.n}</div>
                  </div>

                  {/* Content */}
                  <div>
                    {/* Header row */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.20em', textTransform: 'uppercase', color: step.color, border: `1px solid ${step.color}`, padding: '4px 12px', borderRadius: '2px' }}>
                        Step {step.n}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '11px', color: '#5E7491', fontWeight: 500 }}>
                        <Clock size={11} /> {step.duration}
                      </span>
                    </div>

                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.2vw,1.9rem)', fontWeight: 700, color: '#0D1B2A', marginBottom: '12px', lineHeight: 1.15 }}>
                      {step.title}
                    </h2>
                    <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.80, marginBottom: '28px', maxWidth: '600px' }}>{step.overview}</p>

                    {/* Details grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '10px', marginBottom: '24px' }}>
                      {step.details.map(d => (
                        <div key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#2E3F55', lineHeight: 1.65, background: step.bgAccent, padding: '12px 14px', borderRadius: '3px' }}>
                          <div style={{ width: '4px', height: '4px', background: step.color, borderRadius: '50%', flexShrink: 0, marginTop: '7px' }} />
                          {d}
                        </div>
                      ))}
                    </div>

                    {/* Note */}
                    <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: '10px', background: '#fff', border: '1px solid rgba(27,58,107,0.12)', borderLeft: `3px solid ${step.color}`, padding: '12px 16px', borderRadius: '0 3px 3px 0', fontSize: '12px', color: '#5E7491', fontStyle: 'italic', maxWidth: '560px' }}>
                      <span style={{ color: step.color, fontStyle: 'normal', fontWeight: 700, flexShrink: 0 }}>Note:</span> {step.note}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ═══════════════════════════════════════════
            VISUAL BREAK — training image
        ═══════════════════════════════════════════ */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '320px' }}>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Image src={IMG_TRAINING} alt="Vocational training" fill style={{ objectFit: 'cover' }} unoptimized />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,24,45,0.45)' }} />
            <div style={{ position: 'absolute', bottom: '28px', left: '32px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff', background: 'rgba(27,58,107,0.80)', padding: '5px 12px', borderRadius: '2px' }}>Skill Training</span>
              <p style={{ fontSize: '18px', fontFamily: 'var(--font-display)', fontWeight: 600, color: '#fff', marginTop: '8px', lineHeight: 1.3 }}>Hands-on vocational<br />training in Kathmandu</p>
            </div>
          </div>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <Image src={IMG_DEPARTURE} alt="Departure to Japan" fill style={{ objectFit: 'cover' }} unoptimized />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,24,45,0.45)' }} />
            <div style={{ position: 'absolute', bottom: '28px', left: '32px' }}>
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff', background: 'rgba(27,58,107,0.80)', padding: '5px 12px', borderRadius: '2px' }}>Departure</span>
              <p style={{ fontSize: '18px', fontFamily: 'var(--font-display)', fontWeight: 600, color: '#fff', marginTop: '8px', lineHeight: 1.3 }}>Full departure support<br />from Kathmandu</p>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            TIMELINE — dark section
        ═══════════════════════════════════════════ */}
        <section className="section" style={{ background: '#0D1B2A' }}>
          <div className="wrap">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">

              {/* Sticky label */}
              <div className="lg:sticky lg:top-24">
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#4A7FC1', marginBottom: '12px' }}>Typical Timeline</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, color: '#EEF3FB', lineHeight: 1.1, marginBottom: '20px' }}>6–12 Months<br />to Japan</h2>
                <p style={{ fontSize: '13px', color: 'rgba(238,243,251,0.45)', lineHeight: 1.80 }}>
                  Timeline varies based on your sector, language pace, COE processing, and employer availability. You'll get a personalised estimate in your counselling session.
                </p>
              </div>

              {/* Timeline rows */}
              <div>
                {timeline.map((t, i) => (
                  <div key={t.month} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', gap: '20px', borderTop: '1px solid rgba(74,127,193,0.12)', paddingTop: '20px', paddingBottom: '20px', alignItems: 'center' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#4A7FC1', letterSpacing: '0.06em' }}>{t.month}</div>
                    <div style={{ fontSize: '13px', color: 'rgba(238,243,251,0.60)', lineHeight: 1.65 }}>{t.activity}</div>
                  </div>
                ))}

                {/* Note box */}
                <div style={{ marginTop: '28px', background: 'rgba(27,58,107,0.15)', border: '1px solid rgba(74,127,193,0.20)', borderLeft: '3px solid #4A7FC1', padding: '20px 24px', borderRadius: '0 3px 3px 0' }}>
                  <p style={{ fontSize: '12px', color: 'rgba(238,243,251,0.60)', lineHeight: 1.80, margin: 0 }}>
                    <strong style={{ color: '#EEF3FB' }}>Note:</strong> Timeline can vary based on your sector, language learning pace, COE processing times by Japan Immigration, and employer availability. Our team will give you a personalised timeline estimate during your counselling session.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA
        ═══════════════════════════════════════════ */}
        <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <Image src={IMG_PROCESS_HERO} alt="Japan" fill style={{ objectFit: 'cover', objectPosition: 'center 30%' }} unoptimized />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,18,38,0.82)' }} />
          </div>
          <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
            <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.30em', color: '#4A7FC1', marginBottom: '16px' }}>
              日本への第一歩 — FIRST STEP TO JAPAN
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.10, marginBottom: '16px' }}>
              Ready to Begin Step 01?
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.60)', lineHeight: 1.80, maxWidth: '440px', margin: '0 auto 36px' }}>
              Book your free counselling session. Our Japan employment advisors will walk you through everything — no commitment required.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px' }}>
              <Link href="/contact" style={{ background: '#1B3A6B', color: '#fff', padding: '16px 36px', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', border: '2px solid #2A5298', display: 'inline-block' }}>
                Book Free Counselling →
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