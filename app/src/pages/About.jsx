import { useReveal } from '../hooks/useReveal';
import { useClient } from '../context/ClientContext';
import Capabilities from '../components/sections/Capabilities';
import WhyUs from '../components/sections/WhyUs';
import CTABanner from '../components/sections/CTABanner';

export default function About() {
  const ref = useReveal();
  const client = useClient();

  return (
    <main ref={ref}>
      <section style={{ background: 'var(--color-secondary)', padding: '8rem 0 4rem' }}>
        <div className="container">
          <div className="section__label" style={{ color: 'var(--color-primary)' }}>About Us</div>
          <h1 className="heading-xl" style={{ color: 'white', marginTop: '0.5rem' }}>
            {client.name}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '52ch', marginTop: '1rem', lineHeight: 1.7 }}>
            Precision brass components from Jamnagar since {client.founded}. ISO certified, globally trusted.
          </p>
        </div>
      </section>
      <Capabilities />
      <WhyUs />
      <CTABanner />
    </main>
  );
}
