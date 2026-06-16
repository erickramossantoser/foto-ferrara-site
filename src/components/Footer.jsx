import { Link } from 'react-router-dom';
import { Camera, MapPin, Phone, Clock } from 'lucide-react';
import { openWhatsApp } from '../hooks/useWhatsApp';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__grain" />
      <div className="container">
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <div className="footer__logo-icon"><Camera size={18} /></div>
              <div>
                <p className="footer__logo-name">Foto Ferrara</p>
                <p className="footer__logo-tag">desde 1999</p>
              </div>
            </div>
            <p className="footer__tagline">
              Revelamos memórias há mais de 27 anos no coração de São Paulo.
            </p>
          </div>

          {/* Links */}
          <div className="footer__col">
            <p className="footer__col-title">Navegação</p>
            <ul className="footer__links">
              {[['/', 'Home'], ['/sobre', 'Quem Somos'], ['/servicos', 'Serviços'], ['/produtos', 'Produtos'], ['/contato', 'Contato']].map(([to, label]) => (
                <li key={to}><Link to={to} className="footer__link">{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div className="footer__col">
            <p className="footer__col-title">Serviços</p>
            <ul className="footer__links">
              {['Revelação 10x15', 'Filmes Analógicos', 'Venda de Câmeras', 'Polaroid & Presentes', 'Ampliações'].map(s => (
                <li key={s}><span className="footer__link">{s}</span></li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div className="footer__col">
            <p className="footer__col-title">Contato</p>
            <ul className="footer__info">
              <li>
                <MapPin size={15} />
                <span>Rua Dom José de Barros, 65<br />República · São Paulo, SP</span>
              </li>
              <li>
                <Phone size={15} />
                <button className="footer__phone" onClick={() => openWhatsApp()}>
                  (11) 3258-9351
                </button>
              </li>
              <li>
                <Clock size={15} />
                <span>Seg–Sex: 9h às 19h<br />Sáb: 10h às 16h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} Foto Ferrara. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
