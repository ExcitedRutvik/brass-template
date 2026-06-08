import Marquee from '../ui/Marquee';
import { useClient } from '../../context/ClientContext';

export default function LogoMarquee() {
  const { exportCountries, certifications } = useClient();
  const items = [
    ...exportCountries.map((c) => `${c.flag}  ${c.name}`),
    ...certifications.map((c) => c.name),
    'ISO 9001:2015 Certified',
    'Since 1985',
    '700+ Clients Worldwide',
  ];
  return (
    <div className="logo-marquee" aria-label="Trusted worldwide">
      <Marquee items={items} speed={40} ariaLabel="Export countries and certifications" />
    </div>
  );
}
