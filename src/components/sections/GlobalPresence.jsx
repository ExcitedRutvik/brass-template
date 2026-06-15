import { useClient } from '../../context/clientStore';
import WorldMap from '../ui/WorldMap';

export default function GlobalPresence() {
  const { exportCountries } = useClient();

  return (
    <section className="section section--dark" id="export" aria-labelledby="export-title">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <div className="section__label" data-reveal="fade-up">Global Reach</div>
            <h2 className="section__title" id="export-title" data-reveal="fade-up" data-delay="100">
              Exporting Precision to<br />{exportCountries.length}+ Countries
            </h2>
            <div className="divider" data-reveal="fade-up" data-delay="200"></div>
            <p className="section__subtitle" data-reveal="fade-up" data-delay="300">
              From the UK to Australia, UAE to USA — our brass components are trusted in homes, factories, and infrastructure projects worldwide.
            </p>
            <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }} data-reveal="fade-up" data-delay="400">
              {exportCountries.map((c) => (
                <span
                  key={c.name}
                  style={{
                    background: 'rgba(184,134,11,0.12)',
                    border: '1px solid rgba(184,134,11,0.28)',
                    color: 'var(--color-primary-light)',
                    padding: '0.4rem 0.875rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8125rem',
                    fontWeight: 500,
                  }}
                >
                  {c.flag} {c.name}
                </span>
              ))}
            </div>
          </div>
          <div className="global-map" data-reveal="fade-left" data-delay="200">
            <WorldMap />
          </div>
        </div>
      </div>
    </section>
  );
}
