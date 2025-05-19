

import React from "react";
import "./style.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/footer/footer";
import { ActionButton } from "../../components/ActionButton/ActionButton";
import maisIcon from "./plus-solid.svg"; 

export const ImpactoSocial = () => {
  return (
    <>
    <Header/>
    <div className="impact-section">
  <h2 className="section-title">A criatividade muda pessoas</h2>

  <div className="stats-grid">
    {/* Projetos criativos */}
    <div className="stat-item">
      <img src={maisIcon} alt="stat-icon" />
      <h3 className="stat-value">100</h3>
      <p className="stat-label">Projetos criativos</p>
    </div>

    {/* Educadores e Pais */}
    <div className="stat-item">
    <img src={maisIcon} alt="stat-icon" />
      <h3 className="stat-value">2.500</h3>
      <p className="stat-label">Educadores e Pais desenvolvidos</p>
    </div>

    {/* Pessoas alcançadas */}
    <div className="stat-item">
    <img src={maisIcon} alt="stat-icon" />
      <h3 className="stat-value">30.000</h3>
      <p className="stat-label">Pessoas alcançadas</p>
    </div>

    {/* Estudantes impactados */}
    <div className="stat-item">
    <img src={maisIcon} alt="stat-icon" />
      <h3 className="stat-value">20.000</h3>
      <p className="stat-label">Estudantes impactados</p>
    </div>
  </div>

  <div className="images-row">
    <img
      src="https://placehold.co/455x408"
      alt="Imagem 1"
      className="impact-img"
    />
    <img
      src="https://placehold.co/310x292"
      alt="Imagem 2"
      className="impact-img"
    />
  </div>
</div>
<ActionButton/>
<Footer/>
    </>
  );
};
