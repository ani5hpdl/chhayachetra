import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#F8F6F1', paddingTop: '72px' }}>
        <div className="wrap" style={{ textAlign: 'center', padding: '80px 24px' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '80px', fontWeight: 700, color: 'rgba(13,13,13,0.08)', lineHeight: 1, marginBottom: '24px' }}>404</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '32px', fontWeight: 600, color: '#0D0D0D', marginBottom: '16px' }}>Page Not Found</h1>
          <p style={{ fontSize: '16px', color: '#6E6E6E', marginBottom: '40px' }}>The page you're looking for doesn't exist.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-dark">Go Home</Link>
            <Link href="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
