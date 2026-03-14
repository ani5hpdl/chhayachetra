'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { label: 'Home',     href: '/' },
  { label: 'Process',  href: '/process' },
  { label: 'Sectors',  href: '/sectors' },
  { label: 'Training', href: '/training' },
  { label: 'About',    href: '/about' },
  { label: 'Contact',  href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [path]);

  const active = (href: string) => href === '/' ? path === '/' : path === href || path.startsWith(href + '/');

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(244,247,252,0.97)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(27,58,107,0.10)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

        {/* Logo */}
        <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image
            src="/logo.png"
            alt="Chhayachhetra VTC Logo"
            width={48}
            height={48}
            style={{ objectFit: 'contain', flexShrink: 0 }}
            priority
          />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '17px', color: '#0D1B2A', lineHeight: 1.1 }}>Chhayachhetra</div>
            <div style={{ fontSize: '9px', fontWeight: 600, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#1B3A6B' }}>VTC · Japan Specialists</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav id="desk-nav" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} className={`nav-a ${active(l.href) ? 'active' : ''}`}>{l.label}</Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div id="desk-right" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <a href="tel:+9779761292444" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#5E7491', textDecoration: 'none' }}>
            <Phone size={12} /> +977 976-1292444
          </a>
          <Link href="/contact" className="btn btn-red" style={{ padding: '10px 22px', fontSize: '11px' }}>
            Free Counselling
          </Link>
        </div>

        {/* Mobile toggle */}
        <button id="mob-toggle" onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: '#0D1B2A' }} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div id="mob-nav" className={`mob-nav ${open ? 'open' : 'closed'}`} style={{ background: '#F4F7FC', borderTop: '1px solid rgba(27,58,107,0.08)' }}>
        <div className="wrap" style={{ paddingTop: '20px', paddingBottom: '24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ fontSize: '16px', fontWeight: 500, color: active(l.href) ? '#1B3A6B' : '#2E3F55', textDecoration: 'none' }}>
              {l.label}
            </Link>
          ))}
          <hr style={{ border: 'none', borderTop: '1px solid rgba(27,58,107,0.08)', margin: '4px 0' }} />
          <a href="tel:+9779761292444" style={{ fontSize: '13px', color: '#5E7491', textDecoration: 'none' }}>+977 976-1292444</a>
          <Link href="/contact" className="btn btn-red" style={{ alignSelf: 'flex-start', padding: '12px 24px' }}>Free Counselling</Link>
        </div>
      </div>
    </header>
  );
}
