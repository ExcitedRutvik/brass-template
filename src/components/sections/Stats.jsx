import { useClient } from '../../context/clientStore';
import StatCounter from '../ui/StatCounter';

export default function Stats() {
  const { stats } = useClient();

  return (
    <section className="stats" aria-label="Key statistics">
      <div className="container">
        <div className="stats__grid">
          {stats.map((s) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
