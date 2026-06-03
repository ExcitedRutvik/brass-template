import { useClient } from '../../context/ClientContext';
import FeatureCard from '../ui/FeatureCard';

const delays = [100, 200, 300, 100, 200, 300];

export default function WhyUs() {
  const { whyUs } = useClient();

  return (
    <section className="section section--light" id="why-us" aria-labelledby="why-title">
      <div className="container">
        <div className="section__header section__header--center">
          <div className="section__label" data-reveal="fade-up">Why Choose Us</div>
          <h2 className="section__title" id="why-title" data-reveal="fade-up" data-delay="100">
            The Deepak Products Difference
          </h2>
        </div>
        <div className="grid-3">
          {whyUs.map((item, i) => (
            <FeatureCard key={item.title} icon={item.icon} title={item.title} desc={item.desc} delay={delays[i] || 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
