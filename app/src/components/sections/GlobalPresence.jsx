import { useClient } from '../../context/ClientContext';

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
                    background: 'rgba(200,168,75,0.15)',
                    border: '1px solid rgba(200,168,75,0.3)',
                    color: 'var(--color-primary)',
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
          <div data-reveal="fade-left" data-delay="200" style={{ fontSize: '8rem', textAlign: 'center', opacity: 0.8 }}>
            🌍
          </div>
        </div>
      </div>
    </section>
  );
}
