import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Japan Work Sectors for Nepali Workers — All 14 SSW Categories | Chhayachhetra VTC',
  description: 'Explore all 14 Japan SSW sectors open to Nepali workers: construction, agriculture, nursing care, food manufacturing, hotel, machine parts, shipbuilding, and more.',
  keywords: ['Japan SSW sectors Nepal','Japan work categories Nepal','construction job Japan Nepal','nursing care Japan Nepal'],
  alternates: { canonical: 'https://chhayachhetra.com.np/sectors' },
};

const IMG_HERO        = 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=85';
const IMG_CONSTRUCTION= 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80';
const IMG_NURSING     = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80';
const IMG_FOOD        = 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80';

// Demand config
const DEMAND: Record<string, { color: string; bg: string; dot: string }> = {
  'Very High': { color: '#0C4A6E', bg: '#E0F2FE', dot: '#0369A1' },
  'High':      { color: '#14532D', bg: '#DCFCE7', dot: '#15803D' },
  'Medium':    { color: '#78350F', bg: '#FEF3C7', dot: '#B45309' },
  'Low':       { color: '#374151', bg: '#F3F4F6', dot: '#6B7280' },
};

const sectors = [
  { id:'construction', name:'Construction',              icon:'🏗', demand:'High',      salary:'¥180K–¥260K', training:'3 months', jlpt:'N4',
    desc:'Massive shortage driven by aging workforce and ongoing infrastructure projects including disaster recovery rebuilding.',
    roles:['Formwork','Plastering','Painting','Piping','Roofing','Waterproofing','Concrete work','Tiling'],
    reqs:['Age 18–35','SSW Construction Skills Test','JLPT N4 or JFT-Basic','Physical fitness'] },
  { id:'agriculture',  name:'Agriculture & Livestock',   icon:'🌾', demand:'High',      salary:'¥160K–¥230K', training:'3 months', jlpt:'N4',
    desc:'Severe labor shortages across crop cultivation, greenhouse management, poultry, dairy, and swine farming.',
    roles:['Crop cultivation','Vegetable/fruit growing','Greenhouse work','Livestock farming','Poultry management','Dairy farming'],
    reqs:['Age 18–35','Agricultural Skills Test','JFT-Basic or JLPT N4','Rural living comfort'] },
  { id:'nursing',      name:'Nursing Care (Kaigo)',       icon:'🏥', demand:'Very High', salary:'¥200K–¥280K', training:'4 months', jlpt:'N4',
    desc:"Japan's aging population creates unprecedented demand — one of the highest-demand and best-compensated SSW categories with strong promotion paths.",
    roles:['Daily living assistance','Bathing & hygiene','Meal support','Mobility assistance','Recreational activities','Facility admin'],
    reqs:['Age 18–35','Nursing Care Skills Test','JLPT N4 min (N3 preferred)','Compassionate personality','No criminal record'] },
  { id:'food',         name:'Food & Beverage Mfg.',       icon:'🍱', demand:'High',      salary:'¥170K–¥240K', training:'3 months', jlpt:'N4',
    desc:"One of Japan's largest SSW categories covering processed foods, beverages, dairy, and confectionery in factory settings.",
    roles:['Food processing','Packaging','Quality inspection','Sanitation','Machine operation','Warehouse management'],
    reqs:['Age 18–35','Food Manufacturing Skills Test','JFT-Basic or JLPT N4','Food safety awareness'] },
  { id:'hotel',        name:'Hotel & Hospitality',        icon:'🏨', demand:'Medium',    salary:'¥160K–¥220K', training:'3 months', jlpt:'N4',
    desc:"Tourism recovery drives demand across front desk, housekeeping, and food service in Japan's world-class hospitality industry.",
    roles:['Front desk','Housekeeping','Laundry service','Guest services','Restaurant support','Facility maintenance'],
    reqs:['Age 18–35','Lodging Industry Skills Test','JLPT N4 (N3 for front desk)','Service mindset'] },
  { id:'machine',      name:'Machine Parts Mfg.',         icon:'⚙️', demand:'High',      salary:'¥190K–¥270K', training:'3 months', jlpt:'N4',
    desc:'Global leader in precision machinery — SSW workers join manufacturing lines for industrial machinery and precision parts.',
    roles:['Machine operation','CNC operation','Quality inspection','Assembly','Welding','Metal processing'],
    reqs:['Age 18–35','Machine Parts Mfg Skills Test','JFT-Basic or JLPT N4','Mechanical aptitude'] },
  { id:'shipbuilding', name:'Shipbuilding & Machinery',   icon:'🚢', demand:'Medium',    salary:'¥200K–¥280K', training:'3 months', jlpt:'N4',
    desc:"Among the world's top shipbuilders. SSW workers join yards for hull welding, painting, piping, and mechanical assembly.",
    roles:['Welding','Ship painting','Piping','Outfitting','Machine fitting','Electrical installation'],
    reqs:['Age 18–35','Shipbuilding Skills Test','JFT-Basic or JLPT N4','Coastal/industrial comfort'] },
  { id:'auto',         name:'Automobile Repair',          icon:'🔧', demand:'High',      salary:'¥190K–¥260K', training:'3 months', jlpt:'N4',
    desc:"Japan's vast automotive industry needs skilled workers covering servicing, inspection, body repair, and vehicle maintenance.",
    roles:['Vehicle inspection','Engine/transmission','Body repair','Painting','Electrical systems','Tire/brake service'],
    reqs:['Age 18–35','Auto Repair Skills Test','JFT-Basic or JLPT N4','Mechanical background'] },
  { id:'cleaning',     name:'Building Cleaning',          icon:'🧹', demand:'Medium',    salary:'¥150K–¥210K', training:'2 months', jlpt:'N4',
    desc:'Commercial and facility cleaning across offices, hospitals, hotels. An accessible entry point to Japan employment.',
    roles:['Floor maintenance','Window cleaning','Restroom sanitation','Common area','Specialized equipment','Waste management'],
    reqs:['Age 18–45','Building Cleaning Skills Test','JFT-Basic or JLPT N4'] },
  { id:'printing',     name:'Industrial Printing',        icon:'🖨', demand:'Low',       salary:'¥170K–¥230K', training:'3 months', jlpt:'N4',
    desc:"Printing machine operation, color management, and quality control in Japan's commercial printing industry.",
    roles:['Offset printing','Gravure printing','Screen printing','Bookbinding','Quality inspection','Pre-press'],
    reqs:['Age 18–35','Industrial Printing Skills Test','JFT-Basic or JLPT N4'] },
  { id:'casting',      name:'Casting (Foundry)',           icon:'🔩', demand:'Medium',    salary:'¥185K–¥255K', training:'3 months', jlpt:'N4',
    desc:"Metal casting and foundry work supporting Japan's automotive and machinery industries.",
    roles:['Die casting','Sand casting','Core making','Grinding','Deburring','Quality inspection'],
    reqs:['Age 18–35','Casting Skills Test','JFT-Basic or JLPT N4','Heat tolerance'] },
  { id:'forging',      name:'Forging',                    icon:'🔨', demand:'Medium',    salary:'¥185K–¥255K', training:'3 months', jlpt:'N4',
    desc:'Hot and cold forging for automotive and industrial sectors. Physically demanding but well-compensated work.',
    roles:['Hot forging','Cold forging','Die setting','Trimming','Heat treatment','Inspection'],
    reqs:['Age 18–35','Forging Skills Test','JFT-Basic or JLPT N4','Physical stamina'] },
  { id:'electronics',  name:'Electronics & Electrical',   icon:'💡', demand:'High',      salary:'¥190K–¥265K', training:'3 months', jlpt:'N4',
    desc:"Electronic component manufacturing — one of Japan's most technologically advanced industries and a gateway to high-skilled work.",
    roles:['Board assembly','Soldering','Circuit testing','Component inspection','Machine operation','Packaging'],
    reqs:['Age 18–35','Electronics Skills Test','JFT-Basic or JLPT N4','Fine motor skills'] },
  { id:'textiles',     name:'Textile & Apparel',          icon:'🧵', demand:'Low',       salary:'¥155K–¥210K', training:'2 months', jlpt:'N4',
    desc:"Garment manufacturing and textile processing in Japan's fashion and industrial fabric industries.",
    roles:['Sewing machine operation','Pattern cutting','Inspection','Fabric processing','Embroidery','Finishing'],
    reqs:['Age 18–35','Textile Skills Test','JFT-Basic or JLPT N4'] },
];

export default function SectorsPage() {
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
                <li style={{ color: '#1B3A6B' }}>Sectors</li>
              </ol>
            </nav>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{ width: '28px', height: '2px', background: '#1B3A6B' }} />
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#1B3A6B' }}>Japan SSW Program</span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem,3.8vw,3.4rem)', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.10, letterSpacing: '-0.02em', marginBottom: '20px' }}>
              14 Japan Work Sectors<br /><span style={{ color: '#1B3A6B' }}>Open to Nepali Workers</span>
            </h1>
            <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.80, maxWidth: '420px', marginBottom: '32px' }}>
              Japan's SSW visa covers 14 industries with critical labor shortages. Each requires a skills test and basic Japanese. We train and place candidates across all 14.
            </p>
            {/* Demand legend pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
              {Object.entries(DEMAND).map(([label, cfg]) => (
                <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 600, padding: '5px 12px', background: cfg.bg, color: cfg.color, borderRadius: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: cfg.dot, display: 'inline-block' }} />{label}
                </span>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0', borderTop: '1px solid rgba(27,58,107,0.12)', paddingTop: '28px', width: 'fit-content' }}>
              {[{ value:'14', label:'Total Sectors' },{ value:'¥160K+', label:'Min. Salary' },{ value:'N4', label:'Min. JLPT' }].map((s, i) => (
                <div key={s.label} style={{ paddingRight: '24px', marginRight: '24px', borderRight: i < 2 ? '1px solid rgba(27,58,107,0.10)' : 'none' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: '#1B3A6B', lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: '10px', fontWeight: 600, color: '#5E7491', marginTop: '4px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block" style={{ minHeight: '65vh' }}>
            <Image src={IMG_HERO} alt="Japan industrial work" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority unoptimized />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #F4F7FC 0%, transparent 18%)' }} />
            <div style={{ position: 'absolute', top: '40%', right: '32px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {[{ label:'Nursing Care', d:'Very High' },{ label:'Construction', d:'High' },{ label:'Electronics', d:'High' }].map(s => (
                <div key={s.label} style={{ background: 'rgba(11,24,45,0.82)', backdropFilter: 'blur(10px)', padding: '10px 14px', borderRadius: '3px', borderLeft: `2px solid ${DEMAND[s.d].dot}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: '#EEF3FB' }}>{s.label}</span>
                  <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: DEMAND[s.d].dot, background: DEMAND[s.d].bg + '30', padding: '2px 7px', borderRadius: '2px' }}>{s.d}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            TRUST BAR
        ═══════════════════════════════════════ */}
        <div style={{ background: '#1B3A6B', padding: '16px 0' }}>
          <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Skills Training for All 14 Sectors','JLPT Language Preparation Included','SSW Skills Test Coaching','Direct Japan Employer Matching'].map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 28px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
                <span style={{ color: '#6BA3D6', fontWeight: 700, fontSize: '12px' }}>✓</span>
                <span style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(255,255,255,0.80)', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════════════════════════════
            FEATURED 3 — photo cards
        ═══════════════════════════════════════ */}
        <section style={{ background: '#0D1B2A', padding: '80px 0' }}>
          <div className="wrap">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
              <div style={{ width: '28px', height: '2px', background: '#4A7FC1' }} />
              <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#4A7FC1' }}>Highest Demand</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { src: IMG_CONSTRUCTION, label:'Construction',  badge:'High Demand',      salary:'¥180K–¥260K' },
                { src: IMG_NURSING,      label:'Nursing Care',  badge:'Very High Demand', salary:'¥200K–¥280K' },
                { src: IMG_FOOD,         label:'Food Mfg.',     badge:'High Demand',      salary:'¥170K–¥240K' },
              ].map((s, i) => (
                <div key={i} style={{ position: 'relative', height: '260px', overflow: 'hidden', borderRadius: '4px' }}>
                  <Image src={s.src} alt={s.label} fill style={{ objectFit: 'cover' }} unoptimized />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(11,24,45,0.90) 0%, rgba(11,24,45,0.15) 60%)' }} />
                  <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                    <span style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8BB8E8', background: 'rgba(27,58,107,0.70)', padding: '3px 9px', borderRadius: '2px', display: 'inline-block', marginBottom: '6px' }}>{s.badge}</span>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>{s.label}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.60)', marginTop: '4px' }}>{s.salary}/month</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            ALL 14 SECTORS — professional table-cards
        ═══════════════════════════════════════ */}
        <section className="section" style={{ background: '#fff' }}>
          <div className="wrap">

            {/* Section header */}
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '40px', paddingBottom: '24px', borderBottom: '2px solid #0D1B2A' }}>
              <div>
                <p style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#1B3A6B', marginBottom: '8px' }}>Complete Sector Guide</p>
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.8vw,2.4rem)', fontWeight: 700, color: '#0D1B2A', lineHeight: 1.1 }}>All 14 Japan SSW Sectors</h2>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {Object.entries(DEMAND).map(([label, cfg]) => (
                  <span key={label} style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '10px', fontWeight: 600, padding: '4px 10px', background: cfg.bg, color: cfg.color, borderRadius: '3px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: cfg.dot, display: 'inline-block' }} />{label}
                  </span>
                ))}
              </div>
            </div>

            {/* Sector rows */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {sectors.map((sector, i) => {
                const cfg = DEMAND[sector.demand];
                return (
                  <div key={sector.id} style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    borderBottom: '1px solid #E8EFF9',
                    padding: '28px 0',
                    background: '#fff',
                  }}>
                    {/* Top row: icon + name + demand + salary */}
                    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto_auto] gap-4 lg:gap-6 items-start lg:items-center" style={{ marginBottom: '16px' }}>

                      {/* Icon + name */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{ width: '44px', height: '44px', background: cfg.bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>
                          {sector.icon}
                        </div>
                        <div>
                          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '17px', fontWeight: 700, color: '#0D1B2A', margin: 0, lineHeight: 1.2 }}>{sector.name}</h3>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: cfg.dot, display: 'inline-block', flexShrink: 0 }} />
                            <span style={{ fontSize: '11px', fontWeight: 600, color: cfg.color }}>{sector.demand} Demand</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p style={{ fontSize: '13px', color: '#5E7491', lineHeight: 1.70, margin: 0, maxWidth: '480px' }}>{sector.desc}</p>

                      {/* Stats chips */}
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        {[
                          { label: 'Salary', value: sector.salary + '/mo' },
                          { label: 'Training', value: sector.training },
                          { label: 'JLPT', value: sector.jlpt },
                        ].map(stat => (
                          <div key={stat.label} style={{ textAlign: 'center', background: '#F4F7FC', padding: '8px 14px', borderRadius: '4px', minWidth: '80px' }}>
                            <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#5E7491', marginBottom: '3px' }}>{stat.label}</div>
                            <div style={{ fontSize: '12px', fontWeight: 700, color: stat.label === 'JLPT' ? '#1B3A6B' : '#0D1B2A', whiteSpace: 'nowrap' }}>{stat.value}</div>
                          </div>
                        ))}
                      </div>

                      {/* Enquire link */}
                      <Link href="/contact" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.10em', textTransform: 'uppercase', color: '#1B3A6B', textDecoration: 'none', borderBottom: '1.5px solid rgba(27,58,107,0.30)', paddingBottom: '2px', whiteSpace: 'nowrap' }}>
                        Enquire →
                      </Link>
                    </div>

                    {/* Bottom row: roles + requirements */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6" style={{ paddingLeft: '0' }}>
                      {/* Roles */}
                      <div>
                        <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '8px' }}>Sample Roles</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                          {sector.roles.slice(0, 5).map(r => (
                            <span key={r} style={{ fontSize: '11px', padding: '3px 10px', background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#374151', borderRadius: '3px' }}>{r}</span>
                          ))}
                          {sector.roles.length > 5 && (
                            <span style={{ fontSize: '11px', padding: '3px 10px', background: cfg.bg, color: cfg.color, borderRadius: '3px', fontWeight: 600 }}>+{sector.roles.length - 5}</span>
                          )}
                        </div>
                      </div>
                      {/* Requirements */}
                      <div>
                        <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '8px' }}>Requirements</div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                          {sector.reqs.map(r => (
                            <span key={r} style={{ fontSize: '11px', padding: '3px 10px', background: '#F9FAFB', border: '1px solid #E5E7EB', color: '#374151', borderRadius: '3px' }}>{r}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════
            CTA
        ═══════════════════════════════════════ */}
        <section style={{ position: 'relative', padding: '100px 0', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <Image src={IMG_HERO} alt="Japan" fill style={{ objectFit: 'cover', objectPosition: 'center' }} unoptimized />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,18,38,0.84)' }} />
          </div>
          <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center" style={{ position: 'relative', zIndex: 1 }}>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.30em', color: '#4A7FC1', marginBottom: '16px' }}>日本への第一歩 — FIRST STEP TO JAPAN</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem,3.5vw,3rem)', fontWeight: 700, color: '#fff', lineHeight: 1.10, marginBottom: '14px' }}>Found Your Sector?</h2>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.60)', lineHeight: 1.80, maxWidth: '480px' }}>
                Book a free counselling session to confirm your eligibility and get a personalised training plan.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', minWidth: '220px' }}>
              <Link href="/contact" style={{ display: 'block', textAlign: 'center', background: '#1B3A6B', color: '#fff', padding: '16px 32px', fontWeight: 700, fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', border: '2px solid #2A5298' }}>
                Book Free Counselling
              </Link>
              <Link href="/training" style={{ display: 'block', textAlign: 'center', background: 'transparent', color: 'rgba(255,255,255,0.75)', padding: '14px 32px', fontWeight: 600, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', border: '1.5px solid rgba(255,255,255,0.18)' }}>
                View Training Programs
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}