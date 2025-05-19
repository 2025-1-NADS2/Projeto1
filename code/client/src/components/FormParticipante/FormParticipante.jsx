import React, { useState } from 'react';

export default function FormParticipante({ onAdd }) {
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome && cargo) {
      onAdd({ nome, cargo });
      setNome('');
      setCargo('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cargo"
        value={cargo}
        onChange={(e) => setCargo(e.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}
