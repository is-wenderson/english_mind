import './Footer.css';

function Footer() {
  return (
    // Adicionamos o ID "contato" aqui para o link do menu funcionar
    <footer className="footer-container" id="contato">
      <div className="footer-content">
        <div className="footer-info">
          <h3>Entre em contato</h3>
          <p>Email: duvidas@englishmind.net</p>
          <p>WhatsApp: +55 21 96647-5267</p>
        </div>
        <div className="footer-social">
          <h3>Nos siga</h3>
          {/* Este link deve ir para o Instagram da escola */}
          <a
            href="https://www.instagram.com/english.mind.school"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 English Mind School - CNPJ: 54.564.451/0001-80</p>
      </div>
    </footer>
  );
}

export default Footer;