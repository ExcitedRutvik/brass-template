import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useClient } from '../../context/ClientContext';

export default function Header() {
  const client = useClient();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/products', label: 'Products' },
    { to: '/industries', label: 'Industries' },
    { to: '/quality', label: 'Quality' },
    { to: '/blog', label: 'Blog' },
    { to: '/export', label: 'Export' },
  ];

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`} role="banner">
      <div className="container">
        <div className="header__inner">
          <NavLink to="/" className="header__logo" aria-label={`${client.name} Home`}>
            <img src={client.brand.logo} alt={`${client.name} logo`} className="header__logo-img" width="150" height="40" />
          </NavLink>

          <nav aria-label="Main navigation">
            <button
              className="nav__toggle"
              aria-controls="nav-menu"
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className={`nav__menu${menuOpen ? ' is-open' : ''}`} id="nav-menu">
              <ul className="nav__list" role="list">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => `nav__link${isActive ? ' active' : ''}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
                <li className="nav__cta">
                  <NavLink to="/contact" className="btn btn--primary" onClick={() => setMenuOpen(false)}>
                    Get a Quote
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
