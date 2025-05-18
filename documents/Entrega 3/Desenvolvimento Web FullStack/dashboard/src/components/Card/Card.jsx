import React from 'react';

export default function Card({ title, value, children }) {
  return (
    <div className="card">
      <span className="Quantia">{value}</span>
      <span className="Descricao">{title}</span>
      {children}
    </div>
  );
}
