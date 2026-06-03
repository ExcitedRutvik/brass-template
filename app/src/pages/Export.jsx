import { useReveal } from '../hooks/useReveal';
import GlobalPresence from '../components/sections/GlobalPresence';
import CTABanner from '../components/sections/CTABanner';

export default function Export() {
  const ref = useReveal();
  return (
    <main ref={ref}>
      <section style={{ background: 'var(--color-secondary)', padding: '8rem 0 4rem' }}>
        <div className="container">
          <div className="section__label" style={{ color: 'var(--color-primary)' }}>Export</div>
          <h1 className="heading-xl" style={{ color: 'white', marginTop: '0.5rem' }}>Global Export</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '52ch', marginTop: '1rem', lineHeight: 1.7 }}>
            Exporting precision brass components to 10+ countries. ECGC covered, export documentation handled end-to-end.
          </p>
        </div>
      </section>
      <GlobalPresence />
      <CTABanner />
    </main>
  );
}
