import { Link } from 'react-router-dom';
import { useClient } from '../../context/ClientContext';

export default function Hero() {
  const client = useClient();
  const { hero, contact } = client;

  return (
    <section className="hero" aria-label="Hero">
      <div className="hero__bg-text" aria-hidden="true">BRASS</div>
      <div className="container">
        <div className="hero__inner">
          <div className="hero__label">{hero.label}</div>
          <h1 className="hero__title">
            {hero.title[0]} <em>{hero.title[1]}</em>
            <br />{hero.title[2]}
            <br />{hero.title[3]}
          </h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary btn--lg">Request a Quote</Link>
            <Link to="/products" className="btn btn--outline btn--lg">View Products</Link>
          </div>
        </div>
      </div>
      <div className="hero__scroll" aria-hidden="true">Scroll</div>
    </section>
  );
}
