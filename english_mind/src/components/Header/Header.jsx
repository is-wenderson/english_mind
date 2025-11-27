import React, { useState } from 'react';
import './Header.css';

function Header({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  
  // Link do WhatsApp
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5521967040541&text=Ol%C3%A1%2C+gostaria+de+iniciar+um+atendimento%21&type=phone_number&app_absent=0";

  return (
    <header className="header-fixed">
      <div className="header-container">
        
        {/* 1. LOGO */}
        <div className="logo-area">
          <a href="/">
            <img 
              src="/images/logo_englishmind.avif" 
              alt="English Mind Logo" 
              className="header-logo"
            />
          </a>
        </div>

        {/* 2. MENU + BOTÃO DE TEMA */}
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#metodologia" onClick={() => setIsOpen(false)}>Metodologia</a>
          <a href="#material" onClick={() => setIsOpen(false)}>Material</a>
          <a href="#feedbacks" onClick={() => setIsOpen(false)}>Depoimentos</a>
          
          {/* Botão de Trocar Tema (Sol/Lua) */}
          <button onClick={toggleTheme} className="theme-toggle-btn" title="Trocar tema">
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>

        {/* 3. BOTÃO CTA (Desktop) */}
        <div className="cta-area">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="header-btn">
            Agendar Aula
          </a>
        </div>

        {/* 4. ÍCONE MENU MOBILE */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? '✖' : '☰'}
        </div>

      </div>
    </header>
  );
}

export default Header;