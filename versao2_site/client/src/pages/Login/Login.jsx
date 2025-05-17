import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/usuario/login', {
        email,
        senha,
      });

      // Exibe mensagem de sucesso
      window.alert('Login realizado com sucesso!');
      
      // Salva o usuário no localStorage (opcional, caso queira salvar o login)
      localStorage.setItem('usuario', JSON.stringify(response.data.usuario));

      // Redireciona para a página principal
      navigate('/');
    } catch (error) {
      console.error('Erro no login:', error);
      if (error.response && error.response.data.error) {
        setMessage(error.response.data.error);
      } else {
        setMessage('Erro ao realizar login.');
      }
    }
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
      {message && <p>{message}</p>}
    </div>
  );
};