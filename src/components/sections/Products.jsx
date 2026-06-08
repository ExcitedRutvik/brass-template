import { useClient } from '../../context/ClientContext';
import ProductCard from '../ui/ProductCard';

export default function Products() {
  const { products } = useClient();

  return (
    <section className="section" aria-label="Products">
      <div className="container">
        <div className="section__header">
          <span className="section__label">What We Make</span>
          <h2 className="section__title">Our Product Range</h2>
          <p className="section__subtitle">
            From MCB parts to custom brass components — precision sheet metal stamping and machining across six core product families.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} delay={(i % 3) * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
