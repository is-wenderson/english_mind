import { motion } from 'framer-motion'; // Só precisamos do 'motion'
import './ComoFunciona.css';

function ComoFunciona() {
  
  // Define a animação de "lift" (flutuar) para o hover
  const cardHoverEffect = {
    scale: 1.05,
    y: -8,
    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.1)"
  };

  return (
    <section className="comofunciona-container-clean">
      <h2 className="comofunciona-title-clean">Seu aprendizado em 3 passos</h2>
      
      {/* 1. Um 'grid' para alinhar os 3 cards */}
      <div className="passos-grid">

        {/* --- Card 1 --- */}
        <motion.div
          className="passo-card-novo"
          whileHover={cardHoverEffect} // A mágica do hover
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="passo-icon">
            <img src="/images/passo1.png" alt="Ícone de Agendamento" />
          </div>
          <h3 className="passo-title-novo">Agende sua Aula</h3>
          <p className="passo-description-novo">
            Agende sua aula experimental gratuita de 30 minutos. É rápido e sem compromisso.
          </p>
        </motion.div>

        {/* --- Card 2 --- */}
        <motion.div
          className="passo-card-novo"
          whileHover={cardHoverEffect}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="passo-icon">
            <img src="/images/passo2.png" alt="Ícone de Definição de Nível" />
          </div>
          <h3 className="passo-title-novo">Defina seu Nível e Metas</h3>
          <p className="passo-description-novo">
            Na aula, nosso professor irá avaliar seu nível e, o mais importante, entender seus objetivos.
          </p>
        </motion.div>

        {/* --- Card 3 --- */}
        <motion.div
          className="passo-card-novo"
          whileHover={cardHoverEffect}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="passo-icon">
            <img src="/images/passo3.png" alt="Ícone de Início da Jornada" />
          </div>
          <h3 className="passo-title-novo">Inicie sua Jornada</h3>
          <p className="passo-description-novo">
            Com seu plano definido (particular ou grupo), você escolhe seus horários e começa sua jornada.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default ComoFunciona;