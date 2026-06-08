import { Helmet } from 'react-helmet-async';
import { useReveal } from '../hooks/useReveal';
import GlobalPresence from '../components/sections/GlobalPresence';
import CTABanner from '../components/sections/CTABanner';

export default function Export() {
  const ref = useReveal();
  return (
    <>
      <Helmet>
        <title>Brass Export from India | Deepak Products Jamnagar</title>
        <meta name="description" content="Export precision brass components from Jamnagar to UK, UAE, USA, Australia, Germany, Italy, Singapore and more. ECGC covered, full export documentation handled." />
        <link rel="canonical" href="https://deepakproducts.com/export" />
        <meta property="og:url" content="https://deepakproducts.com/export" />
      </Helmet>
      <main ref={ref}>
        <section style={{ background: 'var(--color-secondary)', padding: '8rem 0 4rem' }}>
          <div className="container">
            <div className="section__label" style={{ color: 'var(--color-primary)' }}>Export</div>
            <h1 className="heading-xl" style={{ color: 'white', marginTop: '0.5rem' }}>Global Export</h1>
            <p style={{ color: 'rgba(245,240,232,0.65)', maxWidth: '52ch', marginTop: '1rem', lineHeight: 1.7 }}>
              Exporting precision brass components to 10+ countries. ECGC covered, export documentation handled end-to-end.
            </p>
          </div>
        </section>
        <GlobalPresence />
        <CTABanner />
      </main>
    </>
  );
}
