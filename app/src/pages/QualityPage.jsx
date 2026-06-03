import { useReveal } from '../hooks/useReveal';
import Quality from '../components/sections/Quality';
import CTABanner from '../components/sections/CTABanner';

export default function QualityPage() {
  const ref = useReveal();
  return (
    <main ref={ref}>
      <section style={{ background: 'var(--color-secondary)', padding: '8rem 0 4rem' }}>
        <div className="container">
          <div className="section__label" style={{ color: 'var(--color-primary)' }}>Quality</div>
          <h1 className="heading-xl" style={{ color: 'white', marginTop: '0.5rem' }}>Quality Assurance</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '52ch', marginTop: '1rem', lineHeight: 1.7 }}>
            ISO 9001:2015 certified. Every component manufactured and tested to zero-defect standards.
          </p>
        </div>
      </section>
      <Quality />
      <CTABanner />
    </main>
  );
}
