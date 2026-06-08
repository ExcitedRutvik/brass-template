import { Helmet } from 'react-helmet-async';
import { useReveal } from '../hooks/useReveal';
import { useClient } from '../context/ClientContext';
import ProductCard from '../components/ui/ProductCard';
import CTABanner from '../components/sections/CTABanner';

export default function Products() {
  const ref = useReveal();
  const { products, catalog } = useClient();

  return (
    <>
      <Helmet>
        <title>Sheet Metal & Brass Components | Deepak Products Jamnagar</title>
        <meta name="description" content="MCB parts, brass electrical components, modular socket parts, crimping lugs, turned parts & custom components. ISO 9001:2015 certified manufacturer in Jamnagar, India." />
        <link rel="canonical" href="https://deepakproducts.com/products" />
        <meta property="og:url" content="https://deepakproducts.com/products" />
      </Helmet>
      <main ref={ref}>
        <section style={{ background: 'var(--color-secondary)', padding: '8rem 0 4rem' }}>
          <div className="container">
            <div className="section__label" style={{ color: 'var(--color-primary)' }}>Our Products</div>
            <h1 className="heading-xl" style={{ color: 'white', marginTop: '0.5rem' }}>Sheet Metal & Brass Components</h1>
            <p style={{ color: 'rgba(245,240,232,0.65)', maxWidth: '54ch', marginTop: '1rem', lineHeight: 1.7 }}>
              650+ product variants across sheet metal stamping, modular accessories, and brass machining — standard catalog or fully custom to your drawings.
            </p>
          </div>
        </section>

        <section className="section section--light">
          <div className="container">
            <div className="product-grid">
              {products.map((p, i) => (
                <ProductCard key={p.id} product={p} delay={(i % 3) * 100} />
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section__header section__header--center">
              <span className="section__label">Full Catalog</span>
              <h2 className="section__title">Complete Product Range</h2>
            </div>
            <div className="catalog-grid">
              {catalog && Object.entries(catalog).map(([group, items], gi) => (
                <div className="catalog-col" key={group} data-reveal="fade-up" data-delay={gi * 100}>
                  <h3 className="catalog-col__title">{group}</h3>
                  <ul className="catalog-col__list">
                    {items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        <CTABanner />
      </main>
    </>
  );
}
