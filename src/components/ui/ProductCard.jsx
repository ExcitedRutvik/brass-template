import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Picture from './Picture';

export default function ProductCard({ product, delay = 0 }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="product-card hover-lift"
      data-reveal="fade-up"
      data-delay={delay}
    >
      <div className="product-card__image">
        <Picture
          src={product.image}
          alt={product.alt || product.title}
          width="465"
          height="376"
          className="product-card__img"
        />
      </div>
      <div className="product-card__body">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__desc">{product.desc}</p>
        <span className="product-card__link">
          View Details <ArrowRight size={15} />
        </span>
      </div>
    </Link>
  );
}
