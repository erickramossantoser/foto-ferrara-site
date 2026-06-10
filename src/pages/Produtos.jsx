import { useState } from 'react';
import { MessageCircle, Search, SlidersHorizontal } from 'lucide-react';
import { openWhatsAppProduct } from '../hooks/useWhatsApp';
import produtos from '../data/produtos.json';
import './Produtos.css';

const categorias = ['Todos', ...new Set(produtos.map(p => p.categoria))];

const emojiColors = {
  '📷': '#D4822A', '🎞️': '#5A6B52', '🎬': '#8B2E2E',
  '📸': '#3D2F25', '🌈': '#8B6543', '📚': '#D4822A',
  '⌚': '#1A1410', '🎁': '#B36920', '🖼️': '#5A6B52', '🔭': '#5A6B52',
};

export default function Produtos() {
  const [cat, setCat]         = useState('Todos');
  const [busca, setBusca]     = useState('');
  const [soDestaque, setSoDestaque] = useState(false);

  const termoBusca = busca.trim().toLowerCase();

  const filtrados = produtos.filter(p => {
    const matchCat = cat === 'Todos' || p.categoria === cat;
    const matchBusca = !termoBusca ||
                       p.nome.toLowerCase().includes(termoBusca) ||
                       p.categoria.toLowerCase().includes(termoBusca) ||
                       p.descricao.toLowerCase().includes(termoBusca);
    const matchDest = !soDestaque || p.destaque;
    return matchCat && matchBusca && matchDest;
  });

  return (
    <div className="produtos">
      <section className="page-hero">
        <div className="container">
          <p className="section-label fade-up">Nosso catálogo</p>
          <h1 className="page-hero__title fade-up fade-up-1">
            Produtos para todos<br /><em>os apaixonados por foto</em>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filtros */}
          <div className="produtos__filtros">
            {/* Busca */}
            <div className="produtos__busca">
              <Search size={16} />
              <input
                type="text"
                placeholder="Buscar produto..."
                value={busca}
                onChange={e => setBusca(e.target.value)}
              />
            </div>

            {/* Categorias */}
            <div className="produtos__cats">
              {categorias.map(c => (
                <button
                  type="button"
                  key={c}
                  className={`cat-btn${cat === c ? ' cat-btn--active' : ''}`}
                  onClick={() => setCat(c)}
                  aria-pressed={cat === c}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Destaque toggle */}
            <button
              type="button"
              className={`destaque-toggle${soDestaque ? ' destaque-toggle--active' : ''}`}
              onClick={() => setSoDestaque(v => !v)}
              aria-pressed={soDestaque}
            >
              <SlidersHorizontal size={15} />
              Destaques
            </button>
          </div>

          {/* Resultado */}
          <p className="produtos__count">
            {filtrados.length} produto{filtrados.length !== 1 ? 's' : ''} encontrado{filtrados.length !== 1 ? 's' : ''}
          </p>

          {filtrados.length === 0 ? (
            <div className="produtos__empty">
              <span>🔍</span>
              <p>Nenhum produto encontrado. Tente outra busca ou consulte pelo WhatsApp.</p>
              <button
                type="button"
                className="btn btn-whatsapp"
                onClick={() => openWhatsAppProduct('produto não encontrado na busca')}
              >
                <MessageCircle size={16} />
                Consultar disponibilidade
              </button>
            </div>
          ) : (
            <div className="produtos__grid">
              {filtrados.map(p => (
                <div
                  key={p.id}
                  className={`produto-card${p.destaque ? ' produto-card--destaque' : ''}`}
                  style={{ '--produto-cor': emojiColors[p.emoji] || '#8B6543' }}
                >
                  <div className="produto-card__media">
                    {p.imagem && (
                      <img
                        src={p.imagem}
                        alt={p.nome}
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.parentElement?.classList.add('produto-card__media--fallback');
                          e.currentTarget.remove();
                        }}
                      />
                    )}
                    <span>{p.emoji}</span>
                  </div>

                  <div className="produto-card__info">
                    <p className="produto-card__cat">{p.categoria}</p>
                    <h3 className="produto-card__nome">{p.nome}</h3>
                    <p className="produto-card__desc">{p.descricao}</p>
                  </div>

                  <button
                    type="button"
                    className="btn btn-whatsapp produto-card__btn"
                    onClick={() => openWhatsAppProduct(p.nome)}
                  >
                    <MessageCircle size={15} />
                    Consultar no WhatsApp
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-cream" style={{ padding: '3rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', marginBottom: '.75rem' }}>
            Não encontrou o que procurava?
          </p>
          <p style={{ color: 'var(--ink-light)', marginBottom: '1.5rem', fontSize: '.95rem' }}>
            Fale com a gente! Temos muito mais no estoque e podemos ajudá-lo a encontrar o produto ideal.
          </p>
          <button
            type="button"
            className="btn btn-whatsapp"
            onClick={() => openWhatsAppProduct('produto específico')}
            style={{ margin: '0 auto' }}
          >
            <MessageCircle size={16} />
            Falar com um especialista
          </button>
        </div>
      </section>
    </div>
  );
}
