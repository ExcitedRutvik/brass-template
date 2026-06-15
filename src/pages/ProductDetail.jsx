import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useClient } from '../context/clientStore';
import { posts } from '../data/blog';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import FaqAccordion from '../components/ui/FaqAccordion';
import CTABanner from '../components/sections/CTABanner';
import Picture from '../components/ui/Picture';

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

  // AEO: concise, answer-engine-extractable Q&A built from product data
  const faq = [
    { q: `Who manufactures ${product.title.toLowerCase()} in India?`, a: `${client.name}, an ISO 9001:2015 certified manufacturer in Jamnagar, Gujarat, produces ${product.title.toLowerCase()} to customer drawings and samples, with export to 10+ countries.` },
    product.materials && { q: `What materials are used for ${product.title.toLowerCase()}?`, a: `${product.title} are manufactured from ${product.materials.toLowerCase()}, selected for performance, durability, and corrosion resistance.` },
    product.applications?.length && { q: `What are ${product.title.toLowerCase()} used for?`, a: `Common applications include ${product.applications.join(', ').toLowerCase()}.` },
    { q: `Can ${product.title.toLowerCase()} be customised?`, a: `Yes. ${client.name} manufactures ${product.title.toLowerCase()} to custom dimensions, threads, and specifications from your drawing or sample, using in-house tooling.` },
  ].filter(Boolean);

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.desc,
    image: `${SITE}${product.image}`,
    brand: { '@type': 'Brand', name: client.name },
    manufacturer: { '@type': 'Organization', name: client.name },
    material: product.materials,
    url,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
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
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
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
                <Picture src={product.image} alt={product.alt || product.title} className="product-detail__img" />
              </div>
              <div className="product-detail__info" data-reveal="fade-left">
                <h1 className="product-detail__title">{product.title}</h1>
                <div className="divider"></div>
                <p className="product-detail__desc">{product.desc}</p>

                {product.materials && (
                  <p className="product-detail__materials"><strong>Materials:</strong> {product.materials}</p>
                )}

                {product.specs?.length > 0 && (
                  <dl className="product-detail__specs">
                    {product.specs.map(([k, v]) => (
                      <div className="product-detail__spec" key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {product.applications?.length > 0 && (
                  <ul className="product-detail__features">
                    {product.applications.map((a) => (
                      <li key={a}><Check size={16} /> {a}</li>
                    ))}
                  </ul>
                )}

                <div className="product-detail__actions">
                  <Link to="/contact" className="btn btn--primary btn--lg btn--shine">Request a Quote <ArrowRight size={18} /></Link>
                  <a href={`https://wa.me/${client.contact.whatsapp}`} className="btn btn--outline btn--lg" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                </div>
                <Link to="/products" className="product-detail__back"><ArrowLeft size={15} /> Back to all products</Link>
              </div>
            </div>

            <section className="product-detail__faq" aria-label="Frequently asked questions">
              <h2 className="section__title" style={{ marginBottom: '1.25rem' }}>Frequently Asked Questions</h2>
              <FaqAccordion faqs={faq} />
            </section>

            {guides.length > 0 && (
              <section className="product-detail__guides" aria-label="Related guides">
                <h2 className="section__title" style={{ marginBottom: '1.5rem' }}>Related Guides</h2>
                <div className="blog-grid">
                  {guides.map((g) => (
                    <Link to={`/blog/${g.slug}`} key={g.slug} className="blog-card hover-lift">
                      <div className="blog-card__image">
                        <Picture src={g.heroImage} alt={g.title} loading="lazy" className="blog-card__img" />
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
