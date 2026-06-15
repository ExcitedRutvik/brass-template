import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useClient } from '../../context/clientStore';
import ProductCard from '../ui/ProductCard';

export default function Products() {
  const { products, showcaseCount = 6 } = useClient();
  const showcase = products.slice(0, showcaseCount);

  return (
    <section className="section" aria-label="Products">
      <div className="container">
        <div className="section__header">
          <span className="section__label">What We Make</span>
          <h2 className="section__title">Our Product Range</h2>
          <p className="section__subtitle">
            From MCB parts to custom brass components — precision sheet metal stamping and machining across our core product families.
          </p>
        </div>
        <div className="product-grid">
          {showcase.map((product, i) => (
            <ProductCard key={product.id} product={product} delay={(i % 3) * 100} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <Link to="/products" className="btn btn--outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            View All Products <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
