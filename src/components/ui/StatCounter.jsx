import { useCounter } from '../../hooks/useCounter';

export default function StatCounter({ value, suffix, label }) {
  const { value: displayValue, ref } = useCounter(value);

  return (
    <div className="stat-item" ref={ref}>
      <div className="stat-item__number">
        {displayValue.toLocaleString()}{suffix}
      </div>
      <div className="stat-item__label">{label}</div>
    </div>
  );
}
