import LucideIcon from './LucideIcon';

export default function CertBadge({ icon, name, desc }) {
  return (
    <div className="cert-badge">
      <div className="cert-badge__icon"><LucideIcon name={icon} size={22} /></div>
      <div>
        <div className="cert-badge__name">{name}</div>
        <div className="cert-badge__desc">{desc}</div>
      </div>
    </div>
  );
}
