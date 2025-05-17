import React, { useState } from 'react';
//import { Header } from "../../components/Header/Header";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', { email, senha });
    // Aqui você pode adicionar a lógica de autenticação
  };

  return (
    <div className="login-container">
      <h2>Entrar</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
