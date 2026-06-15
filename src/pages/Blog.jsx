import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { posts, categories } from '../data/blog';
import Breadcrumbs from '../components/ui/Breadcrumbs';
import Picture from '../components/ui/Picture';

export default function Blog() {
  const ref = useReveal();
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? posts : posts.filter((p) => p.category === filter);

  return (
    <>
      <Helmet>
        <title>Blog & Guides | Deepak Products — Sheet Metal & Brass Components</title>
        <meta name="description" content="Expert guides on sheet metal stamping, brass components, MCB parts, crimping lugs, CNC turning, and sourcing from Jamnagar, India." />
        <link rel="canonical" href="https://deepakproducts.com/blog" />
        <meta property="og:url" content="https://deepakproducts.com/blog" />
      </Helmet>
      <main ref={ref}>
        <section style={{ background: 'var(--color-secondary)', padding: '7rem 0 3.5rem' }}>
          <div className="container">
            <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Blog', to: '/blog' }]} />
            <div className="section__label" style={{ color: 'var(--color-primary)', marginTop: '1rem' }}>Insights & Guides</div>
            <h1 className="heading-xl" style={{ color: 'white', marginTop: '0.5rem' }}>Brass & Sheet Metal Knowledge Hub</h1>
            <p style={{ color: 'rgba(245,240,232,0.65)', maxWidth: '56ch', marginTop: '1rem', lineHeight: 1.7 }}>
              Practical guides on components, materials, manufacturing, and sourcing — written by the team at Deepak Products, Jamnagar.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="blog-filter">
              {['All', ...categories].map((c) => (
                <button
                  key={c}
                  className={`blog-filter__btn${filter === c ? ' is-active' : ''}`}
                  onClick={() => setFilter(c)}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="blog-grid">
              {filtered.map((p, i) => (
                <Link to={`/blog/${p.slug}`} key={p.slug} className="blog-card hover-lift" data-reveal="fade-up" data-delay={(i % 3) * 100}>
                  <div className="blog-card__image">
                    <Picture src={p.heroImage} alt={p.title} loading="lazy" className="blog-card__img" />
                    <span className="blog-card__cat">{p.category}</span>
                  </div>
                  <div className="blog-card__body">
                    <div className="blog-card__meta">{p.readTime} read</div>
                    <h2 className="blog-card__title">{p.title}</h2>
                    <p className="blog-card__excerpt">{p.excerpt}</p>
                    <span className="blog-card__link">Read guide <ArrowRight size={15} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
