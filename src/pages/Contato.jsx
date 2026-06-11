import { Camera, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../hooks/useWhatsApp';
import './Contato.css';

const infos = [
  {
    icon: <MapPin size={22} strokeWidth={1.5} />,
    titulo: 'Endereço',
    linhas: ['Rua Dom José de Barros, 65', 'República · São Paulo, SP', 'CEP 01038-010'],
  },
  {
    icon: <Phone size={22} strokeWidth={1.5} />,
    titulo: 'Telefone / WhatsApp',
    linhas: ['(11) 3258-9351', 'Atendimento via WhatsApp'],
    action: () => openWhatsApp(),
    actionLabel: 'Abrir WhatsApp',
  },
  {
    icon: <Clock size={22} strokeWidth={1.5} />,
    titulo: 'Horário de funcionamento',
    linhas: ['Segunda a Sexta: 9h às 19h', 'Sábado: 10h às 16h', 'Domingo: Fechado'],
  },
  {
    icon: <Camera size={22} strokeWidth={1.5} />,
    titulo: 'Redes Sociais',
    linhas: ['@fotoferrara', 'Siga-nos no Instagram'],
  },
];

export default function Contato() {
  return (
    <div className="contato">
      <section className="page-hero">
        <div className="container">
          <p className="section-label fade-up">Fale com a gente</p>
          <h1 className="page-hero__title fade-up fade-up-1">
            Visite-nos ou<br /><em>chame no WhatsApp</em>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container contato__grid">
          {/* Info cards */}
          <div className="contato__infos">
            <div className="section-header">
              <div className="ornament"><div className="ornament-dot" /></div>
              <p className="section-label">Informações</p>
              <h2 className="section-title">Como nos encontrar</h2>
              <p className="section-body">
                Estamos localizados no centro histórico de São Paulo, de fácil acesso pelo metrô.
              </p>
            </div>

            <div className="contato__cards">
              {infos.map(info => (
                <div key={info.titulo} className="info-card">
                  <div className="info-card__icon">{info.icon}</div>
                  <div>
                    <p className="info-card__title">{info.titulo}</p>
                    {info.linhas.map(l => <p key={l} className="info-card__line">{l}</p>)}
                    {info.action && (
                      <button
                        className="info-card__action"
                        onClick={info.action}
                      >
                        {info.actionLabel} →
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="contato__wa">
              <div className="contato__wa-icon">
                <MessageCircle size={28} />
              </div>
              <div>
                <p className="contato__wa-title">Prefere falar pelo WhatsApp?</p>
                <p className="contato__wa-sub">Respondemos rapidinho em horário comercial.</p>
              </div>
              <button
                className="btn btn-whatsapp"
                onClick={() => openWhatsApp('Olá! Entrei em contato pelo site da Foto Ferrara.')}
              >
                Abrir WhatsApp
              </button>
            </div>
          </div>

          {/* Mapa */}
          <div className="contato__mapa-wrap">
            <div className="contato__mapa-header">
              <MapPin size={16} color="var(--sepia)" />
              <span>Rua Dom José de Barros, 65 · República · São Paulo</span>
            </div>
            <div className="contato__mapa">
              <iframe
                title="Localização Foto Ferrara"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.081!2d-46.6466!3d-23.5452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5832f64e!2sR.+Dom+Jos%C3%A9+de+Barros%2C+65+-+Rep%C3%BAblica%2C+S%C3%A3o+Paulo+-+SP!5e0!3m2!1spt-BR!2sbr!4v1680000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Rua+Dom+José+de+Barros,+65+São+Paulo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline contato__mapa-link"
            >
              <MapPin size={16} />
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
