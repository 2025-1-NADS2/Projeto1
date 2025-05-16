// ColaboradorCard.jsx
import React from "react";



export const ColaboradorCard = ({ nome, cargo, foto }) => (
  <div className="colaborador-card">
    <img src={foto} alt={nome} className="colaborador-foto" />
    <h3>{nome}</h3>
    <p>{cargo}</p>

  </div>
);

