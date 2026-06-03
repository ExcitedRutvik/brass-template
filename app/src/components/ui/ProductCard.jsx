import { Link } from 'react-router-dom';

export default function ProductCard({ product, delay = 0 }) {
  return (
    <div className="product-card" data-reveal="fade-up" data-delay={delay}>
      <div className="product-card__image">{product.icon}</div>
      <div className="product-card__body">
        <div className="product-card__tag">{product.tag}</div>
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__desc">{product.desc}</p>
        <Link to={`/products/${product.id}`} className="product-card__link">
          View Catalog →
        </Link>
      </div>
    </div>
  );
}
