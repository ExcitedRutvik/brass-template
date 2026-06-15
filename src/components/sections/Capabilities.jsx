import { Check } from 'lucide-react';
import Picture from '../ui/Picture';

export default function Capabilities() {

  const capabilities = [
    { title: 'CNC Turning Centers', desc: 'Swiss-type and multi-spindle CNC lathes for high-volume precision turning' },
    { title: 'Sheet Metal Stamping', desc: 'Progressive press tools for MCB parts, terminals, and electrical components' },
    { title: 'Surface Finishing', desc: 'Nickel plating, tin plating, electroless plating, and passivation lines' },
    { title: 'In-house Tool Room', desc: 'Rapid tooling and die-making for fast prototyping and new product introduction' },
  ];

  const glanceStats = [
    { value: '40+', label: 'Years in operation' },
    { value: '650+', label: 'Finished products' },
    { value: '700+', label: 'Satisfied clients' },
    { value: '10+', label: 'Countries served' },
  ];

  return (
    <section className="section section--light" id="capabilities" aria-labelledby="capabilities-title">
      <div className="container">
        <div className="section__header">
          <div className="section__label" data-reveal="fade-up">Capabilities</div>
          <h2 className="section__title" id="capabilities-title" data-reveal="fade-up" data-delay="100">
            Sheet Metal & Brass<br />Manufacturing Infrastructure
          </h2>
          <div className="divider divider--animated" data-reveal="fade-up" data-delay="200"></div>
        </div>
        <div className="capabilities-grid">
          <div>
            <p className="body-lg" style={{ color: 'var(--color-gray-600)', marginBottom: '2rem' }} data-reveal="fade-up">
              Our facility in Jamnagar combines modern CNC machinery, progressive stamping presses, automated quality control, and experienced craftspeople under one roof.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} data-reveal="fade-up" data-delay="200">
              {capabilities.map((c) => (
                <li key={c.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span className="capabilities-check"><Check size={16} /></span>
                  <div>
                    <strong>{c.title}</strong>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', marginTop: '0.25rem' }}>{c.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="capabilities-panel" data-reveal="fade-left" data-delay="200">
            <div className="capabilities-panel__img">
              <Picture src="/assets/img/about/factory.jpg" alt="Deepak Products manufacturing facility, Jamnagar" loading="lazy" />
            </div>
            <h3 className="capabilities-panel__title">Factory at a Glance</h3>
            <div className="capabilities-panel__stats">
              {glanceStats.map((s) => (
                <div key={s.label}>
                  <div className="capabilities-panel__num">{s.value}</div>
                  <div className="capabilities-panel__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
