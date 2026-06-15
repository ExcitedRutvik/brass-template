import { Helmet } from 'react-helmet-async';
import { useReveal } from '../hooks/useReveal';
import { useClient } from '../context/clientStore';
import Capabilities from '../components/sections/Capabilities';
import WhyUs from '../components/sections/WhyUs';
import CTABanner from '../components/sections/CTABanner';

export default function About() {
  const ref = useReveal();
  const client = useClient();

  return (
    <>
      <Helmet>
        <title>About Us | Deepak Products — Est. 1985, Jamnagar</title>
        <meta name="description" content="Deepak Products has manufactured precision brass components in Jamnagar since 1985. ISO 9001:2015 certified, 700+ global clients, 40 years of manufacturing excellence." />
        <link rel="canonical" href="https://deepakproducts.com/about" />
        <meta property="og:url" content="https://deepakproducts.com/about" />
      </Helmet>
      <main ref={ref}>
        <section style={{ background: 'var(--color-secondary)', padding: '8rem 0 4rem' }}>
          <div className="container">
            <div className="section__label" style={{ color: 'var(--color-primary)' }}>About Us</div>
            <h1 className="heading-xl" style={{ color: 'white', marginTop: '0.5rem' }}>{client.name}</h1>
            <p style={{ color: 'rgba(245,240,232,0.65)', maxWidth: '52ch', marginTop: '1rem', lineHeight: 1.7 }}>
              Precision brass components from Jamnagar since {client.founded}. ISO certified, globally trusted.
            </p>
          </div>
        </section>
        <Capabilities />
        <WhyUs />
        <CTABanner />
      </main>
    </>
  );
}
