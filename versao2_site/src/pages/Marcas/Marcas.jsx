import React from "react";
//import { Link } from "react-router-dom";
import googleLogo from "./img/google-logo.svg";
import ibmLogo from "./img/ibm-logo.svg"
import uspLogo from "./img/usp-logo.svg";
import sebraeLogo from "./img/Sebrae-Logo.png";
import univespLogo from "./img/logo-univesp_completo_cor-positivo.svg";
import esmLogo from "./img/ESM-1-1.png";
import msLogo from "./img/microsoft-logo.svg";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/footer";
import "./style.css";

export const Marcas = () => {
  return (
<>
      <header className="sobre-all">
          <Header/>
          </header>
    <div className="marcas">
    
   
      <h2 className="Titulo-pagina">Estamos conectados com grandes marcas</h2>



      {/* Galeria de Marcas */}
      <div className="brands-gallery">
        <img src={googleLogo} alt="Google" />
        <img src={esmLogo} alt="Apple" />
        <img src={uspLogo} alt="USP" />
        <img src={ibmLogo} alt="IBM" />
        <img src={univespLogo} alt="Univesp" />
        <img src={msLogo} alt="MS" />
        <img src={sebraeLogo} alt="Sebrae" />
        <div className="fatec-text">
        <span className="fatec-name">Fatec</span><br />
        <span className="fatec-subname">Mogi das Cruzes</span>
      </div>
      <div className="fatec-text">
        <span className="fatec-name">Fatec</span><br />
        <span className="fatec-subname">Osasco</span>
      </div>
        
      </div>
    </div>
    <Footer/>
    </>
  );
};
