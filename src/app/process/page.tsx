import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle2, Clock, FileText, Users, Plane } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Japan Employment Process from Nepal — Step by Step | Chhayachhetra VTC',
  description: 'Complete step-by-step guide to getting a Japan job from Nepal. SSW visa process, training timeline, skills test, COE application, and pre-departure checklist. Chhayachhetra VTC, Kathmandu.',
  keywords: ['Japan SSW visa process Nepal','how to go Japan from Nepal','SSW visa steps Nepal','Japan work visa timeline Nepal','COE Japan Nepal'],
  alternates: { canonical: 'https://chhayachhetra.com.np/process' },
};

const steps = [
  {
    n: '01', icon: Users, color: '#1B3A6B',
    title: 'Free Counselling & Assessment',
    duration: 'Day 1',
    overview: 'Your journey begins with a free one-on-one session with our Japan employment advisor.',
    details: [
      'Understand your educational background, work experience, and career goals',
      'Assess eligibility for Japan\'s SSW (Specified Skilled Worker) program',
      'Match you to the most suitable work sector (construction, agriculture, nursing, etc.)',
      'Explain the full process, timeline, costs, and realistic expectations',
      'Answer all questions about life and work in Japan',
    ],
    note: 'No commitment required. Completely free.',
  },
  {
    n: '02', icon: CheckCircle2, color: '#1a6b3a',
    title: 'Enrollment & Vocational Skill Training',
    duration: '3–4 months',
    overview: 'Sector-specific hands-on training at our Samakhusi, Kathmandu center aligned with Japan employer standards.',
    details: [
      'Choose your sector from 14 SSW-recognized Japan industries',
      'Practical, hands-on training — not just classroom theory',
      'Training covers Japanese work culture, safety standards, and sector terminology',
      'Small batch sizes (max 15 students) for personalized instruction',
      'Regular assessments and progress tracking throughout',
      'Industry-standard tools and equipment used in training',
    ],
    note: 'Training duration varies by sector. Construction and agriculture: 3 months. Nursing care: 4 months.',
  },
  {
    n: '03', icon: FileText, color: '#7a5c00',
    title: 'Japanese Language Training (JLPT)',
    duration: '3–6 months (runs parallel to skill training)',
    overview: 'Japanese language is a mandatory requirement for all SSW visa categories. We run language training alongside vocational training.',
    details: [
      'Start from absolute beginner (N5) to working-level Japanese (N3)',
      'Focus on practical workplace communication — not just exam prep',
      'Covers hiragana, katakana, basic kanji, and essential vocabulary for your sector',
      'Certified JLPT instructors with Japan work/study experience',
      'JLPT exam registration assistance included',
      'Minimum requirement: JLPT N4 for most SSW categories',
    ],
    note: 'Language and vocational training run concurrently to save time.',
  },
  {
    n: '04', icon: CheckCircle2, color: '#0D4F9A',
    title: 'SSW Skills Test & Visa Documentation',
    duration: '4–8 weeks',
    overview: 'Preparation and sitting of Japan\'s official Specified Skilled Worker evaluation test, followed by complete visa documentation processing.',
    details: [
      'Intensive SSW skills test preparation with mock exams and past papers',
      'Test conducted by Japan\'s designated testing organizations (in Nepal or Japan)',
      'Upon passing: Certificate of Eligibility (COE) application to Japan Immigration',
      'Police Clearance Certificate (PCC) from Nepal Police',
      'Medical examination at designated hospitals',
      'Embassy visa application submission and tracking',
      'Our documentation team handles everything — you focus on the test',
    ],
    note: 'COE processing by Japan Immigration: typically 1–3 months. Visa sticker: 1–2 weeks after COE.',
  },
  {
    n: '05', icon: Plane, color: '#1B3A6B',
    title: 'Job Placement & Departure to Japan',
    duration: '2–4 weeks (after visa approval)',
    overview: 'Employer matching, contract review, pre-departure orientation, and final preparation before your flight to Japan.',
    details: [
      'Match with verified Japanese employers through our registered network',
      'Employer interview preparation (video call or in-person)',
      'Employment contract review and explanation in Nepali',
      'Pre-departure orientation: Japanese workplace culture, daily life, banking, housing',
      'Airport assistance and departure coordination',
      'Post-arrival support contacts in Japan provided',
    ],
    note: 'Average total timeline from counselling to Japan departure: 6–12 months.',
  },
];

const timeline = [
  { month: 'Month 1',   activity: 'Counselling, enrollment, begin vocational + language training' },
  { month: 'Month 2–3', activity: 'Intensive skill training + Japanese N5 → N4 level' },
  { month: 'Month 4',   activity: 'Complete vocational training, continue Japanese to N4–N3' },
  { month: 'Month 5',   activity: 'SSW skills test preparation, mock exams, complete JLPT' },
  { month: 'Month 6',   activity: 'Sit SSW skills test + submit COE application + documentation' },
  { month: 'Month 7–9', activity: 'COE processing by Japan Immigration (1–3 months)' },
  { month: 'Month 9–10',activity: 'Visa sticker, employer matching, pre-departure orientation' },
  { month: 'Month 10–12',activity: 'Departure to Japan — begin working' },
];

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: 'linear-gradient(160deg,#F4F7FC 0%,#EEF3FB 100%)', paddingTop: '120px', paddingBottom: '64px' }}>
          <div className="wrap">
            <nav aria-label="Breadcrumb" style={{ marginBottom: '32px' }}>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '8px', alignItems: 'center', fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                <li><Link href="/" style={{ color: '#6E6E6E', textDecoration: 'none' }}>Home</Link></li>
                <li style={{ color: '#DDD7C8' }}>/</li>
                <li style={{ color: '#0D0D0D' }}>Process</li>
              </ol>
            </nav>
            <p className="eyebrow" style={{ marginBottom: '20px' }}>Step-by-Step Journey</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 600, color: '#0D0D0D', lineHeight: 1.05, marginBottom: '24px' }}>
              Nepal to Japan:<br /><span style={{ color: '#1B3A6B' }}>The Complete Process</span>
            </h1>
            <p style={{ fontSize: '18px', color: '#6E6E6E', lineHeight: 1.75, maxWidth: '640px', marginBottom: '32px' }}>
              We've helped hundreds of Nepali workers reach Japan through a structured, transparent process. Here's exactly how it works — from your first visit to our office to your first day at work in Japan.
            </p>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color: '#1B3A6B' }}>6–12</div>
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6E6E6E' }}>Months Total</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color: '#1B3A6B' }}>5</div>
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6E6E6E' }}>Clear Steps</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color: '#1B3A6B' }}>100%</div>
                <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#6E6E6E' }}>Guided Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="section" style={{ background: '#F4F7FC' }}>
          <div className="wrap">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {steps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={step.n} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '0', borderTop: '1px solid rgba(13,13,13,0.09)', paddingTop: '48px', paddingBottom: '48px' }}>
                    {/* Number column */}
                    <div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '48px', fontWeight: 700, color: 'rgba(13,13,13,0.08)', lineHeight: 1 }}>{step.n}</div>
                    </div>
                    {/* Content column */}
                    <div style={{ paddingLeft: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: step.color, border: `1px solid ${step.color}`, padding: '3px 10px' }}>
                          Step {step.n}
                        </span>
                        <span style={{ fontSize: '11px', color: '#6E6E6E', display: 'flex', alignItems: 'center', gap: '4px' }}>
                          <Clock size={11} /> {step.duration}
                        </span>
                      </div>
                      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', fontWeight: 600, color: '#0D0D0D', marginBottom: '12px' }}>
                        {step.title}
                      </h2>
                      <p style={{ fontSize: '15px', color: '#6E6E6E', lineHeight: 1.75, marginBottom: '24px', maxWidth: '640px' }}>{step.overview}</p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '8px', marginBottom: '20px' }}>
                        {step.details.map(d => (
                          <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#3D3D3D', lineHeight: 1.6 }}>
                            <div style={{ width: '5px', height: '5px', background: step.color, borderRadius: '50%', flexShrink: 0, marginTop: '6px' }} />
                            {d}
                          </li>
                        ))}
                      </ul>
                      <div style={{ background: '#F4F7FC', border: '1px solid rgba(13,13,13,0.08)', padding: '12px 16px', fontSize: '12px', color: '#6E6E6E', fontStyle: 'italic', borderLeft: `3px solid ${step.color}` }}>
                        {step.note}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section" style={{ background: '#0D0D0D' }}>
          <div className="wrap">
            <p className="eyebrow" style={{ color: 'rgba(188,0,45,0.9)', marginBottom: '16px' }}>Typical Timeline</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 600, color: '#F4F7FC', marginBottom: '48px' }}>
              6–12 Months to Japan
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {timeline.map((t, i) => (
                <div key={t.month} style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '24px', borderTop: '1px solid rgba(248,246,241,0.07)', paddingTop: '20px', paddingBottom: '20px', alignItems: 'center' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: '#1B3A6B', letterSpacing: '0.05em' }}>{t.month}</div>
                  <div style={{ fontSize: '14px', color: 'rgba(248,246,241,0.6)', lineHeight: 1.6 }}>{t.activity}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '48px', background: 'rgba(188,0,45,0.1)', border: '1px solid rgba(188,0,45,0.3)', padding: '24px 28px' }}>
              <p style={{ fontSize: '13px', color: 'rgba(248,246,241,0.7)', lineHeight: 1.8, margin: 0 }}>
                <strong style={{ color: '#F4F7FC' }}>Note:</strong> Timeline can vary based on your sector, language learning pace, COE processing times by Japan Immigration, and employer availability. Our team will give you a personalised timeline estimate during your counselling session.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#1B3A6B', padding: '72px 0' }}>
          <div className="wrap" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>
              Ready to Begin Step 01?
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>
              Book your free counselling session today. Our Japan employment advisors will walk you through everything.
            </p>
            <Link href="/contact" className="btn" style={{ background: '#fff', color: '#1B3A6B' }}>
              Book Free Counselling →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
