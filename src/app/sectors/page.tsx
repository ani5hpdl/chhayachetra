import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Japan Work Sectors for Nepali Workers — All 14 SSW Categories | Chhayachhetra VTC',
  description: 'Explore all 14 Japan Specified Skilled Worker (SSW) sectors open to Nepali workers: construction, agriculture, nursing care, food manufacturing, hotel, machine parts, shipbuilding, and more. Salaries, requirements, and training info.',
  keywords: ['Japan SSW sectors Nepal','Japan work categories Nepal','construction job Japan Nepal','nursing care Japan Nepal','agriculture Japan Nepal','Japan salary Nepal workers'],
  alternates: { canonical: 'https://chhayachhetra.com.np/sectors' },
};

const sectors = [
  {
    id: 'construction', name: 'Construction',
    demand: 'High', salary: '¥180,000–¥260,000',
    training: '3 months', jlpt: 'N4',
    desc: 'Japan has a massive shortage of construction workers due to aging workforce and ongoing infrastructure projects including post-Olympics rebuilding and disaster recovery.',
    roles: ['Formwork','Plastering','Painting','Piping','Roofing','Waterproofing','Concrete work','Tiling'],
    requirements: ['Age 18–35','SSW Construction Skills Test','JLPT N4 or JFT-Basic','Physical fitness'],
  },
  {
    id: 'agriculture', name: 'Agriculture & Livestock',
    demand: 'High', salary: '¥160,000–¥230,000',
    training: '3 months', jlpt: 'N4',
    desc: 'Japan\'s agricultural sector faces severe labor shortages. Work includes crop cultivation, greenhouse management, poultry, dairy, and swine farming.',
    roles: ['Crop cultivation','Vegetable/fruit growing','Greenhouse work','Livestock farming','Poultry management','Dairy farming'],
    requirements: ['Age 18–35','Agricultural Skills Test','JFT-Basic or JLPT N4','Rural living comfort'],
  },
  {
    id: 'nursing', name: 'Nursing Care (Kaigo)',
    demand: 'Very High', salary: '¥200,000–¥280,000',
    training: '4 months', jlpt: 'N4',
    desc: 'Japan\'s aging population creates unprecedented demand for care workers. This is one of the highest-demand and best-compensated SSW categories with strong promotion paths.',
    roles: ['Daily living assistance','Bathing & hygiene support','Meal support','Mobility assistance','Recreational activities','Facility administration support'],
    requirements: ['Age 18–35','Nursing Care Skills Test','JLPT N4 minimum (N3 preferred)','Compassionate personality','No criminal record'],
  },
  {
    id: 'food', name: 'Food & Beverage Manufacturing',
    demand: 'High', salary: '¥170,000–¥240,000',
    training: '3 months', jlpt: 'N4',
    desc: 'One of Japan\'s largest SSW categories covering production of processed foods, beverages, dairy, and confectionery in factory settings.',
    roles: ['Food processing','Packaging','Quality inspection','Sanitation','Machine operation','Warehouse management'],
    requirements: ['Age 18–35','Food Manufacturing Skills Test','JFT-Basic or JLPT N4','Food safety awareness'],
  },
  {
    id: 'hotel', name: 'Hotel & Hospitality (Lodging)',
    demand: 'Medium', salary: '¥160,000–¥220,000',
    training: '3 months', jlpt: 'N4',
    desc: 'Japan\'s tourism industry recovery drives demand for hotel workers. Roles span front desk, housekeeping, and food service in Japan\'s world-class hospitality industry.',
    roles: ['Front desk operations','Room cleaning/housekeeping','Laundry service','Guest services','Restaurant support','Facility maintenance'],
    requirements: ['Age 18–35','Lodging Industry Skills Test','JLPT N4 (N3 preferred for front desk)','Service mindset'],
  },
  {
    id: 'machine', name: 'Machine Parts Manufacturing',
    demand: 'High', salary: '¥190,000–¥270,000',
    training: '3 months', jlpt: 'N4',
    desc: 'Japan is a global leader in precision machinery. SSW workers join manufacturing lines for industrial machinery, robot components, and precision parts.',
    roles: ['Machine operation','CNC operation','Quality inspection','Assembly','Welding','Metal processing'],
    requirements: ['Age 18–35','Machine Parts Manufacturing Skills Test','JFT-Basic or JLPT N4','Mechanical aptitude'],
  },
  {
    id: 'shipbuilding', name: 'Shipbuilding & Ship Machinery',
    demand: 'Medium', salary: '¥200,000–¥280,000',
    training: '3 months', jlpt: 'N4',
    desc: 'Japan is among the world\'s top shipbuilders. SSW workers join yards for hull welding, painting, piping, and mechanical assembly work.',
    roles: ['Welding','Ship painting','Piping','Outfitting','Machine fitting','Electrical installation'],
    requirements: ['Age 18–35','Shipbuilding Skills Test','JFT-Basic or JLPT N4','Coastal/industrial comfort'],
  },
  {
    id: 'auto', name: 'Automobile Repair & Maintenance',
    demand: 'High', salary: '¥190,000–¥260,000',
    training: '3 months', jlpt: 'N4',
    desc: 'Japan\'s vast automotive industry needs skilled maintenance workers. This sector covers servicing, inspection, body repair, and general vehicle maintenance.',
    roles: ['Vehicle inspection','Engine/transmission service','Body repair','Painting','Electrical systems','Tire/brake service'],
    requirements: ['Age 18–35','Auto Repair Skills Test','JFT-Basic or JLPT N4','Mechanical interest/background'],
  },
  {
    id: 'cleaning', name: 'Building Cleaning',
    demand: 'Medium', salary: '¥150,000–¥210,000',
    training: '2 months', jlpt: 'N4',
    desc: 'Commercial and facility cleaning across office buildings, hospitals, hotels, and public spaces. One of the more accessible entry points to Japan work.',
    roles: ['Floor maintenance','Window cleaning','Restroom sanitation','Common area cleaning','Specialized equipment use','Waste management'],
    requirements: ['Age 18–45','Building Cleaning Skills Test','JFT-Basic or JLPT N4'],
  },
  {
    id: 'printing', name: 'Industrial Printing',
    demand: 'Low', salary: '¥170,000–¥230,000',
    training: '3 months', jlpt: 'N4',
    desc: 'Printing machine operation, color management, and quality control in Japan\'s commercial and industrial printing industry.',
    roles: ['Offset printing','Gravure printing','Screen printing','Bookbinding','Quality inspection','Pre-press operations'],
    requirements: ['Age 18–35','Industrial Printing Skills Test','JFT-Basic or JLPT N4'],
  },
  {
    id: 'casting', name: 'Casting (Foundry)',
    demand: 'Medium', salary: '¥185,000–¥255,000',
    training: '3 months', jlpt: 'N4',
    desc: 'Metal casting and foundry work supporting Japan\'s automotive and machinery industries.',
    roles: ['Die casting','Sand casting','Core making','Grinding','Deburring','Quality inspection'],
    requirements: ['Age 18–35','Casting Skills Test','JFT-Basic or JLPT N4','Heat tolerance'],
  },
  {
    id: 'forging', name: 'Forging',
    demand: 'Medium', salary: '¥185,000–¥255,000',
    training: '3 months', jlpt: 'N4',
    desc: 'Hot and cold forging for the automotive and industrial sectors. Physically demanding but well-compensated work in Japan\'s manufacturing heartland.',
    roles: ['Hot forging','Cold forging','Die setting','Trimming','Heat treatment','Inspection'],
    requirements: ['Age 18–35','Forging Skills Test','JFT-Basic or JLPT N4','Physical stamina'],
  },
  {
    id: 'electronics', name: 'Electronics & Electrical',
    demand: 'High', salary: '¥190,000–¥265,000',
    training: '3 months', jlpt: 'N4',
    desc: 'Electronic component manufacturing and assembly — one of Japan\'s most technologically advanced industries and a gateway to high-skilled work.',
    roles: ['Board assembly','Soldering','Circuit testing','Component inspection','Machine operation','Packaging'],
    requirements: ['Age 18–35','Electronics Skills Test','JFT-Basic or JLPT N4','Fine motor skills'],
  },
  {
    id: 'textiles', name: 'Textile & Apparel',
    demand: 'Low', salary: '¥155,000–¥210,000',
    training: '2 months', jlpt: 'N4',
    desc: 'Garment manufacturing and textile processing in Japan\'s fashion and industrial fabric industries.',
    roles: ['Sewing machine operation','Pattern cutting','Inspection','Fabric processing','Embroidery','Finishing'],
    requirements: ['Age 18–35','Textile Skills Test','JFT-Basic or JLPT N4'],
  },
];

const demandColor: Record<string, string> = {
  'Very High': '#1B3A6B',
  'High': '#1a6b3a',
  'Medium': '#7a5c00',
  'Low': '#6E6E6E',
};

export default function SectorsPage() {
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
                <li style={{ color: '#0D0D0D' }}>Sectors</li>
              </ol>
            </nav>
            <p className="eyebrow" style={{ marginBottom: '20px' }}>Japan SSW Program</p>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 600, color: '#0D0D0D', lineHeight: 1.05, marginBottom: '24px' }}>
              14 Japan Work Sectors<br /><span style={{ color: '#1B3A6B' }}>Open to Nepali Workers</span>
            </h1>
            <p style={{ fontSize: '17px', color: '#6E6E6E', lineHeight: 1.75, maxWidth: '640px', marginBottom: '32px' }}>
              Japan's Specified Skilled Worker (SSW) visa program covers 14 industry sectors with critical labor shortages. Each sector requires a skills test and basic Japanese language ability. We train and place candidates across all 14.
            </p>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {[['Very High','Nursing Care'],['High','8 sectors'],['Medium','4 sectors'],['Low','2 sectors']].map(([d,s])=>(
                <div key={d} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: demandColor[d] }} />
                  <span style={{ fontWeight: 600, color: demandColor[d] }}>{d}</span>
                  <span style={{ color: '#6E6E6E' }}>— {s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" style={{ background: '#F4F7FC' }}>
          <div className="wrap">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: '1px', background: 'rgba(13,13,13,0.08)' }}>
              {sectors.map(sector => (
                <div key={sector.id} className="card" style={{ padding: '36px 32px', background: '#fff' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 600, color: '#0D0D0D', flex: 1, marginRight: '12px' }}>
                      {sector.name}
                    </h2>
                    <span style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: demandColor[sector.demand], border: `1px solid ${demandColor[sector.demand]}`, padding: '3px 8px', whiteSpace: 'nowrap', background: sector.demand === 'Very High' ? '#EEF3FB' : 'transparent' }}>
                      {sector.demand}
                    </span>
                  </div>

                  <p style={{ fontSize: '13px', color: '#6E6E6E', lineHeight: 1.75, marginBottom: '20px' }}>{sector.desc}</p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '20px', background: '#F4F7FC', padding: '16px' }}>
                    <div>
                      <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6E6E6E', marginBottom: '4px' }}>Salary</div>
                      <div style={{ fontSize: '12px', fontWeight: 600, color: '#0D0D0D' }}>{sector.salary}/mo</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6E6E6E', marginBottom: '4px' }}>Training</div>
                      <div style={{ fontSize: '12px', fontWeight: 600, color: '#0D0D0D' }}>{sector.training}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6E6E6E', marginBottom: '4px' }}>Min JLPT</div>
                      <div style={{ fontSize: '12px', fontWeight: 600, color: '#1B3A6B' }}>{sector.jlpt}</div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3D3D3D', marginBottom: '8px' }}>Sample Roles</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {sector.roles.slice(0,4).map(r => (
                        <span key={r} className="tag" style={{ fontSize: '10px' }}>{r}</span>
                      ))}
                      {sector.roles.length > 4 && <span className="tag" style={{ fontSize: '10px', color: '#1B3A6B', borderColor: 'rgba(188,0,45,0.3)' }}>+{sector.roles.length - 4} more</span>}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3D3D3D', marginBottom: '8px' }}>Key Requirements</div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {sector.requirements.map(r => (
                        <li key={r} style={{ fontSize: '12px', color: '#6E6E6E', display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '4px' }}>
                          <div style={{ width: '4px', height: '4px', background: '#1B3A6B', borderRadius: '50%', flexShrink: 0, marginTop: '5px' }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#1B3A6B', padding: '72px 0' }}>
          <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '32px' }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,2.5vw,2.4rem)', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>
                Found Your Sector?
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', maxWidth: '480px', lineHeight: 1.7 }}>
                Book a free counselling session to confirm your eligibility and get a personalised training plan.
              </p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <Link href="/contact" className="btn" style={{ background: '#fff', color: '#1B3A6B' }}>Book Free Counselling</Link>
              <Link href="/training" className="btn" style={{ background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,0.4)' }}>View Training Programs</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
