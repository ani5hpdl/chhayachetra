'use client';
import { useState } from 'react';

const inputStyle: React.CSSProperties = {
  width: '100%', background: '#fff', border: '1px solid rgba(13,13,13,0.15)',
  padding: '13px 16px', fontSize: '14px', color: '#0D0D0D',
  fontFamily: 'var(--font-body), system-ui, sans-serif',
  outline: 'none', transition: 'border-color 0.2s',
};

export default function ContactForm() {
  const [form, setForm] = useState({ name:'', phone:'', email:'', sector:'', experience:'', message:'' });
  const [sent, setSent] = useState(false);

  const handle = (e: React.ChangeEvent<HTMLInputElement|HTMLSelectElement|HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name:'', phone:'', email:'', sector:'', experience:'', message:'' });
    setTimeout(() => setSent(false), 6000);
  };

  if (sent) return (
    <div style={{ background: '#fff', border: '1px solid rgba(13,13,13,0.08)', padding: '48px', textAlign: 'center' }}>
      <div style={{ width: '56px', height: '56px', background: '#1B3A6B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
        <div style={{ width: '20px', height: '20px', background: '#F4F7FC', borderRadius: '50%' }} />
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: '#0D0D0D', marginBottom: '12px' }}>Inquiry Received!</h3>
      <p style={{ fontSize: '14px', color: '#6E6E6E', lineHeight: 1.75 }}>
        Thank you for reaching out. Our Japan employment advisor will contact you within 24 hours to schedule your free counselling session.<br /><br />
        For immediate assistance: <a href="tel:+9779761292444" style={{ color: '#1B3A6B' }}>+977 976-1292444</a>
      </p>
    </div>
  );

  return (
    <form onSubmit={submit} style={{ background: '#fff', border: '1px solid rgba(13,13,13,0.08)', padding: '40px' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 600, color: '#0D0D0D', marginBottom: '28px' }}>Send an Inquiry</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6E6E6E', display: 'block', marginBottom: '8px' }}>
            Full Name <span style={{ color: '#1B3A6B' }}>*</span>
          </label>
          <input name="name" required value={form.name} onChange={handle} placeholder="Your full name" style={inputStyle} />
        </div>
        <div>
          <label style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6E6E6E', display: 'block', marginBottom: '8px' }}>
            Phone <span style={{ color: '#1B3A6B' }}>*</span>
          </label>
          <input name="phone" type="tel" required value={form.phone} onChange={handle} placeholder="+977 98XXXXXXXX" style={inputStyle} />
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6E6E6E', display: 'block', marginBottom: '8px' }}>Email Address</label>
        <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" style={inputStyle} />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6E6E6E', display: 'block', marginBottom: '8px' }}>
            Preferred Japan Sector <span style={{ color: '#1B3A6B' }}>*</span>
          </label>
          <select name="sector" required value={form.sector} onChange={handle} style={{ ...inputStyle, cursor: 'pointer' }}>
            <option value="">Select a sector…</option>
            {['Construction','Agriculture & Livestock','Nursing Care','Food Manufacturing','Hotel & Hospitality','Machine Parts','Shipbuilding','Auto Repair','Building Cleaning','Industrial Printing','Casting','Forging','Electronics','Textiles','Not sure yet'].map(s=>(
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6E6E6E', display: 'block', marginBottom: '8px' }}>Current Japanese Level</label>
          <select name="experience" value={form.experience} onChange={handle} style={{ ...inputStyle, cursor: 'pointer' }}>
            <option value="">Select…</option>
            <option>No Japanese at all</option>
            <option>Some basics (hiragana/katakana)</option>
            <option>JLPT N5</option>
            <option>JLPT N4</option>
            <option>JLPT N3 or above</option>
          </select>
        </div>
      </div>

      <div style={{ marginBottom: '24px' }}>
        <label style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6E6E6E', display: 'block', marginBottom: '8px' }}>Message / Questions</label>
        <textarea name="message" rows={4} value={form.message} onChange={handle} placeholder="Any specific questions about the process, timeline, cost, or your situation…" style={{ ...inputStyle, resize: 'none' }} />
      </div>

      <button type="submit" className="btn btn-dark" style={{ width: '100%', justifyContent: 'center' }}>
        Send Inquiry — We'll Respond Within 24 Hours
      </button>
      <p style={{ fontSize: '11px', color: '#6E6E6E', textAlign: 'center', marginTop: '12px' }}>
        Or call directly: <a href="tel:+9779761292444" style={{ color: '#1B3A6B' }}>+977 976-1292444</a>
      </p>
    </form>
  );
}
