import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useClient } from '../../context/ClientContext';

export default function About() {
  const client = useClient();

  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">
          <div>
            <div className="section__label" data-reveal="fade-up">About Us</div>
            <h2 className="section__title" id="about-title" data-reveal="fade-up" data-delay="100">
              Four Decades of Sheet Metal & Brass Engineering
            </h2>
            <div className="divider divider--animated" data-reveal="fade-up" data-delay="200"></div>
            <p className="section__subtitle" data-reveal="fade-up" data-delay="300">
              Established in {client.founded} under the leadership of {client.founder}, {client.name} has grown into a renowned sheet metal and brass component manufacturer in {client.location} — the brass capital of India.
            </p>
            <p style={{ marginTop: '1.25rem', color: 'var(--color-gray-600)', lineHeight: 1.7 }} data-reveal="fade-up" data-delay="400">
              An ISO 9001:2015 certified company with D&amp;B D-U-N-S® 65-081-4762 and NSIC SE3B credit rating. Every component undergoes rigorous quality checks to meet international standards — whether you order 100 pieces or 1,000,000.
            </p>
            <Link to="/about" className="btn btn--primary" style={{ marginTop: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }} data-reveal="fade-up" data-delay="500">
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </div>
          <div className="about-image" data-reveal="fade-left" data-delay="200">
            <img
              src="/assets/img/about/factory.jpg"
              alt="Deepak Products precision manufacturing facility in Jamnagar, Gujarat"
              loading="lazy"
              className="about-image__img zoom-on-scroll"
            />
            <div className="about-image__badge">
              <span className="about-image__badge-num">{new Date().getFullYear() - Number(client.founded)}</span>
              <span className="about-image__badge-label">Years of<br />Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
