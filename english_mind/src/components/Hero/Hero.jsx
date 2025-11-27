import React from 'react';
import './Hero.css';

function Hero() {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5521967040541&text=Ol%C3%A1%2C+gostaria+de+iniciar+um+atendimento%21&type=phone_number&app_absent=0";

  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">
          O seu caminho para a fluência em inglês começa aqui.
        </h1>
        <p className="hero-subtitle">
          Aulas ao vivo, flexíveis e com a metodologia de imersão que você
          escolher. Conheça a English Mind.
        </p>
        
        <div className="hero-actions">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hero-cta-button">
            Agendar Aula Experimental
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;