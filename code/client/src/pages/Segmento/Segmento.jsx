import React from "react";
import bookSolid from "./img/book-solid.svg";
import heartPulseSolid from "./img/heart-pulse-solid.svg";
import spaceAwesomeBrandsSolid1 from "./img/space-awesome-brands-solid.svg";
import suitcaseSolid from "./img/suitcase-solid.svg";
import { Header } from "../../components/Header/Header";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import { Footer } from "../../components/footer/footer";
//import { Noticias } from "./Noticias";
import img0 from "./img/Frame 2.png";
import img1Static from "./img/criancas-aprendendo.png";
import img1Gif from "./img/criancas-aprendendo.gif";
import img2Static from "./img/homem-de-meia-idade.jpg";
import img2Gif from "./img/GIF-homem-de-meia-idade.gif";
import img3Static from "./img/modelo-masculino-elegante-hipster.jpg"
import img3Gif from "./img/modelo-masculino-elegante-hipster.gif";
import img4Static from "./img/jovem-trabalhando.png";
import img4Gif from "./img/jovem-trabalhando.gif";
import "./style.css";

export const Segmento = () => {
  const segmentos = [
    {
      icon: bookSolid,
      title: "Aprendizado",
      faixa: "5 a 21 anos",
      description:
        "Incentivo ao raciocínio lógico e pensamento crítico para crianças e jovens, com foco em matemática, computação e empreendedorismo.",
      imagem: { gif: img1Gif, static: img1Static },
    },
    {
      icon: spaceAwesomeBrandsSolid1,
      title: "Primeiro Emprego",
      faixa: "16 a 20 anos",
      description:
        "Capacitação de jovens para o mercado de trabalho com desenvolvimento de habilidades, competências e postura profissional.",
      imagem: { gif: img4Gif, static: img4Static },
      },
    {
      icon: suitcaseSolid,
      title: "Recolocação",
      faixa: "21 a 60 anos",
      description:
        "Apoio à reinserção profissional por meio de atualização, capacitação e desenvolvimento contínuo.",
      imagem: { gif: img2Gif, static: img2Static },
    },
    {
      icon: heartPulseSolid,
      title: "Bem-estar",
      faixa: "+50 anos",
      description:
        "Promoção da saúde física e mental com atividades sociais, terapias, palestras e ações solidárias.",
      imagem: { gif: img3Gif, static: img3Static },
      },
  ];

  return (
    <main className="all-section">
      <Header />
      <div className="segmento-banner">
          <img src={img0} alt="Jovem apontando" />
        
        </div>
      <section className="segmento-container">
  
        <h2>Conheça nossos segmentos</h2>
        
        <div className="segmento-grid">
          {segmentos.map(({ imagem, icon, title, faixa, description }, index) => (
            <div key={index} className="segmento-card">
                        {typeof imagem === "object" ? (
              <div className="gif-hover-container">
                <img src={imagem.static} alt={title} className="static-img" />
                <img src={imagem.gif} alt={title} className="gif-img" />
              </div>
            ) : (
              <img src={imagem} alt={title} className="segmento-img" />
            )}


            <div className="segmento-content-horizontal">
              <div className="segmento-icon-wrapper">
                <img src={icon} alt={title} className="segmento-icon" />
              </div>
              <div className="segmento-text">
                <h3>{title}</h3>
                <span className="segmento-faixa">{faixa}</span>
                <p>{description}</p>
                
              </div>
            </div>

            </div>
          ))}
        </div>
      </section>
        <ActionButton/>
      <Footer />
    </main>
  );
};
