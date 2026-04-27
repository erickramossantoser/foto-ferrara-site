import { Heart, Award, MapPin, Users } from 'lucide-react';
import './Sobre.css';

const valores = [
  { icon: <Heart size={22} strokeWidth={1.5} />, titulo: 'Tradição familiar', desc: 'Negócio passado de geração em geração, preservando o amor pela fotografia.' },
  { icon: <Award size={22} strokeWidth={1.5} />, titulo: 'Qualidade garantida', desc: 'Equipamentos modernos e profissionais para resultados que emocionam.' },
  { icon: <MapPin size={22} strokeWidth={1.5} />, titulo: 'No coração de SP', desc: 'Localizada no centro histórico, acessível a toda a cidade.' },
  { icon: <Users size={22} strokeWidth={1.5} />, titulo: 'Atendimento humano', desc: 'Equipe apaixonada por fotografia, pronta para tirar todas as suas dúvidas.' },
];

const linha_do_tempo = [
  { ano: '2000', evento: 'Fundação da Foto Ferrara pelo Sr. Renato Ferrara, na Rua Dom José de Barros.' },
  { ano: '1995', evento: 'Expansão do espaço físico e início da venda de câmeras fotográficas.' },
  { ano: '2005', evento: 'Adaptação à era digital: revelação digital, scanners e impressão de qualidade.' },
  { ano: '2015', evento: 'Retorno ao analógico: revelação de filmes volta a crescer entre jovens.' },
  { ano: 'Hoje', evento: 'Referência em revelação analógica e digital no centro de São Paulo.' },
];

export default function Sobre() {
  return (
    <div className="sobre">
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="page-hero sobre__hero">
        <div className="container">
          <p className="section-label fade-up">Quem somos</p>
          <h1 className="page-hero__title fade-up fade-up-1">
            Uma história de família,<br />
            <em>guardada em cada foto</em>
          </h1>
        </div>
      </section>

      {/* ── História ──────────────────────────────────────── */}
      <section className="section">
        <div className="container sobre__historia">
          <div className="sobre__historia-text">
            <div className="ornament"><div className="ornament-dot" /></div>
            <p className="section-label">Nossa história</p>
            <h2 className="section-title">Mais de 24 anos<br />revelando memórias</h2>
            <p className="section-body" style={{ marginBottom: '1.25rem' }}>
              A Foto Ferrara nasceu em 2000, quando o Sr. Renato Ferrara abriu as portas
              de uma pequena loja no coração de São Paulo, movido por sua paixão pela fotografia.
              O que começou como um pequeno laboratório de revelação tornou-se uma referência
              para fotógrafos amadores e profissionais de toda a cidade.
            </p>
            <p className="section-body">
              Hoje, gerenciada pelos filhos e netos do fundador, a Foto Ferrara mantém os
              valores que sempre guiaram a família: qualidade, atenção e amor genuíno pela
              imagem fotográfica. Vivemos o renascimento do analógico com a mesma emoção
              de quando abrimos as portas pela primeira vez.
            </p>

            <div className="sobre__badges">
              <div className="sobre__badge">
                <strong>+35</strong>
                <span>anos de história</span>
              </div>
              <div className="sobre__badge">
                <strong>+50k</strong>
                <span>fotos reveladas</span>
              </div>
              <div className="sobre__badge">
                <strong>3ª</strong>
                <span>geração na família</span>
              </div>
            </div>
          </div>

          {/* Visual card */}
          <div className="sobre__visual">
            <div className="sobre__film-card">
              <div className="sobre__film-perfs">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="sobre__film-perf" />
                ))}
              </div>
              <div className="sobre__film-frame">
                <span className="sobre__film-label">FOTO FERRARA</span>
                <span className="sobre__film-year">EST. 2000 · SÃO PAULO</span>
                <div className="sobre__film-icon">📷</div>
                <p className="sobre__film-quote italic">
                  "Cada foto é um instante de eternidade."
                </p>
              </div>
              <div className="sobre__film-perfs">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="sobre__film-perf" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Valores ──────────────────────────────────────── */}
      <section className="section bg-cream">
        <div className="container">
          <div className="section-header centered">
            <p className="section-label">Nossos pilares</p>
            <h2 className="section-title">O que nos move todos os dias</h2>
          </div>
          <div className="sobre__valores">
            {valores.map((v) => (
              <div key={v.titulo} className="valor-card">
                <div className="valor-card__icon">{v.icon}</div>
                <h3 className="valor-card__title">{v.titulo}</h3>
                <p className="valor-card__desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Linha do tempo ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <p className="section-label">Nossa trajetória</p>
            <h2 className="section-title">Uma linha do tempo<br />de momentos especiais</h2>
          </div>
          <div className="timeline">
            {linha_do_tempo.map((item, i) => (
              <div key={item.ano} className={`timeline__item${i % 2 === 0 ? '' : ' timeline__item--right'}`}>
                <div className="timeline__dot" />
                <div className="timeline__card">
                  <span className="timeline__ano">{item.ano}</span>
                  <p className="timeline__evento">{item.evento}</p>
                </div>
              </div>
            ))}
            <div className="timeline__line" />
          </div>
        </div>
      </section>
    </div>
  );
}
