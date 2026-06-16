import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { openWhatsApp } from '../hooks/useWhatsApp';
import cartaoFotos from '../assets/hero-cartao-foto-ferrara.png';
import './Header.css';

const navLinks = [
  { to: '/',         label: 'Home' },
  { to: '/sobre',    label: 'Quem Somos' },
  { to: '/servicos', label: 'Serviços' },
  { to: '/produtos', label: 'Produtos' },
  { to: '/contato',  label: 'Contato' },
];

export default function Header() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}${open ? ' header--menu-open' : ''}`}>
      <div className="container header__inner">
        {/* Logo */}
        <Link to="/" className="header__logo">
          <img className="header__logo-image" src={cartaoFotos} alt="Foto Ferrara - desde 1999" />
        </Link>

        {/* Desktop nav */}
        <nav className="header__nav">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `header__link${isActive ? ' header__link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <button
          className="btn btn-whatsapp header__cta"
          onClick={() => openWhatsApp()}
        >
          WhatsApp
        </button>

        {/* Hamburger */}
        <button
          className="header__hamburger"
          onClick={() => setOpen(v => !v)}
          aria-label="Menu"
          aria-expanded={open}
          type="button"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`header__drawer${open ? ' header__drawer--open' : ''}`}>
        <nav className="header__drawer-nav">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `header__drawer-link${isActive ? ' header__drawer-link--active' : ''}`
              }
            >
              {label}
            </NavLink>
          ))}
          <button
            className="btn btn-whatsapp"
            onClick={() => openWhatsApp()}
            type="button"
            style={{ marginTop: '.5rem', justifyContent: 'center' }}
          >
            Fale no WhatsApp
          </button>
        </nav>
      </div>
    </header>
  );
}
