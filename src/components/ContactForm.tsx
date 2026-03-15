'use client';
import { useState } from 'react';

const sectors = [
  'Construction','Agriculture & Livestock','Nursing Care (Kaigo)',
  'Food & Beverage Manufacturing','Hotel & Hospitality','Machine Parts Manufacturing',
  'Shipbuilding & Ship Machinery','Automobile Repair','Building Cleaning',
  'Industrial Printing','Casting (Foundry)','Forging',
  'Electronics & Electrical','Textile & Apparel','Not sure yet',
];

const japaneseLevels = [
  'No Japanese at all','Some basics (hiragana/katakana)',
  'JLPT N5','JLPT N4','JLPT N3 or above',
];

const label: React.CSSProperties = {
  fontSize: '10px', fontWeight: 700, letterSpacing: '0.18em',
  textTransform: 'uppercase', color: '#5E7491',
  display: 'block', marginBottom: '7px',
};

const input: React.CSSProperties = {
  width: '100%', background: '#F9FAFB',
  border: '1px solid #E5E7EB', borderRadius: '4px',
  padding: '11px 14px', fontSize: '14px', color: '#0D1B2A',
  fontFamily: 'var(--font-body), system-ui, sans-serif',
  outline: 'none', transition: 'border-color 0.2s, background 0.2s',
};

export default function ContactForm() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', sector:'', level:'', message:'' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState('');

  const handle = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name:'', phone:'', email:'', sector:'', level:'', message:'' });
    setTimeout(() => setSent(false), 7000);
  };

  const focusStyle = (field: string): React.CSSProperties => ({
    ...input,
    borderColor: focused === field ? '#1B3A6B' : '#E5E7EB',
    background: focused === field ? '#fff' : '#F9FAFB',
    boxShadow: focused === field ? '0 0 0 3px rgba(27,58,107,0.08)' : 'none',
  });

  if (sent) return (
    <div style={{ background: '#fff', border: '1px solid #E8EFF9', borderRadius: '8px', padding: '56px 40px', textAlign: 'center' }}>
      <div style={{ width: '60px', height: '60px', background: '#EEF3FB', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
        <span style={{ fontSize: '24px' }}>✓</span>
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: '#0D1B2A', marginBottom: '12px' }}>
        Inquiry Received!
      </h3>
      <p style={{ fontSize: '14px', color: '#5E7491', lineHeight: 1.80, maxWidth: '340px', margin: '0 auto 24px' }}>
        Our Japan employment advisor will contact you within 24 hours to schedule your free counselling session.
      </p>
      <a href="tel:+9779761292444" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1B3A6B', color: '#fff', padding: '12px 24px', fontWeight: 700, fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '3px' }}>
        Call Now: +977 976-1292444
      </a>
    </div>
  );

  return (
    <form onSubmit={submit} style={{ background: '#fff', border: '1px solid #E8EFF9', borderRadius: '8px', padding: 'clamp(24px,4vw,40px)' }}>
      <div style={{ marginBottom: '28px' }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, color: '#0D1B2A', margin: '0 0 6px' }}>Send an Inquiry</h2>
        <p style={{ fontSize: '13px', color: '#5E7491', margin: 0 }}>We respond within 24 hours — usually sooner.</p>
      </div>

      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '14px', marginBottom: '14px' }}>
        <div>
          <label style={label}>Full Name <span style={{ color: '#1B3A6B' }}>*</span></label>
          <input name="name" required value={form.name} onChange={handle}
            placeholder="Your full name"
            style={focusStyle('name')}
            onFocus={() => setFocused('name')} onBlur={() => setFocused('')}
          />
        </div>
        <div>
          <label style={label}>Phone <span style={{ color: '#1B3A6B' }}>*</span></label>
          <input name="phone" type="tel" required value={form.phone} onChange={handle}
            placeholder="+977 98XXXXXXXX"
            style={focusStyle('phone')}
            onFocus={() => setFocused('phone')} onBlur={() => setFocused('')}
          />
        </div>
      </div>

      {/* Email */}
      <div style={{ marginBottom: '14px' }}>
        <label style={label}>Email Address</label>
        <input name="email" type="email" value={form.email} onChange={handle}
          placeholder="your@email.com"
          style={focusStyle('email')}
          onFocus={() => setFocused('email')} onBlur={() => setFocused('')}
        />
      </div>

      {/* Sector + Level */}
      <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '14px', marginBottom: '14px' }}>
        <div>
          <label style={label}>Preferred Sector <span style={{ color: '#1B3A6B' }}>*</span></label>
          <select name="sector" required value={form.sector} onChange={handle}
            style={{ ...focusStyle('sector'), cursor: 'pointer', appearance: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235E7491' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center',
            }}
            onFocus={() => setFocused('sector')} onBlur={() => setFocused('')}
          >
            <option value="">Select a sector…</option>
            {sectors.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label style={label}>Current Japanese Level</label>
          <select name="level" value={form.level} onChange={handle}
            style={{ ...focusStyle('level'), cursor: 'pointer', appearance: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%235E7491' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center',
            }}
            onFocus={() => setFocused('level')} onBlur={() => setFocused('')}
          >
            <option value="">Select…</option>
            {japaneseLevels.map(l => <option key={l} value={l}>{l}</option>)}
          </select>
        </div>
      </div>

      {/* Message */}
      <div style={{ marginBottom: '24px' }}>
        <label style={label}>Message / Questions</label>
        <textarea name="message" rows={4} value={form.message} onChange={handle}
          placeholder="Any questions about the process, timeline, cost, or your situation…"
          style={{ ...focusStyle('message'), resize: 'none' }}
          onFocus={() => setFocused('message')} onBlur={() => setFocused('')}
        />
      </div>

      <button type="submit" style={{
        width: '100%', background: '#1B3A6B', color: '#fff',
        padding: '15px 24px', fontWeight: 700, fontSize: '12px',
        letterSpacing: '0.12em', textTransform: 'uppercase',
        border: 'none', borderRadius: '4px', cursor: 'pointer',
        fontFamily: 'var(--font-body), system-ui, sans-serif',
        transition: 'background 0.2s',
      }}>
        Submit Inquiry — We&apos;ll Respond Within 24 Hours
      </button>
      <p style={{ fontSize: '11px', color: '#9CA3AF', textAlign: 'center', marginTop: '12px', lineHeight: 1.6 }}>
        Prefer to call? <a href="tel:+9779761292444" style={{ color: '#1B3A6B', fontWeight: 600, textDecoration: 'none' }}>+977 976-1292444</a>
        &nbsp;·&nbsp; Sun–Fri 9am–6pm
      </p>
    </form>
  );
}