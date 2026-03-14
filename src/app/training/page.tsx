import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Vocational Training & Language Programs for Japan | Chhayachhetra VTC Kathmandu',
  description: 'Complete training programs for Japan-bound workers in Nepal. Japanese language (JLPT N5–N3), sector vocational training (3–4 months), SSW skills test prep, and visa documentation. Samakhusi, Kathmandu.',
  keywords: ['JLPT training Kathmandu','Japanese language class Nepal','Japan vocational training Nepal','SSW test preparation Nepal','Japan skill test Nepal','JLPT N4 Nepal'],
  alternates: { canonical: 'https://chhayachhetra.com.np/training' },
};

const programs = [
  {
    id: 'japanese',
    tag: 'Language', tagColor: '#1B3A6B',
    title: 'Japanese Language Program',
    subtitle: 'JLPT N5 → N3',
    duration: '3–6 months',
    schedule: 'Morning & evening batches available',
    classSize: 'Max 12 students',
    cert: 'JLPT Certificate (N5, N4, N3)',
    desc: 'Japanese language proficiency is mandatory for all Japan work visas. Our structured program takes you from zero to working-level Japanese, with a focus on practical workplace communication alongside formal JLPT certification.',
    curriculum: [
      { level: 'Foundation (Month 1)', items: ['Hiragana & Katakana scripts','Basic greetings and self-introduction','Numbers, dates, time','Basic grammar patterns (N5)','Essential vocabulary — 800 words'] },
      { level: 'Elementary (Month 2–3)', items: ['JLPT N4 grammar structures','Workplace vocabulary for your sector','Listening comprehension','Reading basic Japanese text','Conversational practice with instructors'] },
      { level: 'Intermediate (Month 4–6)', items: ['JLPT N3 grammar and vocabulary','Workplace Japanese — giving/receiving instructions','Understanding Japanese work culture','Mock JLPT exams','Exam registration assistance'] },
    ],
    highlight: 'Language and vocational training run concurrently — saving 3 months vs sequential training.',
  },
  {
    id: 'vocational',
    tag: 'Vocational', tagColor: '#1a6b3a',
    title: 'Sector Vocational Training',
    subtitle: 'Japan SSW-Standard',
    duration: '3–4 months',
    schedule: 'Full-time weekday batches',
    classSize: 'Max 15 students',
    cert: 'Chhayachhetra VTC Completion Certificate',
    desc: 'Hands-on, practical skill training aligned with Japan\'s SSW employer requirements. Our instructors have real industry experience and training is conducted with actual tools and equipment — not just theory.',
    curriculum: [
      { level: 'Foundation (Week 1–3)', items: ['Japan workplace safety standards (rōdō anzen)','Work ethics and Japanese culture basics','Physical fitness and endurance training','Basic tools and equipment familiarization','Safety certifications (hazard awareness)'] },
      { level: 'Core Training (Month 1–3)', items: ['Sector-specific technical skills (hands-on)','Japan industry standards and quality expectations','Reading basic Japanese technical instructions','Tool and machine operation safety','Regular assessments and feedback'] },
      { level: 'Pre-departure Prep (Final 2 weeks)', items: ['SSW skills test mock assessments','Japan employer interview preparation','Workplace Japanese vocabulary (sector-specific)','Documentation checklist review','Pre-departure briefing'] },
    ],
    highlight: 'Available for all 14 SSW sectors. Training content customized to your specific sector.',
  },
  {
    id: 'ssw',
    tag: 'Certification', tagColor: '#0D4F9A',
    title: 'SSW Skills Test Preparation',
    subtitle: 'Specified Skilled Worker Exam',
    duration: '4–8 weeks (intensive)',
    schedule: 'Flexible — morning or evening',
    classSize: 'Max 10 students',
    cert: 'Test conducted by Japan\'s designated organizations',
    desc: 'Japan\'s SSW skills test is a sector-specific evaluation conducted by designated Japanese organizations. This intensive course is focused entirely on passing the test — with past papers, mock exams, and technical vocabulary in both Nepali and Japanese.',
    curriculum: [
      { level: 'Week 1–2', items: ['Understand test format, question types, and scoring','Past paper review (3 years of real tests)','Identify your weak areas','Technical vocabulary for your sector in Japanese'] },
      { level: 'Week 3–4', items: ['Timed mock exams under real test conditions','Detailed review of every wrong answer','Physical skills assessment (where applicable)','Mental preparation and test strategies'] },
      { level: 'Week 5–8', items: ['Full mock tests twice per week','Individual coaching for borderline candidates','Test registration assistance','Day-before preparation session'] },
    ],
    highlight: 'Test registration, transport to test venue, and result monitoring all supported.',
  },
  {
    id: 'visa',
    tag: 'Documentation', tagColor: '#7a5c00',
    title: 'Visa & Documentation Service',
    subtitle: 'SSW Visa (Japan)',
    duration: 'Ongoing — starts after skills test pass',
    schedule: 'Individual appointments',
    classSize: 'Individual service',
    cert: 'Japan SSW Visa (issued by Japanese Embassy)',
    desc: 'A single documentation error can delay your Japan visa by months. Our documentation team manages every paper — from police clearance to the Certificate of Eligibility (COE) — ensuring accuracy and timeliness at every step.',
    curriculum: [
      { level: 'Immediately After Skills Test', items: ['Employment contract review and explanation','COE (Certificate of Eligibility) application submission to Japan Immigration','Identify and collect all required documents'] },
      { level: 'During COE Processing (1–3 months)', items: ['Nepal Police Clearance Certificate (PCC)','Medical examination at designated hospital','Academic certificate legalization (if required)','Birth certificate and passport verification','Regular status updates to you and your family'] },
      { level: 'After COE Approval', items: ['Japan Embassy visa sticker application','Visa stamping coordination','Pre-departure document packet preparation','Original document safekeeping and copies','Final checklist verification before departure'] },
    ],
    highlight: 'Our team has processed 500+ Japan visa applications. We know exactly what\'s required.',
  },
];

export default function TrainingPage() {
  return (
    <>
      <Navbar />
      <main>
        <section style={{ background: 'linear-gradient(160deg,#F4F7FC 0%,#EEF3FB 100%)', paddingTop: '120px', paddingBottom: '64px' }}>
          <div className="wrap">
            <nav aria-label="Breadcrumb" style={{ marginBottom: '32px' }}>
              <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '8px', alignItems: 'center', fontSize: '11px', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
                <li><Link href="/" style={{ color: '#6E6E6E', textDecoration: 'none' }}>Home</Link></li>
                <li style={{ color: '#DDD7C8' }}>/</li>
                <li style={{ color: '#0D0D0D' }}>Training</li>
              </ol>
            </nav>
            <p className="eyebrow" style={{ marginBottom: '20px' }}>Programs We Offer</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 600, color: '#0D0D0D', lineHeight: 1.05, marginBottom: '24px' }}>
              Complete Training for<br /><span style={{ color: '#1B3A6B' }}>Japan-Ready Candidates</span>
            </h1>
            <p style={{ fontSize: '17px', color: '#6E6E6E', lineHeight: 1.75, maxWidth: '640px' }}>
              Every program at Chhayachhetra VTC is designed specifically for Nepal-to-Japan employment. Language, skills, certification, and documentation — all under one roof in Samakhusi, Kathmandu.
            </p>
          </div>
        </section>

        <section className="section" style={{ background: '#F4F7FC' }}>
          <div className="wrap">
            {programs.map((prog, idx) => (
              <div key={prog.id} style={{ marginBottom: idx < programs.length - 1 ? '64px' : 0 }}>
                {/* Header */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'flex-start', borderTop: '2px solid rgba(13,13,13,0.08)', paddingTop: '48px', marginBottom: '32px' }}>
                  <div>
                    <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: prog.tagColor, border: `1px solid ${prog.tagColor}`, padding: '3px 10px', display: 'inline-block', marginBottom: '16px' }}>
                      {prog.tag}
                    </span>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 600, color: '#0D0D0D', marginBottom: '6px' }}>
                      {prog.title}
                    </h2>
                    <p style={{ fontSize: '15px', color: prog.tagColor, fontWeight: 500 }}>{prog.subtitle}</p>
                  </div>
                  <Link href="/contact" className="btn btn-dark" style={{ padding: '12px 24px', fontSize: '11px', whiteSpace: 'nowrap' }}>
                    Enquire →
                  </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '24px' }}>
                  {/* Left: overview */}
                  <div style={{ gridColumn: 'span 1' }}>
                    <p style={{ fontSize: '14px', color: '#6E6E6E', lineHeight: 1.8, marginBottom: '24px' }}>{prog.desc}</p>

                    {/* Quick stats */}
                    <div style={{ background: '#EEF3FB', padding: '24px', marginBottom: '20px' }}>
                      {[
                        ['Duration', prog.duration],
                        ['Schedule', prog.schedule],
                        ['Class Size', prog.classSize],
                        ['Certificate', prog.cert],
                      ].map(([k,v]) => (
                        <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '12px', paddingBottom: '12px', borderBottom: '1px solid rgba(13,13,13,0.08)' }}>
                          <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6E6E6E', flexShrink: 0 }}>{k}</span>
                          <span style={{ fontSize: '12px', color: '#0D0D0D', textAlign: 'right' }}>{v}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ background: '#EEF3FB', border: '1px solid rgba(188,0,45,0.2)', padding: '16px', borderLeft: '3px solid #1B3A6B' }}>
                      <p style={{ fontSize: '12px', color: '#1B3A6B', fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
                        ✓ {prog.highlight}
                      </p>
                    </div>
                  </div>

                  {/* Right: curriculum */}
                  <div style={{ gridColumn: 'span 1' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, color: '#0D0D0D', marginBottom: '20px' }}>Curriculum Outline</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {prog.curriculum.map(phase => (
                        <div key={phase.level} style={{ background: '#fff', border: '1px solid rgba(13,13,13,0.08)', padding: '20px' }}>
                          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: prog.tagColor, marginBottom: '12px' }}>
                            {phase.level}
                          </div>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {phase.items.map(item => (
                              <li key={item} style={{ fontSize: '12px', color: '#6E6E6E', display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '6px', lineHeight: 1.5 }}>
                                <div style={{ width: '4px', height: '4px', background: prog.tagColor, borderRadius: '50%', flexShrink: 0, marginTop: '5px' }} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="section" style={{ background: '#0D0D0D' }}>
          <div className="wrap">
            <p className="eyebrow" style={{ color: 'rgba(188,0,45,0.9)', marginBottom: '16px' }}>Common Questions</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 600, color: '#F4F7FC', marginBottom: '48px' }}>
              Training FAQs
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))', gap: '32px' }}>
              {[
                { q: 'Do I need to know Japanese before starting?', a: 'No. Our Japanese language program starts from absolute zero — hiragana, katakana, and basic grammar. You will graduate at working-level JLPT N4 or N3.' },
                { q: 'Can language and vocational training run at the same time?', a: 'Yes, and we strongly recommend it. Our schedule is designed so both run concurrently, saving you 2–3 months compared to sequential training.' },
                { q: 'What if I fail the SSW skills test?', a: 'You can retake the test. We provide continued preparation support until you pass. Most of our students pass on their first attempt with our intensive mock exam program.' },
                { q: 'How much does the full training cost?', a: 'Costs vary by sector and program duration. We provide a complete transparent breakdown during your free counselling session. No hidden fees — ever.' },
                { q: 'Is accommodation available for outstation students?', a: 'We can assist with accommodation referrals near our Samakhusi center. Contact us for current options and availability.' },
                { q: 'Do you help with Japan job placement after training?', a: 'Yes. We have direct relationships with Japanese employers and registered sending organizations. Job matching, employer interviews, and contract review are all included.' },
              ].map(faq => (
                <div key={faq.q} style={{ borderTop: '1px solid rgba(248,246,241,0.1)', paddingTop: '24px' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600, color: '#F4F7FC', marginBottom: '10px', lineHeight: 1.4 }}>{faq.q}</h3>
                  <p style={{ fontSize: '13px', color: 'rgba(248,246,241,0.5)', lineHeight: 1.8, margin: 0 }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#1B3A6B', padding: '72px 0' }}>
          <div className="wrap" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>
              Enroll in a Program
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', marginBottom: '36px' }}>
              Start with a free counselling session. We'll recommend the right program combination for your sector and timeline.
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
