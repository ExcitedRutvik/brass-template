import { useClient } from '../../context/ClientContext';

const delays = [100, 200, 300];

export default function Testimonials() {
  const { testimonials } = useClient();

  return (
    <section className="section section--light" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <div className="section__header section__header--center">
          <div className="section__label" data-reveal="fade-up">Testimonials</div>
          <h2 className="section__title" id="testimonials-title" data-reveal="fade-up" data-delay="100">
            Trusted by Industry Leaders
          </h2>
        </div>
        <div className="grid-3">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={t.name} data-reveal="fade-up" data-delay={delays[i]}>
              <p className="testimonial-card__quote">{t.quote}</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">{t.initials}</div>
                <div>
                  <div className="testimonial-card__name">{t.name}</div>
                  <div className="testimonial-card__role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
