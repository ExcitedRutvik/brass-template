import { useClient } from '../../context/clientStore';
import LucideIcon from '../ui/LucideIcon';
import Picture from '../ui/Picture';

export default function Industries() {
  const { industries } = useClient();

  return (
    <section className="section section--light" aria-label="Industries">
      <div className="container">
        <div className="section__header section__header--center">
          <span className="section__label">Who We Serve</span>
          <h2 className="section__title">Industries We Supply</h2>
          <p className="section__subtitle">
            Precision components trusted across seven core industries — from automobile and electrical to healthcare and telecom.
          </p>
        </div>
        <div className="industry-grid">
          {industries.map((item, i) => (
            <div key={item.id} className="industry-tile" data-reveal="fade-up" data-delay={(i % 4) * 80}>
              <Picture
                src={item.image}
                alt={`${item.title} components by Deepak Products, Jamnagar`}
                loading="lazy"
                width="465"
                height="450"
                className="industry-tile__img"
              />
              <div className="industry-tile__overlay" />
              <div className="industry-tile__content">
                <div className="industry-tile__icon">
                  <LucideIcon name={item.icon} size={18} />
                </div>
                <h3 className="industry-tile__title">{item.title}</h3>
                <p className="industry-tile__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
