import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { useClient } from '../../context/ClientContext';

export default function CTABanner() {
  const { contact } = useClient();

  return (
    <section className="cta-banner" aria-label="Call to action">
      <div className="container">
        <div className="cta-banner__inner">
          <h2 className="cta-banner__title" data-reveal="fade-up">
            Ready to Source Precision Brass Components?
          </h2>
          <div className="cta-banner__actions" data-reveal="fade-up" data-delay="200">
            <Link to="/contact" className="btn btn--primary btn--lg">Request a Quote</Link>
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              className="btn btn--white btn--lg"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <MessageCircle size={18} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
