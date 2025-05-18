import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logoIC from "./Logo_TextoBranco.svg";
import "./login.css";

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

      window.alert('Login realizado com sucesso!');
      localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
      navigate('/');
    } catch (error) {
      if (error.response && error.response.data.error) {
        setMessage(error.response.data.error);
      } else {
        setMessage('Erro ao realizar login.');
      }
    }
  };

  return (
    <div className="login-container">
      {/* Logo simples - substitua pela sua */}
      <div className="login-logo">
          <Link to="/homepage">
            <img
              className="login-logo"
              src={logoIC}
              alt="Logo Instituto Criativo"
            />
          </Link>
      </div>

      <form onSubmit={handleLogin}>
        <h2>Entrar</h2>

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

        {message && <p className="error-message">{message}</p>}

        <div className="links">
          <a href="#esqueci">Esqueci minha senha</a>
          <a href="#criar">Criar conta</a>
        </div>
      </form>
    </div>
  );
};
