import { useState } from 'react';
import { useClient } from '../../context/ClientContext';

export default function ContactSection() {
  const client = useClient();
  const { contact } = client;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem' }}>
          <div>
            <div className="section__label" data-reveal="fade-up">Contact Us</div>
            <h2 className="section__title" id="contact-title" data-reveal="fade-up" data-delay="100">
              Request a Quote or<br />Get in Touch
            </h2>
            <div className="divider" data-reveal="fade-up" data-delay="200"></div>
            <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.7, marginBottom: '2rem' }} data-reveal="fade-up" data-delay="300">
              Tell us about your requirements — product type, quantity, specifications. We'll respond within 24 hours with a competitive quote.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} data-reveal="fade-up" data-delay="400">
              <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'center' }}>
                <span style={{ fontSize: '1.25rem' }}>📞</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-secondary)' }}>Phone</div>
                  <a href={`tel:${contact.phoneRaw}`} style={{ color: 'var(--color-gray-600)', fontSize: '0.875rem' }}>{contact.phone}</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'center' }}>
                <span style={{ fontSize: '1.25rem' }}>💬</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-secondary)' }}>WhatsApp</div>
                  <a href={`https://wa.me/${contact.whatsapp}`} style={{ color: 'var(--color-gray-600)', fontSize: '0.875rem' }}>{contact.phone}</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'center' }}>
                <span style={{ fontSize: '1.25rem' }}>📧</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-secondary)' }}>Email</div>
                  <a href={`mailto:${contact.email}`} style={{ color: 'var(--color-gray-600)', fontSize: '0.875rem' }}>{contact.email}</a>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.875rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.25rem' }}>📍</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', color: 'var(--color-secondary)' }}>Address</div>
                  <p style={{ color: 'var(--color-gray-600)', fontSize: '0.875rem', lineHeight: 1.6 }}>{client.address}</p>
                </div>
              </div>
            </div>
          </div>

          <div data-reveal="fade-left" data-delay="200">
            {submitted ? (
              <div style={{ background: 'var(--color-gray-50)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-200)', textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-secondary)', marginBottom: '0.75rem' }}>Request Received!</h3>
                <p style={{ color: 'var(--color-gray-600)', lineHeight: 1.7 }}>We'll get back to you within 24 hours. For faster response, <a href={`https://wa.me/${contact.whatsapp}`} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>WhatsApp us directly</a>.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ background: 'var(--color-gray-50)', padding: '2.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-gray-200)' }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-secondary)', marginBottom: '0.4rem' }}>Your Name *</label>
                    <input type="text" required placeholder="John Smith" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--radius-sm)', font: 'inherit', background: 'white' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-secondary)', marginBottom: '0.4rem' }}>Company *</label>
                    <input type="text" required placeholder="ACME Industries Ltd." style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--radius-sm)', font: 'inherit', background: 'white' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-secondary)', marginBottom: '0.4rem' }}>Email *</label>
                    <input type="email" required placeholder="john@company.com" style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--radius-sm)', font: 'inherit', background: 'white' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: 'var(--color-secondary)', marginBottom: '0.4rem' }}>Product / Requirement *</label>
                    <textarea required rows={4} placeholder="Describe what you need — product type, quantity, key specs..." style={{ width: '100%', padding: '0.75rem 1rem', border: '1px solid var(--color-gray-200)', borderRadius: 'var(--radius-sm)', font: 'inherit', background: 'white', resize: 'vertical' }} />
                  </div>
                  <button type="submit" className="btn btn--primary btn--lg" style={{ width: '100%', justifyContent: 'center' }}>
                    Send Request →
                  </button>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--color-gray-600)', textAlign: 'center' }}>
                    We respond within 24 hours. Or <a href={`https://wa.me/${contact.whatsapp}`} style={{ color: 'var(--color-primary)', fontWeight: 600 }}>WhatsApp us</a> for instant response.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
