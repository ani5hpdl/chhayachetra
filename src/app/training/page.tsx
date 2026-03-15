import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Vocational Training & Language Programs for Japan | Chhayachhetra VTC Kathmandu',
  description: 'Complete training programs for Japan-bound workers in Nepal. Japanese language (JLPT N5–N3), sector vocational training, SSW skills test prep, and visa documentation. Samakhusi, Kathmandu.',
  keywords: ['JLPT training Kathmandu','Japanese language class Nepal','Japan vocational training Nepal','SSW test preparation Nepal'],
  alternates: { canonical: 'https://chhayachhetra.com.np/training' },
};

const IMG_HERO     = 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=85';
const IMG_LANGUAGE = 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=80';
const IMG_SKILL    = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80';
const IMG_FUJI     = 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1200&q=80';

const programs = [
  {
    id: 'japanese', tag: 'Language', accent: '#1B3A6B', accentBg: '#EEF3FB', accentLight: '#DBEAFE',
    title: 'Japanese Language Program',
    subtitle: 'JLPT N5 → N3', duration: '3–6 months',
    schedule: 'Morning & evening batches', classSize: 'Max 12 students', cert: 'JLPT Certificate (N5, N4, N3)',
    desc: 'Japanese language proficiency is mandatory for all Japan work visas. Our structured program takes you from zero to working-level Japanese with a focus on practical workplace communication.',
    highlight: 'Language and vocational training run concurrently — saving 3 months vs sequential training.',
    curriculum: [
      { phase: '01', level: 'Foundation', period: 'Month 1', items: ['Hiragana & Katakana scripts','Basic greetings and self-introduction','Numbers, dates, time','Basic grammar patterns (N5)','Essential vocabulary — 800 words'] },
      { phase: '02', level: 'Elementary', period: 'Month 2–3', items: ['JLPT N4 grammar structures','Workplace vocabulary for your sector','Listening comprehension','Reading basic Japanese text','Conversational practice'] },
      { phase: '03', level: 'Intermediate', period: 'Month 4–6', items: ['JLPT N3 grammar and vocabulary','Workplace Japanese communication','Japanese work culture','Mock JLPT exams','Exam registration assistance'] },
    ],
  },
  {
    id: 'vocational', tag: 'Vocational', accent: '#0F5C2E', accentBg: '#F0FDF4', accentLight: '#DCFCE7',
    title: 'Sector Vocational Training',
    subtitle: 'Japan SSW-Standard', duration: '3–4 months',
    schedule: 'Full-time weekday batches', classSize: 'Max 15 students', cert: 'Chhayachhetra VTC Completion Certificate',
    desc: 'Hands-on practical skill training aligned with Japan SSW employer requirements. Instructors have real industry experience — training uses actual tools and equipment, not just theory.',
    highlight: 'Available for all 14 SSW sectors. Training content customised to your specific sector.',
    curriculum: [
      { phase: '01', level: 'Foundation', period: 'Week 1–3', items: ['Japan workplace safety (rōdō anzen)','Work ethics and Japanese culture','Physical fitness and endurance','Basic tools and equipment','Safety certifications'] },
      { phase: '02', level: 'Core Training', period: 'Month 1–3', items: ['Sector-specific technical skills (hands-on)','Japan industry standards and quality','Reading basic Japanese technical instructions','Tool and machine operation safety','Regular assessments'] },
      { phase: '03', level: 'Pre-departure', period: 'Final 2 weeks', items: ['SSW skills test mock assessments','Japan employer interview prep','Sector-specific Japanese vocabulary','Documentation checklist review','Pre-departure briefing'] },
    ],
  },
  {
    id: 'ssw', tag: 'Certification', accent: '#0D4F9A', accentBg: '#EFF6FF', accentLight: '#DBEAFE',
    title: 'SSW Skills Test Preparation',
    subtitle: 'Specified Skilled Worker Exam', duration: '4–8 weeks intensive',
    schedule: 'Flexible — morning or evening', classSize: 'Max 10 students', cert: 'Test by Japan\'s designated organizations',
    desc: "Japan's SSW skills test is a sector-specific evaluation by designated Japanese organizations. This intensive course is focused entirely on passing — with past papers, mock exams, and technical vocabulary.",
    highlight: 'Test registration, transport to venue, and result monitoring all supported.',
    curriculum: [
      { phase: '01', level: 'Test Familiarisation', period: 'Week 1–2', items: ['Test format, question types, and scoring','Past paper review (3 years of real tests)','Identify weak areas','Technical vocabulary in Japanese and Nepali'] },
      { phase: '02', level: 'Mock Practice', period: 'Week 3–4', items: ['Timed mock exams under real conditions','Detailed review of every wrong answer','Physical skills assessment (where applicable)','Test strategies and mental preparation'] },
      { phase: '03', level: 'Final Push', period: 'Week 5–8', items: ['Full mock tests twice per week','Individual coaching for borderline candidates','Test registration assistance','Day-before preparation session'] },
    ],
  },
  {
    id: 'visa', tag: 'Documentation', accent: '#78350F', accentBg: '#FFFBEB', accentLight: '#FEF3C7',
    title: 'Visa & Documentation Service',
    subtitle: 'SSW Visa (Japan)', duration: 'Ongoing — starts after skills test pass',
    schedule: 'Individual appointments', classSize: 'Individual service', cert: 'Japan SSW Visa (issued by Japanese Embassy)',
    desc: 'A single documentation error can delay your Japan visa by months. Our team manages every paper — from police clearance to the Certificate of Eligibility — ensuring accuracy at every step.',
    highlight: 'Our team has processed 500+ Japan visa applications. We know exactly what\'s required.',
    curriculum: [
      { phase: '01', level: 'After Skills Test', period: 'Immediately', items: ['Employment contract review','COE application to Japan Immigration','Identify and collect all required documents'] },
      { phase: '02', level: 'COE Processing', period: '1–3 months', items: ['Nepal Police Clearance (PCC)','Medical examination at designated hospital','Certificate legalization (if required)','Regular status updates to family'] },
      { phase: '03', level: 'Visa Completion', period: 'After COE', items: ['Embassy visa sticker application','Visa stamping coordination','Pre-departure document packet','Final checklist before departure'] },
    ],
  },
];

const faqs = [
  { q:'Do I need to know Japanese before starting?', a:'No. Our program starts from absolute zero — hiragana, katakana, and basic grammar. You will graduate at working-level JLPT N4 or N3.' },
  { q:'Can language and vocational training run together?', a:'Yes, and we strongly recommend it. Our schedule is designed so both run concurrently, saving 2–3 months vs sequential training.' },
  { q:'What if I fail the SSW skills test?', a:'You can retake the test. We provide continued preparation support until you pass. Most students pass on their first attempt with our mock exam program.' },
  { q:'How much does the full training cost?', a:'Costs vary by sector and program. We provide a complete transparent breakdown during your free counselling session. No hidden fees — ever.' },
  { q:'Is accommodation available for outstation students?', a:'We can assist with accommodation referrals near our Samakhusi center. Contact us for current options and availability.' },
  { q:'Do you help with Japan job placement after training?', a:'Yes. We have direct relationships with Japanese employers. Job matching, employer interviews, and contract review are all included.' },
];

export default function TrainingPage() {
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
                <li style={{ color: '#1B3A6B' }}>Training</li>
              </ol>
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '2px', background: '#1B3A6B' }} />
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#1B3A6B' }}>Programs We Offer</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.8vw,3.4rem)', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.10, letterSpacing: '-0.02em', marginBottom: '20px' }}>
              Complete Training for<br /><span style={{ color: '#1B3A6B' }}>Japan-Ready</span><br /><span style={{ color: '#1B3A6B' }}>Candidates</span>
            </h1>
            <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.80, maxWidth: '420px', marginBottom: '32px' }}>
              Language, skills, certification, and documentation — every program designed specifically for Nepal-to-Japan employment, all under one roof in Samakhusi.
            </p>
            {/* Program type pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
              {[
                { label: 'Language (JLPT)', color: '#1B3A6B', bg: '#EEF3FB' },
                { label: 'Vocational Skills', color: '#0F5C2E', bg: '#F0FDF4' },
                { label: 'SSW Test Prep', color: '#0D4F9A', bg: '#EFF6FF' },
                { label: 'Visa & Docs', color: '#78350F', bg: '#FFFBEB' },
              ].map(p => (
                <span key={p.label} style={{ fontSize: '11px', fontWeight: 600, padding: '5px 12px', background: p.bg, color: p.color, borderRadius: '4px' }}>{p.label}</span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0', borderTop: '1px solid rgba(27,58,107,0.12)', paddingTop: '28px', width: 'fit-content' }}>
              {[{ value:'4', label:'Programs' },{ value:'3–6', label:'Months Avg.' },{ value:'All 14', label:'SSW Sectors' }].map((s, i) => (
                <div key={s.label} style={{ paddingRight: '24px', marginRight: '24px', borderRight: i < 2 ? '1px solid rgba(27,58,107,0.10)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: '#1B3A6B', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#5E7491', marginTop: '4px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block" style={{ minHeight: '65vh' }}>
            <Image src={IMG_HERO} alt="Training classroom" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority unoptimized />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #F4F7FC 0%, transparent 18%)' }} />
            <div style={{ position: 'absolute', bottom: '40px', left: '24px', background: 'rgba(11,24,45,0.88)', backdropFilter: 'blur(12px)', padding: '16px 20px', borderRadius: '4px', borderLeft: '3px solid #4A7FC1', maxWidth: '220px' }}>
              <div style={{ fontSize: '10px', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4A7FC1', marginBottom: '6px' }}>Currently enrolling</div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', lineHeight: 1.5 }}>New batches starting — limited seats available</div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            TRUST BAR
        ═══════════════════════════════════════ */}
        <div style={{ background: '#1B3A6B', padding: '16px 0' }}>
          <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['JLPT-Certified Language Instructors','Industry-Experienced Vocational Trainers','Small Batch Sizes — Max 15 Students','Concurrent Language + Skill Training'].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 28px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                <span style={{ color: '#6BA3D6', fontWeight: 700, fontSize: '12px' }}>✓</span>
                <span style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.80)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════
            PHOTO STRIP — 2 training images
        ═══════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2" style={{ height: '280px' }}>
          {[
            { src: IMG_LANGUAGE, label:'Language Training',  sub:'JLPT N5 to N3 — zero to working level' },
            { src: IMG_SKILL,    label:'Vocational Training', sub:'Hands-on with real tools & equipment' },
          ].map((img, i) => (
            <div key={i} style={{ position: 'relative', overflow: 'hidden' }}>
              <Image src={img.src} alt={img.label} fill style={{ objectFit: 'cover' }} unoptimized />
              <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,24,45,0.50)' }} />
              <div style={{ position: 'absolute', bottom: '28px', left: '32px' }}>
                <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff', background: 'rgba(27,58,107,0.75)', padding: '4px 10px', borderRadius: '2px', display: 'inline-block', marginBottom: '8px' }}>{img.label}</div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, color: '#fff', margin: 0, lineHeight: 1.3 }}>{img.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ═══════════════════════════════════════
            PROGRAMS — clean professional layout
        ═══════════════════════════════════════ */}
        <section style={{ background: '#fff', padding: '0' }}>
          {programs.map((prog, idx) => (
            <div key={prog.id} style={{ borderTop: idx === 0 ? 'none' : '1px solid #E8EFF9' }}>
              <div className="wrap" style={{ paddingTop: '72px', paddingBottom: '72px' }}>

                {/* Program header bar */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', marginBottom: '40px', paddingBottom: '24px', borderBottom: `2px solid ${prog.accent}` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.20em', textTransform: 'uppercase', color: prog.accent, background: prog.accentBg, padding: '5px 12px', borderRadius: '3px' }}>{prog.tag}</span>
                    <div>
                      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, color: '#0D1B2A', margin: 0, lineHeight: 1.1 }}>{prog.title}</h2>
                      <p style={{ fontSize: '13px', color: prog.accent, fontWeight: 600, margin: '4px 0 0', letterSpacing: '0.03em' }}>{prog.subtitle}</p>
                    </div>
                  </div>
                  <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: prog.accent, color: '#fff', padding: '12px 24px', fontWeight: 700, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', whiteSpace: 'nowrap' }}>
                    Enquire →
                  </Link>
                </div>

                {/* Two-column body */}
                <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-10 lg:gap-16">

                  {/* LEFT — overview + stats */}
                  <div>
                    <p style={{ fontSize: '14px', color: '#4A5568', lineHeight: 1.85, marginBottom: '28px' }}>{prog.desc}</p>

                    {/* Stats table */}
                    <div style={{ borderRadius: '6px', overflow: 'hidden', border: '1px solid #E8EFF9', marginBottom: '20px' }}>
                      {[
                        ['Duration', prog.duration],
                        ['Schedule', prog.schedule],
                        ['Class Size', prog.classSize],
                        ['Certificate', prog.cert],
                      ].map(([k, v], i, arr) => (
                        <div key={k} style={{ display: 'flex', gap: '16px', padding: '12px 16px', background: i % 2 === 0 ? '#F9FAFB' : '#fff', borderBottom: i < arr.length - 1 ? '1px solid #E8EFF9' : 'none' }}>
                          <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9CA3AF', flexShrink: 0, width: '80px', paddingTop: '1px' }}>{k}</span>
                          <span style={{ fontSize: '13px', color: '#1F2937', fontWeight: 500 }}>{v}</span>
                        </div>
                      ))}
                    </div>

                    {/* Highlight note */}
                    <div style={{ background: prog.accentBg, borderLeft: `3px solid ${prog.accent}`, padding: '14px 16px', borderRadius: '0 4px 4px 0' }}>
                      <p style={{ fontSize: '12px', color: prog.accent, fontWeight: 600, lineHeight: 1.7, margin: 0 }}>✓ {prog.highlight}</p>
                    </div>
                  </div>

                  {/* RIGHT — curriculum phases */}
                  <div>
                    <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '20px' }}>Curriculum Outline</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {prog.curriculum.map((phase, pi) => (
                        <div key={phase.level} style={{ display: 'grid', gridTemplateColumns: '4px 1fr', gap: '0' }}>
                          {/* Colored timeline bar */}
                          <div style={{ background: pi === prog.curriculum.length - 1 ? prog.accent : `${prog.accent}40`, borderRadius: '2px', marginRight: '20px' }} />
                          <div style={{ paddingLeft: '20px', paddingBottom: pi < prog.curriculum.length - 1 ? '4px' : '0' }}>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '12px' }}>
                              <span style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: 700, color: '#0D1B2A' }}>{phase.level}</span>
                              <span style={{ fontSize: '10px', fontWeight: 600, color: '#9CA3AF', letterSpacing: '0.08em' }}>{phase.period}</span>
                            </div>
                            <div style={{ background: '#F9FAFB', border: '1px solid #E8EFF9', borderRadius: '4px', padding: '16px 18px' }}>
                              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '6px 24px' }}>
                                {phase.items.map(item => (
                                  <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#374151', lineHeight: 1.55 }}>
                                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: prog.accent, flexShrink: 0, marginTop: '6px', display: 'inline-block' }} />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ═══════════════════════════════════════
            FAQ — dark section
        ═══════════════════════════════════════ */}
        <section className="section" style={{ background: '#0D1B2A' }}>
          <div className="wrap">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-24">
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#4A7FC1', marginBottom: '12px' }}>Common Questions</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.4rem)', fontWeight: 700, color: '#EEF3FB', lineHeight: 1.1, marginBottom: '20px' }}>Training FAQs</h2>
                <p style={{ fontSize: '13px', color: 'rgba(238,243,251,0.45)', lineHeight: 1.80 }}>
                  Still have questions? Book a free counselling session and we'll answer everything in person.
                </p>
                <Link href="/contact" style={{ display: 'inline-block', marginTop: '24px', fontSize: '11px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#4A7FC1', textDecoration: 'none', borderBottom: '1.5px solid rgba(74,127,193,0.40)', paddingBottom: '2px' }}>
                  Book Free Counselling →
                </Link>
              </div>
              <div>
                {faqs.map((faq, i) => (
                  <div key={faq.q} style={{ borderTop: '1px solid rgba(74,127,193,0.12)', paddingTop: '24px', paddingBottom: '24px' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, color: '#EEF3FB', marginBottom: '10px', lineHeight: 1.4 }}>{faq.q}</h3>
                    <p style={{ fontSize: '13px', color: 'rgba(238,243,251,0.50)', lineHeight: 1.85, margin: 0 }}>{faq.a}</p>
                  </div>
                ))}
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
              Enroll in a Program
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.60)', lineHeight: 1.80, maxWidth: '440px', margin: '0 auto 36px' }}>
              Start with a free counselling session. We'll recommend the right program combination for your sector and timeline.
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