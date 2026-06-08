import { useClient } from '../../context/ClientContext';
import CertBadge from '../ui/CertBadge';

const steps = [
  { n: 1, title: 'Incoming Material Inspection', desc: 'Spectrometric analysis of every raw brass rod for alloy composition' },
  { n: 2, title: 'In-Process Inspection', desc: 'Dimensional checks every 30 minutes during production runs' },
  { n: 3, title: 'Final Inspection', desc: '100% visual + sampling CMM inspection before packing' },
  { n: 4, title: 'Pressure Testing', desc: 'All valves and fittings pressure-tested to 1.5x rated working pressure' },
];

export default function Quality() {
  const { certifications } = useClient();

  return (
    <section className="section" id="quality" aria-labelledby="quality-title">
      <div className="container">
        <div className="section__header section__header--center">
          <div className="section__label" data-reveal="fade-up">Quality Assurance</div>
          <h2 className="section__title" id="quality-title" data-reveal="fade-up" data-delay="100">
            Zero-Defect Manufacturing
          </h2>
          <p className="section__subtitle" data-reveal="fade-up" data-delay="200">
            Our multi-stage quality process ensures every component shipped meets exact specifications.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div data-reveal="fade-up">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Our Quality Process</h3>
            <ol style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {steps.map((s) => (
                <li key={s.n} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <span style={{ background: 'var(--color-primary)', color: 'var(--color-secondary)', width: '1.75rem', height: '1.75rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.875rem', flexShrink: 0 }}>
                    {s.n}
                  </span>
                  <div>
                    <strong>{s.title}</strong>
                    <p style={{ fontSize: '0.875rem', color: 'var(--color-gray-600)', marginTop: '0.25rem' }}>{s.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div data-reveal="fade-left" data-delay="200">
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>Certifications</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {certifications.map((c) => (
                <CertBadge key={c.name} icon={c.icon} name={c.name} desc={c.desc} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
