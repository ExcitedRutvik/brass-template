import { useClient } from '../../context/ClientContext';
import ProductCard from '../ui/ProductCard';

const delays = [100, 200, 300, 100, 200, 300];

export default function Products() {
  const { products } = useClient();

  return (
    <section className="section section--light" id="products" aria-labelledby="products-title">
      <div className="container">
        <div className="section__header section__header--center">
          <div className="section__label" data-reveal="fade-up">Our Products</div>
          <h2 className="section__title" id="products-title" data-reveal="fade-up" data-delay="100">
            5,000+ Precision Brass Components
          </h2>
          <p className="section__subtitle" data-reveal="fade-up" data-delay="200">
            From standard fittings to custom-engineered turned parts — we manufacture across the full spectrum of brass components.
          </p>
        </div>
        <div className="grid-3">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={delays[i] || 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
