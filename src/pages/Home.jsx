import { Link } from 'react-router-dom';
import { MessageCircle, ChevronRight, Aperture, Film, Camera, Gift, Star, ArrowRight, ExternalLink } from 'lucide-react';
import { openWhatsApp } from '../hooks/useWhatsApp';
import logoFerrara from '../assets/logo-foto-ferrara-1999-crop.png';
import './Home.css';

const googleBusinessUrl = 'https://www.google.com/maps/search/?api=1&query=Foto%20Ferrara%20Rua%20Dom%20Jos%C3%A9%20de%20Barros%2065%20Rep%C3%BAblica%20S%C3%A3o%20Paulo';
const instagramUrl = 'https://www.instagram.com/fotoferrara/';

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.25" cy="6.75" r="1.2" fill="currentColor" />
    </svg>
  );
}

const destaques = [
  {
    icon: <Aperture size={28} strokeWidth={1.5} />,
    titulo: 'Revelação de Fotos',
    desc: 'Fotos 10x15 e ampliações com qualidade profissional. Prontas em apenas 1 hora.',
    to: '/servicos',
    tag: 'mais pedido',
  },
  {
    icon: <Film size={28} strokeWidth={1.5} />,
    titulo: 'Filmes Analógicos',
    desc: 'Revelação de filmes 35mm coloridos e P&B. Digitalização inclusa.',
    to: '/servicos',
    tag: '',
  },
  {
    icon: <Camera size={28} strokeWidth={1.5} />,
    titulo: 'Câmeras e Acessórios',
    desc: 'Grande variedade de câmeras digitais, analógicas e instantâneas.',
    to: '/produtos',
    tag: '',
  },
  {
    icon: <Gift size={28} strokeWidth={1.5} />,
    titulo: 'Presentes Especiais',
    desc: 'Polaroid, relógios, kits fotográficos e muito mais para presentear.',
    to: '/produtos',
    tag: '',
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
    imagem: '/servicos/revelacao-fotos.webp',
    tag: 'Revelação',
    texto: 'Fotos impressas com acabamento profissional para guardar, presentear e reviver.',
  },
  {
    imagem: '/servicos/revelacao-filmes.webp',
    tag: 'Filme 35mm',
    texto: 'Revelação de filmes analógicos com digitalização para compartilhar seus cliques.',
  },
  {
    imagem: '/servicos/produtos-presentes.webp',
    tag: 'Presentes',
    texto: 'Álbuns, porta-retratos, canecas e produtos fotográficos para ocasiões especiais.',
  },
];

export default function Home() {
  return (
    <div className="home">
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__bg-film" />
          <div className="hero__bg-vignette" />
        </div>
        <div className="container hero__content">
          <div className="hero__copy">
            <p className="section-label fade-up">Foto Ferrara · São Paulo</p>
            <h1 className="hero__title fade-up fade-up-1">
              Construa histórias<br />
              <em>com memórias</em>
            </h1>
            <p className="hero__subtitle fade-up fade-up-2">
              Revelação de fotos, filmes analógicos e câmeras no coração de São Paulo.
              Mais de 27 anos preservando momentos que não têm preço.
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

            {/* Stats strip */}
            <div className="hero__stats fade-up fade-up-4">
              {[['27', 'Anos de história'], ['50k+', 'Fotos reveladas'], ['⭐ 4.1', 'Avaliação no Google']].map(([n, l]) => (
                <div key={l} className="hero__stat">
                  <strong>{n}</strong>
                  <span>{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__brand fade-up fade-up-2">
            <div className="hero__brand-card">
              <img src={logoFerrara} alt="Logo Foto Ferrara desde 1999" />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span>role para baixo</span>
        </div>
      </section>

      {/* ── Destaques ────────────────────────────────────── */}
      <section className="section destaques">
        <div className="container">
          <div className="section-header centered">
            <p className="section-label">O que fazemos</p>
            <h2 className="section-title">Nossos serviços e produtos</h2>
            <p className="section-body">
              Da revelação tradicional ao analógico moderno — tudo que você precisa
              para registrar e guardar seus momentos especiais.
            </p>
          </div>

          <div className="destaques__grid">
            {destaques.map((d) => (
              <Link to={d.to} key={d.titulo} className="destaque-card">
                {d.tag && <span className="destaque-card__tag">{d.tag}</span>}
                <div className="destaque-card__icon">{d.icon}</div>
                <h3 className="destaque-card__title">{d.titulo}</h3>
                <p className="destaque-card__desc">{d.desc}</p>
                <span className="destaque-card__cta">
                  Saiba mais <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Banner analógico ──────────────────────────────── */}
      <section className="analog-banner">
        <div className="analog-banner__pattern" />
        <div className="container analog-banner__inner">
          <div className="analog-banner__text">
            <p className="section-label" style={{ color: 'var(--sepia-light)' }}>Para os apaixonados por analógico</p>
            <h2 className="analog-banner__title">
              Revelação de filmes<br />
              <em>com digitalização inclusa</em>
            </h2>
            <p style={{ color: 'rgba(255,255,255,.7)', fontSize: '1rem', lineHeight: 1.7, maxWidth: '42ch' }}>
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
            <Link to="/servicos" className="btn" style={{ color: 'rgba(255,255,255,.75)', border: '1.5px solid rgba(255,255,255,.2)' }}>
              Ver todos os serviços
            </Link>
          </div>
        </div>
      </section>

      {/* Google Business */}
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
              antes de visitar a loja no centro de São Paulo.
            </p>
          </div>
          <a
            className="btn btn-primary google-business__btn"
            href={googleBusinessUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ver no Google
            <ExternalLink size={17} />
          </a>
        </div>
      </section>

      {/* ── Depoimentos ──────────────────────────────────── */}
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
                <p className="depoimento-card__nome">— {d.nome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram */}
      <section className="section instagram-feed">
        <div className="container">
          <div className="section-header centered">
            <p className="section-label">Instagram</p>
            <h2 className="section-title">Acompanhe a Foto Ferrara</h2>
            <p className="section-body">
              Veja novidades, produtos e bastidores da loja pelo nosso perfil oficial.
            </p>
          </div>

          <div className="instagram-feed__grid">
            {instagramPosts.map((post) => (
              <a
                key={post.tag}
                className="instagram-card"
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
              >
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

      {/* ── CTA Final ────────────────────────────────────── */}
      <section className="cta-section">
        <div className="container cta-section__inner">
          <h2 className="cta-section__title">
            Pronto para revelar<br />suas memórias?
          </h2>
          <p className="cta-section__sub">
            Venha nos visitar ou fale pelo WhatsApp. Estamos no centro de São Paulo,
            de segunda a sábado.
          </p>
          <div className="hero__actions" style={{ justifyContent: 'center' }}>
            <button
              className="btn btn-primary"
              onClick={() => openWhatsApp()}
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </button>
            <Link to="/contato" className="btn btn-outline">
              Ver endereço e horários
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
