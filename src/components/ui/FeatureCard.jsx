export default function FeatureCard({ icon, title, desc, delay = 0 }) {
  return (
    <div className="feature-card" data-reveal="fade-up" data-delay={delay}>
      <div className="feature-card__icon">{icon}</div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__desc">{desc}</p>
    </div>
  );
}
