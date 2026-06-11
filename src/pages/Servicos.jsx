import { Aperture, Film, Camera, Gift, Clock, CheckCircle, MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../hooks/useWhatsApp';
import './Servicos.css';

const servicos = [
  {
    icon: <Aperture size={32} strokeWidth={1.4} />,
    titulo: 'Revelação de Fotos',
    subtitulo: '10x15 e outros formatos',
    desc: 'Revelação tradicional em papel fotográfico de alta qualidade. Ideal para guardar memórias com durabilidade e fidelidade de cores.',
    detalhes: [
      'Formato 10x15 cm (padrão)',
      'Ampliações: 13x18, 15x21, 20x30',
      'Papel fosco ou brilhante',
      'Entrega em apenas 1 hora para 10x15',
      'A partir de fotos digitais',
    ],
    whatsapp: 'Olá! Gostaria de revelar fotos. Quais formatos vocês trabalham?',
    imagem: '/servicos/revelacao-fotos.webp',
    cor: '#D4822A',
  },
  {
    icon: <Film size={32} strokeWidth={1.4} />,
    titulo: 'Revelação de Filmes Analógicos',
    subtitulo: '35mm · colorido e P&B',
    desc: 'Revelação profissional de filmes 35mm coloridos e preto e branco. Você recebe seus negativos e arquivos digitais escaneados.',
    detalhes: [
      'Filmes 35mm coloridos',
      'Filmes 35mm P&B',
      'Digitalização inclusa no serviço',
      'Negativos entregues em sleeve protetora',
      'Arquivos em alta resolução',
    ],
    whatsapp: 'Olá! Quero revelar um filme analógico. Como é o processo?',
    imagem: '/servicos/revelacao-filmes.webp',
    cor: '#5A6B52',
  },
  {
    icon: <Camera size={32} strokeWidth={1.4} />,
    titulo: 'Venda de Câmeras',
    subtitulo: 'Digitais · Analógicas · Instantâneas',
    desc: 'Grande variedade de câmeras para todos os perfis. Desde câmeras instantâneas Fujifilm Instax até DSLRs profissionais.',
    detalhes: [
      'Câmeras Fujifilm Instax (instantâneas)',
      'Câmeras analógicas 35mm',
      'Câmeras mirrorless e DSLR',
      'Câmeras Polaroid',
      'Consultoria especializada na escolha',
    ],
    whatsapp: 'Olá! Tenho interesse em comprar uma câmera. Vocês podem me ajudar na escolha?',
    imagem: '/servicos/venda-cameras.webp',
    cor: '#8B2E2E',
  },
  {
    icon: <Gift size={32} strokeWidth={1.4} />,
    titulo: 'Produtos e Presentes',
    subtitulo: 'Polaroid · Relógios · Kits',
    desc: 'Presentes únicos para quem ama fotografia. Kits especiais, Polaroid, relógios vintage e muito mais.',
    detalhes: [
      'Câmeras Polaroid (vários modelos)',
      'Relógios Casio vintage',
      'Kits fotográficos para presentes',
      'Filmes e acessórios',
      'Álbuns e porta-retratos',
    ],
    whatsapp: 'Olá! Estou procurando um presente relacionado à fotografia. Vocês podem me ajudar?',
    imagem: '/servicos/produtos-presentes.webp',
    cor: '#3D2F25',
  },
];

const faq = [
  { p: 'Quanto tempo leva a revelação de fotos?', r: 'Fotos 10x15 ficam prontas em apenas 1 hora. Ampliações maiores podem levar até 48h.' },
  { p: 'Vocês revelam filmes de qualquer fabricante?', r: 'Sim! Kodak, Fujifilm, Ilford, Lomography e outros. Colorido e preto e branco.' },
  { p: 'Posso enviar as fotos pelo WhatsApp?', r: 'Sim! Envie as fotos pelo WhatsApp e retire na loja ou combine a entrega.' },
  { p: 'Vocês fazem digitalização de negativos antigos?', r: 'Sim! Digitalizamos negativos, slides e até fotos antigas para você preservar suas memórias.' },
];

export default function Servicos() {
  return (
    <div className="servicos">
      <section className="page-hero">
        <div className="container">
          <p className="section-label fade-up">O que fazemos</p>
          <h1 className="page-hero__title fade-up fade-up-1">
            Nossos serviços,<br /><em>com toda a dedicação</em>
          </h1>
        </div>
      </section>

      {/* Cards de serviços */}
      <section className="section">
        <div className="container">
          <div className="servicos__grid">
            {servicos.map((s) => (
              <div key={s.titulo} className="servico-card">
                <div className="servico-card__header" style={{ '--cor': s.cor }}>
                  <div className="servico-card__icon">{s.icon}</div>
                  <div>
                    <h2 className="servico-card__title">{s.titulo}</h2>
                    <p className="servico-card__sub">{s.subtitulo}</p>
                  </div>
                </div>

                <div className="servico-card__media">
                  <img src={s.imagem} alt={s.titulo} loading="lazy" />
                </div>

                <p className="servico-card__desc">{s.desc}</p>

                <ul className="servico-card__list">
                  {s.detalhes.map((d) => (
                    <li key={d}>
                      <CheckCircle size={15} />
                      {d}
                    </li>
                  ))}
                </ul>

                <button
                  className="btn btn-whatsapp servico-card__btn"
                  onClick={() => openWhatsApp(s.whatsapp)}
                >
                  <MessageCircle size={16} />
                  Consultar no WhatsApp
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horário */}
      <section className="section bg-cream" style={{ padding: '3.5rem 0' }}>
        <div className="container servicos__horario">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '.5rem' }}>
            <Clock size={24} color="var(--amber)" strokeWidth={1.5} />
            <p className="section-label" style={{ marginBottom: 0 }}>Horário de funcionamento</p>
          </div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '.75rem' }}>
            Segunda a Sexta: 9h às 19h &nbsp;·&nbsp; Sábado: 10h às 16h
          </h3>
          <p style={{ color: 'var(--ink-light)', fontSize: '.95rem' }}>
            Rua Dom José de Barros, 65 · República · São Paulo, SP
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 780 }}>
          <div className="section-header centered">
            <p className="section-label">Dúvidas frequentes</p>
            <h2 className="section-title">Perguntas que sempre recebemos</h2>
          </div>
          <div className="faq__list">
            {faq.map((f) => (
              <div key={f.p} className="faq-item">
                <p className="faq-item__p">{f.p}</p>
                <p className="faq-item__r">{f.r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
