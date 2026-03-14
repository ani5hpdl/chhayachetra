import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'About Chhayachhetra VTC | Nepal\'s Japan Employment Specialists',
  description: 'Learn about Chhayachhetra Vocational Training & Consulting Pvt. Ltd. — a government-registered Japan employment consultancy and vocational training center in Samakhusi, Kathmandu, Nepal.',
  alternates: { canonical: 'https://chhayachhetra.com.np/about' },
};

export default function AboutPage() {
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
                <li style={{ color: '#0D0D0D' }}>About</li>
              </ol>
            </nav>
            <p className="eyebrow" style={{ marginBottom: '20px' }}>About Us</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 600, color: '#0D0D0D', lineHeight: 1.05, marginBottom: '24px' }}>
              Nepal's Trusted<br /><span style={{ color: '#1B3A6B' }}>Japan Employment Partner</span>
            </h1>
            <p style={{ fontSize: '17px', color: '#6E6E6E', lineHeight: 1.75, maxWidth: '640px' }}>
              Chhayachhetra VTC is a government-registered vocational training center and employment consultancy specializing exclusively in Nepal-to-Japan employment.
            </p>
          </div>
        </section>

        <section className="section" style={{ background: '#F4F7FC' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '64px', alignItems: 'start' }}>
              <div>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 600, color: '#0D0D0D', marginBottom: '20px' }}>Who We Are</h2>
                <p style={{ fontSize: '15px', color: '#6E6E6E', lineHeight: 1.85, marginBottom: '16px' }}>
                  Chhayachhetra Vocational Training &amp; Consulting Pvt. Ltd. is based in Town Planning, Samakhusi, Kathmandu. We are registered under Nepal's Department of Foreign Employment (DoFE) and operate as a licensed consulting agency and vocational school.
                </p>
                <p style={{ fontSize: '15px', color: '#6E6E6E', lineHeight: 1.85, marginBottom: '16px' }}>
                  Our focus is narrow by design: we specialize exclusively in Nepal→Japan employment through Japan's Specified Skilled Worker (SSW) visa program. This single-country focus means every instructor, every curriculum, and every process is optimized for one destination — Japan.
                </p>
                <p style={{ fontSize: '15px', color: '#6E6E6E', lineHeight: 1.85 }}>
                  We believe the best way to get Nepali workers to Japan safely and successfully is through genuine preparation — proper language training, real vocational skills, correct documentation, and honest counselling about what life in Japan is actually like.
                </p>
              </div>

              <div>
                <div style={{ background: '#0D0D0D', padding: '48px', marginBottom: '20px' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: 600, color: '#F4F7FC', lineHeight: 1.3, marginBottom: '16px' }}>
                    "We prepare Nepali workers not just to go to Japan — but to <span style={{ color: '#1B3A6B' }}>succeed</span> there."
                  </p>
                  <p style={{ fontSize: '12px', color: 'rgba(248,246,241,0.35)' }}>— Chhayachhetra VTC</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(13,13,13,0.1)' }}>
                  {[['14','Japan work sectors covered'],['6–12','Months avg. placement time'],['N5–N3','JLPT levels trained'],['100%','Transparent fee structure']].map(([v,l])=>(
                    <div key={l} style={{ background: '#F4F7FC', padding: '24px' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700, color: '#1B3A6B', marginBottom: '4px' }}>{v}</div>
                      <div style={{ fontSize: '11px', color: '#6E6E6E', lineHeight: 1.5 }}>{l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: '#EEF3FB' }}>
          <div className="wrap">
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 600, color: '#0D0D0D', marginBottom: '48px' }}>Our Values</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: '32px' }}>
              {[
                { n:'01', title:'Honesty First', desc:'We tell you the truth about Japan — the opportunities, the challenges, the costs, and realistic timelines. No false promises.' },
                { n:'02', title:'Legal & Ethical', desc:'Every placement we do is fully legal, DOE-compliant, and through verified Japanese employers. We protect you.' },
                { n:'03', title:'Quality Training', desc:'We don\'t cut corners on training. Your success in Japan depends on how well-prepared you are — so we prepare you properly.' },
                { n:'04', title:'Lifelong Support', desc:'Our relationship doesn\'t end when you board the plane. We\'re available to you even after you arrive in Japan.' },
              ].map(v=>(
                <div key={v.n} style={{ borderTop: '2px solid rgba(13,13,13,0.12)', paddingTop: '24px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, color: '#1B3A6B', letterSpacing: '0.08em', marginBottom: '12px' }}>{v.n}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 600, color: '#0D0D0D', marginBottom: '10px' }}>{v.title}</h3>
                  <p style={{ fontSize: '13px', color: '#6E6E6E', lineHeight: 1.8 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: '#1B3A6B', padding: '72px 0' }}>
          <div className="wrap" style={{ textAlign: 'center' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>Come Meet Us</h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', marginBottom: '36px' }}>Town Planning, Samakhusi, Kathmandu. Open Sun–Fri, 9am–5pm.</p>
            <Link href="/contact" className="btn" style={{ background: '#fff', color: '#1B3A6B' }}>Get in Touch →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
