import { Helmet } from 'react-helmet-async';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { useClient } from '../context/clientStore';
import { getPost, getRelatedPosts } from '../data/blog';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import FaqAccordion from '../components/ui/FaqAccordion';
import RichText from '../components/ui/RichText';
import CTABanner from '../components/sections/CTABanner';
import Picture from '../components/ui/Picture';

const SITE = 'https://deepakproducts.com';

function Block({ block }) {
  switch (block.type) {
    case 'h2': return <h2 className="post__h2">{block.text}</h2>;
    case 'h3': return <h3 className="post__h3">{block.text}</h3>;
    case 'ul':
      return (
        <ul className="post__list">
          {block.items.map((it, i) => <li key={i}><RichText text={it} /></li>)}
        </ul>
      );
    case 'quote': return <blockquote className="post__quote"><RichText text={block.text} /></blockquote>;
    default: return <p className="post__p"><RichText text={block.text} /></p>;
  }
}

export default function BlogPost() {
  const { slug } = useParams();
  const ref = useReveal();
  const client = useClient();
  const post = getPost(slug);

  if (!post) return <Navigate to="/blog" replace />;

  const related = getRelatedPosts(post.relatedPosts);
  const relatedProducts = client.products.filter((p) => post.relatedProducts?.includes(p.id));
  const url = `${SITE}/blog/${post.slug}`;

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: `${SITE}${post.heroImage}`,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: post.author },
    publisher: {
      '@type': 'Organization',
      name: client.name,
      logo: { '@type': 'ImageObject', url: `${SITE}${client.brand.logo}` },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${SITE}${post.heroImage}`} />
        <script type="application/ld+json">{JSON.stringify(blogSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main ref={ref}>
        <article className="post">
          <header className="post__hero">
            <div className="container">
              <Breadcrumbs items={[
                { label: 'Home', to: '/' },
                { label: 'Blog', to: '/blog' },
                { label: post.title, to: `/blog/${post.slug}` },
              ]} />
              <span className="post__cat">{post.category}</span>
              <h1 className="post__title">{post.title}</h1>
              <div className="post__meta">
                <span><Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                <span><Clock size={14} /> {post.readTime} read</span>
              </div>
            </div>
          </header>

          <div className="post__hero-img">
            <Picture src={post.heroImage} alt={post.title} className="zoom-on-scroll" data-reveal="fade-in" />
          </div>

          <div className="container">
            <div className="post__layout">
              <div className="post__body">
                {post.body.map((block, i) => <Block key={i} block={block} />)}

                <section className="post__faq" aria-label="Frequently asked questions">
                  <h2 className="post__h2">Frequently Asked Questions</h2>
                  <FaqAccordion faqs={post.faq} />
                </section>
              </div>

              <aside className="post__aside">
                {relatedProducts.length > 0 && (
                  <div className="post__widget">
                    <h3 className="post__widget-title">Related Products</h3>
                    <ul className="post__widget-list">
                      {relatedProducts.map((p) => (
                        <li key={p.id}>
                          <Link to={`/products/${p.id}`} className="post__widget-link">
                            <Picture src={p.image} alt={p.title} loading="lazy" />
                            <span>{p.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="btn btn--primary btn--shine" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                      Request a Quote <ArrowRight size={16} />
                    </Link>
                  </div>
                )}
              </aside>
            </div>

            {related.length > 0 && (
              <section className="post__related" aria-label="Related guides">
                <h2 className="section__title" style={{ marginBottom: '1.5rem' }}>Related Guides</h2>
                <div className="blog-grid">
                  {related.map((p) => (
                    <Link to={`/blog/${p.slug}`} key={p.slug} className="blog-card hover-lift">
                      <div className="blog-card__image">
                        <Picture src={p.heroImage} alt={p.title} loading="lazy" className="blog-card__img" />
                        <span className="blog-card__cat">{p.category}</span>
                      </div>
                      <div className="blog-card__body">
                        <h3 className="blog-card__title">{p.title}</h3>
                        <span className="blog-card__link">Read guide <ArrowRight size={15} /></span>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
          <CTABanner />
        </article>
      </main>
    </>
  );
}
