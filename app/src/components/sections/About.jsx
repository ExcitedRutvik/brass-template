import { Link } from 'react-router-dom';
import { useClient } from '../../context/ClientContext';

export default function About() {
  const client = useClient();

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <div className="section__label" data-reveal="fade-up">About Us</div>
            <h2 className="section__title" id="about-title" data-reveal="fade-up" data-delay="100">
              Four Decades of Brass Engineering Excellence
            </h2>
            <div className="divider" data-reveal="fade-up" data-delay="200"></div>
            <p className="section__subtitle" data-reveal="fade-up" data-delay="300">
              Founded in {client.founded} in {client.location} — the brass capital of India — {client.name} has grown from a small workshop to a globally trusted manufacturer of precision brass components.
            </p>
            <p style={{ marginTop: '1.25rem', color: 'var(--color-gray-600)', lineHeight: 1.7 }} data-reveal="fade-up" data-delay="400">
              Every component we manufacture undergoes rigorous quality checks, ensuring our products meet international standards — whether you're ordering 100 pieces or 1,000,000.
            </p>
            <Link to="/about" className="btn btn--primary" style={{ marginTop: '2rem', display: 'inline-flex' }} data-reveal="fade-up" data-delay="500">
              Learn More About Us →
            </Link>
          </div>
          <div
            data-reveal="fade-left"
            data-delay="200"
            style={{
              background: 'var(--color-gray-50)',
              borderRadius: 'var(--radius-lg)',
              aspectRatio: '4/3',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '5rem',
              border: '1px solid var(--color-gray-200)',
            }}
          >
            🏭
          </div>
        </div>
      </div>
    </section>
  );
}
