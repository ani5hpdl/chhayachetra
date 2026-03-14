'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#0D1B2A', color: 'rgba(238,243,251,0.50)' }}>
      <div className="wrap" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: '48px', marginBottom: '48px' }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <Image
                src="/logo.png"
                alt="Chhayachhetra VTC Logo"
                width={52}
                height={52}
                style={{ objectFit: 'contain', flexShrink: 0, borderRadius: '50%', background: '#fff', padding: '3px' }}
              />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: 600, color: '#EEF3FB', lineHeight: 1.1 }}>Chhayachhetra</div>
                <div style={{ fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4A7FC1' }}>VTC Pvt. Ltd.</div>
              </div>
            </div>
            <p style={{ fontSize: '12px', lineHeight: 1.8, marginBottom: '20px' }}>
              Nepal's trusted Japan employment consultancy and vocational training center.
            </p>
            <div style={{ fontSize: '12px', lineHeight: 2 }}>
              <a href="https://maps.google.com/?q=Samakhusi+Kathmandu" target="_blank" rel="noopener noreferrer" className="foot-link">Town Planning, Samakhusi, Kathmandu</a>
              <a href="tel:+9779761292444" className="foot-link">+977 976-1292444</a>
              <a href="mailto:chhayachhetra.vtc@gmail.com" className="foot-link">chhayachhetra.vtc@gmail.com</a>
            </div>
          </div>

          <div>
            <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#EEF3FB', marginBottom: '16px' }}>Navigate</p>
            {[['Home','/'],['Process','/process'],['Sectors','/sectors'],['Training','/training'],['About','/about'],['Contact','/contact']].map(([l,h])=>(
              <Link key={h} href={h} className="foot-link">{l}</Link>
            ))}
          </div>

          <div>
            <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#EEF3FB', marginBottom: '16px' }}>Japan Sectors</p>
            {['Construction','Agriculture','Nursing Care','Food Manufacturing','Hotel & Hospitality','Machine Parts','Shipbuilding','Auto Repair'].map(s=>(
              <span key={s} className="foot-link" style={{ cursor: 'default' }}>{s}</span>
            ))}
          </div>

          <div>
            <p style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#EEF3FB', marginBottom: '16px' }}>Training Programs</p>
            {['Japanese Language (JLPT)','EPS-TOPIK (Korean)','English Language','SSW Skills Test Prep','Visa Documentation','Pre-departure Orientation'].map(s=>(
              <span key={s} className="foot-link" style={{ cursor: 'default' }}>{s}</span>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(238,243,251,0.07)', paddingTop: '24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '12px', fontSize: '11px' }}>
          <span>© {new Date().getFullYear()} Chhayachhetra Vocational Training & Consulting Pvt. Ltd. All rights reserved.</span>
          <span style={{ color: 'rgba(238,243,251,0.25)' }}>Registered in Nepal · Samakhusi, Kathmandu</span>
        </div>
      </div>
    </footer>
  );
}
