import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Tag } from 'lucide-react';
import { openWhatsAppProduct } from '../hooks/useWhatsApp';
import produtos from '../data/produtos.json';
import './Produtos.css';

export default function ProdutoDetalhe() {
  const { id } = useParams();
  const produto = produtos.find((item) => String(item.id) === String(id));

  if (!produto) {
    return (
      <div className="produto-detalhe produto-detalhe--empty">
        <section className="page-hero">
          <div className="container">
            <Link to="/produtos" className="produto-detalhe__back">
              <ArrowLeft size={16} />
              Voltar para produtos
            </Link>
            <p className="section-label fade-up">Produto</p>
            <h1 className="page-hero__title fade-up fade-up-1">Produto não encontrado</h1>
          </div>
        </section>
      </div>
    );
  }

  const detalhes = produto.detalhes?.length
    ? produto.detalhes
    : [
        `Categoria: ${produto.categoria}.`,
        produto.destaque
          ? 'Produto em destaque no catálogo da Foto Ferrara.'
          : 'Produto disponível para consulta com a equipe.',
        'Consulte disponibilidade, valores e prazos pelo WhatsApp.',
      ];

  return (
    <div className="produto-detalhe">
      <section className="page-hero produto-detalhe__hero">
        <div className="container">
          <Link to="/produtos" className="produto-detalhe__back">
            <ArrowLeft size={16} />
            Voltar para produtos
          </Link>
          <p className="section-label fade-up">Produto</p>
          <h1 className="page-hero__title fade-up fade-up-1">{produto.nome}</h1>
        </div>
      </section>

      <section className="section produto-detalhe__section">
        <div className="container produto-detalhe__grid">
          <div className="produto-detalhe__media" style={{ '--produto-cor': produto.cor || '#8B6543' }}>
            {produto.imagem ? (
              <img src={produto.imagem} alt={produto.nome} />
            ) : (
              <span>{produto.emoji}</span>
            )}
          </div>

          <div className="produto-detalhe__content">
            <div className="produto-detalhe__meta">
              <span>
                <Tag size={15} />
                {produto.categoria}
              </span>
              {produto.destaque && <strong>Destaque</strong>}
            </div>

            <h2>Detalhes do produto</h2>
            <p>{produto.descricao}</p>

            <ul className="produto-detalhe__list">
              {detalhes.map((detalhe) => (
                <li key={detalhe}>{detalhe}</li>
              ))}
            </ul>

            <div className="produto-detalhe__actions">
              <button
                type="button"
                className="btn btn-whatsapp"
                onClick={() => openWhatsAppProduct(produto.nome)}
              >
                <MessageCircle size={16} />
                Consultar no WhatsApp
              </button>
              <Link to="/produtos" className="btn btn-outline">
                Voltar para produtos
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
