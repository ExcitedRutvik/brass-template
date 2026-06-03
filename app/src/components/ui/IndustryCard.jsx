export default function IndustryCard({ icon, title, desc, delay = 0 }) {
  return (
    <div className="industry-card" data-reveal="fade-up" data-delay={delay}>
      <div className="industry-card__icon">{icon}</div>
      <h3 className="industry-card__title">{title}</h3>
      <p className="industry-card__desc">{desc}</p>
    </div>
  );
}
