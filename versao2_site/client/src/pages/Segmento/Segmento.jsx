import React from "react";
import bookSolid from "./book-solid.svg";
import heartPulseSolid from "./heart-pulse-solid.svg";
import spaceAwesomeBrandsSolid1 from "./space-awesome-brands-solid.svg";
import suitcaseSolid from "./suitcase-solid.svg";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/footer";
import img1 from "./modelo-masculino-elegante-hipster-em-oculos-apontando-os-dedos-para-baixo-sorrindo-satisfeito-com-camera-recomendando-p.jpg";
import img2 from "./book-solid.svg";
import img3 from "./book-solid.svg";

import "./style.css";

export const Segmento = () => {
 
  const segmentos = [
    
    {
      icon: bookSolid,
      title: "Aprendizado",
      faixa: "5 a 21 anos",
      description:
        "Projeto de incentivo ao raciocínio lógico de crianças para desenvolver seu pensamento crítico, empreendedorismo, matemática e computação.",
    },
    {
      icon: spaceAwesomeBrandsSolid1,
      title: "Primeiro Emprego",
      faixa: "16 a 20 anos",
      description:
        "Jovens em busca do primeiro emprego, para fornecer competências e habilidades, desenvolvimento pessoal e conhecimentos necessários para ingressar no mercado de trabalho.",
    },
    {
      icon: suitcaseSolid,
      title: "Recolocação",
      faixa: "21 a 60 anos",
      description:
        "Projeto de apoio ao retorno ao mercado de trabalho com foco em atualização, capacitação e desenvolvimento profissional contínuo.",
    },
    {
      icon: heartPulseSolid,
      title: "Bem-estar",
      faixa: "+50 anos",
      description:
        "Promovendo assistência para desenvolvimento social, por meio de atividades de conversação, terapias, doação de alimentos e palestras de reeducação da mente.",
    },
  ];

  return (

    <main className="all-section">
   
        <Header />
       
    <section className="segmento-section">
       
    <img src={img1} alt="homemJoven" className="segmento-title">
    
    <h2 className="Titulo-pagina">Conheça nossos segmentos</h2>
    </img>
    
  
      

      <div className="segmento-cards">
        {segmentos.map(({ icon, title, faixa, description }, index) => (
          
             <div key={index} className="card-bloco">
            <div className="segmento-card">
              <img src={icon} alt={title} className="segmento-icon" />
              <h3>{title}</h3>
              <p>
                {faixa} <br />
                {description}
              </p>
            </div>

            {/* Adiciona imagem entre os cards, exceto após o último */}
            {index < segmentos.length - 1 && (
              <img
                src={[img1, img2, img3][index]}
                alt={`Imagem entre ${segmentos[index].title} e ${segmentos[index + 1].title}`}
                className="imagem-entre-cards"
              />
            )}
          </div>
        ))}
      </div>


    </section>
    <Footer/>
    </main>
  );
};
