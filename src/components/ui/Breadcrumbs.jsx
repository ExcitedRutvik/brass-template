import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const SITE = 'https://deepakproducts.com';

export default function Breadcrumbs({ items }) {
  // items: [{ label, to }] — last item is current (no link)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.label,
      item: `${SITE}${it.to}`,
    })),
  };

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <ol className="breadcrumbs__list">
        {items.map((it, i) => (
          <li key={it.to} className="breadcrumbs__item">
            {i < items.length - 1 ? (
              <>
                <Link to={it.to} className="breadcrumbs__link">{it.label}</Link>
                <ChevronRight size={14} className="breadcrumbs__sep" />
              </>
            ) : (
              <span className="breadcrumbs__current" aria-current="page">{it.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
