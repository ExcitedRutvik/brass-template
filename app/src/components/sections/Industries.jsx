import { useClient } from '../../context/ClientContext';
import IndustryCard from '../ui/IndustryCard';

const delays = [100, 200, 300, 100, 200, 300];

export default function Industries() {
  const { industries } = useClient();

  return (
    <section className="section section--dark" id="industries" aria-labelledby="industries-title">
      <div className="container">
        <div className="section__header section__header--center">
          <div className="section__label" data-reveal="fade-up">Industries Served</div>
          <h2 className="section__title" id="industries-title" data-reveal="fade-up" data-delay="100">
            Precision Parts for Every Industry
          </h2>
          <p className="section__subtitle" data-reveal="fade-up" data-delay="200">
            Our components are trusted across critical industries worldwide.
          </p>
        </div>
        <div className="grid-3">
          {industries.map((ind, i) => (
            <IndustryCard key={ind.title} icon={ind.icon} title={ind.title} desc={ind.desc} delay={delays[i] || 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
