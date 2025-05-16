import React, { useState } from 'react';

export const Signup = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Cadastro:', { nome, email, senha });
    // Aqui você pode adicionar a lógica de cadastro
  };

  return (
    <div className="signup-container">
      <h2>Criar Conta</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};
