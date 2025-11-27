import './Diferenciais.css';

function Diferenciais() {
  return (
    <section className="diferenciais-container" id="metodologia">
      <div className="diferenciais-header">
        <h2 className="diferenciais-title">Sua Fluência, Suas Regras.</h2>
        <p className="diferenciais-subtitle">
          Escolha a metodologia que se adapta ao seu momento e objetivo.
        </p>
      </div>

      <div className="cards-wrapper">
        {/* Card 1: Imersão Parcial */}
        <div className="diferencial-card">
          <div className="icon-box">
            {/* Ícone de Livro/Apoio (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
          <h3 className="card-title">Aulas com Imersão Parcial</h3>
          <p className="card-description">
            Perfeito para quem está começando e quer construir confiança. 
            O foco é na compreensão, com explicações gramaticais e suporte 
            em português sempre que necessário.
          </p>
        </div>

        {/* Card 2: Imersão Total */}
        <div className="diferencial-card highlight-card">
          <div className="icon-box">
            {/* Ícone de Conversa/Mundo (SVG) */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a2.97 2.97 0 01-3.814-3.814l.048-.143a2.25 2.25 0 01.886-1.16l.766-.51c.48-.32 1.12-.227 1.489.216l.89 1.068a2.25 2.25 0 01.864.405z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25a9.75 9.75 0 017.497 15.888l-5.12-5.12a2.25 2.25 0 00-3.182 0l-5.12 5.12A9.75 9.75 0 0112 2.25z" />
            </svg>
          </div>
          <h3 className="card-title">Aulas com Imersão Total</h3>
          <p className="card-description">
            Para quem quer destravar o idioma. A aula é 100% em inglês, 
            focada em conversação nativa, escuta ativa e desenvolvimento 
            do pensamento rápido no idioma.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Diferenciais;