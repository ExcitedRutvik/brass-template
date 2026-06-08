import { Helmet } from 'react-helmet-async';
import { useReveal } from '../hooks/useReveal';
import Quality from '../components/sections/Quality';
import CTABanner from '../components/sections/CTABanner';

export default function QualityPage() {
  const ref = useReveal();
  return (
    <>
      <Helmet>
        <title>ISO 9001:2015 Certified Brass Manufacturer | Deepak Products Jamnagar</title>
        <meta name="description" content="ISO 9001:2015 certified brass components manufacturer in Jamnagar. Every batch manufactured and tested to zero-defect standards. CE Marking and RoHS compliant." />
        <link rel="canonical" href="https://deepakproducts.com/quality" />
        <meta property="og:url" content="https://deepakproducts.com/quality" />
      </Helmet>
      <main ref={ref}>
        <section style={{ background: 'var(--color-secondary)', padding: '8rem 0 4rem' }}>
          <div className="container">
            <div className="section__label" style={{ color: 'var(--color-primary)' }}>Quality</div>
            <h1 className="heading-xl" style={{ color: 'white', marginTop: '0.5rem' }}>Quality Assurance</h1>
            <p style={{ color: 'rgba(245,240,232,0.65)', maxWidth: '52ch', marginTop: '1rem', lineHeight: 1.7 }}>
              ISO 9001:2015 certified. Every component manufactured and tested to zero-defect standards.
            </p>
          </div>
        </section>
        <Quality />
        <CTABanner />
      </main>
    </>
  );
}
