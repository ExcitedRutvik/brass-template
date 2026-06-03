export default function Capabilities() {
  const capabilities = [
    { title: 'CNC Turning Centers', desc: '80+ Swiss-type and multi-spindle CNC lathes for high-volume precision turning' },
    { title: 'Hydraulic Press Shop', desc: 'Forging and pressing for complex brass geometries at high volumes' },
    { title: 'Surface Finishing', desc: 'Nickel plating, chrome plating, electroless plating, and passivation lines' },
    { title: 'In-house Tool Room', desc: 'Rapid tooling and die-making for fast prototyping and new product introduction' },
  ];

  const glanceStats = [
    { value: '50K+', label: 'Sq ft facility' },
    { value: '80+', label: 'CNC machines' },
    { value: '500T', label: 'Monthly capacity' },
    { value: '200+', label: 'Skilled employees' },
  ];

  return (
    <section className="section" id="capabilities" aria-labelledby="capabilities-title">
      <div className="container">
        <div className="section__header">
          <div className="section__label" data-reveal="fade-up">Capabilities</div>
          <h2 className="section__title" id="capabilities-title" data-reveal="fade-up" data-delay="100">
            World-Class Manufacturing<br />Infrastructure
          </h2>
          <div className="divider" data-reveal="fade-up" data-delay="200"></div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <p className="body-lg" style={{ color: 'var(--color-gray-600)', marginBottom: '2rem' }} data-reveal="fade-up">
              Our 50,000 sq ft facility in Jamnagar is equipped with modern CNC machinery, automated quality control systems, and experienced craftspeople.
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} data-reveal="fade-up" data-delay="200">
              {capabilities.map((c) => (
                <li key={c.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--color-primary)', fontSize: '1.25rem', flexShrink: 0 }}>✓</span>
                  <div>
                    <strong>{c.title}</strong>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', marginTop: '0.25rem' }}>{c.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div
            data-reveal="fade-left"
            data-delay="200"
            style={{ background: 'var(--color-gray-50)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', border: '1px solid var(--color-gray-200)' }}
          >
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.375rem', color: 'var(--color-secondary)', marginBottom: '2rem' }}>
              Factory at a Glance
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
              {glanceStats.map((s) => (
                <div key={s.label}>
                  <div style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)' }}>{s.value}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
