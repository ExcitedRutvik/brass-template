import { Helmet } from 'react-helmet-async';
import { useReveal } from '../hooks/useReveal';
import IndustriesSection from '../components/sections/Industries';
import CTABanner from '../components/sections/CTABanner';

export default function IndustriesPage() {
  const ref = useReveal();
  return (
    <>
      <Helmet>
        <title>Industries Served | Deepak Products — Brass Components Jamnagar</title>
        <meta name="description" content="Brass components for plumbing, automotive, electrical, oil & gas, water treatment, and construction industries. ISO certified manufacturer in Jamnagar, Gujarat." />
        <link rel="canonical" href="https://deepakproducts.com/industries" />
        <meta property="og:url" content="https://deepakproducts.com/industries" />
      </Helmet>
      <main ref={ref}>
        <section style={{ background: 'var(--color-secondary)', padding: '8rem 0 4rem' }}>
          <div className="container">
            <div className="section__label" style={{ color: 'var(--color-primary)' }}>Industries</div>
            <h1 className="heading-xl" style={{ color: 'white', marginTop: '0.5rem' }}>Industries We Serve</h1>
            <p style={{ color: 'rgba(245,240,232,0.65)', maxWidth: '52ch', marginTop: '1rem', lineHeight: 1.7 }}>
              Precision brass components trusted across plumbing, automotive, electrical, oil &amp; gas, water treatment, and construction.
            </p>
          </div>
        </section>
        <IndustriesSection />
        <CTABanner />
      </main>
    </>
  );
}
