import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useClient } from '../context/ClientContext';
import { posts } from '../data/blog';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import CTABanner from '../components/sections/CTABanner';

const SITE = 'https://deepakproducts.com';

export default function ProductDetail() {
  const { id } = useParams();
  const ref = useReveal();
  const client = useClient();
  const product = client.products.find((p) => p.id === id);

  if (!product) return <Navigate to="/products" replace />;

  // Related guides: posts that reference this product
  const guides = posts.filter((p) => p.relatedProducts?.includes(product.id)).slice(0, 3);
  const url = `${SITE}/products/${product.id}`;

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.desc,
    image: `${SITE}${product.image}`,
    brand: { '@type': 'Brand', name: client.name },
    manufacturer: { '@type': 'Organization', name: client.name },
    url,
  };

  return (
    <>
      <Helmet>
        <title>{`${product.title} Manufacturer | ${client.name} Jamnagar`}</title>
        <meta name="description" content={`${product.title} — ${product.desc} ISO 9001:2015 certified manufacturer in Jamnagar, India.`} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="product" />
        <meta property="og:title" content={`${product.title} | ${client.name}`} />
        <meta property="og:image" content={`${SITE}${product.image}`} />
        <meta property="og:url" content={url} />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <main ref={ref}>
        <section style={{ background: 'var(--color-secondary)', padding: '7rem 0 2rem' }}>
          <div className="container">
            <Breadcrumbs items={[
              { label: 'Home', to: '/' },
              { label: 'Products', to: '/products' },
              { label: product.title, to: `/products/${product.id}` },
            ]} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="product-detail">
              <div className="product-detail__media" data-reveal="fade-right">
                <img src={product.image} alt={product.alt || product.title} className="product-detail__img" />
              </div>
              <div className="product-detail__info" data-reveal="fade-left">
                <h1 className="product-detail__title">{product.title}</h1>
                <div className="divider"></div>
                <p className="product-detail__desc">{product.desc}</p>
                <ul className="product-detail__features">
                  <li><Check size={16} /> Manufactured to customer drawings & samples</li>
                  <li><Check size={16} /> ISO 9001:2015 certified quality</li>
                  <li><Check size={16} /> In-house tooling, stamping & CNC machining</li>
                  <li><Check size={16} /> Export to 10+ countries</li>
                </ul>
                <div className="product-detail__actions">
                  <Link to="/contact" className="btn btn--primary btn--lg btn--shine">Request a Quote <ArrowRight size={18} /></Link>
                  <a href={`https://wa.me/${client.contact.whatsapp}`} className="btn btn--outline btn--lg" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                </div>
              </div>
            </div>

            {guides.length > 0 && (
              <section className="product-detail__guides" aria-label="Related guides">
                <h2 className="section__title" style={{ marginBottom: '1.5rem' }}>Related Guides</h2>
                <div className="blog-grid">
                  {guides.map((g) => (
                    <Link to={`/blog/${g.slug}`} key={g.slug} className="blog-card hover-lift">
                      <div className="blog-card__image">
                        <img src={g.heroImage} alt={g.title} loading="lazy" className="blog-card__img" />
                        <span className="blog-card__cat">{g.category}</span>
                      </div>
                      <div className="blog-card__body">
                        <h3 className="blog-card__title">{g.title}</h3>
                        <span className="blog-card__link">Read guide <ArrowRight size={15} /></span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </section>
        <CTABanner />
      </main>
    </>
  );
}
