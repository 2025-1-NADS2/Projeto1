import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-brand">
          <p>Instituto Criativo</p>
          <p>Transformando vidas através da educação, tecnologia e criatividade.</p>
        </div>

        <div className="footer-links">
          <h4>Links úteis</h4>
          <ul>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/eventos">Eventos</a></li>
            <li><a href="/parceiros">Parceiros</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h4>Conecte-se</h4>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-linkedin-in" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Instituto Criativo. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
