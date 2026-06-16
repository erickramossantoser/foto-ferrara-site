import { Link } from 'react-router-dom';
import {
  MessageCircle,
  ChevronRight,
  Aperture,
  Film,
  Camera,
  Gift,
  Star,
  ArrowRight,
  ExternalLink,
  MapPin,
  Clock,
} from 'lucide-react';
import { openWhatsApp } from '../hooks/useWhatsApp';
import heroCartaoFerrara from '../assets/hero-cartao-foto-ferrara.png';
import './Home.css';

const googleBusinessUrl = 'https://www.google.com/maps/search/?api=1&query=Foto%20Ferrara%20Rua%20Dom%20Jos%C3%A9%20de%20Barros%2065%20Rep%C3%BAblica%20S%C3%A3o%20Paulo';
const instagramUrl = 'https://www.instagram.com/fotoferrara/';

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.25" cy="6.75" r="1.2" fill="currentColor" />
    </svg>
  );
}

const servicosPrincipais = [
  {
    icon: <Aperture size={26} strokeWidth={1.5} />,
    titulo: 'Revelação de Fotos',
    desc: 'Fotos 10x15 e ampliações com qualidade profissional. Prontas em apenas 1 hora.',
    to: '/servicos',
    tag: 'mais pedido',
  },
  {
    icon: <Film size={26} strokeWidth={1.5} />,
    titulo: 'Filmes Analógicos',
    desc: 'Revelação de filmes 35mm coloridos e P&B com digitalização.',
    to: '/servicos',
  },
  {
    icon: <Camera size={26} strokeWidth={1.5} />,
    titulo: 'Câmeras e Acessórios',
    desc: 'Câmeras digitais, analógicas, instantâneas e itens para fotografia.',
    to: '/produtos',
  },
];

const depoimentos = [
  {
    nome: 'Vagner Roberto Silva',
    texto: 'Uns dos poucos locais no Centro de São Paulo que revela filmes antigos e fotos digitais. Atendimento super especial e rápido. Recomendo.',
    nota: 5,
  },
  {
    nome: 'ALINE LIMA LINE',
    texto: 'Super recomendo a Foto Ferrara! O atendimento foi impecável do início ao fim. Os produtos foram entregues conforme o combinado, com muita qualidade.',
    nota: 5,
  },
  {
    nome: 'Rosi Ramos',
    texto: 'Revelei fotos lá. Atendimento rápido e cordial. Tem diversos itens que podemos presentear e faz fotos na hora para documentos.',
    nota: 5,
  },
  {
    nome: 'Alice Marques',
    texto: 'Ótimo atendimento! Recebi as melhores dicas do Renato sobre câmeras analógicas.',
    nota: 5,
  },
  {
    nome: 'Birulinha Gege',
    texto: 'O local oferece um serviço de revelação de filmes com alto padrão técnico e de qualidade. Entregou trabalho em alta qualidade e muito rápido.',
    nota: 5,
  },
  {
    nome: 'Daniel Bernardo',
    texto: 'Ótimo atendimento e preços justos! Consertei minhas câmeras por lá, ficaram muito boas.',
    nota: 5,
  },
];

const instagramPosts = [
  {
    imagem: '/instagram/dia-dos-namorados-ideias.jpg',
    tag: 'Post recente',
    texto: '5 ideias de presentes para surpreender quem você ama.',
  },
  {
    imagem: '/instagram/dia-dos-namorados-presentes.jpg',
    tag: 'Presentes',
    texto: 'Opções especiais para transformar momentos em lembranças.',
  },
  {
    imagem: '/instagram/canecas-personalizadas.jpg',
    tag: 'Canecas',
    texto: 'Canecas personalizadas feitas na hora para presentear com carinho.',
  },
];

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__grain" />
          <div className="hero__red-glow" />
        </div>

        <div className="container hero__content">
          <div className="hero__copy">
            <p className="section-label fade-up">Foto Ferrara</p>
            <h1 className="hero__title fade-up fade-up-1">
              Construa histórias com <span className="text-gold">memórias</span>
            </h1>
            <p className="hero__subtitle fade-up fade-up-2">
              Revelação de fotos, filmes analógicos, câmeras, relógios e presentes
              personalizados no coração de São Paulo.
            </p>
            <div className="hero__actions fade-up fade-up-3">
              <button
                className="btn btn-whatsapp"
                onClick={() => openWhatsApp('Olá! Gostaria de saber mais sobre os serviços da Foto Ferrara.')}
              >
                <MessageCircle size={18} />
                Fale no WhatsApp
              </button>
              <Link to="/servicos" className="btn btn-outline hero__services-btn">
                Conheça nossos serviços
                <ChevronRight size={18} />
              </Link>
            </div>

            <div className="hero__stats fade-up fade-up-4">
              <div className="hero__stat">
                <strong>27</strong>
                <span>Anos de história</span>
              </div>
              <div className="hero__stat">
                <strong>50k+</strong>
                <span>Fotos reveladas</span>
              </div>
              <div className="hero__stat">
                <strong>4.1</strong>
                <span>Avaliação no Google</span>
              </div>
            </div>
          </div>

          <div className="hero__visual fade-up fade-up-2" aria-label="Cartão visual Foto Ferrara com filme, fotos e logotipo">
            <img
              className="hero__store-card"
              src={heroCartaoFerrara}
              alt="Cartão visual da Foto Ferrara com filme fotográfico, fotos e logotipo"
            />
          </div>
        </div>
      </section>

      <section className="section home-services">
        <div className="container">
          <div className="section-header centered">
            <p className="section-label">Nossos principais serviços</p>
            <h2 className="section-title">Da revelação ao analógico moderno</h2>
            <p className="section-body">
              Alguns dos atendimentos mais procurados na loja, com mais opções disponíveis
              na página de serviços.
            </p>
          </div>

          <div className="home-services__grid">
            {servicosPrincipais.map((servico) => (
              <Link to={servico.to} key={servico.titulo} className="service-card">
                {servico.tag && <span className="service-card__tag">{servico.tag}</span>}
                <div className="service-card__icon">{servico.icon}</div>
                <h3>{servico.titulo}</h3>
                <p>{servico.desc}</p>
                <span>Ver detalhes <ArrowRight size={14} /></span>
              </Link>
            ))}
          </div>

          <div className="home-section-action">
            <Link to="/servicos" className="btn btn-primary">
              Visualizar todos os serviços
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="analog-banner">
        <div className="analog-banner__pattern" />
        <div className="container analog-banner__inner">
          <div className="analog-banner__text">
            <p className="section-label">Para os apaixonados por analógico</p>
            <h2 className="analog-banner__title">
              Revelação de filmes<br />
              <em>com digitalização inclusa</em>
            </h2>
            <p>
              Revelamos filmes 35mm coloridos e preto e branco. Você recebe seus negativos
              e os arquivos digitais prontos para compartilhar.
            </p>
          </div>
          <div className="analog-banner__actions">
            <button
              className="btn btn-whatsapp"
              onClick={() => openWhatsApp('Olá! Quero revelar um filme analógico. Como funciona?')}
            >
              <MessageCircle size={18} />
              Consultar pelo WhatsApp
            </button>
            <Link to="/servicos" className="btn analog-banner__link">
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      <section className="section tradition-section">
        <div className="container tradition-section__inner">
          <div>
            <p className="section-label">Tradição desde 1999</p>
            <p className="section-body">
              A Foto Ferrara preserva a memória de milhares de clientes com atendimento próximo, revelação fotográfica e produtos que acompanham momentos especiais.
            </p>
          </div>
          <Link to="/sobre" className="btn btn-primary tradition-section__btn">
            Nossa história
          </Link>
        </div>
      </section>

      <section className="section google-business">
        <div className="container google-business__inner">
          <div className="google-business__score" aria-label="Avaliação 4.1 no Google">
            <span className="google-business__logo">G</span>
            <div>
              <strong>4.1</strong>
              <div className="google-business__stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill={i < 4 ? 'var(--amber)' : 'none'} color="var(--amber)" />
                ))}
              </div>
              <span>75 avaliações no Google</span>
            </div>
          </div>
          <div className="google-business__content">
            <p className="section-label">Google Business</p>
            <h2 className="section-title">Confira a Foto Ferrara no Google</h2>
            <p className="section-body">
              Veja avaliações, rota, telefone e informações atualizadas do nosso perfil comercial
              antes de visitar a loja.
            </p>
          </div>
          <a className="btn btn-primary google-business__btn" href={googleBusinessUrl} target="_blank" rel="noreferrer">
            Ver no Google
            <ExternalLink size={17} />
          </a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header centered">
            <p className="section-label">O que dizem nossos clientes</p>
            <h2 className="section-title">Histórias de quem confia em nós</h2>
          </div>
          <div className="depoimentos__grid">
            {depoimentos.map((d) => (
              <div key={d.nome} className="depoimento-card">
                <div className="depoimento-card__stars">
                  {Array.from({ length: d.nota }).map((_, i) => (
                    <Star key={i} size={14} fill="var(--amber)" color="var(--amber)" />
                  ))}
                </div>
                <p className="depoimento-card__text">"{d.texto}"</p>
                <p className="depoimento-card__nome">- {d.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section instagram-feed">
        <div className="container">
          <div className="section-header centered">
            <p className="section-label">Instagram</p>
            <h2 className="section-title">Acompanhe a Foto Ferrara</h2>
            <p className="section-body">
              Veja nossos posts recentes, novidades e produtos pelo perfil oficial.
            </p>
          </div>

          <div className="instagram-feed__grid">
            {instagramPosts.map((post) => (
              <a key={post.tag} className="instagram-card" href={instagramUrl} target="_blank" rel="noreferrer">
                <img src={post.imagem} alt="" loading="lazy" />
                <div className="instagram-card__overlay">
                  <span>{post.tag}</span>
                  <p>{post.texto}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="instagram-feed__action">
            <a className="btn instagram-feed__btn" href={instagramUrl} target="_blank" rel="noreferrer">
              <InstagramIcon size={18} />
              Ver @fotoferrara
            </a>
          </div>
        </div>
      </section>

      <section className="section visit-section">
        <div className="container visit-section__inner">
          <div className="visit-section__content">
            <p className="section-label">Visite nossa loja</p>
            <h2 className="section-title">Estamos na Rua Dom José de Barros, 65</h2>
            <p className="section-body">
              República, São Paulo - SP. Venha nos visitar ou fale pelo WhatsApp
              para consultar serviços, produtos e prazos.
            </p>
            <div className="visit-section__info">
              <span><MapPin size={16} /> Centro de São Paulo</span>
              <span><Clock size={16} /> Seg-Sex: 9h às 19h · Sáb: 10h às 16h</span>
            </div>
            <button
              className="btn btn-whatsapp"
              onClick={() => openWhatsApp('Olá! Gostaria de visitar ou falar com a Foto Ferrara.')}
            >
              <MessageCircle size={18} />
              Entrar em contato
            </button>
          </div>

          <div className="visit-section__map">
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
        </div>
      </section>
    </div>
  );
}
