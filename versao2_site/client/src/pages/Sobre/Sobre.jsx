import React from "react";
import bullseyeSolid from "./bullseye-solid.svg";
import eyeSolid from "./eye-solid.svg";
import medalSolid from "./medal-solid.svg";

import { Segmento } from "../Segmento";
import "./style.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/footer";
import criancasFoto from "../Sobre/perspectiva-de-adolescentes-diversos-que-praticam-actividades-de-saude-e-bem-estar-para-si-mesmos-e-para-sua-comunidade.jpg";


export const Sobre = () => {
  return (
   
  <>
      <Header/>
        <div className="sobre-banner">
            <img src={criancasFoto} alt="Criancas" />
          
         </div>
   <section className="sobre-section">

 
  <h2 className="Titulo-pagina">Sobre o Instituto Criativo</h2>

  <p className="sobre-descricao">
    O Instituto Criativo é uma ONG que nasceu para transformar a vida das pessoas por meio da
    educação criativa e inovadora, empoderando-as de conhecimento de qualidade e diferenciado
    que são aplicados nos estudos, negócios e na própria vida contribuindo com a evolução da sociedade.
  </p>

  <div className="sobre-cards">
    <article className="sobre-card">
      <img src={bullseyeSolid} alt="Ícone de Missão" className="sobre-icon" />
      <h3>Missão</h3>
      <p>Desenvolver e compartilhar projetos de educação criativa e inovadora que transformam a sociedade.</p>
    </article>

    <article className="sobre-card">
      <img src={eyeSolid} alt="Ícone de Visão" className="sobre-icon" />
      <h3>Visão</h3>
      <p>Ser referência na educação, empreendedorismo e eventos criativos por meio do aprendizado inovador.</p>
    </article>

    <article className="sobre-card">
      <img src={medalSolid} alt="Ícone de Valores" className="sobre-icon" />
      <h3>Valores</h3>
      <p>Sustentabilidade, qualidade, criatividade, ética, respeito, colaboração, comprometimento, conhecimento.</p>
    </article>

   

  </div>
  
</section>
<Footer/>
</>

    
  );
};
