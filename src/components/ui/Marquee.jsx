export default function Marquee({ items, speed = 30, ariaLabel = 'Scrolling content' }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee" aria-label={ariaLabel} role="marquee">
      <div className="marquee__track" style={{ animationDuration: `${speed}s` }}>
        {doubled.map((item, i) => (
          <span className="marquee__item" key={i} aria-hidden={i >= items.length}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
