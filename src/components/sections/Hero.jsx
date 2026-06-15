import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { useClient } from '../../context/clientStore';
import { useParallax, parallaxStyle } from '../../hooks/useParallax';
import ScrollIndicator from '../ui/ScrollIndicator';
import Picture from '../ui/Picture';

export default function Hero() {
  const client = useClient();
  const { hero, contact } = client;
  const { ref, offset } = useParallax();

  return (
    <section className="hero" aria-label="Hero" ref={ref}>
      <div className="hero__grid-layer" style={parallaxStyle(offset, 0.15)} aria-hidden="true" />
      <div className="container">
        <div className="hero__layout">
          <div className="hero__inner">
            <div className="hero__label" data-reveal="fade-up">{hero.label}</div>
            <h1 className="hero__title" data-reveal="fade-up" data-delay="100">
              {hero.title[0]}<br />
              <em>{hero.title[1]}</em><br />
              {hero.title[2]}<br />
              {hero.title[3]}
            </h1>
            <p className="hero__subtitle" data-reveal="fade-up" data-delay="200">{hero.subtitle}</p>
            <div className="hero__actions" data-reveal="fade-up" data-delay="300">
              <Link to="/contact" className="btn btn--primary btn--lg btn--shine">
                Request a Quote <ArrowRight size={18} />
              </Link>
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                className="btn btn--outline btn--lg"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
            </div>
          </div>
          <div className="hero__media" data-reveal="fade-left" data-delay="200" style={parallaxStyle(offset, -0.08)}>
            <Picture
              src={hero.image}
              alt="Deepak Products precision sheet metal and brass manufacturing in Jamnagar, Gujarat"
              className="hero__media-img"
              width="880"
              height="660"
              loading="eager"
              fetchpriority="high"
            />
            <div className="hero__media-glow" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="hero__scroll"><ScrollIndicator /></div>
    </section>
  );
}
