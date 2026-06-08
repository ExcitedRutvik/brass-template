import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqAccordion({ faqs }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {faqs.map((f, i) => (
        <div className={`faq__item${open === i ? ' is-open' : ''}`} key={i}>
          <button
            className="faq__q"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <span>{f.q}</span>
            {open === i ? <Minus size={18} /> : <Plus size={18} />}
          </button>
          <div className="faq__a" hidden={open !== i}>
            <p>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
