import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import logoIC from "./Logo_TextoBranco.svg";
import "./login.css";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Validação básica dos campos
    if (!email || !senha) {
      setMessage('Preencha todos os campos');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        email,
        senha,
      });

      window.alert('Login realizado com sucesso!');
      localStorage.setItem('usuario', JSON.stringify(response.data.usuario));
      
      // Redireciona para a página inicial
      navigate('/');
      
    } catch (error) {
      if (error.response && error.response.data.error) {
        setMessage(error.response.data.error);
      } else {
        setMessage('Erro ao realizar login. Tente novamente.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-logo">
        <Link to="/">
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
          <Link to="/recuperar-senha">Esqueci minha senha</Link>
          <Link to="/signup">Criar conta</Link>
        </div>
      </form>
    </div>
  );
};