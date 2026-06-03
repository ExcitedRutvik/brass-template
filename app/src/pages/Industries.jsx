import { useReveal } from '../hooks/useReveal';
import Industries from '../components/sections/Industries';
import CTABanner from '../components/sections/CTABanner';

export default function IndustriesPage() {
  const ref = useReveal();
  return (
    <main ref={ref}>
      <section style={{ background: 'var(--color-secondary)', padding: '8rem 0 4rem' }}>
        <div className="container">
          <div className="section__label" style={{ color: 'var(--color-primary)' }}>Industries</div>
          <h1 className="heading-xl" style={{ color: 'white', marginTop: '0.5rem' }}>Industries We Serve</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '52ch', marginTop: '1rem', lineHeight: 1.7 }}>
            Precision brass components trusted across plumbing, automotive, electrical, oil &amp; gas, water treatment, and construction.
          </p>
        </div>
      </section>
      <Industries />
      <CTABanner />
    </main>
  );
}
