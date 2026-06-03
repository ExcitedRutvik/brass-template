import { useReveal } from '../hooks/useReveal';
import { useClient } from '../context/ClientContext';
import ProductCard from '../components/ui/ProductCard';
import CTABanner from '../components/sections/CTABanner';

export default function Products() {
  const ref = useReveal();
  const { products } = useClient();

  return (
    <main ref={ref}>
      <section style={{ background: 'var(--color-secondary)', padding: '8rem 0 4rem' }}>
        <div className="container">
          <div className="section__label" style={{ color: 'var(--color-primary)' }}>Our Products</div>
          <h1 className="heading-xl" style={{ color: 'white', marginTop: '0.5rem' }}>Precision Brass Components</h1>
          <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '52ch', marginTop: '1rem', lineHeight: 1.7 }}>
            5,000+ product variants across 6 categories. Standard catalog or fully custom to your drawings.
          </p>
        </div>
      </section>
      <section className="section section--light">
        <div className="container">
          <div className="grid-3">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} delay={(i % 3 + 1) * 100} />
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </main>
  );
}
