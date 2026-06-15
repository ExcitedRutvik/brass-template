import { useClient } from '../../context/clientStore';
import LucideIcon from '../ui/LucideIcon';

export default function WhyUs() {
  const { whyUs } = useClient();

  return (
    <section className="section" aria-label="Why Us">
      <div className="container">
        <div className="section__header">
          <span className="section__label">Why Deepak Products</span>
          <h2 className="section__title">What Sets Us Apart</h2>
          <p className="section__subtitle">
            Four decades of manufacturing excellence — not a claim, a track record.
          </p>
        </div>
        <div className="whyus-list">
          {whyUs.map((item, i) => (
            <div key={i} className="whyus-item" data-reveal="fade-up">
              <div className="whyus-item__left">
                <div className="whyus-item__icon">
                  <LucideIcon name={item.icon} size={20} />
                </div>
                <h3 className="whyus-item__title">{item.title}</h3>
              </div>
              <div className="whyus-item__right">
                <p className="whyus-item__desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
