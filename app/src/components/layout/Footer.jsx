import { Link } from 'react-router-dom';
import { useClient } from '../../context/ClientContext';

export default function Footer() {
  const client = useClient();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-name">{client.name}</div>
            <div className="footer__brand-tagline">{client.tagline}</div>
            <p className="footer__brand-desc">{client.description}</p>
          </div>

          <div>
            <div className="footer__heading">Products</div>
            <ul className="footer__links">
              {client.products.map((p) => (
                <li key={p.id}>
                  <Link to={`/products/${p.id}`} className="footer__link">{p.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="footer__heading">Company</div>
            <ul className="footer__links">
              <li><Link to="/about" className="footer__link">About Us</Link></li>
              <li><Link to="/about#capabilities" className="footer__link">Capabilities</Link></li>
              <li><Link to="/quality" className="footer__link">Quality</Link></li>
              <li><Link to="/export" className="footer__link">Export</Link></li>
              <li><Link to="/contact" className="footer__link">Contact</Link></li>
            </ul>
          </div>

          <div>
            <div className="footer__heading">Contact</div>
            <div className="footer__contact-item">
              📞 <a href={`tel:${client.contact.phoneRaw}`} className="footer__link">{client.contact.phone}</a>
            </div>
            <div className="footer__contact-item">
              📧 <a href={`mailto:${client.contact.email}`} className="footer__link">{client.contact.email}</a>
            </div>
            <div className="footer__contact-item">
              📍 <span>{client.address}</span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} {client.name}. All rights reserved.</span>
          <span style={{ color: 'var(--color-primary)' }}>ISO 9001:2015 Certified</span>
        </div>
      </div>
    </footer>
  );
}
