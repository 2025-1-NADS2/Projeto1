import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoIC from "./Logo.svg";
import loginLogo from "./icons8-male-user.gif";

import "./Header.css";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">

      <div className="menu-bar">

        <div className="logo-area">
          <Link to="/homepage">
            <img
              className="logoICR"
              src={logoIC}
              alt="Logo Instituto Criativo"
            />
          </Link>
          <h1 className="brand-name"></h1>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <nav className={`nav-items ${menuOpen ? "open" : ""}`}>
          <Link to="/sobre" onClick={() => setMenuOpen(false)}>Sobre</Link>
          <Link to="/segmento" onClick={() => setMenuOpen(false)}>Segmentos</Link>
          <Link to="/colaboradores" onClick={() => setMenuOpen(false)}>Colaboradores</Link>
          <Link to="/impacto-social" onClick={() => setMenuOpen(false)}>Impacto Social</Link>
          <Link to="/marcas" onClick={() => setMenuOpen(false)}>Marcas</Link>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
          <Link to="/signup_adm" onClick={() => setMenuOpen(false)}>ADM</Link>

          <a href="#"><button className="donate-button">Doar</button></a>
          <a
            className="whatsapp"
            href="https://api.whatsapp.com/send?phone=5511910747492&text=Quero%20falar%20sobre%20o%20Instituto%20Criativo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://c.animaapp.com/3M7sPxPP/img/vector.svg"
              alt="WhatsApp"
            />
          </a>

          <Link to="/login" className="login-button">
            <img
              src={loginLogo}
              alt="Login"
              className="login-icon"
            />

          </Link>
        </nav>
      </div>
    </header>
  );
};
